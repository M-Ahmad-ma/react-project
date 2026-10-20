import { cn } from "@/lib/cn";

/**
 * Portrait avatar.
 *
 * Falls back to a branded monogram disc when no photograph is available —
 * the three shipped avatars cover only part of the team.
 */
export function Avatar({ src, initials, alt = "", className = "size-12", tone = "maroon" }) {
  if (src) {
    return <img src={src} alt={alt} className={cn(className, "rounded-full object-cover")} />;
  }

  return (
    <span
      role="img"
      aria-label={alt || undefined}
      className={cn(
        className,
        "grid place-items-center rounded-full border-2 border-ink font-semibold",
        tone === "maroon" ? "bg-maroon text-yellow" : "bg-yellow text-ink",
      )}
    >
      {initials}
    </span>
  );
}
