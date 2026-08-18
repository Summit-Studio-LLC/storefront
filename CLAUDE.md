# Summit Studio Storefront

Marketing website for Summit Studio (summitstudio.dev).

## Commands

```bash
pnpm dev       # Start dev server at http://localhost:3000 (Turbopack)
pnpm build     # Production build
pnpm lint      # Biome linter
pnpm format    # Biome formatter (--write)
```

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Styling:** Tailwind CSS 4 (via PostCSS, @theme inline in globals.css)
- **Linter/Formatter:** Biome (not ESLint/Prettier)
- **Package Manager:** pnpm
- **Deployment:** Vercel (free tier)
- **Fonts:** Manrope (sans, all pages) + Instrument Serif (serif, marketing pages)
- **Icons:** Material Symbols Outlined (Google Fonts CDN) + Lucide React
- **Analytics:** Vercel Analytics + Google Analytics (gtag.js)
- **Performance:** Vercel Speed Insights
- **Error Tracking:** Sentry (session replay, source maps, tunnel at /monitoring)
- **Email:** Resend

## Directory Structure

```
src/
├── app/                 # Pages (App Router)
│   ├── layout.tsx       # Root layout with Header/Footer
│   ├── page.tsx         # Landing page
│   ├── about/
│   ├── services/
│   ├── process/
│   ├── case-studies/
│   │   └── [slug]/          # Dynamic detail page for every case study
│   ├── faq/
│   ├── contact/
│   ├── privacy/
│   ├── terms/
│   ├── api/contact/     # Contact form API route
│   ├── sitemap.ts       # Dynamic XML sitemap
│   ├── robots.ts        # Crawler rules
│   └── not-found.tsx    # Custom 404
├── components/
│   ├── layout/          # Header (use client), Footer
│   ├── sections/        # Page sections (Hero, ProcessTrail, etc.)
│   └── ui/              # Reusable UI (Accordion, ComparisonTable, Badge, Button, Card)
├── data/                # Content as TypeScript data
│   ├── site.ts          # Site config (name, tagline, URLs, schema data)
│   ├── navigation.ts    # Nav links + CTA link
│   ├── services.ts      # Services, process steps, friction points
│   ├── faq.ts           # FAQ content by category
│   └── caseStudies.ts   # Case study content + showcase order + status model
└── lib/
    ├── utils.ts         # Utilities (cn helper)
    ├── analytics.ts     # Custom event tracking (trackEvent)
    └── schema.ts        # JSON-LD structured data generators
```

## Key Files

| File | Purpose |
|------|---------|
| `src/app/globals.css` | Tailwind @theme inline + CSS custom properties for brand colors |
| `src/data/site.ts` | Site-wide config (name, tagline, URLs, schema data) |
| `src/data/services.ts` | Services, process steps, friction points, outcome points |
| `src/components/layout/Header.tsx` | Sticky hide-on-scroll nav with mobile menu (use client) |
| `src/lib/schema.ts` | JSON-LD structured data (Organization, LocalBusiness, FAQ, Breadcrumb) |
| `instrumentation.ts` | Sentry server/edge initialization |
| `sentry.client.config.ts` | Sentry client config (20% trace, 10% replay) |

## Brand Colors (Tailwind Classes)

```
text-forest / bg-forest     #2D5F3E  Primary (headings, buttons)
text-stone / bg-stone       #4A4A4A  Secondary (body text)
bg-offwhite                 #FAFAF8  Background
text-accent / bg-accent     #C46A32  CTAs only (use sparingly)
bg-charcoal                 #1a1a1a  Dark sections, footer
```

CTA hover: `#cf7540` (standardized across site)

## Content Source

All content comes from `../atlas/` documentation:
- Pricing: `atlas/canon/pricing/projects.md`
- Brand: `atlas/canon/business/brand-guide.md`
- Design system: `atlas/canon/business/design-system.md`
- Full spec: `atlas/reference/operations/storefront-site-requirements.md`

When updating copy or pricing, check atlas for canonical source.

## Patterns

- **Data-driven pages:** Services, FAQ, and case studies render from `src/data/` files
- **Section components:** Each major page section is a component in `src/components/sections/`
- **Server components by default:** Only Header needs `'use client'`
- **Serif font:** `font-serif` class for descriptive/marketing page headings (Instrument Serif)
- **Nav links:** Defined in `src/data/navigation.ts`, CTA link separate as `ctaLink`
- **Scroll animations:** FadeUp component for scroll-triggered entrances
- **Contact form:** Server action via `/api/contact` with Resend

## Not Yet Implemented

- [ ] Blog/MDX support
- [ ] Written-from-scratch case studies for products beyond the current five
