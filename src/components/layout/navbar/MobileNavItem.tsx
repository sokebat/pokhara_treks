"use client";

import { TbChevronDown } from "react-icons/tb";
import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { type NavItem } from "@/constant/nav";
import { MobileGroup } from "@/components/layout/navbar";

interface MobileNavItemProps {
  item: NavItem;
  onNavigate: () => void;
}

const MobileNavItem = ({ item, onNavigate }: MobileNavItemProps) => {
  const [open, setOpen] = React.useState(false);

  if (item.type === "link") {
    return (
      <Link
        href={item.href}
        onClick={onNavigate}
        className="block border-b border-border px-4 py-3 text-sm font-semibold text-foreground"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="border-b border-border">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full cursor-pointer items-center justify-between px-4 py-3 text-left text-sm font-semibold text-foreground"
      >
        {item.label}
        <TbChevronDown
          className={cn(
            "size-4 shrink-0 text-muted-foreground transition-transform",
            open && "rotate-180",
          )}
        />
      </button>
      {open && (
        <div className="pb-2">
          {item.type === "simple" ? (
            <ul className="flex flex-col">
              {item.children.map((leaf) => (
                <li key={leaf.href}>
                  <Link
                    href={leaf.href}
                    onClick={onNavigate}
                    className="block px-6 py-2 text-sm text-muted-foreground hover:text-accent"
                  >
                    {leaf.label}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex flex-col">
              {item.groups.map((group) => (
                <MobileGroup
                  key={group.label}
                  group={group}
                  onNavigate={onNavigate}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MobileNavItem;
