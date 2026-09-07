import type { NewRegion, RegionRow } from "@/db/schema";
import { contentPaths } from "@/features/dashboard/lib/content-paths";
import {
  deleteRegionById,
  findRegionById,
  findRegionBySlug,
  insertRegion,
  listRegions,
  updateRegionById,
  upsertRegionBySlug,
} from "@/features/dashboard/regions/repository/region.repository";
import type {
  RegionFormValues,
  RegionTableRow,
} from "@/features/dashboard/regions/types";
import type { RegionFormInput } from "@/features/dashboard/regions/validation/region.validation";
import { regionPath } from "@/features/site/region/constant/regions";
import { revalidatePath } from "next/cache";
import { cache } from "react";

export function rowToFormValues(row: RegionRow): RegionFormValues {
  return {
    title: row.title,
    shortLabel: row.shortLabel,
    tagline: row.tagline,
    slug: row.slug,
    location: row.location,
    description: row.description,
    metaTitle: row.metaTitle,
    metaDescription: row.metaDescription,
    keywords: row.keywords,
    image: row.image,
    imageAlt: row.imageAlt,
    highestPoint: row.highestPoint,
    bestSeason: row.bestSeason,
    permits: row.permits,
    typicalDuration: row.typicalDuration,
    bodyHtml: row.bodyHtml,
  };
}

function toTableRow(row: RegionRow): RegionTableRow {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    location: row.location,
    typicalDuration: row.typicalDuration,
    highestPoint: row.highestPoint,
    bestSeason: row.bestSeason,
    image: row.image,
    publicHref: regionPath(row.slug),
  };
}

function toNewRegion(
  input: RegionFormInput,
  sortOrder = 0,
): Omit<NewRegion, "id" | "createdAt" | "updatedAt"> {
  return {
    slug: input.slug,
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
    sortOrder,
  };
}

function revalidateRegionPaths(slug: string) {
  revalidatePath(contentPaths.regions);
  revalidatePath(`${contentPaths.regions}/new`);
  revalidatePath(`${contentPaths.regions}/edit/${slug}`);
  revalidatePath("/region");
  revalidatePath(`/region/${slug}`);
}

export const getRegionsForDashboard = cache(async () => {
  try {
    const rows = await listRegions();
    return rows.map(toTableRow);
  } catch (error) {
    console.error("[regions] list failed", error);
    return [];
  }
});

export const getRegionForEditor = cache(async (slug: string) => {
  try {
    return await findRegionBySlug(slug);
  } catch (error) {
    console.error("[regions] find failed", error);
    return null;
  }
});

export async function createRegion(input: RegionFormInput) {
  const existing = await findRegionBySlug(input.slug);
  if (existing) {
    throw new Error("A region with this slug already exists.");
  }

  const rows = await listRegions();
  const row = await insertRegion({
    ...toNewRegion(input, rows.length),
  });
  revalidateRegionPaths(row.slug);
  return row;
}

export async function updateRegion(input: RegionFormInput) {
  if (!input.id) {
    throw new Error("Missing region id.");
  }

  const current = await findRegionById(input.id);
  if (!current) {
    throw new Error("Region not found.");
  }

  const slugOwner = await findRegionBySlug(input.slug);
  if (slugOwner && slugOwner.id !== input.id) {
    throw new Error("A region with this slug already exists.");
  }

  const row = await updateRegionById(input.id, {
    ...toNewRegion(input, current.sortOrder),
  });

  revalidateRegionPaths(current.slug);
  if (current.slug !== row.slug) {
    revalidateRegionPaths(row.slug);
  }

  return row;
}

export async function removeRegion(id: string) {
  const current = await findRegionById(id);
  if (!current) {
    throw new Error("Region not found.");
  }
  await deleteRegionById(id);
  revalidateRegionPaths(current.slug);
  return current;
}

export async function seedRegionsFromStatic(
  rows: Array<Omit<NewRegion, "id" | "createdAt" | "updatedAt">>,
) {
  const saved = [];
  for (const row of rows) {
    saved.push(await upsertRegionBySlug(row));
  }
  revalidatePath(contentPaths.regions);
  revalidatePath("/region");
  return saved;
}
