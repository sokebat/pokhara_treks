import { TbArrowRight, TbHeartHandshake, TbMapPin } from "react-icons/tb";
import Image from "next/image";
import Link from "next/link";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import { HERO_PHOTO, TREK_PHOTO } from "@/constant/photos";

const proofs = [
  { kicker: "Home base", value: "Lakeside, Pokhara" },
  { kicker: "Who leads", value: "Licensed local women" },
  { kicker: "Group size", value: "Never more than eight" },
];

const routes = [
  { name: "Annapurna", href: "/region/annapurna-region" },
  { name: "Everest", href: "/region/everest-region" },
  { name: "Manaslu", href: "/region/manaslu-region" },
  { name: "Mustang", href: "/trip/upper-mustang-trek-nepal" },
];

const HeroSection = () => {
  return (
    <section>
      {/* Hero. Two layers cut from one photograph, both still: a blurred ambient
          copy filling the width, and the sharp frame pinned right and masked into
          it. Below sm the ambient drops away and the sharp frame fills the width. */}
      <div className="relative isolate overflow-hidden bg-foreground">
        <div aria-hidden className="absolute inset-0 hidden overflow-hidden sm:block">
          <Image
            src={HERO_PHOTO}
            alt=""
            fill
            priority
            sizes="100vw"
            className="scale-[1.06] object-cover object-[50%_16%] blur-[10px] saturate-[.9]"
          />
        </div>

        <div className="absolute top-0 left-[-9%] aspect-3/4 w-[118%] sm:left-auto sm:right-[-1%] sm:h-[143%] sm:w-auto sm:[-webkit-mask-image:linear-gradient(90deg,transparent_0,#000_34%)] sm:[mask-image:linear-gradient(90deg,transparent_0,#000_34%)]">
          <Image
            src={HERO_PHOTO}
            alt="A snow peak lit by the morning sun above a sea of cloud, with a trekker walking the grassy ridge in front of it"
            fill
            priority
            sizes="(min-width: 640px) 60vw, 118vw"
            className="object-cover"
          />
        </div>

        <div
          aria-hidden
          className="absolute inset-0 bg-linear-[100deg] from-footer-deep/90 from-0% via-footer/65 via-42% to-footer/20 to-100%"
        />

        <Container>
          <div className="relative z-10 max-w-[40rem] py-[clamp(3.25rem,8vw,6.875rem)] pb-[clamp(5.25rem,12vw,10.375rem)] text-primary-foreground max-sm:pb-[4.375rem]">
            <h1 className="text-[clamp(2.125rem,5vw,3.625rem)] leading-[1.04] font-bold tracking-tight text-balance">
              You belong on these trails
            </h1>

            <h2 className="mt-4 max-w-[44ch] font-sans text-[clamp(1.0625rem,1.7vw,1.25rem)] leading-[1.5] font-normal text-pretty text-primary-foreground/85">
              Women-led trekking and adventure in Nepal, from our door in
              Lakeside, Pokhara
            </h2>

            <p className="font-heading mt-5 inline-flex items-start gap-2.5 text-xs leading-[1.5] font-semibold tracking-[0.08em] text-gold uppercase before:mt-[0.7em] before:h-[1.5px] before:w-[22px] before:shrink-0 before:bg-gold before:content-['']">
              Leading women-led trekking in the Annapurna region
            </p>

            <div className="mt-6 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap">
              <Button
                nativeButton={false}
                render={<Link href="/trip" />}
                variant="accent"
                size="xl"
                className="w-full sm:w-auto"
              >
                Find Your Trek
                <TbArrowRight className="size-4" />
              </Button>

              <Button
                nativeButton={false}
                render={<Link href="/customize-my-trip" />}
                variant="outline"
                size="xl"
                className="w-full border-primary-foreground/60 bg-transparent text-primary-foreground hover:bg-primary-foreground hover:text-foreground sm:w-auto"
              >
                Plan Your Trip
              </Button>
            </div>
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
