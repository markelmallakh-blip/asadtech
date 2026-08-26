"use client";

import { useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Horizontal strip you can throw with the pointer, matching the "DRAG"
 * affordance in the Figma. Keeps native scrolling, so trackpads, touch and
 * keyboard all keep working — the pointer handlers only add grab-to-pan.
 */
export default function DragRail({
  children,
  className,
  railClassName,
  label = "Drag",
}: {
  children: React.ReactNode;
  className?: string;
  railClassName?: string;
  label?: string;
}) {
  const railRef = useRef<HTMLDivElement>(null);
  const state = useRef({ down: false, startX: 0, startScroll: 0, moved: false });
  const [dragging, setDragging] = useState(false);
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });

  const onPointerDown = useCallback((event: React.PointerEvent) => {
    const rail = railRef.current;
    if (!rail || event.pointerType === "touch") return;

    state.current = {
      down: true,
      startX: event.clientX,
      startScroll: rail.scrollLeft,
      moved: false,
    };
    setDragging(true);
  }, []);

  const onPointerMove = useCallback((event: React.PointerEvent) => {
    const rail = railRef.current;
    if (!rail) return;

    const bounds = rail.getBoundingClientRect();
    setCursor({
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
      visible: true,
    });

    if (!state.current.down) return;

    const delta = event.clientX - state.current.startX;
    if (Math.abs(delta) > 4) state.current.moved = true;
    rail.scrollLeft = state.current.startScroll - delta;
  }, []);

  const endDrag = useCallback(() => {
    state.current.down = false;
    setDragging(false);
  }, []);

  return (
    <div className={cn("relative", className)}>
      <div
        ref={railRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={() => {
          endDrag();
          setCursor((c) => ({ ...c, visible: false }));
        }}
        /* A drag that travelled becomes a pan, not a card click. */
        onClickCapture={(event) => {
          if (state.current.moved) {
            event.preventDefault();
            event.stopPropagation();
          }
        }}
        className={cn(
          "no-scrollbar flex overflow-x-auto",
          dragging ? "cursor-grabbing select-none" : "cursor-grab",
          railClassName,
        )}
      >
      {/* Explicit edge spacers rather than padding: an overflowing flex
          container does not reliably report padding-right in scrollWidth, so
          the last card would otherwise finish flush against the viewport. */}
      <span aria-hidden className="w-4 shrink-0 lg:w-[60px]" />
        {children}
      {/* Explicit edge spacers rather than padding: an overflowing flex
          container does not reliably report padding-right in scrollWidth, so
          the last card would otherwise finish flush against the viewport. */}
      <span aria-hidden className="w-4 shrink-0 lg:w-[60px]" />
      </div>

      {/* Floating hint that tracks the pointer */}
      <span
        aria-hidden
        style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
        className={cn(
          "pointer-events-none absolute left-0 top-0 z-20 hidden select-none rounded-sm bg-navy px-2.5 py-1 text-body-xs font-medium tracking-[0.1em] text-white uppercase transition-opacity duration-300 lg:block",
          cursor.visible ? "opacity-100" : "opacity-0",
        )}
      >
        {label}
      </span>
    </div>
  );
}
