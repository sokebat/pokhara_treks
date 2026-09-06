import { z } from "zod";

export const pageSeoFormSchema = z.object({
  title: z.string().trim().min(1, "Title is required").max(120),
  description: z.string().trim().min(1, "Description is required").max(320),
  keywords: z.string(),
});

export type PageSeoFormValues = z.infer<typeof pageSeoFormSchema>;
