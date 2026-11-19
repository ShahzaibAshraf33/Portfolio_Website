# Animation & Design Analysis: Shahzaib Ashraf Portfolio
Reference inspiration: **lawnlooms.com** & Reference Mockup **3d design.webp**

---

## 1. lawnlooms.com Motion Analysis

### A. Preloader
- **Layout:** Minimalist full-screen dark canvas (`#0A0A0B`).
- **Counter:** High-precision numerical counter running `0%` to `100%` placed at the bottom-left corner with mono font (`JetBrains Mono`). Accompanied by a subtle progress bar along the bottom edge and an uppercase tracking label (`"INITIALIZING SYSTEM"` / `"LOADING"`).
- **Duration & Easing:** Minimum 2.2 seconds, powered by `power2.inOut` or `cubic-bezier(0.65, 0, 0.35, 1)`. Real asset check prevents flashing; cap at 3.5s maximum fallback.
- **Exit Transition:** Counter numerals scale down slightly and fade out (`opacity: 0, scale: 0.95`). Next, the entire preloader curtain slides smoothly upwards (`yPercent: -100`, duration: 0.9s, easing: `expo.inOut`), immediately triggering the hero entrance timeline on `onComplete`.
- **Accessibility:** Skips on `prefers-reduced-motion` and caches seen state in `sessionStorage` so returning visits within the session do not re-trigger the full preloader.

### B. Hero Entrance
- **Headline Reveal:** Giant uppercase sans-serif headline (`Inter` / `Plus Jakarta Sans`) split into lines. Each line is nested inside an `overflow: hidden` mask. Lines slide up from `yPercent: 110%` to `0%` with a smooth stagger (`0.08s` delay between lines) using `expo.out`.
- **Inline Badge / Video Chip:** Small rounded accent badge or interactive chip nested between key words of the headline, expanding with a scale reveal.
- **Subtext & Action CTA Entrance:** Fade-and-rise (`opacity: 0` to `1`, `y: 30` to `0`) following headline completion.
- **3D Hero Scene Entrance:** Subtle scale-in (`scale: 0.95` to `1.0`) with glowing crimson point lights ramping up.

### C. Scroll Behavior & Smooth Scroll
- **Engine:** `@studio-freight/lenis` (Lenis) smooth scrolling synchronized with GSAP's `ScrollTrigger` and `gsap.ticker.add((time) => lenis.raf(time * 1000))`, with `gsap.ticker.lagSmoothing(0)`.
- **Parallax:** Project image previews within cards have subtle scrubbed vertical parallax (`yPercent: -8` to `8`).
- **Section Reveals:** Section title lines and eyebrows mask-reveal on `start: "top 85%"`. Bento grid and project masonry cards trigger staggered reveal (`y: 40`, `opacity: 0` to `y: 0`, `opacity: 1`, `duration: 0.8s`, `stagger: 0.1s`).
- **Marquee:** Infinite seamless horizontal scroll for tech stack logos, running at ~30s per loop, pausing on hover.

### D. Hover & Interactive Micro-Interactions
- **Glass Bento Cards:** Lift 4px (`translateY(-4px)`), border glow activates (`rgba(220, 38, 38, 0.45)`), box-shadow spreads deep crimson light.
- **Arrow Buttons:** Circular ↗ icon buttons rotate 45 degrees into horizontal position (`rotate: 45deg`) on parent card hover.
- **Buttons:**
  - Primary (solid white pill): subtle scale `1.02` with slight drop-shadow glow.
  - Secondary (ghost pill): crimson border fill and subtle red wash.
- **Magnetic / Custom Cursor:** Active only on devices with fine pointer (`@media (pointer: fine)`). Smooth spring-lag following the cursor with hover expansion over clickable elements.

---

## 2. Reference Screenshot Analysis (`3d design.webp` & `portfolio-design-mockup.jpg`)

### A. Section Hierarchy & Order
1. **Preloader:** Minimalist 0-100% counter + bottom progress bar + curtain exit.
2. **Floating Pill Navbar:**
   - Monogram `[SA]` on left.
   - Nav anchors: Work, Solutions, Automation, Skills, Contact.
   - CTA: White pill button `"Let's Talk"` with subtle glow.
   - Mobile: shadcn Sheet sliding drawer.
