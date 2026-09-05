"use client";

import { TbChevronRight } from "react-icons/tb";
import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { type NavGroup } from "@/constant/nav";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

interface MegaPanelProps {
  groups: NavGroup[];
}

const MegaPanel = ({ groups }: MegaPanelProps) => {
  const [active, setActive] = React.useState(0);
  const current = groups[active];

  const columns =
    current.children.length > 14 ? 3 : current.children.length > 6 ? 2 : 1;
  const panelWidth =
    columns === 3 ? "w-[68rem]" : columns === 2 ? "w-[46rem]" : "w-[32rem]";

  return (
    <div className={cn("flex max-w-[92vw]", panelWidth)}>
      <ul className="flex w-60 shrink-0 flex-col gap-0.5 border-r border-border bg-muted/30 p-2">
        {groups.map((group, index) => (
          <li key={group.label}>
            <button
              type="button"
              onMouseEnter={() => setActive(index)}
              onFocus={() => setActive(index)}
              className={cn(
                "flex w-full cursor-pointer items-center justify-between gap-2 rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors",
                active === index
                  ? "bg-accent/10 text-accent"
                  : "text-foreground hover:bg-background",
              )}
            >
              <span>{group.label}</span>
              <span className="flex shrink-0 items-center gap-1.5">
                <span
                  className={cn(
                    "text-xs tabular-nums",
                    active === index
                      ? "text-accent/70"
                      : "text-muted-foreground",
                  )}
                >
                  {group.children.length}
                </span>
                <TbChevronRight className="size-3.5 text-muted-foreground" />
              </span>
            </button>
          </li>
        ))}
      </ul>
      <div className="max-h-[75vh] min-w-0 flex-1 overflow-y-auto p-5">
        <div
          className={cn(
            "grid gap-x-6 gap-y-1",
            columns === 3
              ? "grid-cols-3"
              : columns === 2
                ? "grid-cols-2"
                : "grid-cols-1",
          )}
        >
          {current.children.map((leaf) => (
            <NavigationMenuLink
              key={leaf.href}
              closeOnClick
              render={<Link href={leaf.href} />}
              className="rounded-md px-2 py-1.5 text-sm leading-snug text-foreground/80 hover:bg-muted hover:text-accent"
            >
              {leaf.label}
            </NavigationMenuLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaPanel;
