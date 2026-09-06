import type { Metadata } from "next";

import { getDashboardBreadcrumbs } from "@/features/dashboard/components/sidebar/nav-items";

type DashboardSectionPageProps = {
  params: Promise<{ slug: string[] }>;
};

export async function generateMetadata({
  params,
}: DashboardSectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const crumbs = getDashboardBreadcrumbs(`/dashboard/${slug.join("/")}`);
  const current = crumbs[crumbs.length - 1];

  return {
    title: current?.title ?? "Dashboard",
    robots: { index: false, follow: false },
  };
}

export default async function DashboardSectionPage({
  params,
}: DashboardSectionPageProps) {
  const { slug } = await params;
  const crumbs = getDashboardBreadcrumbs(`/dashboard/${slug.join("/")}`);
  const current = crumbs[crumbs.length - 1];

  return (
    <div className="flex flex-1 flex-col gap-2">
      <h1 className="text-xl font-bold text-foreground sm:text-2xl">
        {current?.title ?? "Dashboard"}
      </h1>
      <p className="text-sm text-muted-foreground">
        This section is ready for content.
      </p>
    </div>
  );
}
