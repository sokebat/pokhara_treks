import Container from "@/components/shared/Container";
import {
  colorVariants,
  steps,
} from "@/features/customize-trip/constant/page-copy";

const CustomizeSteps = () => (
  <section className="border-b-2 border-border bg-secondary/40 py-14 sm:py-20">
    <Container>
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold tracking-wide text-primary uppercase">
          How it works
        </p>
        <h2 className="mt-2 text-xl font-bold text-foreground sm:text-2xl lg:text-3xl">
          Three steps, no back-and-forth
        </h2>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {steps.map((step, index) => {
          const variant = colorVariants[index % colorVariants.length];
          return (
            <div
              key={step.title}
              className="group relative flex flex-col gap-3 rounded-md border-2 border-border bg-card p-6"
            >
              <span
                aria-hidden
                className="pointer-events-none absolute top-4 right-5 text-4xl font-bold text-foreground/5 select-none"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-3">
                <span
                  className={`flex size-12 shrink-0 items-center justify-center rounded-full ${variant.chip}`}
                >
                  <step.icon className="size-5" />
                </span>
                <span className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                  Step {index + 1}
                </span>
              </div>
              <h3 className="text-base font-bold text-foreground sm:text-lg">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </div>
          );
        })}
      </div>
    </Container>
  </section>
);

export default CustomizeSteps;
