import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { blogPosts } from "@/features/home/constant/home-data";

const postTint = [
  { tile: "bg-accent", tag: "bg-accent/10 text-accent", link: "text-accent" },
  {
    tile: "bg-primary",
    tag: "bg-primary/10 text-primary",
    link: "text-primary",
  },
  {
    tile: "bg-chart-3",
    tag: "bg-chart-3/15 text-chart-3",
    link: "text-chart-3",
  },
];

const BlogSection = () => {
  return (
    <section className="bg-secondary py-12 sm:py-16">
      <Container>
        <SectionHeader
          eyebrow="From the Trail"
          title="Trekking guides and stories"
          action={
            <Button
              nativeButton={false}
              render={<Link href="/blog" />}
              variant="accent"
              size="xl"
            >
              View all articles
            </Button>
          }
        />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post, index) => {
            const tint = postTint[index % postTint.length];
            const Icon = post.icon;

            return (
              <Link key={post.title} href={post.href} className="group">
                <Card className="h-full gap-0 overflow-hidden rounded-md py-0">
                  <div
                    className={cn(
                      "flex aspect-video items-center justify-center",
                      tint.tile,
                    )}
                  >
                    <Icon className="size-10 text-white/90" />
                  </div>

                  <CardContent className="flex flex-1 flex-col py-5">
                    <span
                      className={cn(
                        "inline-flex w-fit items-center rounded-full px-2.5 py-1 text-[0.7rem] font-semibold uppercase",
                        tint.tag,
                      )}
                    >
                      {post.tag}
                    </span>

                    <h3 className="mt-3 text-base leading-snug font-semibold text-balance text-foreground">
                      {post.title}
                    </h3>

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
                      <ArrowRightIcon className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default BlogSection;
