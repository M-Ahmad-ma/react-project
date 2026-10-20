import { cn } from "@/lib/cn";

/**
 * Scalloped band — the pink shape with half-circle bumps along the top and
 * bottom edge. The bumps sit outside the box, so the wrapper never clips.
 */
export function Scallop({ children, className, ...props }) {
  return (
    <section
      className={cn(
        "relative mt-16 bg-pink pt-[calc(26px+3rem)] pb-16",
        className,
      )}
      {...props}
    >
      <span className="scallop-edge scallop-edge--top" aria-hidden="true" />
      {children}
      <span className="scallop-edge scallop-edge--bottom" aria-hidden="true" />
    </section>
  );
}
