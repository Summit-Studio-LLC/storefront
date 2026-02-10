import type { Metadata } from 'next';
import Link from 'next/link';
import ServiceDetail from '@/components/sections/ServiceDetail';
import ServiceSideNav from '@/components/sections/ServiceSideNav';
import { Button } from '@/components/ui/button';
import { FadeUp } from '@/components/ui/FadeUp';
import { serviceCategories, processSteps, serviceDetails } from '@/data/services';
import { getBreadcrumbSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Web applications, mobile apps, AI automation, cloud infrastructure, and custom platforms. Full-stack software development from architecture to production.',
  alternates: { canonical: '/services' },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: 'https://www.summitstudio.dev' },
  { name: 'Services', url: 'https://www.summitstudio.dev/services' },
]);

const deliveryPrinciples = [
  {
    title: 'Senior-led, every project',
    description:
      'You work directly with the engineer writing the code. No handoffs to junior devs. No telephone game through project managers.',
  },
  {
    title: 'Fixed scope, honest pricing',
    description:
      'Every engagement starts with a clear proposal. Milestone payments tied to working demos you can see and test.',
  },
  {
    title: 'Code you own, stack you understand',
    description:
      'Full source code, documentation, and deployment access. No lock-in, no proprietary runtime. Any developer can pick up where we left off.',
  },
];

/** Maps service category titles to their corresponding deep-section slugs. */
const categorySlugMap: Record<string, string> = {
  'Web Applications': 'web-apps',
  'Mobile Apps': 'mobile-apps',
  'AI & Automation': 'ai-automation',
  'Cloud & Infrastructure': 'cloud-infrastructure',
  'Custom Platforms': 'custom-platforms',
  'Architecture & Strategy': 'architecture-strategy',
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD from trusted data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="relative px-6 lg:px-8 min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Gradient blur accent */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-accent/20 to-forest/10 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="mx-auto max-w-3xl text-center py-20">
          <span
            className="animate-fade-in-up inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider uppercase text-accent"
            style={{ animationDelay: '0ms' }}
          >
            Our Services
          </span>
          <h1
            className="animate-fade-in-up font-serif text-5xl md:text-7xl text-forest leading-tight mb-6"
            style={{ animationDelay: '150ms' }}
          >
            Software development, <br /> <span className="italic">end to end</span>
          </h1>
          <p
            className="animate-fade-in-up text-lg leading-8 text-stone max-w-xl mx-auto"
            style={{ animationDelay: '300ms' }}
          >
            Everything you need to go from idea to production. One team, one contract.
          </p>
          <div
            className="animate-fade-in-up mt-10 flex items-center justify-center gap-x-6"
            style={{ animationDelay: '450ms' }}
          >
            <Button variant="cta" size="lg" asChild className="hover:bg-[#cf7540]">
              <a href="#services">See Our Capabilities</a>
            </Button>
            <Link
              href="/process"
              className="text-sm font-semibold leading-6 text-forest flex items-center gap-1 group"
            >
              How we work{' '}
              <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section id="services" className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeUp className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-forest sm:text-4xl">
              What We Build
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone">
              Six capability areas. One team. Every project senior-led.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCategories.map((category, index) => (
              <FadeUp key={category.title} delay={index * 80} className="h-full">
                <a
                  href={`#${categorySlugMap[category.title]}`}
                  className="flex flex-col gap-4 rounded-xl border border-stone/10 bg-white p-8 shadow-sm hover:shadow-md transition-shadow h-full group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-forest/10 text-forest">
                    <span className="material-symbols-outlined">{category.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold leading-7 text-forest">{category.title}</h3>
                  <p className="text-base leading-7 text-stone">{category.description}</p>
                  {category.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                      {category.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="bg-stone/5 text-stone text-xs font-medium rounded-md px-2 py-0.5"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  <span className="text-sm font-semibold text-forest/60 group-hover:text-accent transition-colors mt-auto">
                    Learn more →
                  </span>
                </a>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Per-Category Deep Sections */}
      <ServiceSideNav
        items={serviceDetails.map(({ slug, icon, title }) => ({ slug, icon, title }))}
      />
      <div id="service-details-container">
        {serviceDetails.map((detail, index) => (
          <ServiceDetail key={detail.slug} {...detail} index={index} />
        ))}
      </div>

      {/* How We Deliver */}
      <section className="relative py-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-topography-lines opacity-30 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-16">
          <FadeUp className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold tracking-tight text-forest sm:text-4xl mb-6">
              How We Deliver
            </h2>
            <p className="text-lg text-stone mb-8 leading-relaxed">
              Every engagement follows the same principles, whether it&apos;s a 4-week automation
              build or a 6-month platform.
            </p>
            <div className="space-y-6">
              {deliveryPrinciples.map((point) => (
                <div key={point.title} className="flex gap-4">
                  <div className="flex-none mt-1">
                    <span className="material-symbols-outlined text-accent">check_circle</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-forest">{point.title}</h3>
                    <p className="text-stone text-sm mt-1">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={200} className="w-full lg:w-1/2">
            <div className="rounded-2xl bg-white p-8 shadow-xl border border-stone/10">
              <h3 className="text-lg font-bold text-forest mb-6">Our Process</h3>
              <div className="relative ml-4">
                <div className="absolute left-0 top-2 bottom-2 w-px bg-forest/20" />
                <div className="space-y-6">
                  {processSteps.map((step) => (
                    <div key={step.step} className="relative pl-8">
                      <div className="absolute left-0 top-0.5 -translate-x-1/2 flex h-6 w-6 items-center justify-center rounded-full bg-forest text-white text-xs font-bold">
                        {step.step}
                      </div>
                      <div>
                        <div className="flex items-baseline gap-2">
                          <h4 className="font-bold text-forest text-sm">{step.title}</h4>
                          <span className="text-xs text-stone/60">{step.duration}</span>
                        </div>
                        <p className="text-stone text-sm mt-0.5">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-stone/10">
                <Link
                  href="/process"
                  className="text-sm font-semibold text-forest flex items-center gap-1 group"
                >
                  See our full process{' '}
                  <span
                    className="group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA Band */}
      <section className="bg-charcoal py-24 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-forest/5 rounded-l-full blur-3xl pointer-events-none opacity-50" />

        <div className="mx-auto max-w-4xl text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Know what you need built?
          </h2>
          <p className="text-stone-300 text-lg mb-10 max-w-2xl mx-auto font-light">
            Tell us the requirements. We&apos;ll send a proposal with scope, timeline, and fixed
            pricing.
          </p>
          <Button
            variant="cta"
            size="lg"
            asChild
            className="text-lg py-4 px-10 hover:bg-[#cf7540] hover:scale-105 shadow-lg transition-all"
          >
            <Link href="/contact">Get a Proposal</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
