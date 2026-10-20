import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const CART_KEY = "crispo.cart";

const CartContext = createContext(null);

const EMPTY = [];

function readStoredItems() {
  try {
    const raw = localStorage.getItem(CART_KEY);
    if (!raw) return EMPTY;

    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return EMPTY;

    return parsed.filter(
      (item) =>
        item &&
        typeof item.id === "string" &&
        typeof item.name === "string" &&
        Number.isFinite(item.price) &&
        Number.isFinite(item.quantity) &&
        item.quantity > 0,
    );
  } catch {
    // Storage can be unavailable (private mode, sandboxed view) or hold an
    // older format — fall back to an empty cart either way.
    return EMPTY;
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(readStoredItems);

  useEffect(() => {
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(items));
    } catch {
      // Storage blocked — keep the session-only cart.
    }
  }, [items]);

  const addToCart = useCallback((product) => {
    if (!product?.id) return;

    setItems((current) => {
      const existing = current.find((item) => item.id === product.id);

      if (existing) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [
        ...current,
        {
          id: product.id,
          name: product.name,
          description: product.description ?? "",
          image: product.image ?? null,
          price: product.price,
          quantity: 1,
        },
      ];
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setItems((current) => current.filter((item) => item.id !== id));
  }, []);

  const setQuantity = useCallback((id, quantity) => {
    setItems((current) =>
      current.flatMap((item) => {
        if (item.id !== id) return [item];
        if (quantity <= 0) return [];
        return [{ ...item, quantity }];
      }),
    );
  }, []);

  const clearCart = useCallback(() => setItems(EMPTY), []);

  const value = useMemo(() => {
    const count = items.reduce((total, item) => total + item.quantity, 0);
    const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);

    return { items, count, subtotal, addToCart, removeFromCart, setQuantity, clearCart };
  }, [items, addToCart, removeFromCart, setQuantity, clearCart]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside a <CartProvider>");
  return context;
}
