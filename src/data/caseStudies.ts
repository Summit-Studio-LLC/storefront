export type CaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  categoryTag: string;
  client: string;
  services: string[];
  duration: string;
  problem: string;
  stats: { value: string; label: string }[];
  discovery: string[];
  keyTakeaway: string;
  solution: string[];
  results: { before: string; after: string }[];
  lookingForward: {
    intro: string;
    items: string[];
    outro: string;
  };
  cta: {
    headline: string;
    subtext: string;
    buttonLabel: string;
    buttonHref: string;
  };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'league-handicap',
    title: 'From Spreadsheet Chaos to Automated Platform',
    subtitle:
      'How a PGA Professional spotted a gap in the golf industry — and we built the product that fills it.',
    category: 'Golf / Workflow Automation',
    categoryTag: 'Golf / Workflow Automation',
    client: 'Albatross Systems LLC',
    services: [
      'Workflow Automation',
      'Data Import & Integration',
      'Reporting & Dashboards',
      'Database Architecture',
      'Billing & Subscription Setup',
    ],
    duration: 'Under 1 month',
    problem:
      'No software existed for per-league handicap calculations. Every golf course was stuck doing it by hand — and nobody had built the product to fix it.',
    stats: [
      { value: '<3 wks', label: 'Build time' },
      { value: '~1 mo', label: 'To first paying customer' },
      { value: 'Growing', label: 'New courses every week' },
    ],
    discovery: [
      'Josh Riches is a PGA Professional who grew league participation at his course by 547% — from 46 members to over 250. That growth revealed a problem every golf course shares — and nobody had solved it.',
      "Every week after a round, league coordinators everywhere sit down with a spreadsheet. They export scores, manually look up each player's history, calculate new handicap numbers using that league's specific rules, update the sheet, and double-check their math. Then they do it again for the next league — which has entirely different rules.",
      "There was no software that handled this. The tools that exist either force a one-size-fits-all formula or only handle tournament scoring. None of them understood that a golfer playing in three different leagues has three different handicaps, each calculated differently. Josh didn't just see his own headache — he saw a gap in the market.",
      "He had tried working with another engineer to build a solution. The project hadn't gotten far. The problem was clear, the market opportunity was real, and he needed a partner who could move fast and build it right.",
    ],
    keyTakeaway:
      "Josh didn't just need his own spreadsheet automated — he saw that every golf course had the same problem and nobody was solving it. We built the product to fill that gap, and it was live and selling to its first customer in under a month.",
    solution: [
      'We started with the spreadsheet. Josh walked through exactly how he calculated handicaps — step by step, rule by rule, league by league. That conversation was the entire spec.',
      "From there, the build took just under three weeks. We built it as a product from day one — not a one-off tool for a single course, but a platform any golf course could use. Scores upload from a single file, the system matches players, applies each league's specific rules, and calculates handicaps automatically.",
      'We made it auditable — every calculation is traceable. When a member questions their number, the math is transparent and on record. We built the reports — handicap lists, individual breakdowns, multi-league summaries. Ready to print, download, or email directly to members.',
      'We handled the edge cases — mixed leagues with different tee boxes, senior players with different defaults, courses with multiple rating sets. All configurable per league, per course.',
      'The platform went live and sold its first paying customer the following week. Total time from first conversation to revenue: approximately one month.',
    ],
    results: [
      {
        before: 'An unsolved industry-wide problem',
        after: 'A product that fills the gap — used by multiple courses',
      },
      {
        before: 'Hours of weekly spreadsheet work per league',
        after: 'Single file upload, handicaps calculated in seconds',
      },
      {
        before: 'Manual lookups and formula errors',
        after: 'Fully automated, auditable calculations',
      },
      {
        before: 'No revenue from the process',
        after: 'Recurring revenue, acquiring new clients every week',
      },
      {
        before: 'Previous engineering attempt stalled',
        after: 'Production-ready in under 3 weeks',
      },
    ],
    lookingForward: {
      intro:
        'League Handicap is acquiring new golf courses every week. The platform already supports multiple courses running concurrent leagues with independent rules and configurations. The roadmap includes:',
      items: [
        'Expanded course onboarding — streamlining setup so new courses can be live in minutes',
        'Direct integrations — moving beyond file upload toward real-time score syncing with scoring platforms',
        'Member-facing features — giving individual golfers visibility into their own handicap history and progression across leagues',
        'Mobile experience — making handicap data accessible from the course, not just the pro shop office',
      ],
      outro:
        'What started as one PGA Professional spotting a market gap is becoming the infrastructure that golf leagues run on.',
    },
    cta: {
      headline: "Got a process that's eating your time?",
      subtext: "We've turned spreadsheets into software before. Let's talk about yours.",
      buttonLabel: 'Schedule a Conversation',
      buttonHref: '/contact',
    },
  },
];
