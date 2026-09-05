import {
  TbCalendarEvent,
  TbClock,
  TbFileText,
  TbFlag,
  TbMountain,
} from "react-icons/tb";

import { TREK_PHOTO, WOMEN_TREK_PHOTO } from "@/constant/photos";

import type { TrekkingRegion } from "./types";

export const remoteRegions: TrekkingRegion[] = [
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
