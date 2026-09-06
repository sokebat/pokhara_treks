import Link from "next/link";

import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { TripListingCard, cardGridClass } from "@/features/site/listing";
import { featuredHeliTours } from "@/features/site/heli-tours/constant/heli-tours";
import { toHeliListingItem } from "@/features/site/heli-tours/lib/heli-tours";
import { cn } from "@/lib/utils";

const HeliToursSection = () => {
  return (
    <section className="bg-secondary py-6 sm:py-8">
      <Container>
        <SectionHeader
          title="Helicopter tours from Pokhara"
          description="The Himalayas in a morning. Back in Lakeside for lunch."
          action={
            <Button
              nativeButton={false}
              render={<Link href="/heli-tours" />}
              variant="accent"
              size="xl"
            >
              All helicopter tours
            </Button>
          }
        />

        <div className={cn("mt-4", cardGridClass)}>
          {featuredHeliTours.map((tour, index) => (
            <TripListingCard
              key={tour.href}
              trip={toHeliListingItem(tour)}
              index={index}
              ctaLabel="View Tour"
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HeliToursSection;
