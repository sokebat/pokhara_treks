export interface NavLeaf {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  href?: string;
  children: NavLeaf[];
}

export type NavItem =
  | {
      type: "link";
      label: string;
      href: string;
    }
  | {
      type: "simple";
      label: string;
      href: string;
      allLabel?: string;
      children: NavLeaf[];
    }
  | {
      type: "mega";
      label: string;
      href: string;
      groups: NavGroup[];
    };
