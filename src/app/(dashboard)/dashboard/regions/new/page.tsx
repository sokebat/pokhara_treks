import RegionForm from "@/features/dashboard/regions/components/RegionForm";
import { createBlankRegionForm } from "@/features/dashboard/regions/lib/region-form";

export const metadata = {
  title: "Add region",
};

export default function NewRegionPage() {
  return <RegionForm mode="new" initialValues={createBlankRegionForm()} />;
}
