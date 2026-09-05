import Container from "@/components/shared/Container";

import CustomizeHero from "./CustomizeHero";
import CustomizeSidebar from "./CustomizeSidebar";
import CustomizeSteps from "./CustomizeSteps";
import CustomizeTripForm from "./CustomizeTripForm";

const CustomizeTripView = () => (
  <div className="pb-16 sm:pb-24">
    <CustomizeHero />
    <CustomizeSteps />

    <Container>
      <div className="grid gap-8 pt-14 sm:pt-20 lg:grid-cols-[1fr_1.6fr]">
        <CustomizeSidebar />

        <div className="overflow-hidden rounded-md border-2 border-border bg-card">
          <div
            aria-hidden
            className="h-1.5 bg-linear-to-r from-accent via-accent to-primary"
          />
          <div className="p-6 sm:p-10">
            <h2 className="text-lg font-bold text-foreground sm:text-xl">
              Plan your trip
            </h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Fill in the details below — it takes less than two minutes.
            </p>
            <div className="mt-8">
              <CustomizeTripForm />
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
);

export default CustomizeTripView;
