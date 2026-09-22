import { createServerFn } from "@tanstack/react-start";
import { useSession } from "@tanstack/react-start/server";
import { redirect } from "@tanstack/react-router";
import { z } from "zod";

export type AdminSession = {
  authenticated?: boolean;
  email?: string;
  role?: "admin";
};

function requiredEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`${name} is not configured`);
  return value;
}

export function useAdminSession() {
  return useSession<AdminSession>({
    name: "brandline-admin-session",
    password: requiredEnv("SESSION_SECRET"),
    cookie: {
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      httpOnly: true,
      path: "/",
    },
  });
}

async function verifyPassword(password: string, encoded: string) {
  // ADMIN_PASSWORD_HASH format: base64(salt[16 bytes] + derivedKey[32 bytes]).
  const binary = atob(encoded);
  const raw = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  if (raw.length !== 48) return false;

  const salt = raw.slice(0, 16);
  const expected = raw.slice(16);
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"],
  );
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", salt, iterations: 310_000, hash: "SHA-256" },
    key,
    256,
  );
  const actual = new Uint8Array(bits);
  if (actual.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < actual.length; i++) diff |= actual[i] ^ expected[i];
  return diff === 0;
}

const loginSchema = z.object({
  email: z.string().email().max(255),
  password: z.string().min(8).max(128),
});

// Basic process-local guard. For multi-instance production deployments,
// replace this with a shared rate limiter (Redis/KV/Durable Object).
const attempts = new Map<string, { count: number; resetAt: number }>();

export const loginAdmin = createServerFn({ method: "POST" })
  .validator((data) => loginSchema.parse(data))
  .handler(async ({ data }) => {
    const now = Date.now();
    const key = data.email.toLowerCase();
    const current = attempts.get(key);
    if (current && now < current.resetAt && current.count >= 5) {
      return { ok: false as const, error: "Too many attempts. Try again in 15 minutes." };
    }

    const adminEmail = requiredEnv("ADMIN_EMAIL").toLowerCase();
    const passwordHash = requiredEnv("ADMIN_PASSWORD_HASH");
    const validEmail = key === adminEmail;
    const validPassword = await verifyPassword(data.password, passwordHash);

    if (!validEmail || !validPassword) {
      const next = current && now < current.resetAt
        ? { count: current.count + 1, resetAt: current.resetAt }
        : { count: 1, resetAt: now + 15 * 60 * 1000 };
      attempts.set(key, next);
      return { ok: false as const, error: "Invalid email or password." };
    }

    attempts.delete(key);
    const session = await useAdminSession();
    await session.update({ authenticated: true, email: adminEmail, role: "admin" });
    return { ok: true as const };
  });

export const getAdminSession = createServerFn({ method: "GET" }).handler(async () => {
  const session = await useAdminSession();
  if (!session.data.authenticated || session.data.role !== "admin") return null;
  return { email: session.data.email ?? "", role: "admin" as const };
});

export const logoutAdmin = createServerFn({ method: "POST" }).handler(async () => {
  const session = await useAdminSession();
  await session.clear();
  throw redirect({ to: "/admin-login" });
});
