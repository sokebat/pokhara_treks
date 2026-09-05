import type { NavGroup } from "@/constant/nav/types";

export const tourNavGroups: NavGroup[] = [
  {
    label: "Day Hike in Nepal",
    href: "/day-hike-in-nepal",
    children: [
      {
        label: "Australian Camp Day Hike",
        href: "/australian-camp-day-hike",
      },
      {
        label: "Pokhara Peace Pagoda Hike",
        href: "/pokhara-peace-pagoda-hike",
      },
      {
        label: "Sarangkot - Australian Camp to Dhampus Hike",
        href: "/sarangkot-australian-camp-to-dhampus-hike",
      },
      { label: "Kalikasthan Day Hike", href: "/kalikasthan-day-hike" },
    ],
  },
  {
    label: "Day Tour",
    href: "/day-tour",
    children: [
      { label: "Sarangkot Sunrise Tour", href: "/sarangkot-sunrise-hike" },
      { label: "Kathmandu Day Tour", href: "/kathmandu-day-tour" },
      { label: "Nagarkot Sunrise Tour", href: "/nagarkot-sunrise-tour" },
      { label: "Pokhara Lake Tour", href: "/pokhara-lake-tour" },
      { label: "Pokhara City Tour", href: "/pokhara-city-tour" },
      { label: "Pokhara Day Tour", href: "/pokhara-day-tour" },
    ],
  },
  {
    label: "Multi Days Tour",
    href: "/multi-days-tour",
    children: [
      { label: "Lumbini Day Tour", href: "/lumbini-day-tour" },
      { label: "Best of Nepal Tour", href: "/best-of-nepal-tour" },
      {
        label: "Kathmandu, Pokhara & Chitwan Tour",
        href: "/kathmandu-pokhara-chitwan-tour",
      },
    ],
  },
  {
    label: "Birding Tour Nepal",
    href: "/bird-tour-nepal",
    children: [
      {
        label: "Birding Tour in Pokhara",
        href: "/birding-tour-in-pokhara-nepal",
      },
    ],
  },
  {
    label: "Nature & Wildlife",
    children: [
      {
        label: "Bardia National Park Safari",
        href: "/bardiya-national-park-safari",
      },
      {
        label: "Chitwan National Park Safari",
        href: "/chitwan-national-park-safari",
      },
    ],
  },
];
