import {
  TbArrowUpRight,
  TbClockHour4,
  TbHeart,
  TbMountain,
  TbShieldCheck,
  TbUsers,
} from "react-icons/tb";
import Image from "next/image";

import Container from "@/components/shared/Container";

const stats = [
  {
    value: "16+",
    label: "Years Experience",
    description: "Himalayan travel expertise",
    icon: TbClockHour4,
  },
  {
    value: "12K+",
    label: "Trekkers Guided",
    description: "Journeys across Nepal",
    icon: TbUsers,
  },
  {
    value: "100%",
    label: "Nepali Owned",
    description: "Local people and knowledge",
    icon: TbHeart,
  },
  {
    value: "24/7",
    label: "Trip Support",
    description: "Before and during your journey",
    icon: TbShieldCheck,
  },
];

const AboutHeroSection = () => {
  return (
    <section className="bg-background pt-10 pb-8 sm:pt-12 sm:pb-8">
      <Container>
        <div className="grid items-stretch gap-5 lg:grid-cols-2 lg:gap-6">
          <div>
            <p className="text-sm font-semibold tracking-wide text-accent uppercase">
              Our Story
            </p>

            <h1 className="mt-2 text-2xl font-bold tracking-tight text-primary sm:text-3xl lg:text-4xl">
              From Lakeside Pokhara to 8,000-Meter Giants.
            </h1>

            <div className="mt-4 space-y-4 leading-7 text-muted-foreground">
              <p>
                Our story begins in Pokhara — surrounded by lakes, trails, and
                some of the world&apos;s greatest mountains. It is a story built
                on local knowledge, human connection, and a lasting respect for
                the Himalaya.
              </p>

              <p>
                What started as a passion for the mountains grew into a
                commitment to creating better ways for people to experience
                Nepal. We believe trekking should be more than reaching a
                destination; it should be about the people you meet, the
                communities you pass through, and the landscape you leave
                behind.
              </p>

              <p>
                Our team brings together experienced local guides, mountain
                professionals, and people who understand Nepal from the ground
                up. Every journey is carefully planned around safety,
                responsible travel, thoughtful pacing, and the individual
                traveller.
              </p>

              <p>
                From the trails of Annapurna to the high passes of the Khumbu
                and the remote landscapes beyond, we remain proudly Nepal-based.{" "}
                <span className="font-semibold text-primary">
                  Our purpose is simple — help you experience the Himalaya
                  safely, responsibly, and deeply.
                </span>
              </p>
            </div>
          </div>

          <div className="relative min-h-56 overflow-hidden rounded-md border-2 border-border sm:min-h-72">
            <Image
              src="/images/collage-trekking.jpg"
              alt="A trekking group looking out over the Himalayan mountains of Nepal"
              fill
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />

            <div
              aria-hidden
              className="absolute inset-0 bg-linear-to-t from-primary via-primary/35 to-transparent"
            />

            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <TbMountain className="size-4 text-accent" />
                    <span className="text-sm font-semibold tracking-wide text-accent uppercase">
                      The Himalaya
                    </span>
                  </div>

                  <p className="mt-1.5 text-base font-semibold text-primary-foreground sm:text-lg">
                    Where every journey begins.
                  </p>

                  <p className="mt-1 text-sm text-primary-foreground/75">
                    Nepal · Annapurna · Everest · Beyond
                  </p>
                </div>

                <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-primary-foreground/25 bg-primary-foreground/10 backdrop-blur-md">
                  <TbArrowUpRight className="size-4 text-primary-foreground" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {stats.map(({ value, label, description, icon: Icon }) => (
            <div
              key={label}
              className="rounded-md border-2 border-border bg-card p-3 sm:p-5"
            >
              <div className="flex items-start justify-between gap-3">
                <span className="text-xl font-bold tracking-tight text-primary sm:text-2xl lg:text-3xl">
                  {value}
                </span>
                <Icon
                  className="size-5 shrink-0 text-accent"
                  strokeWidth={1.75}
                />
              </div>

              <h3 className="mt-3 text-sm font-semibold text-foreground">
                {label}
              </h3>

              <p className="mt-1 text-sm text-muted-foreground">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutHeroSection;
