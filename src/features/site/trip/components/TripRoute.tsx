import Image from "next/image";

import SectionHeader from "@/components/shared/SectionHeader";
import { TREK_PHOTO } from "@/constant/photos";

const TripRoute = () => (
  <section id="route" className="scroll-mt-32 border-t-2 border-border py-10 sm:py-12">
    <SectionHeader title="Route and altitude" />
    <div className="mt-6 grid gap-6 lg:grid-cols-2 lg:items-start">
      <figure>
        <div className="relative aspect-4/3 overflow-hidden rounded-md border-2 border-border">
          <Image
            src={TREK_PHOTO}
            alt="Route map of the Annapurna Base Camp trek showing the overnight stops"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <figcaption className="mt-2 text-[12.5px] text-muted-foreground">
          Overnight stops marked. Placeholder map, to be redrawn with the real
          GPX.
        </figcaption>
      </figure>
      <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
        You start at 1,780 m and finish the climb at 4,130 m. The whole gain is
        2,350 m, spread over three days of climbing. The biggest single day is
        day 3 at +950 m. You sleep above 3,000 m on two nights only.
      </p>
    </div>
  </section>
);

export default TripRoute;
