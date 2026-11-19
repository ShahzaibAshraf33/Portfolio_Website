"use client";

import React from "react";
import { PERSONAL_INFO } from "@/data/portfolio-data";
import { WhatsAppIcon } from "@/components/ui/icons";

export function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Contact options"
      className="fixed bottom-5 right-4 sm:bottom-8 sm:right-8 z-40"
    >
      <a
        href={PERSONAL_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group relative flex items-center h-12 sm:h-13 rounded-full bg-[#100D0B] border border-[#25D366]/40 hover:border-[#25D366] text-white shadow-[0_8px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(37,211,102,0.25)] hover:shadow-[0_8px_35px_rgba(37,211,102,0.45)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 px-3.5 sm:px-4 gap-2.5 overflow-hidden backdrop-blur-md"
      >
        {/* Ambient green radial glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Pulsing online status indicator dot */}
        <span className="relative flex h-2.5 w-2.5 shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#25D366]" />
        </span>

        {/* Authentic WhatsApp Icon with brand green fill */}
        <div className="w-5 h-5 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform duration-300">
          <WhatsAppIcon className="w-5 h-5" />
        </div>

        {/* Text Label: smoothly visible and expands cleanly on hover */}
        <span className="font-sans font-semibold text-xs sm:text-sm text-white whitespace-nowrap max-w-0 opacity-0 group-hover:max-w-xs group-hover:opacity-100 transition-all duration-300 ease-out overflow-hidden">
          Chat on WhatsApp
        </span>
      </a>
    </aside>
  );
}

