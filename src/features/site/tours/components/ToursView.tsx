import { GridListingView } from "@/features/site/listing";
import { tourSections } from "@/features/site/tours/constant/tours";

const ToursView = () => (
  <GridListingView
    eyebrow="Tours"
    title="Tours from Pokhara"
    description="Day hikes, sunrise and city days, multi-day Nepal circuits, birding and wildlife safari — booked from the same office as our treks."
    trips={tourSections.flatMap((section) => section.items)}
    ctaLabel="View Tour"
  />
);

export default ToursView;
