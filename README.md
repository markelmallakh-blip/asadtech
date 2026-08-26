# Asadtech

Corporate website for Asad Advanced Technologies — refrigeration, cold rooms,
tail lifters and spider cranes across Saudi Arabia.

## Stack

- **Next.js 16** (App Router) with TypeScript
- **Tailwind CSS v4** — design tokens mirror the Figma variables in `src/app/globals.css`
- **GSAP + ScrollTrigger** for scroll-driven motion
- **Lenis** for smooth scrolling

## Running locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000 — `/` redirects to `/en`.

## Structure

```
src/
  app/[locale]/        routes; every page lives under a locale segment
  components/
    layout/            header, footer, page banner
    motion/            the scroll/motion runtime and its primitives
    sections/          page sections
    ui/                buttons, icons, shared primitives
  content/             all copy, separated from markup
  lib/                 i18n config and helpers
public/
  images/              page imagery, grouped per page
  logos/               client and partner marks
```

## Localisation

Routing is locale-prefixed (`/en`, `/ar`) and layout uses CSS logical
properties, so the Arabic build mirrors without layout changes. Only English
copy ships today; add `src/content/ar.ts` alongside `en.ts` to enable Arabic.

## Deployment

Pushes to `main` deploy automatically via Vercel.

## Outstanding

- Contact, Request Interest and Apply forms render and validate but have no
  submit endpoint wired.
- Copy on Careers, Single Service and Single Post was written to fit the
  layout and needs client sign-off.
