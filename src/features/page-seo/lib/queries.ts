import { eq } from "drizzle-orm";

import { db } from "@/db";
import { pageSeo } from "@/db/schema";
import { publicPages } from "@/lib/seo/pages";

import {
  formatKeywords,
  type PageSeoRecord,
} from "@/features/page-seo/lib/keywords";

export function defaultPageSeo(path: string): PageSeoRecord {
  const page = publicPages.find((item) => item.path === path);
  if (!page) {
    throw new Error(`No default SEO for ${path}`);
  }

  return {
    path,
    title: page.title,
    description: page.description,
    keywords: formatKeywords(page.keywords ?? []),
  };
}

export async function getPageSeoByPath(
  path: string,
): Promise<PageSeoRecord> {
  try {
    const [row] = await db
      .select({
        path: pageSeo.path,
        title: pageSeo.title,
        description: pageSeo.description,
        keywords: pageSeo.keywords,
      })
      .from(pageSeo)
      .where(eq(pageSeo.path, path))
      .limit(1);

    if (row) return row;
  } catch {
    // DB can be down during local UI work — fall back to static copy.
  }

  return defaultPageSeo(path);
}

export async function upsertPageSeo(input: PageSeoRecord) {
  const [row] = await db
    .insert(pageSeo)
    .values(input)
    .onConflictDoUpdate({
      target: pageSeo.path,
      set: {
        title: input.title,
        description: input.description,
        keywords: input.keywords,
      },
    })
    .returning({
      path: pageSeo.path,
      title: pageSeo.title,
      description: pageSeo.description,
      keywords: pageSeo.keywords,
    });

  return row;
}
