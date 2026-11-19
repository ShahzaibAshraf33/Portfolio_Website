"use client";

import React, { useRef, useEffect } from "react";
import { EXPERIENCE_HISTORY } from "@/data/portfolio-data";
import {
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowUpRight,
  Layers,
  Database,
  Cpu,
  Bot,
  Briefcase,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const METHODOLOGY_CARDS = [
  {
    step: "01",
    title: "System Architecture & Database Modeling",
    icon: Database,
    category: "PostgreSQL • Prisma • Redis",
    rotation: -3.5,
    description:
      "Designing resilient relational schemas, compound database indexes, and connection pool topologies. Optimizing complex queries for sub-100ms multi-filter responses.",
    deliverables: [
      "Entity-Relationship Diagrams & Normalization",
      "Role-Based Access Control (RBAC) & JWT Rotation",
      "Redis caching & atomic transaction locks",
    ],
    techChips: ["PostgreSQL", "Prisma", "Redis", "Docker"],
  },
  {
    step: "02",
    title: "Full-Stack React & Next.js Core",
    icon: Cpu,
    category: "Next.js 15 • TypeScript • Three.js",
    rotation: 3,
    description:
      "Building modular React Server Components, responsive interactive UI layers, and decoupled Express microservice backends that achieve 99.9% client-side cart & state reliability.",
    deliverables: [
      "Zero-layout-shift server components & streaming SSR",
      "Interactive Three.js 3D models with clickable hotspots",
      "Live Socket.io notifications & media pipelines",
    ],
    techChips: ["Next.js", "React 19", "TypeScript", "Three.js", "Socket.io"],
  },
  {
    step: "03",
    title: "Autonomous AI & n8n Workflows",
    icon: Bot,
    category: "n8n • WhatsApp Cloud API • LLM Agents",
    rotation: -1.5,
    description:
      "Deploying event-driven n8n workflows that connect WhatsApp Business, vector memory, and enterprise databases into zero-drag customer capture and support pipelines.",
    deliverables: [
      "24/7 WhatsApp AI Customer Support with human handoff",
      "Automated property inquiry routing straight to PostgreSQL",
      "Webhook-driven order dispatch & Nodemailer alerts",
    ],
    techChips: ["n8n", "WhatsApp Cloud API", "OpenAI / Claude", "Webhooks"],
  },
];

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const experienceGridRef = useRef<HTMLDivElement>(null);
  const stackedContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const mm = gsap.matchMedia();

    // ── Common Header & Metrics Reveals ──────────────────────────────────
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

    gsap.from(metricsRef.current, {
      y: 35,
      opacity: 0,
      duration: 0.85,
      ease: "power2.out",
      clearProps: "all",
      scrollTrigger: {
        trigger: metricsRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".experience-box", {
      y: 45,
      opacity: 0,
      duration: 0.8,
      stagger: 0.15,
      ease: "power2.out",
      clearProps: "all",
      scrollTrigger: {
        trigger: experienceGridRef.current,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    // ── Desktop: Pinned Stacked Cards Animation (Lawn & Looms Card Deck Effect) ──
    mm.add("(min-width: 1024px)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(".stacked-process-card");
      if (cards.length >= 3 && stackedContainerRef.current) {
        // Initial state: all cards hidden below and scaled slightly
        cards.forEach((card) => {
          gsap.set(card, {
            y: 70,
            scale: 0.94,
            rotate: 0,
            autoAlpha: 0,
          });
        });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: stackedContainerRef.current,
            start: "center center",
            end: "+=260%",
            pin: true,
            anticipatePin: 1,
            scrub: 1,
          },
        });

        // 1. First card arrives and settles into center
        tl.to(cards[0], {
          y: 0,
          scale: 1,
          rotate: METHODOLOGY_CARDS[0].rotation,
          autoAlpha: 1,
          duration: 1,
          ease: "power2.out",
        });

        // Reading beat for Phase 01
        tl.to({}, { duration: 0.4 });

        // 2. Second card arrives and stacks over Card 0
        tl.to(cards[1], {
          y: -4,
          scale: 1,
          rotate: METHODOLOGY_CARDS[1].rotation,
          autoAlpha: 1,
          duration: 1,
          ease: "power2.out",
        });

        // Reading beat for Phase 02
        tl.to({}, { duration: 0.4 });

        // 3. Third card arrives and stacks on top of the deck
        tl.to(cards[2], {
          y: -8,
          scale: 1,
          rotate: METHODOLOGY_CARDS[2].rotation,
          autoAlpha: 1,
          duration: 1,
          ease: "power2.out",
        });

        // Reading beat for Phase 03
        tl.to({}, { duration: 0.4 });
      }
    });

    // ── Mobile: Smooth staggered entrance without pinning ────────────────
    mm.add("(max-width: 1023px)", () => {
      const cards = gsap.utils.toArray<HTMLElement>(".stacked-process-card");
      gsap.set(cards, { clearProps: "all" });
      gsap.from(cards, {
        scrollTrigger: {
          trigger: stackedContainerRef.current,
          start: "top 85%",
        },
        y: 35,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        clearProps: "all",
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 sm:py-28 relative bg-[#080808] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ================================================================ */}
        {/* SECTION 1: PROFESSIONAL MILESTONES & TRACK RECORD                */}
        {/* ================================================================ */}
        <div id="timeline-section" className="mb-28 sm:mb-40">
          
          {/* Section Header */}
          <div ref={headerRef} className="mb-10 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#100D0B] border border-[#30251D] text-xs font-sans font-semibold text-[#D6A76C] mb-3">
              <Briefcase className="w-3.5 h-3.5 text-[#F0C995]" />
              <span>EXPERIENCE &amp; PRODUCTION MILESTONES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
              Professional Milestones &amp;{" "}
              <span className="text-[#F0C995]">Track Record</span>
            </h2>
            <p className="text-sm sm:text-base text-[#B7A7A7] mt-2.5 font-sans max-w-2xl">
              Proven hands-on track record building high-concurrency web systems, REST microservices, and AI-driven automation workflows.
            </p>
          </div>

          {/* Key Achievements Metrics Strip (Directly under Title) */}
          <div
            ref={metricsRef}
            className="w-full rounded-2xl border border-[#30251D] bg-[#100D0B]/80 backdrop-blur-sm p-6 sm:p-8 mb-10 sm:mb-12 shadow-[0_12px_35px_-10px_rgba(0,0,0,0.8)]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-[#30251D] text-center sm:text-left">
              <div className="sm:pr-6 flex flex-col items-center sm:items-start">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
                    2+ Year
                  </span>
                  <span className="text-[11px] font-sans font-semibold uppercase tracking-widest text-[#F0C995]">
                    PRODUCTION EXP
                  </span>
                </div>
                <p className="text-xs font-sans text-[#B7A7A7] mt-1.5">
                  Full-stack web apps &amp; production cloud systems
                </p>
              </div>
              <div className="pt-6 sm:pt-0 sm:px-8 flex flex-col items-center sm:items-start">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
                    10+
                  </span>
                  <span className="text-[11px] font-sans font-semibold uppercase tracking-widest text-[#F0C995]">
                    FULL STACK APPS BUILT
                  </span>
                </div>
                <p className="text-xs font-sans text-[#B7A7A7] mt-1.5">
                  MERN &amp; PERN platforms with enterprise architecture
                </p>
              </div>
              <div className="pt-6 sm:pt-0 sm:pl-8 flex flex-col items-center sm:items-start">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-sans tracking-tight">
                    6
                  </span>
                  <span className="text-[11px] font-sans font-semibold uppercase tracking-widest text-[#F0C995]">
                    N8N WORKFLOWS DEPLOYED
                  </span>
                </div>
                <p className="text-xs font-sans text-[#B7A7A7] mt-1.5">
                  WhatsApp Cloud API &amp; AI agent automation pipelines
                </p>
              </div>
            </div>
          </div>

          {/* 50% and 50% Experience Boxes Grid */}
          <div
            ref={experienceGridRef}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch"
          >
            {EXPERIENCE_HISTORY.map((exp, index) => (
              <div
                key={index}
                className="experience-box rounded-2xl border border-[#30251D] bg-[#100D0B] p-6 sm:p-8 hover:border-[#D6A76C]/60 hover:shadow-[0_16px_40px_-10px_rgba(214,167,108,0.22)] transition-all duration-300 relative overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Header Row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                          {exp.role}
                        </h3>
                        {index === 0 && (
                          <span className="px-2.5 py-0.5 rounded-full bg-[#D6A76C]/15 border border-[#D6A76C]/40 text-[11px] font-sans font-semibold text-[#F0C995]">
                            Current Role
                          </span>
                        )}
                      </div>
                      <p className="text-base font-sans font-semibold text-[#F0C995] mt-1">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs font-sans text-[#B7A7A7]">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#080808] border border-[#30251D]">
                        <Calendar className="w-3.5 h-3.5 text-[#D6A76C]" />
                        <span>{exp.period}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#080808] border border-[#30251D]">
                        <MapPin className="w-3.5 h-3.5 text-[#D6A76C]" />
                        <span>{exp.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <ul className="space-y-3 mb-6">
                    {exp.highlights.map((bullet, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-[#B7A7A7] leading-relaxed font-sans"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#D6A76C] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills Chips */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#30251D]/60 mt-auto">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md bg-[#080808] border border-[#30251D] text-[11px] font-sans font-medium text-[#B7A7A7] hover:border-[#D6A76C]/40 hover:text-white transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ================================================================ */}
        {/* SECTION 2: ENGINEERING METHODOLOGY — PINNED STACKED CARDS        */}
        {/* ================================================================ */}
        <div
          ref={stackedContainerRef}
          className="py-8 lg:py-12 flex items-center justify-center my-6 lg:my-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center w-full">
            
            {/* Left: Context Column */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#100D0B] border border-[#30251D] text-xs font-sans font-semibold text-[#F0C995] mb-5 w-fit">
                <Layers className="w-3.5 h-3.5 text-[#D6A76C]" />
                <span>ENGINEERING METHODOLOGY</span>
              </div>

              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans leading-[1.15] mb-5">
                From System{" "}
                <span className="text-[#F0C995]">Blueprint</span> to
                Enterprise Scale
              </h3>

              <p className="font-sans text-sm sm:text-base text-[#B7A7A7] leading-relaxed mb-8">
                Every project follows a disciplined three-phase execution
                model: architecting robust data schemas, building
                high-throughput React/Next.js layers, and automating
                downstream operations with AI workflows.
              </p>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#D6A76C] hover:bg-[#F0C995] text-[#080808] font-sans font-semibold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(214,167,108,0.3)] w-full sm:w-fit min-h-[44px]"
              >
                <span>Discuss Your Architecture</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            {/* Right: Pinned Stacked Cards Deck (Stacked over each other on scroll on desktop, natural stack on mobile) */}
            <div className="lg:col-span-7 relative h-auto lg:h-[470px] flex items-center justify-center w-full">
              <div className="w-full max-w-[560px] relative h-auto lg:h-[470px]">
                {METHODOLOGY_CARDS.map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.step}
                      className="stacked-process-card w-full rounded-3xl border border-[#30251D] bg-[#100D0B] p-6 sm:p-7 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95),0_0_35px_rgba(214,167,108,0.12)] transition-shadow duration-300 hover:border-[#D6A76C]/60 hover:shadow-[0_25px_70px_-15px_rgba(214,167,108,0.25)] relative lg:absolute lg:inset-x-0 lg:top-0 overflow-hidden mb-6 lg:mb-0"
                      style={{
                        zIndex: idx + 1,
                      }}
                    >
                      {/* Ambient corner glow */}
                      <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-[rgba(229,37,42,0.15)] to-transparent pointer-events-none rounded-tr-3xl" />

                      {/* Header row */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#080808] border border-[#30251D] flex items-center justify-center text-[#F0C995]">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="font-sans font-bold text-xs text-[#D6A76C] tracking-widest uppercase">
                              PHASE {card.step}
                            </span>
                            <p className="font-sans text-xs text-[#888888] mt-0.5">
                              {card.category}
                            </p>
                          </div>
                        </div>
                        <span className="font-sans text-3xl font-extrabold text-[#30251D] select-none">
                          {card.step}
                        </span>
                      </div>

                      {/* Title & description */}
                      <h4 className="font-sans font-bold text-xl sm:text-2xl text-white mb-2.5">
                        {card.title}
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-[#B7A7A7] leading-relaxed mb-5">
                        {card.description}
                      </p>

                      {/* Deliverables */}
                      <div className="bg-[#080808] rounded-xl p-4 border border-[#30251D] mb-5">
                        <p className="font-sans text-[11px] font-semibold uppercase tracking-wider text-[#F0C995] mb-2.5">
                          Key Deliverables
                        </p>
                        <ul className="space-y-2">
                          {card.deliverables.map((d, dIdx) => (
                            <li
                              key={dIdx}
                              className="flex items-start gap-2.5 text-xs font-sans text-[#B7A7A7]"
                            >
                              <CheckCircle2 className="w-4 h-4 text-[#D6A76C] shrink-0 mt-0.5" />
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech chips */}
                      <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-[#30251D]/60">
                        {card.techChips.map((chip) => (
                          <span
                            key={chip}
                            className="px-2.5 py-0.5 rounded-md bg-[#080808] border border-[#30251D] text-[11px] font-sans font-medium text-[#B7A7A7] hover:border-[#D6A76C]/40 hover:text-white transition-colors duration-200"
                          >
                            {chip}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
