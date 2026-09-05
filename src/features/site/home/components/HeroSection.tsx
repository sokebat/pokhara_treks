import { TbArrowRight } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { WOMEN_TREK_PHOTO } from "@/constant/photos";
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
    <section className="overflow-hidden bg-foreground">
      <div className="grid items-stretch lg:grid-cols-[minmax(22rem,40rem)_minmax(0,1fr)]">
        <div className="order-2 flex flex-col justify-center px-4 py-10 md:px-6 lg:order-1 lg:py-16 lg:pr-10 lg:pl-[max(1.5rem,calc((100vw-1600px)/2+1.5rem))] xl:pr-14">
          <p className="flex items-center gap-3 text-sm font-semibold tracking-[0.18em] text-sky uppercase">
            <span aria-hidden className="h-px w-8 bg-gold" />
            Women-led · Pokhara, Nepal
          </p>

          <h1 className="mt-5 text-3xl leading-[1.12] font-bold tracking-tight text-primary-foreground sm:text-5xl sm:leading-[1.08] lg:text-[3.25rem] xl:text-[3.75rem] xl:leading-[1.05]">
            The Himalaya, led by the{" "}
            <span className="text-sky">women</span> who know her best.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-primary-foreground/80 sm:text-lg sm:leading-8">
            {siteInfo.name} puts trained local women at the front of every
            journey — from Everest&apos;s high passes to Annapurna&apos;s
            sanctuary trails.
          </p>

          <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <Button
              nativeButton={false}
              render={<Link href="/customize-my-trip" />}
              size="xl"
              className="bg-card text-foreground hover:bg-card/90"
            >
              Plan Your Trip
              <TbArrowRight className="size-4" />
            </Button>

            <Button
              nativeButton={false}
              render={<Link href="/trip" />}
              size="xl"
              variant="outline"
              className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
            >
              Explore Treks
              <TbArrowRight className="size-4" />
            </Button>
          </div>

          <dl className="mt-10 grid gap-5 sm:grid-cols-3">
            {proofs.map((proof) => (
              <div key={proof.kicker}>
                <dt className="text-xs font-semibold tracking-wide text-sky uppercase">
                  {proof.kicker}
                </dt>
                <dd className="mt-1.5 text-sm font-semibold text-primary-foreground">
                  {proof.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2">
            {routes.map((route) => (
              <Link
                key={route.name}
                href={route.href}
                className="inline-flex items-center gap-1 text-sm font-semibold text-primary-foreground/75 hover:text-sky"
              >
                {route.name}
                <TbArrowRight className="size-3.5" />
              </Link>
            ))}
          </div>
        </div>

        <div className="relative order-1 min-h-72 overflow-hidden sm:min-h-96 lg:order-2 lg:min-h-[38rem] xl:min-h-[42rem]">
          <Image
            src={WOMEN_TREK_PHOTO}
            alt="A woman trekker with a backpack looking out over a snow-capped Himalayan mountain range"
            fill
            priority
            sizes="(min-width: 1024px) 60vw, 100vw"
            className="object-cover object-[68%_center]"
          />

          <div
            aria-hidden
            className="absolute inset-0 bg-linear-to-t from-foreground/35 via-transparent to-transparent lg:bg-linear-to-r lg:from-foreground/25 lg:via-transparent lg:to-transparent"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
