import { cn } from "@/lib/cn";

/**
 * Native <details> disclosure — used by FAQ entries and recipe steps.
 * The "+" rotates into an "×" when the panel opens.
 */
export function Disclosure({ summary, children, className, bodyClassName, ...props }) {
  return (
    <details className={cn("disclosure", className)} {...props}>
      <summary className="disclosure__summary">
        <span>{summary}</span>
        <span className="disclosure__icon" aria-hidden="true">
          +
        </span>
      </summary>
      <div className={cn("disclosure__body", bodyClassName)}>{children}</div>
    </details>
  );
}
