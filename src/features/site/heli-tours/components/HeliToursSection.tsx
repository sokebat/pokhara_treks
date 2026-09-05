import Link from "next/link";

import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import HeliTourCard from "@/features/site/heli-tours/components/HeliTourCard";
import { featuredHeliTours } from "@/features/site/heli-tours/constant/heli-tours";

const HeliToursSection = () => {
  return (
    <section className="bg-secondary py-12 sm:py-16">
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

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {featuredHeliTours.map((tour, index) => (
            <HeliTourCard key={tour.href} tour={tour} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HeliToursSection;
