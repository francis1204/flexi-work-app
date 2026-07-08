# Flexi Work — Premium Video Editing Agency Landing Page

A cinematic, Awwwards-style landing page for **Flexi Work**, a professional
video editing agency based in Roxas, Isabela, Philippines.

Built with Next.js 15, TypeScript, Tailwind CSS, GSAP, Framer Motion, Three.js,
and React Three Fiber.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build && npm run start   # production build
```

## Design system

| Token       | Value     | Use                                  |
|-------------|-----------|---------------------------------------|
| `primary`   | `#7C3AED` | Electric purple — CTAs, gradients     |
| `secondary` | `#312E81` | Deep indigo — glows, gradients        |
| `accent`    | `#3B82F6` | Electric blue — highlights, glows     |
| `highlight` | `#A855F7` | Soft neon violet — icons, stars, text |
| `rich`      | `#09090B` | Background                            |
| `surface`   | `#111827` | Card/panel surface                    |
| `muted`     | `#A1A1AA` | Secondary text                        |

Typography: **Space Grotesk** for display/headings (geometric, bold),
**Inter** for body copy — loaded via `next/font/google` in `app/layout.tsx`.

## Structure

```
app/
  layout.tsx          – fonts, metadata, loader, cursor glow
  page.tsx            – assembles every section in order
  globals.css         – tokens, glassmorphism, gradient text, cursor glow
  robots.ts / sitemap.ts – SEO
components/
  Loader.tsx           – GSAP page-load intro
  CursorGlow.tsx        – GSAP quickTo cursor-follow glow
  MagneticButton.tsx    – GSAP magnetic-pull CTA button
  Navbar.tsx            – glass nav, scroll-aware, mobile menu
  Hero.tsx              – animated gradient hero, headline, CTAs
  HeroScene.tsx         – R3F/drei cinematic 3D scene (see below)
  TrustSection.tsx      – animated counters (GSAP + ScrollTrigger)
  Services.tsx          – 12 service cards, GSAP stagger reveal
  WhyUs.tsx             – 8-point value grid, Framer Motion reveal
  Process.tsx           – 4-step timeline with scroll-scrubbed line
  Portfolio.tsx         – filterable gallery, 3D tilt hover cards
  Pricing.tsx           – 4 pricing tiers, featured plan highlight
  Testimonials.tsx      – client quote cards
  MissionVision.tsx     – glassmorphism mission/vision cards
  FAQ.tsx               – accordion
  FinalCTA.tsx          – cinematic closing CTA
  Footer.tsx            – contact, socials, sitemap links
lib/
  data.ts              – ALL copy and content (services, pricing, FAQ, etc.)
hooks/
  useMagnetic.ts        – magnetic hover physics for buttons
  useCountUp.ts         – scroll-triggered number count-up
```

## The 3D hero scene

`HeroScene.tsx` is a fully procedural Three.js scene — no external `.glb`
models required, so the project runs immediately after `npm install`:

- An ultrawide monitor workstation with an emissive "timeline" screen
- Two abstract floating app chips (labelled generically — not reproductions
  of any real software logos/trademarks)
- A spinning film reel, a stylized cinema camera
- Glowing purple/blue rings, floating cubes, and wireframe video frames
- `Sparkles` particles from `@react-three/drei`
- A `ParallaxRig` that lerps rotation/position toward the pointer every
  frame for a smooth mouse-parallax effect

`HeroScene` is loaded with `next/dynamic({ ssr: false })` since it needs a
browser WebGL context.

## Animation approach

- **GSAP** drives scroll-triggered reveals (`Services`, `Process`,
  `TrustSection` counters), the magnetic button effect, the cursor glow, and
  the page loader.
- **Framer Motion** drives simpler declarative entrance animations
  (`whileInView`, staggered children) on `WhyUs`, `Pricing`, `Testimonials`,
  `MissionVision`, `FinalCTA`, and the FAQ accordion.
- `prefers-reduced-motion` is respected globally in `globals.css`, and the
  cursor glow disables itself for reduced-motion users.

## Swapping in real content

- Replace the gradient placeholders in `lib/data.ts` → `portfolio` with real
  thumbnails/video embeds once footage is available — swap `TiltCard`'s
  gradient div for a `next/image` or `<video>` element.
- Update contact details (email, phone, socials) in `components/Footer.tsx`.
- All copy lives in `lib/data.ts` — edit there first for any content change.

## Performance notes

- Fonts are self-hosted via `next/font` (no layout shift, no external
  requests at runtime).
- The 3D scene uses a capped `dpr` (`[1, 1.75]`) and a modest particle count
  to stay smooth on mid-range laptops and phones.
- Images/logos are avoided in favor of procedural/CSS gradients, keeping the
  initial bundle light.
