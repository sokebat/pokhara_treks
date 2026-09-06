import React from "react";
import { SessionProvider } from "next-auth/react";
import type { Metadata } from "next";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import DashboardHeader from "@/features/dashboard/components/DashboardHeader";
import { AppSidebar } from "@/features/dashboard/components/sidebar/AppSidebar";

export const metadata: Metadata = {
  title: "Dashboard",
  robots: { index: false, follow: false },
};

const AdminLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <SessionProvider session={null} refetchOnWindowFocus={false}>
      <SidebarProvider
        className="bg-background"
        style={{ "--sidebar-width": "17.5rem" } as React.CSSProperties}
      >
        <AppSidebar />
        <SidebarInset>
          <DashboardHeader />
          <div className="flex flex-1 flex-col gap-4 p-4 md:p-6">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </SessionProvider>
  );
};

export default AdminLayout;
