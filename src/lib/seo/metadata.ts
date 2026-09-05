import type { Metadata } from "next";

import { siteInfo } from "@/constant/site";
import type { TrekkingRegion } from "@/features/site/region/constant/regions";

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  image?: string;
  imageAlt?: string;
  absoluteTitle?: boolean;
  noIndex?: boolean;
};

export function absoluteUrl(path = "/") {
  if (!path || path === "/") return siteInfo.url;
  return `${siteInfo.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageMetadata({
  title,
  description,
  path,
  keywords,
  image,
  imageAlt,
  absoluteTitle,
  noIndex,
}: PageSeo): Metadata {
  const url = absoluteUrl(path);
  const socialTitle = absoluteTitle ? title : `${title} | ${siteInfo.name}`;
  const ogImage = image ?? siteInfo.ogImage;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords,
    applicationName: siteInfo.name,
    authors: [{ name: siteInfo.name, url: siteInfo.url }],
    creator: siteInfo.name,
    publisher: siteInfo.name,
    category: "travel",
    alternates: noIndex ? undefined : { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      type: "website",
      locale: siteInfo.locale,
      url,
      siteName: siteInfo.name,
      title: socialTitle,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: imageAlt ?? title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [ogImage],
    },
  };
}

export function regionMetadata(region: TrekkingRegion): Metadata {
  return pageMetadata({
    title: `${region.title} Trekking`,
    description: `${region.description} Guided from our Lakeside office in Pokhara.`,
    path: `/region/${region.slug}`,
    image: region.image,
    imageAlt: region.imageAlt,
    keywords: [
      `${region.title} trek`,
      `trekking in ${region.shortLabel}`,
      `${region.shortLabel} Nepal`,
      ...region.highlights.slice(0, 3),
      "Pokhara Treks",
      "Nepal trekking",
    ],
  });
}
