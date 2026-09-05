"use client";

import { TbChevronRight } from "react-icons/tb";
import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import {
  adventureActivities,
  adventureCategories,
  getAdventuresByCategory,
  getCategoryCount,
} from "@/features/site/adventures/constant/adventures";

const AdventureMenu = () => {
  const [active, setActive] = React.useState(0);
  const current = adventureCategories[active];
  const items = getAdventuresByCategory(current.slug);

  return (
    <div className="flex w-[36rem] max-w-[92vw]">
      <ul className="flex w-64 shrink-0 flex-col gap-0.5 border-r border-border bg-muted/30 p-2">
        <li>
          <NavigationMenuLink
            closeOnClick
            render={<Link href="/activity" />}
            className="flex w-full items-center justify-between gap-2 rounded-md px-3 py-2.5 text-sm font-semibold text-accent hover:bg-background"
          >
            All activities
            <span className="flex items-center gap-1.5 text-xs font-medium text-accent/70 tabular-nums">
              {adventureActivities.length}
              <TbChevronRight className="size-3.5 text-muted-foreground" />
            </span>
          </NavigationMenuLink>
        </li>
        {adventureCategories.map((category, index) => {
          const Icon = category.icon;

          return (
            <li key={category.slug}>
              <NavigationMenuLink
                closeOnClick
                render={<Link href={category.href} />}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                className={cn(
                  "flex w-full cursor-pointer items-center justify-between gap-2 rounded-md px-3 py-2.5 text-left text-sm font-medium",
                  active === index
                    ? "bg-accent/10 text-accent hover:bg-accent/10 hover:text-accent"
                    : "text-foreground hover:bg-background",
                )}
              >
                <span className="flex min-w-0 items-center gap-2">
                  <Icon className="size-4 shrink-0" />
                  <span className="truncate">{category.label}</span>
                </span>
                <span className="flex shrink-0 items-center gap-1.5">
                  <span
                    className={cn(
                      "text-xs tabular-nums",
                      active === index
                        ? "text-accent/70"
                        : "text-muted-foreground",
                    )}
                  >
                    {getCategoryCount(category.slug)}
                  </span>
                  <TbChevronRight className="size-3.5 text-muted-foreground" />
                </span>
              </NavigationMenuLink>
            </li>
          );
        })}
      </ul>

      <div className="flex min-w-0 flex-1 flex-col p-3">
        {items.map((activity) => (
          <NavigationMenuLink
            key={activity.href}
            closeOnClick
            render={<Link href={activity.href} />}
            className="rounded-md px-2 py-2 text-sm leading-snug text-foreground/80 hover:bg-muted hover:text-accent"
          >
            {activity.title}
          </NavigationMenuLink>
        ))}
      </div>
    </div>
  );
};

export default AdventureMenu;
