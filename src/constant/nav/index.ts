import {
  adventureActivities,
  adventureCategories,
} from "@/features/site/activity/constant/activities";
import { heliTours } from "@/features/site/heli-tours/constant/heli-tours";

import { annapurnaTrekkingGroup } from "@/constant/nav/trekking-annapurna";
import { everestTrekkingGroup } from "@/constant/nav/trekking-everest";
import { otherTrekkingGroups } from "@/constant/nav/trekking-regions";
import { tourNavGroups } from "@/constant/nav/tours";
import type { NavItem } from "@/constant/nav/types";

export type { NavGroup, NavItem, NavLeaf } from "@/constant/nav/types";

export const navItems: NavItem[] = [
  {
    type: "mega",
    label: "Trekking",
    href: "/trekking-and-hiking",
    groups: [
      everestTrekkingGroup,
      annapurnaTrekkingGroup,
      ...otherTrekkingGroups,
    ],
  },
  {
    type: "simple",
    label: "Peak Climbing",
    href: "/peak-climbing",
    children: [
      { label: "Mera Peak Climb", href: "/mera-peak-expedition" },
      { label: "Island Peak Climbing", href: "/island-peak-expedition" },
      { label: "Lobuche Peak Climbing", href: "/lobuche-peak-climbing" },
      {
        label: "Mardi Himal Peak Climbing",
        href: "/mardi-himal-peak-climbing-a-close-up-view-of-machhapuchhre",
      },
      {
        label: "Yala Peak Climbing",
        href: "/yala-peak-climbing-a-perfect-climbing-peak-for-beginners",
      },
      {
        label: "Chulu Far East Peak Climbing",
        href: "/chulu-far-east-peak-climbing",
      },
    ],
  },
  {
    type: "simple",
    label: "Heli Tour",
    href: "/heli-tours",
    allLabel: "All helicopter tours",
    children: heliTours.map((tour) => ({
      label: tour.title,
      href: tour.href,
    })),
  },
  {
    type: "mega",
    label: "Activity",
    href: "/activity",
    groups: adventureCategories.map((category) => ({
      label: category.label,
      href: category.href,
      children: adventureActivities
        .filter((activity) => activity.category === category.slug)
        .map((activity) => ({
          label: activity.title,
          href: activity.href,
        })),
    })),
  },
  {
    type: "mega",
    label: "Tours",
    href: "/tours",
    groups: tourNavGroups,
  },
  {
    type: "simple",
    label: "Destinations",
    href: "/destinations",
    children: [
      { label: "Nepal", href: "/nepal-tour-package" },
      { label: "Tibet", href: "/tibet-tour-package-from-nepal" },
      { label: "Bhutan", href: "/bhutan-tour-package" },
    ],
  },
  {
    type: "link",
    label: "About Us",
    href: "/about-us",
  },
  {
    type: "link",
    label: "Blogs",
    href: "/blogs",
  },
];
