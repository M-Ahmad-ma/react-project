import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/cn";

/**
 * Wraps content in the site's scroll-reveal animation.
 * `delay` staggers siblings the same way the original `--reveal-delay` did.
 */
export function Reveal({ as: Tag = "div", delay = 0, className, children, ...rest }) {
  const [ref, visible] = useReveal();

  return (
    <Tag
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ "--reveal-delay": `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
