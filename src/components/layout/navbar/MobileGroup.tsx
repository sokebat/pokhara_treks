"use client";

import { TbChevronRight } from "react-icons/tb";
import * as React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { type NavGroup } from "@/constant/nav";

interface MobileGroupProps {
  group: NavGroup;
  onNavigate: () => void;
}

const MobileGroup = ({ group, onNavigate }: MobileGroupProps) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full cursor-pointer items-center justify-between px-6 py-2 text-left text-sm font-medium text-foreground"
      >
        {group.label}
        <TbChevronRight
          className={cn(
            "size-3.5 shrink-0 text-muted-foreground transition-transform",
            open && "rotate-90",
          )}
        />
      </button>
      {open && (
        <ul className="flex flex-col pb-1">
          {group.children.map((leaf) => (
            <li key={leaf.href}>
              <Link
                href={leaf.href}
                onClick={onNavigate}
                className="block px-8 py-1.5 text-sm text-muted-foreground hover:text-accent"
              >
                {leaf.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MobileGroup;
