"use server";

import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";
import bcrypt from "bcryptjs";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { unauthenticatedAction } from "@/lib/safe-action";
import { AdminAccess } from "@/lib/generated/prisma/client";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "fallback-secret-for-development"
);

const COOKIE_NAME = "admin_token";

export interface AdminSession {
  id: string;
  username: string;
  access: AdminAccess;
}

const loginSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(1, "Password is required"),
});

export async function createToken(admin: AdminSession): Promise<string> {
  const token = await new SignJWT({
    id: admin.id,
    username: admin.username,
    access: admin.access,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("24h")
    .sign(JWT_SECRET);

  return token;
}

export async function verifyToken(token: string): Promise<AdminSession | null> {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return {
      id: payload.id as string,
      username: payload.username as string,
      access: payload.access as AdminAccess,
    };
  } catch {
    return null;
  }
}

export async function getAdminSession(): Promise<AdminSession | null> {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  
  if (!token) {
    return null;
  }

  return verifyToken(token);
}

export async function setAuthCookie(token: string) {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24, // 24 hours
    path: "/",
  });
}

export async function clearAuthCookie() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export const loginAction = unauthenticatedAction
  .createServerAction()
  .input(loginSchema)
  .handler(async ({ input }) => {
    const admin = await prisma.admin.findUnique({
      where: { username: input.username },
    });

    if (!admin) {
      throw new Error("Invalid credentials");
    }

    const isValidPassword = await bcrypt.compare(input.password, admin.password);

    if (!isValidPassword) {
      throw new Error("Invalid credentials");
    }

    const session: AdminSession = {
      id: admin.id,
      username: admin.username,
      access: admin.access,
    };

    const token = await createToken(session);
    await setAuthCookie(token);

    return { success: true, admin: session };
  });

export const logoutAction = unauthenticatedAction
  .createServerAction()
  .handler(async () => {
    await clearAuthCookie();
    return { success: true };
  });