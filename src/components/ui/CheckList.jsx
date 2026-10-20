import { cn } from "@/lib/cn";
import { Icon } from "@/lib/icons";

/**
 * Checklist with the maroon tick bullet used across the flavour band,
 * story, values and job pages.
 */
export function CheckList({ items, tight = false, className, itemClassName, columns }) {
  return (
    <ul
      className={cn(
        "grid gap-3",
        tight && "gap-2",
        columns === 2 && "max-w-[56rem] mx-auto grid-cols-1 sm:grid-cols-2",
        className,
      )}
    >
      {items.map((item, index) => (
        <li
          key={index}
          className={cn("flex items-start gap-3 text-[0.9375rem]", itemClassName)}
        >
          <span className="mt-[0.2rem] grid size-5 flex-none place-items-center rounded-full bg-maroon text-white">
            <Icon name="check" className="size-3" />
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
