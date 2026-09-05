import type { Metadata } from "next";

import BlogsView from "@/features/site/blogs/components/BlogsView";
import { getPageSeo } from "@/lib/seo";

export const metadata: Metadata = getPageSeo("/blogs");

export default function BlogsPage() {
  return <BlogsView />;
}
