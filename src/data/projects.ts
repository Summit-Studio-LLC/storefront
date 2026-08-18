import { caseStudies } from './caseStudies';

export type ShowcaseProject = {
  slug: string;
  name: string;
  title: string;
  subtitle: string;
  category: string;
  /** Material Symbols Outlined ligature shown in the card header. */
  icon: string;
  /**
   * `live` — shipped and in customers' hands.
   * `active` — being built right now.
   * `paused` — real work exists, but it is not the current focus.
   */
  status: 'live' | 'active' | 'paused';
  tags: string[];
  stats?: { value: string; label: string }[];
  /** Present only when a full case study page exists. */
  href?: string;
};

const leagueHandicap = caseStudies[0];

export const showcaseProjects: ShowcaseProject[] = [
  {
    slug: leagueHandicap.slug,
    name: 'League Handicap',
    title: leagueHandicap.title,
    subtitle: leagueHandicap.subtitle,
    category: leagueHandicap.category,
    icon: 'sports_golf',
    status: 'live',
    tags: leagueHandicap.tags ?? [],
    stats: leagueHandicap.stats,
    href: `/case-studies/${leagueHandicap.slug}`,
  },
  {
    slug: 'starcard',
    name: 'StarCard',
    title: 'A Local Discount Program, Rebuilt for the Phone',
    subtitle:
      'Replacing a printed loyalty card with a mobile membership — merchant-defined offers, in-store redemption, and real engagement data for the people running the program.',
    category: 'Mobile App',
    icon: 'loyalty',
    status: 'live',
    tags: ['Mobile App', 'iOS & Android', 'Payments'],
  },
  {
    slug: 'heros-rise',
    name: "Hero's Rise",
    title: 'An AI Companion for the Tabletop',
    subtitle:
      'A deterministic rules engine paired with an AI harness that drafts house rules, proves them with tests, and waits for the game master to approve before anything changes.',
    category: 'Product Development',
    icon: 'casino',
    status: 'active',
    tags: ['AI & Automation', 'Web Platform', 'Product Development'],
  },
  {
    slug: 'shiptide',
    name: 'ShipTide',
    title: 'The Revenue Layer for Third-Party Logistics',
    subtitle:
      'Turning messy warehouse, carrier, and contract data into accurate billing and clearer margins for parcel-heavy 3PLs — without ripping out the warehouse system they already run on.',
    category: 'SaaS Platform',
    icon: 'local_shipping',
    status: 'paused',
    tags: ['SaaS', 'AI & Automation', 'Data Integration'],
  },
  {
    slug: 'attest',
    name: 'Attest',
    title: 'Digital Scorecards, Verified at the Table',
    subtitle:
      'Replacing paper golf scorecards with live mobile entry, AI photo parsing, and cryptographically signed verification passed between playing partners.',
    category: 'Mobile App',
    icon: 'verified',
    status: 'paused',
    tags: ['Mobile App', 'AI & Automation', 'Offline-First'],
  },
];
