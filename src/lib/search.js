/* ==========================================================================
   Search index — every searchable thing on the site, flattened into one
   list so the search overlay can filter it with a single pass.
   ========================================================================== */

import { NAV } from "@/data/site";
import { PRODUCTS } from "@/data/products";
import { RECIPES } from "@/data/recipes";
import { STORES } from "@/data/stores";
import { JOBS } from "@/data/jobs";

export const SEARCH_INDEX = [
  ...PRODUCTS.map((product) => ({
    type: "Product",
    title: product.name,
    text: product.description,
    meta: `$${product.price.toFixed(2)}`,
    to: "/flavors",
    image: product.image,
    keywords: `${product.category} chips crisps bag`,
  })),

  ...RECIPES.map((recipe) => ({
    type: "Recipe",
    title: recipe.title,
    text: recipe.description,
    meta: `${recipe.time} · ${recipe.level}`,
    to: "/recipes",
    image: recipe.image,
    keywords: recipe.ingredients.join(" "),
  })),

  ...STORES.map((store) => ({
    type: "Store",
    title: store.name,
    text: store.address,
    meta: store.hours,
    to: "/stores",
    image: null,
    keywords: "stockist shop where to buy",
  })),

  ...JOBS.map((job) => ({
    type: "Role",
    title: job.title,
    text: job.summary,
    meta: `${job.type} · ${job.location}`,
    to: `/jobs/${job.slug}`,
    image: null,
    keywords: `${job.department} ${job.shift} career careers job opening`,
  })),

  ...NAV.map((item) => ({
    type: "Page",
    title: item.label,
    text: "",
    meta: "",
    to: item.to,
    image: null,
    keywords: "page",
  })),
];

/**
 * Score a single entry against a query.
 * Returns 0 when the entry does not match at all.
 */
function score(entry, terms) {
  const title = entry.title.toLowerCase();
  const haystack = `${title} ${entry.text.toLowerCase()} ${entry.keywords.toLowerCase()}`;

  let total = 0;

  for (const term of terms) {
    if (!haystack.includes(term)) return 0;

    if (title.startsWith(term)) total += 10;
    else if (title.includes(term)) total += 6;
    else total += 2;
  }

  /* Prefer shorter titles when everything else matches — "Truffle Parmesan"
     should outrank "Pineapple Teriyako" for the query "parmesan". */
  return total - title.length / 100;
}

/**
 * Run a query against the index.
 * An empty query returns the most useful entries as suggestions.
 */
export function search(query) {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);

  if (!terms.length) {
    return SEARCH_INDEX.filter((entry) => entry.type === "Product" || entry.type === "Page").slice(
      0,
      8,
    );
  }

  return SEARCH_INDEX.map((entry) => ({ entry, rank: score(entry, terms) }))
    .filter((result) => result.rank > 0)
    .sort((a, b) => b.rank - a.rank)
    .map((result) => result.entry);
}
