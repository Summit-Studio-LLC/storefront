export const landingServices = [
  {
    icon: 'precision_manufacturing',
    title: 'Workflow Automation',
    description:
      'Streamline repetitive tasks and reclaim your time with intelligent bots that handle the heavy lifting for you.',
  },
  {
    icon: 'monitoring',
    title: 'Custom Dashboards',
    description:
      "Visualize your data with bespoke admin panels designed for clarity, giving you a bird's-eye view of your business.",
  },
  {
    icon: 'rocket_launch',
    title: 'New Product Ideas',
    description:
      "Have an idea for a tool or app? We turn it into real software — built to scale from day one, not a prototype you'll throw away.",
  },
];

export const solutions = [
  {
    title: 'Workflow Automation',
    description:
      'Replace manual data entry, paper forms, and spreadsheet chaos with custom digital workflows.',
    startingAt: '$2,500',
  },
  {
    title: 'Scheduling & Booking',
    description: 'Online booking, automated reminders, calendar sync. End double-bookings.',
    startingAt: '$2,500',
  },
  {
    title: 'Client & Job Management',
    description: 'Track clients, jobs, and communication in one place. Stop losing paperwork.',
    startingAt: '$5,000',
  },
  {
    title: 'Reporting & Dashboards',
    description: 'See your business at a glance. Revenue, jobs, hours — real-time visibility.',
    startingAt: '$3,000',
  },
  {
    title: 'Customer Portals',
    description:
      'Give your clients a login to check status, submit requests, and access documents.',
    startingAt: '$4,000',
  },
  {
    title: 'Integrations',
    description: 'Connect your existing tools (QuickBooks, Google Workspace, Square, etc.).',
    startingAt: 'Varies',
  },
];

export const pricingTiers = [
  {
    name: 'Starter',
    price: '$2,500–$5,000',
    timeline: '6-8 weeks',
    features: ['Single workflow, 1-2 user types'],
    example: 'Digital intake form, simple scheduling tool',
    highlighted: false,
  },
  {
    name: 'Standard',
    price: '$5,000–$10,000',
    timeline: '10-12 weeks',
    features: ['2-3 workflows, multiple roles'],
    example: 'Job management + scheduling + basic reporting',
    highlighted: true,
  },
  {
    name: 'Advanced',
    price: '$10,000–$20,000',
    timeline: '14-16 weeks',
    features: ['Complex workflows, integrations, reporting'],
    example: 'Full platform with integrations, dashboards, portals',
    highlighted: false,
  },
];

export const includedFeatures = [
  'Requirements gathering and scoping',
  'Design and development',
  'Testing and deployment',
  'User training (1-2 sessions)',
  'Technical documentation',
  '30-60 day warranty',
];

export const paymentTerms = '30% upfront → 30% at midpoint → 40% at completion';

export const retainerPlans = [
  {
    tier: 'Bronze',
    hours: '2 hours',
    responseTime: '48hr',
    price: '$300',
  },
  {
    tier: 'Silver',
    hours: '5 hours',
    responseTime: '24hr',
    price: '$750',
  },
  {
    tier: 'Gold',
    hours: '10 hours',
    responseTime: '4hr',
    price: '$1,500',
  },
];

export const processSteps = [
  {
    step: 1,
    title: 'Free Consultation',
    duration: '30 min',
    description: "Tell us your problem. We'll tell you if we can help.",
  },
  {
    step: 2,
    title: 'Scoping & Proposal',
    duration: '1 week',
    description: 'We define the project, you approve the price.',
  },
  {
    step: 3,
    title: 'Build & Demo',
    duration: '6-16 weeks',
    description: 'Milestone delivery. Regular demos. No surprises.',
  },
  {
    step: 4,
    title: 'Launch & Training',
    duration: '1-2 weeks',
    description: 'We deploy, train your team, and hand over documentation.',
  },
  {
    step: 5,
    title: 'Ongoing Support',
    duration: 'optional',
    description: 'Retainer for updates, improvements, and peace of mind.',
  },
];

