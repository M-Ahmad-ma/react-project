import { useEffect } from "react";

/** Per-page document title + meta description. */
export function Seo({ title, description }) {
  useEffect(() => {
    document.title = title;

    if (!description) return;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", description);
  }, [title, description]);

  return null;
}
