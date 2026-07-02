import { useEffect, useState } from 'react';

export function useScrollSpy(
  ids: string[],
  options?: { threshold?: number; rootMargin?: string }
) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    // Use IntersectionObserver to determine which element is currently in view
    const observer = new IntersectionObserver(
      (entries) => {
        // Find entries that are intersecting
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        
        if (visibleEntries.length > 0) {
          // If we have intersecting elements, sort by how close they are to the top
          // or just select the first one intersecting
          setActiveId(visibleEntries[0].target.id);
        }
      },
      {
        threshold: options?.threshold ?? 0.15,
        rootMargin: options?.rootMargin ?? '-56px 0px -50% 0px', // accounts for sticky category nav (48px) + small buffer
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [ids, options?.threshold, options?.rootMargin]);

  return activeId;
}
