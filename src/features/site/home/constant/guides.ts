import { WOMEN_TREK_PHOTO } from "@/constant/photos";

export type Guide = {
  name: string;
  role: string;
  licence: string;
  years: string;
  routes: string;
  languages: string;
  image: string;
};

export const guides: Guide[] = [
  {
    name: "Anita Gurung",
    role: "Founder & Lead Guide",
    licence: "NTB-00214",
    years: "14 years",
    routes: "Annapurna, Mustang",
    languages: "Nepali, English, Hindi",
    image: WOMEN_TREK_PHOTO,
  },
  {
    name: "Maya Tamang",
    role: "Senior Trekking Guide",
    licence: "NTB-00389",
    years: "9 years",
    routes: "Base Camp, Mardi Himal",
    languages: "Nepali, English",
    image: WOMEN_TREK_PHOTO,
  },
  {
    name: "Sunita Rai",
    role: "Guide & First-Aid Lead",
    licence: "NTB-00456",
    years: "6 years",
    routes: "Poon Hill, Khopra Danda",
    languages: "Nepali, English, Japanese",
    image: WOMEN_TREK_PHOTO,
  },
  {
    name: "Deepa Thapa",
    role: "Trekking Guide, Annapurna Circuit",
    licence: "NTB-00512",
    years: "5 years",
    routes: "Circuit, Tilicho, Manaslu",
    languages: "Nepali, English, German",
    image: WOMEN_TREK_PHOTO,
  },
];
