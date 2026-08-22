import NextAuth from "next-auth";

import { authConfig } from "@/auth.config";

// Next.js 16 renamed `middleware.ts` to `proxy.ts` (same behavior, new name).
// This intentionally builds on `authConfig` alone (no Credentials provider,
// no database, no bcrypt) so route protection only reads the session token
// instead of re-verifying a password on every request.
export default NextAuth(authConfig).auth;

export const config = {
  matcher: ["/dashboard/:path*", "/login"],
};
