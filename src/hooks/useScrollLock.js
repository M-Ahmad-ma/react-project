import { useEffect } from "react";

/* Several overlays can be open at once (mobile nav + cart + search), so the
   lock is reference counted rather than a simple boolean. */
let lockCount = 0;

/**
 * Prevent the page behind an overlay from scrolling.
 * Pass `active` to hold the lock; the lock releases on unmount.
 */
export function useScrollLock(active) {
  useEffect(() => {
    if (!active) return undefined;

    lockCount += 1;
    document.body.classList.add("is-locked");

    return () => {
      lockCount = Math.max(0, lockCount - 1);
      if (lockCount === 0) document.body.classList.remove("is-locked");
    };
  }, [active]);
}
