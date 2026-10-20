import { cn } from "@/lib/cn";

/** Shared field styling — 2px outline, rounded, brand focus shadow. */
const fieldBase =
  "w-full rounded-[0.75rem] border-2 border-ink bg-white text-[0.9375rem] text-ink transition-shadow duration-200 focus:outline-none focus:shadow-pop-sm";

export const inputClass = `${fieldBase} px-[1.1rem] py-[0.85rem]`;

/** The select reserves room on the right for the custom chevron. */
export const selectClass = `${fieldBase} py-[0.85rem] pl-[1.1rem] pr-[2.75rem] select-field`;

export function Field({ label, htmlFor, hint, className, children }) {
  return (
    <div className={cn("grid gap-2", className)}>
      <label
        htmlFor={htmlFor}
        className="text-[0.8125rem] font-semibold tracking-[0.06em] text-muted uppercase"
      >
        {label}
      </label>

      {children}

      {hint && <p className="text-[0.8125rem] text-muted">{hint}</p>}
    </div>
  );
}
