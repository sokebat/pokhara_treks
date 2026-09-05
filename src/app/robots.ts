import type { MetadataRoute } from "next";

import { siteInfo } from "@/constant/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/login", "/dashboard", "/dashboard/", "/api/"],
      },
    ],
    sitemap: `${siteInfo.url}/sitemap.xml`,
    host: siteInfo.url,
  };
}
