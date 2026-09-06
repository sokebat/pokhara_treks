import { tripHref } from "@/constant/nav/trip-href";
import type { NavGroup } from "@/constant/nav/types";

export const otherTrekkingGroups: NavGroup[] = [
  {
    label: "Manaslu Region",
    href: "/region/manaslu-region",
    children: [
      { label: "8 Days Tsum Valley Trek", href: tripHref("tsum-valley-trek") },
      {
        label: "Manaslu Circuit with Tsum Valley Trek - 18 Days",
        href: tripHref("manaslu-with-tsum-valley-trek"),
      },
      {
        label: "Manaslu Circuit Trek 2026",
        href: tripHref("manaslu-circuit-trek"),
      },
      { label: "Bhimtang Trek (9 Days)", href: tripHref("bhimtang-trek") },
      {
        label: "Manaslu Circuit Trekking Nepal - 11 Days",
        href: tripHref("manaslu-circuit-trekking"),
      },
    ],
  },
  {
    label: "West Nepal",
    href: "/region/west-nepal",
    children: [
      {
        label: "Dhorpatan Trek with Gurja Khani",
        href: tripHref("dhorpatan-trek-with-gurjakhani"),
      },
      { label: "Jumla Rara Lake Trek", href: tripHref("rara-lake-trek") },
      {
        label: "Lower Dolpo Circuit Trek",
        href: tripHref("lower-dolpa-trek-nepal"),
      },
      { label: "Upper Dolpo Trek", href: tripHref("upper-dolpo-trek") },
    ],
  },
  {
    label: "Langtang Region",
    href: "/region/langtang-region",
    children: [
      {
        label: "Gosaikunda Lake Trek",
        href: tripHref("gosaikunda-trek-nepal"),
      },
      { label: "Helambu Trek", href: tripHref("helambu-trek") },
      {
        label: "Langtang Valley Trek - 5 Days",
        href: tripHref("langtang-valley-trek"),
      },
      {
        label: "Tamang Heritage Trail Trek",
        href: tripHref("tamang-heritage-trek"),
      },
      {
        label: "Langtang Trek: Cost, Itinerary & Route Map",
        href: tripHref("langtang-trek-cost-itinerary-route-map"),
      },
    ],
  },
  {
    label: "Dhaulagiri Region",
    href: "/region/dhaulagiri-region",
    children: [
      {
        label: "Dhaulagiri Circuit Trek - 16 Days",
        href: tripHref("dhaulagiri-circuit-trek"),
      },
    ],
  },
  {
    label: "Tibet Region",
    href: "/region/tibet-region",
    children: [
      {
        label: "Kailash Mansarovar Yatra - 11 Days",
        href: tripHref("tibet-kailash-mansarovar-tour"),
      },
      {
        label: "Bhutan 4 Night 5 Days Tour",
        href: tripHref("bhutan-4-night-5-days-tour"),
      },
      {
        label: "6 Night 7 Days Bhutan Tour",
        href: tripHref("bhutan-tour-6-night-7-days"),
      },
      {
        label: "Bhutan Tours and Trekking - 8 Days",
        href: tripHref("bhutan-tours-and-trekking-8-days-itinerary"),
      },
      {
        label: "Kailash Mansarovar with EBC Tour",
        href: tripHref("kailash-mansarovar-everest-base-camp-tour"),
      },
    ],
  },
  {
    label: "Kanchenjunga Region",
    href: "/region/kanchenjunga-region",
    children: [
      {
        label: "Kanchenjunga Circuit Trek - 17 Days",
        href: tripHref("kanchenjunga-circuit-trek"),
      },
    ],
  },
];
