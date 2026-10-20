/* ==========================================================================
   Product line-up + the filter buckets used by the flavour / store shelves.
   `id` doubles as the cart key, `price` is in USD.
   ========================================================================== */

export const CATEGORIES = [
  { id: "all", label: "All Flavors" },
  { id: "classic", label: "Classic" },
  { id: "cheesy", label: "Cheesy" },
  { id: "sweet", label: "Sweet" },
  { id: "wholesome", label: "Wholesome" },
];

export const PRODUCTS = [
  {
    id: "lays-chips",
    name: "Lays Chips",
    description: "American Style Cream and Onion",
    image: "/product-lays.jpg",
    category: "classic",
    price: 3.5,
  },
  {
    id: "arbys-chips",
    name: "Arbys Chips",
    description: "Roast Beef And Cheddar",
    image: "/product-arbys.jpg",
    category: "cheesy",
    price: 3.75,
  },
  {
    id: "black-eyed-peas",
    name: "Black Eyed Peas",
    description: "Black eyed Peas Crispy Chips",
    image: "/product-black-eyed-peas.jpg",
    category: "wholesome",
    price: 3.25,
  },
  {
    id: "truffle-parmesan",
    name: "Truffle Parmesan",
    description: "Truffle Parmesan Crispy Chips",
    image: "/product-truffle-parmesan.jpg",
    category: "cheesy",
    price: 4.25,
  },
  {
    id: "pineapple-teriyako",
    name: "Pineapple Teriyako",
    description: "Lays pineapple Teriyako Pineapple Chips",
    image: "/product-pineapple-teriyako.jpg",
    category: "sweet",
    price: 4,
  },
  {
    id: "cottage-cheese",
    name: "Cottage Cheese",
    description: "Lays best chips Cottage Cheese",
    image: "/product-cottage-cheese.jpg",
    category: "wholesome",
    price: 3.75,
  },
];
