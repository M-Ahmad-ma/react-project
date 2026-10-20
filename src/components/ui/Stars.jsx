import { Icon } from "@/lib/icons";

/** Five-star rating, readable by screen readers. */
export function Stars({ count = 5, label }) {
  return (
    <div
      className="stars inline-flex gap-0.5 text-gold"
      role="img"
      aria-label={label ?? `${count} out of 5 stars`}
    >
      {Array.from({ length: count }, (_, index) => (
        <Icon key={index} name="star" className="size-[1.05rem] shrink-0" />
      ))}
    </div>
  );
}
