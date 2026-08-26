/**
 * Image loader for the static export.
 *
 * `unoptimized: true` makes next/image emit `src` untouched, which drops the
 * basePath — so on a GitHub Pages project site every image asked for
 * `/images/…` while the files actually live at `/<repo>/images/…`. This
 * prepends the prefix that the rest of the framework applies automatically.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function imageLoader({ src }: { src: string }) {
  // Remote sources are already absolute.
  if (/^https?:\/\//.test(src)) return src;
  return `${basePath}${src}`;
}
