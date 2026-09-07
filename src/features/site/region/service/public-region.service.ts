import { cache } from "react";

import {
  findRegionBySlug,
  listRegions,
} from "@/features/dashboard/regions/repository/region.repository";
import {
  mapRegionRowToPublic,
} from "@/features/site/region/lib/map-region";
import type {
  PublicRegion,
  PublicRegionLink,
} from "@/features/site/region/types/public-region";

export const getPublicRegionBySlug = cache(
  async (slug: string): Promise<PublicRegion | null> => {
    try {
      const row = await findRegionBySlug(slug);
      return row ? mapRegionRowToPublic(row) : null;
    } catch (error) {
      console.error("[regions] public find failed", error);
      return null;
    }
  },
);

export const listPublicRegions = cache(async (): Promise<PublicRegion[]> => {
  try {
    const rows = await listRegions();
    return rows.map(mapRegionRowToPublic);
  } catch (error) {
    console.error("[regions] public list failed", error);
    return [];
  }
});

export const listPublicRegionLinks = cache(
  async (): Promise<PublicRegionLink[]> => {
    const regions = await listPublicRegions();
    return regions.map((region) => ({
      slug: region.slug,
      title: region.title,
      shortLabel: region.shortLabel,
    }));
  },
);

export const listPublicRegionSlugs = cache(async (): Promise<string[]> => {
  const regions = await listPublicRegions();
  return regions.map((region) => region.slug);
});
