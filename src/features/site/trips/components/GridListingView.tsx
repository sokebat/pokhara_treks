import { ListingPage } from "@/components/shared/listing";
import TripListingCard from "@/features/site/trips/components/TripListingCard";
import type { TripListingItem } from "@/features/site/trips/constant/types";

type GridListingViewProps = {
  eyebrow: string;
  title: string;
  description: string;
  trips: TripListingItem[];
  ctaLabel: string;
  featuredFirst?: boolean;
  showPrice?: boolean;
};

const GridListingView = ({
  eyebrow,
  title,
  description,
  trips,
  ctaLabel,
  featuredFirst = true,
  showPrice = true,
}: GridListingViewProps) => (
  <ListingPage eyebrow={eyebrow} title={title} description={description}>
    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:mt-8">
      {trips.map((trip, index) => (
        <TripListingCard
          key={trip.href}
          trip={trip}
          index={index}
          ctaLabel={ctaLabel}
          featured={featuredFirst && index === 0}
          showPrice={showPrice}
        />
      ))}
    </div>
  </ListingPage>
);

export default GridListingView;
