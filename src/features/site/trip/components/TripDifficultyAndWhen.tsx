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

const seasons = [
  {
    name: "Spring",
    months: "March to May",
    copy: "Rhododendron comes into flower low down through March and peaks in April, which is the best month of the year for it. Mornings are clear, nights above 3,000 m are still cold, and by May the air turns warm and hazy with cloud most afternoons. A good season, and April is one of the two best months to walk this route. April fills up, so book about 8 weeks ahead.",
  },
  {
    name: "Summer and monsoon",
    months: "June to August",
    copy: "Rain most days, leeches below 2,500 m, landslides on the jeep road to Jhinu Danda, and the mountains hidden behind cloud for days at a time. This is the one season we would rather you did not come. If these are the only months you can travel, ask us about Upper Mustang instead.",
  },
  {
    name: "Autumn",
    months: "September to November",
    highlight: true,
    copy: "September clears after the rain and is green, quiet and underrated. October has the clearest skies of the year and is also the busiest. November is clear and cold with far fewer people. The best season, and if you are choosing between October and November, take November.",
  },
  {
    name: "Winter",
    months: "December to February",
    copy: "Very cold above Deurali, snow possible at base camp, and some lodges shut for the season. The skies can be superb and the trail is close to empty. Possible with the right kit and the right expectations, but talk to us first.",
  },
];

const TripDifficultyAndWhen = () => (
  <>
    <section id="difficulty" className="scroll-mt-32 border-t border-border py-10 sm:py-12">
      <SectionHeader title="How hard is it, honestly" />

      <div className="mt-6 mb-6 flex flex-wrap items-center gap-4">
        <Card className="w-fit gap-0 py-0 shadow-none">
          <CardContent className="flex items-center gap-3.5 bg-secondary px-4 py-3">
            <span
              className="flex w-28 gap-0.5"
              role="img"
              aria-label="Difficulty 4 out of 7"
            >
              {[true, true, true, true, false, false, false].map((on, i) => (
                <i
                  key={i}
                  className={`h-1.5 flex-1 rounded-[1px] ${on ? "bg-primary" : "bg-border"}`}
                />
              ))}
            </span>
            <b className="text-[15px] font-bold">Moderate. 4 on our 7 point scale.</b>
          </CardContent>
        </Card>
        <Link href="/blogs" className="text-sm font-semibold text-primary hover:underline">
          Read our full guide to trek grades →
        </Link>
      </div>

      <div className="max-w-3xl space-y-4 text-[15px] leading-relaxed text-muted-foreground">
        <h3 className="text-[17px] font-semibold text-foreground">
          What that means in hours
        </h3>
        <p>
          4 to 7 hours of walking a day for six days, with one day of 8. Not
          flat. Nepali trails go up and down all day, so a “5 hour day”
          involves far more climbing than a 5 hour walk at home.
        </p>
        <h3 className="pt-2 text-[17px] font-semibold text-foreground">
          The hardest part
        </h3>
        <p>
          The 3,300 stone steps below Chhomrong on day one, then the same steps
          in reverse on day five. About two and a half hours of continuous
          climbing each time. Everyone finds it hard. Nobody has failed to
          finish it.
        </p>
        <h3 className="pt-2 text-[17px] font-semibold text-foreground">
          The altitude
        </h3>
        <p>
          You sleep above 3,000 m on two nights. That is low compared with
          Everest Base Camp, where you sleep above 4,000 m for six. Most people
          get a headache at Machhapuchhre Base Camp and it goes with water,
          rest and walking slowly.
        </p>
        <h3 className="pt-2 text-[17px] font-semibold text-foreground">
          Who should not book this
        </h3>
        <p>
          If you cannot walk four hours on a hilly path at home without needing
          a rest day afterwards, book Ghorepani Poon Hill first, 4 days, and
          come back for this next year.
        </p>
      </div>
    </section>

    <section id="when" className="scroll-mt-32 border-t border-border py-10 sm:py-12">
      <SectionHeader
        title="When to walk this one"
        description="Four seasons, and the honest version of each."
      />

      <Card className="mt-6 gap-0 py-0 shadow-none">
        <CardContent className="px-0">
          <Table className="text-[15px]">
            <TableHeader className="max-sm:sr-only">
              <TableRow className="bg-secondary/60 hover:bg-secondary/60">
                <TableHead className="px-4 py-3 text-muted-foreground">
                  Season
                </TableHead>
                <TableHead className="px-4 py-3 whitespace-normal text-muted-foreground">
                  What it is like, and what we would tell you
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {seasons.map((season) => (
                <TableRow
                  key={season.name}
                  className={`max-sm:block max-sm:p-4 ${season.highlight ? "bg-secondary hover:bg-secondary" : ""}`}
                >
                  <TableCell className="w-48 whitespace-normal px-4 py-3.5 align-top max-sm:block max-sm:w-full max-sm:px-0">
                    <b className="block text-base font-bold text-foreground">
                      {season.name}
                    </b>
                    <span className="mt-0.5 block text-sm text-muted-foreground">
                      {season.months}
                    </span>
                  </TableCell>
                  <TableCell className="whitespace-normal px-4 py-3.5 leading-relaxed text-muted-foreground max-sm:mt-2 max-sm:block max-sm:px-0">
                    {season.copy}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </section>
  </>
);

export default TripDifficultyAndWhen;
