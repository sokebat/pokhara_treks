import type { Metadata } from "next";

import NotFoundView from "@/features/site/not-found/components/NotFoundView";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Page Not Found",
  description: "This trail doesn't exist. Let's get you back on the path.",
  path: "/404",
  noIndex: true,
});

export default function NotFound() {
  return <NotFoundView />;
}
