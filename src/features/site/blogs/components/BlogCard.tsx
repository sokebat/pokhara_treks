import ListingCard from "./ListingCard";
import type { BlogPost } from "@/features/site/blogs/constant/blog-posts";

type BlogCardProps = {
  post: BlogPost;
  index: number;
  featured?: boolean;
};

const BlogCard = ({ post, index, featured = false }: BlogCardProps) => (
  <ListingCard
    href={post.href}
    title={post.title}
    excerpt={post.excerpt}
    image={post.image}
    icon={post.icon}
    tag={post.tag}
    index={index}
    featured={featured}
    ctaLabel="Read article"
    meta={
      <p className="mt-1.5 text-sm text-muted-foreground">
        {post.date} · {post.readTime}
      </p>
    }
  />
);

export default BlogCard;
