import { TbBolt, TbClipboardList, TbCompass, TbConfetti, TbHeartHandshake, TbRoute, TbShieldCheck, TbSparkles } from "react-icons/tb";
import type { Metadata } from "next";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa6";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import CustomizeTripForm from "@/features/customize-trip/components/CustomizeTripForm";
import { siteInfo } from "@/constant/site";

export const metadata: Metadata = {
  title: "Customize My Trip",
  description:
    "Tell us your dates, group size, and interests and our local trip planners will build a custom Nepal itinerary around them.",
};

const colorVariants = [
  { chip: "bg-accent/10 text-accent", dot: "bg-accent" },
  { chip: "bg-primary text-primary-foreground", dot: "bg-primary" },
  { chip: "bg-secondary text-primary", dot: "bg-[oklch(0.55_0.09_245)]" },
];

const trustPoints = [
  { icon: TbCompass, label: "Local Expertise" },
  { icon: TbHeartHandshake, label: "Women-Led Guides" },
  { icon: TbBolt, label: "Fast, No-Pressure Reply" },
];

const steps = [
  {
    icon: TbClipboardList,
    title: "Share your preferences",
    description:
      "Dates, group size, and the kind of trip you're picturing — the form takes under two minutes.",
  },
  {
    icon: TbRoute,
    title: "We design your itinerary",
    description:
      "A local trip planner builds a route, pace, and price around what you told us — no templates.",
  },
  {
    icon: TbConfetti,
    title: "Confirm & get set",
    description:
      "Approve the plan, we handle permits and logistics, and you land in Pokhara ready to go.",
  },
];

const sidebarHighlights = [
  {
    icon: TbHeartHandshake,
    title: "Planned by local women",
    description: "Every itinerary is shaped by guides who grew up on these trails.",
  },
  {
    icon: TbShieldCheck,
    title: "Nothing fixed in stone",
    description: "Swap routes, dates, or pace anytime before you confirm — free of charge.",
  },
  {
    icon: TbSparkles,
    title: "Built around you",
    description: "Solo, family, or a group of twelve — the plan is sized to fit.",
  },
];

export default function CustomizeMyTripPage() {
  return (
    <div className="pb-16 sm:pb-24">
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-primary">
        <Image
          src="/images/collage-trekking.jpg"
          alt="A trekking group led along a Himalayan mountain trail"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-primary/80" />
        <div
          aria-hidden
          className="absolute inset-0 bg-linear-to-t from-primary via-primary/70 to-primary/40"
        />

        <div
          aria-hidden
          className="absolute top-10 left-1/2 size-72 -translate-x-1/2 rounded-full bg-accent/20 blur-3xl"
        />

        <Container>
          <div className="relative flex flex-col items-center py-16 text-center sm:py-20">
            <span className="flex size-12 items-center justify-center rounded-full bg-accent text-accent-foreground ring-8 ring-accent/15">
              <TbSparkles className="size-5" />
            </span>

            <p className="mt-5 text-sm font-semibold tracking-wide text-accent uppercase">
              Tailor-Made Journeys
            </p>

            <h1 className="mt-3 max-w-2xl text-2xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
              Design your own Nepal adventure
            </h1>

            <p className="mt-4 max-w-xl text-primary-foreground/80">
              No fixed packages. Tell us your dates, group size, and the kind
              of trip you&apos;re after — a local planner builds the rest
              around you.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
              {trustPoints.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/15 bg-primary-foreground/10 px-3.5 py-2 backdrop-blur-md"
                >
                  <Icon className="size-3.5 shrink-0 text-accent" />
                  <span className="text-xs font-medium whitespace-nowrap text-primary-foreground/90">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* How it works */}
      <section className="border-b border-border bg-secondary/40 py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold tracking-wide text-accent uppercase">
              How it works
            </p>
            <h2 className="mt-2 text-xl font-bold text-foreground sm:text-2xl lg:text-3xl">
              Three steps, no back-and-forth
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {steps.map((step, index) => {
              const variant = colorVariants[index % colorVariants.length];
              return (
                <div
                  key={step.title}
                  className="group relative flex flex-col gap-3 rounded-md border border-border bg-card p-6 transition-shadow hover:shadow-md"
                >
                  <span
                    aria-hidden
                    className="pointer-events-none absolute top-4 right-5 text-4xl font-bold text-foreground/5 select-none"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="flex items-center gap-3">
                    <span
                      className={`flex size-12 shrink-0 items-center justify-center rounded-full ${variant.chip}`}
                    >
                      <step.icon className="size-5" />
                    </span>
                    <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-foreground sm:text-lg">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Form + sidebar */}
      <Container>
        <div className="grid gap-8 pt-14 lg:grid-cols-[1fr_1.6fr] sm:pt-20">
          {/* Sidebar */}
          <div className="flex flex-col gap-6 lg:sticky lg:top-24 lg:self-start">
            <div className="relative aspect-4/3 w-full overflow-hidden rounded-md border border-border">
              <Image
                src="/images/hero-women-trekking.jpg"
                alt="A woman trekker looking out over a snow-capped Himalayan mountain range"
                fill
                sizes="(min-width: 1024px) 30vw, 100vw"
                className="object-cover object-[68%_center]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-transparent"
              />
              <div className="absolute right-4 bottom-4 left-4 flex items-start gap-3 rounded-md border border-white/15 bg-black/40 p-4 backdrop-blur-md">
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-accent/25">
                  <TbHeartHandshake className="size-4 text-accent" />
                </span>
                <p className="text-sm leading-snug text-white">
                  Guided and planned by Pokhara-trained women, start to
                  finish.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-5 rounded-md border border-border bg-card p-6">
              {sidebarHighlights.map((item, index) => {
                const variant = colorVariants[index % colorVariants.length];
                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <span
                      className={`flex size-9 shrink-0 items-center justify-center rounded-full ${variant.chip}`}
                    >
                      <item.icon className="size-4" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-foreground">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="rounded-md bg-linear-to-br from-primary to-[oklch(0.33_0.07_253)] p-6 text-primary-foreground">
              <div className="flex items-start gap-3">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-whatsapp/15 text-whatsapp">
                  <FaWhatsapp className="size-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold tracking-wide text-accent uppercase">
                    Rather just chat?
                  </p>
                  <p className="mt-1 text-sm text-primary-foreground/80">
                    Message us on WhatsApp and plan your trip in real time.
                  </p>
                </div>
              </div>
              <Button
                nativeButton={false}
                render={
                  <a
                    href={`https://wa.me/${siteInfo.phone.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  />
                }
                variant="whatsapp"
                size="xl"
                className="mt-5 w-full rounded-md"
              >
                <FaWhatsapp className="size-4" />
                Message us on WhatsApp
              </Button>
            </div>
          </div>

          {/* Form */}
          <div className="overflow-hidden rounded-md border border-border bg-card">
            <div
              aria-hidden
              className="h-1.5 bg-linear-to-r from-accent via-accent to-primary"
            />
            <div className="p-6 sm:p-10">
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                Plan your trip
              </h2>
              <p className="mt-1.5 text-sm text-muted-foreground">
                Fill in the details below — it takes less than two minutes.
              </p>

              <div className="mt-8">
                <CustomizeTripForm />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
