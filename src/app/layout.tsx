import type { Metadata } from "next";

import { Plus_Jakarta_Sans } from "next/font/google";

import "./globals.css";

import { TooltipProvider } from "@/components/ui/tooltip";
import { siteInfo } from "@/constant/site";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteInfo.url),
  title: {
    default: "Pokhara Treks & Expeditions | Women-Led Nepal Trekking",
    template: "%s | Pokhara Treks & Expeditions",
  },
  description:
    "Women-led Nepal adventures, trekking and expeditions from Pokhara.",
  applicationName: siteInfo.name,
  authors: [{ name: siteInfo.name, url: siteInfo.url }],
  creator: siteInfo.name,
  publisher: siteInfo.name,
  category: "travel",
  keywords: [
    "Nepal trekking",
    "Pokhara Treks",
    "women-led trekking",
    "Annapurna trek",
    "Everest trek",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: siteInfo.locale,
    siteName: siteInfo.name,
    url: siteInfo.url,
    title: "Pokhara Treks & Expeditions | Women-Led Nepal Trekking",
    description:
      "Women-led Nepal adventures, trekking and expeditions from Pokhara.",
    images: [
      {
        url: siteInfo.ogImage,
        width: 1200,
        height: 630,
        alt: "Women trekking in the Himalaya with Pokhara Treks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pokhara Treks & Expeditions | Women-Led Nepal Trekking",
    description:
      "Women-led Nepal adventures, trekking and expeditions from Pokhara.",
    images: [siteInfo.ogImage],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  other: {
    "geo.region": "NP-P4",
    "geo.placename": "Pokhara",
    "geo.position": `${siteInfo.geo.latitude};${siteInfo.geo.longitude}`,
    ICBM: `${siteInfo.geo.latitude}, ${siteInfo.geo.longitude}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}
