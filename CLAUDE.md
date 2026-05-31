@AGENTS
plan :

# Mithila Mantra Makhana - Website Implementation Plan

This document synthesizes our mandatory research into a definitive brand strategy and technical implementation plan for Mithila Mantra Makhana.

## User Review Required

> [!IMPORTANT]
> Please review **Phase 3 (Three Creative Concepts)** and select the concept you would like to proceed with. While Concept C is recommended based on the brief, the choice will dictate the technical execution.
> Please also review **Phase 4 (The Moment™)** to ensure the signature interaction aligns with your vision.

## Phase 1 — The World of Mithila Mantra

If Mithila Mantra were a **city**: Jaipur meets Kyoto. Ancient, culturally profound, mathematically precise, but undeniably modern and confident.
If it were a **film**: Directed by Denis Villeneuve. Epic scale, deliberate pacing, textural, respectful of ancient forces, visually overwhelming.
If it were a **music genre**: Lo-fi classical fusion. Deep resonant bass meets ancient stringed instruments.
If it were an **interior design style**: Wabi-Sabi meets Modern Brutalism. Raw concrete, dark wood, single spotlight on a perfect lotus flower. Uncluttered.
If it were a **fashion label**: Sabyasachi's global line. Unapologetically Indian heritage, but cut and styled for a global runway. Premium price point.
If it were a **luxury hotel**: Amanbagh. Hidden in plain sight, an oasis of intense calm, flawlessly executed, exclusive.
If it were a **vehicle**: Range Rover Autobiography. Capable of handling dirt, but refined enough for the opera. Assertive.
If it were a **personality**: The confident stoic. Doesn't need to shout to be heard. Knows its worth.

**Brand Personality Statement:**

> _Mithila Mantra is the quiet sovereign of the snack world—an ancient secret reimagined as modern luxury. It commands attention not through noise, but through a magnetic, unapologetic display of its cultural heritage and unyielding quality, elevating the act of snacking into a ritual of pure refinement._

## Phase 2 — Packaging-First Design System

**Step 1 — Typography System**

- **Display Font:** `Canela` or `Tiempos Headline` (or free alternative `Playfair Display` / `Syne`). It carries ink-stroke energy, cultural weight, and high-fashion editorial elegance.
- **Body Font:** `DM Sans` or `Outfit`. Clean, modern, highly legible sans-serif to ground the display font.

**Step 2 — Color Language**

