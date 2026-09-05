import { TbArrowRight } from "react-icons/tb";
import Link from "next/link";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-md bg-[color-mix(in_oklab,var(--primary)_48%,var(--chart-4)_52%)] px-5 py-10 text-center text-primary-foreground sm:px-6 sm:py-16">
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-transparent via-primary-foreground to-transparent"
          />
          <p className="text-sm font-semibold tracking-wide text-primary-foreground/70 uppercase">
            Start Your Journey
          </p>
          <h2 className="mt-3 text-2xl font-bold text-primary-foreground sm:text-3xl lg:text-4xl">
            Ready for your Nepal adventure?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-primary-foreground/80">
            Tell us where you want to go and a local expert will get back to you
            with a plan built around it.
          </p>

          <Button
            nativeButton={false}
            render={<Link href="/customize-my-trip" />}
            size="xl"
            className="mt-8 bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Plan Your Trip
            <TbArrowRight className="size-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
