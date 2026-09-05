import { TbMountain } from "react-icons/tb";

import { TREK_PHOTO, WOMEN_TREK_PHOTO } from "@/constant/photos";
import type { TripListingItem } from "@/features/site/trips/constant/types";

export const peakClimbs: TripListingItem[] = [
  {
    title: "Mera Peak Climb",
    excerpt:
      "Nepal's highest trekking peak. A non-technical climb to 6,476 m, with a long glacier approach in the Hinku Valley.",
    href: "/mera-peak-expedition",
    duration: "18 Days",
    location: "6,476 m · Khumbu",
    difficulty: "Challenging",
    price: 2150,
    image: TREK_PHOTO,
    tag: "Trekking peak",
    icon: TbMountain,
  },
  {
    title: "Island Peak Climbing",
    excerpt:
      "The classic Khumbu peak above Chhukhung. Often combined with Everest Base Camp, with a steep headwall to the summit ridge.",
    href: "/island-peak-expedition",
    duration: "16 Days",
    location: "6,189 m · Khumbu",
    difficulty: "Challenging",
    price: 1850,
    image: WOMEN_TREK_PHOTO,
    tag: "Trekking peak",
    icon: TbMountain,
  },
  {
    title: "Lobuche Peak Climbing",
    excerpt:
      "A steep, rewarding climb above the Khumbu Glacier. Bigger than Island Peak, with a true Himalayan summit day.",
    href: "/lobuche-peak-climbing",
    duration: "18 Days",
    location: "6,119 m · Khumbu",
    difficulty: "Challenging",
    price: 1950,
    image: TREK_PHOTO,
    tag: "Trekking peak",
    icon: TbMountain,
  },
  {
    title: "Mardi Himal Peak Climbing",
    excerpt:
      "A close-up climb beside Machhapuchhre, starting from Pokhara. High camp on the Mardi ridgeline, back in Lakeside a few days later.",
    href: "/mardi-himal-peak-climbing-a-close-up-view-of-machhapuchhre",
    duration: "12 Days",
    location: "5,587 m · Annapurna",
    difficulty: "Moderate",
    price: 1450,
    image: WOMEN_TREK_PHOTO,
    tag: "Trekking peak",
    icon: TbMountain,
  },
  {
    title: "Yala Peak Climbing",
    excerpt:
      "A beginner-friendly peak above Langtang. Short approach, big views of Shishapangma, and a good first Himalayan summit.",
    href: "/yala-peak-climbing-a-perfect-climbing-peak-for-beginners",
    duration: "12 Days",
    location: "5,732 m · Langtang",
    difficulty: "Moderate",
    price: 1250,
    image: TREK_PHOTO,
    tag: "Trekking peak",
    icon: TbMountain,
  },
  {
    title: "Chulu Far East Peak Climbing",
    excerpt:
      "A quiet Annapurna peak off the circuit trail. Less crowded than Island or Mera, with a long ridge and wide mountain views.",
    href: "/chulu-far-east-peak-climbing",
    duration: "18 Days",
    location: "6,059 m · Annapurna",
    difficulty: "Challenging",
    price: 2100,
    image: WOMEN_TREK_PHOTO,
    tag: "Trekking peak",
    icon: TbMountain,
  },
];
