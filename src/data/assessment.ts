export interface AssessmentOption {
  label: string;
  points: number;
  /** Used to personalize results */
  tag?: string;
}

export interface AssessmentQuestion {
  id: string;
  question: string;
  options: AssessmentOption[];
}

export interface ResultTier {
  id: 'explorer' | 'ready' | 'urgent';
  label: string;
  headline: string;
  range: [number, number];
  description: string;
}

export interface ServiceRecommendation {
  icon: string;
  title: string;
  description: string;
  /** Tags from Q1/Q3 that trigger this recommendation */
  triggers: string[];
}

export const questions: AssessmentQuestion[] = [
  {
    id: 'intent',
    question: 'What brings you here?',
    options: [
      { label: 'I need software built (app, platform, or tool)', points: 0, tag: 'build' },
      { label: "My current systems aren't cutting it", points: 0, tag: 'improve' },
      { label: "I need technical help but don't have a team", points: 0, tag: 'team' },
      { label: "Just curious what's possible", points: 0, tag: 'explore' },
    ],
  },
  {
    id: 'current-tech',
    question: "What's the state of your current technology?",
    options: [
      {
        label: 'No custom software — spreadsheets, email, and off-the-shelf tools',
        points: 3,
      },
      { label: "Some tools but they don't talk to each other", points: 2 },
      { label: "Systems exist but they're outdated or fragile", points: 2 },
      { label: 'In good shape but need to build something new', points: 1 },
    ],
  },
  {
    id: 'challenge',
    question: "What's your biggest tech challenge right now?",
    options: [
      {
        label: 'I have an idea for software but no one to build it',
        points: 3,
        tag: 'no-builder',
      },
      {
        label: "We're wasting hours on manual work that should be automated",
        points: 3,
        tag: 'automation',
      },
      {
        label: "We're scaling and our current systems can't keep up",
        points: 3,
        tag: 'scaling',
      },
      {
        label: 'We got burned by a previous dev team and need to recover',
        points: 3,
        tag: 'burned',
      },
      {
        label: "We need senior engineering guidance but can't justify a full-time hire",
        points: 2,
        tag: 'fractional',
      },
      {
        label: 'Our infrastructure is held together with tape',
        points: 2,
        tag: 'infra',
      },
    ],
  },
  {
    id: 'team',
    question: 'Do you have a development team or technical person in-house?',
    options: [
      { label: 'No — we have zero technical staff', points: 3 },
      { label: "We have someone but they're stretched thin", points: 2 },
      { label: 'We have a team but need specialized help', points: 1 },
      { label: 'Yes, we just need a specific build done', points: 1 },
    ],
  },
  {
    id: 'timeline',
    question: "What's your timeline?",
    options: [
      { label: 'Yesterday — this is urgent', points: 3 },
      { label: 'Next 1-3 months', points: 2 },
      { label: 'Next 3-6 months — still planning', points: 1 },
      { label: 'No rush, just exploring', points: 0 },
    ],
  },
  {
    id: 'previous-attempt',
    question: 'Have you tried to solve this before?',
    options: [
      { label: 'Yes, and it failed or stalled', points: 3 },
      { label: "Yes, with off-the-shelf tools that don't quite fit", points: 2 },
      { label: "No, we've been putting it off", points: 2 },
      { label: 'No, this is a new initiative', points: 1 },
    ],
  },
  {
    id: 'budget',
    question: "Roughly, what's your budget range for this kind of work?",
    options: [
      { label: 'Under $5K', points: 1 },
      { label: '$5K - $15K', points: 2 },
      { label: '$15K - $50K', points: 2 },
      { label: '$50K+', points: 2 },
      { label: 'Not sure yet', points: 1 },
    ],
  },
];

export const resultTiers: ResultTier[] = [
  {
    id: 'explorer',
    label: 'Early Stage',
    headline: "You're exploring — and that's smart.",
    range: [0, 7],
    description:
      "You're early in the process, which is actually a great position to be in. Most businesses wait until things are on fire before thinking about technology. The fact that you're assessing now means you can plan instead of react.",
  },
  {
    id: 'ready',
    label: 'Ready to Move',
    headline: 'You have a real problem — and a clear path forward.',
    range: [8, 14],
    description:
      "You've identified specific pain points and you're ready to address them. This is the ideal time to have a focused conversation about what to build, how long it takes, and what it costs. No guesswork — just a clear scope.",
  },
  {
    id: 'urgent',
    label: 'High Urgency',
    headline: 'This is costing you time and money right now.',
    range: [15, 20],
    description:
      "Your current situation is actively holding your business back. Whether it's manual work eating hours, systems that can't scale, or a previous project that went sideways — the cost of waiting is real and growing. A 30-minute conversation can map out the fastest path forward.",
  },
];

