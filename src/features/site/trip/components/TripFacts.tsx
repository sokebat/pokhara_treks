import Link from "next/link";
import {
  TbClock,
  TbMapPin,
  TbMountain,
  TbRoute,
  TbSun,
  TbUsers,
} from "react-icons/tb";

import Container from "@/components/shared/Container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const facts = [
  { icon: TbClock, label: "Duration", value: "7 days, 6 nights" },
  { icon: TbMountain, label: "Max altitude", value: "4,130 m" },
  {
    icon: TbRoute,
    label: "Difficulty",
    value: "Moderate, 4 of 7",
    href: "#difficulty",
    hrefLabel: "What that means",
  },
  { icon: TbUsers, label: "Group size", value: "2 to 8, private from 1" },
  { icon: TbMapPin, label: "Starts and ends", value: "Lakeside, Pokhara" },
  { icon: TbSun, label: "Best season", value: "Mar to May, Sep to Nov" },
];

const TripFacts = () => (
  <section className="pt-5 sm:pt-6">
    <Container>
      <Card className="gap-0 border-border bg-secondary py-0 shadow-none ring-0">
        <CardHeader className="p-5 pb-0 sm:p-6 sm:pb-0">
          <CardTitle className="text-base font-bold sm:text-lg">
            Trip information
          </CardTitle>
        </CardHeader>
        <CardContent className="p-5 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
            {facts.map((fact) => (
              <div key={fact.label} className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <fact.icon className="size-4" />
                </span>
                <div className="min-w-0">
                  <span className="block text-sm text-muted-foreground">
                    {fact.label}
                  </span>
                  <span className="mt-0.5 block text-[15px] font-semibold text-foreground">
                    {fact.value}
                  </span>
                  {fact.href && (
                    <Link
                      href={fact.href}
                      className="mt-0.5 block text-[13px] font-normal text-primary hover:underline"
                    >
                      {fact.hrefLabel}
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </Container>
  </section>
);

export default TripFacts;
