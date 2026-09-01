import React from "react";
import { SessionProvider } from "next-auth/react";

import { auth } from "@/features/auth/auth";

const AdminLayout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <main>{children}</main>
    </SessionProvider>
  );
};

export default AdminLayout;
