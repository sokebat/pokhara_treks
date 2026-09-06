import { tripHref } from "@/constant/nav/trip-href";
import type { NavGroup } from "@/constant/nav/types";

export const annapurnaTrekkingGroup: NavGroup = {
  label: "Annapurna Region",
  href: "/region/annapurna-region",
  children: [
    {
      label: "Upper Mustang Trek - 14 Days",
      href: tripHref("upper-mustang-trek-nepal"),
    },
    {
      label: "Annapurna Base Camp Trek (7 Days)",
      href: tripHref("annapurna-base-camp-trek"),
    },
    {
      label: "Annapurna Circuit Trek (12 Days)",
      href: tripHref("annapurna-circuit-trek"),
    },
    { label: "Mardi Himal Trek – 7 Days", href: tripHref("mardi-himal-trek") },
    {
      label: "North Annapurna Base Camp Trek - 5 Days",
      href: tripHref("annapurna-north-base-camp-trek"),
    },
    {
      label: "Annapurna Sanctuary Trek - 9 Days",
      href: tripHref("annapurna-sanctuary-trek"),
    },
    { label: "Khopra Ridge Trek - 7 Days", href: tripHref("khopra-trek-nepal") },
    {
      label: "Ghorepani Poonhill Trek From Pokhara",
      href: tripHref("poonhill-trek-from-pokhara"),
    },
    {
      label: "Annapurna Circuit Trek with Tilicho Lake - 11 Days",
      href: tripHref("tilicho-lake-trek"),
    },
    { label: "Mohare Danda Trek - 4 Days", href: tripHref("mohare-danda-trek") },
    { label: "Nar Phu Trek - 10 Days", href: tripHref("nar-phu-valley-trek") },
    { label: "Panchase Trek", href: tripHref("panchase-trek") },
    {
      label: "Ghandruk Village Trek: 6 Days",
      href: tripHref("ghandruk-village-trek"),
    },
    { label: "Kapuche Glacier Lake Trek", href: tripHref("kapuche-lake-trek") },
    { label: "Kori Himal Trek - 6 Days", href: tripHref("kori-himal-trek") },
    { label: "Khumai Korcha Trek - 4 Days", href: tripHref("korcha-trek") },
    { label: "Sikles Village Trek", href: tripHref("sikles-village-trek") },
    { label: "Royal Trek Nepal", href: tripHref("royal-trek-nepal") },
    {
      label: "Four Peaks Trek",
      href: tripHref("four-peaks-trek-annapurna-region"),
    },
    {
      label: "Upper Mustang Jeep Tour (11 Days)",
      href: tripHref("upper-mustang-jeep-tour"),
    },
    { label: "Lower Mustang Trek", href: tripHref("lower-mustang-trek-nepal") },
    { label: "Hidden Lake Trek", href: tripHref("hidden-lake-trek-nepal") },
    { label: "Kajin Sara Trek", href: tripHref("kajin-sara-trek") },
    {
      label: "Annapurna Base Camp Trekking - 6 Days",
      href: tripHref("base-camp-annapurna-cost"),
    },
    { label: "Namun La Pass Trek - 9 Days", href: tripHref("namunla-trek") },
    {
      label: "Short Annapurna Base Camp Trek - 5 Days",
      href: tripHref("short-annapurna-base-camp-trek"),
    },
    { label: "Teri La Pass Trek - 20 Days", href: tripHref("teri-la-pass-trek") },
    {
      label: "Annapurna Base Camp Trek - 13 Days",
      href: tripHref("annapurna-base-camp-trek-13-days"),
    },
    { label: "Three Peak Trek", href: tripHref("three-peaks-trek") },
    {
      label: "Upper Mustang Tiji Festival Tour – 12 Days",
      href: tripHref("tiji-festival-tour"),
    },
  ],
};
