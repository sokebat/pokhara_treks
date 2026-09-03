import {
  TbArrowUpRight,
  TbHistory,
  TbMountain,
  TbShieldCheck,
  TbUsers,
  TbHeartHandshake,
} from "react-icons/tb";

import Container from "@/components/shared/Container";

const milestones = [
  {
    year: "2008",
    title: "The Beginning",
    description:
      "A small team in Pokhara began creating trekking journeys rooted in local knowledge and genuine mountain hospitality.",
  },
  {
    year: "2016",
    title: "Growing With Purpose",
    description:
      "Our network grew while our focus on responsible tourism, guide welfare, and traveller safety remained at the centre.",
  },
  {
    year: "Today",
    title: "Into the Himalaya",
    description:
      "We continue to create carefully planned journeys across Nepal's most iconic and remote mountain regions.",
  },
];

const stats = [
  {
    value: "16+",
    label: "Years Experience",
    description: "Himalayan travel expertise",
    icon: TbHistory,
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
    icon: TbHeartHandshake,
  },
  {
    value: "24/7",
    label: "Trip Support",
    description: "Before and during your journey",
    icon: TbShieldCheck,
  },
];

const AboutStorySection = () => {
  return (
    <section className="w-full bg-background py-12   lg:py-16">
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* =====================================================
              LEFT — EDITORIAL STORY
          ====================================================== */}
          <div className="lg:col-span-7">
        

            {/* Heading */}
            <h2 className="mt-6 max-w-3xl text-4xl leading-[1.08] font-bold tracking-tight text-foreground sm:text-5xl">
              From Lakeside Pokhara to{" "}
              <span className="text-primary">8,000-Meter Giants.</span>
            </h2>

            {/* Intro */}
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
              Our story begins in Pokhara — surrounded by lakes, trails, and
              some of the world's greatest mountains. It is a story built on
              local knowledge, human connection, and a lasting respect for the
              Himalaya.
            </p>

            {/* Story */}
            <div className="mt-7 max-w-2xl space-y-5 text-[15px] leading-7 text-muted-foreground">
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
                and the remote landscapes beyond, we remain proudly
                Nepal-based.{" "}
                <span className="font-semibold text-foreground">
                  Our purpose is simple — help you experience the Himalaya
                  safely, responsibly, and deeply.
                </span>
              </p>
            </div>

            {/* Timeline */}
            <div className="mt-10 border-t border-border pt-8">
              <div className="grid gap-7 sm:grid-cols-3">
                {milestones.map((item, index) => (
                  <div key={item.year} className="relative">
                    {index !== milestones.length - 1 && (
                      <div
                        aria-hidden
                        className="absolute top-2.5 right-0 hidden h-px w-8 bg-border sm:block"
                      />
                    )}

                    <div className="flex items-center gap-2.5">
                      <span className="flex size-5 items-center justify-center rounded-full bg-accent/15">
                        <span className="size-1.5 rounded-full bg-accent" />
                      </span>

                      <span className="text-xs font-bold tracking-[0.12em] text-accent uppercase">
                        {item.year}
                      </span>
                    </div>

                    <h3 className="mt-3 text-sm font-bold text-foreground">
                      {item.title}
                    </h3>

                    <p className="mt-1.5 text-xs leading-5 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT — IMAGE + METRICS
          ====================================================== */}
          <div className="lg:col-span-5">
            {/* Image */}
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-lg">
              <div className="relative h-64 sm:h-72">
                <img
                  src="https://media.worldnomads.com/Explore/nepal/nepal-trekking4-mark-whitman-kandoo.jpg"
                  alt="Trekking through the Himalayan mountains of Nepal"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-primary/90 via-primary/10 to-transparent" />

                {/* Image content */}
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <TbMountain className="size-4 text-accent" />

                        <span className="text-[11px] font-semibold tracking-[0.14em] text-accent uppercase">
                          The Himalaya
                        </span>
                      </div>

                      <h3 className="mt-1.5 text-lg font-semibold text-primary-foreground">
                        Where every journey begins.
                      </h3>

                      <p className="mt-1 text-xs text-primary-foreground/70">
                        Nepal · Annapurna · Everest · Beyond
                      </p>
                    </div>

                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full border border-primary-foreground/20 bg-primary-foreground/10 backdrop-blur-md">
                      <TbArrowUpRight className="size-4 text-primary-foreground" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Metrics */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              {stats.map(({ value, label, description, icon: Icon }) => (
                <div
                  key={label}
                  className="rounded-xl border border-border bg-card p-4 transition-shadow duration-300 hover:shadow-md sm:p-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-2xl leading-none font-bold tracking-tight text-primary sm:text-[28px]">
                      {value}
                    </span>

                    <Icon className="size-[18px] shrink-0 text-accent" />
                  </div>

                  <h3 className="mt-3 text-sm font-semibold text-foreground">
                    {label}
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-muted-foreground">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutStorySection;