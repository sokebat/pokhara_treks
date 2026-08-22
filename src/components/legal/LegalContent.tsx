import { slugify } from "@/lib/utils";
import type { LegalPage } from "@/constant/legal";

interface LegalContentProps {
  page: LegalPage;
}

const LegalContent = ({ page }: LegalContentProps) => {
  return (
    <div className="flex flex-col gap-10">
      <p className="text-muted-foreground">{page.intro}</p>

      {page.sections.map((section, index) => (
        <div
          key={section.heading ?? index}
          id={section.heading ? slugify(section.heading) : undefined}
          className="scroll-mt-24 border-b border-border pb-10 last:border-b-0 last:pb-0"
        >
          {section.heading && (
            <h2 className="mb-4 text-xl font-bold text-foreground">
              {section.heading}
            </h2>
          )}

          {section.paragraph && (
            <p className="text-muted-foreground">{section.paragraph}</p>
          )}

          {section.items && (
            <div className="flex flex-col gap-4">
              {section.items.map((item) => (
                <p key={item.label ?? item.text} className="text-muted-foreground">
                  {item.label && (
                    <strong className="font-semibold text-foreground">
                      {item.label}{" "}
                    </strong>
                  )}
                  {item.text}
                </p>
              ))}
            </div>
          )}

          {section.list && (
            <ol className="flex list-decimal flex-col gap-4 pl-5 text-muted-foreground marker:font-semibold marker:text-accent">
              {section.list.map((item) => (
                <li key={item} className="pl-1.5">
                  {item}
                </li>
              ))}
            </ol>
          )}
        </div>
      ))}
    </div>
  );
};

export default LegalContent;
