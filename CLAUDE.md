# Summit Studio Storefront

Marketing website for Summit Studio (summitstudio.dev).

## Commands

```bash
npm run dev     # Start dev server at http://localhost:3000
npm run build   # Production build (static export)
npm run lint    # ESLint
```

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4
- **Deployment:** Vercel (free tier)
- **Font:** Inter (Google Fonts)

## Directory Structure

```
src/
├── app/                 # Pages (App Router)
│   ├── layout.tsx       # Root layout with Header/Footer
│   ├── page.tsx         # Landing page
│   ├── about/
│   ├── why-us/
│   ├── services/
│   ├── faq/
│   ├── contact/
│   ├── privacy/
│   ├── terms/
│   └── not-found.tsx    # Custom 404
├── components/
│   ├── layout/          # Header, Footer
│   ├── sections/        # Page sections (Hero, PricingPreview, etc.)
│   └── ui/              # Reusable UI (Accordion, ComparisonTable)
├── data/                # Content as TypeScript data
│   ├── site.ts          # Site config (name, URLs, etc.)
│   ├── navigation.ts    # Nav links
│   ├── services.ts      # Services and pricing data
│   └── faq.ts           # FAQ content by category
└── lib/
    └── utils.ts         # Utilities (cn helper)
```

## Key Files

| File | Purpose |
|------|---------|
| `src/app/globals.css` | Tailwind config + CSS custom properties for brand colors |
| `src/data/site.ts` | Site-wide config (name, tagline, URLs) |
| `src/data/services.ts` | Pricing tiers, solutions, retainers |
| `src/components/layout/Header.tsx` | Sticky nav with mobile menu |

## Brand Colors (Tailwind Classes)

```
text-forest / bg-forest     #2D5F3E  Primary (headings, buttons)
text-stone / bg-stone       #4A4A4A  Secondary (body text)
bg-offwhite                 #FAFAF8  Background
text-accent / bg-accent     #C46A32  CTAs only (use sparingly)
```

## Content Source

All content comes from `../atlas/` documentation:
- Pricing: `atlas/canon/pricing/projects.md`
- Brand: `atlas/canon/business/brand-guide.md`
- Full spec: `atlas/reference/operations/storefront-site-requirements.md`

When updating copy or pricing, check atlas for canonical source.

## Patterns

- **Data-driven pages:** Services, FAQ, and pricing render from `src/data/` files
- **Section components:** Each major page section is a component in `src/components/sections/`
- **No animations yet:** Framer Motion patterns to be added later
- **Contact form:** Client-side only for now (shows success, doesn't submit)
- **Calendly:** Placeholder link, not embedded yet

## Not Yet Implemented

- [ ] Contact form backend (Formspree/Resend)
- [ ] Calendly embed
- [ ] Scroll animations (Framer Motion)
- [ ] Blog/MDX support
- [ ] Analytics (Vercel Analytics)
- [ ] Structured data (JSON-LD)
