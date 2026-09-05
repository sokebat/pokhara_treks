import type { SectionMeta } from "@/features/site/listing";

import { coreRegions } from "./core-regions";
import { remoteRegions } from "./remote-regions";
import type { TrekkingRegion } from "./types";

export type { RegionFact, TrekkingRegion } from "./types";

export const trekkingRegions: TrekkingRegion[] = [
  ...coreRegions,
  ...remoteRegions,
];

export const regionMetaByLabel: Record<string, SectionMeta> =
  Object.fromEntries(
    trekkingRegions.map((region) => [
      region.label,
      {
        shortLabel: region.shortLabel,
        icon: region.icon,
        description: region.description,
      } satisfies SectionMeta,
    ]),
  );

export function getRegionBySlug(slug: string) {
  return trekkingRegions.find((region) => region.slug === slug);
}

export function regionPath(slug: string) {
  return `/region/${slug}`;
}
