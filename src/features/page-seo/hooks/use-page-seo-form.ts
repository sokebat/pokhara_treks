"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import type { ListingSeoKey } from "@/features/page-seo/constant/pages";
import type { PageSeoRecord } from "@/features/page-seo/lib/keywords";
import {
  pageSeoFormSchema,
  type PageSeoFormValues,
} from "@/features/page-seo/validation/page-seo.validation";

export function usePageSeoForm(
  pageKey: ListingSeoKey,
  initial: PageSeoRecord,
) {
  const router = useRouter();
  const [formError, setFormError] = React.useState<string | null>(null);
  const [formSuccess, setFormSuccess] = React.useState<string | null>(null);

  const form = useForm<PageSeoFormValues>({
    resolver: zodResolver(pageSeoFormSchema),
    defaultValues: {
      title: initial.title,
      description: initial.description,
      keywords: initial.keywords,
    },
  });

  const onSubmit = async (values: PageSeoFormValues) => {
    setFormError(null);
    setFormSuccess(null);

    const response = await fetch(`/api/page-seo/${pageKey}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!response.ok) {
      setFormError("Could not save SEO. Try again.");
      return;
    }

    setFormSuccess("SEO saved.");
    router.refresh();
  };

  return {
    ...form,
    formError,
    formSuccess,
    onSubmit,
  };
}
