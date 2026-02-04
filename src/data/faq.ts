export interface FAQQuestion {
  question: string;
  answer: string;
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
        question: 'What does Summit Studio do?',
        answer: 'We build custom software for local businesses. If your team wastes time on manual data entry, paper forms, scheduling chaos, or spreadsheet management — we build a system to fix that.',
      },
      {
        question: 'Who are your clients?',
        answer: 'Small and mid-sized businesses in the Cookeville area and Upper Cumberland region. Trades companies, professional services, healthcare practices, and more.',
      },
      {
        question: 'Are you a local company?',
        answer: 'Yes. We\'re based in Cookeville, Tennessee and focus on serving local businesses.',
      },
    ],
  },
  {
    id: 'pricing',
    name: 'Pricing & Payment',
    questions: [
      {
        question: 'How much does a project cost?',
        answer: 'Projects range from $2,500 to $20,000 depending on complexity. We publish our pricing because we believe in transparency. See our Services page for details.',
      },
      {
        question: 'Do you charge hourly?',
        answer: 'No. Every project is fixed-price. You know the cost before you commit. No surprises.',
      },
      {
        question: 'What are the payment terms?',
        answer: '30% upfront, 30% at the midpoint, 40% at final delivery. You see progress before you pay more.',
      },
      {
        question: 'Do you offer discounts?',
        answer: 'We occasionally offer pilot pricing for new types of projects. Ask during your consultation.',
      },
    ],
  },
  {
    id: 'process',
    name: 'Process & Timeline',
    questions: [
      {
        question: 'How long does a project take?',
        answer: '6-16 weeks depending on complexity. Starter projects take 6-8 weeks, Standard 10-12, Advanced 14-16.',
      },
      {
        question: 'What\'s the process like?',
        answer: 'Free consultation → Scoping → Proposal → Build (with regular demos) → Launch → Training. You\'re involved at every step.',
      },
      {
        question: 'Will I see progress during the project?',
        answer: 'Yes. We demo working features regularly. Milestone payments are tied to visible progress.',
      },
      {
        question: 'What if I need changes during the project?',
        answer: 'Minor adjustments within scope are included. Significant changes are handled through a straightforward change order process.',
      },
    ],
  },
  {
    id: 'support',
    name: 'Quality & Support',
    questions: [
      {
        question: 'What happens after the project is done?',
        answer: 'You get full documentation, training for your team, and a 30-60 day warranty. After that, optional retainer plans are available for ongoing support.',
      },
      {
        question: 'What\'s included in the warranty?',
        answer: 'If something we built breaks within 30-60 days of launch, we fix it at no extra charge.',
      },
      {
        question: 'Do you offer ongoing support?',
        answer: 'Yes. Monthly retainer plans start at $300/month for 2 hours of support. Most clients choose our Silver plan ($750/month, 5 hours).',
      },
      {
        question: 'Who actually builds the software?',
        answer: 'Our founder leads every project. As we grow, Tennessee Tech CS students contribute under direct senior mentorship — every line of code is reviewed before it ships.',
      },
    ],
  },
  {
    id: 'technology',
    name: 'Technology',
    questions: [
      {
        question: 'What technologies do you use?',
        answer: 'We use proven, maintainable technologies — nothing bleeding-edge or experimental. We choose the right tool for your project, not the trendiest one.',
      },
      {
        question: 'Will I own the code?',
        answer: 'Yes. You own everything we build. Full source code, documentation, and deployment access.',
      },
      {
        question: 'Can you integrate with tools I already use?',
        answer: 'Usually yes. We commonly integrate with QuickBooks, Google Workspace, Square, Calendly, and other business tools.',
      },
      {
        question: 'Do I need to understand technology?',
        answer: 'Not at all. We handle everything technical. You focus on telling us how your business works and what wastes your time.',
      },
    ],
  },
];
