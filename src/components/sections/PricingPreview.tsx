import Link from 'next/link';

const pricingTiers = [
  {
    problem: 'Manual data entry eating 10+ hrs/week',
    solution: 'Custom automation system',
    price: '$2,500-$5,000',
    timeline: '6-8 weeks',
  },
  {
    problem: 'Paper forms and scheduling chaos',
    solution: 'Digital workflow with mobile access',
    price: '$5,000-$10,000',
    timeline: '10-12 weeks',
  },
  {
    problem: 'Complex process with integrations',
    solution: 'Full platform connecting your tools',
    price: '$10,000-$20,000',
    timeline: '14-16 weeks',
  },
];

export default function PricingPreview() {
  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-forest md:text-4xl">
          Transparent Pricing
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className="flex flex-col rounded-lg border border-gray-200 bg-offwhite p-6"
            >
              <div className="mb-4">
                <p className="mb-2 text-sm font-medium uppercase tracking-wide text-accent">
                  Problem
                </p>
                <p className="text-stone">{tier.problem}</p>
              </div>
              <div className="mb-4">
                <p className="mb-2 text-sm font-medium uppercase tracking-wide text-forest">
                  Solution
                </p>
                <p className="font-medium text-stone">{tier.solution}</p>
              </div>
              <div className="mt-auto border-t border-gray-200 pt-4">
                <div className="flex justify-between">
                  <div>
                    <p className="text-sm text-stone">Price</p>
                    <p className="text-lg font-bold text-forest">{tier.price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-stone">Timeline</p>
                    <p className="text-lg font-semibold text-stone">{tier.timeline}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 text-center text-stone">
          Every project includes training, documentation, and 30-60 day warranty
        </p>
        <div className="mt-6 text-center">
          <Link href="/services" className="font-medium text-forest underline hover:opacity-80">
            View full pricing details
          </Link>
        </div>
      </div>
    </section>
  );
}
