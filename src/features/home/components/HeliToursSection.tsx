import Link from "next/link";
import { ClockIcon, CompassIcon, HelicopterIcon, MountainIcon } from "lucide-react";

import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { heliTours } from "@/features/home/constant/home-data";
import TripCard from "@/features/home/components/TripCard";

const tones = ["accent", "primary", "chart-3", "primary"] as const;

const HeliToursSection = () => {
  return (
    <section className="bg-secondary py-12 sm:py-16">
      <Container>
        <SectionHeader
          eyebrow="Fly In, Walk Out"
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

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {heliTours.map((tour, index) => (
            <TripCard
              key={tour.title}
              href={tour.href}
              title={tour.title}
              icon={HelicopterIcon}
              tone={tones[index % tones.length]}
              price={tour.price}
              ctaLabel="View Tour"
              facts={[
                { icon: ClockIcon, label: "Flight", value: tour.flight },
                { icon: MountainIcon, label: "Lands at", value: tour.landsAt },
                { icon: CompassIcon, label: "Departs", value: tour.departs },
              ]}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HeliToursSection;
