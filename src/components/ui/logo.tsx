import React from "react";

interface LogoProps {
  variant?: "navbar" | "footer" | "mark-only" | "favicon";
  className?: string;
  size?: number;
  showText?: boolean;
}

/**
 * Bespoke Luxury Intertwined "SA" Monogram for Shahzaib Ashraf.
 * Directly modeled after the luxury cursive serif emblem:
 * - Ornate swash apex on 'A' curving to the top-right.
 * - Sweeping calligraphy tail extending down-right.
 * - Elegant cursive 'S' looping around the left leg and curling up into a bottom-left swash.
 * - High-contrast metallic champagne gold (#F0C995) to warm gold (#D6A76C) gradients.
 */
export function SAMonogram({
  size = 36,
  className = "",
  withGlow = true,
}: {
  size?: number;
  className?: string;
  withGlow?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 110 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Shahzaib Ashraf SA Luxury Monogram"
    >
      <defs>
        {/* Core champagne to warm gold metallic ribbon gradient */}
        <linearGradient
          id="saGoldLuxury"
          x1="18"
          y1="12"
          x2="95"
          y2="88"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#FDE6C8" />
          <stop offset="25%" stopColor="#F0C995" />
          <stop offset="65%" stopColor="#D6A76C" />
          <stop offset="100%" stopColor="#9C7238" />
        </linearGradient>

        {/* Secondary cross-stroke highlight gradient */}
        <linearGradient
          id="saGoldLight"
          x1="20"
          y1="50"
          x2="90"
          y2="50"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#F0C995" />
          <stop offset="100%" stopColor="#D6A76C" />
        </linearGradient>

        {/* Deep contour shadow for underweaving */}
        <linearGradient
          id="saGoldDeep"
          x1="40"
          y1="30"
          x2="70"
          y2="70"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="#D6A76C" />
          <stop offset="100%" stopColor="#825C2B" />
        </linearGradient>

        {/* Subtle warm aura glow */}
        {withGlow && (
          <filter
            id="saLuxuryAura"
            x="-25%"
            y="-25%"
            width="150%"
            height="150%"
            filterUnits="userSpaceOnUse"
          >
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="2.5"
              floodColor="#D6A76C"
              floodOpacity="0.32"
            />
          </filter>
        )}
      </defs>

      <g filter={withGlow ? "url(#saLuxuryAura)" : undefined}>
        {/* ========================================================= */}
        {/* LETTER 'S' - Top Arc & Upper Bowl (Weaving Behind/Around A) */}
        {/* ========================================================= */}
        {/* Top swash terminal of S */}
        <path
          d="M 58 19 C 55 17 48 18 43 23 C 37 28 36 36 41 42 C 45 47 52 50 56 53"
          stroke="url(#saGoldLuxury)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />

        {/* ========================================================= */}
        {/* LETTER 'A' - Apex Swash Crest & Main Left Stem           */}
        {/* ========================================================= */}
        {/* Calligraphic swash crest arching at the apex of 'A' */}
        <path
          d="M 52 23 C 54 16 61 13 67 14 C 73 15 76 19 74 24 C 72 28 66 28 61 25"
          stroke="url(#saGoldLight)"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* Left diagonal stem of 'A' with base curved serif */}
        <path
          d="M 61 24 L 41 68 C 39 72 35 74 30 74"
          stroke="url(#saGoldLuxury)"
          strokeWidth="4.8"
          strokeLinecap="round"
          fill="none"
        />

        {/* Fine inner accent line for classical thick/thin serif balance */}
        <path
          d="M 60 27 L 43 66"
          stroke="#FDE6C8"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.75"
        />

        {/* ========================================================= */}
        {/* LETTER 'A' - Horizontal Crossbar                          */}
        {/* ========================================================= */}
        <path
          d="M 46 51 H 71"
          stroke="url(#saGoldLight)"
          strokeWidth="3.2"
          strokeLinecap="round"
        />

        {/* ========================================================= */}
        {/* LETTER 'S' - Lower Loop & Flourished Bottom-Left Finial   */}
        {/* ========================================================= */}
        {/* S spine descending across crossbar into lower loop */}
        <path
          d="M 56 53 C 61 57 63 63 60 69 C 57 74 49 76 43 75 C 33 73 29 65 31 57 C 33 50 42 48 46 54 C 49 59 47 67 40 68 C 36 68 33 65 34 61"
          stroke="url(#saGoldLuxury)"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* ========================================================= */}
        {/* LETTER 'A' - Right Stem & Elongated Bottom Swash Tail     */}
        {/* ========================================================= */}
        {/* Right diagonal descending and flaring out into sweeping calligraphic tail */}
        <path
          d="M 61 24 L 75 62 C 79 72 87 76 99 78"
          stroke="url(#saGoldLuxury)"
          strokeWidth="5"
          strokeLinecap="round"
          fill="none"
        />

        {/* Tapered tail highlight */}
        <path
          d="M 74 61 C 78 70 85 75 97 77"
          stroke="#FDE6C8"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.8"
          fill="none"
        />

        {/* Small gold sparkle accent at apex intersection */}
        <circle cx="61" cy="24" r="1.8" fill="#FDE6C8" />
      </g>
    </svg>
  );
}

