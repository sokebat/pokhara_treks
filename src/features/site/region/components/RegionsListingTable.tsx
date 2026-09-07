import Image from "next/image";
import Link from "next/link";
import { TbArrowRight } from "react-icons/tb";

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
import { regionPath } from "@/features/site/region/constant/regions";
import { listPublicRegions } from "@/features/site/region/service/public-region.service";

const columns = [
  "Region",
  "Location",
  "Highest point",
  "Season",
  "Typical trek",
  "",
] as const;

function cellValue(value: string) {
  return value.trim() || "—";
}

export default async function RegionsListingTable() {
  const regions = await listPublicRegions();

  return (
    <Card className="mt-6 gap-0 overflow-hidden py-0 shadow-none lg:mt-8">
      <CardContent className="px-0">
        <Table className="min-w-[860px] text-[15px]">
          <TableHeader>
            <TableRow className="bg-secondary/60 hover:bg-secondary/60">
              {columns.map((head) => (
                <TableHead
                  key={head || "view"}
                  className="px-4 py-3 text-muted-foreground"
                >
                  {head}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {regions.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-40 px-4 text-center text-muted-foreground"
                >
                  No regions published yet.
                </TableCell>
              </TableRow>
            ) : (
              regions.map((region) => (
                <TableRow key={region.slug}>
                  <TableCell className="px-4 py-3.5 whitespace-normal">
                    <Link
                      href={regionPath(region.slug)}
                      className="flex items-center gap-3"
                    >
                      <span className="relative size-14 shrink-0 overflow-hidden rounded-md border-2 border-border">
                        <Image
                          src={region.image}
                          alt={region.imageAlt}
                          fill
                          sizes="56px"
                          className="object-cover"
                        />
                      </span>
                      <span>
                        <span className="block font-semibold text-foreground hover:text-chart-2">
                          {region.title}
                        </span>
                        {region.tagline ? (
                          <span className="mt-0.5 block text-sm text-muted-foreground">
                            {region.tagline}
                          </span>
                        ) : null}
                      </span>
                    </Link>
                  </TableCell>
                  <TableCell className="px-4 py-3.5 whitespace-normal text-muted-foreground">
                    {cellValue(region.location)}
                  </TableCell>
                  <TableCell className="px-4 py-3.5 font-semibold whitespace-normal">
                    {cellValue(region.highestPoint)}
                  </TableCell>
                  <TableCell className="px-4 py-3.5 whitespace-normal text-muted-foreground">
                    {cellValue(region.bestSeason)}
                  </TableCell>
                  <TableCell className="px-4 py-3.5 font-semibold tabular-nums">
                    {cellValue(region.typicalDuration)}
                  </TableCell>
                  <TableCell className="px-4 py-3.5">
                    <Button
                      nativeButton={false}
                      render={<Link href={regionPath(region.slug)} />}
                      size="sm"
                    >
                      View
                      <TbArrowRight className="size-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