- **Backgrounds/Base:** Deep Mithila Black (#111111) and Rice White (#F5F0E8)
- **Brand Accent:** Turmeric / Saffron (#E8B430)
- **Flavor System (derived from packaging):**
  - Raw: Lotus Pink / Deep Purple
  - Black Pepper & Salt: Navy Blue
  - Peri Peri: Madhubani Red (#E34234)
  - Cheese: Amber / Warm Gold
  - Cream & Onion: Lime Green
  - Pudina: Forest Green / Bilva Green (#4A7C59)

**Step 3 — Iconography & Illustration Language**

- Minimal, scalable vector (SVG) adaptations of Madhubani motifs.
- Thin, elegant line art: the Lotus (origin), the Fish (prosperity), and geometric borders.
- These will act as animated scroll-reveals (drawing themselves in) and subtle background textures (Kachni style cross-hatching), avoiding heavy folk painting aesthetics.

**Step 4 — Motion Language**

- Organic, rhythmic, water-like.
- Easing: `CustomEase.create("cinematic", "0.45, 0.05, 0.55, 0.95")`
- Reveals breathe and ripple. Smooth momentum scrolling.

## Phase 3 — Three Creative Concepts

### CONCEPT A — "Commercial Winner"

**Goal:** Highest conversion rate, safest premium D2C choice.
**Aesthetic:** Dark premium e-commerce. Bold hero, clean product showcases, trust-building architecture.
**References:** Feastables, Prime, Apple.
**Motion:** Snappy GSAP reveals, product float animations.
**Signature:** Every flavor gets a vibrant, full-bleed color moment interrupting the dark theme. Clean, confident, high-converting.

### CONCEPT B — "Brand Winner"

**Goal:** Strongest storytelling, most emotionally resonant.
**Aesthetic:** Editorial magazine meets cultural journal. Cream tones, mixed type weights, long-form narrative.
**References:** Oatly, Aesop, Patagonia.
**Motion:** Slow, intentional parallax. Text-driven sequences, fade-ins.
**Signature:** The Mithila origin story is a mini-documentary scroll. It feels like reading a beautifully crafted heritage zine.

### CONCEPT C — "Awwwards Winner" _(Recommended)_

**Goal:** Completely unforgettable, category-defining.
**Aesthetic:** WebGL + GSAP cinematic scrollytelling + Minimalist Madhubani visual language.
**References:** Obys Agency, Active Theory.
**Motion:** Three.js particle systems, pinned horizontal panels, scroll-triggered SVG assembly, water simulations.
**Signature:** Seamless fusion of ancient motifs drawing themselves over real-time 3D environments.
**Why Concept C:** The brief explicitly states we are building a _cultural landmark_, not just a website. Concept C is the only one that truly elevates Makhana to an untouchable, luxury status through cutting-edge digital craftsmanship.

> [!WARNING]
> Please reply with your chosen concept. We will proceed with Concept C unless directed otherwise.

## Phase 4 — THE MOMENT™

**Proposed Signature Interaction: "The Lotus Unveiling"**

A dedicated section powered by Three.js and WebGL.

- The screen goes deep black.
- A glowing, ethereal 3D wireframe of a lotus flower slowly rotates in the center of the viewport. The "lines" of the wireframe are composed of thousands of tiny, glowing particles (makhana seeds).
- **On Scroll:** The scroll is pinned. As the user scrolls, the particles violently but beautifully disperse outward (like a ripple in a pond), shattering the lotus form.
- The particles coalesce and morph to reveal the hyper-realistic, 3D-rendered Mithila Mantra product pouch in the center.
- **The psychological effect:** A moment of pure visual novelty and awe, literally transitioning the "ancient origin" (lotus) into the "modern reality" (the snack).

## Phase 5 — Consumer Psychology Requirements

Each section will be engineered with these mechanisms (noted in code comments):

- **S0 Preloader:** Novelty Effect + First Impression anchoring
- **S1 Hero:** Curiosity Gap + Visual Hierarchy
- **S2 Mithila Story:** Authority + Curiosity Gap + Cultural Pride
- **S3 The Moment™:** Novelty Effect + Pattern Interruption
- **S4 Flavor Universe:** Reward Loop (each scroll is a discovery)
- **S5 Why Makhana:** Loss Aversion + Contrast Bias
- **S6 Mood x Flavor:** Personalization Effect + Reward Loop
- **S7 Social Proof:** Social Proof + FOMO
- **S8 Waitlist:** Scarcity + Curiosity Gap

## Phase 6 — Section Architecture

1. **S0 — PRELOADER:** GSAP SVG line-draw of a minimal Madhubani lotus logo.
2. **S1 — HERO:** Dark, cinematic. "The snack Bihar kept secret for 500 years."
3. **S2 — THE MITHILA STORY:** Pinned scroll. SVG lines draw the history. "We are the origin."
4. **S3 — THE MOMENT™:** The 3D Lotus Unveiling particle simulation.
5. **S4 — FLAVOR UNIVERSE:** Horizontal scroll. Huge typography, bold brand colors.
6. **S5 — WHY MAKHANA:** Dark mode. Animated stat comparisons against chips/popcorn.
7. **S6 — MOOD × FLAVOUR:** Interactive selector (Movie Night, Post-Workout).
8. **S7 — SOCIAL PROOF:** Marquee testimonials + aesthetic Instagram grid.
9. **S8 — WAITLIST (RAW):** "THE OG IS COMING." Email capture.
10. **S9 — FOOTER:** Madhubani pattern texture, bold links, newsletter.

## Phase 7 — Asset Generation Prompts (For Midjourney/Flux)

_(These will be included as comments in the codebase or a separate file for the design team, focusing on high-end luxury aesthetics, studio lighting, and Madhubani influences)._
Example: `Product render of a premium snack pouch, floating on a deep vermillion red background, studio lighting, soft shadows, luxury packaging feel, minimal Madhubani fish motif faintly visible in the background texture, 8k resolution, photorealistic --ar 16:9`

## Phase 8 & 9 — Technical Stack & Global UX

**Framework:** Next.js (App Router), TypeScript, Tailwind CSS.
**Animation:** GSAP, ScrollTrigger, Lenis (Smooth Scroll).
**3D/WebGL:** Three.js, React Three Fiber.
**UI Elements:** Custom cursor, scroll progress bar, magnetic buttons, frosted glass nav.
**Atmosphere:** CSS noise/grain overlay (subtle 3%), drifting blurred orbs for depth.

## Phase 10 — Responsive Design

- 3D features simplified for mobile (reduced particle counts).
- Horizontal scrolls convert to Swiper.js vertical stacks.
- Custom cursor disabled on touch.

---

### Verification Plan

1. **Automated/Build:** Ensure Next.js builds successfully without TS or ESLint errors.
2. **Visual/Manual:** Run dev server. Verify Lenis scroll feels cinematic. Verify GSAP ScrollTriggers fire at correct breakpoints. Verify Three.js canvas loads performantly. Confirm all 11 Quality Gates from the brief are met.

Current progress :
I have reviewed both the makhana.pdf and the live mrmakhana.com website.

The PDF provides excellent foundational product data for the brand "Natural Puff", featuring 6 distinct flavors (Raw, Peri Peri, Cheese, Cream & Onion, Pudina, Black Pepper & Salt) and great nutritional claims (Magnesium, Potassium, High Protein, Low Fat, Rich in Fiber).

Meanwhile, mrmakhana.com utilizes a very bold, bright, pop-culture, FMCG-style UX (scrolling marquees, bright colors, floating badges).

This is a significant pivot from the "Dark/Cinematic Luxury Mithila Cultural Landmark" we have built so far (Sections S0-S9). To ensure we integrate this flawlessly, I have updated the
Implementation Plan
.

Please review the plan—specifically the Open Questions section regarding the Brand Name and the UI/UX visual direction—and let me know how you want to balance the luxury "Mithila Mantra" vibe with the "Natural Puff" product data and the MrMakhana UX!

Listed directory mithilMakhana
Viewed makhana.pdf
Read URL: https://mrmakhana.com/
Viewed content.md:1-593
Edited implementation_plan.md

I have reviewed both the `makhana.pdf` and the live `mrmakhana.com` website.

The PDF provides excellent foundational product data for the brand **"Natural Puff"**, featuring 6 distinct flavors (Raw, Peri Peri, Cheese, Cream & Onion, Pudina, Black Pepper & Salt) and great nutritional claims (Magnesium, Potassium, High Protein, Low Fat, Rich in Fiber).

Meanwhile, `mrmakhana.com` utilizes a very bold, bright, pop-culture, FMCG-style UX (scrolling marquees, bright colors, floating badges).

This is a significant pivot from the "Dark/Cinematic Luxury Mithila Cultural Landmark" we have built so far (Sections S0-S9). To ensure we integrate this flawlessly, I have updated the [Implementation Plan](file:///c:/Users/p1565/.gemini/antigravity/brain/8fb29d27-38f0-48e4-8044-bfcea73c91dc/implementation_plan.md).

Please review the plan—specifically the **Open Questions** section regarding the Brand Name and the UI/UX visual direction—and let me know how you want to balance the luxury "Mithila Mantra" vibe with the "Natural Puff" product data and the MrMakhana UX!

Generated image: "Product render of a premium modern minimal snack pouch, matte deep blue color with delicate Madhubani art geometric lines, floating on a dark background, studio lighting, luxury packaging feel, photorealistic, high resolution"
Generated image: "Product render of a premium modern minimal snack pouch, matte deep red color with delicate Madhubani art geometric lines, floating on a dark background, studio lighting, luxury packaging feel, photorealistic, high resolution"
Generated image: "Product render of a premium modern minimal snack pouch, matte rich yellow color with delicate Madhubani art geometric lines, floating on a dark background, studio lighting, luxury packaging feel, photorealistic, high resolution"
Generated image: "Product render of a premium modern minimal snack pouch, matte forest green color with delicate Madhubani art geometric lines, floating on a dark background, studio lighting, luxury packaging feel, photorealistic, high resolution"
Generated image: "Product render of a premium modern minimal snack pouch, matte mint green color with delicate Madhubani art geometric lines, floating on a dark background, studio lighting, luxury packaging feel, photorealistic, high resolution"
Ran command: `powershell -Command "Copy-Item 'C:\Users\p1565\.gemini\antigravity\brain\8fb29d27-38f0-48e4-8044-bfcea73c91dc\product_pouch_pepper_1780186294937.png' -Destination 'public\images\product_pouch_pepper.png' -Force; Copy-Item 'C:\Users\p1565\.gemini\antigravity\brain\8fb29d27-38f0-48e4-8044-bfcea73c91dc\product_pouch_periperi_1780186450382.png' -Destination 'public\images\product_pouch_periperi.png' -Force; Copy-Item 'C:\Users\p1565\.gemini\antigravity\brain\8fb29d27-38f0-48e4-8044-bfcea73c91dc\product_pouch_cheese_1780186790769.png' -Destination 'public\images\product_pouch_cheese.png' -Force"`
Edited S7_FlavorUniverse.tsx
Edited S8_MakhanaConstellation.tsx
Created S10_NaturalPuffLineup.tsx
