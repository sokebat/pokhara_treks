import CatalogView from "@/features/dashboard/components/catalog/CatalogView";
import { trekkingRegions } from "@/features/site/region/constant/regions";

export const metadata = {
  title: "Regions",
};

export default function RegionsPage() {
  return (
    <CatalogView
      catalog={{
        kind: "list",
        title: "Region",
        description: "Trekking region pages published on /region.",
        metaLabel: "Typical trek",
        rows: trekkingRegions.map((region) => ({
          title: region.title,
          href: `/region/${region.slug}`,
          location: region.location,
          meta: region.typicalDuration,
        })),
      }}
    />
  );
}
