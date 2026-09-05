import type { IconType } from "react-icons";
import Link from "next/link";

import CardVisual from "@/components/shared/CardVisual";
import ListingPrice from "@/features/site/listing/components/ListingPrice";
import type { TripFact } from "@/features/site/listing/types";
import StarRating from "@/components/shared/StarRating";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type TripCardProps = {
  href: string;
  title: string;
  subtitle?: string;
  icon: IconType;
  tone?: "primary" | "accent" | "chart-3";
  image: string;
  price?: number;
  ctaLabel: string;
  facts: TripFact[];
  rating?: {
    value: number;
    reviews: number;
    difficulty: string;
  };
};

const TripCard = ({
  href,
  title,
  subtitle,
  icon,
  tone = "primary",
  image,
  price,
  ctaLabel,
  facts,
  rating,
}: TripCardProps) => (
  <Card className="h-full gap-0 overflow-hidden rounded-md border-2 border-border bg-card py-0 shadow-none ring-0">
    <CardVisual
      icon={icon}
      tone={tone}
      image={image}
      alt={title}
      className="aspect-4/3"
    />

    <CardContent className="flex flex-1 flex-col px-4 py-4 sm:py-5">
      <h3 className="text-base leading-snug font-semibold text-balance text-foreground">
        {title}
        {subtitle && `, ${subtitle}`}
      </h3>

      {rating && (
        <div className="mt-2 flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5">
            <StarRating rating={rating.value} />
            <span className="text-xs font-semibold text-foreground">
              {rating.value}
            </span>
            <span className="text-xs text-muted-foreground">
              · {rating.reviews} reviews
            </span>
          </div>

          <span className="shrink-0 rounded-full bg-secondary px-2 py-0.5 text-[0.65rem] font-semibold text-secondary-foreground">
            {rating.difficulty}
          </span>
        </div>
      )}

      <ul className="mt-3 flex flex-1 flex-col gap-1.5 border-t-2 border-border pt-3 text-xs">
        {facts.map((fact) => (
          <li
            key={fact.label}
            className="flex items-center justify-between text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <fact.icon className="size-3.5" />
              {fact.label}
            </span>
            <span className="font-semibold text-foreground">{fact.value}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap items-end justify-between gap-3 border-t-2 border-border pt-4">
        <ListingPrice price={price} />

        <Button
          nativeButton={false}
          render={<Link href={href} />}
          size="lg"
          className="rounded-md"
        >
          {ctaLabel}
        </Button>
      </div>
    </CardContent>
  </Card>
);

export default TripCard;
