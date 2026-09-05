"use client";

import * as React from "react";

type UseListingSectionNavOptions = {
  pathname: string;
  headerId: string;
  sectionIds: string[];
};

export function useListingSectionNav({
  pathname,
  headerId,
  sectionIds,
}: UseListingSectionNavOptions) {
  const [active, setActive] = React.useState("");
  const listRef = React.useRef<HTMLUListElement>(null);
  const idsKey = sectionIds.join("|");

  const goTo = React.useCallback(
    (id: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault();
      const next = id === headerId ? "" : id;
      setActive(next);
      window.history.replaceState(
        null,
        "",
        id === headerId ? pathname : `${pathname}#${id}`,
      );
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    },
    [headerId, pathname],
  );

  React.useEffect(() => {
    const top = document.getElementById(headerId);
    const observed = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    const scrollToHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;

      const target = document.getElementById(hash);
      if (!target) return;

      setActive(hash === headerId ? "" : hash);
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        const id = visible[0]?.target.id;
        if (!id) return;
        setActive(id === headerId ? "" : id);
      },
      { rootMargin: "-28% 0px -58% 0px", threshold: [0, 0.2, 0.5] },
    );

    if (top) observer.observe(top);
    observed.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, [headerId, idsKey, sectionIds]);

  React.useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const current = list.querySelector<HTMLElement>("[data-active=true]");
    current?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [active]);

  return { active, goTo, listRef };
}
