import React from "react";

import { NavBar as NabBar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const SiteLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <NabBar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default SiteLayout;
