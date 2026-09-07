import type { Metadata } from "next";
import { notFound } from "next/navigation";

import RegionView from "@/features/site/region/components/RegionView";
import {
  getPublicRegionBySlug,
  listPublicRegionLinks,
  listPublicRegionSlugs,
} from "@/features/site/region/service/public-region.service";
import { regionMetadata } from "@/lib/seo";

type RegionPageProps = {
  params: Promise<{ slug: string }>;
};

export const revalidate = 3600;
export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await listPublicRegionSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: RegionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const region = await getPublicRegionBySlug(slug);

  if (!region) {
    return { title: "Region" };
  }

  return regionMetadata(region);
}

export default async function RegionPage({ params }: RegionPageProps) {
  const { slug } = await params;
  const [region, links] = await Promise.all([
    getPublicRegionBySlug(slug),
    listPublicRegionLinks(),
  ]);

  if (!region) {
    notFound();
  }

  const otherRegions = links.filter((item) => item.slug !== region.slug);

  return <RegionView region={region} otherRegions={otherRegions} />;
}
