import { TbSparkles } from "react-icons/tb";
import Image from "next/image";

import Container from "@/components/shared/Container";
import { TREK_PHOTO } from "@/constant/photos";
import { trustPoints } from "@/features/customize-trip/constant/page-copy";

const CustomizeHero = () => (
  <section className="relative isolate overflow-hidden bg-primary">
    <Image
      src={TREK_PHOTO}
      alt="A trekking group led along a Himalayan mountain trail"
      fill
      priority
      sizes="100vw"
      className="object-cover"
    />
    <div aria-hidden className="absolute inset-0 bg-foreground/80" />
    <div
      aria-hidden
      className="absolute inset-0 bg-linear-to-t from-foreground via-foreground/70 to-foreground/40"
    />
    <div
      aria-hidden
      className="absolute top-10 left-1/2 size-72 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
    />

    <Container>
      <div className="relative flex flex-col items-center pt-10 pb-20 text-center sm:pt-12 sm:pb-24 lg:pt-14 lg:pb-28">
        <p className="mt-5 text-sm font-semibold tracking-wide text-sky uppercase">
          Tailor-Made Journeys
        </p>
        <h1 className="mt-3 max-w-2xl text-2xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl">
          Design your own Nepal adventure
        </h1>
        <p className="mt-4 max-w-xl text-primary-foreground/80">
          No fixed packages. Tell us your dates, group size, and the kind of
          trip you&apos;re after — a local planner builds the rest around you.
        </p>
      </div>
    </Container>
  </section>
);

export default CustomizeHero;
