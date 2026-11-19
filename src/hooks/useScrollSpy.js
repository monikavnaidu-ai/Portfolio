import { useEffect, useRef, useState } from 'react';

/**
 * useScrollSpy(sectionIds)
 * Returns the id of the active section based on scroll position.
 * Uses a passive scroll listener — performant for long pages.
 */
export function useScrollSpy(sectionIds, navOffset = 70) {
  const [activeId, setActiveId] = useState('');

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      let active = '';
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        // Section is "active" when its top edge is within the scroll window
        if (el.offsetTop - navOffset <= scrollY + 5) active = id;
      }
      setActiveId((prev) => (prev === active ? prev : active));
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [sectionIds, navOffset]);

  return activeId;
}

export default useScrollSpy;
