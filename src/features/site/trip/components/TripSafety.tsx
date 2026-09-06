import SectionHeader from "@/components/shared/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { siteInfo } from "@/constant/site";
import { safety } from "@/features/site/trip/constant/safety";

const TripSafety = () => (
  <section id="safety" className="scroll-mt-32 border-t-2 border-border py-8 sm:py-10">
    <SectionHeader title="If something goes wrong up there" />
    <ul className="mt-6 grid gap-3 sm:grid-cols-2 sm:gap-x-8">
      {safety.map((item) => (
        <li
          key={item.text}
          className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
        >
          <item.icon className="mt-0.5 size-4 shrink-0 text-primary" />
          {item.text}
        </li>
      ))}
    </ul>
    <Card className="mt-6 gap-0 py-0 shadow-none">
      <CardContent className="flex flex-wrap items-center gap-3 bg-secondary px-4 py-4">
        <b className="text-sm font-bold">In an emergency, from anywhere:</b>
        <a href={`tel:${siteInfo.phone}`} className="text-lg font-bold text-primary">
          {siteInfo.phoneDisplay}
        </a>
        <span className="text-sm text-muted-foreground">
          Answered 24 hours by Pushpa or Hira.
        </span>
      </CardContent>
    </Card>
  </section>
);

export default TripSafety;
