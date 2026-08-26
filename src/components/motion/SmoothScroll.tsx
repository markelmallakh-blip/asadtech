"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Single motion runtime for the whole site.
 *
 *  1. Lenis drives smooth scrolling and feeds GSAP's ticker (one rAF loop).
 *  2. Every `[data-animate]` element gets a scroll-triggered entrance.
 *  3. Every `[data-parallax]` element gets a scrubbed parallax offset.
 *
 * Sections opt in declaratively, so new sections animate without touching
 * this file. Content is visible by default and only hidden once the
 * `js-motion` class lands, which keeps the page usable without JS.
 */
export default function SmoothScroll({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const root = document.documentElement;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    gsap.registerPlugin(ScrollTrigger);

    if (reduced) {
      root.classList.remove("js-motion");
      return;
    }

    root.classList.add("js-motion");

    /* ---------------------------------------------------------------- Lenis */
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      wheelMultiplier: 0.9,
      touchMultiplier: 1.5,
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    /* Lenis owns the scroll position, so a raw window.scrollTo bypasses it.
       Exposing the instance in development makes the page scriptable for
       debugging and visual checks. */
    if (process.env.NODE_ENV !== "production") {
      (window as unknown as { __lenis?: Lenis }).__lenis = lenis;
    }

    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    /* ------------------------------------------------------------ Animation */
    const ctx = gsap.context(() => {
      const handled = new Set<Element>();

      /* The resting state each entrance starts from. It is mirrored in CSS so
         nothing flashes before this runs; setting it through gsap as well
         hands ownership of the inline style to the tween. */
      const from = (el: Element): gsap.TweenVars => {
        switch (el.getAttribute("data-animate")) {
          case "fade":
            return { opacity: 0 };
          case "clip":
            return { opacity: 0, clipPath: "inset(0 0 100% 0)", y: 24 };
          case "line":
            return { opacity: 0, scaleX: 0, transformOrigin: "left center" };
          case "mask":
            return { y: 0, yPercent: 118 };
          default:
            return { opacity: 0, y: 48 };
        }
      };

      const to = (el: Element): gsap.TweenVars => {
        const base = { opacity: 1, duration: 1.1, ease: "expo.out" };
        switch (el.getAttribute("data-animate")) {
          case "fade":
            return base;
          case "clip":
            return { ...base, clipPath: "inset(0 0 0% 0)", y: 0 };
          case "line":
            return { ...base, scaleX: 1, duration: 1.3 };
          case "mask":
            return { y: 0, yPercent: 0, duration: 1.15, ease: "expo.out" };
          default:
            return { ...base, y: 0 };
        }
      };

      /* `.to()` after an explicit `.set()` rather than `.fromTo()`: a fromTo
         re-renders its start values on every ScrollTrigger.refresh(), which
         reset already-played entrances once fonts and images landed. */
      const play = (targets: HTMLElement[], trigger: Element, vars: gsap.TweenVars = {}) => {
        gsap.set(targets, { ...from(targets[0]), willChange: "transform, opacity" });

        const tween: gsap.TweenVars = {
          ...to(targets[0]),
          ...vars,
          /* Promoting every animated node to its own layer for the whole
             session is expensive and leaves stale composited layers behind,
             so hand the hint back as soon as the entrance is done. A settled
             clip-path also keeps clipping, which would trap any child that
             later animates outside the box — release it too. */
          onComplete: () =>
            gsap.set(targets, { willChange: "auto", clipPath: "none" }),
        };

        /* Anything already on screen at load animates straight away. A scroll
           trigger would strand it: content in the lower part of the first
           viewport never crosses the start line, so a full-height hero would
           keep its own footer invisible until the section scrolled off. */
        const onScreenAtLoad =
          window.scrollY < 10 &&
          trigger.getBoundingClientRect().top < window.innerHeight;

        if (onScreenAtLoad) return gsap.to(targets, tween);

        return gsap.to(targets, {
          ...tween,
          scrollTrigger: {
            trigger,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      };

      /* Grouped elements cascade together off a single trigger. */
      gsap.utils.toArray<HTMLElement>("[data-animate-group]").forEach((group) => {
        const children = gsap.utils
          .toArray<HTMLElement>("[data-animate]", group)
          .filter((child) => !handled.has(child));

        if (!children.length) return;
        children.forEach((child) => handled.add(child));

        const stagger = Number(group.dataset.animateStagger ?? 0.09);

        /* One tween per entrance kind, all triggered by the group. */
        const buckets = new Map<string, HTMLElement[]>();
        children.forEach((child) => {
          const kind = child.getAttribute("data-animate") ?? "fade-up";
          const bucket = buckets.get(kind);
          if (bucket) bucket.push(child);
          else buckets.set(kind, [child]);
        });

        buckets.forEach((targets) => play(targets, group, { stagger }));
      });

      /* Everything else animates on its own trigger. */
      gsap.utils.toArray<HTMLElement>("[data-animate]").forEach((el) => {
        if (handled.has(el)) return;
        play([el], el, { delay: Number(el.dataset.animateDelay ?? 0) });
      });

      /* ----------------------------------------------------------- Parallax */
      gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
        const strength = Number(el.dataset.parallax || 14);

        /* Travel is measured against whichever box the layer belongs to. */
        const trigger =
          el.closest(".parallax-frame") ??
          el.closest("[data-parallax-scope]") ??
          el;

        gsap.fromTo(
          el,
          { yPercent: -strength / 2 },
          {
            yPercent: strength / 2,
            ease: "none",
            scrollTrigger: {
              trigger,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          },
        );
      });
    });

    /* Late-loading webfonts and images shift layout — recompute after both. */
    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready.then(refresh);
    window.addEventListener("load", refresh);

    return () => {
      window.removeEventListener("load", refresh);
      gsap.ticker.remove(raf);
      ctx.revert();
      lenis.destroy();
      if (process.env.NODE_ENV !== "production") {
        delete (window as unknown as { __lenis?: Lenis }).__lenis;
      }
      root.classList.remove("js-motion");
    };
  }, []);

  return <>{children}</>;
}
