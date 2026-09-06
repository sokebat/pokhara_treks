import Link from "next/link";

import Logo from "@/components/shared/Logo";
import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const SidebarBrand = () => (
  <SidebarHeader className="h-14 justify-center border-b-2 border-sidebar-border">
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          render={<Link href="/" aria-label="Home" />}
          className="h-10 gap-2 group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-0!"
        >
          <span className="hidden size-8 shrink-0 items-center justify-center rounded-md bg-primary font-heading text-xs font-bold text-primary-foreground group-data-[collapsible=icon]:flex">
            PT
          </span>

          <Logo
            href={false}
            priority
            className="h-8 w-auto max-w-full group-data-[collapsible=icon]:hidden"
          />
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarHeader>
);

export default SidebarBrand;
