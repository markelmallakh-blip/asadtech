import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

/**
 * The type scale defined in globals.css.
 *
 * tailwind-merge cannot tell `text-body-xl` (a size) from `text-blue-20` (a
 * colour) without being told: both look like `text-<something>`, so it files
 * them under one group, calls them rivals and silently drops the earlier one.
 * That is how `text-body-xl text-blue-20` rendered at 16px. Naming the scale
 * here keeps a size and a colour from cancelling each other out.
 */
const FONT_SIZES = [
  "display",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "body-xs",
  "body-sm",
  "body",
  "body-lg",
  "body-xl",
];

const twMerge = extendTailwindMerge({
  extend: { classGroups: { "font-size": [{ text: FONT_SIZES }] } },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
