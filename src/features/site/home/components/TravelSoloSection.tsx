import { TbArrowRight } from "react-icons/tb";
import Link from "next/link";

import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { travelSoloSteps } from "@/features/site/home/constant/travel-solo";

const TravelSoloSection = () => (
  <section className="bg-secondary py-6 sm:py-8">
    <Container>
      <SectionHeader
        title="Travel solo. Never alone."
        description="Most of the women who walk with us arrive on their own. They leave with a guide, a pace they chose, and a group that never made them feel slow."
        action={
          <Button
            nativeButton={false}
            render={<Link href="/about-us" />}
            variant="accent"
            size="xl"
          >
            Why we are women-led
            <TbArrowRight className="size-4" />
          </Button>
        }
      />

      <div className="mt-5 grid divide-y-2 divide-primary/20 overflow-hidden rounded-md border-2 border-primary/20 bg-card sm:grid-cols-3 sm:divide-x-2 sm:divide-y-0">
        {travelSoloSteps.map((step) => (
          <div key={step.kicker} className="p-5 sm:p-6">
            <p className="text-[0.7rem] font-semibold tracking-[0.16em] text-gold uppercase">
              {step.kicker}
            </p>
            <h3 className="mt-3 text-lg font-semibold text-foreground">
              {step.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

export default TravelSoloSection;
