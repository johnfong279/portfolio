export type Screenshot = {
  src: string
  label: string
}

export type Feature = {
  title: string
  description: string
}

export type Project = {
  slug: string
  name: string
  summary: string
  description: string
  thumbnail: string
  thumbnailFit?: 'cover' | 'contain'
  techStack: string[]
  features: Feature[]
  screenshots: Screenshot[]
}

export type Service = {
  icon: string
  name: string
  description: string
}

export type ProcessStep = {
  title: string
  description: string
}

export type Testimonial = {
  quote: string
  name: string
  role: string
  company: string
  initials: string
}

export const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
] as const

export const heroContent = {
  eyebrow: 'Freelance web designer and developer',
  headline: 'I build clear, conversion-focused websites for service businesses.',
  subheadline:
    'I help coaches, clinics, and local brands replace confusing websites with pages that explain the offer, build trust quickly, and turn visits into enquiries.',
  ctaLabel: 'Book a call',
  secondaryText: 'Usually replies within one business day.',
  headshotLabel: 'Headshot placeholder',
}

export const trustContent = {
  metric: 'Building full-stack tools for trading, compliance, and booking workflows.',
  logos: ['Trade Tools', 'Food Label Translator', 'Tennis Booking App', 'SushiroHK Kiosk'],
}

