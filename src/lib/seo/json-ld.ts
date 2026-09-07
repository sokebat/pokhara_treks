import { siteInfo } from "@/constant/site";
import type { FaqItem } from "@/features/site/faq/constant/faq";
import type { PublicRegion } from "@/features/site/region/types/public-region";

import { absoluteUrl } from "./metadata";

function faqAnswerText(item: FaqItem) {
  return item.sections
    .flatMap((section) => [section.paragraph, ...(section.list ?? [])])
    .filter(Boolean)
    .join(" ");
}

export function organizationJsonLd() {
  const url = siteInfo.url;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: siteInfo.name,
        description:
          "Women-led Nepal adventures, trekking and expeditions from Pokhara.",
        inLanguage: "en",
        publisher: { "@id": `${url}/#organization` },
      },
      {
        "@type": "TravelAgency",
        "@id": `${url}/#organization`,
        name: siteInfo.name,
        url,
        email: siteInfo.email,
        telephone: siteInfo.phone,
        image: absoluteUrl(siteInfo.ogImage),
        logo: absoluteUrl("/images/logo-lg.png"),
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Lakeside, Pokhara-6",
          addressLocality: "Pokhara",
          addressRegion: "Gandaki Province",
          addressCountry: "NP",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: siteInfo.geo.latitude,
          longitude: siteInfo.geo.longitude,
        },
        sameAs: [
          siteInfo.social.facebook,
          siteInfo.social.instagram,
          siteInfo.social.youtube,
        ],
      },
    ],
  };
}

export function faqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqAnswerText(item),
      },
    })),
  };
}

export function breadcrumbJsonLd(crumbs: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

type RegionSeoSource = Pick<
  PublicRegion,
  "slug" | "title" | "description" | "image"
>;

export function regionJsonLd(region: RegionSeoSource) {
  return [
    breadcrumbJsonLd([
      { name: "Home", path: "/" },
      { name: "Trekking Regions", path: "/region" },
      { name: region.title, path: `/region/${region.slug}` },
    ]),
    {
      "@context": "https://schema.org",
      "@type": "TouristDestination",
      name: region.title,
      description: region.description,
      url: absoluteUrl(`/region/${region.slug}`),
      image: absoluteUrl(region.image),
      touristType: "Trekking",
    },
  ];
}
