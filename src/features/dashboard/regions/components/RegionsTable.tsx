import Link from "next/link";
import { TbExternalLink, TbPlus, TbSeo } from "react-icons/tb";

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
import DashboardPageHeader from "@/features/dashboard/components/DashboardPageHeader";
import {
  contentMetaPath,
  contentMetaSlugs,
  contentPaths,
  regionEditPath,
  regionNewPath,
} from "@/features/dashboard/lib/content-paths";
import RegionRowActions from "@/features/dashboard/regions/components/RegionRowActions";
import { getRegionsForDashboard } from "@/features/dashboard/regions/service/region.service";
import { regionPath } from "@/features/site/region/constant/regions";

type RegionsTableProps = {
  savedTitle?: string | null;
};

const columns = [
  "Region",
  "Location",
  "Highest point",
  "Season",
  "Typical trek",
  "Actions",
] as const;

function cellValue(value: string) {
  return value.trim() || "—";
}

export default async function RegionsTable({ savedTitle }: RegionsTableProps) {
  const rows = await getRegionsForDashboard();
  const seoHref = contentMetaPath(
    contentPaths.regions,
    contentMetaSlugs.regions,
  );

  return (
    <div className="flex flex-1 flex-col gap-6">
      <DashboardPageHeader
        title="Regions"
        description="Trekking region pages published on the site."
        actions={
          <>
            <Button
              nativeButton={false}
              variant="outline"
              className="rounded-md"
              render={
                <Link href="/region" target="_blank" rel="noopener noreferrer" />
              }
            >
              <TbExternalLink className="size-4" />
              View site
            </Button>
            <Button
              nativeButton={false}
              variant="outline"
              className="rounded-md"
              render={<Link href={seoHref} />}
            >
              <TbSeo className="size-4" />
              Region SEO
            </Button>
            <Button
              nativeButton={false}
              className="rounded-md"
              render={<Link href={regionNewPath} />}
            >
              <TbPlus className="size-4" />
              Add region
            </Button>
          </>
        }
      />

      {savedTitle ? (
        <p className="rounded-md border-2 border-border bg-secondary/60 px-4 py-3 text-sm">
          <span className="font-semibold text-foreground">Region saved:</span>{" "}
          <span className="text-muted-foreground">“{savedTitle}”</span>
        </p>
      ) : null}

      <Card className="gap-0 overflow-hidden py-0 shadow-none">
        <CardContent className="px-0">
          <Table className="min-w-[860px] text-[15px]">
            <TableHeader>
              <TableRow className="bg-secondary/60 hover:bg-secondary/60">
                {columns.map((head) => (
                  <TableHead
                    key={head}
                    className={`px-4 py-3 text-muted-foreground ${
                      head === "Actions" ? "text-right" : ""
                    }`}
                  >
                    {head}
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-48 px-4">
                    <div className="flex flex-col items-center justify-center text-center">
                      <p className="font-semibold text-foreground">
                        No regions yet
                      </p>
                      <p className="mt-1 text-sm text-muted-foreground">
                        Add a trekking region to publish it on the site.
                      </p>
                      <Button
                        nativeButton={false}
                        variant="outline"
                        size="sm"
                        className="mt-4 rounded-md"
                        render={<Link href={regionNewPath} />}
                      >
                        <TbPlus className="size-4" />
                        Add region
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ) : (
                rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="px-4 py-3.5 whitespace-normal">
                      <Link
                        href={regionEditPath(row.slug)}
                        className="flex items-center gap-3"
                      >
                        {row.image ? (
                          <span className="relative size-12 shrink-0 overflow-hidden rounded-md border-2 border-border bg-muted">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={row.image}
                              alt=""
                              className="size-full object-cover"
                            />
                          </span>
                        ) : (
                          <span className="flex size-12 shrink-0 items-center justify-center rounded-md border-2 border-border bg-muted text-xs font-semibold tracking-wide text-muted-foreground uppercase">
                            {row.title.slice(0, 2)}
                          </span>
                        )}
                        <span>
                          <span className="block font-semibold text-foreground hover:text-chart-2">
                            {row.title}
                          </span>
                          <span className="mt-0.5 block font-mono text-xs text-muted-foreground">
                            {regionPath(row.slug)}
                          </span>
                        </span>
                      </Link>
                    </TableCell>
                    <TableCell className="px-4 py-3.5 whitespace-normal text-muted-foreground">
                      {cellValue(row.location)}
                    </TableCell>
                    <TableCell className="px-4 py-3.5 font-semibold whitespace-normal">
                      {cellValue(row.highestPoint)}
                    </TableCell>
                    <TableCell className="px-4 py-3.5 whitespace-normal text-muted-foreground">
                      {cellValue(row.bestSeason)}
                    </TableCell>
                    <TableCell className="px-4 py-3.5 font-semibold tabular-nums">
                      {cellValue(row.typicalDuration)}
                    </TableCell>
                    <TableCell className="px-4 py-3.5">
                      <div className="flex justify-end">
                        <RegionRowActions row={row} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
