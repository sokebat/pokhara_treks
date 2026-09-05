import SectionedListingView from "@/features/site/trips/components/SectionedListingView";
import ToursSectionNav from "@/features/site/trips/components/ToursSectionNav";
import { tourSections } from "@/features/site/trips/constant/tours";

const ToursView = () => (
  <SectionedListingView
    eyebrow="Tours"
    title="Tours from Pokhara"
    description="Day hikes, sunrise and city days, multi-day Nepal circuits, birding and wildlife safari — booked from the same office as our treks."
    headerId="tours-top"
    nav={<ToursSectionNav />}
    sections={tourSections}
    singular="tour"
    plural="tours"
    ctaLabel="View tour"
  />
);

export default ToursView;
