import { GridListingView } from "@/features/site/listing";
import { regionListingPage } from "@/features/site/region/constant/listing";
import { trekkingRegions } from "@/features/site/region/constant/regions";

const RegionsView = () => (
  <GridListingView
    eyebrow={regionListingPage.eyebrow}
    title={regionListingPage.heading}
    description={regionListingPage.intro}
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
