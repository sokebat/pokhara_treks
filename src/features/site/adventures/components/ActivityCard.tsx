import { TbArrowRight, TbClock, TbMapPin } from "react-icons/tb";
import Link from "next/link";

import CardVisual from "@/components/shared/CardVisual";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { AdventureActivity } from "@/features/site/adventures/constant/adventures";
import { adventureCategories } from "@/features/site/adventures/constant/adventures";

const cardTint = [
  { tone: "accent", tag: "bg-accent/10 text-accent", link: "text-accent" },
  { tone: "primary", tag: "bg-primary/10 text-primary", link: "text-primary" },
  {
    tone: "chart-3",
    tag: "bg-chart-3/15 text-chart-3",
    link: "text-chart-3",
  },
] as const;

type ActivityCardProps = {
  activity: AdventureActivity;
  index: number;
};

const ActivityCard = ({ activity, index }: ActivityCardProps) => {
  const tint = cardTint[index % cardTint.length];
  const category = adventureCategories.find(
    (item) => item.slug === activity.category,
  );

  return (
    <Link href={activity.href} className="group h-full min-w-0">
      <Card className="h-full gap-0 overflow-hidden rounded-md border-2 border-border bg-card py-0 shadow-none ring-0 transition-colors group-hover:border-accent">
        <CardVisual
          icon={activity.icon}
          tone={tint.tone}
          image={activity.image}
          alt={activity.title}
          className="aspect-16/10 sm:aspect-video"
        />

        <CardContent className="flex flex-1 flex-col px-4 py-4 sm:py-5">
          <span
            className={cn(
              "inline-flex w-fit items-center rounded-full px-2.5 py-1 text-[0.7rem] font-semibold uppercase",
              tint.tag,
            )}
          >
            {category?.shortLabel ?? category?.label ?? activity.category}
          </span>

          <h3 className="mt-3 text-base leading-snug font-semibold text-balance text-primary">
            {activity.title}
          </h3>

          <p className="mt-2 line-clamp-3 flex-1 text-sm leading-6 text-muted-foreground">
            {activity.excerpt}
          </p>

          <ul className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-muted-foreground">
            <li className="inline-flex items-center gap-1.5">
              <TbClock className="size-3.5 shrink-0" />
              {activity.duration}
            </li>
            <li className="inline-flex min-w-0 items-center gap-1.5">
              <TbMapPin className="size-3.5 shrink-0" />
              <span className="truncate">{activity.location}</span>
            </li>
            <li className="rounded-full bg-secondary px-2 py-0.5 text-[0.65rem] font-semibold text-secondary-foreground">
              {activity.difficulty}
            </li>
          </ul>

          <div className="mt-4 flex items-end justify-between gap-3 border-t-2 border-border pt-4">
            <div>
              <p className="text-[0.65rem] font-medium tracking-wide text-muted-foreground uppercase">
                From
              </p>
              <p className="text-lg font-bold text-accent">
                USD {activity.price}
              </p>
            </div>

            <span
              className={cn(
                "inline-flex items-center gap-1.5 text-sm font-semibold",
                tint.link,
              )}
            >
              View
              <span className="hidden sm:inline">activity</span>
              <TbArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ActivityCard;
