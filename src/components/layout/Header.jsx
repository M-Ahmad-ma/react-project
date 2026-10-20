import { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPortal } from "react-dom";
import { cn } from "@/lib/cn";
import { Icon } from "@/lib/icons";
import { NAV } from "@/data/site";
import { useCart } from "@/context/CartContext";
import { useStuckHeader } from "@/hooks/useStuckHeader";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { useScrollLock } from "@/hooks/useScrollLock";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import { CartDrawer } from "./CartDrawer";
import { SearchOverlay } from "./SearchOverlay";

/* Which home-page section lights up which nav item. */
const HOME_SECTIONS = [
  { id: "why", to: "/about" },
  { id: "flavors", to: "/flavors" },
  { id: "products", to: "/stores" },
  { id: "contact", to: "/contact" },
];

const NO_SECTIONS = [];

export function Header() {
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const stuck = useStuckHeader();
  const { count } = useCart();
  const { pathname } = useLocation();

  const activeSection = useScrollSpy(pathname === "/" ? HOME_SECTIONS : NO_SECTIONS);

  const closeCart = useCallback(() => setCartOpen(false), []);
  const closeSearch = useCallback(() => setSearchOpen(false), []);

  /* Close everything whenever the route changes. */
  useEffect(() => {
    setOpen(false);
    setCartOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  /* Close the mobile menu when the viewport grows past the breakpoint. */
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /* Escape closes the mobile menu. */
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  /* "/" opens the search overlay from anywhere, unless you are typing. */
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key !== "/" || event.metaKey || event.ctrlKey || event.altKey) return;

      const tag = document.activeElement?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;

      event.preventDefault();
      setSearchOpen(true);
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  /* Lock the page behind the open mobile menu. */
  useScrollLock(open);

  const isActive = (to) => {
    if (pathname === "/") {
      if (!activeSection) return false;
      return HOME_SECTIONS.find((section) => section.id === activeSection)?.to === to;
    }
    return pathname === to || pathname.startsWith(`${to}/`);
  };

  return (
    <>
      <header
        id="header"
        className={cn(
          "sticky top-0 z-50 border-b border-ink/[0.08] bg-white transition-shadow duration-300",
          stuck && "shadow-[0_8px_24px_-18px_rgb(26_26_26/55%)]",
        )}
      >
        <div className="container-x flex min-h-[4.5rem] items-center gap-6 max-[860px]:justify-between">
          <Link
            to="/"
            className="flex flex-none items-center max-[860px]:relative max-[860px]:z-[70]"
            aria-label="Crispo home"
          >
            <img src="/logo.png" alt="Crispo" width="77" height="34" className="h-auto w-[3.25rem]" />
          </Link>

          <nav
            id="nav"
            aria-label="Primary"
            className={cn(
              "mx-auto transition-transform duration-300 ease-out",
              "max-[860px]:fixed max-[860px]:inset-x-0 max-[860px]:top-0 max-[860px]:z-[60]",
              "max-[860px]:bg-white max-[860px]:border-b max-[860px]:border-ink/10",
              "max-[860px]:px-[clamp(1.25rem,0.5rem+3vw,2.5rem)] max-[860px]:pt-[5.25rem] max-[860px]:pb-6",
              "max-[860px]:shadow-lift",
              open ? "is-open max-[860px]:translate-y-0" : "max-[860px]:-translate-y-[110%]",
            )}
          >
            <ul
              className={cn(
                "flex items-center gap-[clamp(0.75rem,2vw,1.75rem)]",
                "max-[860px]:flex-col max-[860px]:items-start max-[860px]:gap-4",
              )}
            >
              {NAV.map((item) => {
                const active = isActive(item.to);
                return (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "nav__link relative block py-2 text-[0.9375rem] font-medium text-body transition-colors duration-200",
                        "after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-yellow after:transition-transform after:duration-300 after:ease-out",
                        "hover:text-ink hover:after:scale-x-100",
                        active && "is-active text-ink after:scale-x-100",
                        "max-[860px]:text-[1.125rem]",
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* The brand and actions sit above the drawer so the close button
              stays reachable on mobile. */}
          <div className="ml-auto flex items-center gap-3 max-[860px]:relative max-[860px]:z-[70] max-[860px]:ml-0">
            <IconButton
              name="search"
              label="Search"
              aria-expanded={searchOpen}
              aria-controls="search-overlay"
              onClick={() => setSearchOpen(true)}
            />

            <IconButton
              name="cart"
              label={count ? `Cart, ${count} ${count === 1 ? "item" : "items"}` : "Cart, empty"}
              badge={count}
              aria-expanded={cartOpen}
              aria-controls="cart-drawer"
              onClick={() => setCartOpen(true)}
            />

            <Button as={Link} to="/contact" size="sm" className="max-[860px]:hidden">
              Sign In
            </Button>

            <IconButton
              className="hidden max-[860px]:grid"
              label="Toggle menu"
              aria-expanded={open}
              aria-controls="nav"
              onClick={() => setOpen((value) => !value)}
            >
              <Icon name={open ? "close" : "menu"} className="size-5" />
            </IconButton>
          </div>
        </div>
      </header>

      {/* Rendered outside the header so they escape its stacking context. */}
      {createPortal(
        <>
          <SearchOverlay open={searchOpen} onClose={closeSearch} />
          <CartDrawer open={cartOpen} onClose={closeCart} />
        </>,
        document.body,
      )}
    </>
  );
}
