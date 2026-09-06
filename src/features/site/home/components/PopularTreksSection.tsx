import { TbCalendar, TbMountain } from "react-icons/tb";
import Link from "next/link";

import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { TripCard, cardGridClass } from "@/features/site/listing";
import { popularTreks } from "@/features/site/home/constant/treks";
import { cn } from "@/lib/utils";

const tones = ["primary", "accent", "chart-2"] as const;
const featuredTreks = popularTreks.slice(0, 8);

const PopularTreksSection = () => {
  return (
    <section className="bg-background py-6 sm:py-8">
      <Container>
        <SectionHeader
          title="Our most booked treks"
          description="The routes travellers come to Pokhara for."
          action={
            <Button
              nativeButton={false}
              render={<Link href="/trip" />}
              variant="accent"
              size="xl"
            >
              See all treks
            </Button>
          }
        />

        <div className={cn("mt-4", cardGridClass)}>
          {featuredTreks.map((trek, index) => (
            <TripCard
              key={trek.title}
              href={trek.href}
              title={trek.title}
              subtitle={trek.days}
              icon={trek.icon}
              tone={tones[index % tones.length]}
              image={trek.image}
              price={trek.price}
              ctaLabel="View Trip"
              rating={{
                value: trek.rating,
                reviews: trek.reviews,
                difficulty: trek.difficulty,
              }}
              facts={[
                { icon: TbMountain, label: "Altitude", value: trek.altitude },
                {
                  icon: TbCalendar,
                  label: "Best season",
                  value: trek.season,
                },
              ]}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PopularTreksSection;
