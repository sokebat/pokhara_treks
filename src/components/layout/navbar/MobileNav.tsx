"use client";

import * as React from "react";
import Link from "next/link";
import { MenuIcon } from "lucide-react";

import { navItems } from "@/constant/nav";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo, MobileNavItem } from "@/components/layout/navbar";

const MobileNav = () => {
  const [open, setOpen] = React.useState(false);
  const close = React.useCallback(() => setOpen(false), []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={<Button variant="ghost" size="icon" aria-label="Open menu" />}
        className="md:hidden"
      >
        <MenuIcon className="size-5" />
      </SheetTrigger>
      <SheetContent side="right" className="w-5/6 gap-0 p-0">
        <SheetHeader className="flex-row items-center border-b border-border py-5">
          <Logo className="h-16 w-auto" onClick={close} />
          <SheetTitle className="sr-only">Site navigation</SheetTitle>
        </SheetHeader>
        <nav className="flex-1 overflow-y-auto">
          {navItems.map((item) => (
            <MobileNavItem key={item.label} item={item} onNavigate={close} />
          ))}
        </nav>
        <div className="border-t border-border p-4">
          <Button
            nativeButton={false}
            render={<Link href="/customize-my-trip" onClick={close} />}
            size="lg"
            className="w-full rounded-md"
          >
            Plan Your Trip
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
