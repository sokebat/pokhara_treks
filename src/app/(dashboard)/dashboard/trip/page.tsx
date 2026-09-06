import CatalogView from "@/features/dashboard/components/catalog/CatalogView";
import { getCatalog } from "@/features/dashboard/lib/catalog";
import { contentPaths } from "@/features/dashboard/lib/content-paths";

export const metadata = {
  title: "Trip",
};

export default function TripPage() {
  const catalog = getCatalog(contentPaths.trekking);
  if (!catalog) return null;
  return <CatalogView catalog={catalog} />;
}
