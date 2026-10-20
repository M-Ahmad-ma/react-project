import { cn } from "@/lib/cn";
import { Icon } from "@/lib/icons";

/** Yellow disc that holds a feature or contact icon. */
export function IconBubble({ name, className, iconClassName = "size-7" }) {
  return (
    <span
      className={cn(
        "grid size-14 flex-none place-items-center rounded-full border-2 border-ink bg-yellow shadow-pop-sm",
        className,
      )}
    >
      <Icon name={name} className={iconClassName} />
    </span>
  );
}
