import { faqItemsPrep } from "./items-prep";
import { faqItemsRest } from "./items-rest";

export type { FaqItem, FaqSection } from "./types";
export { faqCategories } from "./types";

export const faqItems = [...faqItemsPrep, ...faqItemsRest];
