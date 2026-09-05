import { TbClock, TbCompass, TbHelicopter, TbMountain } from "react-icons/tb";
import Link from "next/link";

import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { featuredHeliTours } from "@/features/site/heli-tours/constant/heli-tours";
import TripCard from "@/features/site/home/components/TripCard";

const tones = ["accent", "primary", "chart-3", "primary"] as const;

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

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {featuredHeliTours.map((tour, index) => (
            <TripCard
              key={tour.title}
              href={tour.href}
              title={tour.title}
              icon={TbHelicopter}
              tone={tones[index % tones.length]}
              image={tour.image}
              price={tour.price}
              ctaLabel="View Tour"
              facts={[
                { icon: TbClock, label: "Flight", value: tour.flight },
                { icon: TbMountain, label: "Lands at", value: tour.landsAt },
                { icon: TbCompass, label: "Departs", value: tour.departs },
              ]}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HeliToursSection;
