"use client";

import { useEffect, useState } from "react";
import {
  TbCalendar,
  TbCheck,
  TbHelpCircle,
  TbMountain,
  TbNotes,
  TbRoute,
  TbStar,
} from "react-icons/tb";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#overview", label: "Overview", icon: TbNotes },
  { href: "#itinerary", label: "Itinerary", icon: TbRoute },
  { href: "#included", label: "What is included", icon: TbCheck },
  { href: "#difficulty", label: "Difficulty", icon: TbMountain },
  { href: "#departures", label: "Departures", icon: TbCalendar },
  { href: "#reviews", label: "Reviews", icon: TbStar },
  { href: "#questions", label: "Questions", icon: TbHelpCircle },
] as const;

const sectionIds = navItems.map((item) => item.href.slice(1));

const getStickyOffset = () => {
  const mainNav = parseFloat(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--main-nav-offset",
    ),
  );
  return (Number.isFinite(mainNav) ? mainNav : 80) + 48;
};

const TripOnPageNav = () => {
  const [active, setActive] = useState<(typeof sectionIds)[number]>("overview");

  useEffect(() => {
    const update = () => {
      let current: (typeof sectionIds)[number] = sectionIds[0];

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - getStickyOffset() <= 1) {
          current = id;
        }
      }

      setActive(current);
    };

    const hash = window.location.hash.slice(1);
    if (sectionIds.includes(hash as (typeof sectionIds)[number])) {
      setActive(hash as (typeof sectionIds)[number]);
    }

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        update();
        ticking = false;
      });
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", update);
    };
  }, []);

  useEffect(() => {
    const link = document.querySelector<HTMLAnchorElement>(
      `nav[aria-label="On this page"] ul a[href="#${active}"]`,
    );
    link?.scrollIntoView({ inline: "nearest", block: "nearest" });
  }, [active]);

  return (
    <nav
      aria-label="On this page"
      className="sticky top-[var(--main-nav-offset,80px)] z-30 border-y-2 border-border bg-secondary/90 backdrop-blur-md transition-[top] duration-300 ease-out"
    >
      <Container>
        <div className="flex items-center gap-4">
          <ul className="no-scrollbar flex h-12 min-w-0 flex-1 items-stretch gap-0.5 overflow-x-auto">
            {navItems.map((item) => {
              const id = item.href.slice(1);
              const isCurrent = active === id;

              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={isCurrent ? "true" : undefined}
                    onClick={() => setActive(id)}
                    className="flex h-full items-center gap-2 px-3.5 text-sm font-semibold whitespace-nowrap text-muted-foreground hover:text-primary aria-[current=true]:border-b-[2.5px] aria-[current=true]:border-accent aria-[current=true]:text-primary"
                  >
                    <item.icon className="size-3.5 shrink-0 opacity-80" />
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          <Button
            nativeButton={false}
            render={<a href="#departures" />}
            size="sm"
            className="hidden shrink-0 lg:inline-flex"
          >
            USD 475 pp · Check dates
          </Button>
        </div>
      </Container>
    </nav>
  );
};

export default TripOnPageNav;
