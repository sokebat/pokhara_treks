import Link from "next/link";

import Avatar from "@/components/shared/Avatar";
import SectionHeader from "@/components/shared/SectionHeader";
import StarRating from "@/components/shared/StarRating";
import { Card, CardContent } from "@/components/ui/card";

const bars = [
  { score: 5, width: "91%", count: 42 },
  { score: 4, width: "7%", count: 3 },
  { score: 3, width: "2%", count: 1 },
  { score: 2, width: "0%", count: 0 },
  { score: 1, width: "0%", count: 0 },
];

const cats = [
  ["Guide", "5.0"],
  ["Food", "4.7"],
  ["Accommodation", "4.5"],
  ["Value", "4.9"],
];

const reviews = [
  {
    stars: 5,
    who: "Marion K.",
    country: "France",
    meta: "October 2025 · via Google",
    trek: "Annapurna Base Camp Trek, 7 Days · Guide: Hira",
    quote:
      "I was the only person on my departure and they ran it anyway. Hira noticed I was struggling on day two before I said anything and just quietly slowed down. I never once felt like I was holding anyone up.",
    reply:
      "Thank you Marion. Hira said you did the Chhomrong steps faster than she expected. Come back for Mardi Himal.",
  },
  {
    stars: 5,
    who: "Sofia R.",
    country: "Spain",
    meta: "November 2025 · via TripAdvisor",
    trek: "Annapurna Base Camp Trek, 7 Days · Guide: Pushpa",
    quote:
      "I booked the women-only departure and it cost the same as the mixed one, which I did not expect. My own room every night except base camp. Pushpa answered my questions on WhatsApp for six weeks before I flew.",
  },
  {
    stars: 5,
    who: "Jen M.",
    country: "Australia",
    meta: "April 2026 · via Google",
    trek: "Annapurna Base Camp Trek, 7 Days · Guide: Pushpa",
    quote:
      "Starting from Pokhara saved us four days against the quotes we got from Kathmandu companies. The steps below Chhomrong are exactly as bad as this website says, which is the reason I trusted the rest of it.",
  },
  {
    stars: 4,
    who: "Ines B.",
    country: "Germany",
    meta: "March 2026 · via TripAdvisor",
    trek: "Annapurna Base Camp Trek, 7 Days · Guide: Hira",
    quote:
      "Base camp lodge was cold and full, which they had warned me about. Everything else was better than described. The hot spring on the way out is worth the whole walk down.",
  },
];

const TripReviews = () => (
  <section id="reviews" className="scroll-mt-32 border-t border-border py-10 sm:py-12">
    <SectionHeader title="What 46 people said about this trek" />

    <div className="mt-6 grid items-center gap-6 border-b border-border pb-6 sm:grid-cols-[auto_1fr_auto]">
      <div>
        <p className="text-5xl font-bold tracking-tight">4.9</p>
        <StarRating rating={5} className="mt-1" />
        <p className="mt-1 text-[13px] text-muted-foreground">
          46 reviews of this trek
        </p>
      </div>
      <div className="flex min-w-[11rem] flex-col gap-1.5">
        {bars.map((bar) => (
          <span
            key={bar.score}
            className="flex items-center gap-2.5 text-xs text-muted-foreground"
          >
            {bar.score}
            <span className="h-1.5 flex-1 overflow-hidden rounded-[1px] bg-border">
              <i
                className="block h-full bg-chart-2"
                style={{ width: bar.width }}
              />
            </span>
            {bar.count}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-x-6 gap-y-2">
        {cats.map(([label, value]) => (
          <span key={label} className="text-sm text-muted-foreground">
            {label}{" "}
            <b className="font-bold tabular-nums text-foreground">{value}</b>
          </span>
        ))}
      </div>
    </div>

    <div className="mt-6 grid gap-3.5 lg:grid-cols-2">
      {reviews.map((review, index) => (
        <Card key={review.who} className="shadow-none">
          <CardContent>
            <StarRating rating={review.stars} />
            <div className="mt-3 flex items-center gap-3">
              <Avatar name={review.who} index={index} />
              <div className="min-w-0">
                <p className="text-sm font-bold">
                  {review.who}{" "}
                  <span className="font-normal text-muted-foreground">
                    · {review.country}
                  </span>
                </p>
                <p className="text-[13px] text-muted-foreground">{review.meta}</p>
              </div>
            </div>
            <p className="mt-2 text-[13px] font-semibold text-primary">
              {review.trek}
            </p>
            <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {review.quote}
            </blockquote>
            {review.reply && (
              <div className="mt-3.5 rounded-md bg-secondary p-3.5 text-[13px] leading-relaxed text-muted-foreground">
                <b className="mb-1 block text-xs font-bold text-foreground">
                  Reply from Pushpa Sunar, owner
                </b>
                {review.reply}
              </div>
            )}
          </CardContent>
        </Card>
      ))}
    </div>

    <p className="mt-4 text-sm text-muted-foreground">
      <Link href="/trip" className="font-semibold text-primary hover:underline">
        Read all 46 reviews of this trek →
      </Link>
    </p>
  </section>
);

export default TripReviews;
