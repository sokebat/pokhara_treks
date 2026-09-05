import { TbClock, TbMapPin, TbMountain } from "react-icons/tb";

import TripCard from "@/features/site/listing/components/TripCard";
import type { TripListingItem } from "@/features/site/listing/types";

const tones = ["primary", "accent", "chart-2"] as const;

type TripListingCardProps = {
  trip: TripListingItem;
  index: number;
  ctaLabel: string;
};

const defaultFacts = (trip: TripListingItem) => [
  { icon: TbClock, label: "Duration", value: trip.duration },
  { icon: TbMapPin, label: "Location", value: trip.location },
  ...(trip.difficulty
    ? [{ icon: TbMountain, label: "Difficulty", value: trip.difficulty }]
    : []),
];

const TripListingCard = ({ trip, index, ctaLabel }: TripListingCardProps) => (
  <TripCard
    href={trip.href}
    title={trip.title}
    icon={trip.icon}
    tone={tones[index % tones.length]}
    image={trip.image}
    price={trip.price}
    ctaLabel={ctaLabel}
    facts={trip.facts ?? defaultFacts(trip)}
  />
);

export default TripListingCard;
