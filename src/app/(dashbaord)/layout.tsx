import React from "react";
import { SessionProvider } from "next-auth/react";

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SessionProvider session={null} refetchOnWindowFocus={false}>
      <main>{children}</main>
    </SessionProvider>
  );
};

export default AdminLayout;