export const projects: Project[] = [
  {
    slug: 'sushirohk-kiosk',
    name: 'SushiroHK Self-Payment Kiosk',
    summary:
      'A self-service payment kiosk system for Sushiro Hong Kong with multi-payment support and a cloud admin portal.',
    description:
      'A production kiosk application deployed across Sushiro Hong Kong restaurant locations. Customers scan a barcode payment card, review their order with itemized plate pricing, choose from Octopus, Alipay HK, Visa, Mastercard, UnionPay, or Apple Pay, and complete checkout on a touchscreen kiosk. The system includes trilingual support (Traditional Chinese, English, Japanese), a hidden staff panel for operations, receipt reprinting, day-end settlement, system diagnostics, and a cloud-based admin portal for reporting, screen saver management, and coupon administration.',
    thumbnail: '/sushirohk-self-payment-kiosk/images/key-screens/002.png',
    thumbnailFit: 'cover',
    techStack: ['React', 'Node.js', 'Azure', 'Octopus API', 'Global Payment', 'PM2'],
    features: [
      {
        title: 'Multi-Payment Checkout',
        description: 'Supports Octopus, Alipay HK, Visa, Mastercard, UnionPay, and Apple Pay with real-time transaction handling.',
      },
      {
        title: 'Trilingual Interface',
        description: 'Full Traditional Chinese, English, and Japanese language support for all customer-facing screens.',
      },
      {
        title: 'Staff Operations Panel',
        description: 'Hidden staff login for receipt reprinting, void transactions, system reboots, and payment reader diagnostics.',
      },
      {
        title: 'Day-End Settlement',
        description: 'Automated day-end processing with retry flows, error handling, and settlement confirmation via BBMSL.',
      },
      {
        title: 'Cloud Admin Portal',
        description: 'Web-based management for sales reports, custom date ranges, screen saver uploads, and coupon CSV administration.',
      },
    ],
    screenshots: [
      { src: '/sushirohk-self-payment-kiosk/images/key-screens/001.png', label: 'Barcode Scan' },
      { src: '/sushirohk-self-payment-kiosk/images/key-screens/004.png', label: 'Order Review' },
      { src: '/sushirohk-self-payment-kiosk/images/key-screens/006.png', label: 'Order Confirmation' },
      { src: '/sushirohk-self-payment-kiosk/images/key-screens/009.png', label: 'Payment Method Selection' },
      { src: '/sushirohk-self-payment-kiosk/images/enter-the-staff-panel/002.png', label: 'Alipay QR Scan' },
      { src: '/sushirohk-self-payment-kiosk/images/system-management/001.png', label: 'System Management' },
      { src: '/sushirohk-self-payment-kiosk/images/web-management-portal/001.png', label: 'Cloud Admin — Login' },
      { src: '/sushirohk-self-payment-kiosk/images/web-management-portal/004.png', label: 'Cloud Admin — Reports' },
    ],
  },
  {
    slug: 'food-label-translator',
    name: 'Food Label Translator',
    summary:
      'A full-stack web app for converting international food labels into Canadian-ready bilingual packaging content.',
    description:
      'Food Label Translator is a full-stack web app for converting international food labels into Canadian-ready packaging content. Users can upload label photos for OCR extraction, enter nutrition data manually, translate product information into bilingual English and French output, generate CFIA-style Nutrition Facts Table previews, run compliance checks, and export label assets. The project combines a Next.js front end with a FastAPI backend, configurable AI-assisted translation and OCR flows, and server-side label rendering for production-oriented outputs.',
    thumbnail: '/food-label-translator/landing-page-full.png',
    thumbnailFit: 'contain',
    techStack: ['Next.js', 'FastAPI', 'Python', 'OCR', 'SVG rendering'],
    features: [
      {
        title: 'AI-Powered Label Intake',
        description: 'Drag-and-drop with AI-driven OCR, mobile camera capture, and barcode lookup to extract nutrition data from any photo.',
      },
      {
        title: 'Bilingual Translation',
        description: 'Maps US nutrients to Canadian standards with English/French output backed by CFIA terminology references.',
      },
      {
        title: 'Label Generation',
        description: 'Server-side Nutrition Facts Tables in multiple CFIA SVG layouts, exportable as PDF and JPG.',
      },
      {
        title: 'Full-Stack Backend',
        description: 'FastAPI with auth, compliance reporting, bulk import, and flexible SQLite or PostgreSQL storage.',
      },
      {
        title: 'Regulatory Compliance',
        description: 'Front-of-package symbol logic and allergen detection aligned with Canadian CFIA regulations.',
      },
    ],
    screenshots: [
      { src: '/food-label-translator/landing-page-full.png', label: 'Landing Page' },
      { src: '/food-label-translator/demo-page-full.png', label: 'Demo Page' },
      { src: '/food-label-translator/demo-step-1-source-label.png', label: 'Step 1 — Source Label Upload' },
      { src: '/food-label-translator/demo-step-2-extracted-data.png', label: 'Step 2 — Extracted Data' },
      { src: '/food-label-translator/demo-step-3-canadian-translation.png', label: 'Step 3 — Canadian Translation' },
      { src: '/food-label-translator/demo-step-4-generated-output.png', label: 'Step 4 — Generated Output' },
    ],
  },
  {
    slug: 'trade-tools',
    name: 'Trade Tools',
    summary:
      'A local trading review and classification app with a performance dashboard and structured review workflows.',
    description:
      'Trade Tools is a local trading review and classification app built around a React frontend and Flask backend. It combines a performance dashboard for synced trade history with two focused review workflows: one for classifying individual trades and another for tagging daily chart setups from saved intraday screenshots. The app reads local trading data, serves chart assets through a lightweight API, and gives a structured way to review P&L, trading patterns, and rule adherence across a personal trading journal.',
    thumbnail: '/trade-tools/dashboard-equity-fullpage.png',
    thumbnailFit: 'cover',
    techStack: ['React', 'Vite', 'Flask', 'Python', 'Notion API'],
    features: [
      {
        title: 'Performance Dashboard',
        description: 'Aggregates trade history into KPIs, equity curves, period summaries, and breakdowns by ticker or session.',
      },
      {
        title: 'Trade Classification',
        description: 'Structured tagging for trade quality, strategy method, setup criteria, and rule violations.',
      },
      {
        title: 'Pattern Classifier',
        description: 'Review daily chart screenshots and tag intraday setups from saved images.',
      },
      {
        title: 'Lightweight API',
        description: 'Flask backend serves trade data, classification state, and chart assets through local API routes.',
      },
      {
        title: 'Offline-First Workflow',
        description: 'Runs on local cached data and generated chart folders — no heavy database required.',
      },
    ],
    screenshots: [
      { src: '/trade-tools/dashboard-equity-fullpage.png', label: 'Dashboard — Equity Curve' },
      { src: '/trade-tools/dashboard-period-summary-top-fullpage.png', label: 'Dashboard — Period Summary' },
      { src: '/trade-tools/dashboard-period-summary-analysis-fullpage.png', label: 'Dashboard — Period Analysis' },
      { src: '/trade-tools/dashboard-trade-history-fullpage.png', label: 'Dashboard — Trade History' },
      { src: '/trade-tools/dashboard-breakdown-fullpage.png', label: 'Dashboard — Breakdown' },
      { src: '/trade-tools/trade-classifier-fullpage.png', label: 'Trade Classifier' },
      { src: '/trade-tools/pattern-classifier-fullpage.png', label: 'Pattern Classifier' },
    ],
  },
  {
    slug: 'tennis-app',
    name: 'Tennis Booking App',
    summary:
      'A full-stack tennis court booking system with separate user and admin workflows for reservations, balances, and oversight.',
    description:
      'Tennis App is a full-stack tennis court booking system with separate user and admin workflows for reservations, balances, and booking oversight. The frontend uses Vue 3, Vite, PrimeVue, and Tailwind CSS, while the backend is built with NestJS, Prisma, and PostgreSQL with JWT-based role access. Users can add and review their own bookings through a calendar-driven dashboard, and admins can manage bookings, funding, and reporting from a dedicated dashboard. The repository also includes an MCP server for natural-language operations against the app.',
    thumbnail: '/tennis-app/03-user-calendar.png',
    thumbnailFit: 'cover',
    techStack: ['Vue 3', 'Vite', 'PrimeVue', 'Tailwind CSS', 'NestJS', 'Prisma', 'PostgreSQL'],
    features: [
      {
        title: 'Role-Based Access',
        description: 'Separate user and admin dashboards with JWT authentication and scoped permissions.',
      },
      {
        title: 'Booking Flow',
        description: 'District and court selection, date/time inputs, partner details, and a personal booking calendar.',
      },
      {
        title: 'Admin Dashboard',
        description: 'Booking management, monthly calendar views, user funding controls, and financial metrics.',
      },
      {
        title: 'Bilingual Interface',
        description: 'Full English and Traditional Chinese support through organized i18n labels across all views.',
      },
      {
        title: 'Automation & AI',
        description: 'Email reminder cron jobs and a dedicated MCP server for natural-language booking operations.',
      },
    ],
    screenshots: [
      { src: '/tennis-app/01-login.png', label: 'Login' },
      { src: '/tennis-app/02-register-modal.png', label: 'Register' },
      { src: '/tennis-app/03-user-calendar.png', label: 'User — Calendar' },
      { src: '/tennis-app/04-user-add-booking.png', label: 'User — Add Booking' },
      { src: '/tennis-app/05-user-my-bookings.png', label: 'User — My Bookings' },
      { src: '/tennis-app/06-user-statistics.png', label: 'User — Statistics' },
      { src: '/tennis-app/07-user-information.png', label: 'User — Information' },
      { src: '/tennis-app/08-admin-booking-management.png', label: 'Admin — Booking Management' },
      { src: '/tennis-app/09-admin-funding-add.png', label: 'Admin — Add Funding' },
      { src: '/tennis-app/10-admin-funding-users.png', label: 'Admin — Funding Users' },
      { src: '/tennis-app/11-admin-funding-history.png', label: 'Admin — Funding History' },
      { src: '/tennis-app/12-admin-calendar.png', label: 'Admin — Calendar' },
    ],
  },
]

