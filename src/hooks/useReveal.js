import { useEffect, useRef, useState } from "react";

/**
 * Reveal an element the first time it scrolls into view.
 *
 * Mirrors the original IntersectionObserver behaviour:
 * threshold 0.15 with an -8% bottom margin, one-shot (we unobserve once
 * the element is visible so it never flickers back).
 */
export function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.unobserve(entry.target);
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}
