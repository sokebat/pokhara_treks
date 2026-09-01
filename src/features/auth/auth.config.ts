import type { NextAuthConfig } from "next-auth";

/**
 * Base config shared between the full auth setup (src/features/auth/auth.ts)
 * and the proxy (src/proxy.ts). Kept free of the Credentials provider and any
 * database/bcrypt imports so the proxy stays lightweight — it only needs
 * to read the session token, not re-verify a password on every request.
 */
export const authConfig = {
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = Boolean(auth?.user);
      const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard");

      if (isOnDashboard) {
        return isLoggedIn;
      }

      if (isLoggedIn && request.nextUrl.pathname === "/login") {
        return Response.redirect(new URL("/dashboard", request.nextUrl));
      }

      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
