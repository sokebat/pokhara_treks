import type { Metadata } from "next";

import Container from "@/components/shared/Container";
import CTASection from "@/components/shared/CTASection";
import BlogCard from "@/features/site/blogs/components/BlogCard";
import { blogPosts } from "@/features/site/home/constant/home-data";
import FindUsSection from "@/components/shared/FindUsSection";
import FaqSection from "@/components/shared/FaqSection";

export const metadata: Metadata = {
  title: "Trekking Guides and Stories",
  description:
    "Practical trekking advice from our Pokhara team — routes, costs, permits, packing, and travelling as a woman in the Himalaya.",
};

export default function BlogsPage() {
  return (
    <div>
      <section className="bg-background pt-10 pb-8 sm:pt-12 sm:pb-8">
        <Container>
          <p className="text-sm font-semibold tracking-wide text-accent uppercase">
            From the Trail
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Trekking guides and stories
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Written by the people who walk these trails. Honest notes on
            routes, costs, permits, and how to travel well in the Himalaya.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {blogPosts.map((post, index) => (
              <BlogCard
                key={post.href}
                post={post}
                index={index}
                featured={index === 0}
              />
            ))}
          </div>
        </Container>
      </section>

      <FaqSection />
      <FindUsSection />
      <CTASection />
    </div>
  );
}
