import { GridListingView } from "@/features/site/listing";
import { heliTours } from "@/features/site/heli-tours/constant/heli-tours";
import { toHeliListingItem } from "@/features/site/heli-tours/lib/heli-tours";

const HeliToursView = () => (
  <GridListingView
    eyebrow="Helicopter Tours"
    title="Helicopter tours from Pokhara"
    description="Annapurna, Mardi, Everest and Muktinath from the air. Land at base camp, a glacier lake, or a temple — and be back in Lakeside for lunch."
    trips={heliTours.map(toHeliListingItem)}
    ctaLabel="View Tour"
  />
);

export default HeliToursView;
