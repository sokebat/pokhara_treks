import type { Metadata } from "next";

import { siteInfo } from "@/constant/site";
import type { FaqItem } from "@/features/site/faq/constant/faq";
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

export const publicPages: PageSeo[] = [
  {
    path: "/",
    absoluteTitle: true,
    title: "Pokhara Treks & Expeditions | Women-Led Nepal Trekking",
    description:
      "Book treks, peak climbs and heli tours in Nepal with a women-led, locally owned team based in Lakeside, Pokhara — licensed guides, small groups, book direct.",
    keywords: [
      "Nepal trekking",
      "Pokhara treks",
      "women-led trekking Nepal",
      "Annapurna trek",
      "Everest Base Camp trek",
      "female guide Nepal",
    ],
  },
  {
    path: "/trip",
    title: "Trekking in Nepal",
    description:
      "Annapurna, Everest, Manaslu, Langtang and west Nepal treks from Pokhara — lodge treks run by a Lakeside team.",
    keywords: [
      "Nepal treks",
      "Annapurna Base Camp",
      "Everest Base Camp trek",
      "Manaslu circuit",
      "Langtang trek",
      "Pokhara trekking packages",
    ],
  },
  {
    path: "/region",
    title: "Trekking Regions in Nepal",
    description:
      "Everest, Annapurna, Manaslu, Langtang, Dhaulagiri, west Nepal, Kanchenjunga, plus Tibet and Bhutan journeys from Pokhara.",
    keywords: [
      "Nepal trekking regions",
      "Everest region",
      "Annapurna region",
      "Manaslu region",
      "Langtang region",
      "trekking from Pokhara",
    ],
  },
  {
    path: "/about-us",
    title: "About Us",
    description:
      "Pokhara Treks is a women-led, locally owned trekking company in Lakeside, Pokhara — licensed female guides, small groups, book direct.",
    keywords: [
      "about Pokhara Treks",
      "women-led trekking company Nepal",
      "local trekking agency Pokhara",
      "female trekking guides Nepal",
    ],
  },
  {
    path: "/contact",
    title: "Contact Us",
    description:
      "Call, email or visit Pokhara Treks in Lakeside to plan a trek, tour or helicopter flight. A person in the office replies, usually the same day.",
    keywords: [
      "contact Pokhara Treks",
      "trekking agency Lakeside Pokhara",
      "book trek Nepal",
      "Pokhara trekking office",
    ],
  },
  {
    path: "/customize-my-trip",
    title: "Customize My Trip",
    description:
      "Tell us your dates, group size and interests and our local trip planners will build a custom Nepal itinerary around them.",
    keywords: [
      "custom trek Nepal",
      "private trekking Nepal",
      "tailor made Nepal trip",
      "customize trek Pokhara",
    ],
  },
  {
    path: "/faq",
    title: "Frequently Asked Questions",
    description:
      "Answers to common questions about trekking in Nepal with Pokhara Treks — gear, permits, visas, safety, booking and payments.",
    keywords: [
      "Nepal trekking FAQ",
      "trekking permits Nepal",
      "Nepal visa",
      "trekking insurance Nepal",
      "guide and porter Nepal",
    ],
  },
  {
    path: "/activity",
    title: "Activities in Pokhara",
    description:
      "Bungee, paragliding, ultralight, zipline, rafting, cycling and canyoning from Pokhara — booked with the same local team that runs our treks.",
    keywords: [
      "Pokhara activities",
      "paragliding Pokhara",
      "bungee jump Pokhara",
      "rafting Nepal",
      "zipline Pokhara",
    ],
    image: "/images/collage-paragliding.jpg",
  },
  {
    path: "/tours",
    title: "Tours in Nepal",
    description:
      "Day hikes, city and sunrise tours, multi-day Nepal circuits, birding and wildlife safari from Pokhara.",
    keywords: [
      "Nepal tours",
      "Pokhara day tour",
      "Kathmandu day tour",
      "Chitwan safari",
      "Nepal cultural tour",
    ],
  },
  {
    path: "/heli-tours",
    title: "Helicopter Tours from Pokhara",
    description:
      "Annapurna, Mardi, Tilicho, Mustang, Everest and Muktinath helicopter landing tours from Pokhara — morning flights, back in Lakeside for lunch.",
    keywords: [
      "Pokhara helicopter tour",
      "Annapurna Base Camp helicopter",
      "Everest helicopter tour",
      "Mardi Himal heli tour",
    ],
    image: "/images/collage-heli.jpg",
  },
  {
    path: "/blogs",
    title: "Trekking Guides and Stories",
    description:
      "Practical trekking advice from our Pokhara team — routes, costs, permits, packing, and travelling as a woman in the Himalaya.",
    keywords: [
      "Nepal trekking blog",
      "trekking tips Nepal",
      "solo female trekking",
      "Annapurna trek cost",
      "Nepal trekking permits",
    ],
  },
  {
    path: "/destinations",
    title: "Destinations — Nepal, Tibet and Bhutan",
    description:
      "Treks and tours in Nepal from Pokhara, plus Tibet Kailash and Bhutan itineraries with the same local team.",
    keywords: [
      "Nepal destinations",
      "Tibet tour from Nepal",
      "Bhutan tour",
      "Kailash Mansarovar",
      "Himalayan destinations",
    ],
  },
  {
    path: "/peak-climbing",
    title: "Peak Climbing in Nepal",
    description:
      "Mera, Island, Lobuche, Mardi Himal, Yala and Chulu Far East — guided trekking peaks from Pokhara Treks.",
    keywords: [
      "Nepal peak climbing",
      "Mera Peak",
      "Island Peak",
      "Lobuche East",
      "trekking peaks Nepal",
    ],
  },
  {
    path: "/privacy",
    title: "Privacy Policy",
    description:
      "How Pokhara Treks & Expeditions collects, uses and protects your personal information when you use our website and book a trip.",
    keywords: ["privacy policy", "Pokhara Treks privacy"],
  },
  {
    path: "/terms",
    title: "Terms & Conditions",
    description:
      "The booking terms and conditions that apply to treks, tours and trips with Pokhara Treks & Expeditions.",
    keywords: ["trekking terms and conditions", "Pokhara Treks booking terms"],
  },
];

export function getPageSeo(path: string) {
  const page = publicPages.find((item) => item.path === path);
  if (!page) {
    throw new Error(`Missing SEO config for ${path}`);
  }
  return pageMetadata(page);
}

function faqAnswerText(item: FaqItem) {
  return item.sections
    .flatMap((section) => [
      section.paragraph,
      ...(section.list ?? []),
    ])
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

export function breadcrumbJsonLd(
  crumbs: { name: string; path: string }[],
) {
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

export function regionJsonLd(region: TrekkingRegion) {
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
