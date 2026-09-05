import Container from "@/components/shared/Container";
import CTASection from "@/components/shared/CTASection";
import FaqSection from "@/components/shared/FaqSection";
import FindUsSection from "@/components/shared/FindUsSection";
import ActivityCard from "@/features/site/adventures/components/ActivityCard";
import ActivitySectionNav from "@/features/site/adventures/components/ActivitySectionNav";
import {
  adventureCategories,
  getAdventuresByCategory,
  getCategoryCount,
} from "@/features/site/adventures/constant/adventures";
import { cn } from "@/lib/utils";

const ActivityView = () => {
  return (
    <div>
      <section className="bg-background pt-8 pb-8 sm:pt-12 sm:pb-10">
        <Container>
          <div id="activity-top" className="scroll-mt-32 md:scroll-mt-40 xl:scroll-mt-28">
            <p className="text-sm font-semibold tracking-wide text-accent uppercase">
              Pokhara Activities
            </p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-balance text-primary sm:text-4xl">
              Activities from Lakeside
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground sm:text-base">
              Bungee, paragliding, ultralight, zipline, rafting, cycling and
              canyoning — booked from the same office that runs our treks.
            </p>
          </div>

          <div className="mt-6 grid gap-6 lg:mt-8 lg:grid-cols-[18rem_minmax(0,1fr)] lg:items-start lg:gap-8">
            <ActivitySectionNav />

            <div className="flex min-w-0 flex-col">
              {adventureCategories.map((category) => {
                const activities = getAdventuresByCategory(category.slug);
                const Icon = category.icon;
                const count = getCategoryCount(category.slug);

                return (
                  <section
                    key={category.slug}
                    id={category.slug}
                    className="scroll-mt-32 border-b border-border py-8 first:pt-2 last:border-b-0 last:pb-0 sm:py-10 md:scroll-mt-40 lg:first:pt-0 xl:scroll-mt-28"
                  >
                    <div className="mb-5 flex items-start gap-3">
                      <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent sm:size-10">
                        <Icon className="size-4 sm:size-5" />
                      </span>
                      <div className="min-w-0">
                        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                          <h2 className="text-lg font-bold text-primary sm:text-xl">
                            {category.label}
                          </h2>
                          <span className="text-xs font-medium text-muted-foreground tabular-nums sm:text-sm">
                            {count} {count === 1 ? "activity" : "activities"}
                          </span>
                        </div>
                        <p className="mt-1 text-sm leading-6 text-muted-foreground">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    <div
                      className={cn(
                        "grid gap-3",
                        activities.length === 1
                          ? "sm:max-w-lg"
                          : "sm:grid-cols-2",
                      )}
                    >
                      {activities.map((activity, index) => (
                        <ActivityCard
                          key={activity.href}
                          activity={activity}
                          index={index}
                        />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <FaqSection />
      <FindUsSection />
      <CTASection />
    </div>
  );
};

export default ActivityView;
