import type { IconType } from "react-icons";
import { TbArrowRight } from "react-icons/tb";
import type { ReactNode } from "react";
import Link from "next/link";

import CardVisual from "@/components/shared/CardVisual";
import { cardTint } from "@/features/site/blogs/lib/card-tint";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type ListingCardProps = {
  href: string;
  title: string;
  excerpt: string;
  image: string;
  icon: IconType;
  tag: string;
  index: number;
  ctaLabel: string;
  featured?: boolean;
  meta?: ReactNode;
  children?: ReactNode;
  footer?: ReactNode;
};

const ListingCard = ({
  href,
  title,
  excerpt,
  image,
  icon,
  tag,
  index,
  ctaLabel,
  featured = false,
  meta,
  children,
  footer,
}: ListingCardProps) => {
  const tint = cardTint[index % cardTint.length];

  const cta = (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 text-sm font-semibold",
        tint.link,
      )}
    >
      {ctaLabel}
      <TbArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
    </span>
  );

  return (
    <Link
      href={href}
      className={cn("group h-full min-w-0", featured && "sm:col-span-2")}
    >
      <Card
        className={cn(
          "h-full gap-0 overflow-hidden rounded-md border border-border bg-card py-0 shadow-none ring-0",
          featured && "lg:flex lg:flex-row",
        )}
      >
        <CardVisual
          icon={icon}
          tone={tint.tone}
          image={image}
          alt={title}
          className={cn(
            "aspect-video",
            featured && "lg:aspect-auto lg:min-h-72 lg:w-1/2 lg:self-stretch",
          )}
        />

        <CardContent
          className={cn(
            "flex flex-1 flex-col px-4 py-4",
            featured && "lg:w-1/2 lg:justify-center lg:px-8 lg:py-6",
          )}
        >
          <span
            className={cn(
              "inline-flex w-fit items-center rounded-full px-2.5 py-1 text-[0.7rem] font-semibold uppercase",
              tint.tag,
            )}
          >
            {tag}
          </span>

          <h3
            className={cn(
              "mt-2.5 font-semibold text-pretty text-foreground",
              featured
                ? "text-xl leading-7 sm:text-2xl sm:leading-8"
                : "line-clamp-2 min-h-12 text-base leading-6",
            )}
          >
            {title}
          </h3>

          {meta}

          <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
            {excerpt}
          </p>

          {children}

          {footer ? (
            <div
              className={cn(
                "flex items-end justify-between gap-3 border-t border-border pt-3",
                featured ? "mt-6" : "mt-auto",
              )}
            >
              {footer}
              {cta}
            </div>
          ) : (
            <div className={featured ? "mt-6" : "mt-auto pt-3"}>{cta}</div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default ListingCard;
