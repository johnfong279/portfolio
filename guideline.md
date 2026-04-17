# Freelance Portfolio Page — Design Guide

A practical guideline for designing a portfolio page aimed at **non-technical clients**, with a section-by-section wireframe.

---

## Guiding Principles

- **Speak to clients, not recruiters.** Lead with outcomes, not tech stacks.
- **Build trust fast.** Real photos, real projects, real numbers.
- **One clear action per page.** Everything points to "get in touch."
- **Mobile-first.** Most clients will first see you on their phone.
- **Calm and confident.** Lots of whitespace, 1–2 accent colors, max 2 fonts.

---

## Section-by-Section Breakdown

### 1. Navigation Bar

- Logo or your name on the left
- 3–4 links: Work, Services, About, Contact
- A primary "Contact" or "Book a call" button on the right (stands out visually)

### 2. Hero (Above the Fold)

Answer three questions in under 5 seconds: _Who are you? Who do you help? What result do you deliver?_

- Headshot or simple illustration
- Headline — e.g. _"I build web apps that help small businesses automate their busywork"_
- One-line subheadline adding context
- **One** call-to-action button ("See my work" or "Book a free call")

### 3. Trust Strip

Placed immediately under the hero to reinforce credibility.

- Client logos, OR
- One standout short testimonial, OR
- A specific metric ("Helped 12 businesses launch online in 2025")

### 4. Selected Work (The Heart of the Page)

3–5 projects, no more. For each project, use a repeatable structure:

- Project name + one-line description in plain English
- **The problem** the client faced (1–2 sentences)
- **What you built** (no jargon — "an online booking system" not "a React SPA with Stripe integration")
- **The result** with a number if possible ("cut admin time by 6 hours a week")
- One clean image — screenshot, mockup, or before/after

Use an **alternating left/right** layout so the eye keeps moving down.

### 5. Services

List services the way clients would search for them.

- 3–5 cards
- Each with a small icon, service name, and one-sentence description
- ✅ "Custom booking websites" / "Internal tools that replace spreadsheets"
- ❌ "Next.js applications" / "CRUD dashboards"

### 6. Process (Optional but Powerful)

A simple 3–4 step walkthrough of what working with you looks like. Reduces anxiety for clients who have never hired a developer before.

Typical steps:

1. **Discovery** — free call to understand the problem
2. **Proposal** — fixed scope, timeline, and price
3. **Build** — regular updates, no surprises
4. **Launch** — deployment + a support window

### 7. About

Three or four sentences about **why** you do this work and what you care about.

- Real photo
- Warm, human tone
- No resume dump

### 8. Testimonials

2–3 quote cards, each with:

- The quote (short, specific, outcome-focused)
- Client name, role, and company
- Small avatar or company logo

### 9. Contact / Call-to-Action

The page's closing move.

- Full-width colored band so it stands out
- One clear headline ("Have a project in mind?")
- One next step — a short form (name, email, "what are you trying to build?") OR a Calendly link
- Echoes the hero's CTA to give scanners a second chance to convert

### 10. Footer

Small and simple.

- Name / copyright
- 2–3 social icons (LinkedIn, GitHub, email)
- Nothing else

---

## What to Leave Off

- Tech stack badges ("JavaScript 95%, Python 87%")
- GitHub contribution graph
- Long lists of frameworks and libraries
- Stock imagery (reads as generic, lowers trust)
- Multiple CTAs on the same screen

These speak to recruiters and other developers, not paying clients. If a client asks what you use, you can tell them on the call.

---

## Design System Quick Reference

| Element    | Recommendation                                                |
| ---------- | ------------------------------------------------------------- |
| Fonts      | Max 2 — one for headings, one for body                        |
| Colors     | 1 neutral + 1 accent (optionally a success green for metrics) |
| Whitespace | Generous — don't fear empty space                             |
| Page speed | Under 2 seconds load time                                     |
| Layout     | Alternate white and tinted background bands per section       |
| CTAs       | Hero button and final CTA should visually match               |

---

## Wireframe Structure (Top to Bottom)

```
┌─────────────────────────────────────────┐
│  Nav: logo          links    [Contact]  │
├─────────────────────────────────────────┤
│                                         │
│            [ Headshot ]                 │
│           Main Headline                 │
│            Subheadline                  │
│             [ CTA btn ]                 │
│                                         │
├─────────────────────────────────────────┤
│   logo   logo   logo   logo   logo      │
├─────────────────────────────────────────┤
│                                         │
│   SELECTED WORK                         │
│                                         │
│   ┌──────┐   Project title              │
│   │ img  │   Problem → solution         │
│   └──────┘   [ Result: saved 6h/wk ]    │
│                                         │
│   Project title   ┌──────┐              │
│   Problem → sol   │ img  │              │
│   [ Result ]      └──────┘              │
│                                         │
│   ┌──────┐   Project title              │
│   │ img  │   Problem → solution         │
│   └──────┘   [ Result ]                 │
│                                         │
├─────────────────────────────────────────┤
│   SERVICES                              │
│   ┌─────┐  ┌─────┐  ┌─────┐             │
│   │icon │  │icon │  │icon │             │
│   │title│  │title│  │title│             │
│   └─────┘  └─────┘  └─────┘             │
├─────────────────────────────────────────┤
│   PROCESS                               │
│    (1)──(2)──(3)──(4)                   │
│   disc  prop build launch               │
├─────────────────────────────────────────┤
│   ABOUT                                 │
│   [photo]   short personal paragraph    │
├─────────────────────────────────────────┤
│   TESTIMONIALS                          │
│   ┌────────────┐   ┌────────────┐       │
│   │  "quote"   │   │  "quote"   │       │
│   │  — name    │   │  — name    │       │
│   └────────────┘   └────────────┘       │
├─────────────────────────────────────────┤
│                                         │
│      Have a project in mind?            │
│            [  Book a call  ]            │
│                                         │
├─────────────────────────────────────────┤
│  © Your Name              in  gh  ✉️     │
└─────────────────────────────────────────┘
```

---

## Checklist Before You Ship

- [ ] Can a visitor understand who you help in under 5 seconds?
- [ ] Does every project show a concrete outcome (ideally with a number)?
- [ ] Is there only **one** primary CTA per section?
- [ ] Are all project descriptions written in plain language (no jargon)?
- [ ] Does it load in under 2 seconds on mobile?
- [ ] Is the contact step friction-free (form or calendar, not both)?
- [ ] Did you remove the tech stack badges?
- [ ] Would your mom understand what you do from the homepage alone?
