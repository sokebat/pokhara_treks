"use client";

import { TbChevronRight, TbCompass } from "react-icons/tb";
import type { IconType } from "react-icons";
import * as React from "react";

import { useListingSectionNav } from "@/hooks/use-listing-section-nav";
import { cn } from "@/lib/utils";

export type ListingNavItem = {
  id: string;
  label: string;
  shortLabel: string;
  icon: IconType;
  count: number;
};

type ListingSectionNavProps = {
  pathname: string;
  headerId: string;
  allLabel: string;
  allShortLabel?: string;
  allIcon?: IconType;
  allCount: number;
  ariaLabel: string;
  sections: ListingNavItem[];
};

const ListingSectionNav = ({
  pathname,
  headerId,
  allLabel,
  allShortLabel = "All",
  allIcon: AllIcon = TbCompass,
  allCount,
  ariaLabel,
  sections,
}: ListingSectionNavProps) => {
  const sectionIds = React.useMemo(
    () => sections.map((section) => section.id),
    [sections],
  );
  const { active, goTo, listRef } = useListingSectionNav({
    pathname,
    headerId,
    sectionIds,
  });

  const items = [
    {
      id: headerId,
      label: allLabel,
      shortLabel: allShortLabel,
      icon: AllIcon,
      count: allCount,
      isActive: !active,
    },
    ...sections.map((section) => ({
      ...section,
      isActive: section.id === active,
    })),
  ];

  return (
    <aside className="sticky top-14 z-20 -mx-4 border-b border-border bg-background/95 px-4 py-2 backdrop-blur-md md:top-28 lg:top-28 lg:z-auto lg:mx-0 lg:self-start lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none xl:top-20">
      <nav aria-label={ariaLabel}>
        <ul
          ref={listRef}
          className="flex snap-x snap-mandatory gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] lg:snap-none lg:flex-col lg:gap-0.5 lg:overflow-visible lg:rounded-md lg:border lg:border-border lg:bg-card lg:p-2 [&::-webkit-scrollbar]:hidden"
        >
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.id} className="snap-start">
                <a
                  href={`#${item.id}`}
                  data-active={item.isActive}
                  aria-current={item.isActive ? "true" : undefined}
                  onClick={goTo(item.id)}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors lg:w-full lg:justify-between lg:rounded-md lg:px-3 lg:py-2.5 lg:whitespace-normal",
                    item.isActive
                      ? "bg-accent text-accent-foreground lg:bg-accent/10 lg:text-accent"
                      : "bg-muted text-foreground lg:bg-transparent lg:hover:bg-muted",
                  )}
                >
                  <span className="flex min-w-0 items-center gap-2">
                    <Icon className="size-4 shrink-0" />
                    <span className="lg:hidden">{item.shortLabel}</span>
                    <span className="hidden lg:inline">{item.label}</span>
                  </span>
                  <span className="flex shrink-0 items-center gap-1.5">
                    <span
                      className={cn(
                        "text-xs tabular-nums",
                        item.isActive
                          ? "text-accent-foreground/80 lg:text-accent/70"
                          : "text-muted-foreground",
                      )}
                    >
                      {item.count}
                    </span>
                    <TbChevronRight className="hidden size-3.5 text-muted-foreground lg:block" />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default ListingSectionNav;
