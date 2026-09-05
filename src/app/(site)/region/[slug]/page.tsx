import type { Metadata } from "next";
import { notFound } from "next/navigation";

import RegionView from "@/features/site/region/components/RegionView";
import {
  getRegionBySlug,
  trekkingRegions,
} from "@/features/site/region/constant/regions";
import { regionMetadata } from "@/lib/seo";

type RegionPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return trekkingRegions.map((region) => ({ slug: region.slug }));
}

export async function generateMetadata({
  params,
}: RegionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const region = getRegionBySlug(slug);

  if (!region) {
    return { title: "Region" };
  }

  return regionMetadata(region);
}

export default async function RegionPage({ params }: RegionPageProps) {
  const { slug } = await params;
  const region = getRegionBySlug(slug);

  if (!region) {
    notFound();
  }

  return <RegionView region={region} />;
}
