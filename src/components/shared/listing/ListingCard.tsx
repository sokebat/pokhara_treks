import type { IconType } from "react-icons";
import { TbArrowRight } from "react-icons/tb";
import type { ReactNode } from "react";
import Link from "next/link";

import CardVisual from "@/components/shared/CardVisual";
import { cardTint } from "@/components/shared/listing/card-tint";
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
          "h-full gap-0 overflow-hidden rounded-md border-2 border-border bg-card py-0 shadow-none ring-0 transition-colors group-hover:border-accent",
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
            "flex flex-1 flex-col px-4 py-4 sm:py-5",
            featured && "lg:w-1/2 lg:justify-center lg:px-8",
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
              "mt-3 leading-snug font-semibold text-balance text-primary",
              featured ? "text-xl sm:text-2xl" : "text-base",
            )}
          >
            {title}
          </h3>

          {meta}

          <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-muted-foreground">
            {excerpt}
          </p>

          {children}

          {footer ? (
            <div className="mt-4 flex items-end justify-between gap-3 border-t-2 border-border pt-4">
              {footer}
              {cta}
            </div>
          ) : (
            <div className="mt-4">{cta}</div>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default ListingCard;
