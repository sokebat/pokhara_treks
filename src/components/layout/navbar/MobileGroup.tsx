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
      <div className="flex items-center justify-between px-6 py-2">
        {group.href ? (
          <Link
            href={group.href}
            onClick={onNavigate}
            className="min-w-0 flex-1 text-left text-sm font-medium text-foreground hover:text-chart-2"
          >
            {group.label}
          </Link>
        ) : (
          <span className="min-w-0 flex-1 text-left text-sm font-medium text-foreground">
            {group.label}
          </span>
        )}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label={`${open ? "Collapse" : "Expand"} ${group.label}`}
          className="flex size-8 shrink-0 cursor-pointer items-center justify-center text-muted-foreground"
        >
          <TbChevronRight
            className={cn(
              "size-3.5 transition-transform",
              open && "rotate-90",
            )}
          />
        </button>
      </div>
      {open && (
        <ul className="flex flex-col pb-1">
          {group.children.map((leaf) => (
            <li key={leaf.href}>
              <Link
                href={leaf.href}
                onClick={onNavigate}
                className="block px-8 py-1.5 text-sm text-muted-foreground hover:text-chart-2"
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
