import { cn } from "@/lib/cn";

/** Filter chip — the small pill used to switch product / job categories. */
export function Chip({ active = false, className, children, ...props }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      className={cn(
        "chip rounded-pill border-2 border-ink px-[1.15rem] py-2 text-[0.9375rem] font-medium leading-[1.2]",
        "shadow-[2px_2px_0_0_var(--color-ink)] transition-[background-color,color,transform] duration-200 ease-out",
        "hover:-translate-x-px hover:-translate-y-px",
        active ? "is-active bg-ink text-yellow" : "bg-white text-ink",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
