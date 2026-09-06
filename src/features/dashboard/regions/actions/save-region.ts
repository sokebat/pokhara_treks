"use server";

import { getSession } from "@/features/auth/lib/session";
import {
  createRegion,
  updateRegion,
} from "@/features/dashboard/regions/service/region.service";
import {
  idleRegionActionState,
  parseRegionFormValues,
  toRegionFieldErrors,
  type RegionActionState,
} from "@/features/dashboard/regions/validation/region.validation";
import type { RegionFormValues } from "@/features/dashboard/regions/types";

export async function saveRegion(
  values: RegionFormValues & { id?: string },
): Promise<RegionActionState & { slug?: string }> {
  const session = await getSession();
  if (!session?.user?.id) {
    return {
      status: "error",
      message: "Sign in to save regions.",
      fieldErrors: {},
    };
  }

  const parsed = parseRegionFormValues(values);
  if (!parsed.success) {
    return {
      status: "error",
      message: "Fix the highlighted fields.",
      fieldErrors: toRegionFieldErrors(parsed.error),
    };
  }

  try {
    const row = parsed.data.id
      ? await updateRegion(parsed.data)
      : await createRegion(parsed.data);

    return {
      status: "success",
      message: parsed.data.id ? "Region saved." : "Region created.",
      fieldErrors: {},
      slug: row.slug,
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Could not save region.";
    console.error("[regions] save failed", error);
    return {
      ...idleRegionActionState,
      status: "error",
      message,
    };
  }
}
