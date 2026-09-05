import SectionHeader from "@/components/shared/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";

const TripTrail = () => (
  <section id="detail" className="scroll-mt-32 border-t-2 border-border py-10 sm:py-12">
    <SectionHeader title="What the walking is actually like" />

    <div className="mt-6 max-w-3xl">
      <h3 className="text-lg font-semibold text-foreground">The trail underfoot</h3>
      <p className="mt-3.5 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
        Almost none of this route is a path in the flat sense. It is stone:
        laid steps, worn river rock and, between Chhomrong and Sinuwa,
        roughly{" "}
        <strong className="font-semibold text-foreground">3,300 cut stone stairs</strong>{" "}
        that go down for forty minutes and then straight back up the other
        side of the valley. Trekking poles matter more here than boots do.
      </p>
      <p className="mt-3.5 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
        Above Bamboo the stone gives way to a forest floor of roots and mud
        that stays wet even in October. The last two hours into the sanctuary
        are moraine, loose and grey, and that is the only stretch where you
        will want to watch your feet rather than the view.
      </p>

      <h3 className="mt-8 text-lg font-semibold text-foreground">A day, start to finish</h3>
      <ul className="mt-3.5 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-muted-foreground marker:text-primary sm:text-base">
        <li>
          <strong className="font-semibold text-foreground">6:00</strong> Tea
          in the room. The kitchen is already lit.
        </li>
        <li>
          <strong className="font-semibold text-foreground">7:00</strong>{" "}
          Breakfast, then walking by half past.
        </li>
        <li>
          <strong className="font-semibold text-foreground">11:30</strong> Lunch
          at a teahouse on the route, cooked to order.
        </li>
        <li>
          <strong className="font-semibold text-foreground">15:00</strong> Into
          the night stop with the afternoon still open.
        </li>
        <li>
          <strong className="font-semibold text-foreground">19:00</strong> Dinner
          together at one table, usually round the stove.
        </li>
      </ul>

      <Card className="mt-6 gap-0 border-l-[3px] border-l-primary py-0 shadow-none">
        <CardContent className="bg-secondary p-4 sm:p-4.5">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
            <strong className="font-semibold text-foreground">
              Charging, water and signal.
            </strong>{" "}
            Every teahouse to Deurali sells power by the hour, about NPR 200 to
            300. Boiled or filtered water is NPR 100 to 200 a litre going up.
            Ncell holds to Chhomrong and drops out after it.
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
            There is no ATM past Pokhara. Bring cash for the whole week.
          </p>
        </CardContent>
      </Card>

      <blockquote className="mt-6 border-l-[3px] border-primary pl-5">
        <p className="text-base leading-relaxed text-foreground sm:text-lg">
          The steps below Chhomrong beat me on the way up and beat me again
          coming down. Everything else on the route is easier than that one
          hill.
        </p>
        <cite className="mt-2.5 block text-sm not-italic text-muted-foreground">
          Sample pull quote. Replace or leave out.
        </cite>
      </blockquote>

      <h3 className="mt-8 text-lg font-semibold text-foreground">The nights</h3>
      <p className="mt-3.5 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
        Teahouse rooms are plywood, twin share, with a foam mattress and a
        blanket that is never quite enough above 3,000 m. Take a liner and a
        warm layer to sleep in. At Machhapuchhre and Annapurna Base Camp the
        water in your bottle can freeze overnight in December.
      </p>
    </div>
  </section>
);

export default TripTrail;
