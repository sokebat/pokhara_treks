import {
  TbArrowBarToDown,
  TbBike,
  TbDroplet,
  TbParachute,
  TbPlane,
  TbRipple,
  TbRoute,
} from "react-icons/tb";
import type { IconType } from "react-icons";

const BUNGEE_PHOTO = "/images/collage-bungee.jpg";
const PARA_PHOTO = "/images/collage-paragliding.jpg";
const TREK_PHOTO = "/images/collage-trekking.jpg";

export type AdventureCategory = {
  slug: string;
  label: string;
  shortLabel: string;
  href: string;
  description: string;
  icon: IconType;
};

export type AdventureActivity = {
  title: string;
  excerpt: string;
  href: string;
  category: string;
  duration: string;
  location: string;
  difficulty: string;
  price: number;
  image: string;
  icon: IconType;
};

export const adventureCategories: AdventureCategory[] = [
  {
    slug: "bungee-spots",
    label: "Bungee Spots",
    shortLabel: "Bungee",
    href: "/activity#bungee-spots",
    description:
      "Two of Nepal's highest jumps — one over the Kaligandaki gorge at Kushma, one just outside Pokhara.",
    icon: TbArrowBarToDown,
  },
  {
    slug: "ultralight-flying-in-pokhara",
    label: "Ultralight Flying in Pokhara",
    shortLabel: "Ultralight",
    href: "/activity#ultralight-flying-in-pokhara",
    description:
      "Open-cockpit flights over Phewa Lake and the Annapurna range. Fifteen minutes to an hour and a half.",
    icon: TbPlane,
  },
  {
    slug: "paragliding-in-pokhara",
    label: "Paragliding in Pokhara",
    shortLabel: "Paragliding",
    href: "/activity#paragliding-in-pokhara",
    description:
      "Tandem flights from Sarangkot with a landing on the lakeshore. The classic Pokhara morning.",
    icon: TbParachute,
  },
  {
    slug: "zip-flyer-pokhara",
    label: "Zip Flyer - Pokhara",
    shortLabel: "Zip Flyer",
    href: "/activity#zip-flyer-pokhara",
    description:
      "One of the world's longest ziplines, running 1.8 km from Sarangkot down toward the valley floor.",
    icon: TbRoute,
  },
  {
    slug: "rafting",
    label: "Rafting",
    shortLabel: "Rafting",
    href: "/activity#rafting",
    description:
      "Day trips and multi-day runs on the Seti, Trishuli, Kali Gandaki and Marsyangdi — all reachable from Pokhara.",
    icon: TbRipple,
  },
  {
    slug: "cycling",
    label: "Cycling",
    shortLabel: "Cycling",
    href: "/activity#cycling",
    description:
      "Lakeside loops, village trails, and longer mountain-bike tours through Mustang and the Annapurna circuit.",
    icon: TbBike,
  },
  {
    slug: "canyoning",
    label: "Canyoning",
    shortLabel: "Canyoning",
    href: "/activity#canyoning",
    description:
      "Rappels, jumps and slides through limestone gorges in Lwang and Jalbire, a short drive from Lakeside.",
    icon: TbDroplet,
  },
];

