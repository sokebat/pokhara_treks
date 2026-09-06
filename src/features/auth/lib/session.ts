import { NextResponse } from "next/server";
import { redirect } from "next/navigation";

import { auth } from "@/features/auth/auth";

/** Decode the JWT cookie. Does not query the database. */
export async function getSession() {
  return auth();
}

export async function requireAdmin() {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  return session;
}

export async function requireApiAdmin() {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      session: null,
      error: NextResponse.json({ error: "Unauthorized" }, { status: 401 }),
    };
  }

  return { session, error: null };
}
