import type { FaqSection } from "@/features/site/faq/constant/faq";

const FaqAnswer = ({ sections }: { sections: FaqSection[] }) => (
  <div className="flex flex-col gap-4 text-muted-foreground">
    {sections.map((section, index) => (
      <div key={section.heading ?? index}>
        {section.heading && (
          <h3 className="mb-1.5 text-sm font-semibold text-foreground">
            {section.heading}
          </h3>
        )}
        {section.paragraph && <p>{section.paragraph}</p>}
        {section.list && (
          <ul className="mt-1.5 flex flex-col gap-1.5">
            {section.list.map((item) => (
              <li key={item} className="flex gap-2">
                <span
                  aria-hidden
                  className="mt-2 size-1 shrink-0 rounded-full bg-accent"
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </div>
);

export default FaqAnswer;
