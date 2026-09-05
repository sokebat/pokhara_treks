import { GridListingView } from "@/features/site/listing";
import { trekkingRegions } from "@/features/site/region/constant/regions";

const RegionsView = () => (
  <GridListingView
    eyebrow="Trekking Regions"
    title="Where we walk in the Himalaya"
    description="Eight regions we run from Pokhara — Annapurna at our door, Everest, Manaslu, Langtang and the quieter trails farther out."
    trips={trekkingRegions.map((region) => ({
      title: region.label,
      excerpt: region.description,
      href: `/region/${region.slug}`,
      duration: region.typicalDuration,
      location: region.location,
      image: region.image,
      tag: region.shortLabel,
      icon: region.icon,
    }))}
    ctaLabel="View Region"
  />
);

export default RegionsView;
