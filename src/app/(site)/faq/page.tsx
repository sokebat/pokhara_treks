import type { Metadata } from "next";

import FaqView from "@/features/site/faq/components/FaqView";
import { getPageSeo } from "@/lib/seo";

export const metadata: Metadata = getPageSeo("/faq");

export default function FaqPage() {
  return <FaqView />;
}
