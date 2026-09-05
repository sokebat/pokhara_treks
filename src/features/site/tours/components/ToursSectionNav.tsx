"use client";

import { TbCamera } from "react-icons/tb";

import ListingSectionNav from "@/features/site/listing/components/ListingSectionNav";
import {
  tourCount,
  tourSections,
} from "@/features/site/tours/constant/tours";

const ToursSectionNav = () => (
  <ListingSectionNav
    pathname="/tours"
    headerId="tours-top"
    allLabel="All tours"
    allShortLabel="All"
    allIcon={TbCamera}
    allCount={tourCount}
    ariaLabel="Tour types"
    sections={tourSections.map((section) => ({
      id: section.slug,
      label: section.label,
      shortLabel: section.shortLabel,
      icon: section.icon,
      count: section.items.length,
    }))}
  />
);

export default ToursSectionNav;
