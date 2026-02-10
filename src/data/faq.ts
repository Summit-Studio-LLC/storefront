export interface FAQQuestion {
  question: string;
  answer: string;
  link?: { label: string; href: string };
}

export interface FAQCategory {
  id: string;
  name: string;
  questions: FAQQuestion[];
}

export const faqCategories: FAQCategory[] = [
  {
    id: 'general',
    name: 'General',
    questions: [
      {
        question: 'How is Summit Studio different from a big agency?',
        answer:
          'You get the same caliber of engineering as a 50-person agency — minus the overhead. No project managers relaying messages. No offshore teams. No account executives. You work directly with the senior engineer building your software. Our model is lean by design: senior-led development, reviewed code, honest pricing.',
      },
      {
        question: 'Who are your clients?',
        answer:
          "Small and mid-sized businesses — both local and nationwide. We work with local service companies automating workflows, growing startups building their first product, and established businesses modernizing legacy systems. If you need real software built by a senior engineer, we're a good fit.",
      },
      {
        question: 'Are you a local company?',
        answer:
          "We're based in Cookeville, Tennessee — and we work with clients locally and remotely. Our process works the same regardless of location: milestone demos, regular communication, transparent delivery. You'll always work directly with our founder.",
      },
      {
        question: 'What size projects do you take on?',
        answer:
          "From 4-week automation builds to 6+ month platform projects. We scope every engagement during a free consultation and tell you honestly whether we're the right fit for the scale and complexity of what you need.",
      },
      {
        question: 'Do you work with remote clients?',
        answer:
          "Yes. We work with clients locally in Tennessee and remotely across the country. Our process — milestone demos, regular communication, full documentation — works the same regardless of where you're located.",
      },
    ],
  },
  {
    id: 'process',
    name: 'Process & Timeline',
    questions: [
      {
        question: 'How long does a project take?',
        answer:
          '6–16 weeks depending on complexity. Simpler single-workflow projects land in the 6–8 week range, while more complex multi-system builds take 14–16 weeks. We scope every project during a free consultation so you know the timeline upfront before committing.',
      },
      {
        question: "What's the process like?",
        answer:
          "It starts with a free 30-minute consultation where we map out your problem. From there: scoping, a fixed-price proposal, then we build — with regular demos so you see working features throughout. After launch you get training for your team and full documentation. You're involved at every step.",
        link: { label: 'See our full process', href: '/process' },
      },
      {
        question: 'Will I see progress during the project?',
        answer:
          'Yes. We demo working features regularly so you can give feedback throughout the build. Milestone payments are tied to visible progress — you see results before you pay more.',
      },
      {
        question: 'What if I need changes during the project?',
        answer:
          'Minor adjustments within scope are included. Significant changes are handled through a straightforward change order process so there are no surprises on either side.',
      },
    ],
  },
  {
    id: 'support',
    name: 'Quality & Support',
    questions: [
      {
        question: 'What happens after the project is done?',
        answer:
          "You're not left on your own. Every project ends with full documentation, hands-on training for your team, and a 30–60 day warranty — if something we built breaks, we fix it at no charge. After the warranty, we offer monthly retainer plans for ongoing maintenance, updates, and support so your system keeps running as your business evolves.",
      },
      {
        question: 'Do you offer ongoing support?',
        answer:
          'Yes. We offer monthly retainer plans ranging from lightweight monitoring to hands-on partnership, depending on how critical the system is to your operations. Ask about options during your consultation.',
      },
      {
        question: 'Who actually builds the software?',
        answer:
          'Our founder leads every project. As we grow, Tennessee Tech CS students contribute under direct senior mentorship — every line of code is reviewed by a senior engineer before it ships. You get affordable rates backed by professional-grade quality.',
      },
    ],
  },
  {
    id: 'technology',
    name: 'Technology',
    questions: [
      {
        question: 'What technologies do you use?',
        answer:
          'Our stack spans the full development spectrum. TypeScript, Python, and Go for backends. React, Next.js, and Flutter for frontends. AWS, GCP, and Terraform for infrastructure. PostgreSQL and MongoDB for data. AI integrations using OpenAI, Anthropic, and custom solutions. We pick the right tool for the project — not the trendiest one.',
      },
      {
        question: 'Will I own the code?',
        answer:
          'You own all the custom code we build for your business — your logic, your data, your integrations, your configurations. Full source code, documentation, and deployment access. We retain ownership of our internal tools and starter templates that we use across projects, but you get a perpetual license to use everything we deliver. No lock-in — any developer can pick up where we left off.',
      },
      {
        question: 'Can you integrate with tools I already use?',
        answer:
          'Usually yes. We commonly integrate with QuickBooks, Google Workspace, Square, Calendly, Stripe, and other business tools. If your systems have an API, we can almost certainly connect them.',
      },
      {
        question: 'Do I need to understand technology?',
        answer:
          "Not at all. We handle everything technical and explain things in plain language. You focus on telling us how your business works and what wastes your time — we'll handle the rest.",
      },
      {
        question: 'Do you build mobile apps?',
        answer:
          'Yes. We build cross-platform mobile applications for iOS and Android using Flutter. From initial design through App Store and Google Play deployment — development, testing, and launch.',
      },
      {
        question: 'Can you handle cloud infrastructure and DevOps?',
        answer:
          'Yes. We design and manage cloud infrastructure on AWS and GCP using Terraform for Infrastructure as Code. That includes CI/CD pipelines, deployment automation, monitoring, alerting, and cost optimization. Your infrastructure is documented, version-controlled, and reproducible.',
      },
      {
        question: 'Do you work with AI?',
        answer:
          'Yes — where it creates real value, not as a buzzword. We integrate AI for document processing, data extraction, intelligent automation, and custom tooling. We use models from OpenAI, Anthropic, and custom solutions depending on the use case and data sensitivity.',
      },
    ],
  },
];
