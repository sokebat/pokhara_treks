import { TbCalendar, TbMountain } from "react-icons/tb";
import Link from "next/link";

import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { TripCard, cardGridClass } from "@/features/site/listing";
import { shortTreks } from "@/features/site/home/constant/treks";
import { cn } from "@/lib/utils";

const tones = ["primary", "accent", "chart-2"] as const;

const ShortTreksSection = () => {
  return (
    <section className="bg-background py-12 sm:py-16">
      <Container>
        <SectionHeader
          title="Short treks and day hikes from Pokhara"
          description="Under a week, starting from our office in Lakeside."
          action={
            <Button
              nativeButton={false}
              render={<Link href="/day-hike-in-nepal" />}
              variant="accent"
              size="xl"
            >
              See all short treks
            </Button>
          }
        />

        <div className={cn("mt-8", cardGridClass)}>
          {shortTreks.map((trek, index) => (
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

export default ShortTreksSection;
