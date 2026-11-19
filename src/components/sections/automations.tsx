"use client";

import React, { useState, useEffect, useRef } from "react";
import { AI_AUTOMATIONS, AutomationWorkflow } from "@/data/portfolio-data";
import { Zap, ArrowRight, X } from "lucide-react";
import { useSmoothScroll } from "@/components/providers/smooth-scroll-provider";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Automations() {
  const [selectedWorkflow, setSelectedWorkflow] = useState<AutomationWorkflow | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const trackWrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const { lenis } = useSmoothScroll();

  // Lock body scroll and pause Lenis when inspection dialog is active
  useEffect(() => {
    if (selectedWorkflow) {
      document.body.style.overflow = "hidden";
      lenis?.stop();
    } else {
      document.body.style.overflow = "";
      lenis?.start();
    }
    return () => {
      document.body.style.overflow = "";
      lenis?.start();
    };
  }, [selectedWorkflow, lenis]);

  // Close workflow dialog on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedWorkflow(null);
      }
    };
    if (selectedWorkflow) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedWorkflow]);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const mm = gsap.matchMedia();

    // ── Desktop: Pinned Horizontal Scrub Along the 6 Aligned Boxes ────────
    mm.add("(min-width: 1024px)", () => {
      const track = trackRef.current;
      const section = sectionRef.current;
      const wrapper = trackWrapperRef.current;
      if (!track || !section || !wrapper) return;

      const getScrollDistance = () => track.scrollWidth - wrapper.clientWidth + 32;

      gsap.to(track, {
        x: () => -getScrollDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "center center",
          end: () => `+=${Math.max(getScrollDistance(), 900)}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="automation"
      ref={sectionRef}
      className="py-20 sm:py-28 relative bg-[#080808] overflow-hidden flex flex-col justify-center min-h-[85vh]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Section Header */}
        <div className="mb-10 sm:mb-12 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#100D0B] border border-[#30251D] text-xs font-sans font-semibold text-[#F0C995] mb-3">
            <Zap className="w-3.5 h-3.5 text-[#D6A76C]" />
            <span>N8N WORKFLOW ENGINES &amp; AI AGENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
            Autonomous AI &amp; <span className="text-[#F0C995]">Business Systems</span>
          </h2>
          <p className="text-xs sm:text-sm font-sans text-[#B7A7A7] max-w-xl mt-2 leading-relaxed">
            Connecting enterprise software, WhatsApp Business Cloud API, vector databases, and LLMs into zero-drag automated workflows.
          </p>
        </div>

        {/* 6 Aligned Boxes: Horizontal Scroll Track Following Page Formatting */}
        <div
          ref={trackWrapperRef}
          className="relative w-full overflow-x-auto lg:overflow-visible pb-4 pt-1 no-scrollbar overscroll-x-contain"
        >
          <div
            ref={trackRef}
            className="flex gap-4 sm:gap-6 will-change-transform w-max px-1"
          >
            {AI_AUTOMATIONS.map((workflow) => (
              <div
                key={workflow.id}
                onClick={() => setSelectedWorkflow(workflow)}
                className="w-[82vw] max-w-[330px] sm:w-[350px] md:w-[390px] shrink-0 rounded-3xl border border-[#30251D] bg-[#100D0B] p-5 sm:p-7 flex flex-col justify-between cursor-pointer group hover:border-[#D6A76C]/60 hover:shadow-[0_16px_40px_-12px_rgba(214,167,108,0.22)] transition-all duration-300 relative overflow-hidden"
              >
                {/* Ambient Corner Glow */}
                <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[rgba(214,167,108,0.12)] to-transparent pointer-events-none rounded-tr-3xl" />

                <div>
                  {/* Header Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-0.5 rounded-full bg-[#080808] border border-[#30251D] text-[11px] font-sans font-semibold text-[#F0C995]">
                      {workflow.badge}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#080808] border border-[#30251D] flex items-center justify-center text-[#B7A7A7] group-hover:text-[#080808] group-hover:bg-[#F0C995] transition-all duration-300">
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#F0C995] transition-colors mb-2 font-sans line-clamp-1">
                    {workflow.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#B7A7A7] leading-relaxed mb-6 font-sans line-clamp-2">
                    {workflow.shortDesc}
                  </p>
                </div>

                <div>
                  {/* Impact Metric Pill */}
                  <div className="p-3.5 rounded-xl bg-[#080808] border border-[#30251D] mb-4">
                    <p className="text-[10px] font-sans text-[#888888] uppercase tracking-wider font-semibold">
                      Measurable Outcome
                    </p>
                    <p className="text-xs font-sans font-semibold text-[#F0C995] mt-0.5">
                      {workflow.impactMetric}
                    </p>
                  </div>

                  {/* Integrations Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#30251D]/60">
                    {workflow.integrations.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="px-2 py-0.5 rounded bg-[#080808] border border-[#30251D] text-[10px] font-sans text-[#B7A7A7]"
                      >
                        {item}
                      </span>
                    ))}
                    {workflow.integrations.length > 3 && (
                      <span className="text-[10px] font-sans text-[#888888] px-1 self-center">
                        +{workflow.integrations.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Subtle Horizontal Indicator */}
        <div className="flex items-center justify-center pt-6 text-center px-4">
          <span className="text-[11px] font-sans text-[#888888] tracking-widest uppercase">
            ← Scroll through 6 automated workflows (scrubs forward &amp; reverse) →
          </span>
        </div>

      </div>

      {/* Workflow Inspection Dialog */}
      {selectedWorkflow && (
        <div
          role="dialog"
          aria-modal="true"
          data-lenis-prevent="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedWorkflow(null);
            }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
        >
          <div
            data-lenis-prevent="true"
            className="relative w-full max-w-2xl max-h-[88dvh] overflow-y-auto overscroll-contain custom-modal-scrollbar rounded-3xl bg-[#100D0B] border border-[#30251D] p-5 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(214,167,108,0.2)]"
          >
            
            <button
              onClick={() => setSelectedWorkflow(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-11 h-11 flex items-center justify-center rounded-full text-[#B7A7A7] hover:text-white bg-[#080808] border border-[#30251D] hover:border-[#D6A76C]/60 transition-colors active:scale-95 z-10"
              aria-label="Close workflow dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-5 sm:mb-6 pr-12">
              <span className="font-sans font-medium text-xs text-[#F0C995] tracking-wider uppercase">
                {selectedWorkflow.badge} WORKFLOW SPEC
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white mt-1 font-sans">
                {selectedWorkflow.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#B7A7A7] mt-2 font-sans">
                {selectedWorkflow.description}
              </p>
            </div>

            {/* Step-by-Step Flow Nodes */}
            <div className="space-y-3 mb-6">
              <h4 className="text-xs font-sans font-semibold uppercase text-white/80 tracking-wider">
                Execution Pipeline Nodes
              </h4>
              <div className="space-y-2">
                {selectedWorkflow.flowSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-[#080808] border border-[#30251D] text-xs sm:text-sm text-[#D4D4D8] font-sans"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#D6A76C] text-[#080808] font-sans text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-snug">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Integrations Chips */}
            <div className="pt-4 border-t border-[#30251D]">
              <p className="text-xs font-sans font-medium uppercase text-[#888888] mb-2">Connected Stack</p>
              <div className="flex flex-wrap gap-2">
                {selectedWorkflow.integrations.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full bg-[#080808] border border-[#30251D] text-xs font-sans text-white"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
