"use client";

import { useSession, signOut } from "next-auth/react";
import { LogOutIcon, UserIcon } from "lucide-react";

import {
  SidebarFooter,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const SidebarUserMenu = () => {
  const { data: session } = useSession();

  if (!session?.user) return null;

  return (
    <SidebarFooter>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" className="cursor-default">
            <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
              <UserIcon className="size-4" />
            </div>
            <div className="flex min-w-0 flex-col gap-0.5 leading-none">
              <span className="truncate font-medium">
                {session.user.name ?? session.user.email}
              </span>
              <span className="truncate text-xs text-muted-foreground">
                {session.user.email}
              </span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <SidebarMenuButton
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="cursor-pointer text-destructive hover:text-destructive"
          >
            <LogOutIcon className="size-4" />
            Sign Out
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>
    </SidebarFooter>
  );
};

export default SidebarUserMenu;
