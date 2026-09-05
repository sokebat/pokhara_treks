import {
  TbCompass,
  TbFileText,
  TbHeartHandshake,
  TbHelicopter,
  TbRoute,
  TbShieldCheck,
  TbTent,
  TbWallet,
} from "react-icons/tb";
import type { IconType } from "react-icons";

import {
  HELI_PHOTO,
  TREK_PHOTO,
  WOMEN_TREK_PHOTO,
} from "@/constant/photos";

export type BlogPost = {
  title: string;
  excerpt: string;
  tag: string;
  href: string;
  icon: IconType;
  image: string;
  date: string;
  readTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    title: "What I wish I had known before my first trek alone",
    excerpt:
      "Teahouse etiquette, sleeping arrangements, periods on the trail, and the three things every solo woman asks us.",
    tag: "Solo Women",
    href: "/blogs/first-trek-alone-what-i-wish-i-knew",
    icon: TbHeartHandshake,
    image: WOMEN_TREK_PHOTO,
    date: "12 Aug 2026",
    readTime: "6 min read",
  },
  {
    title: "Poon Hill or Mardi Himal? An honest comparison",
    excerpt:
      "Two four to five day treks from Pokhara. One is busy and gentle, the other is quiet and steep. Which one suits you.",
    tag: "Route Guide",
    href: "/blogs/poon-hill-or-mardi-himal",
    icon: TbRoute,
    image: TREK_PHOTO,
    date: "4 Aug 2026",
    readTime: "8 min read",
  },
  {
    title: "What a trek in the Annapurna actually costs in 2026",
    excerpt:
      "Permits, guides, teahouses, tips and the things quotes leave out. With the real numbers, line by line.",
    tag: "Money",
    href: "/blogs/annapurna-trek-cost-2026",
    icon: TbWallet,
    image: WOMEN_TREK_PHOTO,
    date: "28 Jul 2026",
    readTime: "9 min read",
  },
  {
    title: "The permits you actually need for the Annapurna region",
    excerpt:
      "ACAP, TIMS, and the rules that keep changing. What you need, what we arrange for you, and what to bring.",
    tag: "Permits",
    href: "/blogs/annapurna-permits-explained",
    icon: TbFileText,
    image: TREK_PHOTO,
    date: "19 Jul 2026",
    readTime: "5 min read",
  },
  {
    title: "How to pack for a Himalayan trek without overdoing it",
    excerpt:
      "What actually goes in the bag, what stays in Pokhara, and the kit our guides never leave without.",
    tag: "Preparation",
    href: "/blogs/how-to-pack-for-a-himalayan-trek",
    icon: TbTent,
    image: TREK_PHOTO,
    date: "9 Jul 2026",
    readTime: "7 min read",
  },
  {
    title: "A morning helicopter flight over Annapurna",
    excerpt:
      "What the Pokhara heli circuit looks like from the air, who it is for, and how a morning flight actually runs.",
    tag: "Heli Tours",
    href: "/blogs/annapurna-helicopter-flight",
    icon: TbHelicopter,
    image: HELI_PHOTO,
    date: "1 Jul 2026",
    readTime: "4 min read",
  },
  {
    title: "Altitude, pacing, and why we never rush the Himalaya",
    excerpt:
      "How we plan rest days, what AMS actually feels like, and the simple rules that keep people well on trail.",
    tag: "Safety",
    href: "/blogs/altitude-pacing-himalaya",
    icon: TbShieldCheck,
    image: WOMEN_TREK_PHOTO,
    date: "22 Jun 2026",
    readTime: "6 min read",
  },
  {
    title: "Why we start almost every journey in Pokhara",
    excerpt:
      "Lakeside as a base, the trails that begin at our door, and why flying into Pokhara still makes the most sense.",
    tag: "Pokhara",
    href: "/blogs/why-we-start-in-pokhara",
    icon: TbCompass,
    image: TREK_PHOTO,
    date: "11 Jun 2026",
    readTime: "5 min read",
  },
];
