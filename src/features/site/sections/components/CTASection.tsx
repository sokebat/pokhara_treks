import { TbArrowRight } from "react-icons/tb";
import Link from "next/link";

import Container from "@/components/shared/Container";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="border-t border-border bg-background py-12 sm:py-16">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="text-sm font-semibold tracking-wide text-primary uppercase">
            Start Your Journey
          </p>
          <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
            Ready for your Nepal adventure?
          </h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Tell us where you want to go and a local expert will get back to you
            with a plan built around it.
          </p>

          <Button
            nativeButton={false}
            render={<Link href="/customize-my-trip" />}
            size="xl"
            className="mt-8"
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
