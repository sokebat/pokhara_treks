"use server";

import { getSession } from "@/features/auth/lib/session";
import { removeRegion } from "@/features/dashboard/regions/service/region.service";

export async function deleteRegion(id: string) {
  const session = await getSession();
  if (!session?.user?.id) {
    return { ok: false as const, message: "Sign in to delete regions." };
  }

  try {
    await removeRegion(id);
    return { ok: true as const };
  } catch (error) {
    console.error("[regions] delete failed", error);
    return {
      ok: false as const,
      message:
        error instanceof Error ? error.message : "Could not delete region.",
    };
  }
}
