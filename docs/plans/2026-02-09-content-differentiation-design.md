# Content Differentiation: Homepage vs Services

**Date**: 2026-02-09
**Problem**: Homepage and Services page are nearly identical — same 6-card grid, same checkmark patterns, same CTA copy, same "web, mobile, cloud, AI" phrasing repeated verbatim across 4+ pages.

## Design Decisions

### Homepage: Teaser + Proof
The homepage becomes a lighter, emotionally-driven page. It no longer duplicates the services catalog.

**New flow:**
1. Hero — keep "Custom software, built right" headline. Rewrite subtitle to be outcome-focused (no capability enumeration).
2. Category Bar (NEW) — dark `bg-charcoal` band below hero. 5 icon+label items linking to /services#anchors. Replaces the old 6-card services grid.
3. Tech Marquee (NEW) — "We've got your stack." + two-row auto-scrolling ticker of 25-30 tech names. CSS-only animation, pauses on hover.
4. Sound Familiar? — keep as-is (unique emotional content)
5. What You Get — keep as-is (unique outcomes + case study card)
6. Trust Signal — keep as-is
7. CTA — LIGHTER format. No charcoal band. Centered text on offwhite. "Let's find out if we're the right fit."

**Removed from homepage:** Services grid component (6 cards), heavy charcoal CTA band.

### Services Page: Deep Catalog
The services page becomes the definitive capability reference with per-category deep sections.

**New flow:**
1. Hero — keep "Software development, end to end". Rewrite subtitle: "Everything you need to go from idea to production. One team, one contract."
2. Service grid — keep 6 cards, but each now links to its expanded section below via anchor.
3. Per-Category Sections (NEW) — 6 anchor-linked sections, alternating white/offwhite backgrounds. Each contains: title, 2-3 paragraph description, tech pills, "Typical projects" bullets, inline CTA.
4. Sticky Side Nav (NEW) — `position: fixed` left-side nav visible only on lg+ when in the category sections. Highlights active section via IntersectionObserver. Fades in/out based on scroll position.
5. How We Deliver — keep as-is
6. CTA — keep charcoal band but update copy: "Know what you need built?" / "Get a Proposal"

### CTA Variation (All Pages)
| Page | Format | Headline | Button |
|------|--------|----------|--------|
| Home | Light (offwhite, no band) | "Let's find out if we're the right fit." | "Book a Free Call" |
| Services | Charcoal band | "Know what you need built?" | "Get a Proposal" |
| Process | Forest accent card (rounded, not full-width) | "Ready to start building?" | "Schedule a Conversation" |
| Case Studies | Inline text + button (no wrapper) | "Want results like these?" | "Start Yours" |

### Naming Changes
- "Consulting & Strategy" renamed to "Architecture & Strategy" sitewide

### New Components
- `CategoryBar.tsx` — server component, dark band with 5 linked items
- `TechMarquee.tsx` — client component, CSS keyframe scrolling ticker
- `ServiceSideNav.tsx` — client component, IntersectionObserver-based sticky nav
- `ServiceDetail.tsx` — server component, per-category expanded section

### Data Updates (`services.ts`)
- New `categoryBarItems` export (5 items: icon, label, anchor)
- New `techStack` export (array of ~30 tech name strings)
- New `serviceDetails` export (6 items: slug, longDescription, typicalProjects[], techList[])
- Rename "Consulting & Strategy" to "Architecture & Strategy" in all exports
