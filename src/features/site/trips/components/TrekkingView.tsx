import SectionedListingView from "@/features/site/trips/components/SectionedListingView";
import TrekkingSectionNav from "@/features/site/trips/components/TrekkingSectionNav";
import { trekkingSections } from "@/features/site/trips/constant/trekking";

const TrekkingView = () => (
  <SectionedListingView
    eyebrow="Trekking & Hiking"
    title="Treks from Pokhara"
    description="Annapurna, Everest, Manaslu, Langtang and the quieter west. Lodge treks run by the same Lakeside team — click a region or browse the full list."
    headerId="trekking-top"
    nav={<TrekkingSectionNav />}
    sections={trekkingSections}
    singular="trek"
    plural="treks"
    ctaLabel="View trek"
  />
);

export default TrekkingView;
