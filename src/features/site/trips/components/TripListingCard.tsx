import { TbClock, TbMapPin } from "react-icons/tb";

import {
  ListingCard,
  ListingFacts,
  ListingPrice,
} from "@/components/shared/listing";
import type { TripListingItem } from "@/features/site/trips/constant/types";

type TripListingCardProps = {
  trip: TripListingItem;
  index: number;
  ctaLabel: string;
  featured?: boolean;
  showPrice?: boolean;
};

const TripListingCard = ({
  trip,
  index,
  ctaLabel,
  featured = false,
  showPrice = true,
}: TripListingCardProps) => (
  <ListingCard
    href={trip.href}
    title={trip.title}
    excerpt={trip.excerpt}
    image={trip.image}
    icon={trip.icon}
    tag={trip.tag}
    index={index}
    featured={featured}
    ctaLabel={ctaLabel}
    footer={showPrice ? <ListingPrice price={trip.price} /> : undefined}
  >
    <ListingFacts
      facts={[
        { icon: TbClock, text: trip.duration },
        { icon: TbMapPin, text: trip.location },
      ]}
    />
    {trip.difficulty ? (
      <span className="mt-2 inline-flex w-fit rounded-full bg-secondary px-2 py-0.5 text-[0.65rem] font-semibold text-secondary-foreground">
        {trip.difficulty}
      </span>
    ) : null}
  </ListingCard>
);

export default TripListingCard;
