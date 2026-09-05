import type { Metadata } from "next";

import BlogsView from "@/features/site/blogs/components/BlogsView";

export const metadata: Metadata = {
  title: "Trekking Guides and Stories",
  description:
    "Practical trekking advice from our Pokhara team — routes, costs, permits, packing, and travelling as a woman in the Himalaya.",
};

export default function BlogsPage() {
  return <BlogsView />;
}
