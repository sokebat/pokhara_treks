import { Suspense } from "react";
import type { Metadata } from "next";

import Logo from "@/components/shared/Logo";
import LoginForm from "@/features/auth/components/LoginForm";

import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Admin Login",
  description: "Sign in to the Pokhara Treks admin dashboard.",
  path: "/login",
  noIndex: true,
});

export default function LoginPage() {
  return (
    <div className="flex min-h-full flex-1 items-center justify-center bg-muted/30 px-4 py-16">
      <div className="w-full max-w-sm rounded-md border border-border bg-card p-8">
        <div className="flex flex-col items-center text-center">
          <Logo className="h-12 w-auto" />
          <h1 className="mt-6 text-lg font-bold text-foreground sm:text-xl">
            Admin Login
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Sign in to manage the site.
          </p>
        </div>

        <div className="mt-8">
          <Suspense fallback={null}>
            <LoginForm />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
