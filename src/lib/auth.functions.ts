import { createServerFn } from "@tanstack/react-start";
import { redirect } from "@tanstack/react-router";
import { z } from "zod";

import {
  getAdminCredentials,
  useAdminSession,
  verifyPassword,
} from "../server/auth.server";

const loginSchema = z.object({
  email: z.string().email().max(255),
  password: z.string().min(8).max(128),
});

// Basic process-local guard. Replace with a shared rate limiter
// for a multi-instance production deployment.
const attempts = new Map<string, { count: number; resetAt: number }>();

export const loginAdmin = createServerFn({ method: "POST" })
  .validator((data) => loginSchema.parse(data))
  .handler(async ({ data }) => {
    const now = Date.now();
    const key = data.email.toLowerCase();
    const current = attempts.get(key);

    if (current && now < current.resetAt && current.count >= 5) {
      return {
        ok: false as const,
        error: "Too many attempts. Try again in 15 minutes.",
      };
    }

    const { email: adminEmail, passwordHash } = getAdminCredentials();
    const validEmail = key === adminEmail;
    const validPassword = await verifyPassword(data.password, passwordHash);

    if (!validEmail || !validPassword) {
      const next =
        current && now < current.resetAt
          ? {
              count: current.count + 1,
              resetAt: current.resetAt,
            }
          : {
              count: 1,
              resetAt: now + 15 * 60 * 1000,
            };

      attempts.set(key, next);

      return {
        ok: false as const,
        error: "Invalid email or password.",
      };
    }

    attempts.delete(key);

    const session = await useAdminSession();

    await session.update({
      authenticated: true,
      email: adminEmail,
      role: "admin",
    });

    return {
      ok: true as const,
    };
  });

export const getAdminSession = createServerFn({
  method: "GET",
}).handler(async () => {
  const session = await useAdminSession();

  if (!session.data.authenticated || session.data.role !== "admin") {
    return null;
  }

  return {
    email: session.data.email ?? "",
    role: "admin" as const,
  };
});

export const logoutAdmin = createServerFn({ method: "POST" }).handler(
  async () => {
    const session = await useAdminSession();

    await session.clear();

    throw redirect({
      to: "/admin-login",
    });
  },
);
