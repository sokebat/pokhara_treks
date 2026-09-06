import ListingSeoPage from "@/features/page-seo/components/ListingSeoPage";

export const metadata = {
  title: "region-meta",
};

export default async function RegionMetaPage() {
  return <ListingSeoPage pageKey="regions" />;
}
