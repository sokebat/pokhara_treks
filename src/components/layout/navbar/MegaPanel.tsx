"use client";

import { TbChevronRight } from "react-icons/tb";
import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { type NavGroup } from "@/constant/nav";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

type MegaPanelProps = {
  groups: NavGroup[];
};

function columnsFor(count: number) {
  if (count > 14) return 3;
  if (count > 4) return 2;
  return 1;
}

const MegaPanel = ({ groups }: MegaPanelProps) => {
  const [active, setActive] = React.useState(0);
  const current = groups[active];
  const maxCount = Math.max(...groups.map((group) => group.children.length), 0);
  const panelColumns = columnsFor(maxCount);
  const contentColumns = columnsFor(current.children.length);
  const panelWidth =
    panelColumns === 3
      ? "w-[68rem]"
      : panelColumns === 2
        ? "w-[46rem]"
        : "w-[32rem]";

  return (
    <div
      className={cn("flex max-w-[92vw] items-stretch", panelWidth)}
      onClick={(event) => event.stopPropagation()}
    >
      <ul className="flex w-60 shrink-0 flex-col gap-0.5 border-r-2 border-border bg-muted/30 p-2">
        {groups.map((group, index) => {
          const isRegion = Boolean(group.href?.startsWith("/region/"));
          const itemClassName = cn(
            "group/nav-item font-heading flex w-full cursor-pointer items-center justify-between gap-2 rounded-md px-3 py-2.5 text-left text-sm font-medium transition-colors",
            active === index
              ? "bg-secondary text-primary"
              : "text-foreground hover:bg-secondary hover:text-primary",
          );
          const itemContent = (
            <>
              <span>{group.label}</span>
              <span
                className={cn(
                  "flex shrink-0 items-center gap-1.5",
                  active === index
                    ? "text-primary"
                    : "text-muted-foreground group-hover/nav-item:text-primary",
                )}
              >
                <span className="text-xs tabular-nums">
                  {group.children.length}
                </span>
                <TbChevronRight className="size-3.5" />
              </span>
            </>
          );

          return (
            <li key={group.label}>
              {isRegion && group.href ? (
                <Link
                  href={group.href}
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  onClick={(event) => event.stopPropagation()}
                  className={itemClassName}
                >
                  {itemContent}
                </Link>
              ) : (
                <button
                  type="button"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  className={itemClassName}
                >
                  {itemContent}
                </button>
              )}
            </li>
          );
        })}
      </ul>

      <div className="max-h-[75vh] min-w-0 flex-1 overflow-y-auto p-5">
        {current.href?.startsWith("/region/") && (
          <Link
            href={current.href}
            onClick={(event) => event.stopPropagation()}
            className="font-heading mb-3 flex w-full items-center justify-between gap-2 rounded-md bg-secondary px-3 py-2.5 text-sm font-semibold text-primary hover:bg-sky/30"
          >
            <span>About {current.label}</span>
            <TbChevronRight className="size-3.5" />
          </Link>
        )}
        <div
          className={cn(
            "grid w-fit max-w-full content-start gap-x-8 gap-y-0.5",
            contentColumns === 3 && "grid-cols-3",
            contentColumns === 2 && "grid-cols-2",
            contentColumns === 1 && "grid-cols-1",
          )}
        >
          {current.children.map((leaf) => (
            <NavigationMenuLink
              key={leaf.href}
              closeOnClick
              render={<Link href={leaf.href} />}
              className="rounded-md px-2 py-1.5 text-sm leading-snug text-foreground/80 hover:bg-muted hover:text-chart-2"
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
