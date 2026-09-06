import type { NavGroup } from "@/constant/nav/types";

function tripHref(slug: string) {
  return `/trip/${slug}`;
}

export const tourNavGroups: NavGroup[] = [
  {
    label: "Day Hike in Nepal",
    href: "/trip",
    children: [
      {
        label: "Australian Camp Day Hike",
        href: tripHref("australian-camp-day-hike"),
      },
      {
        label: "Pokhara Peace Pagoda Hike",
        href: tripHref("pokhara-peace-pagoda-hike"),
      },
      {
        label: "Sarangkot - Australian Camp to Dhampus Hike",
        href: tripHref("sarangkot-australian-camp-to-dhampus-hike"),
      },
      {
        label: "Kalikasthan Day Hike",
        href: tripHref("kalikasthan-day-hike"),
      },
    ],
  },
  {
    label: "Day Tour",
    href: "/trip",
    children: [
      {
        label: "Sarangkot Sunrise Tour",
        href: tripHref("sarangkot-sunrise-hike"),
      },
      { label: "Kathmandu Day Tour", href: tripHref("kathmandu-day-tour") },
      {
        label: "Nagarkot Sunrise Tour",
        href: tripHref("nagarkot-sunrise-tour"),
      },
      { label: "Pokhara Lake Tour", href: tripHref("pokhara-lake-tour") },
      { label: "Pokhara City Tour", href: tripHref("pokhara-city-tour") },
      { label: "Pokhara Day Tour", href: tripHref("pokhara-day-tour") },
    ],
  },
  {
    label: "Multi Days Tour",
    href: "/trip",
    children: [
      { label: "Lumbini Day Tour", href: tripHref("lumbini-day-tour") },
      { label: "Best of Nepal Tour", href: tripHref("best-of-nepal-tour") },
      {
        label: "Kathmandu, Pokhara & Chitwan Tour",
        href: tripHref("kathmandu-pokhara-chitwan-tour"),
      },
    ],
  },
  {
    label: "Birding Tour Nepal",
    href: "/trip",
    children: [
      {
        label: "Birding Tour in Pokhara",
        href: tripHref("birding-tour-in-pokhara-nepal"),
      },
    ],
  },
  {
    label: "Nature & Wildlife",
    href: "/trip",
    children: [
      {
        label: "Bardia National Park Safari",
        href: tripHref("bardiya-national-park-safari"),
      },
      {
        label: "Chitwan National Park Safari",
        href: tripHref("chitwan-national-park-safari"),
      },
    ],
  },
];
