import { slugify } from "@/lib/utils";
import type { LegalPage } from "@/constant/legal";

interface LegalTocProps {
  page: LegalPage;
}

const LegalToc = ({ page }: LegalTocProps) => {
  const headings = page.sections
    .map((section) => section.heading)
    .filter((heading): heading is string => Boolean(heading));

  return (
    <nav className="sticky top-24 hidden lg:block">
      <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
        On This Page
      </p>
      <ul className="mt-4 flex flex-col gap-1 border-l border-border">
        {headings.map((heading) => (
          <li key={heading}>
            <a
              href={`#${slugify(heading)}`}
              className="block border-l-2 border-transparent py-1.5 pl-4 text-sm text-muted-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {heading}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default LegalToc;
