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

export default function RegionsTable({ rows, savedTitle }: RegionsTableProps) {
  return (
    <div className="flex flex-1 flex-col gap-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-xl font-bold text-foreground sm:text-2xl">
            Regions
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Trekking region pages published on /region.
          </p>
        </div>
        <Button
          nativeButton={false}
          className="rounded-md"
          render={<Link href={regionNewPath} />}
        >
          <TbPlus className="size-4" />
          Add region
        </Button>
      </div>

      {savedTitle ? (
        <p className="rounded-md border border-border bg-card px-3 py-2 text-sm text-foreground">
          Saved “{savedTitle}”.
        </p>
      ) : null}

      <Card>
        <CardHeader>
          <CardTitle>All regions</CardTitle>
          <CardDescription>
            {rows.length === 0
              ? "Nothing in this section yet."
              : `${rows.length} published on the site.`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Highest point</TableHead>
                <TableHead>Typical trek</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={5}
                    className="py-8 text-center text-muted-foreground"
                  >
                    No regions yet.{" "}
                    <Link
                      href={regionNewPath}
                      className="font-medium text-foreground underline-offset-4 hover:underline"
                    >
                      Add the first one
                    </Link>
                    .
                  </TableCell>
                </TableRow>
              ) : (
                rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell className="max-w-md font-medium whitespace-normal text-foreground">
                      <Link
                        href={regionEditPath(row.slug)}
                        className="hover:text-chart-2"
                      >
                        {row.title}
                      </Link>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {row.location || "—"}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {row.highestPoint || "—"}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {row.typicalDuration || "—"}
                    </TableCell>
                    <TableCell className="text-right">
                      <RegionRowActions
                        id={row.id}
                        slug={row.slug}
                        title={row.title}
                        publicHref={row.publicHref}
                      />
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
