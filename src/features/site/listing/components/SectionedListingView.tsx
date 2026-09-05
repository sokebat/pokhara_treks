import type { ReactNode } from "react";

import type { TripListingSection } from "@/features/site/listing/types";

import ListingPage from "./ListingPage";
import TripListingCard from "./TripListingCard";
import { cn } from "@/lib/utils";

type SectionedListingViewProps = {
  eyebrow: string;
  title: string;
  description: string;
  headerId: string;
  nav: ReactNode;
  sections: TripListingSection[];
  singular: string;
  plural: string;
  ctaLabel: string;
};

const SectionedListingView = ({
  eyebrow,
  title,
  description,
  headerId,
  nav,
  sections,
  singular,
  plural,
  ctaLabel,
}: SectionedListingViewProps) => (
  <ListingPage
    eyebrow={eyebrow}
    title={title}
    description={description}
    headerId={headerId}
    headerClassName="scroll-mt-32 md:scroll-mt-40 xl:scroll-mt-28"
  >
    <div className="mt-6 grid gap-6 lg:mt-8 lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-start lg:gap-8">
      {nav}

      <div className="flex min-w-0 flex-col">
        {sections.map((section) => {
          const Icon = section.icon;
          const count = section.items.length;

          return (
            <section
              key={section.slug}
              id={section.slug}
              className="scroll-mt-32 border-b border-border py-8 first:pt-2 last:border-b-0 last:pb-0 sm:py-10 md:scroll-mt-40 lg:first:pt-0 xl:scroll-mt-28"
            >
              <div className="mb-5 flex items-start gap-3">
                <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent sm:size-10">
                  <Icon className="size-4 sm:size-5" />
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                    <h2 className="text-lg font-bold text-primary sm:text-xl">
                      {section.label}
                    </h2>
                    <span className="text-xs font-medium text-muted-foreground tabular-nums sm:text-sm">
                      {count} {count === 1 ? singular : plural}
                    </span>
                  </div>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    {section.description}
                  </p>
                </div>
              </div>

              <div
                className={cn(
                  "grid gap-3",
                  section.items.length === 1
                    ? "sm:max-w-lg"
                    : "sm:grid-cols-2",
                )}
              >
                {section.items.map((trip, index) => (
                  <TripListingCard
                    key={trip.href}
                    trip={trip}
                    index={index}
                    ctaLabel={ctaLabel}
                  />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  </ListingPage>
);

export default SectionedListingView;
