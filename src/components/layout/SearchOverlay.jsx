import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/cn";
import { Icon } from "@/lib/icons";
import { search } from "@/lib/search";
import { useScrollLock } from "@/hooks/useScrollLock";

const TYPE_ORDER = ["Product", "Recipe", "Store", "Role", "Page"];

/**
 * Full-screen search. Filters the whole site as you type and jumps straight
 * to the matching product, recipe, store, role or page.
 */
export function SearchOverlay({ open, onClose }) {
  const [query, setQuery] = useState("");
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useScrollLock(open);

  const results = useMemo(() => search(query), [query]);

  /* Group the hits so related results stay together. */
  const groups = useMemo(() => {
    const map = new Map();
    for (const entry of results) {
      if (!map.has(entry.type)) map.set(entry.type, []);
      map.get(entry.type).push(entry);
    }
    return TYPE_ORDER.filter((type) => map.has(type)).map((type) => ({
      type,
      entries: map.get(type),
    }));
  }, [results]);

  /* Escape closes, and "/" focuses the field from anywhere. */
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  /* Focus the input when it opens, and reset it when it closes. */
  useEffect(() => {
    if (open) {
      setQuery("");
      const timer = window.setTimeout(() => inputRef.current?.focus(), 60);
      return () => window.clearTimeout(timer);
    }
    return undefined;
  }, [open]);

  const go = (to) => {
    onClose();
    navigate(to);
  };

  return (
    <div
      className={cn(
        "fixed inset-0 z-[90]",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      inert={!open}
    >
      <div
        className={cn(
          "absolute inset-0 bg-ink/45 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />

      <div
        id="search-overlay"
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        className={cn(
          "absolute inset-x-0 top-0 mx-auto flex max-h-full w-full max-w-3xl flex-col",
          "border-b-2 border-ink bg-cream shadow-lift",
          "transition-transform duration-300 ease-out",
          open ? "translate-y-0" : "-translate-y-full",
        )}
      >
        {/* Field */}
        <div className="flex items-center gap-3 px-6 py-5">
          <Icon name="search" className="size-6 flex-none text-maroon" />

          <input
            ref={inputRef}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search flavors, recipes, stores, jobs…"
            aria-label="Search the site"
            className="w-full rounded-pill border-2 border-ink bg-white px-5 py-3 text-[1rem] text-ink placeholder:text-muted focus:outline-none focus:shadow-pop-sm"
          />

          <button
            type="button"
            onClick={onClose}
            aria-label="Close search"
            className="grid size-10 flex-none place-items-center rounded-full border-2 border-ink bg-yellow shadow-pop-sm transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5"
          >
            <Icon name="close" className="size-4" />
          </button>
        </div>

        {/* Results */}
        <div className="min-h-0 flex-1 overflow-y-auto border-t-2 border-ink bg-white px-6 py-5">
          {groups.length === 0 ? (
            <div className="grid justify-items-center gap-3 py-10 text-center">
              <span className="grid size-16 place-items-center rounded-full border-2 border-ink bg-yellow text-2xl">
                🔍
              </span>
              <p className="text-[1rem] font-semibold">No matches for &ldquo;{query}&rdquo;</p>
              <p className="max-w-[36ch] text-[0.9375rem] text-body">
                Try a flavor, a recipe, a shop or a job title.
              </p>
            </div>
          ) : (
            <div className="grid gap-6">
              {groups.map((group) => (
                <section key={group.type}>
                  <h2 className="mb-3 text-[0.8125rem] font-semibold tracking-[0.06em] text-muted uppercase">
                    {group.type}
                    <span className="ml-2 text-ink/40">{group.entries.length}</span>
                  </h2>

                  <ul className="grid gap-2">
                    {group.entries.map((entry) => (
                      <li key={`${entry.type}-${entry.title}`}>
                        <button
                          type="button"
                          onClick={() => go(entry.to)}
                          className="group flex w-full items-center gap-4 rounded-card border-2 border-transparent px-3 py-2 text-left transition-colors hover:border-ink hover:bg-cream"
                        >
                          {entry.image ? (
                            <img
                              src={entry.image}
                              alt=""
                              className="size-12 flex-none rounded-card border-2 border-ink bg-cream object-contain"
                            />
                          ) : (
                            <span className="grid size-12 flex-none place-items-center rounded-card border-2 border-ink bg-cream">
                              <Icon
                                name={
                                  entry.type === "Store"
                                    ? "pin"
                                    : entry.type === "Role"
                                      ? "briefcase"
                                      : entry.type === "Recipe"
                                        ? "bowl"
                                        : "leaf"
                                }
                                className="size-5"
                              />
                            </span>
                          )}

                          <span className="grid flex-1 gap-0.5">
                            <span className="text-[1rem] font-semibold">{entry.title}</span>
                            {entry.text && (
                              <span className="truncate text-[0.8125rem] text-muted">
                                {entry.text}
                              </span>
                            )}
                            {/* On narrow screens the meta drops below the title
                                so the title keeps the full width. */}
                            {entry.meta && (
                              <span className="text-[0.8125rem] font-medium text-body sm:hidden">
                                {entry.meta}
                              </span>
                            )}
                          </span>

                          {entry.meta && (
                            <span className="hidden text-[0.8125rem] font-medium whitespace-nowrap text-body sm:block">
                              {entry.meta}
                            </span>
                          )}

                          <Icon
                            name="arrowRight"
                            className="size-4 flex-none text-muted transition-transform duration-200 group-hover:translate-x-1"
                          />
                        </button>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
