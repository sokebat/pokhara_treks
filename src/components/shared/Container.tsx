import React from "react";

const Container = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <section className="max-w-[1600px] mx-auto px-2 md:px-4">{children}</section>;
};

export default Container;
