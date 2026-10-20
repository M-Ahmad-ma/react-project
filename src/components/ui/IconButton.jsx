import { cn } from "@/lib/cn";
import { Icon } from "@/lib/icons";

/** Round icon button — same outline + hard shadow language as the CTA button. */
export function IconButton({
  name,
  label,
  badge,
  className,
  iconClassName = "size-5",
  children,
  ...props
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className={cn(
        "icon-btn relative grid size-11 place-items-center rounded-full border-2 border-ink bg-yellow",
        "shadow-pop-sm transition-[transform,box-shadow] duration-200 ease-out",
        "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0_0_var(--color-ink)]",
        "active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",
        className,
      )}
      {...props}
    >
      {children ?? <Icon name={name} className={iconClassName} />}

      {badge > 0 && (
        <span
          key={badge}
          className="icon-btn__badge absolute -top-1.5 -right-1.5 grid h-5 min-w-5 place-items-center rounded-pill bg-maroon px-1 text-[0.6875rem] font-bold leading-none text-white animate-[badge-pop_0.3s_var(--ease-out)]"
        >
          {badge}
        </span>
      )}
    </button>
  );
}
