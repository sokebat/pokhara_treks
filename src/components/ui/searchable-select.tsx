"use client";

import type { LucideIcon } from "lucide-react";

import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import { InputGroupAddon } from "@/components/ui/input-group";
import { cn } from "@/lib/utils";

type SearchableSelectProps = {
  id?: string;
  items: string[];
  value: string | null;
  onValueChange: (value: string | null) => void;
  placeholder?: string;
  emptyText?: string;
  icon?: LucideIcon;
  className?: string;
  "aria-invalid"?: boolean;
};

const SearchableSelect = ({
  id,
  items,
  value,
  onValueChange,
  placeholder = "Search...",
  emptyText = "No results found.",
  icon: Icon,
  className,
  ...props
}: SearchableSelectProps) => (
  <Combobox items={items} value={value} onValueChange={onValueChange}>
    <ComboboxInput
      id={id}
      placeholder={placeholder}
      showClear
      className={cn("h-14 w-full rounded-md", className)}
      {...props}
    >
      {Icon && (
        <InputGroupAddon align="inline-start">
          <Icon className="size-4 text-muted-foreground" />
        </InputGroupAddon>
      )}
    </ComboboxInput>

    <ComboboxContent>
      <ComboboxEmpty>{emptyText}</ComboboxEmpty>
      <ComboboxList>
        {(item: string) => (
          <ComboboxItem key={item} value={item}>
            {item}
          </ComboboxItem>
        )}
      </ComboboxList>
    </ComboboxContent>
  </Combobox>
);

export default SearchableSelect;
