import type { Metadata } from "next";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
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
import EnquiryStatusBadge from "@/features/dashboard/components/EnquiryStatusBadge";
import {
  quickActions,
  recentEnquiries,
  stats,
} from "@/features/dashboard/constant/overview-data";

export const metadata: Metadata = {
  title: "Dashboard",
  robots: { index: false, follow: false },
};

export default function OverviewPage() {
  return (
    <div className="flex flex-1 flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Overview</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          A quick look at enquiries, trips, and reviews.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label}>
            <CardContent className="flex items-start justify-between gap-3">
              <div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <p className="mt-1 text-2xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {stat.helper}
                </p>
              </div>

              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                <stat.icon className="size-4" />
              </span>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1fr_18rem]">
        <Card>
          <CardHeader>
            <CardTitle>Recent Trip Enquiries</CardTitle>
            <CardDescription>
              The latest people who asked about a trek.
            </CardDescription>
            <CardAction>
              <Button
                nativeButton={false}
                variant="outline"
                size="sm"
                className="rounded-md"
                render={<Link href="/dashboard/bookings/enquiries" />}
              >
                View all
              </Button>
            </CardAction>
          </CardHeader>

          <CardContent className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Trek</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead className="text-right">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recentEnquiries.map((enquiry) => (
                  <TableRow key={enquiry.name}>
                    <TableCell className="font-medium text-foreground">
                      {enquiry.name}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {enquiry.trek}
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {enquiry.date}
                    </TableCell>
                    <TableCell className="text-right">
                      <EnquiryStatusBadge status={enquiry.status} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            {quickActions.map((action) => (
              <Button
                key={action.label}
                nativeButton={false}
                variant="outline"
                className="justify-start rounded-md"
                render={<Link href={action.href} />}
              >
                <action.icon className="size-4" />
                {action.label}
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
