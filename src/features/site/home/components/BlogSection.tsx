import Link from "next/link";

import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import BlogCard from "@/features/site/blogs/components/BlogCard";
import { blogPosts } from "@/features/site/home/constant/home-data";

const BlogSection = () => {
  return (
    <section className="bg-secondary py-12 sm:py-16">
      <Container>
        <SectionHeader
          title="Trekking guides and stories"
          action={
            <Button
              nativeButton={false}
              render={<Link href="/blogs" />}
              variant="accent"
              size="xl"
            >
              View all articles
            </Button>
          }
        />

        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.slice(0, 4).map((post, index) => (
            <BlogCard key={post.href} post={post} index={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default BlogSection;
