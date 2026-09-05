import SectionHeader from "@/components/shared/SectionHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const groups = [
  {
    title: "Before you book",
    items: [
      {
        q: "How fit do I need to be for the Annapurna Base Camp trek?",
        open: true,
        a: "You need to be able to walk 4 to 7 hours on a hilly path, six days running. If you can walk four hours at home on a Saturday and get up on Sunday without needing a rest day, you are fit enough. Stairs matter more than distance on this route.",
      },
      {
        q: "Can I do this trek if I have never been to altitude?",
        a: "Yes, and most of the people who walk it with us have not. You only sleep above 3,000 m on two nights, and the highest of those is 4,130 m. Most people get a headache at Machhapuchhre Base Camp and it clears with water, rest and walking slowly.",
      },
      {
        q: "What is the difference between this and the Ghorepani Poon Hill trek?",
        a: "Poon Hill is 4 days, tops out at 3,210 m and is a viewpoint trek. This one is 7 days, tops out at 4,130 m and takes you inside the mountains rather than looking at them from a hill.",
      },
      {
        q: "Can I do it in 5 days instead of 7?",
        a: "Yes, and we sell it. It is harder rather than easier, because the same climbing gets packed into fewer days. We grade the 5 day version 5 of 7 rather than 4.",
      },
      {
        q: "Do I need a permit, and do you arrange it?",
        a: "You need an Annapurna Conservation Area Permit. It is included in the price and we arrange it. Bring your passport and two passport photographs.",
      },
    ],
  },
  {
    title: "Travelling as a woman",
    items: [
      {
        q: "Can I have a female guide?",
        open: true,
        a: "Yes, and it is the default rather than a request. Every guide we send on this trek is a licensed woman from this region.",
      },
      {
        q: "Is there a women-only departure on my dates?",
        a: "Three of the five fixed departures above are women only, and they cost the same as the mixed ones. If none of them fits your dates, tell us and we will run one privately.",
      },
      {
        q: "Will I have my own room?",
        a: "On any night the lodge has space, yes, at no extra charge. That is most nights outside October. You are never put in a room with a stranger without being asked first.",
      },
    ],
  },
  {
    title: "Money",
    items: [
      {
        q: "What is not included in the USD 475?",
        open: true,
        a: "Travel insurance, hot showers, charging, wifi, drinks other than the one hot drink with each meal, tips, your Nepal visa, and anything caused by weather or illness. Budget about USD 575 to 640 all in.",
      },
      {
        q: "How much cash should I bring on the trail?",
        a: "NPR 12,000 to 18,000 for the week. There is no ATM after Pokhara, so draw it in Lakeside before you leave.",
      },
      {
        q: "How do I pay from abroad, and is it safe?",
        a: "A 20 per cent deposit by bank transfer with no fee from us, or by card through Stripe which adds 4 per cent. You pay the balance in our office in Pokhara. We never ask for the full amount before you arrive.",
      },
    ],
  },
  {
    title: "On the trail",
    items: [
      {
        q: "What happens if I get altitude sickness?",
        open: true,
        a: "You go down, and going down 500 m fixes almost everything. If saturation drops below 85%, or symptoms do not clear overnight, the decision to descend is your guide's and it is not negotiable.",
      },
      {
        q: "What if the weather closes in and we cannot get to base camp?",
        a: "Your guide will make the call, usually at Deurali or Machhapuchhre Base Camp. If we cannot get you to base camp safely we do not try. Nobody is charged extra for a day the mountain took away.",
      },
    ],
  },
];

const TripQuestions = () => (
  <section
    id="questions"
    className="scroll-mt-32 border-t border-border py-10 sm:py-12"
  >
    <SectionHeader title="Questions about this trek" />

    {groups.map((group) => (
      <div key={group.title} className="mt-7 first:mt-6">
        <p className="mb-2.5 text-[11px] font-semibold tracking-[0.09em] text-muted-foreground uppercase">
          {group.title}
        </p>
        <div className="rounded-md border border-border bg-card px-4 sm:px-5">
          <Accordion
            multiple
            defaultValue={group.items.filter((item) => item.open).map((item) => item.q)}
          >
            {group.items.map((item) => (
              <AccordionItem key={item.q} value={item.q}>
                <AccordionTrigger className="py-4 text-left text-[15px] font-bold text-foreground sm:text-base">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="max-w-3xl text-[15px] leading-relaxed text-muted-foreground">
                    {item.a}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    ))}
  </section>
);

export default TripQuestions;
