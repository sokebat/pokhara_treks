import { asc, eq } from "drizzle-orm";

import { db } from "@/db";
import { regions, type NewRegion, type RegionRow } from "@/db/schema";

export async function listRegions(): Promise<RegionRow[]> {
  return db
    .select()
    .from(regions)
    .orderBy(asc(regions.sortOrder), asc(regions.title));
}

export async function findRegionById(id: string): Promise<RegionRow | null> {
  const [row] = await db
    .select()
    .from(regions)
    .where(eq(regions.id, id))
    .limit(1);
  return row ?? null;
}

export async function findRegionBySlug(
  slug: string,
): Promise<RegionRow | null> {
  const [row] = await db
    .select()
    .from(regions)
    .where(eq(regions.slug, slug))
    .limit(1);
  return row ?? null;
}

export async function insertRegion(input: NewRegion): Promise<RegionRow> {
  const [row] = await db.insert(regions).values(input).returning();
  if (!row) throw new Error("Failed to create region");
  return row;
}

export async function updateRegionById(
  id: string,
  input: Omit<NewRegion, "id" | "createdAt">,
): Promise<RegionRow> {
  const [row] = await db
    .update(regions)
    .set(input)
    .where(eq(regions.id, id))
    .returning();
  if (!row) throw new Error("Failed to update region");
  return row;
}

export async function deleteRegionById(id: string): Promise<void> {
  await db.delete(regions).where(eq(regions.id, id));
}

export async function upsertRegionBySlug(input: NewRegion): Promise<RegionRow> {
  const [row] = await db
    .insert(regions)
    .values(input)
    .onConflictDoUpdate({
      target: regions.slug,
      set: {
        title: input.title,
        shortLabel: input.shortLabel,
        tagline: input.tagline,
        location: input.location,
        description: input.description,
        metaTitle: input.metaTitle,
        metaDescription: input.metaDescription,
        keywords: input.keywords,
        image: input.image,
        imageAlt: input.imageAlt,
        highestPoint: input.highestPoint,
        bestSeason: input.bestSeason,
        permits: input.permits,
        typicalDuration: input.typicalDuration,
        bodyHtml: input.bodyHtml,
        sortOrder: input.sortOrder,
      },
    })
    .returning();

  if (!row) throw new Error("Failed to upsert region");
  return row;
}
