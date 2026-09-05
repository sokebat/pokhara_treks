import ListingPage from "./ListingPage";
import TripListingCard from "./TripListingCard";
import { listingCardGridClass } from "@/features/site/listing/lib/grid";
import type { TripListingItem } from "@/features/site/listing/types";

type GridListingViewProps = {
  eyebrow: string;
  title: string;
  description: string;
  trips: TripListingItem[];
  ctaLabel: string;
};

const GridListingView = ({
  eyebrow,
  title,
  description,
  trips,
  ctaLabel,
}: GridListingViewProps) => (
  <ListingPage eyebrow={eyebrow} title={title} description={description}>
    <div className={listingCardGridClass}>
      {trips.map((trip, index) => (
        <TripListingCard
          key={trip.href}
          trip={trip}
          index={index}
          ctaLabel={ctaLabel}
        />
      ))}
    </div>
  </ListingPage>
);

export default GridListingView;
