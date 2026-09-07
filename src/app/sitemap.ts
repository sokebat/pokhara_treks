import type { MetadataRoute } from "next";

import { listPublicRegionSlugs } from "@/features/site/region/service/public-region.service";
import { absoluteUrl, publicPages } from "@/lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date();
  const regionSlugs = await listPublicRegionSlugs();

  const pages: MetadataRoute.Sitemap = publicPages.map((page) => ({
    url: absoluteUrl(page.path),
    lastModified,
    changeFrequency: page.path === "/" ? "weekly" : "monthly",
    priority:
      page.path === "/"
        ? 1
        : page.path === "/privacy" || page.path === "/terms"
          ? 0.3
          : 0.8,
  }));

  const regions: MetadataRoute.Sitemap = regionSlugs.map((slug) => ({
    url: absoluteUrl(`/region/${slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...pages, ...regions];
}
