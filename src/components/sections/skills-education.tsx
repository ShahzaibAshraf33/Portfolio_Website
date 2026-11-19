"use client";

import React, { useState, useRef, useEffect } from "react";
import { SKILL_CATEGORIES, EDUCATION_DATA } from "@/data/portfolio-data";
import { GraduationCap, Award } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function SkillsEducation() {
  const [activeCategory, setActiveCategory] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const eduRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.from(headerRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        ease: "expo.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Tabs reveal
      gsap.from(tabsRef.current?.children ?? [], {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.06,
        ease: "power3.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: tabsRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Education cards reveal
      gsap.from(".education-card", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        clearProps: "all",
        scrollTrigger: {
          trigger: eduRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Quick subtle transition on category change
  useEffect(() => {
    if (!gridRef.current) return;
    gsap.fromTo(
      gridRef.current.children,
      { y: 15, opacity: 0.4 },
      {
        y: 0,
        opacity: 1,
        duration: 0.35,
        stagger: 0.03,
        ease: "power2.out",
        clearProps: "all",
      }
    );
  }, [activeCategory]);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 sm:py-32 relative bg-[#080808] overflow-hidden"
    >
      {/* Subtle ambient gold orb */}
      <div
        className="pointer-events-none absolute -top-40 right-1/4 w-[600px] h-[600px] rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, #F0C995 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================================================================ */}
        {/* TECHNICAL STACK & FOUNDATIONS                                    */}
        {/* ================================================================ */}
        <div ref={headerRef} className="mb-14">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#D6A76C] uppercase mb-3 font-sans">
            STACK &amp; ACADEMICS
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
            Technical Stack &amp;{" "}
            <span className="text-[#F0C995]">Foundations</span>
          </h2>
        </div>

        {/* Skills Section with Category Tabs */}
        <div className="mb-24 sm:mb-28">
          {/* Category Tabs: smooth horizontal scrollable on mobile, wrapping on sm+ */}
          <div
            ref={tabsRef}
            className="flex gap-2 sm:gap-2.5 mb-6 sm:mb-8 overflow-x-auto no-scrollbar pb-2 sm:pb-0 sm:flex-wrap overscroll-x-contain -mx-4 px-4 sm:mx-0 sm:px-0"
          >
            {SKILL_CATEGORIES.map((cat, idx) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(idx)}
                className={`px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold font-sans transition-all duration-300 shrink-0 min-h-[44px] flex items-center justify-center whitespace-nowrap active:scale-95 ${
                  activeCategory === idx
                    ? "bg-[#D6A76C] text-[#080808] shadow-[0_0_20px_rgba(214,167,108,0.35)]"
                    : "bg-[#100D0B] text-[#B7A7A7] hover:text-white hover:border-[#D6A76C]/60 border border-[#30251D]"
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Active Skills Grid: 1 column on mobile to prevent text truncation, 2 on sm, 3 on md, 4 on desktop lg */}
          <div
            ref={gridRef}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
          >
            {SKILL_CATEGORIES[activeCategory].skills.map((skill) => (
              <div
                key={skill.name}
                className="rounded-2xl border border-[#30251D] bg-[#100D0B] p-4 sm:p-5 flex items-center justify-between gap-3 group hover:border-[#D6A76C]/60 hover:shadow-[0_10px_30px_-10px_rgba(214,167,108,0.22)] transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex-1 min-w-0 pr-1">
                  <p className="text-sm sm:text-base font-bold text-white font-sans group-hover:text-[#F0C995] transition-colors leading-snug break-words">
                    {skill.name}
                  </p>
                  <p className="text-xs font-sans text-[#B7A7A7] mt-1">
                    {skill.level}
                  </p>
                </div>
                {/* Glowing gold dot indicator */}
                <div className="w-2.5 h-2.5 rounded-full bg-[#D6A76C] shadow-[0_0_8px_#D6A76C] group-hover:scale-125 transition-transform shrink-0 ml-1" />
              </div>
            ))}
          </div>
        </div>

        {/* ================================================================ */}
        {/* EDUCATION & CREDENTIALS                                          */}
        {/* ================================================================ */}
        <div id="education-section">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-[#100D0B] border border-[#30251D] flex items-center justify-center text-[#D6A76C]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-sans">
              Education &amp; <span className="text-[#F0C995]">Credentials</span>
            </h3>
          </div>

          <div ref={eduRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Degree Card */}
            <div className="education-card rounded-2xl border border-[#30251D] bg-[#100D0B] p-6 sm:p-8 hover:border-[#D6A76C]/60 hover:shadow-[0_16px_40px_-10px_rgba(214,167,108,0.22)] transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <span className="font-semibold text-xs text-[#D6A76C] uppercase tracking-wider font-sans">
                      Degree Program
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold text-white mt-1.5 font-sans leading-snug">
                      {EDUCATION_DATA[0].degree}
                    </h4>
                    <p className="text-sm font-medium text-[#B7A7A7] mt-1 font-sans">
                      {EDUCATION_DATA[0].institution} • {EDUCATION_DATA[0].location}
                    </p>
                  </div>
                  <span className="px-3.5 py-1 rounded-full bg-[#080808] border border-[#30251D] text-xs font-semibold text-[#F0C995] font-sans shrink-0">
                    {EDUCATION_DATA[0].grade}
                  </span>
                </div>

                <div className="pt-5 border-t border-[#30251D]">
                  <p className="text-xs font-semibold uppercase text-[#888888] tracking-widest mb-3 font-sans">
                    Core Computer Science Coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {EDUCATION_DATA[0].courses.map((c) => (
                      <span
                        key={c}
                        className="px-3 py-1 rounded-lg bg-[#080808] border border-[#30251D] text-xs font-sans font-medium text-[#B7A7A7] hover:border-[#D6A76C]/40 hover:text-white transition-colors duration-200"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Certification Card */}
            <div className="education-card rounded-2xl border border-[#30251D] bg-[#100D0B] p-6 sm:p-8 hover:border-[#D6A76C]/60 hover:shadow-[0_16px_40px_-10px_rgba(214,167,108,0.22)] transition-all duration-300 relative overflow-hidden flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <span className="font-semibold text-xs text-[#D6A76C] uppercase tracking-wider font-sans">
                      Professional Credential
                    </span>
                    <h4 className="text-xl sm:text-2xl font-bold text-white mt-1.5 font-sans leading-snug">
                      {EDUCATION_DATA[1].degree}
                    </h4>
                    <p className="text-sm font-medium text-[#B7A7A7] mt-1 font-sans">
                      {EDUCATION_DATA[1].institution} • {EDUCATION_DATA[1].grade}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#080808] border border-[#30251D] flex items-center justify-center text-[#D6A76C] shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                </div>

                <div className="pt-5 border-t border-[#30251D]">
                  <p className="text-xs font-semibold uppercase text-[#888888] tracking-widest mb-3 font-sans">
                    Verified Competencies
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {EDUCATION_DATA[1].courses.map((c) => (
                      <span
                        key={c}
                        className="px-3 py-1 rounded-lg bg-[#080808] border border-[#30251D] text-xs font-sans font-medium text-[#B7A7A7] hover:border-[#D6A76C]/40 hover:text-white transition-colors duration-200"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