export const services: Service[] = [
  {
    icon: '01',
    name: 'Custom websites for service businesses',
    description: 'Clear, modern websites that explain your offer fast and give clients an easy next step.',
  },
  {
    icon: '02',
    name: 'Landing pages for launches and ads',
    description: 'Focused pages built to support one campaign, one offer, and one conversion goal.',
  },
  {
    icon: '03',
    name: 'Booking and enquiry flows',
    description: 'Simple forms and scheduling paths that reduce back-and-forth and help you qualify leads.',
  },
  {
    icon: '04',
    name: 'Website refreshes and rewrites',
    description: 'A practical update for businesses that have grown past their current site and need sharper messaging.',
  },
]

export const processSteps: ProcessStep[] = [
  {
    title: 'Discovery',
    description: 'We start with a short call to understand your business, your audience, and what a win looks like.',
  },
  {
    title: 'Proposal',
    description: 'You get a fixed scope, timeline, and price so the project feels straightforward from the start.',
  },
  {
    title: 'Build',
    description: 'I design and build the site in clear milestones, with regular check-ins and no long silent gaps.',
  },
  {
    title: 'Launch',
    description: 'I handle handoff, launch support, and the final details so you are not left figuring it out alone.',
  },
]

export const aboutContent = {
  title: 'I like turning vague website stress into a clear plan.',
  paragraphs: [
    'Most of my clients are busy running the actual business. They do not want to learn web jargon, compare endless tools, or chase a designer for updates.',
    'My job is to make the process feel calm and practical. I focus on plain-language messaging, trustworthy design, and conversion paths that make sense to real people.',
    'If you need a site that feels polished, sounds like your business, and helps more of the right clients reach out, that is the work I do.',
  ],
  imageLabel: 'Workspace portrait placeholder',
}

export const testimonials: Testimonial[] = [
  {
    quote:
      'The new site finally explains what we do in a way clients understand. We started getting better enquiries within the first few weeks.',
    name: 'Mia Chen',
    role: 'Founder',
    company: 'Northline Studio',
    initials: 'MC',
  },
  {
    quote:
      'Jason made the whole project feel organized and low-stress. Patients now book online instead of calling to ask basic questions.',
    name: 'Daniel Reyes',
    role: 'Clinic Director',
    company: 'Maple Physio',
    initials: 'DR',
  },
  {
    quote:
      'We wanted something professional without sounding stiff. The final site feels warm, clear, and much easier to trust.',
    name: 'Priya Sharma',
    role: 'Partner',
    company: 'Harbour Legal',
    initials: 'PS',
  },
]

export const contactContent = {
  headline: 'Have a project in mind?',
  subheadline:
    'If you need a website that feels clearer, sharper, and easier for clients to act on, let’s talk.',
  ctaLabel: 'Get in touch',
  ctaHref: 'mailto:jasonfong0729@gmail.com?subject=Project%20enquiry',
}

export const footerContent = {
  name: 'Jason Fong',
  email: 'jasonfong0729@gmail.com',
  socialLinks: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
    { label: 'GitHub', href: 'https://github.com/' },
    { label: 'Email', href: 'mailto:jasonfong0729@gmail.com' },
  ],
}