/**
 * 32x32 Favicon specific version: tuned for crisp readability at small pixel grids.
 */
export function SAFaviconMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="SA Favicon"
    >
      <rect width="32" height="32" rx="7" fill="#080808" />
      <rect
        x="0.75"
        y="0.75"
        width="30.5"
        height="30.5"
        rx="6.25"
        stroke="#30251D"
        strokeWidth="1.5"
      />
      <defs>
        <linearGradient id="favGoldGrad" x1="5" y1="5" x2="27" y2="27" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F0C995" />
          <stop offset="100%" stopColor="#D6A76C" />
        </linearGradient>
      </defs>
      {/* S curve */}
      <path
        d="M 18 7 C 14 6 11 9 12 13 C 13 16 20 16 20 20 C 20 24 14 26 10 23 C 8 21 8 18 10 17"
        stroke="url(#favGoldGrad)"
        strokeWidth="2.2"
        strokeLinecap="round"
        fill="none"
      />
      {/* A apex & left stem */}
      <path
        d="M 19 8 L 12 24 C 11 25 9 25 8 25"
        stroke="url(#favGoldGrad)"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
      {/* A crossbar */}
      <path d="M 13 17 H 21" stroke="#F0C995" strokeWidth="1.8" strokeLinecap="round" />
      {/* A right stem & tail flourish */}
      <path
        d="M 19 8 L 23 21 C 24 24 27 25 30 25"
        stroke="url(#favGoldGrad)"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function Logo({
  variant = "navbar",
  className = "",
  size,
  showText = true,
}: LogoProps) {
  if (variant === "mark-only") {
    return <SAMonogram size={size || 36} className={className} />;
  }

  if (variant === "favicon") {
    return <SAFaviconMark size={size || 32} />;
  }

  if (variant === "footer") {
    return (
      <div className={`flex items-center gap-3.5 group select-none ${className}`}>
        <div className="relative p-1.5 rounded-2xl bg-[#100D0B] border border-[#30251D] shadow-[0_0_25px_rgba(214,167,108,0.22)] transition-all duration-300 group-hover:border-[#D6A76C]/60 group-hover:scale-105">
          <SAMonogram size={size || 48} />
        </div>
        {showText && (
          <div className="flex flex-col">
            <span className="font-sans font-bold text-lg sm:text-xl text-white tracking-tight group-hover:text-[#F0C995] transition-colors">
              Shahzaib Ashraf
            </span>
            <span className="font-sans text-[11px] font-medium tracking-widest text-[#B7A7A7] uppercase">
              Full Stack &amp; AI Engineer
            </span>
          </div>
        )}
      </div>
    );
  }

  // Default: navbar
  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 group select-none ${className}`}>
      <div className="relative p-1 rounded-xl bg-[#100D0B] border border-[#30251D] shadow-[0_0_18px_rgba(214,167,108,0.2)] transition-all duration-300 group-hover:border-[#D6A76C]/60 group-hover:scale-105">
        <SAMonogram size={size || 34} />
      </div>
      {showText && (
        <span className="font-sans font-semibold text-sm sm:text-base text-white tracking-tight group-hover:text-[#F0C995] transition-colors">
          Shahzaib Ashraf
        </span>
      )}
    </div>
  );
}
