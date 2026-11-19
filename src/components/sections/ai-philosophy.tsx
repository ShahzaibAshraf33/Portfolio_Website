"use client";

import React, { useRef, useEffect } from "react";
import { Sparkles, Quote, Terminal, Lightbulb } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function AiPhilosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        y: 45,
        opacity: 0,
        duration: 0.9,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="py-20 sm:py-28 relative bg-[#080808] overflow-hidden"
    >
      {/* Subtle gold ambient glow */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, #F0C995 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          ref={cardRef}
          className="rounded-3xl border border-[#30251D] bg-[#100D0B] p-5 sm:p-10 md:p-14 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(214,167,108,0.12)] relative overflow-hidden"
        >
          {/* Subtle top-right ambient gold corner glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-[rgba(240,201,149,0.1)] to-transparent pointer-events-none rounded-tr-3xl" />

          {/* Section Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#080808] border border-[#30251D] text-xs font-sans font-semibold text-[#D6A76C] mb-5 sm:mb-6">
            <Sparkles className="w-3.5 h-3.5 text-[#F0C995]" />
            <span>THE AI-ERA ENGINEERING PARADIGM</span>
          </div>

          {/* Headline */}
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white font-sans leading-snug mb-5 sm:mb-6">
            In the Age of AI,{" "}
            <span className="text-[#F0C995]">Systems Thinking &amp; Logic</span>{" "}
            Matter More Than Syntax
          </h2>

          {/* Core Philosophy Paragraph */}
          <div className="space-y-4 text-xs sm:text-base md:text-lg text-[#B7A7A7] leading-relaxed font-sans mb-8 sm:mb-10">
            <p>
              In this rapidly unfolding era of Artificial Intelligence, software
              development has fundamentally evolved. You no longer need to spend
              years memorizing obscure syntax quirks or mastering the encyclopedic
              boilerplate of dozens of different programming languages. Instead,
              the decisive competitive advantage belongs to those who understand
              fundamental programming logic, clean data flow, and resilient system
              architecture.
            </p>
            <p>
              When you grasp foundational concepts—how data structures scale, how
              distributed APIs communicate, and how to rigorously test and debug
              edge cases—AI models transform from a novelty into an exponential
              force multiplier. The modern developer is no longer merely a typist of
              code; they are an architect of intelligent systems, directing
              autonomous workflows and delivering measurable real-world outcomes with
              precision and intent.
            </p>
          </div>

          {/* Inspiring Developer Quote Card */}
          <div className="rounded-2xl border border-[#30251D] bg-[#080808] p-4 sm:p-7 relative">
            <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#D6A76C]/40 mb-3" />
            <blockquote className="text-xs sm:text-base md:text-lg font-medium text-white/95 font-sans italic leading-relaxed mb-4">
              &ldquo;The most important programming language of the future is human
              intention, but the greatest engineers will always be the ones who
              deeply understand how computing systems actually work.&rdquo;
            </blockquote>
            <div className="flex items-center justify-between pt-4 border-t border-[#30251D]/60 flex-wrap gap-2">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#100D0B] border border-[#30251D] flex items-center justify-center text-[#F0C995]">
                  <Terminal className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-white font-sans">
                    Sam Altman
                  </p>
                  <p className="text-[11px] font-sans text-[#888888]">
                    CEO, OpenAI
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[11px] font-sans text-[#D6A76C]">
                <Lightbulb className="w-3.5 h-3.5 text-[#F0C995]" />
                <span>Foundations + AI = Limitless Leverage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
