import { useEffect, useState } from "react";
import type { SectionId } from "../data/portfolio";

export function useActiveSection(sectionIds: readonly SectionId[]) {
  const [active, setActive] = useState<SectionId>(sectionIds[0]);

  useEffect(() => {
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const visibility = new Map<SectionId, number>();

    const pickActive = () => {
      let bestId = sectionIds[0];
      let bestRatio = -1;
      sectionIds.forEach((id) => {
        const ratio = visibility.get(id) ?? 0;
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestId = id;
        }
      });
      setActive(bestId);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id as SectionId;
          if (sectionIds.includes(id)) {
            visibility.set(id, entry.intersectionRatio);
          }
        });
        pickActive();
      },
      {
        threshold: [0, 0.15, 0.35, 0.55, 0.75, 1],
        rootMargin: "-10% 0px -45% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}
