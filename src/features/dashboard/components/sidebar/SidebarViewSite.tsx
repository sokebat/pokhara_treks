"use client";

import { TbExternalLink } from "react-icons/tb";
import Link from "next/link";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const SidebarViewSite = () => {
  const { state } = useSidebar();

  return (
    <SidebarGroup>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton
            tooltip={state === "collapsed" ? "View website" : undefined}
            render={<Link href="/" target="_blank" rel="noopener noreferrer" />}
            className="font-heading"
          >
            <TbExternalLink />
            <span>View website</span>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default SidebarViewSite;