export const serviceRecommendations: ServiceRecommendation[] = [
  {
    icon: 'rocket_launch',
    title: 'Custom Platform Development',
    description:
      'Turn your idea into production software. Architecture, development, deployment — from concept to paying customers.',
    triggers: ['build', 'no-builder', 'explore'],
  },
  {
    icon: 'web',
    title: 'Web Application',
    description:
      'Full-stack web apps — dashboards, portals, SaaS platforms, and internal tools built for performance and scale.',
    triggers: ['build', 'improve', 'scaling'],
  },
  {
    icon: 'smart_toy',
    title: 'AI & Automation',
    description:
      'Eliminate manual work with intelligent workflows, AI integrations, and system-to-system automation.',
    triggers: ['automation', 'improve'],
  },
  {
    icon: 'cloud',
    title: 'Cloud & Infrastructure',
    description:
      'Production infrastructure, CI/CD pipelines, monitoring, and scaling. Fix the foundation so everything else works.',
    triggers: ['infra', 'scaling'],
  },
  {
    icon: 'psychology',
    title: 'Architecture & Strategy',
    description:
      'Architecture reviews, tech selection, and migration planning. Senior-level guidance without the full build.',
    triggers: ['fractional', 'explore', 'team'],
  },
  {
    icon: 'build',
    title: 'Recovery & Modernization',
    description:
      "Pick up where the last team left off — or start fresh with clean architecture. We've rescued more projects than we can count.",
    triggers: ['burned'],
  },
  {
    icon: 'smartphone',
    title: 'Mobile App Development',
    description:
      'Cross-platform iOS and Android apps built with Flutter. From concept through App Store deployment.',
    triggers: ['build', 'no-builder'],
  },
];

/** Get the result tier for a given score */
export function getTier(score: number): ResultTier {
  for (const tier of resultTiers) {
    if (score >= tier.range[0] && score <= tier.range[1]) {
      return tier;
    }
  }
  return resultTiers[resultTiers.length - 1];
}

/** Get top 3 service recommendations based on user's answer tags */
export function getRecommendations(tags: string[]): ServiceRecommendation[] {
  const scored = serviceRecommendations.map((rec) => ({
    rec,
    matchCount: rec.triggers.filter((t) => tags.includes(t)).length,
  }));

  return scored
    .filter((s) => s.matchCount > 0)
    .sort((a, b) => b.matchCount - a.matchCount)
    .slice(0, 3)
    .map((s) => s.rec);
}

/** Get a personalized summary based on intent and challenge tags */
export function getPersonalizedSummary(tags: string[]): string {
  if (tags.includes('no-builder') || tags.includes('build')) {
    return "You have a clear need and no technical team to execute. That's exactly the gap Summit Studio fills — senior-led development, no overhead, concept to production.";
  }
  if (tags.includes('burned')) {
    return "You've been through it before and it didn't go well. Summit Studio is a single senior engineer who scopes honestly, delivers on time, and writes code that lasts. No account managers, no handoffs.";
  }
  if (tags.includes('scaling')) {
    return 'What worked at 10 employees breaks at 50. You need systems that grow with you — not another band-aid. Summit Studio builds architecture designed to scale.';
  }
  if (tags.includes('automation')) {
    return "Hours lost to manual work are hours you're paying for twice. Summit Studio builds automation that eliminates repetitive tasks so your team can focus on what actually matters.";
  }
  if (tags.includes('infra')) {
    return 'Infrastructure problems compound silently until something breaks at the worst possible time. Summit Studio builds production-grade cloud infrastructure with CI/CD, monitoring, and reliability built in.';
  }
  if (tags.includes('fractional')) {
    return 'A senior engineer costs $180K+/year. You need that expertise for a few months, not forever. Summit Studio gives you hands-on technical leadership without the full-time commitment.';
  }
  return "You're thinking about technology the right way — assessing before committing. Summit Studio helps businesses figure out exactly what to build, then builds it. Senior-led, no overhead, clear outcomes.";
}

export const maxScore = questions.reduce((max, q) => {
  const highest = Math.max(...q.options.map((o) => o.points));
  return max + highest;
}, 0);
