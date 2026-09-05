import React from "react";

import { NavBar as NabBar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import JsonLd from "@/components/shared/JsonLd";
import { organizationJsonLd } from "@/lib/seo";

const SiteLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <JsonLd data={organizationJsonLd()} />
      <NabBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default SiteLayout;
