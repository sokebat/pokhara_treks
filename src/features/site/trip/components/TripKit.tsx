import SectionHeader from "@/components/shared/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { kitItems } from "@/features/site/trip/constant/kit";

const TripKit = () => (
  <section id="kit" className="scroll-mt-32 border-t-2 border-border py-10 sm:py-12">
    <SectionHeader
      title="What to bring"
      description="10 kg maximum for your porter to carry, plus what you carry yourself. Everything else stays in our office in Lakeside, free."
    />

    <Card className="mt-6 gap-0 py-0 shadow-none">
      <CardContent className="bg-secondary p-5">
        <b className="text-sm font-bold text-primary">We provide, included in the price</b>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Sleeping bag rated to −10°C, down jacket, duffel bag, trekking poles,
          water purification tablets. All returned to us in Pokhara.
        </p>
      </CardContent>
    </Card>

    <div className="mt-5 rounded-md border-2 border-border bg-card px-4 sm:px-5">
      <Accordion multiple defaultValue={["footwear"]}>
        {kitItems.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger className="py-4 font-bold text-foreground">
              {item.title}
            </AccordionTrigger>
            <AccordionContent>
              <p className="max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>

    <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted-foreground">
      Everything else can be bought or hired in Lakeside, 10 minutes from our
      office.{" "}
      <strong className="text-foreground">Do not buy new boots for this trek.</strong>{" "}
      Bring boots you have already walked 50 km in.
    </p>
  </section>
);

export default TripKit;
