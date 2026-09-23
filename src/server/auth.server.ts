import { useSession } from "@tanstack/react-start/server";

export type AdminSession = {
  authenticated?: boolean;
  email?: string;
  role?: "admin";
};

function requiredEnv(name: string) {
  const value = process.env[name];

  if (!value) {
    throw new Error(`${name} is not configured`);
  }

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

export async function verifyPassword(
  password: string,
  encoded: string,
) {
  const binary = atob(encoded);
  const raw = Uint8Array.from(binary, (char) => char.charCodeAt(0));

  if (raw.length !== 48) {
    return false;
  }

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
    {
      name: "PBKDF2",
      salt,
      iterations: 310_000,
      hash: "SHA-256",
    },
    key,
    256,
  );

  const actual = new Uint8Array(bits);

  if (actual.length !== expected.length) {
    return false;
  }

  let diff = 0;

  for (let i = 0; i < actual.length; i++) {
    diff |= actual[i] ^ expected[i];
  }

  return diff === 0;
}

export function getAdminCredentials() {
  return {
    email: requiredEnv("ADMIN_EMAIL").toLowerCase(),
    passwordHash: requiredEnv("ADMIN_PASSWORD_HASH"),
  };
}
