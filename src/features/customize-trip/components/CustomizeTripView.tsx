import Container from "@/components/shared/Container";

import CustomizeHero from "./CustomizeHero";
import CustomizeSidebar from "./CustomizeSidebar";

import CustomizeTripForm from "./CustomizeTripForm";
import { FindUsSection } from "@/features/site/sections";

const CustomizeTripView = () => (
  <div>
    <CustomizeHero />

    <div className="bg-background pb-16 sm:pb-20">
      <Container>
        <div className="relative z-10 -mt-12 sm:-mt-16 lg:-mt-20">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_20rem]">
            <div
              id="plan-your-trip"
              className="scroll-mt-24 overflow-hidden rounded-xl border-2 border-primary/15 bg-card"
            >
              <div
                aria-hidden
                className="h-1.5 bg-linear-to-r from-accent via-accent to-primary"
              />
              <div className="p-5 sm:p-8 lg:p-10">
                <CustomizeTripForm />
              </div>
            </div>

            <CustomizeSidebar />
          </div>
        </div>
      </Container>
    </div>

    <FindUsSection />
  </div>
);

export default CustomizeTripView;
