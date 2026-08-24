import type { Metadata } from "next";
import Link from "next/link";
import { CompassIcon, HomeIcon, MountainSnowIcon } from "lucide-react";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { navItems } from "@/constant/nav";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

const quickLinks = navItems.filter((item) => item.href !== "/blog");

export default function NotFound() {
  return (
    <>
      <NavBar />
      <main className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-linear-to-b from-muted/60 to-background"
        />

        <Container>
          <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center py-16 text-center">
            <div className="relative flex items-center justify-center">
              <span
                aria-hidden
                className="text-[7rem] leading-none font-black text-primary/10 select-none sm:text-[9rem]"
              >
                404
              </span>
              <span className="absolute flex size-16 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg sm:size-20">
                <MountainSnowIcon className="size-8 sm:size-10" />
              </span>
            </div>

            <p className="mt-4 text-sm font-semibold tracking-wide text-accent uppercase">
              Error 404
            </p>
            <h1 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
              Looks like this trail doesn&apos;t exist
            </h1>
            <p className="mt-4 text-muted-foreground">
              The page you&apos;re looking for may have been moved, renamed, or
              is temporarily unavailable. Let&apos;s get you back on track.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Button
                nativeButton={false}
                render={<Link href="/" />}
                size="lg"
                className="rounded-md"
              >
                <HomeIcon className="size-4" />
                Back to Home
              </Button>
              <Button
                nativeButton={false}
                render={<Link href="/trekking-and-hiking" />}
                variant="outline"
                size="lg"
                className="rounded-md"
              >
                <CompassIcon className="size-4" />
                Explore Treks
              </Button>
            </div>

            <div className="mt-12 w-full border-t border-border pt-8">
              <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                Popular Sections
              </p>
              <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                {quickLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-border px-4 py-1.5 text-sm font-medium text-foreground/80 transition-colors hover:border-accent hover:text-accent"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </main>
      <Footer />
    </>
  );
}
