import { TbCheck } from "react-icons/tb";

import SectionHeader from "@/components/shared/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";

const included = [
  "Licensed female guide for 7 days: her wage, insurance, food and lodging",
  "Porter shared between two trekkers, carrying up to 10 kg of yours",
  "Annapurna Conservation Area Permit, arranged by us",
  "Jeep, Pokhara to Jhinu Danda and Ghandruk back to Pokhara",
  "6 nights teahouse accommodation, twin share, own room where the lodge has space at no extra cost",
  "6 breakfasts, 6 lunches, 6 dinners, one hot drink with each",
  "Jhinu Danda hot springs entry",
  "Sleeping bag and down jacket hire, returned in Pokhara",
  "First aid kit, pulse oximeter and two bottles of emergency oxygen carried by the guide",
  "Luggage storage at our Lakeside office while you walk",
  "All government taxes and VAT",
];

const notIncluded = [
  {
    label: "Travel insurance with helicopter evacuation cover. Required.",
    cost: "USD 60 to 120 for two weeks",
    required: true,
  },
  {
    label: "Hot showers on the trail",
    cost: "NPR 150 to 400 each, about USD 1 to 3",
  },
  {
    label: "Charging your phone above Chhomrong",
    cost: "NPR 100 to 300 an hour",
  },
  {
    label: "Wifi on the trail",
    cost: "NPR 500 to 800 a day, and it is slow",
  },
  {
    label: "Drinks other than the included hot drink: beer, soft drinks, bottled water",
    cost: "NPR 100 to 600 a day",
  },
  {
    label: "Tips for your guide and porter",
    cost: "Customary, USD 70 to 100 between them for the week. Never expected",
  },
  {
    label: "Nepal visa on arrival",
    cost: "USD 30 for 15 days, USD 50 for 30",
  },
  {
    label: "Anything caused by weather, illness or a flight delay",
    cost: "An extra teahouse night is USD 15 to 25",
  },
];

const TripIncluded = () => (
  <section
    id="included"
    className="scroll-mt-32 border-t-2 border-border py-8 sm:py-10"
  >
    <SectionHeader
      title="What the USD 475 covers"
      description="And what it does not, with what each thing actually costs."
    />

    <div className="mt-8 grid gap-8 lg:grid-cols-2">
      <div>
        <h3 className="border-b-2 border-border pb-3 text-base font-semibold">
          Included
        </h3>
        <ul>
          {included.map((item) => (
            <li
              key={item}
              className="flex gap-3 border-b-2 border-border py-3 text-[15px] leading-relaxed text-muted-foreground last:border-b-0"
            >
              <TbCheck className="mt-0.5 size-4 shrink-0 text-primary" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h3 className="border-b-2 border-border pb-3 text-base font-semibold">
          Not included, and what it costs
        </h3>
        <ul>
          {notIncluded.map((item) => (
            <li
              key={item.label}
              className="flex gap-3 border-b-2 border-border py-3 text-[15px] leading-relaxed text-muted-foreground last:border-b-0"
            >
              <span aria-hidden className="text-border">
                —
              </span>
              <span>
                <span
                  className={
                    item.required ? "font-semibold text-foreground" : undefined
                  }
                >
                  {item.label}
                </span>
                <span className="mt-1 block text-[13px] font-semibold text-chart-2">
                  {item.cost}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <Card className="mt-6 gap-0 py-0 shadow-none">
      <CardContent className="bg-secondary px-4 py-4 text-sm leading-relaxed text-foreground">
        Add it up and a careful budget for the week is about{" "}
        <strong>USD 575 to 640 all in</strong>, from the moment the jeep leaves
        Lakeside to the moment it drops you back.
      </CardContent>
    </Card>
  </section>
);

export default TripIncluded;
