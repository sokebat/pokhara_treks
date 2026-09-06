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
