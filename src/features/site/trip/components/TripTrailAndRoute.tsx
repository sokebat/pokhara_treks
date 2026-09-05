import Image from "next/image";

import SectionHeader from "@/components/shared/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { TREK_PHOTO } from "@/constant/photos";

const TripTrailAndRoute = () => (
  <>
    <section id="detail" className="scroll-mt-32 border-t-2 border-border py-10 sm:py-12">
      <SectionHeader title="What the walking is actually like" />

      <div className="mt-6 max-w-3xl">
        <h3 className="text-lg font-semibold text-foreground">The trail underfoot</h3>
        <p className="mt-3.5 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          Almost none of this route is a path in the flat sense. It is stone:
          laid steps, worn river rock and, between Chhomrong and Sinuwa,
          roughly{" "}
          <strong className="font-semibold text-foreground">
            3,300 cut stone stairs
          </strong>{" "}
          that go down for forty minutes and then straight back up the other
          side of the valley. Trekking poles matter more here than boots do.
        </p>
        <p className="mt-3.5 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          Above Bamboo the stone gives way to a forest floor of roots and mud
          that stays wet even in October. The last two hours into the sanctuary
          are moraine, loose and grey, and that is the only stretch where you
          will want to watch your feet rather than the view.
        </p>

        <h3 className="mt-8 text-lg font-semibold text-foreground">
          A day, start to finish
        </h3>
        <ul className="mt-3.5 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-muted-foreground marker:text-primary sm:text-base">
          <li>
            <strong className="font-semibold text-foreground">6:00</strong> Tea
            in the room. The kitchen is already lit.
          </li>
          <li>
            <strong className="font-semibold text-foreground">7:00</strong>{" "}
            Breakfast, then walking by half past.
          </li>
          <li>
            <strong className="font-semibold text-foreground">11:30</strong> Lunch
            at a teahouse on the route, cooked to order.
          </li>
          <li>
            <strong className="font-semibold text-foreground">15:00</strong> Into
            the night stop with the afternoon still open.
          </li>
          <li>
            <strong className="font-semibold text-foreground">19:00</strong> Dinner
            together at one table, usually round the stove.
          </li>
        </ul>

        <Card className="mt-6 gap-0 border-l-[3px] border-l-primary py-0 shadow-none">
          <CardContent className="bg-secondary p-4 sm:p-4.5">
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
              <strong className="font-semibold text-foreground">
                Charging, water and signal.
              </strong>{" "}
              Every teahouse to Deurali sells power by the hour, about NPR 200 to
              300. Boiled or filtered water is NPR 100 to 200 a litre going up.
              Ncell holds to Chhomrong and drops out after it.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
              There is no ATM past Pokhara. Bring cash for the whole week.
            </p>
          </CardContent>
        </Card>

        <blockquote className="mt-6 border-l-[3px] border-primary pl-5">
          <p className="text-base leading-relaxed text-foreground sm:text-lg">
            The steps below Chhomrong beat me on the way up and beat me again
            coming down. Everything else on the route is easier than that one
            hill.
          </p>
          <cite className="mt-2.5 block text-sm not-italic text-muted-foreground">
            Sample pull quote. Replace or leave out.
          </cite>
        </blockquote>

        <h3 className="mt-8 text-lg font-semibold text-foreground">The nights</h3>
        <p className="mt-3.5 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
          Teahouse rooms are plywood, twin share, with a foam mattress and a
          blanket that is never quite enough above 3,000 m. Take a liner and a
          warm layer to sleep in. At Machhapuchhre and Annapurna Base Camp the
          water in your bottle can freeze overnight in December.
        </p>
      </div>
    </section>

    <section id="route" className="scroll-mt-32 border-t-2 border-border py-10 sm:py-12">
      <SectionHeader title="Route and altitude" />
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
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
        <figure>
          <Card className="gap-0 py-0 shadow-none">
            <CardContent className="p-3.5">
              <svg
                viewBox="0 0 520 300"
                role="img"
                aria-label="Altitude profile. Day 1 starts at 1,780 metres and sleeps at 2,360 metres. Day 3 reaches 4,130 metres, the highest point."
                className="block h-auto w-full"
              >
                <g stroke="currentColor" className="text-border" strokeWidth="1">
                  <line x1="52" y1="30" x2="505" y2="30" />
                  <line x1="52" y1="90" x2="505" y2="90" />
                  <line x1="52" y1="150" x2="505" y2="150" />
                  <line x1="52" y1="210" x2="505" y2="210" />
                  <line x1="52" y1="255" x2="505" y2="255" />
                </g>
                <g
                  fill="currentColor"
                  className="text-muted-foreground"
                  fontSize="10"
                  textAnchor="end"
                >
                  <text x="45" y="34">
                    4,500
                  </text>
                  <text x="45" y="94">
                    3,500
                  </text>
                  <text x="45" y="154">
                    2,500
                  </text>
                  <text x="45" y="214">
                    1,500
                  </text>
                </g>
                <path
                  d="M52 236 L118 201 L184 152 L250 95 L316 152 L382 205 L448 236 L505 224 L505 255 L52 255 Z"
                  className="fill-secondary"
                />
                <path
                  d="M52 236 L118 201 L184 152 L250 95 L316 152 L382 205 L448 236 L505 224"
                  fill="none"
                  className="stroke-primary"
                  strokeWidth="2.2"
                  strokeLinejoin="round"
                />
                <g className="fill-primary">
                  <circle cx="52" cy="236" r="3.4" />
                  <circle cx="118" cy="201" r="3.4" />
                  <circle cx="184" cy="152" r="3.4" />
                  <circle cx="250" cy="95" r="4.6" className="fill-accent" />
                  <circle cx="316" cy="152" r="3.4" />
                  <circle cx="382" cy="205" r="3.4" />
                  <circle cx="448" cy="236" r="3.4" />
                  <circle cx="505" cy="224" r="3.4" />
                </g>
                <text
                  x="250"
                  y="82"
                  className="fill-accent"
                  fontSize="11"
                  fontWeight="700"
                  textAnchor="middle"
                >
                  4,130 m
                </text>
                <g
                  fill="currentColor"
                  className="text-muted-foreground"
                  fontSize="10"
                  textAnchor="middle"
                >
                  <text x="52" y="275">
                    Start
                  </text>
                  <text x="118" y="275">
                    D1
                  </text>
                  <text x="184" y="275">
                    D2
                  </text>
                  <text x="250" y="275">
                    D3
                  </text>
                  <text x="316" y="275">
                    D4
                  </text>
                  <text x="382" y="275">
                    D5
                  </text>
                  <text x="448" y="275">
                    D6
                  </text>
                  <text x="505" y="275">
                    D7
                  </text>
                </g>
              </svg>
            </CardContent>
          </Card>
          <figcaption className="mt-2 text-[12.5px] text-muted-foreground">
            Sleeping altitude by night. The amber point is the highest night.
          </figcaption>
        </figure>
      </div>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
        You start at 1,780 m and finish the climb at 4,130 m. The whole gain is
        2,350 m, spread over three days of climbing. The biggest single day is
        day 3 at +950 m. You sleep above 3,000 m on two nights only.
      </p>
    </section>
  </>
);

export default TripTrailAndRoute;
