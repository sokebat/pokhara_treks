import Image from "next/image";

import SectionHeader from "@/components/shared/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TREK_PHOTO, WOMEN_TREK_PHOTO } from "@/constant/photos";

const days = [
  {
    id: "day-1",
    title: "Day 1 · Pokhara to Jhinu Danda by jeep, then trek to Sinuwa",
    metrics: "5 to 6 hours walking · 12 km · +970 m / −390 m · Sleep at 2,360 m",
    body: [
      "A 3 hour jeep from our office in Lakeside gets you to Jhinu Danda by mid-morning. Then the hard part of the week arrives on day one, on purpose, so the rest of the trek gets easier rather than harder. You climb to Chhomrong at 2,170 m, which takes about two hours. Chhomrong is where you get your last bakery, your last reliable hot shower and your last shop.",
      "After lunch the trail drops down roughly 3,300 stone steps to the Chhomrong Khola, crosses a suspension bridge, and climbs straight back up the other side to Sinuwa. There is no way around it and no vehicle that can take you. Everybody finds it hard and nobody has failed to finish it.",
    ],
    sleep: "Sleep: Sinuwa Guest House or similar, teahouse, twin share",
    image: TREK_PHOTO,
    imageAlt: "The suspension bridge over the Chhomrong Khola at the bottom of the stone steps",
  },
  {
    id: "day-2",
    title: "Day 2 · Sinuwa to Deurali",
    metrics: "6 hours walking · 13 km · +880 m / −60 m · Sleep at 3,180 m",
    body: [
      "The valley narrows today and the rhododendron forest closes over the trail. You drop through Bamboo at 2,310 m, then climb steadily through Dovan to Himalaya and on to Deurali. The walls on both sides get higher all day and the sky above you gets narrower.",
      "This is the first night above 3,000 m. Your guide starts checking your oxygen saturation this evening and writes it down. Drink more than you feel like drinking.",
    ],
    sleep: "Sleep: Deurali, teahouse, twin share",
    image: WOMEN_TREK_PHOTO,
    imageAlt: "Rhododendron forest closing over the trail above Bamboo",
  },
  {
    id: "day-3",
    title: "Day 3 · Deurali to Annapurna Base Camp, by way of Machhapuchhre Base Camp",
    metrics: "5 hours walking · 9 km · +950 m · Sleep at 4,130 m",
    body: [
      "The biggest climbing day, and the shortest in distance, which tells you what the ground is doing. You walk out of the trees and into the sanctuary. Machhapuchhre Base Camp at 3,700 m is where you stop for lunch and where most people first notice the altitude.",
      "The last two hours are a slow, steady walk into the bowl. Then the ground flattens, the mountains stand up all the way round you, and you are there. Get to bed early. Sunrise is the reason you came.",
    ],
    sleep: "Sleep: Annapurna Base Camp, teahouse, twin share",
    image: TREK_PHOTO,
    imageAlt: "The flat glacial basin of Annapurna Base Camp with the peaks standing around it",
  },
  {
    id: "day-4-7",
    title: "Days 4 to 7 · Base camp down to Bamboo, Jhinu Danda, Ghandruk and back to Pokhara",
    metrics: "4 to 7 hours a day · 47 km · −2,350 m overall · Ends in Pokhara",
    body: [
      "Sunrise on Machhapuchhre, then you turn round and walk out. The way down goes faster than the way up and it is harder on your knees, which is what the trekking poles are for. Day 5 gives you the Chhomrong steps in reverse.",
      "Day 6 finishes at the Jhinu Danda hot springs, which are included. Day 7 walks out through Ghandruk, a Gurung village with Annapurna South directly behind it, and the jeep brings you back to Lakeside by mid-afternoon.",
    ],
    sleep: "Sleep: Bamboo, Jhinu Danda and Ghandruk, teahouse, twin share",
    image: WOMEN_TREK_PHOTO,
    imageAlt: "Ghandruk village on the walk out, with Annapurna South behind it",
  },
];

const TripItinerary = () => (
  <section id="itinerary" className="scroll-mt-32 border-t border-border py-10 sm:py-12">
    <SectionHeader
      title="Day by day"
      description="Day 1 is open. The rest expand. Nothing collapses again on its own."
    />

    <div className="mt-6 rounded-md border border-border bg-card px-4 sm:px-5">
      <Accordion multiple defaultValue={[days[0].id]}>
        {days.map((day) => (
          <AccordionItem key={day.id} value={day.id}>
            <AccordionTrigger className="py-4 text-left hover:no-underline sm:py-5">
              <span>
                <span className="block pr-8 text-[15px] font-bold text-foreground sm:text-base">
                  {day.title}
                </span>
                <span className="mt-2 block text-sm font-normal text-muted-foreground">
                  {day.metrics}
                </span>
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="grid gap-5 pb-4 lg:grid-cols-[1fr_16rem]">
                <div>
                  {day.body.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground"
                    >
                      {paragraph}
                    </p>
                  ))}
                  <p className="mt-4 flex flex-wrap items-center gap-3 border-t border-border pt-3.5 text-[13px] text-muted-foreground">
                    <span
                      className="inline-flex gap-1"
                      role="img"
                      aria-label="Breakfast, lunch and dinner included"
                    >
                      {["B", "L", "D"].map((meal) => (
                        <i
                          key={meal}
                          className="not-italic flex size-5 items-center justify-center rounded-sm bg-secondary text-[11px] font-bold text-primary"
                        >
                          {meal}
                        </i>
                      ))}
                    </span>
                    {day.sleep}
                  </p>
                </div>
                <div className="relative aspect-4/3 max-w-xs overflow-hidden rounded-md">
                  <Image
                    src={day.image}
                    alt={day.imageAlt}
                    fill
                    sizes="260px"
                    className="object-cover"
                  />
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default TripItinerary;
