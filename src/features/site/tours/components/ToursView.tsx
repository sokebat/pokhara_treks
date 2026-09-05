import { SectionedListingView } from "@/features/site/listing";
import ToursSectionNav from "@/features/site/tours/components/ToursSectionNav";
import { tourSections } from "@/features/site/tours/constant/tours";

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
