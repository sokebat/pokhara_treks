import {
  TbClock,
  TbHome,
  TbBath,
  TbMountain,
  TbSun,
  TbUser,
} from "react-icons/tb";

import SectionHeader from "@/components/shared/SectionHeader";

const highlights = [
  {
    icon: TbMountain,
    text: "Stand inside the Annapurna Sanctuary at 4,130 m, ringed by Annapurna I, Annapurna South, Hiunchuli and Machhapuchhre",
  },
  {
    icon: TbSun,
    text: "Sunrise on Machhapuchhre from base camp, about 5:50 am in October, fifteen minutes from your bed",
  },
  {
    icon: TbBath,
    text: "Soak in the hot springs at Jhinu Danda on the way out, included",
  },
  {
    icon: TbHome,
    text: "Sleep in Gurung villages, not tents. A bed and a hot meal every night",
  },
  {
    icon: TbClock,
    text: "4 to 7 hours of walking a day, no technical ground, no ropes, no experience needed",
  },
  {
    icon: TbUser,
    text: "Your guide is a licensed woman from this valley who has walked this route 40 times or more",
  },
];

const TripOverview = () => (
  <div>
    <section id="overview" className="scroll-mt-32 pb-10">
      <SectionHeader title="What this trek actually is" />
      <div className="mt-5 max-w-3xl space-y-4 text-[15px] leading-relaxed text-muted-foreground sm:text-base">
        <p className="text-base leading-relaxed text-foreground sm:text-lg">
          The Annapurna Sanctuary is a bowl. You walk up a river valley that
          narrows for three days until the walls close in on both sides, and
          then it opens into a flat glacial basin with ten mountains standing
          around it. That basin is Annapurna Base Camp, 4,130 m. There is no
          pass to cross and no summit to reach. You walk in, you sleep there,
          you walk out. This is the seven day version, run from our own office
          in Lakeside with a licensed female guide and a group of no more than
          eight.
        </p>
        <p>
          The route starts with a 3 hour jeep to Jhinu Danda. From there it is
          three days up through Chhomrong, Sinuwa, Deurali and Machhapuchhre
          Base Camp, then three days back down through Bamboo, Jhinu Danda and
          Ghandruk. You cross six suspension bridges. Breakfast is at first
          light, you are walking by seven, and most days are four to seven hours
          with a proper lunch stop at a teahouse on the way. Most afternoons you
          are in by two or three. There is no technical ground anywhere on this
          route. The difficulty is repetition and altitude, not skill.
        </p>
        <h3 className="pt-2 text-lg font-semibold text-foreground">
          The two things that make it hard
        </h3>
        <p>
          The first is the ground on day one and day five. Below Chhomrong you
          walk down about 3,300 stone steps and then straight back up the other
          side of the river, and on the way home you do the same in reverse.
          Everybody talks about those steps afterwards. It is not dangerous, it
          is relentless, and it lands on the first day on purpose so the rest of
          the week gets easier rather than harder.
        </p>
        <p>
          The second is the last night up. Base camp is 4,130 m, high enough
          that some people sleep badly and wake with a headache. That is why the
          day before it is kept short, and why we go up and come straight back
          down rather than lingering.
        </p>
        <h3 className="pt-2 text-lg font-semibold text-foreground">
          Why we start in Pokhara and not Kathmandu
        </h3>
        <p>
          Most companies selling this trek are based in Kathmandu, and their
          versions run 11 to 14 days because four of those days are travel.{" "}
          <strong className="font-semibold text-foreground">
            The real difference is the days.
          </strong>{" "}
          If you are already in Pokhara, or flying into Pokhara, you do not need
          them.
        </p>
      </div>
    </section>

    <section className="border-t-2 border-border pt-10 pb-4">
      <SectionHeader title="Why people book this one" />
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 sm:gap-x-8">
        {highlights.map((item) => (
          <li
            key={item.text}
            className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground"
          >
            <item.icon className="mt-1 size-4 shrink-0 text-primary" />
            {item.text}
          </li>
        ))}
      </ul>
    </section>
  </div>
);

export default TripOverview;
