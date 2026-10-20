import { Link } from "react-router-dom";
import { cn } from "@/lib/cn";

const VARIANTS = {
  solid: "bg-yellow text-ink",
  ghost: "bg-white text-ink",
  maroon: "bg-maroon text-white",
  ink: "bg-ink text-yellow",
  pink: "bg-pink text-ink",
};

const SIZES = {
  md: "min-h-[3.375rem] px-[1.85rem] text-[1rem]",
  sm: "min-h-[2.875rem] px-[1.4rem] text-[0.9375rem]",
  lg: "min-h-[3.5rem] px-8 text-[1.0625rem]",
};

/**
 * The brand's signature button: 2px black outline, pill shape and a hard
 * offset shadow that grows on hover and collapses on press.
 */
export function Button({
  as,
  to,
  href,
  variant = "solid",
  size = "md",
  caps = false,
  block = false,
  className,
  children,
  ...props
}) {
  const Component = as ?? (to ? Link : href ? "a" : "button");

  const extras = {};
  if (Component === Link) extras.to = to;
  else if (Component === "a") extras.href = href;
  else if (!props.type) extras.type = props.type ?? "button";

  return (
    <Component
      className={cn(
        "btn inline-flex items-center justify-center gap-2 rounded-pill border-2 border-ink font-semibold leading-none whitespace-nowrap",
        "shadow-pop transition-[transform,box-shadow,background-color] duration-200 ease-out",
        "hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_var(--color-ink)]",
        "active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0_0_var(--color-ink)]",
        "disabled:pointer-events-none disabled:opacity-60",
        VARIANTS[variant],
        SIZES[size],
        caps && "text-[0.8125rem] tracking-[0.06em] uppercase",
        block && "w-full",
        className,
      )}
      {...extras}
      {...props}
    >
      {children}
    </Component>
  );
}