export const adventureActivities: AdventureActivity[] = [
  {
    title: "Kushma Bungee Jump",
    excerpt:
      "A 228-metre jump over the Kali Gandaki gorge. The second-highest bungee in the world, about three hours from Pokhara.",
    href: "/kushma-bungge-jump-1",
    category: "bungee-spots",
    duration: "Full day",
    location: "Kushma, Parbat",
    difficulty: "Thrill",
    price: 90,
    image: BUNGEE_PHOTO,
    icon: TbArrowBarToDown,
  },
  {
    title: "Bungee Jump Pokhara",
    excerpt:
      "Pokhara's local jump at Hemja. Shorter transfer, the same rush, and you are back in Lakeside for lunch.",
    href: "/bungee-jump-pokhara",
    category: "bungee-spots",
    duration: "Half day",
    location: "Hemja, Pokhara",
    difficulty: "Thrill",
    price: 75,
    image: BUNGEE_PHOTO,
    icon: TbArrowBarToDown,
  },
  {
    title: "Ultralight Flight Price (15-90 Min)",
    excerpt:
      "Open-cockpit ultralight over Phewa Lake, Sarangkot and the Annapurna skyline. Choose a short hop or a long mountain circuit.",
    href: "/ultralight-in-pokhara",
    category: "ultralight-flying-in-pokhara",
    duration: "15–90 min",
    location: "Pokhara Airport",
    difficulty: "Easy",
    price: 95,
    image: PARA_PHOTO,
    icon: TbPlane,
  },
  {
    title: "Paragliding in Pokhara",
    excerpt:
      "Tandem flight from Sarangkot with a licensed pilot. Twenty to forty-five minutes in the air, landing beside the lake.",
    href: "/paragliding-in-pokhara-1",
    category: "paragliding-in-pokhara",
    duration: "20–45 min",
    location: "Sarangkot",
    difficulty: "Easy",
    price: 85,
    image: PARA_PHOTO,
    icon: TbParachute,
  },
  {
    title: "Zipline in Pokhara",
    excerpt:
      "1.8 km of cable from Sarangkot, reaching about 140 km/h. One of the longest commercial ziplines in the world.",
    href: "/zip-flyer-pokhara",
    category: "zip-flyer-pokhara",
    duration: "2 hours",
    location: "Sarangkot",
    difficulty: "Easy",
    price: 70,
    image: PARA_PHOTO,
    icon: TbRoute,
  },
  {
    title: "Rafting in Nepal",
    excerpt:
      "A primer on Nepal's rivers from Pokhara — which run suits a first timer, which needs a few days, and when the water is best.",
    href: "/rafting-in-nepal",
    category: "rafting",
    duration: "Half day+",
    location: "Pokhara & beyond",
    difficulty: "Easy to Moderate",
    price: 45,
    image: TREK_PHOTO,
    icon: TbRipple,
  },
  {
    title: "Trishuli River Rafting",
    excerpt:
      "The classic highway river between Kathmandu and Pokhara. Gentle rapids, big scenery, a good first day on the water.",
    href: "/trishuli-river-rafting",
    category: "rafting",
    duration: "1 day",
    location: "Trishuli River",
    difficulty: "Easy",
    price: 45,
    image: TREK_PHOTO,
    icon: TbRipple,
  },
  {
    title: "Upper Seti River Rafting",
    excerpt:
      "Pokhara's nearest white water. A short drive, a lively half day, and you are back in Lakeside before evening.",
    href: "/upper-seti-river-rafting",
    category: "rafting",
    duration: "Half day",
    location: "Seti River",
    difficulty: "Moderate",
    price: 50,
    image: TREK_PHOTO,
    icon: TbRipple,
  },
  {
    title: "Kali Gandaki River Rafting",
    excerpt:
      "A longer, wilder run through the deepest gorge on earth. Overnight camping on the riverbank if you want it.",
    href: "/kali-gandaki-river-rafting",
    category: "rafting",
    duration: "2–3 days",
    location: "Kali Gandaki",
    difficulty: "Moderate",
    price: 85,
    image: TREK_PHOTO,
    icon: TbRipple,
  },
  {
    title: "Lower Seti River Rafting",
    excerpt:
      "A gentler stretch of the Seti. Suited to families and anyone who wants the river without the bigger rapids.",
    href: "/lower-seti-river-rafting",
    category: "rafting",
    duration: "Half day",
    location: "Seti River",
    difficulty: "Easy",
    price: 40,
    image: TREK_PHOTO,
    icon: TbRipple,
  },
  {
    title: "Marsyangdi River Rafting",
    excerpt:
      "Steep, technical water below the Annapurna circuit road. For people who already know they like rapids.",
    href: "/marsyangdi-river-rafting",
    category: "rafting",
    duration: "1–2 days",
    location: "Marsyangdi River",
    difficulty: "Challenging",
    price: 95,
    image: TREK_PHOTO,
    icon: TbRipple,
  },
  {
    title: "Cycling in Pokhara",
    excerpt:
      "Lakeside to village trails, Begnas and Rupa, and the ridge roads above Sarangkot. Bikes, guides and a packed lunch.",
    href: "/cycling-in-pokhara",
    category: "cycling",
    duration: "Half day",
    location: "Pokhara Valley",
    difficulty: "Easy",
    price: 35,
    image: TREK_PHOTO,
    icon: TbBike,
  },
  {
    title: "Upper Mustang Mountain Biking Tour",
    excerpt:
      "Jeep-road and singletrack through the former kingdom of Lo. Wind-carved cliffs, cave villages, and a high desert sky.",
    href: "/uppermustang-biking-mtb-tour",
    category: "cycling",
    duration: "10 days",
    location: "Upper Mustang",
    difficulty: "Challenging",
    price: 890,
    image: TREK_PHOTO,
    icon: TbBike,
  },
  {
    title: "Annapurna Circuit Mountain Bike Tour",
    excerpt:
      "The classic circuit on two wheels — rice terraces, high passes and the long descent toward Jomsom.",
    href: "/annapurna-bike-tour",
    category: "cycling",
    duration: "12 days",
    location: "Annapurna Circuit",
    difficulty: "Challenging",
    price: 750,
    image: TREK_PHOTO,
    icon: TbBike,
  },
  {
    title: "Pokhara Canyoning in Lwang Village",
    excerpt:
      "Rappels, jumps and slides in a gorge above Lwang. A full day out, still close enough to sleep in Pokhara.",
    href: "/canyoning-in-pokhara",
    category: "canyoning",
    duration: "Full day",
    location: "Lwang Village",
    difficulty: "Moderate",
    price: 80,
    image: BUNGEE_PHOTO,
    icon: TbDroplet,
  },
  {
    title: "Canyoning in Jalbire Jharana",
    excerpt:
      "A waterfall canyon with longer rappels and deeper pools. For people who liked Lwang and want a bigger day.",
    href: "/canyoning-in-jalbire",
    category: "canyoning",
    duration: "Full day",
    location: "Jalbire Jharana",
    difficulty: "Moderate",
    price: 75,
    image: BUNGEE_PHOTO,
    icon: TbDroplet,
  },
];

export function getAdventureCategory(slug: string) {
  return adventureCategories.find((category) => category.slug === slug);
}

export function getAdventuresByCategory(slug?: string) {
  if (!slug) return adventureActivities;
  return adventureActivities.filter((activity) => activity.category === slug);
}

export function getCategoryCount(slug: string) {
  return adventureActivities.filter((activity) => activity.category === slug)
    .length;
}
