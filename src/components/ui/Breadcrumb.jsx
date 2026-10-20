import { Fragment } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/cn";

/** Home › Section trail shown at the top of every subpage. */
export function Breadcrumb({ items, className }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn(
        "mb-4 flex flex-wrap items-center gap-2 text-[0.8125rem] font-medium text-muted",
        className,
      )}
    >
      {items.map((item, index) => (
        <Fragment key={item.label}>
          {index > 0 && (
            <span className="opacity-60" aria-hidden="true">
              /
            </span>
          )}
          {item.to ? (
            <Link to={item.to} className="transition-colors hover:text-ink">
              {item.label}
            </Link>
          ) : (
            <span className="text-ink" aria-current="page">
              {item.label}
            </span>
          )}
        </Fragment>
      ))}
    </nav>
  );
}
