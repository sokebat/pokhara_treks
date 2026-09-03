import { slugify } from "@/lib/utils";
import type { LegalPage } from "@/features/legal/constant/legal";

interface LegalTocProps {
  page: LegalPage;
}

const LegalToc = ({ page }: LegalTocProps) => {
  const headings = page.sections
    .map((section) => section.heading)
    .filter((heading): heading is string => Boolean(heading));

  return (
    <nav className="sticky top-24 hidden w-full self-start rounded-md border border-border bg-card p-5 lg:block">
      <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
        On This Page
      </p>
      <ul className="mt-4 flex flex-col gap-1">
        {headings.map((heading) => (
          <li key={heading}>
            <a
              href={`#${slugify(heading)}`}
              className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-accent"
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
