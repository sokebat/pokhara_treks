import { TbBolt, TbClipboardList, TbCompass, TbConfetti, TbHeartHandshake, TbRoute, TbShieldCheck, TbSparkles } from "react-icons/tb";

export const colorVariants = [
  { chip: "bg-secondary text-chart-2", dot: "bg-chart-2" },
  { chip: "bg-primary text-primary-foreground", dot: "bg-primary" },
  { chip: "bg-secondary text-primary", dot: "bg-accent" },
];

export const trustPoints = [
  { icon: TbCompass, label: "Local Expertise" },
  { icon: TbHeartHandshake, label: "Women-Led Guides" },
  { icon: TbBolt, label: "Fast, No-Pressure Reply" },
];

export const steps = [
  {
    icon: TbClipboardList,
    title: "Share your preferences",
    description:
      "Dates, group size, and the kind of trip you're picturing — the form takes under two minutes.",
  },
  {
    icon: TbRoute,
    title: "We design your itinerary",
    description:
      "A local trip planner builds a route, pace, and price around what you told us — no templates.",
  },
  {
    icon: TbConfetti,
    title: "Confirm & get set",
    description:
      "Approve the plan, we handle permits and logistics, and you land in Pokhara ready to go.",
  },
];

export const sidebarHighlights = [
  {
    icon: TbHeartHandshake,
    title: "Planned by local women",
    description: "Every itinerary is shaped by guides who grew up on these trails.",
  },
  {
    icon: TbShieldCheck,
    title: "Nothing fixed in stone",
    description: "Swap routes, dates, or pace anytime before you confirm — free of charge.",
  },
  {
    icon: TbSparkles,
    title: "Built around you",
    description: "Solo, family, or a group of twelve — the plan is sized to fit.",
  },
];
