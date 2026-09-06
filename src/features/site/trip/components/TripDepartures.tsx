import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import SectionHeader from "@/components/shared/SectionHeader";

const departures = [
  {
    departs: "Sun 14 Sep",
    returns: "Sat 20 Sep",
    type: "Women only",
    highlight: true,
    guide: "Pushpa",
    seats: "4 left",
    price: "USD 475",
    cta: "Book",
    outline: false,
  },
  {
    departs: "Wed 24 Sep",
    returns: "Tue 30 Sep",
    type: "Mixed",
    guide: "Hira",
    seats: "2 left",
    price: "USD 475",
    cta: "Book",
    outline: false,
  },
  {
    departs: "Sat 4 Oct",
    returns: "Fri 10 Oct",
    type: "Women only",
    highlight: true,
    guide: "Pushpa",
    seats: "6 left",
    price: "USD 475",
    cta: "Book",
    outline: false,
  },
  {
    departs: "Mon 13 Oct",
    returns: "Sun 19 Oct",
    type: "Mixed",
    guide: "Samir",
    seats: "Full",
    price: "USD 475",
    cta: "Waitlist",
    outline: true,
  },
  {
    departs: "Fri 24 Oct",
    returns: "Thu 30 Oct",
    type: "Women only",
    highlight: true,
    guide: "Hira",
    seats: "8 left",
    price: "USD 475",
    cta: "Book",
    outline: false,
  },
  {
    departs: "Any date",
    returns: "You choose",
    type: "Private",
    guide: "Your choice",
    seats: "Not applicable",
    price: "From USD 595",
    cta: "Enquire",
    outline: true,
  },
];

const TripDepartures = () => (
  <section
    id="departures"
    className="scroll-mt-32 border-t-2 border-border py-8 sm:py-10"
  >
    <SectionHeader
      title="Departures you can join"
      description="Or pick any date you like and we will run it privately from 1 person."
    />

    <Card className="mt-6 gap-0 py-0 shadow-none">
      <CardContent className="px-0">
        <Table className="min-w-[720px] text-[15px]">
          <TableHeader>
            <TableRow className="bg-secondary/60 hover:bg-secondary/60">
              {["Departs", "Returns", "Type", "Guide", "Seats left", "Price", ""].map(
                (head) => (
                  <TableHead
                    key={head || "book"}
                    className="px-4 py-3 text-muted-foreground"
                  >
                    {head}
                  </TableHead>
                ),
              )}
            </TableRow>
          </TableHeader>
          <TableBody>
            {departures.map((row) => (
              <TableRow key={row.departs}>
                <TableCell className="px-4 py-3.5 font-semibold tabular-nums">
                  {row.departs}
                </TableCell>
                <TableCell className="px-4 py-3.5 font-semibold tabular-nums text-muted-foreground">
                  {row.returns}
                </TableCell>
                <TableCell className="px-4 py-3.5">
                  {row.highlight ? (
                    <span className="inline-block rounded-sm bg-secondary px-2 py-0.5 text-[11px] font-semibold tracking-wide text-primary uppercase">
                      {row.type}
                    </span>
                  ) : (
                    row.type
                  )}
                </TableCell>
                <TableCell className="px-4 py-3.5">{row.guide}</TableCell>
                <TableCell className="px-4 py-3.5 tabular-nums">{row.seats}</TableCell>
                <TableCell className="px-4 py-3.5 font-bold text-chart-2">
                  {row.price}
                </TableCell>
                <TableCell className="px-4 py-3.5">
                  <Button
                    nativeButton={false}
                    render={
                      row.cta === "Enquire" ? (
                        <Link href="/customize-my-trip" />
                      ) : (
                        <a href="#departures" />
                      )
                    }
                    variant={row.outline ? "outline" : "default"}
                    size="sm"
                  >
                    {row.cta}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>

    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
      <strong className="text-foreground">Every departure runs.</strong> We do
      not cancel a trip for low numbers. If you are the only booking, you walk
      with your guide at the group price.
    </p>
    <p className="mt-2 text-[13px] text-muted-foreground">
      20% deposit to hold a place, USD 95 on this trek. Nothing else until you
      reach Pokhara.
    </p>
  </section>
);

export default TripDepartures;
