"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { FEATURED_PROJECTS, Project } from "@/data/portfolio-data";
import { ArrowUpRight, ExternalLink, X, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";
import { useSmoothScroll } from "@/components/providers/smooth-scroll-provider";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const { lenis } = useSmoothScroll();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Reveal project cards on scroll with stagger and clearProps to guarantee permanent visibility
      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        y: 40,
        opacity: 0,
        duration: 0.85,
        stagger: 0.15,
        ease: "power2.out",
        clearProps: "all",
      });

      // Smooth inner-image parallax (Image is taller than container, scrubbed on scroll)
      gsap.utils.toArray<HTMLElement>(".project-image-inner").forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -10 },
          {
            yPercent: 10,
            ease: "none",
            scrollTrigger: {
              trigger: img,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Lock body scroll and pause Lenis smooth scroll while modal dialog is active
  useEffect(() => {
    if (selectedProject) {
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
  }, [selectedProject, lenis]);

  // Close modal dialog on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  const col1 = [FEATURED_PROJECTS[0], FEATURED_PROJECTS[2]];
  const col2 = [FEATURED_PROJECTS[1], FEATURED_PROJECTS[3]];

  const renderCard = (project: Project) => (
    <article
      key={project.id}
      onClick={() => setSelectedProject(project)}
      className="project-card group cursor-pointer rounded-2xl border border-[#30251D] bg-[#100D0B] p-3 sm:p-4 transition-all duration-300 hover:border-[#D6A76C]/60 hover:shadow-[0_20px_45px_-12px_rgba(214,167,108,0.22)] hover:-translate-y-1.5 relative flex flex-col justify-between overflow-hidden"
    >
      {/* Subtle ambient red/gold corner lighting */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-[rgba(229,37,42,0.15)] to-transparent pointer-events-none rounded-tr-2xl" />

      {/* Top Image Preview with Inner Parallax & Slide-Up Hover Bar */}
      <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#080808] border border-[#30251D]/80 mb-4">
        {/* Parallax Image Wrapper (120% height for vertical glide) */}
        <div className="project-image-inner relative w-full h-[120%] -top-[10%]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            loading="lazy"
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        {/* Floating Category Pill */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#100D0B]/90 backdrop-blur-md border border-[#30251D] text-[11px] font-sans font-medium text-[#F0C995] shadow-lg">
          {project.category}
        </div>

        {/* Lawn & Looms Style Slide-Up Hover Action Bar */}
        <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#080808] via-[#080808]/90 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex items-center justify-between">
          <span className="font-sans font-semibold text-xs text-[#F0C995]">
            Explore Architecture &amp; System
          </span>
          <div className="flex items-center gap-1 text-xs text-white">
            <span className="font-medium">Details</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#F0C995]" />
          </div>
        </div>
      </div>

      {/* Bottom Info Section */}
      <div className="flex flex-col gap-3 px-1 pb-1">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-sans font-bold text-xl sm:text-2xl text-white group-hover:text-[#F0C995] transition-colors">
              {project.title}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#B7A7A7] line-clamp-2 mt-1 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Circular ↗ Arrow Button rotating on hover */}
          <div className="w-10 h-10 rounded-full border border-[#30251D] bg-[#080808] flex items-center justify-center shrink-0 group-hover:bg-[#F0C995] group-hover:border-[#F0C995] transition-all duration-300 shadow-[0_0_15px_rgba(214,167,108,0)] group-hover:shadow-[0_0_20px_rgba(240,201,149,0.4)]">
            <ArrowUpRight className="w-4 h-4 text-[#B7A7A7] group-hover:text-[#080808] transition-all duration-300 group-hover:rotate-45" />
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2.5 border-t border-[#30251D]/60">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-md bg-[#080808] border border-[#30251D] text-[11px] font-sans font-medium text-[#B7A7A7]"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-[11px] font-sans text-[#888888] px-1">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </article>
  );

  return (
    <section id="work" ref={sectionRef} className="py-24 sm:py-32 relative bg-[#080808]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            {/* Dots indicator with gold accent */}
            <div className="flex items-center gap-1.5 mb-3" aria-hidden="true">
              <span className="w-2 h-2 rounded-full bg-[#D6A76C]" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
              <span className="w-1.5 h-1.5 rounded-full bg-white/30" />
            </div>

            <p className="text-xs font-sans font-semibold tracking-[0.2em] text-[#D6A76C] uppercase mb-1">
              SOLUTIONS // FEATURED CASE STUDIES
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white font-sans">
              Production Architecture &amp; <span className="text-[#F0C995]">Solutions</span>
            </h2>
          </div>

          <a
            href="https://github.com/ShahzaibAshraf33"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-[#30251D] bg-[#100D0B] hover:border-[#D6A76C]/60 text-xs font-sans font-semibold text-white transition-all duration-200 w-full sm:w-fit min-h-[44px]"
          >
            <span>All GitHub repositories</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#F0C995]" />
          </a>
        </div>

        {/* Staggered Two-Column Masonry */}
        <div ref={cardsContainerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Column 1 */}
          <div className="flex flex-col gap-8 lg:gap-10">
            {col1.map((p) => renderCard(p))}
          </div>

          {/* Column 2 (Offset down for staggered rhythm on desktop) */}
          <div className="flex flex-col gap-8 lg:gap-10 md:mt-16 lg:mt-20">
            {col2.map((p) => renderCard(p))}
          </div>
        </div>
      </div>

      {/* Case Study Modal Dialog */}
      {selectedProject && (
        <div
          role="dialog"
          aria-modal="true"
          data-lenis-prevent="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedProject(null);
            }
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
        >
          <div
            data-lenis-prevent="true"
            className="relative w-full max-w-3xl max-h-[88dvh] overflow-y-auto overscroll-contain custom-modal-scrollbar rounded-3xl bg-[#100D0B] border border-[#30251D] p-5 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.95),0_0_40px_rgba(214,167,108,0.2)]"
          >
            {/* Close Button - min 44x44px touch target */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 w-11 h-11 flex items-center justify-center rounded-full text-[#B7A7A7] hover:text-white bg-[#080808] border border-[#30251D] hover:border-[#D6A76C]/50 transition-all active:scale-95 z-10"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-5 sm:mb-6 pr-12">
              <span className="font-sans font-medium text-xs text-[#F0C995] tracking-wider uppercase">
                {selectedProject.category}
              </span>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mt-1 font-sans">
                {selectedProject.title}
              </h3>
            </div>

            {/* Modal Image Banner */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden mb-6 border border-[#30251D]">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                loading="lazy"
                className="object-cover"
              />
            </div>

            {/* Description */}
            <div className="space-y-4 mb-6">
              <p className="text-xs sm:text-sm md:text-base text-[#D4D4D8] leading-relaxed font-sans">
                {selectedProject.longDescription}
              </p>

              {/* Key Features List */}
              <div className="bg-[#080808] rounded-2xl p-4 sm:p-5 border border-[#30251D]">
                <h4 className="text-xs font-sans font-semibold uppercase text-[#F0C995] tracking-wider mb-3">
                  Architectural Highlights &amp; Features
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#B7A7A7] font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#D6A76C] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tags & Action Links */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-[#30251D]">
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tags.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-md bg-[#080808] border border-[#30251D] text-xs font-sans font-medium text-[#B7A7A7]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-col xs:flex-row sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full border border-[#30251D] bg-[#080808] hover:border-[#D6A76C]/60 text-xs font-sans font-medium text-white transition-all min-h-[44px] w-full sm:w-auto"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                )}
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#D6A76C] hover:bg-[#F0C995] text-[#080808] text-xs font-sans font-semibold transition-all shadow-[0_0_15px_rgba(214,167,108,0.3)] min-h-[44px] w-full sm:w-auto"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
