import Link from "next/link";
import {
  TbAntenna,
  TbClipboardList,
  TbFirstAidKit,
  TbHeartbeat,
  TbHelicopter,
  TbShield,
  TbStairsDown,
} from "react-icons/tb";

import SectionHeader from "@/components/shared/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
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

const payCards = [
  {
    title: "To hold a place",
    body: "A 20 per cent deposit, USD 95 on this trek. Pay it by bank transfer to our company account with no fee, or by card through Stripe at 4 per cent. The balance is paid in Pokhara before you walk. We never ask for the full amount before you arrive.",
  },
  {
    title: "To change your date",
    body: "Free, up to 30 days before departure. Move to any date within 24 months, on this trek or any other trek we run. Inside 30 days, the deposit moves with you once.",
  },
  {
    title: "Insurance you must have",
    body: "Helicopter evacuation to 6,000 m and medical treatment abroad. Send us the policy number 7 days before you leave. A helicopter off this route costs USD 3,000 to 5,000.",
  },
];

const cancelRows = [
  ["More than 30 days before", "100% of the deposit, or keep it as credit for 24 months"],
  ["15 to 30 days", "50% of the deposit"],
  ["Under 15 days", "The deposit is retained. You have not paid us anything else"],
];

const safety = [
  { icon: TbShield, text: "Your guide is first aid trained and re-certified every two years" },
  {
    icon: TbFirstAidKit,
    text: "She carries a first aid kit, a pulse oximeter and two bottles of emergency oxygen from Chhomrong up",
  },
  {
    icon: TbHeartbeat,
    text: "From 2,900 m she checks your oxygen saturation and pulse every evening and writes it down",
  },
  {
    icon: TbStairsDown,
    text: "If your saturation drops below 85%, or symptoms do not clear overnight, you go down. That decision is your guide's and it is not negotiable",
  },
  {
    icon: TbHelicopter,
    text: "Helicopter evacuation is available from Machhapuchhre Base Camp and Deurali in daylight and clear weather",
  },
  {
    icon: TbClipboardList,
    text: "Our office holds your passport details, insurance policy number and next of kin from the day you book",
  },
  {
    icon: TbAntenna,
    text: "There is mobile signal at Chhomrong, Deurali and Machhapuchhre Base Camp on Ncell. Your guide carries a local SIM",
  },
];

const kitItems = [
  {
    id: "footwear",
    title: "Footwear",
    body: "Broken-in boots with ankle support, camp shoes or sandals for the evening, three or four pairs of wool or synthetic socks, and a pair of gaiters if you are walking in December to February.",
  },
  {
    id: "clothing",
    title: "Clothing layers",
    body: "Two base layers, one fleece or mid layer, a waterproof shell, two pairs of trekking trousers, and what you sleep in. The down jacket is ours, so leave yours at home.",
  },
  {
    id: "head-hands",
    title: "Head and hands",
    body: "Sun hat, warm hat, buff, sunglasses rated for altitude, liner gloves and a warmer pair over the top. Hands and ears suffer at base camp more than anything else.",
  },
  {
    id: "toiletries",
    title: "Toiletries and medical",
    body: "Toilet paper, hand sanitiser, high factor sun cream, lip balm with sun protection, personal medication, blister plasters, and any period supplies you need for the week.",
  },
  {
    id: "documents",
    title: "Documents and money",
    body: "Passport, two passport photographs, insurance policy number, and NPR 12,000 to 18,000 in cash. There is no ATM after Pokhara.",
  },
];

const TripBookingSafetyKit = () => (
  <>
    <section id="booking" className="scroll-mt-32 border-t-2 border-border py-10 sm:py-12">
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
                  <TableHead className="px-4 py-3 text-muted-foreground">
                    You get back
                  </TableHead>
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

    <section id="safety" className="scroll-mt-32 border-t-2 border-border py-10 sm:py-12">
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
          <a
            href={`tel:${siteInfo.phone}`}
            className="text-lg font-bold text-primary"
          >
            {siteInfo.phoneDisplay}
          </a>
          <span className="text-sm text-muted-foreground">
            Answered 24 hours by Pushpa or Hira.
          </span>
        </CardContent>
      </Card>
    </section>

    <section id="kit" className="scroll-mt-32 border-t-2 border-border py-10 sm:py-12">
      <SectionHeader
        title="What to bring"
        description="10 kg maximum for your porter to carry, plus what you carry yourself. Everything else stays in our office in Lakeside, free."
      />

      <Card className="mt-6 gap-0 py-0 shadow-none">
        <CardContent className="bg-secondary p-5">
          <b className="text-sm font-bold text-primary">
            We provide, included in the price
          </b>
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
        <strong className="text-foreground">
          Do not buy new boots for this trek.
        </strong>{" "}
        Bring boots you have already walked 50 km in.
      </p>
    </section>
  </>
);

export default TripBookingSafetyKit;
