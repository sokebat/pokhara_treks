import type { RegionRow } from "@/db/schema";
import {
  regionFactIcons,
  type PublicRegion,
  type PublicRegionFact,
} from "@/features/site/region/types/public-region";
import { TbMountain } from "react-icons/tb";

function fact(
  label: keyof typeof regionFactIcons | string,
  value: string,
): PublicRegionFact | null {
  const trimmed = value.trim();
  if (!trimmed) return null;
  const icon =
    regionFactIcons[label as keyof typeof regionFactIcons] ?? TbMountain;
  return { label, value: trimmed, icon };
}

export function mapRegionRowToPublic(row: RegionRow): PublicRegion {
  const facts = [
    fact("Highest point", row.highestPoint),
    fact("Best season", row.bestSeason),
    fact("Permits", row.permits),
    fact("Typical trek", row.typicalDuration),
  ].filter((item): item is PublicRegionFact => item != null);

  return {
    slug: row.slug,
    title: row.title,
    shortLabel: row.shortLabel || row.title,
    tagline: row.tagline,
    description: row.description,
    location: row.location,
    image: row.image || "/images/collage-trekking.jpg",
    imageAlt: row.imageAlt || row.title,
    bodyHtml: row.bodyHtml,
    metaTitle: row.metaTitle || `${row.title} Trekking`,
    metaDescription:
      row.metaDescription ||
      `${row.description} Guided from our Lakeside office in Pokhara.`,
    keywords: row.keywords,
    highestPoint: row.highestPoint,
    bestSeason: row.bestSeason,
    typicalDuration: row.typicalDuration,
    facts,
  };
}
