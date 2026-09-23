import fs from "node:fs";
import path from "node:path";
import { spawn } from "node:child_process";

const ROUTES = [
  "/",
  "/services",
  "/who-we-help",
  "/faq",
  "/contact",
  "/agricultural-accounting",
  "/outsource",
  "/pricing",
  "/approach",
];

const ROOT_DIR = process.cwd();
const STATIC_SRC = path.join(ROOT_DIR, ".vercel/output/static");
const DIST_DIR = path.join(ROOT_DIR, "dist");

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

async function isServerReady(url) {
  try {
    const res = await fetch(url, { signal: AbortSignal.timeout(1500) });
    return res.status === 200;
  } catch {
    return false;
  }
}

async function resolveServerUrl() {
  // Check common dev ports first
  for (const port of [3000, 8080]) {
    const url = `http://127.0.0.1:${port}`;
    if (await isServerReady(url)) {
      console.log(`[export] Using existing server at ${url}`);
      return { url, stopServer: () => {} };
    }
  }

  // If no server running, spawn a temporary one
  console.log("[export] No active server detected. Spawning temporary dev server on port 4173...");
  const devProcess = spawn("node", ["scripts/with-app-env.mjs", "vite", "dev", "--port", "4173", "--host", "127.0.0.1"], {
    cwd: ROOT_DIR,
    stdio: "ignore",
    env: { ...process.env, PATH: `${path.join(ROOT_DIR, "node_modules/.bin")}:${process.env.PATH}` },
  });

  const url = "http://127.0.0.1:4173";
  let ready = false;
  for (let i = 0; i < 30; i++) {
    await new Promise((r) => setTimeout(r, 500));
    if (await isServerReady(url)) {
      ready = true;
      break;
    }
  }

  if (!ready) {
    devProcess.kill();
    throw new Error("[export] Failed to start temporary dev server for static export.");
  }

  console.log(`[export] Temporary server ready at ${url}`);
  return {
    url,
    stopServer: () => {
      try {
        devProcess.kill("SIGTERM");
      } catch (e) {
        void e;
      }
    },
  };
}

async function run() {
  console.log("[export] Starting static export for Hostinger / static hosting...");

  if (!fs.existsSync(STATIC_SRC)) {
    throw new Error(
      `[export] Output directory ${STATIC_SRC} not found. Please run "npm run build" first before exporting.`
    );
  }

  // 1. Prepare dist directory and copy all compiled assets
  fs.rmSync(DIST_DIR, { recursive: true, force: true });
  fs.mkdirSync(DIST_DIR, { recursive: true });
  copyDirRecursive(STATIC_SRC, DIST_DIR);

  // 2. Discover production asset filenames
  const assetsDir = path.join(DIST_DIR, "assets");
  if (!fs.existsSync(assetsDir)) {
    throw new Error("[export] Assets directory not found in static output.");
  }

  const assetFiles = fs.readdirSync(assetsDir);
  const mainCss = assetFiles.find((f) => f.startsWith("styles-") && f.endsWith(".css"));
  const mainJs = assetFiles.find((f) => f.startsWith("index-") && f.endsWith(".js"));

  if (!mainCss || !mainJs) {
    throw new Error(`[export] Could not locate main CSS or JS bundles. Found: ${assetFiles.join(", ")}`);
  }

  console.log(`[export] Found production CSS: ${mainCss}`);
  console.log(`[export] Found production JS:  ${mainJs}`);

  // 3. Resolve running server to crawl HTML
  const { url: serverUrl, stopServer } = await resolveServerUrl();

  try {
    for (const route of ROUTES) {
      const pageUrl = `${serverUrl}${route}`;
      console.log(`[export] Fetching prerender HTML for route: ${route}`);
      const res = await fetch(pageUrl);
      if (!res.ok) {
        throw new Error(`[export] Failed to fetch ${pageUrl} (status ${res.status})`);
      }

      let html = await res.text();

      // Replace dev styles and client entries with production assets
      html = html.replace(/<link rel="stylesheet" href="\/src\/styles\.css"[^>]*>/g, "");
      html = html.replace(
        /<link rel="stylesheet" href="\/@tanstack-start\/styles\.css[^"]*"[^>]*>/g,
        `<link rel="stylesheet" href="/assets/${mainCss}"/>`
      );
      html = html.replace(
        /<link rel="modulepreload" href="\/@id\/virtual:tanstack-start-dev-client-entry"[^>]*>/g,
        `<link rel="modulepreload" href="/assets/${mainJs}"/>`
      );
      html = html.replace(
        /<script type="module" async="" src="\/@id\/virtual:tanstack-start-dev-client-entry"><\/script>/g,
        `<script type="module" async="" src="/assets/${mainJs}"></script>`
      );
      html = html.replaceAll("/@id/virtual:tanstack-start-dev-client-entry", `/assets/${mainJs}`);

      // Write to target file
      let targetFile;
      if (route === "/") {
        targetFile = path.join(DIST_DIR, "index.html");
      } else {
        const routeDir = path.join(DIST_DIR, route.slice(1));
        fs.mkdirSync(routeDir, { recursive: true });
        targetFile = path.join(routeDir, "index.html");
      }

      fs.writeFileSync(targetFile, html, "utf8");
      console.log(`[export] Saved: ${path.relative(ROOT_DIR, targetFile)} (${html.length} bytes)`);
    }

    // Also write a 404 fallback
    const homeHtml = fs.readFileSync(path.join(DIST_DIR, "index.html"), "utf8");
    fs.writeFileSync(path.join(DIST_DIR, "404.html"), homeHtml, "utf8");
    console.log("[export] Saved: dist/404.html");

    // Add .htaccess for Hostinger Apache/LiteSpeed web servers
    const htaccessContent = `<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /

  # Serve existing files and directories directly
  RewriteCond %{REQUEST_FILENAME} -f [OR]
  RewriteCond %{REQUEST_FILENAME} -d
  RewriteRule ^ - [L]

  # Direct clean URLs to their respective folder index.html
  RewriteCond %{DOCUMENT_ROOT}/$1/index.html -f
  RewriteRule ^(.*)/?$ /$1/index.html [L]

  # Fallback to /index.html for any client-side routes
  RewriteRule ^ index.html [L]
</IfModule>

# Enable browser caching for static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/webp "access plus 1 month"
  ExpiresByType image/svg+xml "access plus 1 month"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
`;
    fs.writeFileSync(path.join(DIST_DIR, ".htaccess"), htaccessContent, "utf8");
    console.log("[export] Generated: dist/.htaccess");

    console.log("[export] SUCCESS! Production static build is ready in ./dist for Hostinger public_html.");
  } finally {
    stopServer();
  }
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
