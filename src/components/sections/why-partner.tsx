"use client";

import React, { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { BENTO_TILES } from "@/data/portfolio-data";
import { ShieldCheck, Activity, Globe, Cpu, ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Dynamically load 3D dotted globe with fallback
const DynamicGlobe = dynamic(
  () => import("@/components/three/globe-3d").then((mod) => mod.Globe3D),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[190px] flex items-center justify-center">
        <div className="w-24 h-24 rounded-full border border-[#D6A76C]/40 animate-spin" />
      </div>
    ),
  }
);

export function WhyPartner() {
  const sectionRef = useRef<HTMLElement>(null);
  const textScrubRef = useRef<HTMLHeadingElement>(null);
  const bentoGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // 1. Lawn & Looms Scroll-Scrubbed Text Color Fill
      if (textScrubRef.current) {
        const words = textScrubRef.current.querySelectorAll<HTMLElement>(".scrub-word");
        words.forEach((wordEl) => {
          const isGold = wordEl.classList.contains("scrub-gold");
          gsap.fromTo(
            wordEl,
            { color: "#30251D" },
            {
              color: isGold ? "#F0C995" : "#FFFFFF",
              ease: "none",
              scrollTrigger: {
                trigger: wordEl,
                start: "top 85%",
                end: "top 55%",
                scrub: true,
              },
            }
          );
        });
      }

      // 2. Bento cards staggered entrance with clearProps to guarantee permanent visibility
      gsap.from(".bento-card", {
        scrollTrigger: {
          trigger: bentoGridRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        clearProps: "all",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const philosophyWords = [
    "SCALABLE", "SOFTWARE", "ISN'T", "JUST", "ABOUT", "WRITING", "CODE.",
    "IT'S", "ARCHITECTING", "RESILIENT", "SYSTEMS", "THAT", "ELIMINATE", "FRICTION",
    "AND", "SCALE", "REAL", "BUSINESS", "OUTCOMES."
  ];

  return (
    <section id="solutions" ref={sectionRef} className="py-24 sm:py-32 relative bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Lawn & Looms Scroll-Scrubbed Text Fill Statement */}
        <div className="max-w-5xl mx-auto mb-20 sm:mb-28 text-center sm:text-left">
          <p className="text-xs font-sans font-semibold tracking-[0.25em] text-[#D6A76C] uppercase mb-4">
            ENGINEERING ETHOS // SCROLL TO REVEAL
          </p>
          <h2
            ref={textScrubRef}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-sans leading-[1.2] tracking-tight"
          >
            {philosophyWords.map((word, i) => {
              const isGold = word === "RESILIENT" || word === "OUTCOMES.";
              return (
                <span
                  key={i}
                  className={`scrub-word inline-block mr-2.5 ${isGold ? "scrub-gold font-black" : ""}`}
                >
                  {word}
                </span>
              );
            })}
          </h2>
        </div>

        {/* Section Eyebrow & Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-sans font-semibold tracking-widest text-[#D6A76C] uppercase mb-2">
            WHY PARTNER WITH ME
          </p>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
            Architectural Excellence &amp; <span className="text-[#F0C995]">Direct Business Impact</span>
          </h3>
          <p className="text-sm sm:text-base text-[#B7A7A7] mt-3 font-sans">
            Combining rigorous full-stack foundations with high-ROI automation pipelines.
          </p>
        </div>

        {/* 4-Item Bento Grid */}
        <div ref={bentoGridRef} className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Tile 1: Production-Grade Reliability (col-span-7) */}
          <div className="bento-card md:col-span-12 lg:col-span-7 rounded-2xl border border-[#30251D] bg-[#100D0B] p-5 sm:p-8 flex flex-col justify-between hover:border-[#D6A76C]/60 hover:shadow-[0_16px_40px_-12px_rgba(214,167,108,0.22)] transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#080808] border border-[#30251D] flex items-center justify-center text-[#F0C995] shadow-[0_0_20px_rgba(214,167,108,0.2)]">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="font-sans text-xs font-semibold text-[#F0C995] px-3 py-1 rounded-full bg-[#080808] border border-[#30251D]">
                  {BENTO_TILES[0].metric}
                </span>
              </div>

              <p className="font-sans text-xs uppercase tracking-wider text-[#D6A76C] font-semibold mb-1">
                {BENTO_TILES[0].eyebrow}
              </p>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-3 font-sans">
                {BENTO_TILES[0].title}
              </h4>
              <p className="text-xs sm:text-sm text-[#B7A7A7] leading-relaxed mb-6 font-sans">
                {BENTO_TILES[0].description}
              </p>
            </div>

            {/* Code / Architecture Mini Visualizer: User Creation API */}
            <div className="bg-[#080808] rounded-xl p-3.5 sm:p-4 border border-[#30251D] font-mono text-xs text-[#B7A7A7] flex flex-col gap-2 overflow-x-auto no-scrollbar">
              <div className="flex items-center justify-between text-[11px] pb-2 border-b border-[#30251D] min-w-[280px]">
                <span className="text-[#D6A76C] font-semibold">POST /api/v1/users/register</span>
                <span className="text-[#888888]">HTTP 201 CREATED</span>
              </div>
              <div className="text-[11px] text-white/80 space-y-1 font-mono leading-relaxed min-w-[280px]">
                <p><span className="text-[#D6A76C]">const</span> hash = <span className="text-[#D6A76C]">await</span> <span className="text-[#F0C995]">bcrypt.hash</span>(password, 12);</p>
                <p><span className="text-[#D6A76C]">const</span> user = <span className="text-[#D6A76C]">await</span> prisma.user.<span className="text-[#F0C995]">create</span>({`{ data: { email, hash, role: "USER" } }`});</p>
                <p><span className="text-[#D6A76C]">const</span> token = <span className="text-[#F0C995]">signJwt</span>({`{ id: user.id, email: user.email }`});</p>
              </div>
            </div>
          </div>

          {/* Tile 2: Performance First Mindset (col-span-5) with Animated Waveform */}
          <div className="bento-card md:col-span-12 lg:col-span-5 rounded-2xl border border-[#30251D] bg-[#100D0B] p-5 sm:p-8 flex flex-col justify-between hover:border-[#D6A76C]/60 hover:shadow-[0_16px_40px_-12px_rgba(214,167,108,0.22)] transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#080808] border border-[#30251D] flex items-center justify-center text-[#F0C995] shadow-[0_0_20px_rgba(214,167,108,0.2)]">
                  <Activity className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="font-sans text-xs font-semibold text-white px-3 py-1 rounded-full bg-[#080808] border border-[#30251D]">
                  {BENTO_TILES[1].metric}
                </span>
              </div>

              <p className="font-sans text-xs uppercase tracking-wider text-[#D6A76C] font-semibold mb-1">
                {BENTO_TILES[1].eyebrow}
              </p>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 font-sans">
                {BENTO_TILES[1].title}
              </h4>
              <p className="text-xs sm:text-sm text-[#B7A7A7] leading-relaxed mb-4 font-sans">
                {BENTO_TILES[1].description}
              </p>
            </div>

            {/* Animated SVG Waveform / Telemetry */}
            <div className="relative w-full h-24 overflow-hidden rounded-xl bg-[#080808] border border-[#30251D] flex items-center px-4">
              <svg className="w-full h-16" viewBox="0 0 300 60" fill="none" preserveAspectRatio="none">
                <path
                  d="M0 30 Q 30 10, 60 30 T 120 30 T 180 15 T 240 45 T 300 30"
                  stroke="#D6A76C"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="animate-pulse"
                />
                <circle cx="180" cy="15" r="4" fill="#FFFFFF" stroke="#D6A76C" strokeWidth="2" />
                <circle cx="240" cy="45" r="4" fill="#FFFFFF" stroke="#D6A76C" strokeWidth="2" />
              </svg>
              <span className="absolute bottom-2 right-3 font-mono text-[10px] text-[#B7A7A7]">
                LATENCY: 42ms
              </span>
            </div>
          </div>

          {/* Tile 3: Scalable Cloud Architecture (col-span-5) */}
          <div className="bento-card md:col-span-12 lg:col-span-5 rounded-2xl border border-[#30251D] bg-[#100D0B] p-5 sm:p-8 flex flex-col justify-between hover:border-[#D6A76C]/60 hover:shadow-[0_16px_40px_-12px_rgba(214,167,108,0.22)] transition-all duration-300">
            <div>
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#080808] border border-[#30251D] flex items-center justify-center text-[#F0C995] shadow-[0_0_20px_rgba(214,167,108,0.2)]">
                  <Cpu className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <span className="font-sans text-xs font-semibold text-[#F0C995] px-3 py-1 rounded-full bg-[#080808] border border-[#30251D]">
                  {BENTO_TILES[2].metric}
                </span>
              </div>

              <p className="font-sans text-xs uppercase tracking-wider text-[#D6A76C] font-semibold mb-1">
                {BENTO_TILES[2].eyebrow}
              </p>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 font-sans">
                {BENTO_TILES[2].title}
              </h4>
              <p className="text-xs sm:text-sm text-[#B7A7A7] leading-relaxed mb-4 font-sans">
                {BENTO_TILES[2].description}
              </p>
            </div>

            {/* Cloud Microservice Chips */}
            <div className="grid grid-cols-2 gap-2 pt-2">
              {BENTO_TILES[2].tech.map((t) => (
                <div
                  key={t}
                  className="px-3 py-2 rounded-lg bg-[#080808] border border-[#30251D] text-xs font-sans font-medium text-white/90 flex items-center justify-between hover:border-[#D6A76C]/50 transition-colors"
                >
                  <span>{t}</span>
                  <ArrowUpRight className="w-3 h-3 text-[#D6A76C]" />
                </div>
              ))}
            </div>
          </div>

          {/* Tile 4: Business-Driven Automation with Rotating 3D Dotted Globe (col-span-7) */}
          <div className="bento-card md:col-span-12 lg:col-span-7 rounded-2xl border border-[#30251D] bg-[#100D0B] p-5 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden hover:border-[#D6A76C]/60 hover:shadow-[0_16px_40px_-12px_rgba(214,167,108,0.22)] transition-all duration-300">
            <div className="flex-1 w-full">
              <div className="flex items-center justify-between mb-4">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#080808] border border-[#30251D] flex items-center justify-center text-[#F0C995] shadow-[0_0_20px_rgba(214,167,108,0.2)]">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
              </div>

              <span className="font-sans text-xs font-semibold text-[#F0C995] px-3 py-1 rounded-full bg-[#080808] border border-[#30251D] inline-block mb-3">
                {BENTO_TILES[3].metric}
              </span>
              <p className="font-sans text-xs uppercase tracking-wider text-[#D6A76C] font-semibold mb-1">
                {BENTO_TILES[3].eyebrow}
              </p>
              <h4 className="text-xl sm:text-2xl font-bold text-white mb-2 font-sans">
                {BENTO_TILES[3].title}
              </h4>
              <p className="text-xs sm:text-sm text-[#B7A7A7] leading-relaxed mb-4 font-sans">
                {BENTO_TILES[3].description}
              </p>
            </div>

            {/* Rotating 3D Dotted Globe Canvas */}
            <div className="w-full sm:w-56 h-48 sm:h-56 relative shrink-0">
              <DynamicGlobe />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
