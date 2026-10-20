import { cn } from "@/lib/cn";
import { Icon } from "@/lib/icons";

/** Small cream pill used for recipe meta and inline metadata. */
export function Tag({ icon, children, className }) {
  return (
    <span
      className={cn(
        "tag inline-flex items-center gap-1 rounded-pill border border-ink/15 bg-cream px-[0.7rem] py-0.25 text-[0.8125rem] font-medium leading-[1.6] whitespace-nowrap text-body",
        className,
      )}
    >
      {icon && <Icon name={icon} className="size-[0.85rem] flex-none" />}
      {children}
    </span>
  );
}
