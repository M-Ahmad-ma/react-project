import { cn } from "@/lib/cn";

/** Centred heading block reused by every section. */
export function SectionHead({ title, text, className, titleClassName, children }) {
  return (
    <header className={cn("mb-12 grid justify-items-center gap-3 text-center", className)}>
      <h2 className={cn("text-section leading-[1.22]", titleClassName)}>{title}</h2>
      {text && <p className="max-w-[42ch] text-muted">{text}</p>}
      {children}
    </header>
  );
}