// Option B: Customer-voice pain points (active)
// Option A alt: "Common Friction Points" header, consultant-style titles:
//   "Wasted Time on Manual Entry", "Disconnected Data Silos",
//   "The Spreadsheet Ceiling", "Inconsistent Client Experience",
//   "Missed Follow-ups", "Burnout from Admin"
export const frictionPoints = [
  {
    icon: 'schedule',
    title: '"We\'re drowning in paperwork"',
    description:
      'Your team spends hours every week on data entry, copying info between spreadsheets, and filling out the same forms. That time should go to your customers.',
  },
  {
    icon: 'event_busy',
    title: '"I keep double-booking clients"',
    description:
      'Without a real scheduling system, appointments fall through the cracks. Clients get frustrated, and you lose business you already earned.',
  },
  {
    icon: 'table_view',
    title: '"We run everything out of spreadsheets"',
    description:
      'Spreadsheets were fine when you had 10 clients. Now you have 200, and one wrong formula breaks everything. You need something built for how you actually work.',
  },
  {
    icon: 'person_off',
    title: '"When someone quits, the knowledge leaves with them"',
    description:
      "Critical processes live in people's heads, not in systems. Every new hire starts from scratch, and things get missed during the transition.",
  },
  {
    icon: 'mark_email_unread',
    title: '"Leads fall through the cracks"',
    description:
      "A potential customer called last Tuesday. Did anyone follow up? Nobody knows, because there's no system tracking it. That's revenue walking out the door.",
  },
  {
    icon: 'battery_alert',
    title: '"I started a business, not an admin job"',
    description:
      "You're spending your evenings on invoices, scheduling, and data cleanup instead of growing the business. You didn't sign up for this.",
  },
];

// Option B: Concrete, outcome-focused automation services (active)
// Option A alt: "Optimize & Automate" header with titles:
//   "Workflow Automation", "System Integration", "Reporting & Dashboards"
export const optimizeServices = [
  {
    icon: 'precision_manufacturing',
    title: 'Eliminate Repeat Data Entry',
    description:
      'We build automations that move data between your tools so nobody has to type it twice. Invoices, intake forms, job updates — handled.',
  },
  {
    icon: 'hub',
    title: 'Connect Your Existing Tools',
    description:
      'QuickBooks, Google Workspace, Square, your CRM — we wire them together so data flows automatically. No more logging into five systems to get one answer.',
  },
  {
    icon: 'monitoring',
    title: 'Dashboards That Actually Help',
    description:
      'We replace your monthly spreadsheet scramble with live dashboards. Revenue, jobs, hours, customer status — all in one place, always current.',
  },
];

// Option B: Concrete, outcome-focused greenfield services (active)
// Option A alt: "New Summits" header with titles:
//   "Custom Operating Systems", "Scalable MVP Development",
//   "Integrated Automation Ecosystems"
export const greenfieldServices = [
  {
    icon: 'settings_system_daydream',
    title: 'Job & Customer Management',
    description:
      'Track every client, job, and conversation in one system built around how your business actually runs. No more digging through email threads and sticky notes.',
  },
  {
    icon: 'calendar_month',
    title: 'Online Scheduling Systems',
    description:
      'Let customers book appointments online. Automated reminders, calendar sync, no back-and-forth phone tag. End double-bookings for good.',
  },
  {
    icon: 'rocket_launch',
    title: "Something That Doesn't Exist Yet",
    description:
      "Have an idea for a tool, app, or platform? We turn napkin sketches into real software — built to scale from day one, not a prototype you'll throw away.",
  },
];

// Option B: Concrete outcomes customers can picture (active)
// Option A alt: "The Right Foundation" header with titles:
//   "Scalable from Day 1", "Custom Fit", "Human-Centric Design"
export const outcomePoints = [
  {
    title: 'Your Team Gets Hours Back Every Week',
    description:
      'The tasks that eat up Monday mornings — data entry, status updates, report assembly — run automatically. Your people focus on customers instead.',
  },
  {
    title: 'New Employees Get Up to Speed Fast',
    description:
      "When processes live in software instead of people's heads, training takes days instead of months. Nothing critical gets lost when someone leaves.",
  },
  {
    title: 'You Can Actually Delegate',
    description:
      "With clear systems and real visibility, you don't have to be involved in every decision. The business runs whether you're there or not.",
  },
];
