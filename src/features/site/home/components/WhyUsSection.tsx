import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { reasons, whyUsStats } from "@/features/site/home/constant/why-us";

const WhyUsSection = () => {
  return (
    <section className="bg-secondary pt-6 pb-12 sm:pt-8 sm:pb-16">
      <Container>
        <SectionHeader
          title="Why travel with us"
          description="Six reasons, and every one of them is checkable."
        />

        <div className="mt-8 grid grid-cols-2 divide-x-2 divide-y-2 divide-primary/20 overflow-hidden rounded-md border-2 border-primary/20 bg-card sm:grid-cols-4 sm:divide-y-0">
          {whyUsStats.map((stat) => (
            <div key={stat.label} className="p-3 sm:p-5 lg:p-6">
              <p className="text-xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 overflow-hidden rounded-md border-2 border-primary/20 bg-card">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map(({ title, description, icon: Icon }) => (
              <div
                key={title}
                className="flex gap-3 p-4 shadow-[2px_2px_0_0_color-mix(in_srgb,var(--primary)_20%,transparent)] sm:p-6"
              >
                <Icon className="mt-0.5 size-5 shrink-0 text-primary" />

                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WhyUsSection;
