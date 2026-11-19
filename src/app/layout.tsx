/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata, Viewport } from "next";
import { Toaster } from "sonner";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/providers/smooth-scroll-provider";

export const viewport: Viewport = {
  themeColor: "#080808",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Shahzaib Ashraf — Full Stack AI Engineer",
  description:
    "Production-grade portfolio of Shahzaib Ashraf. Full Stack AI Engineer specializing in scalable web architecture, PostgreSQL, Prisma, Next.js, and autonomous AI & n8n workflows.",
  keywords: [
    "Shahzaib Ashraf",
    "Full Stack Developer",
    "MERN Stack",
    "PERN Stack",
    "Next.js 15",
    "PostgreSQL",
    "Prisma",
    "n8n Automation",
    "WhatsApp AI Bots",
    "Software Engineer Lahore",
    "React Three Fiber",
  ],
  authors: [{ name: "Shahzaib Ashraf", url: "https://portfolio-shahzaib-ashraf.vercel.app" }],
  creator: "Shahzaib Ashraf",
  metadataBase: new URL("https://portfolio-shahzaib-ashraf.vercel.app"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio-shahzaib-ashraf.vercel.app",
    siteName: "Shahzaib Ashraf Portfolio",
    title: "Shahzaib Ashraf — Full Stack AI Engineer",
    description:
      "Engineering scalable architecture for modern enterprises. Scalable web applications, secure APIs, and autonomous AI & n8n workflows.",
    images: [
      {
        url: "/images/shahzaib-portrait.webp",
        width: 1200,
        height: 630,
        alt: "Shahzaib Ashraf — Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahzaib Ashraf — Full Stack AI Engineer",
    description:
      "Engineering scalable architecture for modern enterprises. Scalable web applications, secure APIs, and autonomous AI & n8n workflows.",
    images: ["/images/shahzaib-portrait.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Shahzaib Ashraf",
    jobTitle: "Associate Software Engineer",
    url: "https://portfolio-shahzaib-ashraf.vercel.app",
    sameAs: [
      "https://github.com/ShahzaibAshraf33",
      "https://linkedin.com/in/shahzaib-ashraf-dev",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Lahore",
      addressCountry: "PK",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Lahore Leads University",
    },
    knowsAbout: [
      "MERN Stack",
      "PERN Stack",
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "MongoDB",
      "n8n Automation",
      "Three.js",
      "AI Agents",
    ],
  };

  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#080808] text-white selection:bg-[#D6A76C] selection:text-[#080808] font-sans">
        <div className="ambient-lighting" aria-hidden="true" />
        <SmoothScrollProvider>
          {children}
          <Toaster
            position="bottom-right"
            theme="dark"
            toastOptions={{
              style: {
                background: "#180B0E",
                color: "#FFFFFF",
                border: "1px solid rgba(196, 43, 43, 0.4)",
              },
            }}
          />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
