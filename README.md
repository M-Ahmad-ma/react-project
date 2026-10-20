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

npm run dev      # development  -> http://localhost:5173
npm run build    # production build -> dist/
npm run serve    # serve dist/ with correct MIME types + SPA fallback
```

> **Do not open `index.html` straight from the file system, and do not point a
> plain static file server at the project root.** See
> [Troubleshooting](#troubleshooting) — it is the single most common way to
> end up with a blank page.

---

## Running the site

There are three ways to run it, and they are not interchangeable:

| Command | Serves | Use it for |
|---|---|---|
| `npm run dev` | The source, transformed on the fly by Vite | Day-to-day development |
| `npm run serve` | The built `dist/` over HTTP | Checking the production build locally |
| `npm run build` | Writes `dist/` | Deploying |

`npm run serve` starts `scripts/serve.mjs`, a small dependency-free static
server that:

- serves **only** the contents of `dist/`, never the source
- sends an explicit `Content-Type` for every file type
- rewrites unknown paths to `index.html` so `/flavors` and `/jobs/:slug` work

```bash
npm run build
npm run serve                 # -> http://localhost:4173
npm run serve -- --port 8080  # custom port
```

---

## Troubleshooting

### `Failed to load module script: Expected a JavaScript-or-Wasm module script but the server responded with a MIME type of "application/octet-stream"`

The browser refuses to run a module script whose `Content-Type` is not a
JavaScript type. Almost always this means **the project source is being
served as static files**: the source `index.html` asks for `/src/main.jsx`,
and most minimal static servers do not know the `.jsx` extension, so they
send `application/octet-stream`.

The result is a blank page — every button, including the cart and search,
appears to be "not working" because the React app never mounted.

**Fix:** run the app the intended way.

```bash
npm run dev                      # development
npm run build && npm run serve   # production
```

Check what a server is actually sending:

```bash
curl -s -o /dev/null -w '%{http_code}  %{content_type}\n' http://localhost:5173/src/main.jsx
# dev  -> 200  text/javascript
# bad  -> 200  application/octet-stream   <-- this is the problem
```

In the browser: **DevTools → Network → filter "JS" → Response Headers →
Content-Type**.

### A route other than `/` returns 404

The site is a single-page app, so the server must return `index.html` for any
path that is not a real file. `npm run serve`, `npm run preview` and the
included `vercel.json` / `public/_redirects` / `public/.htaccess` all do this.
A bare `python3 -m http.server` does not.

### The site 404s on assets when hosted in a sub-folder

Build with a base path:

```bash
BASE_PATH=/crispo/ npm run build
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
├── pages/                    one file per route
└── ../scripts/serve.mjs      dependency-free static server for dist/
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

The build output is a static SPA. It needs two things:

1. **Correct MIME types** — `.js` must be sent as `text/javascript`, or the
   browser refuses to execute the app.
2. **An SPA fallback** — serve `index.html` for every path that is not a
   real file, so client-side routes resolve on a hard refresh.

`npm run serve` already does both, and the configs below ship with the project.

- **Netlify / Cloudflare Pages** — `public/_redirects` is included automatically.
- **Vercel** — `vercel.json` is included.
- **Apache** — `public/.htaccess` is included (copy it to `.htaccess`).
- **nginx** — add:

  ```nginx
  include       mime.types;        # <- without this, .js becomes octet-stream
  default_type  application/octet-stream;

  location / {
    try_files $uri $uri/ /index.html;
  }
  ```

- **Railway / Fly.io / a plain static host** — point the static server at
  `dist/` and set the SPA fallback to `/index.html`.

### Hosting in a sub-folder

If the site will not live at the domain root (e.g. `example.com/crispo/`),
build with a base path so the asset URLs match:

```bash
BASE_PATH=/crispo/ npm run build
```
