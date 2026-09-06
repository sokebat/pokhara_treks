import { TbCheck } from "react-icons/tb";

import Container from "@/components/shared/Container";
import StarRating from "@/components/shared/StarRating";

import TripOnPageNav from "./TripOnPageNav";

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

    <TripOnPageNav />
  </>
);

export default TripTitleAndNav;
