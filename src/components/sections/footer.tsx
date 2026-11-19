"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { ArrowUp } from "lucide-react";
import { useSmoothScroll } from "@/components/providers/smooth-scroll-provider";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  const { scrollTo } = useSmoothScroll();

  return (
    <footer className="border-t border-[#30251D] bg-[#080808] pt-14 sm:pt-20 pb-10 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#30251D]/60">
          {/* Brand Info with Larger Bespoke Luxury Logo */}
          <div>
            <Logo variant="footer" size={48} className="mb-3" />
            <p className="text-xs font-sans text-[#B7A7A7]">
              {PERSONAL_INFO.title} • Lahore, PK • MERN &amp; PERN Architecture
            </p>
          </div>

          {/* Quick Anchor Links (Sora font-medium) */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 sm:gap-6 text-xs font-sans font-medium text-[#B7A7A7]">
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                scrollTo(0);
              }}
              className="hover:text-[#F0C995] transition-colors py-1"
            >
              Top
            </a>
            <a
              href="#work"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#work", { offset: -72 });
              }}
              className="hover:text-[#F0C995] transition-colors py-1"
            >
              Work
            </a>
            <a
              href="#solutions"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#solutions", { offset: -72 });
              }}
              className="hover:text-[#F0C995] transition-colors py-1"
            >
              Solutions
            </a>
            <a
              href="#automation"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#automation", { offset: -72 });
              }}
              className="hover:text-[#F0C995] transition-colors py-1"
            >
              Automations
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contact", { offset: -72 });
              }}
              className="hover:text-[#F0C995] transition-colors py-1"
            >
              Contact
            </a>
          </div>

          {/* Back to Top Button */}
          <button
            onClick={() => scrollTo(0)}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#100D0B] hover:bg-[#100D0B]/80 border border-[#30251D] hover:border-[#D6A76C]/50 text-xs font-sans font-semibold text-white transition-all group min-h-[44px] w-full sm:w-auto active:scale-95"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#D6A76C] group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Brand Typographic Statement - Presentable, Elegant & Proportional Signature */}
        <div className="py-8 sm:py-12 overflow-hidden pointer-events-none select-none flex flex-col items-center justify-center" aria-hidden="true">
          <p className="font-sans font-extrabold text-[clamp(1.15rem,3.8vw,2.5rem)] tracking-[0.16em] sm:tracking-[0.22em] text-white/[0.08] uppercase leading-tight text-center whitespace-nowrap max-w-full px-2">
            Shahzaib Ashraf
          </p>
          <div className="w-16 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-[#D6A76C]/35 to-transparent mx-auto mt-3 sm:mt-4" />
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 pb-2 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#888888] border-t border-[#30251D]/40">
          <p className="text-center sm:text-left">© 2026 Shahzaib Ashraf. All engineering rights reserved.</p>
          <p className="flex items-center gap-1 text-center sm:text-right">
            <span>Built with Next.js, Tailwind, GSAP &amp; Three.js</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
