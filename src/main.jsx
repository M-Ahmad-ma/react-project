import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "./styles/index.css";

import { App } from "./App";
import { CartProvider } from "./context/CartContext";

/* Marks the document as script-enabled so the reveal animations can hide
   content safely without ever hiding it from a no-JS visitor. */
document.documentElement.classList.add("js");

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </StrictMode>,
);
