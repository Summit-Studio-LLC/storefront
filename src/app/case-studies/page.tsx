import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FadeUp } from '@/components/ui/FadeUp';
import { caseStudies, statusMeta } from '@/data/caseStudies';
import { getBreadcrumbSchema } from '@/lib/schema';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Case Studies',
  description:
    'See how Summit Studio turns ideas into production software. Real projects, real outcomes, real business impact.',
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
            See how we turn ideas into production software — the work we&apos;ve shipped, and
            what&apos;s on the bench right now.
          </p>
        </div>
      </section>

      {/* Case Study Cards */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {caseStudies.map((study, index) => {
              const status = statusMeta[study.status];

              return (
                <FadeUp key={study.slug} delay={index * 150}>
                  <Link
                    href={`/case-studies/${study.slug}`}
                    className="group flex h-full flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-stone/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  >
                    {/* Product preview */}
                    <div className="relative h-64 overflow-hidden bg-forest/5">
                      <Image
                        src={study.image}
                        alt={study.imageAlt}
                        width={1440}
                        height={900}
                        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/25 pointer-events-none" />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wide">
                          {study.category}
                        </span>
                      </div>
                      <div className="absolute top-4 right-4">
                        <span
                          className={cn(
                            'inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wide shadow-sm',
                            status.badgeClass
                          )}
                        >
                          <span className="relative flex h-2 w-2" aria-hidden="true">
                            {status.pulse && (
                              <span
                                className={cn(
                                  'absolute inline-flex h-full w-full rounded-full animate-pulse-ring',
                                  status.dotClass
                                )}
                              />
                            )}
                            <span
                              className={cn(
                                'relative inline-flex h-2 w-2 rounded-full',
                                status.dotClass
                              )}
                            />
                          </span>
                          {status.badge}
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
                      {study.stats && study.stats.length > 0 && (
                        <div className="flex flex-wrap gap-3 mb-6">
                          {study.stats.map((stat) => (
                            <span
                              key={stat.label}
                              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-forest/5 text-forest text-sm font-bold whitespace-nowrap"
                            >
                              <span
                                className="material-symbols-outlined text-base"
                                aria-hidden="true"
                              >
                                {statIcons[stat.label] || 'check_circle'}
                              </span>
                              {stat.value} {stat.label}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Tags */}
                      {study.tags && study.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {study.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-block rounded-md bg-stone/5 px-2.5 py-0.5 text-xs font-medium text-stone"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Footer */}
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
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA — inline */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-forest mb-6">
            Want results like these?
          </h2>
          <p className="text-stone text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Every project starts with a conversation. Tell us what you&apos;re building.
          </p>
          <Button
            variant="cta"
            size="lg"
            asChild
            className="text-lg py-4 px-10 hover:bg-[#cf7540] hover:scale-105 shadow-lg transition-all"
          >
            <Link href="/contact">Start Yours</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
