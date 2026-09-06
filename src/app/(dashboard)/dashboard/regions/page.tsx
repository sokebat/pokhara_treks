import RegionsTable from "@/features/dashboard/regions/components/RegionsTable";
import { getRegionsForDashboard } from "@/features/dashboard/regions/service/region.service";

export const metadata = {
  title: "Regions",
};

type RegionsPageProps = {
  searchParams: Promise<{ saved?: string }>;
};

export default async function RegionsPage({ searchParams }: RegionsPageProps) {
  const [{ saved }, rows] = await Promise.all([
    searchParams,
    getRegionsForDashboard(),
  ]);

  return (
    <RegionsTable
      savedTitle={saved ?? null}
      rows={rows.map((region) => ({
        id: region.id,
        slug: region.slug,
        title: region.title,
        location: region.location,
        typicalDuration: region.typicalDuration,
        highestPoint: region.highestPoint,
        publicHref: `/region/${region.slug}`,
      }))}
    />
  );
}
