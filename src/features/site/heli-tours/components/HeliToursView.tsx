import Container from "@/components/shared/Container";
import CTASection from "@/components/shared/CTASection";
import FaqSection from "@/components/shared/FaqSection";
import FindUsSection from "@/components/shared/FindUsSection";
import HeliTourCard from "@/features/site/heli-tours/components/HeliTourCard";
import { heliTours } from "@/features/site/heli-tours/constant/heli-tours";

const HeliToursView = () => {
  return (
    <div>
      <section className="bg-background pt-10 pb-8 sm:pt-12 sm:pb-8">
        <Container>
          <p className="text-sm font-semibold tracking-wide text-accent uppercase">
            Helicopter Tours
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Helicopter tours from Pokhara
          </h1>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Annapurna, Mardi, Everest and Muktinath from the air. Land at
            base camp, a glacier lake, or a temple — and be back in Lakeside
            for lunch.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {heliTours.map((tour, index) => (
              <HeliTourCard
                key={tour.href}
                tour={tour}
                index={index}
                featured={index === 0}
              />
            ))}
          </div>
        </Container>
      </section>

      <FaqSection />
      <FindUsSection />
      <CTASection />
    </div>
  );
};

export default HeliToursView;
