import type { Metadata } from 'next';
import Link from 'next/link';
import ComparisonTable from '@/components/ui/ComparisonTable';

export const metadata: Metadata = {
  title: 'Why Summit Studio | Local, Affordable, Transparent',
  description:
    '50% less than big agencies. Transparent pricing. Outcome-focused. See why Tennessee businesses choose Summit Studio for custom software.',
};

const agencyComparison = [
  {
    feature: 'Pricing',
    competitor: 'Hidden, "contact for quote"',
    summit: 'Published, transparent, fixed-price',
  },
  {
    feature: 'Cost',
    competitor: '$100-200/hr, unclear total',
    summit: '50% less, milestone payments',
  },
  {
    feature: 'Focus',
    competitor: 'Technology and process',
    summit: 'Your outcomes and results',
  },
  {
    feature: 'Communication',
    competitor: 'Layers of project managers',
    summit: 'Direct access to who builds it',
  },
  {
    feature: 'Sales cycle',
    competitor: 'Long RFPs, weeks of meetings',
    summit: 'Quick consultation → proposal → start',
  },
  {
    feature: 'Warranty',
    competitor: 'Varies',
    summit: '30-60 days on everything',
  },
];

const freelancerComparison = [
  {
    feature: 'Reliability',
    competitor: 'Solo, limited capacity',
    summit: 'Structured process, backup capacity',
  },
  {
    feature: 'Pricing',
    competitor: 'Hourly, unpredictable total',
    summit: 'Fixed-price, clear milestones',
  },
  {
    feature: 'Quality',
    competitor: 'Varies widely',
    summit: 'Every PR reviewed by senior engineer',
  },
  {
    feature: 'Support',
    competitor: 'Often disappears after delivery',
    summit: 'Retainer options, ongoing partnership',
  },
  {
    feature: 'Process',
    competitor: 'Ad-hoc',
    summit: 'Documented, repeatable, professional',
  },
];

const diyComparison = [
  {
    feature: 'Fit',
    competitor: "Generic, doesn't fit your process",
    summit: 'Custom-built for exactly how you work',
  },
  {
    feature: 'Cost Model',
    competitor: 'Monthly SaaS fees forever',
    summit: 'You own it, no recurring platform cost',
  },
  {
    feature: 'Scalability',
    competitor: 'Limited by their features',
    summit: 'Scales with your business',
  },
  {
    feature: 'Support',
    competitor: 'You figure it out alone',
    summit: 'Training and ongoing support included',
  },
];

const differentiators = [
  {
    title: 'Transparent Pricing',
    description: 'Published rates. No surprises. Fixed-price projects.',
  },
  {
    title: 'Outcome-Focused',
    description: 'We measure in hours saved and errors prevented. Not features shipped.',
  },
  {
    title: 'Local Accountability',
    description: "Based in Cookeville. We're your neighbor, not a faceless agency.",
  },
  {
    title: 'Milestone Payments',
    description: 'See progress before paying more. 30/30/40 split.',
  },
  {
    title: '30-60 Day Warranty',
    description: 'If something breaks, we fix it. No extra charge.',
  },
  {
    title: 'Training Included',
    description: "We don't just build it and leave. Your team knows how to use it.",
  },
];

export default function WhyUsPage() {
  return (
    <main className="bg-[#FAFAF8]">
      {/* Section 1: Hero */}
      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-[#2D5F3E] md:text-5xl">
            Not Another Tech Company
          </h1>
          <p className="text-xl text-[#4A4A4A] md:text-2xl">
            We focus on your problems, not our tech stack. Here&apos;s why that matters.
          </p>
        </div>
      </section>

      {/* Section 2: vs Big Agencies */}
      <section className="bg-white px-4 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-[#2D5F3E] md:text-4xl">
            vs. Big Agencies
          </h2>
          <p className="mb-10 text-center text-[#4A4A4A]">
            Get the quality without the overhead and opaque pricing.
          </p>
          <ComparisonTable competitorName="Big Agencies" rows={agencyComparison} />
        </div>
      </section>

      {/* Section 3: vs Freelancers */}
      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-[#2D5F3E] md:text-4xl">
            vs. Freelancers
          </h2>
          <p className="mb-10 text-center text-[#4A4A4A]">
            Get the flexibility with real process and quality assurance.
          </p>
          <ComparisonTable competitorName="Freelancers" rows={freelancerComparison} />
        </div>
      </section>

      {/* Section 4: vs DIY/SaaS */}
      <section className="bg-white px-4 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-[#2D5F3E] md:text-4xl">
            vs. DIY / Off-the-Shelf SaaS
          </h2>
          <p className="mb-10 text-center text-[#4A4A4A]">
            Get software that fits your business, not the other way around.
          </p>
          <ComparisonTable competitorName="DIY / Off-the-Shelf" rows={diyComparison} />
        </div>
      </section>

      {/* Section 5: Key Differentiators */}
      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#2D5F3E] md:text-4xl">
            Why Summit Studio
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => (
              <div key={item.title} className="rounded-lg border border-[#2D5F3E]/20 bg-white p-6">
                <h3 className="mb-2 text-lg font-bold text-[#2D5F3E]">{item.title}</h3>
                <p className="text-[#4A4A4A]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 6: CTA */}
      <section className="bg-white px-4 py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-2xl font-bold text-[#2D5F3E] md:text-3xl">
            See how we stack up for your project.
          </h2>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-[#C46A32] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#a85a2a]"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