3. **Hero Section:**
   - Left: Eyebrow badge ("Associate Software Engineer • Open to Onsite & Shift Work"), headline "Engineering scalable architecture for modern enterprises", subtext, dual CTAs ("Let's Talk", "Download Resume").
   - Right: 3D perspective grid / beveled red tile wall with cut-out portrait of Shahzaib Ashraf, red volumetric rim lighting.
   - Bottom: Tech logo strip (Node.js, Redis, Next.js, AWS, GraphQL, TypeScript, PostgreSQL, Docker, n8n) with gradient edge fade.
4. **Featured Solutions & Projects:**
   - Eyebrow `"WORK"`, Title `"Featured Solutions & Projects"`, `"All case studies ↗"` button.
   - Staggered 2-column masonry layout (column 2 offset down by ~60px).
   - Rich dark cards with red accent backdrops, tech tags, and ↗ action buttons.
5. **Why Partner With Me:**
   - Eyebrow `"WHY PARTNER WITH ME"`, Title `"Why Partner With Me / Today And Always?"`.
   - 4-item Bento Grid:
     1. Production-Grade Reliability (MVC, validation, JWT, Postman).
     2. Performance First Mindset (Interactive animated SVG crimson waveform/pulse).
     3. Scalable Cloud Architecture (Microservices, Docker, AWS EC2/S3).
     4. Business-Driven Decisions (Interactive 3D rotating red dotted globe).
6. **Professional Milestones & Impact:**
   - Left: Cut-out portrait card on crimson beveled grid.
   - Right: Interactive vertical chronological timeline (Qalam Training Program internship, milestones, achievements).
7. **Short Film Section:**
   - Eyebrow `"THE ENGINEER BEHIND THE CODE"`, Title `"A short film on my engineering philosophy"`.
   - High-definition 16:9 cinematic video preview card with centered glowing crimson play button.
   - Opens a responsive shadcn `Dialog` video player modal.
8. **Engineering Impact & Client Feedback:**
   - Eyebrow `"IMPACT"`, Title `"Engineering Impact & Client Feedback"`.
   - Carousel with previous/next controls, high-impact testimonial cards with quotes, roles, and metric callouts.
9. **AI Automations & Bots (n8n + WhatsApp + AI Agents):**
   - Showcase grid of 6 automated workflows with architecture steps, integration chips, and modal workflow preview.
10. **Technical Skills & Core Competencies:**
    - Categorized tabs (Front-End, Back-End, Databases, Cloud & DevOps, Automation & AI, Tools).
11. **Education & Certifications:**
    - BS Software Engineering (Lahore Leads University, CGPA 3.13) + Coursera Web Development.
12. **Contact & Lead Pipeline:**
    - Contact form wired to `/api/contact` (forwards to n8n webhook `N8N_WEBHOOK_URL`), validation with Zod, instant feedback with `sonner` toast.
    - Direct WhatsApp click-to-chat, email, and social links.
13. **Footer:**
    - Monogram `[SA]`, copyright, quick links, back-to-top button.

### B. Spacing, Radii, Shadows & Typography
- **Canvas Background:** Deep `#0A0A0B` with multi-stop radial glows (`rgba(122, 18, 24, 0.35)` top-right and bottom-left).
- **Cards Surface:** `#121214` with red glass gradient `linear-gradient(135deg, rgba(42, 10, 13, 0.75) 0%, rgba(18, 18, 20, 0.85) 100%)`.
- **Border Radii:** `rounded-2xl` (16px) for cards, `rounded-full` for pill buttons and badges, `rounded-3xl` for major feature frames.
- **Card Borders:** `1px solid rgba(255, 255, 255, 0.08)` transitioning to `rgba(196, 43, 43, 0.45)` on hover.
- **Typography:**
  - Headings: `Inter` or `Plus Jakarta Sans`, font weights 600/700, tracking `-0.025em` to `-0.035em`.
  - Body: `Inter`, weights 400/500, color `#A3A3A8`.
  - Eyebrows & Metrics: `JetBrains Mono`, uppercase, tracking `0.15em`, font size `0.75rem` to `0.85rem`.

---

## 3. Approximations & Verification Notes
- **Lawn & Looms Webflow Scripts:** Recreated directly in React/Next.js using native GSAP 3.12, ScrollTrigger, Lenis 1.1, and React Three Fiber.
- **3D Red Tile Wall:** Implemented with React Three Fiber InstancedMesh with bevel geometry, red point lights, mouse-tilt damping, and dynamic CSS/WebGL fallback for low-power or mobile environments.
- **Cutout Portrait:** Processed from original `shahzaib-portrait.jpeg` with transparent background cutout (`portrait-cutout.webp`), color graded to match the crimson ambient lighting.

