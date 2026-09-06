import Link from "next/link";
import { TbPlus } from "react-icons/tb";

import RegionRowActions from "@/features/dashboard/regions/components/RegionRowActions";
import {
  regionEditPath,
  regionNewPath,
} from "@/features/dashboard/lib/content-paths";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export type RegionTableRow = {
  id: string;
  slug: string;
  title: string;
  location: string;
  typicalDuration: string;
  highestPoint: string;
  publicHref: string;
};

type RegionsTableProps = {
  rows: RegionTableRow[];
  savedTitle?: string | null;
};

export default function RegionsTable({
  rows,
  savedTitle,
}: RegionsTableProps) {
  return (
    <div className="flex flex-1 flex-col gap-6">
      {/* Page Header */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
            Regions
          </h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Manage trekking region pages published on your website.
          </p>
        </div>

        <Button
          nativeButton={false}
          className="h-9 rounded-md px-4 shadow-none"
          render={<Link href={regionNewPath} />}
        >
          <TbPlus className="size-4" />
          Add region
        </Button>
      </div>

      {/* Saved Message */}
      {savedTitle ? (
        <div className="rounded-lg bg-muted/50 px-4 py-3 text-sm text-foreground">
          <span className="font-medium">Region saved:</span>{" "}
          <span className="text-muted-foreground">“{savedTitle}”</span>
        </div>
      ) : null}

      {/* Regions */}
      <Card className="overflow-hidden rounded-xl border-0 bg-background shadow-none">
        <CardHeader className="px-0 pb-5 pt-0">
          <div className="flex items-center justify-between gap-4">
            <div>
              <CardTitle className="text-base font-semibold">
                All regions
              </CardTitle>

              <CardDescription className="mt-1 text-sm">
                {rows.length === 0
                  ? "No regions have been added yet."
                  : `${rows.length} ${
                      rows.length === 1 ? "region" : "regions"
                    } published on the site.`}
              </CardDescription>
            </div>

            {rows.length > 0 && (
              <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                {rows.length} total
              </span>
            )}
          </div>
        </CardHeader>

        <CardContent className="p-0">
          {/* Single subtle border around the actual table */}
          <div className="overflow-hidden rounded-lg border border-border/60">
            <Table>
              {/* Table Header */}
              <TableHeader>
                <TableRow className="border-border/60 bg-muted/30 hover:bg-muted/30">
                  <TableHead className="h-12 px-5 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Region
                  </TableHead>

                  <TableHead className="h-12 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Location
                  </TableHead>

                  <TableHead className="h-12 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Highest point
                  </TableHead>

                  <TableHead className="h-12 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Trek duration
                  </TableHead>

                  <TableHead className="h-12 px-5 text-right text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>

              {/* Table Body */}
              <TableBody>
                {rows.length === 0 ? (
                  <TableRow className="border-0">
                    <TableCell colSpan={5} className="h-52 text-center">
                      <div className="mx-auto flex max-w-sm flex-col items-center">
                        <p className="font-medium text-foreground">
                          No regions yet
                        </p>

                        <p className="mt-1 text-sm text-muted-foreground">
                          Add your first trekking region to get started.
                        </p>

                        <Button
                          nativeButton={false}
                          variant="outline"
                          size="sm"
                          className="mt-4 rounded-md shadow-none"
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
                    <TableRow
                      key={row.id}
                      className="border-border/50 transition-colors last:border-0 hover:bg-muted/20"
                    >
                      {/* Region */}
                      <TableCell className="px-5 py-4">
                        <Link
                          href={regionEditPath(row.slug)}
                          className="group block"
                        >
                          <div className="font-medium text-foreground transition-colors group-hover:text-chart-2">
                            {row.title}
                          </div>

                          <div className="mt-1 text-xs text-muted-foreground">
                            /region/{row.slug}
                          </div>
                        </Link>
                      </TableCell>

                      {/* Location */}
                      <TableCell className="py-4">
                        <span className="text-sm text-muted-foreground">
                          {row.location || "—"}
                        </span>
                      </TableCell>

                      {/* Highest Point */}
                      <TableCell className="py-4">
                        {row.highestPoint ? (
                          <span className="inline-flex rounded-md bg-muted px-2.5 py-1 text-xs font-medium text-foreground">
                            {row.highestPoint}
                          </span>
                        ) : (
                          <span className="text-sm text-muted-foreground">
                            —
                          </span>
                        )}
                      </TableCell>

                      {/* Trek Duration */}
                      <TableCell className="py-4">
                        <span className="text-sm text-muted-foreground">
                          {row.typicalDuration || "—"}
                        </span>
                      </TableCell>

                      {/* Actions */}
                      <TableCell className="px-5 py-4">
                        <div className="flex justify-end">
                          <RegionRowActions
                            id={row.id}
                            slug={row.slug}
                            title={row.title}
                            publicHref={row.publicHref}
                          />
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}