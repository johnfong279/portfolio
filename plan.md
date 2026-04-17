# Portfolio Page — Implementation Plan

## Context

Build a freelance portfolio page from scratch based on `guideline.md`. The page targets **non-technical clients** — it leads with outcomes, uses plain language, and funnels visitors toward a single CTA ("get in touch"). The directory is currently empty except for the guideline.

## Tech Stack

- **Vite + React + TypeScript**
- **Tailwind CSS v4** (via `@tailwindcss/vite` plugin — no config file, theme lives in CSS)
- **Fonts**: DM Serif Display (headings) + Inter (body) via `@fontsource` (bundled locally, no network requests)
- **Colors**: Warm stone neutrals + blue accent (`#2563eb`)

## File Structure

```
src/
  main.tsx
  App.tsx                    # Renders all sections in order, alternating bg colors
  index.css                  # Tailwind import + @theme (colors, fonts)
  data/
    content.ts               # All placeholder text centralized here
  components/
    Navbar.tsx               # Sticky nav, hamburger on mobile
    Hero.tsx                 # Headline + subheadline + CTA + headshot placeholder
    TrustStrip.tsx           # Row of placeholder logos or a metric
    SelectedWork.tsx         # Maps projects → ProjectCard
    ProjectCard.tsx          # Alternating left/right layout per project
    Services.tsx             # Grid of ServiceCard
    ServiceCard.tsx          # Icon + name + description
    Process.tsx              # 4-step horizontal stepper (vertical on mobile)
    About.tsx                # Photo placeholder + bio
    Testimonials.tsx         # Grid of TestimonialCard
    TestimonialCard.tsx      # Quote + name + role + avatar
    ContactCTA.tsx           # Full-width accent band + CTA
    Footer.tsx               # Name + copyright + social icons
    Button.tsx               # Shared CTA button (primary/outline variants)
    SectionHeading.tsx       # Shared section title
    PlaceholderImage.tsx     # Styled gray div with label (no broken imgs)
```

## Implementation Steps

### 1. Project scaffold
- `npm create vite@latest . -- --template react-ts`
- `npm install`
- `npm install tailwindcss @tailwindcss/vite`
- `npm install @fontsource/inter @fontsource/dm-serif-display`
- Wire up `vite.config.ts` with React + Tailwind plugins
- Set up `index.css` with `@import "tailwindcss"`, font imports, and `@theme` block (colors, font families)
- Verify `npm run dev` works

### 2. Placeholder content (`src/data/content.ts`)
- All text in one file: hero copy, 4 projects, 4 services, 4 process steps, about bio, 3 testimonials, contact headline
- Realistic fictional content (no lorem ipsum) — client-facing language throughout
- Exported as typed constants for easy swap later

### 3. Shared components
- `Button` — `variant: "primary" | "outline"`, renders as `<a>` with smooth scroll
- `SectionHeading` — title + optional subtitle, left or center aligned
- `PlaceholderImage` — gray rounded div with label text, accepts width/height

### 4. App shell + Navbar
- `App.tsx`: stack of `<section>` elements with alternating `bg-white` / `bg-neutral-50`
- Each section: `py-20 md:py-28`, inner container `max-w-6xl mx-auto px-6`
- `Navbar`: sticky, logo left, links + CTA right, hamburger toggle on mobile (`useState`)

### 5. Build sections top to bottom
Each section is mobile-first (stacked) with `md:` breakpoints for side-by-side:

- **Hero** — 2-col on desktop, headline `text-3xl md:text-5xl font-heading`
- **TrustStrip** — row of gray logo boxes, or a metric string
- **SelectedWork** — `ProjectCard` with `reverse` prop for alternating layout
- **Services** — `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4`
- **Process** — numbered circles + connecting line, vertical mobile / horizontal desktop
- **About** — photo left, text right on desktop
- **Testimonials** — `grid grid-cols-1 md:grid-cols-3`
- **ContactCTA** — `bg-accent-500 text-white`, centered headline + button
- **Footer** — flexbox, name left, icon links right

### 6. Polish
- `scroll-behavior: smooth` + `id` anchors on each section for nav links
- Hover/focus states on all interactive elements
- Test responsive at 375px / 768px / 1024px+
- Ensure clean spacing, consistent whitespace, calm aesthetic

## Design Tokens (quick reference)

| Token | Value | Use |
|---|---|---|
| `font-heading` | DM Serif Display | Section headings, hero headline |
| `font-body` | Inter | Everything else |
| `neutral-50` | `#fafaf9` | Alternating section bg |
| `neutral-700` | `#44403c` | Body text |
| `neutral-900` | `#1c1917` | Headings |
| `accent-500` | `#2563eb` | CTA buttons, links |
| `accent-600` | `#1d4ed8` | Button hover |
| `success-500` | `#16a34a` | Result metrics |

## Verification

1. Run `npm run dev` and open in browser
2. Check all 10 sections render with correct content
3. Test nav links scroll to correct sections
4. Resize browser to verify mobile (375px), tablet (768px), desktop (1024px+)
5. Confirm "Book a call" / CTA buttons are prominent and visually consistent
6. Lighthouse audit: target < 2s load time (should be trivial with no real images)
