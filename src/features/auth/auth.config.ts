import type { NextAuthConfig } from "next-auth";

export const SESSION_MAX_AGE = 60 * 60 * 8;

const isProd = process.env.NODE_ENV === "production";

/**
 * Edge-safe config used by `src/proxy.ts`.
 * Validates the signed JWT cookie only — no database, no bcrypt.
 */
export const authConfig = {
  trustHost: true,
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
    maxAge: SESSION_MAX_AGE,
    updateAge: 60 * 30,
  },
  jwt: {
    maxAge: SESSION_MAX_AGE,
  },
  useSecureCookies: isProd,
  cookies: {
    sessionToken: {
      name: isProd
        ? "__Secure-authjs.session-token"
        : "authjs.session-token",
      options: {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        secure: isProd,
      },
    },
  },
  callbacks: {
    authorized({ auth, request }) {
      const isLoggedIn = Boolean(auth?.user);
      const { pathname } = request.nextUrl;

      if (pathname.startsWith("/dashboard")) {
        return isLoggedIn;
      }

      if (isLoggedIn && pathname === "/login") {
        return Response.redirect(new URL("/dashboard", request.nextUrl));
      }

      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;
