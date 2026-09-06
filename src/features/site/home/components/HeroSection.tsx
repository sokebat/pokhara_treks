import { TbArrowRight, TbHeartHandshake, TbMapPin } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { TREK_PHOTO, WOMEN_TREK_PHOTO } from "@/constant/photos";
import { siteInfo } from "@/constant/site";

const proofs = [
  { kicker: "Home base", value: "Lakeside, Pokhara" },
  { kicker: "Who leads", value: "Licensed local women" },
  { kicker: "Group size", value: "Never more than eight" },
];

const routes = [
  { name: "Annapurna", href: "/region/annapurna-region" },
  { name: "Everest", href: "/region/everest-region" },
  { name: "Manaslu", href: "/region/manaslu-region" },
  { name: "Mustang", href: "/upper-mustang-trek-nepal" },
];

const HeroSection = () => {
  return (
    <section>
      <div className="relative isolate overflow-hidden bg-foreground">
        <Image
          src={WOMEN_TREK_PHOTO}
          alt="A woman trekker with a backpack looking out over a snow-capped Himalayan mountain range"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center]"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-footer-deep from-[8%] via-footer/70 via-48% to-footer/25"
        />

        <Container>
          <div className="relative z-10 mx-auto max-w-3xl py-10 pb-24 text-center sm:py-14 sm:pb-28 lg:py-16 lg:pb-32">
            <p className="inline-flex max-w-full items-center gap-2 rounded-full border-2 border-primary-foreground/40 bg-foreground/25 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.12em] text-primary-foreground uppercase [text-shadow:0_1px_12px_rgb(0_0_0_/_0.4)] sm:px-3.5 sm:text-xs sm:tracking-[0.18em]">
              Women-led · Pokhara, Nepal
            </p>

            <h1 className="mt-4 text-2xl leading-snug font-bold tracking-tight text-balance text-primary-foreground [text-shadow:0_2px_20px_rgb(0_0_0_/_0.5)] sm:mt-5 sm:text-3xl sm:leading-tight md:text-4xl lg:text-5xl lg:leading-[1.1]">
              The Himalaya, led by the women who know her best.
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-pretty text-primary-foreground [text-shadow:0_2px_16px_rgb(0_0_0_/_0.5)] sm:mt-5 sm:text-base sm:leading-7 md:text-lg md:leading-8">
              {siteInfo.name} puts trained local women at the front of every
              journey — from Everest&apos;s high passes to Annapurna&apos;s
              sanctuary trails.
            </p>

            <div className="mt-6 flex w-full flex-col items-stretch justify-center gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
              <Button
                nativeButton={false}
                render={<Link href="/customize-my-trip" />}
                size="xl"
                className="w-full sm:w-auto"
              >
                Plan Your Trip
                <TbArrowRight className="size-4" />
              </Button>

              <Button
                nativeButton={false}
                render={<Link href="/trip" />}
                variant="accent"
                size="xl"
                className="w-full sm:w-auto"
              >
                Explore Treks
                <TbArrowRight className="size-4" />
              </Button>
            </div>

            <p className="mt-5 text-xs font-medium text-pretty text-primary-foreground [text-shadow:0_1px_12px_rgb(0_0_0_/_0.45)] sm:mt-7 sm:text-sm">
              Licensed women guides
              <span aria-hidden className="mx-2 text-sky">
                ·
              </span>
              Groups of eight
              <span aria-hidden className="mx-2 text-sky">
                ·
              </span>
              Based in Lakeside
            </p>
          </div>
        </Container>
      </div>

      <div className="bg-secondary pb-8 sm:pb-10">
        <Container>
          <div className="relative z-10 -mt-16 sm:-mt-20 lg:-mt-24">
            <div className="overflow-hidden rounded-xl border-2 border-primary/15 bg-card">
              <div className="grid lg:grid-cols-[minmax(15rem,20rem)_minmax(0,1fr)]">
                <div className="relative aspect-4/3 sm:aspect-16/9 lg:aspect-auto lg:min-h-[15rem]">
                  <Image
                    src={TREK_PHOTO}
                    alt="A trekking group led along a Himalayan mountain trail"
                    fill
                    sizes="(min-width: 1024px) 20rem, 100vw"
                    className="object-cover"
                  />
                  <p className="absolute bottom-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-foreground/55 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur-sm sm:bottom-4 sm:left-4 sm:text-sm">
                    <TbMapPin className="size-3.5 shrink-0 text-sky sm:size-4" />
                    On the trail, Nepal
                  </p>
                </div>

                <div className="flex flex-col justify-center gap-4 p-4 sm:gap-5 sm:p-5 lg:p-6">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-md bg-primary">
                      <TbHeartHandshake className="size-5 text-primary-foreground" />
                    </span>

                    <div className="min-w-0">
                      <p className="text-lg font-semibold text-foreground sm:text-xl">
                        Led by local women
                      </p>
                      <p className="mt-1.5 max-w-xl text-sm leading-6 text-muted-foreground">
                        Every itinerary is planned and guided by Pokhara-trained
                        women — the people who grew up on these trails.
                      </p>
                    </div>
                  </div>

                  <dl className="grid grid-cols-1 gap-3 border-y-2 border-border py-4 sm:grid-cols-3 sm:gap-5">
                    {proofs.map((proof) => (
                      <div
                        key={proof.kicker}
                        className="border-l-2 border-sky/70 pl-3"
                      >
                        <dt className="text-[0.7rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                          {proof.kicker}
                        </dt>
                        <dd className="mt-1 text-sm font-semibold text-foreground">
                          {proof.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-5 sm:gap-y-1.5">
                    <p className="text-[0.7rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                      Walk with us
                    </p>

                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
                      {routes.map((route) => (
                        <Link
                          key={route.name}
                          href={route.href}
                          className="inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-chart-2"
                        >
                          {route.name}
                          <TbArrowRight className="size-3.5" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HeroSection;
