import { pageMetadata } from "@/lib/seo/metadata";

import { parseKeywords } from "@/features/page-seo/lib/keywords";
import { getPageSeoByPath } from "@/features/page-seo/lib/queries";

export async function listingPageMetadata(path: string) {
  const record = await getPageSeoByPath(path);

  return pageMetadata({
    path: record.path,
    title: record.title,
    description: record.description,
    keywords: parseKeywords(record.keywords),
  });
}
