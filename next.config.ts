import type { NextConfig } from "next";

/**
 * GitHub Pages serves static files only, so the site is exported rather than
 * run. Two consequences worth knowing:
 *
 *  - Image optimisation needs a server, so it is disabled and images ship at
 *    their source resolution.
 *  - Middleware does not run, so the `/` → `/en` redirect is a static
 *    `public/index.html` instead of `src/proxy.ts`.
 *
 * A project page is served from `https://<user>.github.io/<repo>/`, so every
 * asset and link needs that prefix. The workflow passes the repository name in
 * as PAGES_BASE_PATH; locally it is empty and the site runs at the root.
 */
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
  // Inlined so the image loader can read it in the browser bundle.
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: {
    // A custom loader rather than `unoptimized`, which would strip the
    // basePath from every image src on a project page.
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
  },
};

export default nextConfig;
