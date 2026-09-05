import Image from "next/image";

import SectionHeader from "@/components/shared/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { TREK_PHOTO } from "@/constant/photos";

const TripRoute = () => (
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
);

export default TripRoute;
