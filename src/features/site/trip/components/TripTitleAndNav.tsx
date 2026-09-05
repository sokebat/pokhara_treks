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
import StarRating from "@/components/shared/StarRating";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "#overview", label: "Overview", icon: TbNotes, current: true },
  { href: "#itinerary", label: "Itinerary", icon: TbRoute },
  { href: "#included", label: "What is included", icon: TbCheck },
  { href: "#difficulty", label: "Difficulty", icon: TbMountain },
  { href: "#departures", label: "Departures", icon: TbCalendar },
  { href: "#reviews", label: "Reviews", icon: TbStar },
  { href: "#questions", label: "Questions", icon: TbHelpCircle },
];

const TripTitleAndNav = () => (
  <>
    <section className="py-6 sm:py-8">
      <Container>
        <div className="flex items-start gap-4 sm:gap-5">
          <span className="flex w-16 shrink-0 flex-col items-center rounded-md bg-primary px-2 py-2.5 text-center text-primary-foreground sm:w-[4.6rem]">
            <b className="text-2xl leading-none font-bold tracking-tight sm:text-[1.75rem]">
              7
            </b>
            <span className="mt-1.5 w-full border-t-2 border-primary-foreground/30 pt-1.5 text-[11px] font-semibold tracking-wider uppercase">
              Days
            </span>
          </span>

          <div className="min-w-0">
            <h1 className="max-w-3xl text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
              Annapurna Base Camp Trek from Pokhara
            </h1>
            <div className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-sm text-muted-foreground">
              <StarRating rating={5} />
              <a
                href="#reviews"
                className="font-semibold text-foreground underline underline-offset-3"
              >
                46 reviews
              </a>
              <span>on Google and TripAdvisor</span>
              <span
                aria-hidden
                className="hidden h-3.5 w-px bg-border sm:block"
              />
              <span className="inline-flex items-center gap-1.5 font-semibold text-primary">
                <TbCheck className="size-4" />
                Recommended by 98% of walkers
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>

    <nav
      aria-label="On this page"
      className="sticky top-16 z-30 border-y-2 border-border bg-secondary/90 backdrop-blur-md"
    >
      <Container>
        <div className="flex items-center gap-4">
          <ul className="flex h-12 min-w-0 flex-1 items-stretch gap-0.5 overflow-x-auto">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={item.current ? "true" : undefined}
                  className="flex h-full items-center gap-2 px-3.5 text-sm font-semibold whitespace-nowrap text-muted-foreground hover:text-primary aria-[current=true]:border-b-[2.5px] aria-[current=true]:border-accent aria-[current=true]:text-primary"
                >
                  <item.icon className="size-3.5 shrink-0 opacity-80" />
                  {item.label}
                </a>
              </li>
            ))}
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
  </>
);

export default TripTitleAndNav;
