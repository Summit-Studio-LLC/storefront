import type { Metadata } from 'next';
import Link from 'next/link';
import {
  solutions,
  pricingTiers,
  includedFeatures,
  paymentTerms,
  retainerPlans,
  processSteps,
} from '@/data/services';

export const metadata: Metadata = {
  title: 'Services & Pricing',
  description:
    'Custom software projects from $2,500 to $20,000. Fixed pricing, milestone payments, 30-60 day warranty. See our services and transparent pricing.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#FAFAF8] px-4 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-[#2D5F3E] md:text-5xl">
            Custom Software That Solves Real Problems
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-[#4A4A4A] md:text-xl">
            From scheduling chaos to manual data entry — we build systems that save you time and
            money.
          </p>
        </div>
      </section>

      {/* What We Build Section */}
      <section className="bg-white px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#2D5F3E] md:text-4xl">
            What We Build
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutions.map((solution) => (
              <div
                key={solution.title}
                className="rounded-lg border border-gray-200 bg-[#FAFAF8] p-6"
              >
                <h3 className="mb-3 text-xl font-semibold text-[#2D5F3E]">{solution.title}</h3>
                <p className="mb-4 text-[#4A4A4A]">{solution.description}</p>
                <p className="text-sm text-[#4A4A4A]">
                  Starting at{' '}
                  <span className="font-semibold text-[#2D5F3E]">{solution.startingAt}</span>
                </p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-sm text-[#4A4A4A]">
            Every solution is custom-built for your specific workflow
          </p>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="bg-[#FAFAF8] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#2D5F3E] md:text-4xl">
            Pricing Tiers
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col rounded-lg border-2 p-6 ${
                  tier.highlighted
                    ? 'border-[#2D5F3E] bg-white shadow-lg'
                    : 'border-gray-200 bg-white'
                }`}
              >
                {tier.highlighted && (
                  <span className="mb-4 inline-block self-start rounded-full bg-[#2D5F3E] px-3 py-1 text-xs font-medium text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="mb-2 text-2xl font-bold text-[#2D5F3E]">{tier.name}</h3>
                <p className="mb-1 text-2xl font-bold text-[#4A4A4A]">{tier.price}</p>
                <p className="mb-6 text-sm text-[#4A4A4A]">{tier.timeline}</p>
                <ul className="mb-6 space-y-2">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-[#4A4A4A]">
                      <svg
                        className="mt-1 h-4 w-4 shrink-0 text-[#2D5F3E]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto border-t border-gray-200 pt-4">
                  <p className="text-sm text-[#4A4A4A]">
                    <span className="font-medium">Example:</span> {tier.example}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* What's Included */}
          <div className="mt-12 rounded-lg bg-white p-8">
            <h3 className="mb-6 text-xl font-semibold text-[#2D5F3E]">
              What&apos;s always included:
            </h3>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-[#4A4A4A]">
                  <svg
                    className="h-5 w-5 shrink-0 text-[#2D5F3E]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-center font-medium text-[#4A4A4A]">
              <span className="text-[#2D5F3E]">Payment terms:</span> {paymentTerms}
            </p>
          </div>
        </div>
      </section>

      {/* Ongoing Support Section */}
      <section className="bg-white px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold text-[#2D5F3E] md:text-4xl">
            We Don&apos;t Disappear After Launch
          </h2>
          <p className="mb-12 text-center text-[#4A4A4A]">
            Optional monthly retainer plans for ongoing support and improvements.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[400px]">
              <thead>
                <tr className="border-b-2 border-[#2D5F3E]">
                  <th className="py-4 text-left font-semibold text-[#2D5F3E]">Tier</th>
                  <th className="py-4 text-left font-semibold text-[#2D5F3E]">Hours/Month</th>
                  <th className="py-4 text-left font-semibold text-[#2D5F3E]">Response Time</th>
                  <th className="py-4 text-right font-semibold text-[#2D5F3E]">Price/Month</th>
                </tr>
              </thead>
              <tbody>
                {retainerPlans.map((plan) => (
                  <tr key={plan.tier} className="border-b border-gray-200">
                    <td className="py-4 font-medium text-[#4A4A4A]">{plan.tier}</td>
                    <td className="py-4 text-[#4A4A4A]">{plan.hours}</td>
                    <td className="py-4 text-[#4A4A4A]">{plan.responseTime}</td>
                    <td className="py-4 text-right font-semibold text-[#2D5F3E]">{plan.price}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-center text-sm text-[#4A4A4A]">
            Most clients start with Silver after their first project.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-[#FAFAF8] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-[#2D5F3E] md:text-4xl">
            Our Process
          </h2>
          <div className="space-y-8">
            {processSteps.map((step) => (
              <div key={step.step} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#2D5F3E] text-lg font-bold text-white">
                  {step.step}
                </div>
                <div className="flex-1">
                  <div className="mb-1 flex flex-wrap items-baseline gap-2">
                    <h3 className="text-xl font-semibold text-[#2D5F3E]">{step.title}</h3>
                    <span className="text-sm text-[#4A4A4A]">({step.duration})</span>
                  </div>
                  <p className="text-[#4A4A4A]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2D5F3E] px-4 py-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Let&apos;s scope your project.
          </h2>
          <p className="mb-8 text-white/80">
            30-minute free consultation. We&apos;ll discuss your challenges and see if we can help.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-[#C46A32] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#a85a2a]"
          >
            Schedule Free Consultation
          </Link>
        </div>
      </section>
    </>
  );
}
