import type { ComponentProps } from "react";

import { Sidebar } from "@/components/ui/sidebar";
import SidebarUserMenu from "@/features/auth/components/SidebarUserMenu";
import SidebarBrand from "@/features/dashboard/components/sidebar/SidebarBrand";
import SidebarNav from "@/features/dashboard/components/sidebar/SidebarNav";

export function AppSidebar({ ...props }: ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="floating" collapsible="icon" {...props}>
      <SidebarBrand />
      <SidebarNav />
      <SidebarUserMenu />
    </Sidebar>
  );
}
