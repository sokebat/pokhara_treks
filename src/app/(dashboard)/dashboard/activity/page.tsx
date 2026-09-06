import CatalogView from "@/features/dashboard/components/catalog/CatalogView";
import { getCatalog } from "@/features/dashboard/lib/catalog";
import { contentPaths } from "@/features/dashboard/lib/content-paths";

export const metadata = {
  title: "Activity",
};

export default function ActivityPage() {
  const catalog = getCatalog(contentPaths.activity);
  if (!catalog) return null;
  return <CatalogView catalog={catalog} />;
}
