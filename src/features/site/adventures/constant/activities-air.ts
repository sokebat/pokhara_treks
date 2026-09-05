import {
  TbArrowBarToDown,
  TbParachute,
  TbPlane,
  TbRoute,
} from "react-icons/tb";

import { BUNGEE_PHOTO, PARA_PHOTO } from "@/constant/photos";
import type { AdventureActivity } from "@/features/site/adventures/constant/types";

export const airActivities: AdventureActivity[] = [
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
];
