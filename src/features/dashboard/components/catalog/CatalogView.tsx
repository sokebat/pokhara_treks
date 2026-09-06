import { TbExternalLink } from "react-icons/tb";
import Link from "next/link";

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
import type {
  CatalogDetailPage,
  CatalogListPage,
  CatalogPage,
} from "@/features/dashboard/lib/catalog";

type CatalogViewProps = {
  catalog: CatalogPage;
};

function formatPrice(price?: number) {
  if (price == null) return "—";
  if (price <= 0) return "On request";
  return `USD ${price}`;
}

const ViewLink = ({ href, label }: { href: string; label: string }) => (
  <Button
    nativeButton={false}
    variant="outline"
    size="sm"
    className="rounded-md"
    render={<Link href={href} target="_blank" rel="noopener noreferrer" />}
  >
    {label}
    <TbExternalLink className="size-4" />
  </Button>
);

const CatalogDetailView = ({ catalog }: { catalog: CatalogDetailPage }) => (
  <div className="flex flex-1 flex-col gap-6">
    <div>
      <h1 className="text-xl font-bold text-foreground sm:text-2xl">
        {catalog.title}
      </h1>
      <p className="mt-1 max-w-2xl text-sm text-muted-foreground">
        {catalog.description}
      </p>
    </div>

    <Card>
      <CardHeader>
        <CardTitle>{catalog.cardTitle ?? "Trip details"}</CardTitle>
        <CardDescription>What is published on the website.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {catalog.fields.map((field) => (
            <div key={field.label}>
              <dt className="text-[0.65rem] font-semibold tracking-[0.14em] text-muted-foreground uppercase">
                {field.label}
              </dt>
              <dd className="mt-1 text-sm font-medium text-foreground">
                {field.value}
              </dd>
            </div>
          ))}
        </dl>
        <div>
          <ViewLink href={catalog.href} label="View on website" />
        </div>
      </CardContent>
    </Card>
  </div>
);

const CatalogListView = ({ catalog }: { catalog: CatalogListPage }) => {
  const showGroup = catalog.rows.some(
    (row) => row.group && row.group !== catalog.title,
  );
  const showLocation = catalog.rows.some((row) => row.location);
  const showMeta = catalog.rows.some((row) => row.meta);
  const showPrice = catalog.rows.some((row) => row.price != null);
  const showDate = catalog.rows.some((row) => row.date);
  const columnCount =
    1 +
    Number(showGroup) +
    Number(showLocation) +
    Number(showMeta) +
    Number(showDate) +
    Number(showPrice);

  return (
    <div className="flex flex-1 flex-col gap-6">
      <div>
        <h1 className="text-xl font-bold text-foreground sm:text-2xl">
          {catalog.title}
        </h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {catalog.description}
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>{catalog.title}</CardTitle>
          <CardDescription>
            {catalog.rows.length === 0
              ? "Nothing in this section yet."
              : `${catalog.rows.length} published on the site.`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                {showGroup && (
                  <TableHead>{catalog.groupLabel ?? "Group"}</TableHead>
                )}
                {showLocation && <TableHead>Location</TableHead>}
                {showMeta && (
                  <TableHead>{catalog.metaLabel ?? "Details"}</TableHead>
                )}
                {showDate && <TableHead>Date</TableHead>}
                {showPrice && <TableHead>Price</TableHead>}
              </TableRow>
            </TableHeader>
            <TableBody>
              {catalog.rows.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={columnCount}
                    className="py-8 text-center text-muted-foreground"
                  >
                    Nothing in this section yet.
                  </TableCell>
                </TableRow>
              ) : (
                catalog.rows.map((row) => (
                  <TableRow key={`${row.href}-${row.title}`}>
                    <TableCell className="max-w-md font-medium whitespace-normal text-foreground">
                      <Link
                        href={row.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-start gap-1.5 hover:text-chart-2"
                      >
                        <span>{row.title}</span>
                        <TbExternalLink className="mt-0.5 size-3.5 shrink-0 text-muted-foreground" />
                      </Link>
                    </TableCell>
                    {showGroup && (
                      <TableCell className="text-muted-foreground">
                        {row.group ?? "—"}
                      </TableCell>
                    )}
                    {showLocation && (
                      <TableCell className="text-muted-foreground">
                        {row.location ?? "—"}
                      </TableCell>
                    )}
                    {showMeta && (
                      <TableCell className="text-muted-foreground">
                        {row.meta ?? "—"}
                      </TableCell>
                    )}
                    {showDate && (
                      <TableCell className="text-muted-foreground">
                        {row.date ?? "—"}
                      </TableCell>
                    )}
                    {showPrice && (
                      <TableCell className="text-muted-foreground">
                        {formatPrice(row.price)}
                      </TableCell>
                    )}
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

const CatalogView = ({ catalog }: CatalogViewProps) =>
  catalog.kind === "detail" ? (
    <CatalogDetailView catalog={catalog} />
  ) : (
    <CatalogListView catalog={catalog} />
  );

export default CatalogView;
