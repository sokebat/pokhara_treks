import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  CompassIcon,
  HeartHandshakeIcon,
  LeafIcon,
  ShieldCheckIcon,
  UsersRoundIcon,
} from "lucide-react";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { siteInfo } from "@/constant/site";

const trustPoints = [
  { icon: CompassIcon, label: "Local Expertise" },
  { icon: HeartHandshakeIcon, label: "Women-Led Guides" },
  { icon: UsersRoundIcon, label: "Small Groups" },
  { icon: LeafIcon, label: "Responsible Travel" },
];

const HeroSection = () => {
  return (
    <section className="relative isolate flex min-h-140 items-center overflow-hidden bg-primary sm:min-h-160 lg:min-h-180">
      <Image
        src="/images/hero-women-trekking.jpg"
        alt="A woman trekker with a backpack looking out over a snow-capped Himalayan mountain range"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center]"
      />
      <div aria-hidden className="absolute inset-0 bg-primary/55" />
      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-r from-primary via-primary/70 to-transparent"
      />

      <Container>
        <div className="relative mx-auto flex max-w-3xl flex-col items-center py-20 text-center sm:py-24">
          <div className="inline-flex items-center gap-3 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 py-1.5 pr-5 pl-1.5 backdrop-blur-sm">
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent">
              <ShieldCheckIcon className="size-4 text-accent-foreground" />
            </span>
            <span className="text-left">
              <span className="block text-sm leading-tight font-semibold text-primary-foreground">
                Women-Led Trekking Company
              </span>
              <span className="block text-xs leading-tight text-primary-foreground/70">
                Locally Owned in Pokhara, Nepal
              </span>
            </span>
          </div>

          <h1 className="mt-7 text-4xl leading-[1.15] font-medium text-primary-foreground sm:text-5xl lg:text-6xl">
            The Himalaya, led by the{" "}
            <span className="font-bold text-accent">women</span> who know her{" "}
            <span className="font-bold">best</span>.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/80 sm:text-lg">
            {siteInfo.name} puts trained local women at the front of every
            journey — from Everest&apos;s high passes to Annapurna&apos;s
            sanctuary trails.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              nativeButton={false}
              render={<Link href="/customize-my-trip" />}
              size="lg"
              className="h-12 rounded-lg bg-accent px-6 text-base text-accent-foreground hover:bg-accent/90"
            >
              Plan Your Trip
              <ArrowRightIcon className="size-4" />
            </Button>

            <Button
              nativeButton={false}
              render={<Link href="/trekking-and-hiking" />}
              size="lg"
              className="h-12 rounded-lg bg-primary-foreground px-6 text-base text-primary hover:bg-primary-foreground/90"
            >
              Explore Treks
              <ArrowRightIcon className="size-4" />
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-2.5">
            {trustPoints.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="inline-flex items-center gap-1.5 rounded-full border border-primary-foreground/15 bg-primary-foreground/10 px-3.5 py-1.5 backdrop-blur-sm"
              >
                <Icon className="size-3.5 text-accent" />
                <span className="text-xs font-medium text-primary-foreground/90">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
