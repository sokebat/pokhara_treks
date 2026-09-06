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
import { seasons } from "@/features/site/trip/constant/seasons";

const TripWhen = () => (
  <section id="when" className="scroll-mt-32 border-t-2 border-border py-8 sm:py-10">
    <SectionHeader
      title="When to walk this one"
      description="Four seasons, and the honest version of each."
    />

    <Card className="mt-6 gap-0 py-0 shadow-none">
      <CardContent className="px-0">
        <Table className="text-[15px]">
          <TableHeader className="max-sm:sr-only">
            <TableRow className="bg-secondary/60 hover:bg-secondary/60">
              <TableHead className="px-4 py-3 text-muted-foreground">Season</TableHead>
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
);

export default TripWhen;
