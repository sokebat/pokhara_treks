"use server";

import { getSession } from "@/features/auth/lib/session";
import { saveListingSeo } from "@/features/page-seo/service/page-seo.service";
import {
  idlePageSeoActionState,
  parsePageSeoForm,
  toPageSeoFieldErrors,
  type PageSeoActionState,
} from "@/features/page-seo/validation/page-seo.validation";

export async function savePageSeo(
  _prevState: PageSeoActionState,
  formData: FormData,
): Promise<PageSeoActionState> {
  const session = await getSession();
  if (!session?.user?.id) {
    return {
      status: "error",
      message: "Sign in to save SEO.",
      fieldErrors: {},
    };
  }

  const parsed = parsePageSeoForm(formData);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Fix the highlighted fields.",
      fieldErrors: toPageSeoFieldErrors(parsed.error),
    };
  }

  try {
    await saveListingSeo(parsed.data);
    return {
      status: "success",
      message: "SEO saved.",
      fieldErrors: {},
    };
  } catch (error) {
    console.error("[page-seo] save failed", error);
    return {
      ...idlePageSeoActionState,
      status: "error",
      message: "Could not save SEO. Try again.",
    };
  }
}
