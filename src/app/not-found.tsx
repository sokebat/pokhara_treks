import {
  TbArrowRight,
  TbCompass,
  TbHome,
  TbMail,
  TbMountain,
  TbNews,
  TbUsers,
} from "react-icons/tb";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { NavBar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "This trail doesn't exist. Let's get you back on the path.",
};

const trails = [
  {
    href: "/",
    label: "Home",
    description: "Start again from Lakeside.",
    icon: TbHome,
  },
  {
    href: "/trekking-and-hiking",
    label: "Treks",
    description: "Routes across Nepal.",
    icon: TbMountain,
  },
  {
    href: "/about-us",
    label: "About us",
    description: "Our story and guides.",
    icon: TbUsers,
  },
  {
    href: "/blogs",
    label: "Blogs",
    description: "Guides and trail notes.",
    icon: TbNews,
  },
  {
    href: "/customize-my-trip",
    label: "Plan a trip",
    description: "We'll build it around you.",
    icon: TbCompass,
  },
  {
    href: "/contact",
    label: "Contact",
    description: "Talk to the office.",
    icon: TbMail,
  },
];

export default function NotFound() {
  return (
    <>
      <NavBar />
      <main>
        <section className="relative isolate overflow-hidden bg-primary">
          <Image
            src="/images/hero-women-trekking.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-[68%_center]"
          />
          <div aria-hidden className="absolute inset-0 bg-primary/75" />
          <div
            aria-hidden
            className="absolute inset-0 bg-linear-to-r from-primary via-primary/80 to-primary/40"
          />

          <Container>
            <div className="relative grid items-center gap-8 py-12 sm:py-16 lg:grid-cols-2 lg:gap-12 lg:py-20">
              <div>
                <p className="text-sm font-semibold tracking-wide text-accent uppercase">
                  Error 404
                </p>
                <h1 className="mt-2 text-2xl font-bold tracking-tight text-primary-foreground sm:text-4xl lg:text-5xl">
                  This trail doesn&apos;t exist.
                </h1>
                <p className="mt-4 max-w-lg text-primary-foreground/80">
                  The page you&apos;re looking for has moved, been renamed, or
                  was never on the map. We&apos;ll get you back to a path that
                  does.
                </p>

                <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
                  <Button
                    nativeButton={false}
                    render={<Link href="/" />}
                    variant="accent"
                    size="xl"
                    className="w-full sm:w-auto"
                  >
                    <TbHome className="size-4" />
                    Back to Home
                  </Button>
                  <Button
                    nativeButton={false}
                    render={<Link href="/trekking-and-hiking" />}
                    size="xl"
                    className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 sm:w-auto"
                  >
                    <TbCompass className="size-4" />
                    Explore Treks
                  </Button>
                </div>
              </div>

              <div className="relative hidden min-h-64 overflow-hidden rounded-md border-2 border-primary-foreground/20 lg:block lg:min-h-80">
                <Image
                  src="/images/collage-trekking.jpg"
                  alt="Trekkers walking toward Himalayan peaks"
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-linear-to-t from-primary via-primary/20 to-transparent"
                />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="text-sm font-semibold tracking-wide text-accent uppercase">
                    Pokhara Treks
                  </p>
                  <p className="mt-1 text-base font-semibold text-primary-foreground sm:text-lg">
                    The Himalaya is still this way.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className="bg-background py-10 sm:py-12">
          <Container>
            <p className="text-sm font-semibold tracking-wide text-accent uppercase">
              Useful paths
            </p>
            <h2 className="mt-2 text-xl font-bold text-primary sm:text-2xl lg:text-3xl">
              Pick a trail and keep walking.
            </h2>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {trails.map(({ href, label, description, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="group flex items-start justify-between gap-4 rounded-md border-2 border-border bg-card p-4 transition-colors hover:border-accent sm:p-5"
                >
                  <div className="flex min-w-0 items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
                      <Icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="font-semibold text-primary">{label}</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">
                        {description}
                      </p>
                    </div>
                  </div>
                  <TbArrowRight className="mt-2 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-accent" />
                </Link>
              ))}
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
