"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useSmoothScroll } from "@/components/providers/smooth-scroll-provider";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";
import { Logo } from "@/components/ui/logo";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: "Experience", href: "#experience" },
    { label: "Work", href: "#work" },
    { label: "Solutions", href: "#solutions" },
    { label: "Automations", href: "#automation" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    scrollTo(href, { offset: -72 });
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 h-[72px] z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#080808]/90 backdrop-blur-xl border-b border-[#30251D] shadow-[0_10px_30px_rgba(0,0,0,0.7)]"
            : "bg-[#080808]/70 backdrop-blur-lg border-b border-[#30251D]/60"
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo with Bespoke Intertwined SA Monogram & Wordmark */}
          <Link
            href="/"
            onClick={(e) => handleNavClick(e, "#hero")}
            className="flex items-center group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D6A76C]"
            aria-label="Shahzaib Ashraf Home"
          >
            <Logo variant="navbar" size={34} />
          </Link>

          {/* Desktop Center Links (Sora font-medium 500) */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Desktop Nav">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-3.5 py-1.5 font-sans font-medium text-xs lg:text-sm text-[#B7A7A7] hover:text-[#F0C995] rounded-full transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action: Premium Pill "Let's Talk" CTA (Sora font-semibold 600) */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="hidden md:inline-flex items-center gap-1.5 px-5 py-2 text-sm font-sans font-semibold text-[#080808] bg-[#F0C995] hover:bg-white rounded-full transition-all duration-300 shadow-[0_0_16px_rgba(214,167,108,0.28)] hover:shadow-[0_0_24px_rgba(240,201,149,0.5)] transform hover:scale-[1.02] active:scale-[0.98] min-h-[44px]"
            >
              <span>Let&apos;s Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile Menu Button - min 44x44px Touch Target */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-11 h-11 flex items-center justify-center rounded-xl text-[#B7A7A7] hover:text-white bg-[#100D0B] border border-[#30251D] transition-colors active:scale-95"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          data-lenis-prevent="true"
          className="fixed inset-0 z-50 bg-[#080808]/98 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-8 md:hidden animate-in fade-in duration-200 overflow-y-auto"
        >
          <div className="flex items-center justify-between border-b border-[#30251D] pb-4">
            <Logo variant="navbar" size={32} />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-11 h-11 flex items-center justify-center rounded-full text-[#B7A7A7] hover:text-white bg-[#100D0B] border border-[#30251D] active:scale-95"
              aria-label="Close mobile menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col gap-3 py-6" aria-label="Mobile Links">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-sans font-medium text-lg sm:text-xl text-[#B7A7A7] hover:text-[#F0C995] py-2.5 border-b border-[#30251D]/40 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3 pt-4 border-t border-[#30251D]">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
              className="w-full py-3.5 text-center font-sans font-semibold text-sm text-[#080808] bg-[#F0C995] hover:bg-white rounded-full shadow-lg transition-colors min-h-[48px] flex items-center justify-center"
            >
              Let&apos;s Talk ↗
            </a>
            <a
              href={PERSONAL_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 flex items-center justify-center gap-2 font-sans font-medium text-xs sm:text-sm text-white bg-[#100D0B] border border-[#30251D] rounded-full hover:border-[#D6A76C]/50 transition-colors min-h-[48px]"
            >
              <MessageSquare className="w-4 h-4 text-[#D6A76C]" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
