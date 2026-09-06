import { notFound } from "next/navigation";

import RegionForm from "@/features/dashboard/regions/components/RegionForm";
import {
  getRegionForEditor,
  rowToFormValues,
} from "@/features/dashboard/regions/service/region.service";

type EditRegionPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: EditRegionPageProps) {
  const { slug } = await params;
  const region = await getRegionForEditor(slug);
  return {
    title: region ? `Edit ${region.title}` : "Edit region",
  };
}

export default async function EditRegionPage({ params }: EditRegionPageProps) {
  const { slug } = await params;
  const region = await getRegionForEditor(slug);
  if (!region) notFound();

  return (
    <RegionForm
      mode="edit"
      regionId={region.id}
      initialValues={rowToFormValues(region)}
    />
  );
}
