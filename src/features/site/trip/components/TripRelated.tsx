import { TbCalendar, TbMountain } from "react-icons/tb";
import Link from "next/link";

import SectionHeader from "@/components/shared/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { popularTreks } from "@/features/site/home/constant/popular-treks";
import { shortTreks } from "@/features/site/home/constant/short-treks";
import { TripCard } from "@/features/site/listing";
import { variants } from "@/features/site/trip/constant/variants";

const tones = ["primary", "accent", "chart-2"] as const;
const currentHref = "/annapurna-base-camp-trek";
const relatedTreks = [...popularTreks, ...shortTreks]
  .filter(
    (trek, index, list) =>
      trek.href !== currentHref &&
      list.findIndex((item) => item.href === trek.href) === index,
  )
  .slice(0, 6);

const TripRelated = () => (
  <section id="other" className="scroll-mt-32 border-t-2 border-border py-8 sm:py-10">
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
                  {"href" in row && row.href ? (
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
    <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
);

export default TripRelated;
