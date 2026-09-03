import Container from "@/components/shared/Container";
import SectionHeader from "@/components/shared/SectionHeader";
import { reasons, whyUsStats } from "@/features/site/home/constant/home-data";

const WhyUsSection = () => {
  return (
    <section className="bg-secondary py-12 sm:py-16">
      <Container>
        <SectionHeader
          title="Why travel with us"
          description="Six reasons, and every one of them is checkable."
        />

        <div className="mt-8 grid grid-cols-2 divide-x divide-y divide-border rounded-md bg-card sm:grid-cols-4 sm:divide-y-0">
          {whyUsStats.map((stat) => (
            <div key={stat.label} className="p-5 sm:p-6">
              <p className="text-3xl font-bold text-primary sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 grid gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map(({ title, description, icon: Icon }) => (
            <div key={title} className="flex gap-3 bg-card p-6">
              <Icon className="mt-0.5 size-5 shrink-0 text-accent" />

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
      </Container>
    </section>
  );
};

export default WhyUsSection;
