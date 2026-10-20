/* ==========================================================================
   Site-wide navigation + footer content.
   ========================================================================== */

export const NAV = [
  { label: "Flavors", to: "/flavors" },
  { label: "About", to: "/about" },
  { label: "Stores", to: "/stores" },
  { label: "Recipes", to: "/recipes" },
  { label: "Careers", to: "/jobs" },
  { label: "Contact", to: "/contact" },
];

export const FOOTER = {
  blurb: "Crafted with bold flavors, premium ingredients, and unforgettable crunch.",
  socials: ["facebook", "instagram", "twitter", "youtube"],
  columns: [
    {
      title: "Products",
      links: [
        { label: "Classic Flavors", to: "/flavors" },
        { label: "Spicy Collection", to: "/flavors" },
        { label: "Cheesy Delights", to: "/flavors" },
        { label: "Healthy Options", to: "/stores" },
        { label: "Limited Edition", to: "/stores" },
      ],
    },
    {
      title: "About Us",
      links: [
        { label: "Our Story", to: "/about" },
        { label: "Quality Promise", to: "/about" },
        { label: "Sustainability", to: "/about" },
        { label: "Careers", to: "/jobs" },
      ],
    },
    {
      title: "Support",
      links: [
        { label: "Contact Us", to: "/contact" },
        { label: "FAQs", to: "/contact#faq" },
        { label: "Shipping Info", to: "/contact" },
        { label: "Returns", to: "/contact" },
      ],
    },
  ],
  copyright: "2026 CRISPO. All Rights Reserved.",
};
