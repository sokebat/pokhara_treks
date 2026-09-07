import {
  TbCalendarEvent,
  TbClock,
  TbFileText,
  TbMountain,
  TbRoute,
  TbSunrise,
  TbTent,
} from "react-icons/tb";

import { TREK_PHOTO, WOMEN_TREK_PHOTO } from "@/constant/photos";

import type { TrekkingRegion } from "./types";

export const coreRegions: TrekkingRegion[] = [
  {
    slug: "everest-region",
    label: "Everest Region",
    shortLabel: "Everest",
    title: "Everest Region",
    tagline: "The Khumbu under the world's highest mountain.",
    description:
      "Base Camp, Gokyo and the Three Passes — the classic Khumbu treks under the world's highest mountain.",
    icon: TbMountain,
    image: TREK_PHOTO,
    imageAlt:
      "A trekking group looking out over high Himalayan peaks in the Everest region",
    location: "Khumbu · Solukhumbu",
    typicalDuration: "5–20 days",
    facts: [
      {
        label: "Highest point",
        value: "Kala Patthar 5,545 m",
        icon: TbMountain,
      },
      {
        label: "Best season",
        value: "Mar–May · Oct–Nov",
        icon: TbCalendarEvent,
      },
      { label: "Permits", value: "Sagarmatha NP · TIMS", icon: TbFileText },
      { label: "Typical trek", value: "5–20 days", icon: TbClock },
    ],
    paragraphs: [
      "The Everest region is the Khumbu — Sherpa villages, hanging glaciers and the trail that leads to the base of the world's highest mountain. Most journeys start with the Lukla flight, then walk through Namche, Tengboche and the high valleys above the treeline.",
      "Lodge treks here are well supplied. You sleep in teahouses, eat dal bhat, and gain height slowly enough that most people can reach Everest Base Camp or Gokyo if they take the days. The Three Passes is the harder circuit, with Kongma La, Cho La and Renjo La in one loop.",
      "We run these from Pokhara. Flights, permits and pacing are arranged by the same Lakeside team — including female guides for travellers who want them. Pikey Peak is the shorter option if you want the Khumbu views without going as high.",
    ],
  },
  {
    slug: "annapurna-region",
    label: "Annapurna Region",
    shortLabel: "Annapurna",
    title: "Annapurna Region",
    tagline: "The treks we run most from Pokhara.",
    description:
      "The treks we run most from Pokhara: ABC, Mardi, Poon Hill, Mustang and the quieter ridges around the sanctuary.",
    icon: TbSunrise,
    image: WOMEN_TREK_PHOTO,
    imageAlt:
      "Women trekking on a Himalayan trail in the Annapurna region of Nepal",
    location: "Pokhara · Annapurna Sanctuary",
    typicalDuration: "2–14 days",
    facts: [
      { label: "Highest point", value: "Thorong La 5,416 m", icon: TbMountain },
      {
        label: "Best season",
        value: "Mar–May · Sep–Nov",
        icon: TbCalendarEvent,
      },
      { label: "Permits", value: "ACAP · TIMS", icon: TbFileText },
      { label: "Typical trek", value: "2–14 days", icon: TbClock },
    ],
    paragraphs: [
      "Annapurna is our home range. The trails start a few hours from Lakeside — Poon Hill, Mardi Himal, Australian Camp, and the walk into Annapurna Base Camp. You can be on the path the morning after you arrive in Pokhara.",
      "The Circuit is the longer classic, crossing Thorong La between Manang and Muktinath. Upper Mustang sits on the rain-shadow side: dry valleys, cave monasteries and a restricted-area permit. Shorter ridges like Khopra, Mohare and Ghandruk stay lower and work year-round for many walkers.",
      "Since 2023 a licensed guide is required across the Annapurna Conservation Area. We walk with you, arrange ACAP and TIMS, and keep groups small. This is the region we know in the most detail because we live next to it.",
    ],
  },
  {
    slug: "manaslu-region",
    label: "Manaslu Region",
    shortLabel: "Manaslu",
    title: "Manaslu Region",
    tagline: "A quieter circuit around the world's eighth-highest mountain.",
    description:
      "Circuit and Tsum Valley on a quieter trail around the world's eighth-highest mountain.",
    icon: TbRoute,
    image: TREK_PHOTO,
    imageAlt: "A remote Himalayan valley trail in the Manaslu region of Nepal",
    location: "Gorkha · Nubri · Tsum",
    typicalDuration: "8–18 days",
    facts: [
      { label: "Highest point", value: "Larkya La 5,160 m", icon: TbMountain },
      {
        label: "Best season",
        value: "Mar–May · Sep–Nov",
        icon: TbCalendarEvent,
      },
      {
        label: "Permits",
        value: "Restricted area · MCAP · TIMS",
        icon: TbFileText,
      },
      { label: "Typical trek", value: "8–18 days", icon: TbClock },
    ],
    paragraphs: [
      "Manaslu sits between the Annapurna and Ganesh Himal. The circuit follows the Budi Gandaki through Gurung and Nubri villages, then crosses Larkya La into the Marsyangdi. It feels like the Annapurna Circuit did twenty years ago — fewer lodges, fewer groups, more walking.",
      "Tsum Valley is a side trip into a Buddhist pocket against the Tibetan border. Combined with the circuit it makes a longer journey; on its own it is a quieter eight days. A restricted-area permit is required, which means a registered agency and a guide — we handle both.",
      "Bhimtang is a shorter way onto the same high pasture without doing the full circuit. Food and rooms are simpler than in the Khumbu. That is part of why people choose it.",
    ],
  },
  {
    slug: "west-nepal",
    label: "West Nepal",
    shortLabel: "West",
    title: "West Nepal",
    tagline: "Remote west Nepal — fewer lodges, fewer crowds.",
    description:
      "Rara, Dolpo and Dhorpatan — remote west Nepal, fewer lodges, fewer crowds.",
    icon: TbTent,
    image: WOMEN_TREK_PHOTO,
    imageAlt: "Open high country and sparse trails in remote west Nepal",
    location: "Dolpo · Rara · Dhorpatan",
    typicalDuration: "10–25 days",
    facts: [
      {
        label: "Highest point",
        value: "Upper Dolpo passes ~5,400 m",
        icon: TbMountain,
      },
      {
        label: "Best season",
        value: "May–Jun · Sep–Oct",
        icon: TbCalendarEvent,
      },
      {
        label: "Permits",
        value: "Restricted areas · park fees",
        icon: TbFileText,
      },
      { label: "Typical trek", value: "10–25 days", icon: TbClock },
    ],
    paragraphs: [
      "West Nepal is farther from Pokhara and thinner on the ground. Rara is a high lake reached through Jumla. Dolpo is the rain-shadow country of Shey Phoksundo and the old salt routes. Dhorpatan is Nepal's only hunting reserve, with Gurja Khani and Magar villages below the Dhaulagiri wall.",
      "Lodges are scarce. Some days you camp. Upper Dolpo needs a restricted-area permit and more days than most people budget for a first trek in Nepal. Lower Dolpo is the more realistic circuit if you want the landscape without the full expedition.",
      "These trips take more planning — flights to Nepalgunj or Jumla, extra food, a crew that has actually walked the west. We run them for people who have already done Annapurna or Everest and want something quieter.",
    ],
  },
];
