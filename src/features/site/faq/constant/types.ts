export interface FaqSection {
  heading?: string;
  paragraph?: string;
  list?: string[];
}

export interface FaqItem {
  id: string;
  category: string;
  question: string;
  sections: FaqSection[];
}

export const faqCategories = [
  "Trip Preparation",
  "Booking & Payments",
  "Documents & Permits",
] as const;
