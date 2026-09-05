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
    <section className="bg-secondary">
      <div className="relative isolate flex h-[70svh] min-h-[36rem] items-center justify-center overflow-hidden bg-foreground px-4 pb-36 md:px-6 sm:pb-40 lg:min-h-[42rem]">
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
          className="absolute inset-0 bg-linear-to-t from-footer-deep from-[10%] via-footer/70 via-45% to-footer/25"
        />

        <div className="relative z-10 w-full max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border-2 border-primary-foreground/40 bg-foreground/25 px-3.5 py-1 text-xs font-semibold tracking-[0.18em] text-primary-foreground uppercase [text-shadow:0_1px_12px_rgb(0_0_0_/_0.4)]">
            Women-led · Pokhara, Nepal
          </p>

          <h1 className="mt-5 text-3xl leading-[1.15] font-bold tracking-tight text-primary-foreground [text-shadow:0_2px_20px_rgb(0_0_0_/_0.5)] sm:text-4xl sm:leading-[1.12] lg:text-5xl lg:leading-[1.1]">
            The Himalaya, led by the women who know her best.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-primary-foreground [text-shadow:0_2px_16px_rgb(0_0_0_/_0.5)] sm:text-lg sm:leading-8">
            {siteInfo.name} puts trained local women at the front of every
            journey — from Everest&apos;s high passes to Annapurna&apos;s
            sanctuary trails.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-2.5 sm:flex-row sm:flex-wrap">
            <Button
              nativeButton={false}
              render={<Link href="/customize-my-trip" />}
              size="xl"
            >
              Plan Your Trip
              <TbArrowRight className="size-4" />
            </Button>

            <Button
              nativeButton={false}
              render={<Link href="/trip" />}
              variant="accent"
              size="xl"
            >
              Explore Treks
              <TbArrowRight className="size-4" />
            </Button>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-medium text-primary-foreground [text-shadow:0_1px_12px_rgb(0_0_0_/_0.45)]">
            <span>Licensed women guides</span>
            <span
              aria-hidden
              className="hidden size-1.5 rounded-full bg-sky sm:block"
            />
            <span>Groups of eight</span>
            <span
              aria-hidden
              className="hidden size-1.5 rounded-full bg-sky sm:block"
            />
            <span>Based in Lakeside</span>
          </div>
        </div>
      </div>

      <Container>
        <div className="relative z-10 -mb-36 -translate-y-1/2 sm:-mb-40">
          <div className="overflow-hidden rounded-md border-2 border-primary/20 bg-card">
            <div className="grid lg:grid-cols-[minmax(16rem,22rem)_1fr]">
              <div className="relative aspect-16/10 lg:aspect-auto lg:min-h-full">
                <Image
                  src={TREK_PHOTO}
                  alt="A trekking group led along a Himalayan mountain trail"
                  fill
                  sizes="(min-width: 1024px) 22rem, 100vw"
                  className="object-cover"
                />
                <p className="absolute inset-x-0 bottom-0 flex items-center gap-2 bg-linear-to-t from-foreground/80 to-transparent px-4 pt-10 pb-4 text-sm font-semibold text-primary-foreground">
                  <TbMapPin className="size-4 text-sky" />
                  On the trail, Nepal
                </p>
              </div>

              <div className="flex flex-col justify-center p-5 sm:p-7 lg:p-8">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-md bg-primary">
                    <TbHeartHandshake className="size-5 text-primary-foreground" />
                  </span>

                  <div>
                    <p className="text-lg font-semibold text-foreground sm:text-xl">
                      Led by local women
                    </p>
                    <p className="mt-1.5 max-w-xl text-sm leading-6 text-muted-foreground">
                      Every itinerary is planned and guided by Pokhara-trained
                      women — the people who grew up on these trails.
                    </p>
                  </div>
                </div>

                <dl className="mt-6 grid grid-cols-1 gap-4 border-t-2 border-border pt-5 sm:grid-cols-3 sm:gap-6">
                  {proofs.map((proof) => (
                    <div key={proof.kicker}>
                      <dt className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                        {proof.kicker}
                      </dt>
                      <dd className="mt-1 text-sm font-semibold text-foreground">
                        {proof.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-5 flex flex-col gap-3 border-t-2 border-border pt-5 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-2">
                  <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                    Walk with us
                  </p>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    {routes.map((route) => (
                      <Link
                        key={route.name}
                        href={route.href}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-chart-2"
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
    </section>
  );
};

export default HeroSection;
