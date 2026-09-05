import { HELI_PHOTO } from "@/constant/photos";

export type HeliTour = {
  title: string;
  excerpt: string;
  href: string;
  flight: string;
  landsAt: string;
  departs: string;
  location: string;
  price: number;
  image: string;
};

export const heliTours: HeliTour[] = [
  {
    title: "Annapurna Base Camp Helicopter Tour",
    excerpt:
      "Fly the Modi Khola gorge to a landing at Annapurna Base Camp. The sanctuary in an hour, without the seven-day walk.",
    href: "/annapurna-base-camp-heli-landing-tour",
    flight: "1 hour",
    landsAt: "4,130 m",
    departs: "06:30",
    location: "Annapurna Sanctuary",
    price: 450,
    image: HELI_PHOTO,
  },
  {
    title: "Mardi Himal Helicopter Tour",
    excerpt:
      "Over the Mardi ridgeline to a landing with Machhapuchhre filling the windshield. The close-up Annapurna flight.",
    href: "/mardi-heli-tour",
    flight: "55 minutes",
    landsAt: "4,200 m",
    departs: "07:00",
    location: "Mardi Himal",
    price: 420,
    image: HELI_PHOTO,
  },
  {
    title: "PoonHill-Ghandruk Helicopter Landing Tour",
    excerpt:
      "Sunrise from Poon Hill without the pre-dawn walk, then a landing in Ghandruk. The classic Annapurna viewpoint in a morning.",
    href: "/poonhill-ghandruk-helicopter-tour",
    flight: "1 hour",
    landsAt: "3,210 m",
    departs: "06:45",
    location: "Poon Hill & Ghandruk",
    price: 400,
    image: HELI_PHOTO,
  },
  {
    title: "Kapuche Helicopter Landing Tour",
    excerpt:
      "A glacier lake at the foot of Annapurna II. Land beside the water, walk the moraine, fly home before lunch.",
    href: "/kapuche-helicopter-tour",
    flight: "1 hr 10 min",
    landsAt: "2,546 m",
    departs: "07:30",
    location: "Kapuche Glacier Lake",
    price: 490,
    image: HELI_PHOTO,
  },
  {
    title: "Kori Himal Helicopter Landing Tour",
    excerpt:
      "A quieter landing above Sikles, with Annapurna II and IV across the valley. Less traffic than ABC, same mountain wall.",
    href: "/kori-helicopter-tour",
    flight: "50 minutes",
    landsAt: "3,800 m",
    departs: "07:00",
    location: "Kori Himal",
    price: 440,
    image: HELI_PHOTO,
  },
  {
    title: "Muktinath Helicopter Tour from Pokhara",
    excerpt:
      "Pokhara to Muktinath and back in a morning. Temple visit, mountain flight, and the Kali Gandaki gorge from above.",
    href: "/muktinath-helicopter-tour",
    flight: "2 hours",
    landsAt: "3,710 m",
    departs: "07:00",
    location: "Muktinath",
    price: 890,
    image: HELI_PHOTO,
  },
  {
    title: "North Annapurna Base Camp Heli Landing Tour",
    excerpt:
      "A landing on the north side of Annapurna, looking straight into the wall. Short flight, long view, back in Pokhara the same morning.",
    href: "/heli-tour-north-annapurna-base-camp",
    flight: "1 hour",
    landsAt: "4,190 m",
    departs: "06:30",
    location: "North Annapurna",
    price: 480,
    image: HELI_PHOTO,
  },
  {
    title: "Tilicho Lake Helicopter Tour",
    excerpt:
      "The highest lake of its size on earth, seen from the air and a short landing on the ridge. Manang and the Annapurnas in one flight.",
    href: "/tilicho-lake-helicopter-tour",
    flight: "1 hr 20 min",
    landsAt: "4,919 m",
    departs: "07:00",
    location: "Tilicho Lake",
    price: 650,
    image: HELI_PHOTO,
  },
  {
    title: "Upper Mustang Helicopter Tour",
    excerpt:
      "Over the Kali Gandaki to Lo Manthang. Walled city, cave monasteries, and the rain-shadow desert — there and back from Pokhara.",
    href: "/upper-mustang-helicopter-tour",
    flight: "2 hr 30 min",
    landsAt: "3,840 m",
    departs: "07:00",
    location: "Upper Mustang",
    price: 1100,
    image: HELI_PHOTO,
  },
  {
    title: "Manang Helicopter Tour",
    excerpt:
      "Pokhara to Manang over the Annapurna Circuit. Thorong La, Gangapurna lake, and the north face — a full circuit in a morning.",
    href: "/manang-helicopter-tour",
    flight: "1 hr 30 min",
    landsAt: "3,540 m",
    departs: "07:00",
    location: "Manang",
    price: 720,
    image: HELI_PHOTO,
  },
  {
    title: "Everest Helicopter Tour",
    excerpt:
      "Kathmandu to the Khumbu in a morning. Landing at Kala Patthar or Everest View, with the South Face across the valley.",
    href: "/everest-helicopter-tour",
    flight: "4 hours",
    landsAt: "5,545 m",
    departs: "06:00",
    location: "Everest Region",
    price: 1250,
    image: HELI_PHOTO,
  },
  {
    title: "Rescue Flight & Medical Evacuation",
    excerpt:
      "Helicopter evacuation from the trail when walking out is not an option. Arranged from our office, day or night, with insurance paperwork handled.",
    href: "/rescue-flight-medical-evacuation-and-other-services",
    flight: "On demand",
    landsAt: "Any altitude",
    departs: "24 hours",
    location: "Nepal-wide",
    price: 1500,
    image: HELI_PHOTO,
  },
];

const featuredHrefs = [
  "/annapurna-base-camp-heli-landing-tour",
  "/mardi-heli-tour",
  "/poonhill-ghandruk-helicopter-tour",
  "/kapuche-helicopter-tour",
  "/kori-helicopter-tour",
  "/muktinath-helicopter-tour",
] as const;

export const featuredHeliTours = featuredHrefs.map((href) => {
  const tour = heliTours.find((item) => item.href === href);
  if (!tour) {
    throw new Error(`Missing featured heli tour: ${href}`);
  }
  return tour;
});
