import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  AwardIcon,
  EyeIcon,
  MapPinIcon,
  ShieldIcon,
  StarIcon,
} from "lucide-react";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

const features = [
  { icon: ShieldIcon, label: "Licensed, insured guides on every trek" },
  { icon: EyeIcon, label: "Transparent pricing, zero hidden fees" },
  { icon: MapPinIcon, label: "Local support from Pokhara to base camp" },
  { icon: AwardIcon, label: "Loved by trekkers from 40+ countries" },
];

const stats = [
  { value: "15+", label: "Years Guiding" },
  { value: "2.5k+", label: "Happy Trekkers" },
  { value: "4.9", label: "Avg. Rating" },
];

const WhyChooseUsSection = () => {
  return (
    <section className="relative overflow-hidden bg-muted/40 py-16 sm:py-20">
      <div
        aria-hidden
        className="absolute -top-24 -right-24 size-72 rounded-full bg-accent/10 blur-3xl"
      />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden />
              <span className="text-xs font-semibold tracking-widest text-accent uppercase">
                Why Choose Us
              </span>
            </div>

            <h2 className="mt-4 text-3xl leading-[1.15] font-bold text-primary sm:text-4xl lg:text-[2.75rem]">
              Trekking done right, from the{" "}
              <span className="text-accent">first step</span> to the summit.
            </h2>

            <p className="mt-4 max-w-md text-muted-foreground">
              Every trip is planned and led by people who grew up on these
              trails — not a call center.
            </p>

            <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              {features.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-start gap-3">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Icon className="size-4" />
                  </span>
                  <span className="pt-1 text-sm leading-snug font-medium text-foreground">
                    {label}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-6 border-t border-border pt-6 sm:gap-10">
              {stats.map(({ value, label }, i) => (
                <div
                  key={label}
                  className={
                    i > 0 ? "border-l border-border pl-6 sm:pl-10" : ""
                  }
                >
                  <p className="text-2xl font-bold text-primary sm:text-3xl">
                    {value}
                  </p>
                  <p className="text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </div>

            <Button
              nativeButton={false}
              render={<Link href="/customize-my-trip" />}
              size="lg"
              className="mt-8 rounded-md bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Start Planning Your Trek
              <ArrowRightIcon className="size-4" />
            </Button>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div
              aria-hidden
              className="absolute -inset-3 -z-10 rounded-[2rem] bg-primary/10"
            />
            <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-xl">
              <Image
                src="/images/hero-women-trekking.jpg"
                alt="A trekking guide leading travelers along a mountain trail in the Himalaya"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>

            <div className="absolute inset-x-4 bottom-4 rounded-xl border border-border/50 bg-background/95 p-4 shadow-lg backdrop-blur-sm sm:inset-x-auto sm:right-4 sm:w-64">
              <div className="flex gap-0.5 text-accent">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="size-3.5 fill-current" />
                ))}
              </div>
              <p className="mt-1.5 text-xs leading-snug text-muted-foreground italic">
                &ldquo;Our guide knew every trail and teahouse. Best decision
                we made.&rdquo;
              </p>
              <div className="mt-2.5 flex items-center gap-2.5">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-semibold text-accent">
                  SR
                </span>
                <div className="text-left">
                  <p className="text-sm font-semibold text-foreground">
                    Sarah Reynolds
                  </p>
                  <p className="text-xs text-muted-foreground">
                    Annapurna Circuit
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

export default WhyChooseUsSection;
