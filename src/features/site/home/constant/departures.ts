export type Departure = {
  trek: string;
  href: string;
  departs: string;
  returns: string;
  grade: string;
  seatsLeft: number;
  price: number;
};

export const departures: Departure[] = [
  {
    trek: "Annapurna Base Camp Trek",
    href: "/annapurna-base-camp-trek",
    departs: "12 Sep 2026",
    returns: "18 Sep 2026",
    grade: "Moderate",
    seatsLeft: 4,
    price: 475,
  },
  {
    trek: "Mardi Himal Trek",
    href: "/mardi-himal-trek",
    departs: "20 Sep 2026",
    returns: "24 Sep 2026",
    grade: "Moderate",
    seatsLeft: 6,
    price: 385,
  },
  {
    trek: "Ghorepani Poon Hill Trek",
    href: "/poonhill-trek-from-pokhara",
    departs: "3 Oct 2026",
    returns: "6 Oct 2026",
    grade: "Easy to Moderate",
    seatsLeft: 8,
    price: 295,
  },
  {
    trek: "Annapurna Circuit Trek",
    href: "/annapurna-circuit-trek",
    departs: "10 Oct 2026",
    returns: "22 Oct 2026",
    grade: "Challenging",
    seatsLeft: 3,
    price: 850,
  },
  {
    trek: "Upper Mustang Trek",
    href: "/upper-mustang-trek-nepal",
    departs: "15 Oct 2026",
    returns: "26 Oct 2026",
    grade: "Moderate",
    seatsLeft: 5,
    price: 990,
  },
];
