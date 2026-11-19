"use client";

import React, { useEffect, useRef, useSyncExternalStore } from "react";
import { gsap } from "gsap";

function subscribePointerFine(callback: () => void) {
  if (typeof window === "undefined") return () => {};
  const mediaQuery = window.matchMedia("(pointer: fine)");
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getPointerFineSnapshot() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(pointer: fine)").matches;
}

function getServerPointerFineSnapshot() {
  return false;
}

export function CustomCursor() {
  const isPointerFine = useSyncExternalStore(
    subscribePointerFine,
    getPointerFineSnapshot,
    getServerPointerFineSnapshot
  );

  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPointerFine) return;

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;
    if (!dot || !ring) return;

    const onMouseMove = (e: MouseEvent) => {
      // Instant dot
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.05,
        ease: "none",
      });

      // Smooth trailing ring
      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.25,
        ease: "power2.out",
      });
    };

    const onMouseEnterClickable = () => {
      gsap.to(ring, {
        scale: 1.8,
        borderColor: "#C42B2B",
        backgroundColor: "rgba(214, 167, 108, 0.15)",
        duration: 0.25,
      });
    };

    const onMouseLeaveClickable = () => {
      gsap.to(ring, {
        scale: 1,
        borderColor: "rgba(255, 255, 255, 0.3)",
        backgroundColor: "transparent",
        duration: 0.25,
      });
    };

    window.addEventListener("mousemove", onMouseMove);

    const clickables = document.querySelectorAll("a, button, [role='button'], input, textarea");
    clickables.forEach((el) => {
      el.addEventListener("mouseenter", onMouseEnterClickable);
      el.addEventListener("mouseleave", onMouseLeaveClickable);
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      clickables.forEach((el) => {
        el.removeEventListener("mouseenter", onMouseEnterClickable);
        el.removeEventListener("mouseleave", onMouseLeaveClickable);
      });
    };
  }, [isPointerFine]);

  if (!isPointerFine) return null;

  return (
    <>
      {/* Center sharp dot */}
      <div
        ref={cursorDotRef}
        className="pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#D6A76C] z-50 shadow-[0_0_8px_#D6A76C]"
        aria-hidden="true"
      />
      {/* Outer fluid trailing ring */}
      <div
        ref={cursorRingRef}
        className="pointer-events-none fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-white/30 z-50 transition-colors"
        aria-hidden="true"
      />
    </>
  );
}
