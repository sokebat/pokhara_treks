"use client";

import { TbChevronRight, TbCompass } from "react-icons/tb";
import * as React from "react";

import { cn } from "@/lib/utils";
import {
  adventureActivities,
  adventureCategories,
  getCategoryCount,
} from "@/features/site/adventures/constant/adventures";

const ActivitySectionNav = () => {
  const [active, setActive] = React.useState("");
  const listRef = React.useRef<HTMLUListElement>(null);

  const goTo = React.useCallback(
    (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      const next = id === "activity-top" ? "" : id;
      setActive(next);
      window.history.replaceState(
        null,
        "",
        id === "activity-top" ? "/activity" : `#${id}`,
      );
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
    [],
  );

  React.useEffect(() => {
    const top = document.getElementById("activity-top");
    const sections = adventureCategories
      .map((category) => document.getElementById(category.slug))
      .filter((section): section is HTMLElement => Boolean(section));

    const scrollToHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;

      const target = document.getElementById(hash);
      if (!target) return;

      setActive(hash === "activity-top" ? "" : hash);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        const id = visible[0]?.target.id;
        if (!id) return;
        setActive(id === "activity-top" ? "" : id);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0, 0.2, 0.5] },
    );

    if (top) observer.observe(top);
    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  React.useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const current = list.querySelector<HTMLElement>("[data-active=true]");
    current?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [active]);

  const items = [
    {
      id: "activity-top",
      label: "All activities",
      shortLabel: "All",
      icon: TbCompass,
      count: adventureActivities.length,
      isActive: !active,
    },
    ...adventureCategories.map((category) => ({
      id: category.slug,
      label: category.label,
      shortLabel: category.shortLabel,
      icon: category.icon,
      count: getCategoryCount(category.slug),
      isActive: category.slug === active,
    })),
  ];

  return (
    <aside className="sticky top-14 z-20 -mx-4 border-b border-border bg-background/95 px-4 py-2 backdrop-blur-md md:top-28 lg:top-28 lg:z-auto lg:mx-0 lg:self-start lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 lg:backdrop-blur-none xl:top-20">
      <nav aria-label="Activity sections">
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

export default ActivitySectionNav;
