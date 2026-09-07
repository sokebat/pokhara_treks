"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { NavigationMenuTrigger } from "@/components/ui/navigation-menu";

import { navBarItemClass } from "./nav-item-style";

type NavParentTriggerProps = {
  href: string;
  children: ReactNode;
};

const NavParentTrigger = ({ href, children }: NavParentTriggerProps) => {
  const router = useRouter();

  return (
    <NavigationMenuTrigger
      nativeButton={false}
      render={<Link href={href} />}
      className={navBarItemClass}
      onClick={(event) => {
        if (event.button !== 0) return;

        if (event.metaKey || event.ctrlKey || event.shiftKey) {
          window.open(href, "_blank", "noopener,noreferrer");
          return;
        }

        router.push(href);
      }}
    >
      {children}
    </NavigationMenuTrigger>
  );
};

export default NavParentTrigger;
