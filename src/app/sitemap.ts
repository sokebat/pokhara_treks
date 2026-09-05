import type { MetadataRoute } from "next";

import { trekkingRegions } from "@/features/site/region/constant/regions";
import { absoluteUrl, publicPages } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

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

  const regions: MetadataRoute.Sitemap = trekkingRegions.map((region) => ({
    url: absoluteUrl(`/region/${region.slug}`),
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...pages, ...regions];
}
