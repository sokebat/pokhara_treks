import { TbCheck } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa6";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import ListingPrice from "@/features/site/listing/components/ListingPrice";
import { siteInfo } from "@/constant/site";

const reassurances = [
  "20% deposit to hold your place. Balance in Pokhara.",
  "Free date change up to 30 days before you walk.",
  "No card fee on bank transfer.",
];

const TripBookingCard = () => (
  <aside aria-label="Book this trek" className="lg:sticky lg:top-32">
    <Card className="gap-0 py-0 shadow-none">
      <CardContent className="p-5">
        <div className="flex flex-wrap items-end gap-2">
          <ListingPrice price={475} />
          <span className="pb-0.5 text-sm text-muted-foreground">per person</span>
        </div>
        <p className="mt-2 text-[13px] text-muted-foreground">
          In a group of 3 to 5 · 7 days, 6 nights · Group of 2 to 8
        </p>
        <Separator className="my-4" />

        <div>
          <Label htmlFor="travellers" className="text-[13px] text-muted-foreground">
            Travellers
          </Label>
          <Select defaultValue="3-5">
            <SelectTrigger
              id="travellers"
              className="mt-1.5 h-11 w-full rounded-md"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1, private — USD 595</SelectItem>
              <SelectItem value="2">2 — USD 515</SelectItem>
              <SelectItem value="3-5">3 to 5 — USD 475</SelectItem>
              <SelectItem value="6-8">6 to 8 — USD 435</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button
          nativeButton={false}
          render={<a href="#departures" />}
          variant="default"
          size="xl"
          className="mt-2.5 w-full"
        >
          Check Dates and Prices
        </Button>
        <Button
          nativeButton={false}
          render={
            <a
              href={`https://wa.me/${siteInfo.phone.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
            />
          }
          variant="whatsapp"
          size="xl"
          className="mt-2.5 w-full"
        >
          <FaWhatsapp className="size-4" />
          WhatsApp Pushpa
        </Button>

        <Separator className="mt-4 mb-3.5" />
        <ul className="flex flex-col gap-2.5">
          {reassurances.map((item) => (
            <li
              key={item}
              className="flex gap-2.5 text-[13.5px] leading-snug text-muted-foreground"
            >
              <TbCheck className="mt-0.5 size-4 shrink-0 text-primary" />
              {item}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </aside>
);

export default TripBookingCard;
