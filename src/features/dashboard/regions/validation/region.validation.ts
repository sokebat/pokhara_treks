import { z } from "zod";

import type { RegionFormValues } from "@/features/dashboard/regions/types";

function plainTextFromHtml(html: string) {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

export const regionFormSchema = z.object({
  id: z.string().uuid().optional(),
  title: z.string().trim().min(1, "Title is required").max(120),
  shortLabel: z.string().trim().max(60),
  tagline: z.string().trim().min(1, "Tagline is required").max(200),
  slug: z
    .string()
    .trim()
    .min(1, "Slug is required")
    .max(120)
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Use lowercase letters, numbers, and hyphens"),
  location: z.string().trim().min(1, "Location is required").max(160),
  description: z.string().trim().max(500),
  metaTitle: z.string().trim().min(1, "Meta title is required").max(120),
  metaDescription: z
    .string()
    .trim()
    .min(1, "Meta description is required")
    .max(320),
  keywords: z.string().max(500, "Keywords are too long"),
  image: z.string().trim().max(2000),
  imageAlt: z.string().trim().max(240),
  highestPoint: z.string().trim().max(120),
  bestSeason: z.string().trim().max(120),
  permits: z.string().trim().max(160),
  typicalDuration: z.string().trim().max(80),
  bodyHtml: z
    .string()
    .refine((html) => plainTextFromHtml(html).length > 0, {
      message: "Description is required",
    }),
  highlightsHtml: z.string(),
});

export type RegionFormInput = z.infer<typeof regionFormSchema>;

export type RegionFieldErrors = Partial<
  Record<keyof RegionFormValues | "id", string[]>
>;

export type RegionActionState = {
  status: "idle" | "success" | "error";
  message: string | null;
  fieldErrors: RegionFieldErrors;
};

export const idleRegionActionState: RegionActionState = {
  status: "idle",
  message: null,
  fieldErrors: {},
};

export function toRegionFieldErrors(
  error: z.ZodError<RegionFormInput>,
): RegionFieldErrors {
  const { fieldErrors } = z.flattenError(error);
  return fieldErrors;
}

export function firstRegionFieldError(
  fieldErrors: RegionFieldErrors,
  field: keyof RegionFormValues | "id",
) {
  return fieldErrors[field]?.[0];
}

export function parseRegionFormValues(values: RegionFormValues & { id?: string }) {
  return regionFormSchema.safeParse(values);
}
