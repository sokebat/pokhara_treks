import { TbArrowRight } from "react-icons/tb";
import Link from "next/link";

import CardVisual from "@/components/shared/CardVisual";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/features/site/home/constant/home-data";

const postTint = [
  { tone: "accent", tag: "bg-accent/10 text-accent", link: "text-accent" },
  { tone: "primary", tag: "bg-primary/10 text-primary", link: "text-primary" },
  {
    tone: "chart-3",
    tag: "bg-chart-3/15 text-chart-3",
    link: "text-chart-3",
  },
] as const;

type BlogCardProps = {
  post: BlogPost;
  index: number;
  featured?: boolean;
};

const BlogCard = ({ post, index, featured = false }: BlogCardProps) => {
  const tint = postTint[index % postTint.length];

  return (
    <Link
      href={post.href}
      className={cn("group h-full", featured && "sm:col-span-2")}
    >
      <Card
        className={cn(
          "h-full gap-0 overflow-hidden rounded-md border-2 border-border bg-card py-0 shadow-none ring-0",
          featured && "lg:flex lg:flex-row",
        )}
      >
        <CardVisual
          icon={post.icon}
          tone={tint.tone}
          image={post.image}
          alt={post.title}
          className={cn(
            "aspect-video",
            featured && "lg:aspect-auto lg:min-h-72 lg:w-1/2 lg:self-stretch",
          )}
        />

        <CardContent
          className={cn(
            "flex flex-1 flex-col py-5",
            featured && "lg:w-1/2 lg:justify-center lg:px-8",
          )}
        >
          <span
            className={cn(
              "inline-flex w-fit items-center rounded-full px-2.5 py-1 text-[0.7rem] font-semibold uppercase",
              tint.tag,
            )}
          >
            {post.tag}
          </span>

          <h3
            className={cn(
              "mt-3 leading-snug font-semibold text-balance text-primary",
              featured ? "text-xl sm:text-2xl" : "text-base",
            )}
          >
            {post.title}
          </h3>

          <p className="mt-1.5 text-sm text-muted-foreground">
            {post.date} · {post.readTime}
          </p>

          <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
            {post.excerpt}
          </p>

          <span
            className={cn(
              "mt-4 inline-flex items-center gap-1.5 text-sm font-semibold",
              tint.link,
            )}
          >
            Read article
            <TbArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
