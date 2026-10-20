/* ==========================================================================
   Crispo — static server for the production build.

   Serves ONLY the contents of dist/, with an explicit MIME map and a
   single-page-app fallback. It exists so the built site can be run (and
   deployed) without any extra dependency.

   Why the explicit MIME map? A browser refuses to execute a module script
   whose Content-Type is not a JavaScript type, and most minimal static
   servers guess "application/octet-stream" for anything they do not
   recognise. Serving the wrong type for a .js file breaks the whole app.

   Usage:
     node scripts/serve.mjs [--port 4173] [--dir dist] [--host 0.0.0.0]
   ========================================================================== */

import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, resolve, sep } from "node:path";

/* --- CLI args ----------------------------------------------------------- */

function parseArgs(argv) {
  const options = { port: 4173, dir: "dist", host: "0.0.0.0" };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === "--port" || arg === "-p") options.port = Number(argv[++i]);
    else if (arg === "--dir" || arg === "-d") options.dir = argv[++i];
    else if (arg === "--host" || arg === "-h") options.host = argv[++i];
    else if (arg === "--help") {
      console.log("Usage: node scripts/serve.mjs [--port 4173] [--dir dist] [--host 0.0.0.0]");
      process.exit(0);
    }
  }

  return options;
}

const options = parseArgs(process.argv.slice(2));

/* --- MIME types --------------------------------------------------------- */

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".cjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".map": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
  ".eot": "application/vnd.ms-fontobject",
  ".pdf": "application/pdf",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".mp3": "audio/mpeg",
};

/** Anything unrecognised is a binary blob, which is the safe default. */
function contentType(path) {
  return MIME[extname(path).toLowerCase()] ?? "application/octet-stream";
}

/* --- Paths -------------------------------------------------------------- */

const ROOT = resolve(process.cwd(), options.dir);
const INDEX = join(ROOT, "index.html");

/**
 * Resolve a request path to a file inside ROOT.
 * Returns null when the path escapes the root or does not exist.
 */
function resolveFile(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0].split("#")[0]);
  const relative = normalize(decoded).replace(/^(\.\.[/\\])+/, "").replace(/^[/\\]+/, "");

  const candidate = resolve(ROOT, relative);

  /* Never serve anything outside dist/. */
  if (candidate !== ROOT && !candidate.startsWith(ROOT + sep)) return null;

  if (!existsSync(candidate)) return null;

  const stats = statSync(candidate);
  if (stats.isDirectory()) {
    const index = join(candidate, "index.html");
    return existsSync(index) ? index : null;
  }

  return candidate;
}

/* --- Server ------------------------------------------------------------- */

const server = createServer((request, response) => {
  const method = request.method ?? "GET";

  if (method !== "GET" && method !== "HEAD") {
    response.writeHead(405, { Allow: "GET, HEAD" });
    response.end("Method Not Allowed");
    return;
  }

  const file = resolveFile(request.url ?? "/");

  /* Single-page-app fallback: unknown paths are routes, so hand back
     index.html and let React Router sort it out. */
  const target = file ?? INDEX;

  if (!existsSync(target)) {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("Not Found — run `npm run build` first.");
    return;
  }

  const headers = {
    "Content-Type": contentType(target),
    "Cache-Control": target === INDEX ? "no-cache" : "public, max-age=31536000, immutable",
  };

  response.writeHead(200, headers);

  if (method === "HEAD") {
    response.end();
    return;
  }

  createReadStream(target).pipe(response);
});

if (!existsSync(ROOT)) {
  console.error(`\n  ✗ "${options.dir}" does not exist.\n    Run \`npm run build\` first.\n`);
  process.exit(1);
}

server.listen(options.port, options.host, () => {
  console.log(`\n  Crispo is running\n`);
  console.log(`  → http://localhost:${options.port}`);
  console.log(`  → serving ${ROOT}`);
  console.log(`\n  SPA fallback is on, so /flavors and /jobs/:slug resolve.\n`);
});
