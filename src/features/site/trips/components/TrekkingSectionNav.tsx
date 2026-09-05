"use client";

import { TbMountain } from "react-icons/tb";

import { ListingSectionNav } from "@/components/shared/listing";
import {
  trekkingCount,
  trekkingSections,
} from "@/features/site/trips/constant/trekking";

const TrekkingSectionNav = () => (
  <ListingSectionNav
    pathname="/trekking-and-hiking"
    headerId="trekking-top"
    allLabel="All treks"
    allShortLabel="All"
    allIcon={TbMountain}
    allCount={trekkingCount}
    ariaLabel="Trekking regions"
    sections={trekkingSections.map((section) => ({
      id: section.slug,
      label: section.label,
      shortLabel: section.shortLabel,
      icon: section.icon,
      count: section.items.length,
    }))}
  />
);

export default TrekkingSectionNav;
