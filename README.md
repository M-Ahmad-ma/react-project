# Crispo — React + Tailwind

A full React conversion of the Crispo chips-factory website. The original static
site (`../crispo-landing`) was rebuilt as a multi-page React app with Tailwind
CSS v4, keeping the design system **pixel-for-pixel identical**.

---

## Stack

| | |
|---|---|
| Build | Vite 8 |
| UI | React 19 (plain JSX, no TypeScript) |
| Routing | React Router 7 (`createBrowserRouter`) |
| Styling | Tailwind CSS v4 (`@theme` tokens, no JS config file) |
| Fonts | Poppins, self-hosted via `@fontsource/poppins` |
| Icons | Hand-ported SVG sprite (`src/lib/icons.jsx`) — zero icon dependencies |
| Utils | `clsx` + `tailwind-merge` |

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # -> dist/
npm run preview  # serve the production build
```

---

## The design system

Every value in the original `css/tokens.css` became a Tailwind theme token in
`src/styles/index.css`, so the CSS variable names became utility class names
one-for-one.

### Colour

| Token | Value | Role |
|---|---|---|
| `maroon` | `#7f1a3c` | Brand bands, focus ring, stat values, check bullets |
| `yellow` | `#ffcb30` | Primary buttons, icon bubbles, active chip text |
| `gold` | `#fec72e` | Star ratings |
| `pink` | `#ee99c2` | Scalloped flavour band |
| `pink-soft` | `#fdf0f6` | Testimonials + stats surfaces |
| `cream` | `#f9f6ef` | Hero, page head, tags, contact panel |
| `ink` | `#1a1a1a` | Text, borders, footer |
| `body` / `muted` | `#4a4a4a` / `#7a7a7a` | Copy and secondary copy |
| `charcoal` | `#34383b` | The hairline top bar |

### Type

Poppins 400/500/600/700. The fluid scale maps to `text-hero`,
`text-section`, `text-card`, `text-base` and `text-meta`:

```
--text-hero:    clamp(2.25rem, 1.2rem + 3.6vw, 3.5rem)   hero + page titles
--text-section: clamp(1.75rem, 1.1rem + 2.2vw, 2.75rem)   section titles
--text-base:    0.9375rem                               body (15px)
--text-meta:    0.8125rem                               meta (13px)
```

### Shape & motion

`rounded-pill` (999px), `rounded-card` (1rem), 2px black outlines everywhere,
and the signature zero-blur offset shadows `shadow-pop` / `shadow-pop-sm`.

---

## Routes

| Path | Page |
|---|---|
| `/` | Home — hero, features, flavours, products, testimonials, CTA |
| `/flavors` | Flavour line-up with category filters |
| `/about` | Story, quality promise, **owner + team**, stats |
| `/stores` | Product shelf + stockists |
| `/recipes` | Six recipes with step disclosures |
| `/contact` | Channels, contact form, FAQ |
| `/jobs` | **Careers** — why join, filterable roles, benefits |
| `/jobs/:slug` | **Role detail** — responsibilities, requirements, apply form |
| `*` | Branded 404 |

---

## Project layout

```
src/
├── main.jsx                  entry, font imports, CartProvider
├── App.jsx                   router definition
├── styles/index.css          @theme tokens + base + component layer
├── lib/
│   ├── cn.js                 clsx + tailwind-merge
│   ├── icons.jsx             <Icon name="…" /> — ported SVG sprite
│   └── search.js             search index + scoring
├── data/                     content model, one file per domain
│   ├── site.js               nav + footer
│   ├── products.js  flavors.js  about.js  recipes.js
│   ├── stores.js   contact.js
│   ├── team.js               ⚠ owner + team (placeholder copy)
│   └── jobs.js               ⚠ roles (placeholder copy)
├── hooks/
│   ├── useReveal.js          IntersectionObserver scroll reveal
│   ├── useStuckHeader.js     header shadow on scroll
│   ├── useScrollSpy.js       home-page nav highlighting
│   └── useScrollLock.js      reference-counted body scroll lock
├── context/CartContext.jsx   cart items + localStorage persistence
├── components/
│   ├── layout/               RootLayout, TopBar, Header, Footer, PageHead, Seo,
│   │                         CartDrawer, SearchOverlay
│   ├── ui/                   Button, IconButton, Chip, Tag, Stars, Disclosure, …
│   ├── sections/             Hero, FeaturesBand, FlavorsBand, ProductGrid, …
│   └── form/                 Field, ContactForm, ApplicationForm
└── pages/                    one file per route
```

---

## Behaviour carried over from the original

- **Cart** — a real cart, not a counter. Add products, adjust quantities,
  remove lines, see the subtotal, and the basket survives a reload
  (`localStorage`). The header badge pops whenever the count changes.
- **Search** — the header search button (or the `/` key) opens a live search
  across products, recipes, stores, job roles and pages. Results are grouped
  by type and jump straight to the match.
- **Flavour / department filters** — single-select chips with `aria-pressed`.
- **Forms** — client-side validity, reset, and a branded success note.
- **Mobile drawer** — slide-down, body scroll lock, `Escape` to close, closes
  automatically above 860px.
- **Sticky header** — shadow appears once you scroll past it.
- **Scroll reveal** — staggered `translateY` + fade, with a `prefers-reduced-motion`
  escape hatch.
- **Home scroll-spy** — the nav highlights the section currently in view.

---

## Accessibility

Skip link, one `<h1>` per page, `aria-current="page"` on the active nav link,
labelled form controls, `alt` on every image, visible focus rings
(3px maroon), a 404 route, and full `prefers-reduced-motion` support.

---

## ⚠ Placeholder content

Three files contain **placeholder copy written as realistic examples** and should
be replaced before launch:

- `src/data/team.js` — the owner's name, bio, quote and the team roster.
- `src/data/jobs.js` — role titles, salaries, shifts and descriptions.
- `src/data/products.js` — the `price` on each product ($3.25–$4.25) is
  illustrative; set your real pricing here.

Only three avatars shipped with the original site. The first three team
members use them; everyone else (including the owner) falls back to a branded
monogram disc via `components/ui/Avatar.jsx`.

The cart is front-end only — checkout shows a "demo storefront" notice and no
payment is processed.

---

## Deployment

The build output is a static SPA. It needs one rule: **serve `index.html` for
every unknown path** so client-side routes resolve on a hard refresh.

- **Netlify / Cloudflare Pages** — `public/_redirects` is included automatically.
- **Vercel** — `vercel.json` is included.
- **nginx** — add:

  ```nginx
  location / {
    try_files $uri $uri/ /index.html;
  }
  ```

- **Railway / Fly.io / a plain static host** — point the static server at
  `dist/` and set the SPA fallback to `/index.html`.
