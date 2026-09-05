import {
  TbCalendarEvent,
  TbClock,
  TbFileText,
  TbFlag,
  TbMountain,
  TbRoute,
  TbSunrise,
  TbTent,
} from "react-icons/tb";
import type { IconType } from "react-icons";

import { TREK_PHOTO, WOMEN_TREK_PHOTO } from "@/constant/photos";
import type { SectionMeta } from "@/features/site/listing";

export type RegionFact = {
  label: string;
  value: string;
  icon: IconType;
};

export type TrekkingRegion = {
  slug: string;
  label: string;
  shortLabel: string;
  title: string;
  tagline: string;
  description: string;
  icon: IconType;
  image: string;
  imageAlt: string;
  location: string;
  typicalDuration: string;
  facts: RegionFact[];
  paragraphs: string[];
  highlights: string[];
};

export const trekkingRegions: TrekkingRegion[] = [
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
      { label: "Highest point", value: "Kala Patthar 5,545 m", icon: TbMountain },
      { label: "Best season", value: "Mar–May · Oct–Nov", icon: TbCalendarEvent },
      { label: "Permits", value: "Sagarmatha NP · TIMS", icon: TbFileText },
      { label: "Typical trek", value: "5–20 days", icon: TbClock },
    ],
    paragraphs: [
      "The Everest region is the Khumbu — Sherpa villages, hanging glaciers and the trail that leads to the base of the world's highest mountain. Most journeys start with the Lukla flight, then walk through Namche, Tengboche and the high valleys above the treeline.",
      "Lodge treks here are well supplied. You sleep in teahouses, eat dal bhat, and gain height slowly enough that most people can reach Everest Base Camp or Gokyo if they take the days. The Three Passes is the harder circuit, with Kongma La, Cho La and Renjo La in one loop.",
      "We run these from Pokhara. Flights, permits and pacing are arranged by the same Lakeside team — including female guides for travellers who want them. Pikey Peak is the shorter option if you want the Khumbu views without going as high.",
    ],
    highlights: [
      "Everest Base Camp and Kala Patthar",
      "Gokyo Lakes and Gokyo Ri",
      "The Three Passes circuit",
      "Pikey Peak for a shorter Khumbu walk",
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
      { label: "Best season", value: "Mar–May · Sep–Nov", icon: TbCalendarEvent },
      { label: "Permits", value: "ACAP · TIMS", icon: TbFileText },
      { label: "Typical trek", value: "2–14 days", icon: TbClock },
    ],
    paragraphs: [
      "Annapurna is our home range. The trails start a few hours from Lakeside — Poon Hill, Mardi Himal, Australian Camp, and the walk into Annapurna Base Camp. You can be on the path the morning after you arrive in Pokhara.",
      "The Circuit is the longer classic, crossing Thorong La between Manang and Muktinath. Upper Mustang sits on the rain-shadow side: dry valleys, cave monasteries and a restricted-area permit. Shorter ridges like Khopra, Mohare and Ghandruk stay lower and work year-round for many walkers.",
      "Since 2023 a licensed guide is required across the Annapurna Conservation Area. We walk with you, arrange ACAP and TIMS, and keep groups small. This is the region we know in the most detail because we live next to it.",
    ],
    highlights: [
      "Annapurna Base Camp and the sanctuary",
      "Mardi Himal and Poon Hill from Pokhara",
      "Annapurna Circuit and Tilicho Lake",
      "Upper Mustang and the Kali Gandaki rain shadow",
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
    imageAlt:
      "A remote Himalayan valley trail in the Manaslu region of Nepal",
    location: "Gorkha · Nubri · Tsum",
    typicalDuration: "8–18 days",
    facts: [
      { label: "Highest point", value: "Larkya La 5,160 m", icon: TbMountain },
      { label: "Best season", value: "Mar–May · Sep–Nov", icon: TbCalendarEvent },
      { label: "Permits", value: "Restricted area · MCAP · TIMS", icon: TbFileText },
      { label: "Typical trek", value: "8–18 days", icon: TbClock },
    ],
    paragraphs: [
      "Manaslu sits between the Annapurna and Ganesh Himal. The circuit follows the Budi Gandaki through Gurung and Nubri villages, then crosses Larkya La into the Marsyangdi. It feels like the Annapurna Circuit did twenty years ago — fewer lodges, fewer groups, more walking.",
      "Tsum Valley is a side trip into a Buddhist pocket against the Tibetan border. Combined with the circuit it makes a longer journey; on its own it is a quieter eight days. A restricted-area permit is required, which means a registered agency and a guide — we handle both.",
      "Bhimtang is a shorter way onto the same high pasture without doing the full circuit. Food and rooms are simpler than in the Khumbu. That is part of why people choose it.",
    ],
    highlights: [
      "Manaslu Circuit over Larkya La",
      "Tsum Valley from the Budi Gandaki",
      "Circuit combined with Tsum",
      "Bhimtang as a shorter high-pasture walk",
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
      { label: "Highest point", value: "Upper Dolpo passes ~5,400 m", icon: TbMountain },
      { label: "Best season", value: "May–Jun · Sep–Oct", icon: TbCalendarEvent },
      { label: "Permits", value: "Restricted areas · park fees", icon: TbFileText },
      { label: "Typical trek", value: "10–25 days", icon: TbClock },
    ],
    paragraphs: [
      "West Nepal is farther from Pokhara and thinner on the ground. Rara is a high lake reached through Jumla. Dolpo is the rain-shadow country of Shey Phoksundo and the old salt routes. Dhorpatan is Nepal's only hunting reserve, with Gurja Khani and Magar villages below the Dhaulagiri wall.",
      "Lodges are scarce. Some days you camp. Upper Dolpo needs a restricted-area permit and more days than most people budget for a first trek in Nepal. Lower Dolpo is the more realistic circuit if you want the landscape without the full expedition.",
      "These trips take more planning — flights to Nepalgunj or Jumla, extra food, a crew that has actually walked the west. We run them for people who have already done Annapurna or Everest and want something quieter.",
    ],
    highlights: [
      "Jumla to Rara Lake",
      "Lower Dolpo circuit",
      "Upper Dolpo for a longer expedition",
      "Dhorpatan with Gurja Khani",
    ],
  },
  {
    slug: "langtang-region",
    label: "Langtang Region",
    shortLabel: "Langtang",
    title: "Langtang Region",
    tagline: "Close to Kathmandu, with Tamang villages and high lakes.",
    description:
      "Valley, Gosaikunda and Helambu — close to Kathmandu, with Tamang villages and high lakes.",
    icon: TbMountain,
    image: TREK_PHOTO,
    imageAlt:
      "A Himalayan valley trail through villages in the Langtang region",
    location: "Langtang · Helambu · Gosaikunda",
    typicalDuration: "5–10 days",
    facts: [
      { label: "Highest point", value: "Gosaikunda 4,380 m", icon: TbMountain },
      { label: "Best season", value: "Mar–May · Oct–Nov", icon: TbCalendarEvent },
      { label: "Permits", value: "Langtang NP · TIMS", icon: TbFileText },
      { label: "Typical trek", value: "5–10 days", icon: TbClock },
    ],
    paragraphs: [
      "Langtang is the closest major trekking valley to Kathmandu. You leave the city in the morning and are walking the same day. The valley itself is Tamang country — rebuilt lodges after the 2015 earthquake, cheese factories, and Langtang Lirung at the head of the glacier.",
      "Gosaikunda is the sacred lake circuit, often combined with Helambu on the way back toward Kathmandu. The Tamang Heritage Trail stays lower and is a good choice if you want villages more than altitude.",
      "It is shorter than Everest or the Annapurna Circuit, which makes it a fit for people with a week and a flight into Kathmandu rather than Pokhara. We still run it from our Lakeside office — permits, guide and the drive to Syabrubesi included.",
    ],
    highlights: [
      "Langtang Valley to Kyanjin Gompa",
      "Gosaikunda lakes",
      "Helambu on the Kathmandu side",
      "Tamang Heritage Trail",
    ],
  },
  {
    slug: "dhaulagiri-region",
    label: "Dhaulagiri Region",
    shortLabel: "Dhaulagiri",
    title: "Dhaulagiri Region",
    tagline: "The long circuit around the White Mountain.",
    description:
      "The long circuit around the White Mountain, with high camps and glacier crossings.",
    icon: TbFlag,
    image: WOMEN_TREK_PHOTO,
    imageAlt:
      "High glacier country on the Dhaulagiri circuit in western Nepal",
    location: "Dhaulagiri · Hidden Valley",
    typicalDuration: "14–18 days",
    facts: [
      { label: "Highest point", value: "French Pass 5,360 m", icon: TbMountain },
      { label: "Best season", value: "Apr–May · Sep–Oct", icon: TbCalendarEvent },
      { label: "Permits", value: "ACAP · TIMS", icon: TbFileText },
      { label: "Typical trek", value: "14–18 days", icon: TbClock },
    ],
    paragraphs: [
      "Dhaulagiri is the White Mountain — the seventh-highest in the world, standing west of the Kali Gandaki. The circuit around it is not a teahouse stroll. You cross French Pass and Dhampus Pass, camp in Hidden Valley, and spend days on glacier moraine.",
      "There are few lodges once you leave the road. This is a camping trek with a full crew, and it asks more of your fitness and your schedule than ABC or Poon Hill. The views of Dhaulagiri I, Tukuche and the Annapurnas from the high camps are the reason people still do it.",
      "We run it for experienced walkers who want a harder line close to Pokhara. It starts from Beni or the Kali Gandaki, and we staff it with guides who have crossed those passes, not only walked the sanctuary.",
    ],
    highlights: [
      "Dhaulagiri Circuit over French Pass",
      "Hidden Valley high camps",
      "Dhampus Pass into the Kali Gandaki",
      "Close views of Dhaulagiri I",
    ],
  },
  {
    slug: "tibet-region",
    label: "Tibet Region",
    shortLabel: "Tibet",
    title: "Tibet and Bhutan",
    tagline: "Kailash yatra and Bhutan, arranged from Nepal.",
    description:
      "Kailash yatra and Bhutan tours arranged from Nepal, for travellers combining the plateau with a Himalayan trek.",
    icon: TbFlag,
    image: TREK_PHOTO,
    imageAlt:
      "High plateau landscape on a Kailash and Tibet journey from Nepal",
    location: "Kailash · Lhasa · Bhutan",
    typicalDuration: "5–16 days",
    facts: [
      { label: "Highest point", value: "Dolma La 5,630 m", icon: TbMountain },
      { label: "Best season", value: "May–Sep", icon: TbCalendarEvent },
      { label: "Permits", value: "Tibet · Bhutan visas", icon: TbFileText },
      { label: "Typical trip", value: "5–16 days", icon: TbClock },
    ],
    paragraphs: [
      "From Pokhara we also arrange journeys onto the Tibetan plateau and into Bhutan. The Kailash Mansarovar yatra is the main Tibet itinerary — the kora around the mountain, the lake, and the high pass at Dolma La. Some travellers add Everest's north side.",
      "These are not independent walks. Tibet requires a group permit, a guide on the Chinese side, and fixed dates. Bhutan is a licensed tour with dzongs, valleys and short day walks rather than a long teahouse trek.",
      "We handle the Nepal side — Kathmandu or Pokhara logistics, the border or the flight, and the paperwork — with partners we already work with on the plateau and in Paro. Combine it with a Nepal trek if you want both in one trip.",
    ],
    highlights: [
      "Kailash Mansarovar yatra",
      "Kailash with Everest north side",
      "Short Bhutan cultural tours",
      "Bhutan tours combined with walking days",
    ],
  },
  {
    slug: "kanchenjunga-region",
    label: "Kanchenjunga Region",
    shortLabel: "Kanchenjunga",
    title: "Kanchenjunga Region",
    tagline: "The long eastern circuit to the third-highest mountain.",
    description:
      "The long eastern circuit to the third-highest mountain, far from the Annapurna crowds.",
    icon: TbMountain,
    image: WOMEN_TREK_PHOTO,
    imageAlt:
      "Eastern Himalayan ridges on the approach to Kanchenjunga",
    location: "Taplejung · Limbu country",
    typicalDuration: "17–22 days",
    facts: [
      { label: "Highest point", value: "Pangpema 5,140 m", icon: TbMountain },
      { label: "Best season", value: "Mar–May · Oct–Nov", icon: TbCalendarEvent },
      { label: "Permits", value: "Restricted area · KCAP · TIMS", icon: TbFileText },
      { label: "Typical trek", value: "17–22 days", icon: TbClock },
    ],
    paragraphs: [
      "Kanchenjunga is Nepal's far east — the third-highest mountain, on the Sikkim border. The circuit visits both the north and south base camps. It is a long walk: cardamom hills, Limbu villages, then high grazing and the wall of the mountain.",
      "You will see far fewer trekkers than in the Khumbu. Lodges exist on the main trail but are simpler. A restricted-area permit is required, so you go with an agency and a guide. Flights or a long road journey to Taplejung add a day each way.",
      "This is for people with two to three weeks and some trekking already behind them. We arrange it from Pokhara the same way we arrange Manaslu — paperwork, flights, and a crew that has walked the east, not only the Annapurna side.",
    ],
    highlights: [
      "Kanchenjunga Circuit to both base camps",
      "North base camp at Pangpema",
      "South side via Ramche",
      "Limbu and Rai villages on the approach",
    ],
  },
];

export const regionMetaByLabel: Record<string, SectionMeta> =
  Object.fromEntries(
    trekkingRegions.map((region) => [
      region.label,
      {
        shortLabel: region.shortLabel,
        icon: region.icon,
        description: region.description,
      } satisfies SectionMeta,
    ]),
  );

export function getRegionBySlug(slug: string) {
  return trekkingRegions.find((region) => region.slug === slug);
}

export function regionPath(slug: string) {
  return `/region/${slug}`;
}
