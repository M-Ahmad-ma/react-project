import { useEffect, useState } from "react";

/**
 * Highlight the nav link whose section is currently in view.
 *
 * `sections` is a list of { id, navTo } pairs. The link whose navTo matches
 * the visible section wins.
 */
export function useScrollSpy(sections, { rootMargin = "-45% 0px -50% 0px" } = {}) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    if (!sections.length || !("IntersectionObserver" in window)) return;

    const elements = sections
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    if (!elements.length) return;

    const visible = new Set();

    const sync = () => {
      const match = elements.find((element) => visible.has(element));
      setActiveId(match ? match.id : null);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) =>
          entry.isIntersecting ? visible.add(entry.target) : visible.delete(entry.target),
        );
        sync();
      },
      { rootMargin },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [sections, rootMargin]);

  return activeId;
}
