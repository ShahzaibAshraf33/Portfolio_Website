"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, Calendar } from "lucide-react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { useSmoothScroll } from "@/components/providers/smooth-scroll-provider";
import {
  ReactLogo,
  NextLogo,
  NodeLogo,
  PostgresLogo,
  MongoLogo,
  TsLogo,
  DockerLogo,
  N8nLogo,
  RedisLogo,
  AwsLogo,
  PrismaLogo,
  TailwindLogo,
  GraphqlLogo,
  PythonLogo,
  ExpressLogo,
  GitLogo,
  LinuxLogo,
  FirebaseLogo,
} from "@/components/ui/tech-icons";

export function Hero() {
  const { scrollTo } = useSmoothScroll();

  const techItems = [
    { name: "React", icon: ReactLogo },
    { name: "redis", icon: RedisLogo },
    { name: "NEXT.js", icon: NextLogo },
    { name: "aws", icon: AwsLogo },
    { name: "PostgreSQL", icon: PostgresLogo },
    { name: "TypeScript", icon: TsLogo },
    { name: "Docker", icon: DockerLogo },
    { name: "MongoDB", icon: MongoLogo },
    { name: "n8n", icon: N8nLogo },
    { name: "Node.js", icon: NodeLogo },
    { name: "Prisma", icon: PrismaLogo },
    { name: "Tailwind CSS", icon: TailwindLogo },
    { name: "GraphQL", icon: GraphqlLogo },
    { name: "Python", icon: PythonLogo },
    { name: "Express.js", icon: ExpressLogo },
    { name: "Git", icon: GitLogo },
    { name: "Linux", icon: LinuxLogo },
    { name: "Firebase", icon: FirebaseLogo },
  ];

  return (
    <section
      id="hero"
      className="relative w-full h-auto min-h-[calc(100svh-72px)] lg:h-[calc(100svh-72px)] lg:max-h-[1080px] bg-[#080808] flex flex-col justify-between overflow-hidden select-none"
    >
      {/* Blurred Red Ambient Viewport Edge Lights (Preserved rich ambient glow) */}
      <div
        className="pointer-events-none absolute -left-28 top-1/4 w-[500px] h-[500px] rounded-full z-0"
        style={{
          background: "radial-gradient(circle, rgba(229,37,42,0.28) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-28 top-1/3 w-[550px] h-[550px] rounded-full z-0"
        style={{
          background: "radial-gradient(circle, rgba(229,37,42,0.32) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
        aria-hidden="true"
      />

      {/* Layer 1: Base Dark Void Background */}
      <div className="pointer-events-none absolute inset-0 bg-[#080808] z-0" />

      {/* Layer 2: DESKTOP ONLY (>= 1024px) - Right-Side High-Res Redesign Portrait & 3D Red Tile Grid (Strictly below navbar, preserving full face & eyes) */}
      <div className="hidden lg:block pointer-events-none absolute right-0 top-0 bottom-0 w-[56%] xl:w-[58%] z-[2] overflow-hidden">
        <Image
          src="/shahzaib-redesign.webp"
          alt="Shahzaib Ashraf — Full Stack AI Engineer"
          fill
          priority
          sizes="1200px"
          className="object-cover object-[62%_top] xl:object-[58%_top]"
        />

        {/* Left Gradient Fade: Seamlessly blends into the dark text area */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #080808 0%, rgba(8,8,8,0.96) 20%, rgba(8,8,8,0.48) 50%, transparent 80%)",
          }}
        />

        {/* Top Subtle Feathering: Clean edge without casting dark shadow over forehead */}
        <div
          className="absolute inset-x-0 top-0 h-8"
          style={{
            background:
              "linear-gradient(to bottom, #080808 0%, rgba(8,8,8,0.3) 50%, transparent 100%)",
          }}
        />

        {/* Bottom Fade into the Tech Marquee Strip */}
        <div
          className="absolute inset-x-0 bottom-0 h-24"
          style={{
            background:
              "linear-gradient(to top, #080808 0%, rgba(8,8,8,0.85) 45%, transparent 100%)",
          }}
        />
      </div>

      {/* Layer 3: DESKTOP ONLY (>= 1024px) - Left Column Readability Protection */}
      <div
        className="hidden lg:block pointer-events-none absolute inset-y-0 left-0 w-[50%] z-[3]"
        style={{
          background:
            "linear-gradient(90deg, #080808 0%, rgba(8,8,8,0.97) 75%, transparent 100%)",
        }}
      />

      {/* ================= HERO MAIN CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-8 lg:px-12 flex-1 flex items-center py-6 lg:py-0">
        
        {/* ── 1. MOBILE VIEW (< 768px): Dedicated Portrait Showcase & Clean Vertical Hierarchy ── */}
        <div className="flex md:hidden flex-col items-center w-full py-4 space-y-6">
          {/* Portrait Showcase Card: Sharp Face & 3D Red Perspective Grid */}
          <div className="relative w-full max-w-[340px] sm:max-w-[400px] h-[300px] sm:h-[350px] rounded-3xl overflow-hidden border border-[#30251D] bg-[#100D0B] shadow-[0_14px_44px_rgba(229,37,42,0.24)]">
            <Image
              src="/shahzaib-redesign.webp"
              alt="Shahzaib Ashraf — Full Stack AI Engineer"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 400px"
              className="object-cover object-[center_top]"
            />
            {/* Ambient Bottom Feathering */}
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#100D0B] via-[#100D0B]/30 to-transparent" />
            
            {/* Live Availability Badge */}
            <div className="absolute bottom-3 left-3 z-10 flex items-center gap-2 px-3 py-1 rounded-full bg-[#080808]/90 backdrop-blur-md border border-[#30251D] text-[10.5px] sm:text-[11px] font-sans font-semibold text-[#F0C995] max-w-[calc(100%-24px)]">
              <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shrink-0" />
              <span className="truncate">Available for new projects and collaborations</span>
            </div>
          </div>

          {/* Typography & CTA Actions */}
          <div className="w-full text-left">
            <h1 className="text-white font-extrabold font-sans tracking-[-0.035em] leading-[1.12] mb-3 text-[clamp(26px,7vw,34px)]">
              Engineering{" "}
              <span className="text-[#F0C995] inline-block">scalable architecture</span>{" "}
              for modern enterprises
            </h1>

            <div className="space-y-2 mb-5 max-w-[500px]">
              <p className="font-sans font-semibold text-xs sm:text-sm text-[#F0C995] tracking-tight">
                {PERSONAL_INFO.subheadline}
              </p>
              <p className="font-sans font-normal text-xs sm:text-sm text-[#B7A7A7] leading-[1.6]">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Stacked Full-Width Buttons */}
            <div className="flex flex-col gap-3 w-full">
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("#work", { offset: -72 });
                }}
                className="inline-flex items-center justify-center gap-2 h-12 w-full px-6 rounded-full bg-white hover:bg-[#F0C995] text-[#080808] font-sans font-semibold text-xs sm:text-sm transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-[0.98]"
              >
                <span>Learn More</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("#contact", { offset: -72 });
                }}
                className="inline-flex items-center justify-center gap-2 h-12 w-full px-6 rounded-full bg-[#100D0B] hover:bg-[#100D0B]/80 text-white border border-[#30251D] hover:border-[#D6A76C]/60 font-sans font-semibold text-xs sm:text-sm transition-all duration-300 active:scale-[0.98]"
              >
                <Calendar className="w-3.5 h-3.5 text-[#F0C995]" />
                <span>Book a Meeting</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── 2. TABLET VIEW (768px – 1023px): Two-Column Balanced Side-by-Side ── */}
        <div className="hidden md:flex lg:hidden flex-row items-center justify-between gap-6 md:gap-8 py-8 w-full">
          {/* Left Column (52%) */}
          <div className="w-[52%] flex flex-col justify-center">
            <h1 className="text-white font-extrabold font-sans tracking-[-0.035em] leading-[1.1] mb-3 text-3xl md:text-4xl">
              Engineering{" "}
              <span className="text-[#F0C995] inline-block">scalable architecture</span>{" "}
              for modern enterprises
            </h1>

            <div className="space-y-2 mb-6 max-w-[440px]">
              <p className="font-sans font-semibold text-sm text-[#F0C995] tracking-tight">
                {PERSONAL_INFO.subheadline}
              </p>
              <p className="font-sans font-normal text-xs sm:text-sm text-[#B7A7A7] leading-[1.6]">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full">
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("#work", { offset: -72 });
                }}
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-white hover:bg-[#F0C995] text-[#080808] font-sans font-semibold text-xs sm:text-sm transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-[0.98]"
              >
                <span>Learn More</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("#contact", { offset: -72 });
                }}
                className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-full bg-[#100D0B] hover:bg-[#100D0B]/80 text-white border border-[#30251D] hover:border-[#D6A76C]/60 font-sans font-semibold text-xs sm:text-sm transition-all duration-300 active:scale-[0.98]"
              >
                <Calendar className="w-3.5 h-3.5 text-[#F0C995]" />
                <span>Book a Meeting</span>
              </a>
            </div>
          </div>

          {/* Right Column (48%): Dedicated Portrait Container */}
          <div className="w-[48%] flex justify-center items-center">
            <div className="relative w-full max-w-[360px] h-[440px] rounded-3xl overflow-hidden border border-[#30251D] bg-[#100D0B] shadow-[0_16px_50px_rgba(229,37,42,0.25)]">
              <Image
                src="/shahzaib-redesign.webp"
                alt="Shahzaib Ashraf — Full Stack AI Engineer"
                fill
                priority
                sizes="400px"
                className="object-cover object-[center_top]"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#100D0B] via-[#100D0B]/40 to-transparent" />
              <div className="absolute bottom-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#080808]/90 backdrop-blur-md border border-[#30251D] text-xs font-sans font-semibold text-[#F0C995] max-w-[calc(100%-32px)]">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse shrink-0" />
                <span className="truncate">Available for new projects and collaborations</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── 3. DESKTOP VIEW (>= 1024px): 100% IDENTICAL & FROZEN ── */}
        <div className="hidden lg:flex w-full items-center">
          {/* Left Column: Headlines & CTA Buttons (50-52%) */}
          <div className="w-full lg:w-[52%] xl:w-[50%] flex flex-col justify-center max-w-[620px]">
            {/* Main Headline (Sora font-extrabold 800 with selective champagne gold highlight) */}
            <h1
              className="text-white font-extrabold font-sans tracking-[-0.035em] leading-[1.08] mb-3 sm:mb-4"
              style={{ fontSize: "clamp(28px, 6.5vw, 54px)" }}
            >
              Engineering{" "}
              <span className="text-[#F0C995] inline-block">scalable architecture</span>{" "}
              for modern enterprises
            </h1>

            {/* Subtitle (Sora font-semibold 600) & Bio Paragraph (Sora font-normal 400) */}
            <div className="space-y-2 mb-5 sm:mb-6 max-w-[500px]">
              <p className="font-sans font-semibold text-xs sm:text-sm md:text-base text-[#F0C995] tracking-tight">
                {PERSONAL_INFO.subheadline}
              </p>
              <p className="font-sans font-normal text-xs sm:text-sm text-[#B7A7A7] leading-[1.6]">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* Action Buttons (Sora font-semibold 600) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              {/* Primary White / Gold Pill Button */}
              <a
                href="#work"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("#work", { offset: -72 });
                }}
                className="inline-flex items-center justify-center gap-2 h-12 px-6 sm:px-8 rounded-full bg-white hover:bg-[#F0C995] text-[#080808] font-sans font-semibold text-xs sm:text-sm transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_28px_rgba(240,201,149,0.5)] transform hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
              >
                <span>Learn More</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              {/* Secondary Dark Glass Button with Subtle Gold Border: Book a Meeting */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("#contact", { offset: -72 });
                }}
                className="inline-flex items-center justify-center gap-2 h-12 px-5 sm:px-7 rounded-full bg-[#100D0B]/85 hover:bg-[#100D0B] text-white border border-[#30251D] hover:border-[#D6A76C]/60 font-sans font-semibold text-xs sm:text-sm transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
              >
                <Calendar className="w-3.5 h-3.5 text-[#F0C995]" />
                <span>Book a Meeting</span>
              </a>
            </div>
          </div>

          {/* Right Column Spacer (Background portrait fills right half) */}
          <div className="hidden lg:block lg:w-[48%] xl:w-[50%] h-full pointer-events-none" />
        </div>
      </div>

      {/* ================= TECH LOGO STRIP (Moving Infinite Marquee Ticker) ================= */}
      <div
        className="relative z-10 w-full border-t border-[#30251D] bg-[#080808]/90 backdrop-blur-md py-2.5 sm:py-3 px-4 sm:px-8 overflow-hidden"
        aria-label="Technologies and Frameworks Ticker"
      >
        {/* Left & Right Smooth Edge Fade Masks for Seamless Marquee */}
        <div className="pointer-events-none absolute left-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-r from-[#080808] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-l from-[#080808] to-transparent z-10" />

        {/* Infinite Moving Marquee Ticker: 2x Duplication for Seamless 100% Loop */}
        <div className="flex w-max animate-marquee">
          {/* First sequence */}
          <div className="flex items-center gap-4 sm:gap-6 pr-4 sm:pr-6 shrink-0">
            {techItems.map((tech) => {
              const IconComp = tech.icon;
              return (
                <div key={`ticker-1-${tech.name}`} className="flex items-center gap-4 sm:gap-6">
                  <div className="flex items-center gap-2 text-[#B7A7A7] hover:text-white transition-colors cursor-default whitespace-nowrap group">
                    <IconComp className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#B7A7A7] group-hover:text-[#F0C995] transition-colors" />
                    <span className="font-sans text-xs sm:text-sm tracking-tight font-medium">
                      {tech.name}
                    </span>
                  </div>
                  <span className="text-[#30251D] font-thin text-xs sm:text-sm select-none" aria-hidden="true">
                    |
                  </span>
                </div>
              );
            })}
          </div>

          {/* Second sequence for seamless loop */}
          <div className="flex items-center gap-4 sm:gap-6 pr-4 sm:pr-6 shrink-0" aria-hidden="true">
            {techItems.map((tech) => {
              const IconComp = tech.icon;
              return (
                <div key={`ticker-2-${tech.name}`} className="flex items-center gap-4 sm:gap-6">
                  <div className="flex items-center gap-2 text-[#B7A7A7] hover:text-white transition-colors cursor-default whitespace-nowrap group">
                    <IconComp className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#B7A7A7] group-hover:text-[#F0C995] transition-colors" />
                    <span className="font-sans text-xs sm:text-sm tracking-tight font-medium">
                      {tech.name}
                    </span>
                  </div>
                  <span className="text-[#30251D] font-thin text-xs sm:text-sm select-none">
                    |
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
