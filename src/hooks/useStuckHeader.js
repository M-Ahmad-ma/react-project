import { useEffect, useState } from "react";

/**
 * Track whether the page has been scrolled past the header.
 *
 * Uses a scroll listener rather than the original sentinel element — same
 * result, less DOM churn.
 */
export function useStuckHeader(offset = 8) {
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > offset);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [offset]);

  return stuck;
}
