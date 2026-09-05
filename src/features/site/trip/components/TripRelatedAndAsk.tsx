import { TbCalendar, TbMountain } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { popularTreks } from "@/features/site/home/constant/popular-treks";
import { TripCard, cardGridClass } from "@/features/site/listing";
import { siteInfo } from "@/constant/site";
import { cn } from "@/lib/utils";

const tones = ["primary", "accent", "chart-2"] as const;
const relatedTreks = popularTreks.slice(1, 4);

const variants = [
  {
    name: "Annapurna Base Camp Trek",
    note: "this page",
    days: "7",
    alt: "4,130 m",
    difficulty: "4 of 7",
    price: "USD 435",
    current: true,
  },
  {
    name: "Short Annapurna Base Camp Trek",
    days: "5",
    alt: "4,130 m",
    difficulty: "5 of 7, harder because it is faster",
    price: "USD 385",
    href: "/trip/short-annapurna-base-camp",
  },
  {
    name: "Annapurna Base Camp with Poon Hill",
    days: "10",
    alt: "4,130 m",
    difficulty: "4 of 7",
    price: "USD 625",
    href: "/trip/annapurna-base-camp-poon-hill",
  },
  {
    name: "Annapurna Base Camp Helicopter Tour",
    days: "1",
    alt: "4,130 m, landing",
    difficulty: "Easy, no walking",
    price: "USD 490",
    href: "/heli-tours",
  },
];

const TripRelatedAndAsk = () => (
  <>
    <section id="other" className="scroll-mt-32 border-t border-border py-10 sm:py-12">
      <SectionHeader title="Same mountain, different lengths" />

      <Card className="mt-6 gap-0 py-0 shadow-none">
        <CardContent className="px-0">
          <Table className="min-w-[640px] text-[15px]">
            <TableHeader>
              <TableRow className="bg-secondary/60 hover:bg-secondary/60">
                {["Trip", "Days", "Max altitude", "Difficulty", "From"].map((h) => (
                  <TableHead key={h} className="px-4 py-3 text-muted-foreground">
                    {h}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {variants.map((row) => (
                <TableRow
                  key={row.name}
                  className={row.current ? "bg-secondary hover:bg-secondary" : undefined}
                >
                  <TableCell className="whitespace-normal px-4 py-3.5">
                    {row.href ? (
                      <Link href={row.href} className="font-semibold text-primary hover:underline">
                        {row.name}
                      </Link>
                    ) : (
                      <strong>
                        {row.name}{" "}
                        <span className="font-normal text-muted-foreground">{row.note}</span>
                      </strong>
                    )}
                  </TableCell>
                  <TableCell className="px-4 py-3.5 font-semibold tabular-nums">
                    {row.days}
                  </TableCell>
                  <TableCell className="px-4 py-3.5 font-semibold tabular-nums">
                    {row.alt}
                  </TableCell>
                  <TableCell className="whitespace-normal px-4 py-3.5 text-muted-foreground">
                    {row.difficulty}
                  </TableCell>
                  <TableCell className="px-4 py-3.5 font-bold text-chart-2">
                    {row.price}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <h3 className="mt-8 text-lg font-semibold">Other treks the same people book</h3>
      <div className={cn("mt-4", cardGridClass)}>
        {relatedTreks.map((trek, index) => (
          <TripCard
            key={trek.href}
            href={trek.href}
            title={trek.title}
            subtitle={trek.days}
            icon={trek.icon}
            tone={tones[index % tones.length]}
            image={trek.image}
            price={trek.price}
            ctaLabel="View Trip"
            rating={{
              value: trek.rating,
              reviews: trek.reviews,
              difficulty: trek.difficulty,
            }}
            facts={[
              { icon: TbMountain, label: "Altitude", value: trek.altitude },
              { icon: TbCalendar, label: "Best season", value: trek.season },
            ]}
          />
        ))}
      </div>
    </section>

    <section id="ask" className="scroll-mt-32 border-t border-border py-10 sm:py-12">
      <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
        <div>
          <SectionHeader
            title="Still deciding?"
            description="Tell us what is worrying you. Fitness, dates, the altitude, travelling alone, the price. Pushpa answers these herself, usually within two hours."
          />
          <div className="mt-5 flex flex-wrap gap-2.5">
            <Button
              nativeButton={false}
              render={
                <a
                  href={`https://wa.me/${siteInfo.phone.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                />
              }
              variant="whatsapp"
              size="xl"
            >
              <FaWhatsapp className="size-4" />
              WhatsApp Pushpa
            </Button>
            <Button
              nativeButton={false}
              render={<a href={`tel:${siteInfo.phone}`} />}
              variant="outline"
              size="xl"
            >
              Call {siteInfo.phoneDisplay}
            </Button>
          </div>
        </div>

        <Card className="shadow-none">
          <CardContent className="p-5 sm:p-6">
            <form>
              <div className="mb-3.5">
                <Label htmlFor="f-name" className="text-[13px] text-muted-foreground">
                  Your name
                </Label>
                <Input id="f-name" className="mt-1.5 h-11 rounded-md" autoComplete="name" />
              </div>
              <div className="mb-3.5">
                <Label htmlFor="f-mail" className="text-[13px] text-muted-foreground">
                  Email
                </Label>
                <Input
                  id="f-mail"
                  type="email"
                  className="mt-1.5 h-11 rounded-md"
                  autoComplete="email"
                />
              </div>
              <div className="mb-3.5">
                <Label htmlFor="f-date" className="text-[13px] text-muted-foreground">
                  Your dates, or “not sure yet”
                </Label>
                <Input id="f-date" className="mt-1.5 h-11 rounded-md" />
              </div>
              <div className="mb-4">
                <Label htmlFor="f-msg" className="text-[13px] text-muted-foreground">
                  What would you like to know?
                </Label>
                <Textarea id="f-msg" className="mt-1.5 min-h-24 rounded-md" />
              </div>
              <Button type="button" size="xl" className="w-full">
                Send it
              </Button>
              <p className="mt-4 border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
                Not ready to ask anything yet?{" "}
                <a href="#itinerary" className="font-semibold text-primary hover:underline">
                  Send me the full itinerary and price list
                </a>{" "}
                as a PDF.
              </p>
              <p className="mt-3 text-xs text-muted-foreground">
                No deposit, no obligation, and we will not put you on a mailing list
                unless you tick the box.
              </p>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  </>
);

export default TripRelatedAndAsk;
