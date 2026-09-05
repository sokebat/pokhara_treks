import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterLinkColumnProps {
  title: string;
  links: FooterLink[];
}

const FooterLinkColumn = ({ title, links }: FooterLinkColumnProps) => {
  return (
    <div>
      <h3 className="text-sm font-semibold tracking-wide text-primary-foreground uppercase">
        {title}
      </h3>
      <ul className="mt-4 flex flex-col gap-2.5">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="text-sm text-primary-foreground/75 transition-colors hover:text-primary-foreground"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkColumn;
