import { GridListingView } from "@/features/site/listing";
import { destinationTrips } from "@/features/site/destinations/constant/destinations";

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
