import Link from "next/link";

import SectionHeader from "@/components/shared/SectionHeader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { siteInfo } from "@/constant/site";
import { cancelRows, payCards } from "@/features/site/trip/constant/booking";

const TripBooking = () => (
  <section id="booking" className="scroll-mt-32 border-t-2 border-border py-8 sm:py-10">
    <SectionHeader
      title="How you book, pay and cancel"
      description="Twenty per cent holds the place. The rest is paid in Pokhara. Date changes are free up to 30 days out."
    />

    <div className="mt-6 grid gap-4 lg:grid-cols-3">
      {payCards.map((card) => (
        <Card key={card.title} className="shadow-none">
          <CardHeader>
            <CardTitle>{card.title}</CardTitle>
            <CardDescription className="leading-relaxed">{card.body}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>

    <div className="mt-8">
      <h3 className="text-base font-semibold">If you cancel</h3>
      <Card className="mt-3 max-w-3xl gap-0 py-0 shadow-none">
        <CardContent className="px-0">
          <Table>
            <TableHeader>
              <TableRow className="bg-secondary/60 hover:bg-secondary/60">
                <TableHead className="px-4 py-3 text-muted-foreground">When</TableHead>
                <TableHead className="px-4 py-3 text-muted-foreground">You get back</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cancelRows.map(([when, back]) => (
                <TableRow key={when}>
                  <TableCell className="whitespace-normal px-4 py-3">{when}</TableCell>
                  <TableCell className="whitespace-normal px-4 py-3 text-muted-foreground">
                    {back}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>

    <Card className="mt-7 shadow-none">
      <CardHeader>
        <CardTitle>Who you are actually paying</CardTitle>
        <CardDescription className="leading-relaxed">
          Pokhara Treks and Expeditions Pvt. Ltd.
          <br />
          {siteInfo.address}
          <br />
          PAN {siteInfo.panNo} · Company registration no. {siteInfo.companyRegNo} ·
          Department of Tourism licence no. {siteInfo.tourismLicenseNo}
          <br />
          {siteInfo.phoneDisplay}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm">
          <Link href="/terms" className="font-semibold text-primary hover:underline">
            Full booking terms
          </Link>
          {" · "}
          <Link href="/privacy" className="font-semibold text-primary hover:underline">
            Cancellation policy
          </Link>
        </p>
      </CardContent>
    </Card>
  </section>
);

export default TripBooking;
