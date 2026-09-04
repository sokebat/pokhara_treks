import React from "react";

const Container = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <section className="mx-auto max-w-[1600px] px-4 md:px-6">
      {children}
    </section>
  );
};

export default Container;
