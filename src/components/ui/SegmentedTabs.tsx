"use client";

import { cn } from "@/lib/utils";

/**
 * The pill group of filters (Figma 105:1661): a pale track with the active
 * option lifted onto a white, blue-bordered tab.
 */
export default function SegmentedTabs({
  options,
  value,
  onChange,
  label,
  className,
}: {
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  label: string;
  className?: string;
}) {
  return (
    <div
      role="tablist"
      aria-label={label}
      className={cn(
        "flex w-full max-w-full overflow-x-auto rounded-md bg-[#f6f6fa] p-1 [scrollbar-width:none] lg:w-auto lg:overflow-visible",
        className,
      )}
    >
      {options.map((option) => {
        const active = option === value;
        return (
          <button
            key={option}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(option)}
            className={cn(
              "shrink-0 rounded px-4 py-1 text-body-sm font-medium whitespace-nowrap transition-colors duration-300 lg:w-[132px] lg:px-5 lg:text-body",
              active
                ? "border border-blue-20 bg-white text-blue"
                : "text-text-dark hover:text-blue",
            )}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
