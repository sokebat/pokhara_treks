import { GridListingView } from "@/features/site/listing";
import { trekkingSections } from "@/features/site/trekking/constant/trekking";

const TrekkingView = () => (
  <GridListingView
    eyebrow="Trekking & Hiking"
    title="Treks from Pokhara"
    description="Annapurna, Everest, Manaslu, Langtang and the quieter west. Lodge treks run by the same Lakeside team."
    trips={trekkingSections.flatMap((section) => section.items)}
    ctaLabel="View Trek"
  />
);

export default TrekkingView;
