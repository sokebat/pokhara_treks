import type { Metadata } from "next";

import ContactView from "@/features/contact/components/ContactView";
import { getPageSeo } from "@/lib/seo";

export const metadata: Metadata = getPageSeo("/contact");

export default function ContactPage() {
  return <ContactView />;
}
