import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/cn";
import { Icon } from "@/lib/icons";
import { Button } from "@/components/ui/Button";
import { useCart } from "@/context/CartContext";
import { useScrollLock } from "@/hooks/useScrollLock";

const money = (value) => `$${value.toFixed(2)}`;

/**
 * Slide-over cart. Opens from the right, lists what you added, and lets you
 * adjust quantities before heading to checkout.
 */
export function CartDrawer({ open, onClose }) {
  const { items, count, subtotal, removeFromCart, setQuantity, clearCart } = useCart();
  const closeRef = useRef(null);

  useScrollLock(open);

  /* Escape closes the drawer. */
  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  /* Move focus into the panel when it opens. */
  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  return (
    <div
      className={cn(
        "fixed inset-0 z-[80]",
        open ? "pointer-events-auto" : "pointer-events-none",
      )}
      inert={!open}
    >
      {/* Backdrop */}
      <button
        type="button"
        tabIndex={open ? 0 : -1}
        aria-label="Close cart"
        onClick={onClose}
        className={cn(
          "absolute inset-0 bg-ink/40 transition-opacity duration-300",
          open ? "opacity-100" : "opacity-0",
        )}
      />

      <aside
        id="cart-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={cn(
          "absolute inset-y-0 right-0 flex w-[min(100%,26rem)] flex-col border-l-2 border-ink bg-white shadow-lift",
          "transition-transform duration-300 ease-out",
          open ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-4 border-b-2 border-ink bg-cream px-6 py-4">
          <h2 className="text-[1.125rem]">
            Your Cart{" "}
            <span className="ml-1 text-[0.9375rem] font-medium text-muted">
              {count} {count === 1 ? "item" : "items"}
            </span>
          </h2>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close cart"
            className="grid size-9 place-items-center rounded-full border-2 border-ink bg-yellow shadow-pop-sm transition-transform duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5"
          >
            <Icon name="close" className="size-4" />
          </button>
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="grid flex-1 place-content-center justify-items-center gap-4 px-6 py-12 text-center">
            <span className="grid size-20 place-items-center rounded-full border-2 border-ink bg-yellow text-3xl shadow-pop-sm">
              🥔
            </span>
            <h3 className="text-[1.125rem]">Your cart is empty</h3>
            <p className="max-w-[28ch] text-[0.9375rem] text-body">
              Nothing crunchy in here yet. Pick a flavor and we will get a fresh bag on its way.
            </p>
            <Button as={Link} to="/flavors" onClick={onClose}>
              Explore flavors
            </Button>
          </div>
        ) : (
          <ul className="flex-1 divide-y divide-ink/10 overflow-y-auto">
            {items.map((item) => (
              <li key={item.id} className="flex gap-4 px-6 py-4">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="size-20 flex-none rounded-card border-2 border-ink bg-cream object-contain"
                  />
                ) : (
                  <span className="grid size-20 flex-none place-items-center rounded-card border-2 border-ink bg-cream text-2xl">
                    🥔
                  </span>
                )}

                <div className="grid flex-1 content-start gap-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-[1rem] font-semibold">{item.name}</h3>
                    <span className="text-[1rem] font-semibold whitespace-nowrap">
                      {money(item.price * item.quantity)}
                    </span>
                  </div>

                  {item.description && (
                    <p className="text-[0.8125rem] text-muted">{item.description}</p>
                  )}

                  <div className="mt-2 flex items-center gap-3">
                    <div className="flex items-center gap-1 rounded-pill border-2 border-ink bg-white px-1">
                      <button
                        type="button"
                        onClick={() => setQuantity(item.id, item.quantity - 1)}
                        aria-label={`Remove one ${item.name}`}
                        className="grid size-7 place-items-center rounded-full transition-colors hover:bg-cream"
                      >
                        <Icon name="minus" className="size-3.5" />
                      </button>

                      <span className="min-w-6 text-center text-[0.9375rem] font-semibold">
                        {item.quantity}
                      </span>

                      <button
                        type="button"
                        onClick={() => setQuantity(item.id, item.quantity + 1)}
                        aria-label={`Add one more ${item.name}`}
                        className="grid size-7 place-items-center rounded-full transition-colors hover:bg-cream"
                      >
                        <Icon name="plus" className="size-3.5" />
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => removeFromCart(item.id)}
                      className="flex items-center gap-1 text-[0.8125rem] font-medium text-muted transition-colors hover:text-maroon"
                    >
                      <Icon name="trash" className="size-4" />
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Footer */}
        {items.length > 0 && (
          <div className="grid gap-3 border-t-2 border-ink bg-cream px-6 py-5">
            <div className="flex items-center justify-between text-[1.0625rem] font-semibold">
              <span>Subtotal</span>
              <span>{money(subtotal)}</span>
            </div>

            <p className="text-[0.8125rem] text-muted">
              Shipping is calculated at checkout. This is a demo storefront — no payment is taken.
            </p>

            <Button block onClick={onClose}>
              Checkout
            </Button>

            <div className="flex items-center justify-between gap-3">
              <Button variant="ghost" size="sm" onClick={clearCart}>
                Clear cart
              </Button>
              <Button as={Link} to="/flavors" variant="ghost" size="sm" onClick={onClose}>
                Keep shopping
              </Button>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
}
