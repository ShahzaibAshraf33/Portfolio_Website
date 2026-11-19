"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Preloader } from "@/components/ui/preloader";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Lazy-loaded below-the-fold sections for optimized performance & faster initial paint
const Experience = dynamic(
  () => import("@/components/sections/experience").then((mod) => mod.Experience),
  { ssr: true }
);
const Projects = dynamic(
  () => import("@/components/sections/projects").then((mod) => mod.Projects),
  { ssr: true }
);
const WhyPartner = dynamic(
  () => import("@/components/sections/why-partner").then((mod) => mod.WhyPartner),
  { ssr: true }
);
const Automations = dynamic(
  () => import("@/components/sections/automations").then((mod) => mod.Automations),
  { ssr: false }
);
const SkillsEducation = dynamic(
  () => import("@/components/sections/skills-education").then((mod) => mod.SkillsEducation),
  { ssr: true }
);
const AiPhilosophy = dynamic(
  () => import("@/components/sections/ai-philosophy").then((mod) => mod.AiPhilosophy),
  { ssr: true }
);
const Contact = dynamic(
  () => import("@/components/sections/contact").then((mod) => mod.Contact),
  { ssr: true }
);
const Footer = dynamic(
  () => import("@/components/sections/footer").then((mod) => mod.Footer),
  { ssr: true }
);

// Client-only dynamic widgets
const CustomCursor = dynamic(
  () => import("@/components/ui/custom-cursor").then((mod) => mod.CustomCursor),
  { ssr: false }
);
const FloatingWhatsApp = dynamic(
  () => import("@/components/ui/floating-whatsapp").then((mod) => mod.FloatingWhatsApp),
  { ssr: false }
);

export default function Home() {
  return (
    <>
      {/* 0-100% Preloader Curtain */}
      <Preloader
        onComplete={() => {
          if (typeof window !== "undefined") {
            ScrollTrigger.refresh();
          }
        }}
      />

      {/* Custom Fluid Cursor for Mouse Users */}
      <CustomCursor />

      {/* Persistent Floating WhatsApp Action Button */}
      <FloatingWhatsApp />

      {/* Main Page Layout */}
      <div className="relative min-h-screen flex flex-col justify-between selection:bg-[#D6A76C] selection:text-[#080808]">
        {/* Floating Top Navbar (Fixed 72px) */}
        <Navbar />

        {/* Content Sections: starts strictly below navbar */}
        <main id="main-content" className="flex-1 pt-[72px]">
          {/* Hero Section with 3D Perspective Tile Grid (High priority LCP) */}
          <Hero />

          {/* Professional Milestones & Impact: Experience Timeline */}
          <Experience />

          {/* Featured Solutions & Projects: Staggered Masonry */}
          <Projects />

          {/* Why Partner With Me: Bento Grid + 3D Dotted Globe */}
          <WhyPartner />

          {/* AI Automations & n8n Workflows: Horizontal Scroll Rail */}
          <Automations />

          {/* Technical Stack & Education */}
          <SkillsEducation />

          {/* AI-Era Engineering Paradigm & Philosophy */}
          <AiPhilosophy />

          {/* Contact Section & Lead Routing Pipeline */}
          <Contact />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
