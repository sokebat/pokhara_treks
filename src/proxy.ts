import NextAuth from "next-auth";

import { authConfig } from "@/features/auth/auth.config";

const { auth } = NextAuth(authConfig);

/**
 * Next.js 16 proxy: reads the signed JWT cookie and runs `authorized`.
 * No database round-trip — that only happens at login.
 */
export default auth;

export const config = {
  matcher: ["/dashboard", "/dashboard/:path*", "/login"],
};
