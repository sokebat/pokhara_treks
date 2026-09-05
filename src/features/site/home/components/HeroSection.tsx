import { TbArrowRight, TbCompass, TbHeartHandshake, TbLeaf, TbShieldCheck, TbUsersGroup } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { siteInfo } from "@/constant/site";

const trustPoints = [
  { icon: TbCompass, label: "Local Expertise" },
  { icon: TbHeartHandshake, label: "Women-Led Guides" },
  { icon: TbUsersGroup, label: "Small Groups" },
  { icon: TbLeaf, label: "Responsible Travel" },
];

const HeroSection = () => {
  return (
    <section className="relative isolate min-h-[32rem] overflow-hidden bg-foreground sm:min-h-160 lg:min-h-175">
      {/* Background image */}
      <Image
        src="/images/hero-women-trekking.jpg"
        alt="A woman trekker with a backpack looking out over a snow-capped Himalayan mountain range"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[68%_center]"
      />

      {/* Background overlays — keep the photo’s colour, darken only for type */}
      <div aria-hidden className="absolute inset-0 bg-foreground/20" />

      <div
        aria-hidden
        className="absolute inset-0 bg-linear-to-r from-foreground/80 via-foreground/45 to-transparent"
      />

      <Container>
        <div className="relative grid min-h-[32rem] items-center gap-10 py-12 sm:min-h-160 sm:py-16 lg:min-h-175 lg:grid-cols-[1.3fr_0.7fr] lg:gap-8 lg:py-20">
          {/* Left content */}
          <div className="flex w-full flex-col items-start">
            {/* Eyebrow */}
            <div className="inline-flex max-w-full items-center gap-3 rounded-md border border-primary-foreground/20 bg-foreground/40 py-1.5 pr-5 pl-1.5">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary">
                <TbShieldCheck className="size-4 text-primary-foreground" />
              </span>

              <span className="text-left">
                <span className="block text-sm leading-tight font-semibold text-primary-foreground">
                  Women-Led Trekking Company
                </span>

                <span className="mt-0.5 block text-xs leading-tight text-primary-foreground/70">
                  Locally Owned in Pokhara, Nepal
                </span>
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-7 w-full text-2xl leading-[1.15] font-bold tracking-tight text-primary-foreground sm:text-4xl sm:leading-[1.1] lg:text-5xl xl:text-[3.8rem] xl:leading-[1.08]">
              The Himalaya, led by the women who know her best.
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-primary-foreground/85 sm:text-lg sm:leading-8">
              {siteInfo.name} puts trained local women at the front of every
              journey — from Everest&apos;s high passes to Annapurna&apos;s
              sanctuary trails.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <Button
                nativeButton={false}
                render={<Link href="/customize-my-trip" />}
                variant="default"
                size="xl"
              >
                Plan Your Trip
                <TbArrowRight className="size-4" />
              </Button>

              <Button
                nativeButton={false}
                render={<Link href="/trip" />}
                size="xl"
                variant="outline"
                className="border-primary-foreground/35 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
              >
                Explore Treks
                <TbArrowRight className="size-4" />
              </Button>
            </div>

            {/* Trust points */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
              {trustPoints.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/20 px-3 py-1.5"
                >
                  <Icon className="size-3.5 shrink-0 text-primary-foreground" />

                  <span className="text-xs font-medium whitespace-nowrap text-primary-foreground/90">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="relative hidden w-full justify-self-end lg:flex lg:items-center">
            {/* Decorative frame */}
            <div
              aria-hidden
              className="absolute -inset-3 rounded-md border border-primary-foreground/20 bg-primary-foreground/5 backdrop-blur-sm"
            />

            {/* Main image */}
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-md border border-primary-foreground/20">
              <Image
                src="/images/collage-trekking.jpg"
                alt="A trekking group led along a Himalayan mountain trail"
                fill
                sizes="45vw"
                className="object-cover"
              />

              {/* Image gradient */}
              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-t from-foreground/50 via-transparent to-transparent"
              />
            </div>

            {/* Floating information card */}
            <div className="absolute right-5 bottom-5 w-64 rounded-md border border-border bg-background/95 p-4 backdrop-blur-md">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md bg-primary">
                  <TbHeartHandshake className="size-4 text-primary-foreground" />
                </span>

                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Led By Local Women
                  </p>

                  <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
                    Every itinerary is planned and guided by Pokhara-trained
                    women.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
