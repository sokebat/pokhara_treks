import { FaWhatsapp } from "react-icons/fa6";

import SectionHeader from "@/components/shared/SectionHeader";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteInfo } from "@/constant/site";

const TripAsk = () => (
  <section id="ask" className="scroll-mt-32 border-t-2 border-border py-10 sm:py-12">
    <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
      <div>
        <SectionHeader
          title="Still deciding?"
          description="Tell us what is worrying you. Fitness, dates, the altitude, travelling alone, the price. Pushpa answers these herself, usually within two hours."
        />
        <div className="mt-5 flex flex-wrap gap-2.5">
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
          >
            <FaWhatsapp className="size-4" />
            WhatsApp Pushpa
          </Button>
          <Button
            nativeButton={false}
            render={<a href={`tel:${siteInfo.phone}`} />}
            variant="outline"
            size="xl"
          >
            Call {siteInfo.phoneDisplay}
          </Button>
        </div>
      </div>

      <Card className="shadow-none">
        <CardContent className="p-5 sm:p-6">
          <form>
            <div className="mb-3.5">
              <Label htmlFor="f-name" className="text-[13px] text-muted-foreground">
                Your name
              </Label>
              <Input id="f-name" className="mt-1.5 h-11 rounded-md" autoComplete="name" />
            </div>
            <div className="mb-3.5">
              <Label htmlFor="f-mail" className="text-[13px] text-muted-foreground">
                Email
              </Label>
              <Input
                id="f-mail"
                type="email"
                className="mt-1.5 h-11 rounded-md"
                autoComplete="email"
              />
            </div>
            <div className="mb-3.5">
              <Label htmlFor="f-date" className="text-[13px] text-muted-foreground">
                Your dates, or “not sure yet”
              </Label>
              <Input id="f-date" className="mt-1.5 h-11 rounded-md" />
            </div>
            <div className="mb-4">
              <Label htmlFor="f-msg" className="text-[13px] text-muted-foreground">
                What would you like to know?
              </Label>
              <Textarea id="f-msg" className="mt-1.5 min-h-24 rounded-md" />
            </div>
            <Button type="button" size="xl" className="w-full">
              Send it
            </Button>
            <p className="mt-4 border-t-2 border-border pt-4 text-sm leading-relaxed text-muted-foreground">
              Not ready to ask anything yet?{" "}
              <a href="#itinerary" className="font-semibold text-primary hover:underline">
                Send me the full itinerary and price list
              </a>{" "}
              as a PDF.
            </p>
            <p className="mt-3 text-xs text-muted-foreground">
              No deposit, no obligation, and we will not put you on a mailing list
              unless you tick the box.
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  </section>
);

export default TripAsk;
