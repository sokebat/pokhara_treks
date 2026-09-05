import Link from "next/link";

import SectionHeader from "@/components/shared/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";

const TripDifficulty = () => (
  <section id="difficulty" className="scroll-mt-32 border-t-2 border-border py-10 sm:py-12">
    <SectionHeader title="How hard is it, honestly" />

    <div className="mt-6 mb-6 flex flex-wrap items-center gap-4">
      <Card className="w-fit gap-0 py-0 shadow-none">
        <CardContent className="flex items-center gap-3.5 bg-secondary px-4 py-3">
          <span
            className="flex w-28 gap-0.5"
            role="img"
            aria-label="Difficulty 4 out of 7"
          >
            {[true, true, true, true, false, false, false].map((on, i) => (
              <i
                key={i}
                className={`h-1.5 flex-1 rounded-[1px] ${on ? "bg-primary" : "bg-border"}`}
              />
            ))}
          </span>
          <b className="text-[15px] font-bold">Moderate. 4 on our 7 point scale.</b>
        </CardContent>
      </Card>
      <Link href="/blogs" className="text-sm font-semibold text-primary hover:underline">
        Read our full guide to trek grades →
      </Link>
    </div>

    <div className="max-w-3xl space-y-4 text-[15px] leading-relaxed text-muted-foreground">
      <h3 className="text-[17px] font-semibold text-foreground">What that means in hours</h3>
      <p>
        4 to 7 hours of walking a day for six days, with one day of 8. Not
        flat. Nepali trails go up and down all day, so a “5 hour day”
        involves far more climbing than a 5 hour walk at home.
      </p>
      <h3 className="pt-2 text-[17px] font-semibold text-foreground">The hardest part</h3>
      <p>
        The 3,300 stone steps below Chhomrong on day one, then the same steps
        in reverse on day five. About two and a half hours of continuous
        climbing each time. Everyone finds it hard. Nobody has failed to
        finish it.
      </p>
      <h3 className="pt-2 text-[17px] font-semibold text-foreground">The altitude</h3>
      <p>
        You sleep above 3,000 m on two nights. That is low compared with
        Everest Base Camp, where you sleep above 4,000 m for six. Most people
        get a headache at Machhapuchhre Base Camp and it goes with water,
        rest and walking slowly.
      </p>
      <h3 className="pt-2 text-[17px] font-semibold text-foreground">
        Who should not book this
      </h3>
      <p>
        If you cannot walk four hours on a hilly path at home without needing
        a rest day afterwards, book Ghorepani Poon Hill first, 4 days, and
        come back for this next year.
      </p>
    </div>
  </section>
);

export default TripDifficulty;
