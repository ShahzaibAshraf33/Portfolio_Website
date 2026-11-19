"use client";

import React, { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { SAMonogram } from "@/components/ui/logo";

interface PreloaderProps {
  onComplete: () => void;
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [percent, setPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const progressLineRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (typeof window !== "undefined") {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isDev = process.env.NODE_ENV === "development";
      const seen = !isDev && sessionStorage.getItem("sa_portfolio_preloader_seen") === "true";

      if (prefersReducedMotion || seen) {
        const timeout = setTimeout(() => {
          setIsVisible(false);
          onComplete();
        }, 0);
        return () => clearTimeout(timeout);
      }
    }

    const counterObj = { v: 0 };
    const tl = gsap.timeline({
      onComplete: () => {
        sessionStorage.setItem("sa_portfolio_preloader_seen", "true");
        setIsVisible(false);
        onComplete();
      },
    });

    // 1. Continuous smooth counter from 0 to 100 (No pausing at 95%)
    tl.to(counterObj, {
      v: 100,
      duration: 1.8,
      ease: "power2.inOut",
      onUpdate: () => {
        const val = Math.round(counterObj.v);
        setPercent(val);
        if (labelRef.current) {
          labelRef.current.textContent = `${val}%`;
        }
      },
    });

    // 2. Loading line fills synchronously from 0 to 100%
    if (progressLineRef.current) {
      tl.to(
        progressLineRef.current,
        {
          scaleX: 1,
          duration: 1.8,
          ease: "power2.inOut",
        },
        0
      );
    }

    // 3. Brief 150ms hold at 100% so user sees completion
    tl.to({}, { duration: 0.15 });

    // 4. Smoothly fade out the preloader to reveal the dashboard
    tl.to(contentRef.current, {
      opacity: 0,
      scale: 0.96,
      duration: 0.4,
      ease: "power2.inOut",
    });

    tl.to(
      containerRef.current,
      {
        opacity: 0,
        duration: 0.55,
        ease: "power1.inOut",
      },
      "<0.05"
    );

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#080808] p-6 select-none"
      style={{ willChange: "opacity" }}
      aria-label="Portfolio Loading Screen"
      role="status"
    >
      {/* Central Brand Identity & Loading Line */}
      <div
        ref={contentRef}
        className="flex flex-col items-center justify-center text-center"
      >
        {/* Luxury Gold Monogram */}
        <div className="relative mb-5 p-3 rounded-2xl bg-[#100D0B] border border-[#30251D] shadow-[0_0_35px_rgba(214,167,108,0.25)]">
          <SAMonogram size={56} withGlow={true} />
        </div>

        {/* Logo Name */}
        <h1 className="font-sans font-bold text-lg sm:text-xl tracking-[0.28em] text-white uppercase mb-5">
          Shahzaib Ashraf
        </h1>

        {/* Loading Line & Percentage Counter */}
        <div className="w-48 sm:w-60 flex flex-col items-center gap-2.5">
          {/* Sleek Progress Line */}
          <div className="w-full h-[2px] bg-[#30251D] rounded-full overflow-hidden">
            <div
              ref={progressLineRef}
              className="w-full h-full bg-gradient-to-r from-[#F0C995] via-[#D6A76C] to-[#F0C995] origin-left shadow-[0_0_12px_rgba(214,167,108,0.6)]"
              style={{ transform: `scaleX(${percent / 100})`, transformOrigin: "left" }}
            />
          </div>

          {/* Smooth Percentage */}
          <span
            ref={labelRef}
            className="font-mono text-xs font-semibold text-[#D6A76C] tracking-widest"
          >
            {percent}%
          </span>
        </div>
      </div>
    </div>
  );
}
