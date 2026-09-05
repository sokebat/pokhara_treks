import { ListingPage } from "@/components/shared/listing";
import BlogCard from "@/features/site/blogs/components/BlogCard";
import { blogPosts } from "@/features/site/blogs/constant/blog-posts";

const BlogsView = () => (
  <ListingPage
    eyebrow="From the Trail"
    title="Trekking guides and stories"
    description="Written by the people who walk these trails. Honest notes on routes, costs, permits, and how to travel well in the Himalaya."
  >
    <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:mt-8 lg:grid-cols-4">
      {blogPosts.map((post, index) => (
        <BlogCard
          key={post.href}
          post={post}
          index={index}
          featured={index === 0}
        />
      ))}
    </div>
  </ListingPage>
);

export default BlogsView;
