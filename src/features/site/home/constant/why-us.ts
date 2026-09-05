import {
  TbCreditCard,
  TbMapPin,
  TbShieldCheck,
  TbTent,
  TbUsersGroup,
  TbWallet,
} from "react-icons/tb";
import type { IconType } from "react-icons";

export type Reason = {
  title: string;
  description: string;
  icon: IconType;
};

export const reasons: Reason[] = [
  {
    title: "Based in Lakeside, not an agent",
    description:
      "Our office is a ten minute walk from your hotel and the trail starts at our door. Nobody in another country is reselling us.",
    icon: TbMapPin,
  },
  {
    title: "Women-led and women-staffed",
    description:
      "Owned by women, guided by women, and the office you email is run by the same people who walk with you.",
    icon: TbUsersGroup,
  },
  {
    title: "Small groups and private departures",
    description:
      "Maximum eight walkers on a group departure. Private and family departures on any date you choose.",
    icon: TbTent,
  },
  {
    title: "Licensed guides, insured, first-aid trained",
    description:
      "Every guide carries a government licence number, and we publish it on their profile page.",
    icon: TbShieldCheck,
  },
  {
    title: "Every rupee stays with local women",
    description:
      "Wages, training and insurance go to women from these valleys and their families. Nothing leaves the district.",
    icon: TbWallet,
  },
  {
    title: "Book direct and pay less",
    description:
      "The same trek booked through an overseas agent commonly costs 30 to 60 per cent more. Here, no one takes a cut.",
    icon: TbCreditCard,
  },
];

export const whyUsStats = [
  { value: "12", label: "Licensed women guides and porters" },
  { value: "30+", label: "Trips running from Pokhara" },
  { value: "8", label: "Maximum group size, always" },
  { value: "100%", label: "Locally owned and women-led" },
];
