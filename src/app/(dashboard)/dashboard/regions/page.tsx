import RegionsTable from "@/features/dashboard/regions/components/RegionsTable";

export const metadata = {
  title: "Regions",
};

type RegionsPageProps = {
  searchParams: Promise<{ saved?: string }>;
};

export default async function RegionsPage({ searchParams }: RegionsPageProps) {
  const { saved } = await searchParams;
  return <RegionsTable savedTitle={saved ?? null} />;
}
