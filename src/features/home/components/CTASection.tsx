import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="rounded-md bg-primary px-6 py-14 text-center text-primary-foreground sm:py-16">
          <p className="text-sm font-semibold tracking-wide text-accent uppercase">
            Start Your Journey
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Ready for your Nepal adventure?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-primary-foreground/80">
            Tell us where you want to go and a local expert will get back to you
            with a plan built around it.
          </p>

          <Button
            nativeButton={false}
            render={<Link href="/customize-my-trip" />}
            variant="accent"
            size="xl"
            className="mt-8"
          >
            Plan Your Trip
            <ArrowRightIcon className="size-4" />
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default CTASection;
