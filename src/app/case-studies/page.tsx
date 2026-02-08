import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FadeUp } from '@/components/ui/FadeUp';
import { caseStudies } from '@/data/caseStudies';
import { getBreadcrumbSchema } from '@/lib/schema';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'See how Summit Studio helps Cookeville, TN businesses replace manual processes with custom software. Real results: time saved, errors eliminated, revenue generated.',
  alternates: {
    canonical: '/case-studies',
  },
};

const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: 'https://www.summitstudio.dev' },
  { name: 'Case Studies', url: 'https://www.summitstudio.dev/case-studies' },
]);

const statIcons: Record<string, string> = {
  'Time saved': 'timer',
  'Build time': 'construction',
  'To first revenue': 'trending_up',
};

export default function CaseStudiesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD from trusted data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Section */}
      <section className="relative w-full pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden border-b border-stone/5">
        <div className="absolute inset-0 bg-topography-lines opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center flex flex-col items-center">
          {/* Accepting New Clients Badge */}
          <div className="animate-fade-in-up mb-6" style={{ animationDelay: '0ms' }}>
            <Badge variant="status">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent animate-pulse-ring" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Accepting New Clients
            </Badge>
          </div>

          <p
            className="animate-fade-in-up text-accent font-bold tracking-widest text-sm uppercase mb-4"
            style={{ animationDelay: '100ms' }}
          >
            Case Studies
          </p>

          <h1
            className="animate-fade-in-up font-serif text-5xl md:text-6xl lg:text-7xl text-forest leading-[1.1] mb-6 max-w-4xl"
            style={{ animationDelay: '200ms' }}
          >
            Real Problems.
            <br />
            <span className="italic">Real Solutions.</span>
          </h1>

          <p
            className="animate-fade-in-up max-w-2xl text-lg md:text-xl text-stone leading-relaxed"
            style={{ animationDelay: '300ms' }}
          >
            See how we help businesses replace manual processes with custom software that scales,
            performs, and delivers results.
          </p>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {caseStudies.map((study, index) => (
              <FadeUp key={study.slug} delay={index * 150}>
                <Link
                  href={`/case-studies/${study.slug}`}
                  className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-stone/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Image Placeholder */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-forest/90 to-emerald-800">
                    <div className="flex items-center justify-center h-full">
                      <span
                        className="material-symbols-outlined !text-8xl text-white/20 transition-transform duration-500 group-hover:scale-110"
                        aria-hidden="true"
                      >
                        sports_golf
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wide">
                        {study.category}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-col flex-grow p-6 lg:p-8">
                    <h3 className="text-2xl font-serif text-forest mb-3 leading-tight group-hover:text-accent transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-stone mb-6 flex-grow">{study.subtitle}</p>

                    {/* Stat Badges */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {study.stats.map((stat) => (
                        <span
                          key={stat.label}
                          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-forest/5 text-forest text-sm font-bold"
                        >
                          <span className="material-symbols-outlined text-base" aria-hidden="true">
                            {statIcons[stat.label] || 'check_circle'}
                          </span>
                          {stat.value} {stat.label}
                        </span>
                      ))}
                    </div>

                    {/* Read More */}
                    <div className="pt-4 mt-auto border-t border-stone/10">
                      <span className="inline-flex items-center text-forest font-bold group-hover:text-accent transition-colors">
                        Read Case Study
                        <span
                          className="material-symbols-outlined ml-1 text-sm transition-transform duration-200 group-hover:translate-x-1"
                          aria-hidden="true"
                        >
                          arrow_forward
                        </span>
                      </span>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA — full-width */}
      <section className="bg-charcoal text-white py-20 px-6 lg:px-12 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-forest/5 rounded-l-full blur-3xl pointer-events-none opacity-50" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
            Let&apos;s build something for your business.
          </h2>
          <p className="text-stone-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light">
            Every project starts with a conversation. Tell us what&apos;s slowing you down.
          </p>
          <Button
            variant="cta"
            size="lg"
            asChild
            className="text-lg py-4 px-10 hover:bg-[#cf7540] hover:scale-105 shadow-lg transition-all"
          >
            <Link href="/contact">Schedule a Conversation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
