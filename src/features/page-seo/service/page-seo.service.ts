import { cache } from "react";
import { revalidatePath, revalidateTag, unstable_cache } from "next/cache";
import type { Metadata } from "next";

import { siteInfo } from "@/constant/site";
import { publicPages } from "@/lib/seo/pages";
import { absoluteUrl, pageMetadata } from "@/lib/seo/metadata";
import {
  PAGE_SEO_CACHE_KEY,
  PAGE_SEO_CACHE_TAG,
  PAGE_SEO_REVALIDATE_SECONDS,
} from "@/features/page-seo/constant/cache";
import {
  getListingSeoPage,
  type ListingPublicPath,
} from "@/features/page-seo/constant/pages";
import { normalizeKeywords, parseKeywords } from "@/features/page-seo/lib/keywords";
import {
  findPageSeoByPath,
  upsertPageSeo,
} from "@/features/page-seo/repository/page-seo.repository";
import type { PageSeoRecord } from "@/features/page-seo/types";
import type { PageSeoFormValues } from "@/features/page-seo/validation/page-seo.validation";

const STATIC_FALLBACK: PageSeoRecord = {
  path: "/",
  title: "Pokhara Treks & Expeditions",
  description:
    "Treks, tours and adventures in Nepal with a women-led team based in Pokhara.",
  keywords: "Nepal trekking, Pokhara treks",
};

export function defaultListingSeo(path: ListingPublicPath): PageSeoRecord {
  const page = publicPages.find((item) => item.path === path);
  if (!page) {
    return { ...STATIC_FALLBACK, path };
  }

  return {
    path,
    title: page.title,
    description: page.description,
    keywords: normalizeKeywords((page.keywords ?? []).join(", ")),
  };
}

async function readListingSeo(path: ListingPublicPath): Promise<PageSeoRecord> {
  const row = await findPageSeoByPath(path);
  return row ?? defaultListingSeo(path);
}

const getCachedListingSeoRow = unstable_cache(
  async (path: ListingPublicPath) => findPageSeoByPath(path),
  [PAGE_SEO_CACHE_KEY],
  {
    tags: [PAGE_SEO_CACHE_TAG],
    revalidate: PAGE_SEO_REVALIDATE_SECONDS,
  },
);

/** Fresh dashboard read. Memoized for the current request. Never throws. */
export const getListingSeoForEditor = cache(
  async (path: ListingPublicPath): Promise<PageSeoRecord> => {
    try {
      return await readListingSeo(path);
    } catch {
      return defaultListingSeo(path);
    }
  },
);

/** Cached public read for metadata and JSON-LD. Never throws. */
export const getListingSeoForPublic = cache(
  async (path: ListingPublicPath): Promise<PageSeoRecord> => {
    try {
      const row = await getCachedListingSeoRow(path);
      return row ?? defaultListingSeo(path);
    } catch {
      return defaultListingSeo(path);
    }
  },
);

export async function listingPageMetadata(
  path: ListingPublicPath,
): Promise<Metadata> {
  const record = await getListingSeoForPublic(path);

  return pageMetadata({
    path: record.path,
    title: record.title,
    description: record.description,
    keywords: parseKeywords(record.keywords),
  });
}

export async function listingWebPageJsonLd(path: ListingPublicPath) {
  const record = await getListingSeoForPublic(path);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    url: absoluteUrl(record.path),
    name: record.title,
    description: record.description,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteInfo.url}/#website`,
    },
  };
}

export async function saveListingSeo(input: PageSeoFormValues) {
  const page = getListingSeoPage(input.key);
  const record = await upsertPageSeo({
    path: page.publicPath,
    title: input.title,
    description: input.description,
    keywords: normalizeKeywords(input.keywords),
  });

  revalidatePath(page.publicPath);
  revalidatePath(page.dashboardPath);
  revalidateTag(PAGE_SEO_CACHE_TAG, "max");

  return record;
}
