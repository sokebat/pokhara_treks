import { eq } from "drizzle-orm";

import { db } from "@/db";
import { pageSeo } from "@/db/schema";
import { PageSeoPersistenceError } from "@/features/page-seo/lib/errors";
import type { PageSeoRecord } from "@/features/page-seo/types";

export async function findPageSeoByPath(
  path: string,
): Promise<PageSeoRecord | null> {
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

  return row ?? null;
}

export async function upsertPageSeo(
  input: PageSeoRecord,
): Promise<PageSeoRecord> {
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

  if (!row) {
    throw new PageSeoPersistenceError();
  }

  return row;
}
