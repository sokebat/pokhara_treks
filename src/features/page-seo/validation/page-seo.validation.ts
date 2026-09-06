import { z } from "zod";

import {
  listingSeoPages,
  type ListingSeoKey,
} from "@/features/page-seo/constant/pages";

const listingSeoKeys = listingSeoPages.map((page) => page.key) as [
  ListingSeoKey,
  ...ListingSeoKey[],
];

export const listingSeoKeySchema = z.enum(listingSeoKeys);

export const pageSeoFormSchema = z.object({
  key: listingSeoKeySchema,
  title: z.string().trim().min(1, "Title is required").max(120),
  description: z.string().trim().min(1, "Description is required").max(320),
  keywords: z.string().max(500, "Keywords are too long"),
});

export type PageSeoFormValues = z.infer<typeof pageSeoFormSchema>;

export type PageSeoFieldErrors = Partial<
  Record<keyof PageSeoFormValues, string[]>
>;

export type PageSeoActionState = {
  status: "idle" | "success" | "error";
  message: string | null;
  fieldErrors: PageSeoFieldErrors;
};

export const idlePageSeoActionState: PageSeoActionState = {
  status: "idle",
  message: null,
  fieldErrors: {},
};

function formString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value : "";
}

export function parsePageSeoForm(formData: FormData) {
  return pageSeoFormSchema.safeParse({
    key: formString(formData, "key"),
    title: formString(formData, "title"),
    description: formString(formData, "description"),
    keywords: formString(formData, "keywords"),
  });
}

export function toPageSeoFieldErrors(
  error: z.ZodError<PageSeoFormValues>,
): PageSeoFieldErrors {
  const { fieldErrors } = z.flattenError(error);

  return {
    key: fieldErrors.key,
    title: fieldErrors.title,
    description: fieldErrors.description,
    keywords: fieldErrors.keywords,
  };
}

export function firstFieldError(
  fieldErrors: PageSeoFieldErrors,
  field: keyof PageSeoFormValues,
) {
  return fieldErrors[field]?.[0];
}
