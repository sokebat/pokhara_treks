import GridListingView from "@/features/site/trips/components/GridListingView";
import { destinationTrips } from "@/features/site/trips/constant/destinations";

const DestinationsView = () => (
  <GridListingView
    eyebrow="Destinations"
    title="Nepal, Tibet and Bhutan"
    description="Himalayan treks and tours from Pokhara, plus Kailash and Bhutan itineraries arranged with the same local team."
    trips={destinationTrips}
    ctaLabel="Explore"
    showPrice={false}
  />
);

export default DestinationsView;
