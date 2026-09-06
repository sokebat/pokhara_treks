import { tripHref } from "@/constant/nav/trip-href";
import type { NavGroup } from "@/constant/nav/types";

export const everestTrekkingGroup: NavGroup = {
  label: "Everest Region",
  href: "/region/everest-region",
  children: [
    {
      label: "Everest Base Camp Trek (12 Days)",
      href: tripHref("everest-base-camp-trek"),
    },
    {
      label: "Everest Three Passes Trek - 17 Days",
      href: tripHref("everest-high-passes-trek"),
    },
    { label: "Gokyo Lake Trek - 11 Days", href: tripHref("gokyo-lake-trek") },
    { label: "Pikey Peak Trek - 5 Days", href: tripHref("pikey-peak-trek") },
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
  ],
};
