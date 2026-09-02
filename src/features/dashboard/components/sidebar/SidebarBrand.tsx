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
  <SidebarHeader>
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          render={<Link href="/dashboard" />}
          className="group-data-[collapsible=icon]:p-0!"
        >
          {/* Expanded: full wordmark */}
          <Image
            src={logo["logo-lg"]}
            alt="Pokhara Treks & Expeditions"
            width={2027}
            height={464}
            priority
            className="h-8 w-auto shrink-0 group-data-[collapsible=icon]:hidden"
          />

          {/* Collapsed: cropped mark */}
          <div className="relative hidden size-8 shrink-0 overflow-hidden rounded-md group-data-[collapsible=icon]:block">
            <Image
              src={logo["logo-lg"]}
              alt="Pokhara Treks & Expeditions"
              fill
              className="object-cover object-left"
            />
          </div>
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  </SidebarHeader>
);

export default SidebarBrand;
