"use client";

import React, { useState } from "react";
import Image from "next/image";

interface HeroFallbackProps {
  onMouseMove?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export function HeroFallback({ onMouseMove }: HeroFallbackProps) {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handlePointerMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setRotate({ x: -y * 8, y: x * 8 });
    if (onMouseMove) onMouseMove(e);
  };

  const handlePointerLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handlePointerMove}
      onMouseLeave={handlePointerLeave}
      className="relative w-full aspect-[4/5] sm:aspect-[1/1] max-w-[540px] mx-auto flex items-center justify-center select-none"
      style={{ perspective: 1000 }}
    >
      {/* 3D Perspective Tile Tunnel Grid Backdrop */}
      <div
        className="absolute inset-0 rounded-3xl overflow-hidden border border-[#C42B2B]/20 transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${rotate.x * 0.5}deg) rotateY(${rotate.y * 0.5}deg)`,
        }}
      >
        {/* Background dark gradient with deep crimson center */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1A070A] via-[#0E0E10] to-[#0A0A0B]" />

        {/* CSS Perspective Grid / Beveled Tiles Pattern */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(circle at center, rgba(196, 43, 43, 0.5) 0%, transparent 70%),
              linear-gradient(to right, rgba(196, 43, 43, 0.25) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(196, 43, 43, 0.25) 1px, transparent 1px)
            `,
            backgroundSize: "100% 100%, 36px 36px, 36px 36px",
            transform: "perspective(500px) rotateX(15deg) scale(1.1)",
          }}
        />

        {/* Ambient Red Glow Blob */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-72 h-72 rounded-full bg-[#C42B2B]/35 blur-[70px] animate-pulse" />
        </div>
      </div>

      {/* Floating Glass Border Frame (matching the screenshot) */}
      <div
        className="relative z-10 w-[84%] h-[92%] rounded-2xl p-1 transition-transform duration-300 ease-out"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateZ(30px)`,
          border: "1px solid rgba(255, 255, 255, 0.12)",
          background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(196,43,43,0.06) 100%)",
          boxShadow: `
            0 20px 50px -10px rgba(0,0,0,0.8),
            0 0 40px -5px rgba(196, 43, 43, 0.4),
            inset 0 0 25px rgba(196, 43, 43, 0.25)
          `,
        }}
      >
        {/* Red Rim Light Behind Portrait */}
        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-t from-[#C42B2B]/30 via-[#7A1218]/20 to-transparent blur-md -z-10" />

        {/* High-res Cutout Portrait of Shahzaib Ashraf */}
        <div className="relative w-full h-full rounded-xl overflow-hidden flex items-end justify-center">
          <Image
            src="/images/portrait-cutout.webp"
            alt="Shahzaib Ashraf — Associate Software Engineer & AI Automation Developer"
            fill
            sizes="(max-width: 768px) 100vw, 500px"
            priority
            className="object-contain object-bottom filter drop-shadow-[0_15px_30px_rgba(0,0,0,0.7)]"
          />
        </div>
      </div>

      {/* Floating corner indicator pill */}
      <div
        className="absolute bottom-4 right-4 z-20 px-3 py-1 rounded-full bg-[#121214]/85 border border-[#C42B2B]/40 text-[10px] font-mono text-[#E4E4E7] tracking-wider flex items-center gap-1.5 shadow-lg backdrop-blur-md"
        style={{
          transform: `rotateX(${rotate.x * 0.8}deg) rotateY(${rotate.y * 0.8}deg) translateZ(45px)`,
        }}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#C42B2B] animate-ping" />
        <span>PERN &amp; AI ENGINEER</span>
      </div>
    </div>
  );
}

