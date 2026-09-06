import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

import { requireApiAdmin } from "@/features/auth/lib/session";
import {
  getListingSeoPage,
  isListingSeoKey,
} from "@/features/page-seo/constant/pages";
import { formatKeywords, parseKeywords } from "@/features/page-seo/lib/keywords";
import { getPageSeoByPath, upsertPageSeo } from "@/features/page-seo/lib/queries";
import { pageSeoFormSchema } from "@/features/page-seo/validation/page-seo.validation";

export const runtime = "nodejs";

type RouteContext = {
  params: Promise<{ key: string }>;
};

async function listingPage(key: string) {
  if (!isListingSeoKey(key)) return null;
  return getListingSeoPage(key) ?? null;
}

export async function GET(_request: Request, context: RouteContext) {
  const auth = await requireApiAdmin();
  if (auth.error) return auth.error;

  const { key } = await context.params;
  const page = await listingPage(key);
  if (!page) {
    return NextResponse.json({ error: "Unknown page" }, { status: 404 });
  }

  const record = await getPageSeoByPath(page.publicPath);
  return NextResponse.json(record);
}

export async function PUT(request: Request, context: RouteContext) {
  const auth = await requireApiAdmin();
  if (auth.error) return auth.error;

  const { key } = await context.params;
  const page = await listingPage(key);
  if (!page) {
    return NextResponse.json({ error: "Unknown page" }, { status: 404 });
  }

  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const parsed = pageSeoFormSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid SEO fields", details: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const record = await upsertPageSeo({
    path: page.publicPath,
    title: parsed.data.title,
    description: parsed.data.description,
    keywords: formatKeywords(parseKeywords(parsed.data.keywords)),
  });

  revalidatePath(page.publicPath);
  revalidatePath(page.dashboardPath);

  return NextResponse.json(record);
}
