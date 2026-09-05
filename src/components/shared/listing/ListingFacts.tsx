import type { IconType } from "react-icons";

export type ListingFact = {
  icon: IconType;
  text: string;
};

type ListingFactsProps = {
  facts: ListingFact[];
};

const ListingFacts = ({ facts }: ListingFactsProps) => (
  <ul className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-muted-foreground">
    {facts.map((fact) => (
      <li key={fact.text} className="inline-flex min-w-0 items-center gap-1.5">
        <fact.icon className="size-3.5 shrink-0" />
        <span className="truncate">{fact.text}</span>
      </li>
    ))}
  </ul>
);

export default ListingFacts;
