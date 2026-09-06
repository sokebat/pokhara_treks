import Image from "next/image";
import Link from "next/link";

import {
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { logo } from "@/constant/image";

const SidebarBrand = () => (
  <SidebarHeader className="border-b-2 border-sidebar-border">
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          render={<Link href="/dashboard" />}
          className="h-12 gap-2.5 group-data-[collapsible=icon]:p-0!"
        >
          <span className="hidden size-8 shrink-0 items-center justify-center rounded-md bg-primary font-heading text-xs font-bold text-primary-foreground group-data-[collapsible=icon]:flex">
            PT
          </span>

          <div className="grid min-w-0 flex-1 text-left leading-tight group-data-[collapsible=icon]:hidden">
            <Image
              src={logo["logo-lg"]}
              alt="Pokhara Treks & Expeditions"
              width={2027}
              height={464}
              priority
              className="h-7 w-auto max-w-full object-contain object-left"
            />
            <span className="font-heading mt-0.5 text-[0.65rem] font-semibold tracking-[0.16em] text-gold uppercase">
              Dashboard
            </span>
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarHeader>
);

export default SidebarBrand;
