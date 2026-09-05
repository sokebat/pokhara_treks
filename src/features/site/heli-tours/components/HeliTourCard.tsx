import { TbHelicopter } from "react-icons/tb";

import TripCard from "@/components/shared/TripCard";
import type { HeliTour } from "@/features/site/heli-tours/constant/heli-tours";
import { getHeliTourTripFacts } from "@/features/site/heli-tours/lib/heli-tours";

const tones = ["accent", "primary", "chart-3"] as const;

type HeliTourCardProps = {
  tour: HeliTour;
  index: number;
};

const HeliTourCard = ({ tour, index }: HeliTourCardProps) => (
  <TripCard
    href={tour.href}
    title={tour.title}
    icon={TbHelicopter}
    tone={tones[index % tones.length]}
    image={tour.image}
    price={tour.price}
    ctaLabel="View Tour"
    facts={getHeliTourTripFacts(tour)}
  />
);

export default HeliTourCard;
