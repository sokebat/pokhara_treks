import {
  TbArrowRight,
  TbClock,
  TbCompass,
  TbHelicopter,
  TbMountain,
} from "react-icons/tb";
import Link from "next/link";

import CardVisual from "@/components/shared/CardVisual";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { HeliTour } from "@/features/site/heli-tours/constant/heli-tours";

const cardTint = [
  { tone: "accent", tag: "bg-accent/10 text-accent", link: "text-accent" },
  { tone: "primary", tag: "bg-primary/10 text-primary", link: "text-primary" },
  {
    tone: "chart-3",
    tag: "bg-chart-3/15 text-chart-3",
    link: "text-chart-3",
  },
] as const;

type HeliTourCardProps = {
  tour: HeliTour;
  index: number;
  featured?: boolean;
};

const HeliTourCard = ({
  tour,
  index,
  featured = false,
}: HeliTourCardProps) => {
  const tint = cardTint[index % cardTint.length];

  return (
    <Link
      href={tour.href}
      className={cn("group h-full", featured && "sm:col-span-2")}
    >
      <Card
        className={cn(
          "h-full gap-0 overflow-hidden rounded-md border-2 border-border bg-card py-0 shadow-none ring-0",
          featured && "lg:flex lg:flex-row",
        )}
      >
        <CardVisual
          icon={TbHelicopter}
          tone={tint.tone}
          image={tour.image}
          alt={tour.title}
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
            {tour.location}
          </span>

          <h3
            className={cn(
              "mt-3 leading-snug font-semibold text-balance text-primary",
              featured ? "text-xl sm:text-2xl" : "text-base",
            )}
          >
            {tour.title}
          </h3>

          <p className="mt-2 flex-1 text-sm leading-6 text-muted-foreground">
            {tour.excerpt}
          </p>

          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-muted-foreground">
            <li className="inline-flex items-center gap-1.5">
              <TbClock className="size-3.5" />
              {tour.flight}
            </li>
            <li className="inline-flex items-center gap-1.5">
              <TbMountain className="size-3.5" />
              {tour.landsAt}
            </li>
            <li className="inline-flex items-center gap-1.5">
              <TbCompass className="size-3.5" />
              {tour.departs}
            </li>
          </ul>

          <div className="mt-4 flex items-end justify-between gap-3 border-t-2 border-border pt-4">
            <div>
              <p className="text-[0.65rem] font-medium tracking-wide text-muted-foreground uppercase">
                From
              </p>
              <p className="text-lg font-bold text-accent">
                USD {tour.price}
              </p>
            </div>

            <span
              className={cn(
                "inline-flex items-center gap-1.5 text-sm font-semibold",
                tint.link,
              )}
            >
              View tour
              <TbArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default HeliTourCard;
