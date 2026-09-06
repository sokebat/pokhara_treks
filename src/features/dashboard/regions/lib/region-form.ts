import type { TrekkingRegion } from "@/features/site/region/constant/types";

import {
  emptyRegionFormValues,
  type RegionFormValues,
} from "@/features/dashboard/regions/types";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export function paragraphsToHtml(paragraphs: string[]) {
  return paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join("");
}

export function highlightsToHtml(highlights: string[]) {
  if (highlights.length === 0) return "<ul><li></li></ul>";
  return `<ul>${highlights
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join("")}</ul>`;
}

function factValue(region: TrekkingRegion, label: string) {
  return region.facts.find((fact) => fact.label === label)?.value ?? "";
}

export function regionSeoDefaults(region: TrekkingRegion) {
  return {
    metaTitle: `${region.title} Trekking`,
    metaDescription: `${region.description} Guided from our Lakeside office in Pokhara.`,
    keywords: [
      `${region.title} trek`,
      `trekking in ${region.shortLabel}`,
      `${region.shortLabel} Nepal`,
      ...region.highlights.slice(0, 3),
      "Pokhara Treks",
      "Nepal trekking",
    ].join(", "),
  };
}

export function regionToFormValues(region: TrekkingRegion): RegionFormValues {
  const seo = regionSeoDefaults(region);

  return {
    title: region.title,
    shortLabel: region.shortLabel,
    tagline: region.tagline,
    slug: region.slug,
    location: region.location,
    description: region.description,
    metaTitle: seo.metaTitle,
    metaDescription: seo.metaDescription,
    keywords: seo.keywords,
    image: region.image,
    imageAlt: region.imageAlt,
    highestPoint: factValue(region, "Highest point"),
    bestSeason: factValue(region, "Best season"),
    permits: factValue(region, "Permits"),
    typicalDuration:
      factValue(region, "Typical trek") || region.typicalDuration,
    bodyHtml: paragraphsToHtml(region.paragraphs),
    highlightsHtml: highlightsToHtml(region.highlights),
  };
}

export function createBlankRegionForm(): RegionFormValues {
  return emptyRegionFormValues();
}
