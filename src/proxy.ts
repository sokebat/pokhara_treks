import NextAuth from "next-auth";

import { authConfig } from "@/auth.config";

// Next.js 16 renamed `middleware.ts` to `proxy.ts` (same behavior, new name).
// This intentionally builds on `authConfig` alone (no Credentials provider,
// no database, no bcrypt) so route protection only reads the session token
// instead of re-verifying a password on every request.
export default NextAuth(authConfig).auth;

// Dashboard route protection is paused for now — /dashboard is reachable
// without logging in. Add "/dashboard/:path*" (and "/login") back to the
// matcher below to re-enable it; the rest of the auth setup (schema, login
// page, Credentials provider) is untouched and ready to go.
export const config = {
  matcher: [],
};
