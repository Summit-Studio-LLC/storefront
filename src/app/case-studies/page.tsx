import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FadeUp } from '@/components/ui/FadeUp';
import { showcaseProjects } from '@/data/projects';
import { getBreadcrumbSchema } from '@/lib/schema';
import { cn } from '@/lib/utils';
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

const statusMeta = {
  active: {
    badge: 'In Progress',
    badgeClass: 'bg-white/95 text-forest',
    dotClass: 'bg-accent',
    pulse: true,
    footer: 'Currently in development',
    footerIcon: 'construction',
  },
  paused: {
    badge: 'Paused',
    badgeClass: 'bg-white/90 text-stone',
    dotClass: 'bg-stone/60',
    pulse: false,
    footer: 'Development on hold',
    footerIcon: 'pause_circle',
  },
} as const;

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
            {showcaseProjects.map((project, index) => {
              const status = project.status === 'live' ? null : statusMeta[project.status];

              const cardBody = (
                <>
                  {/* Image Placeholder */}
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-forest/90 to-emerald-800">
                    <div className="flex items-center justify-center h-full">
                      <span
                        className="material-symbols-outlined !text-8xl text-white/20 transition-transform duration-500 group-hover:scale-110"
                        aria-hidden="true"
                      >
                        {project.icon}
                      </span>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="inline-block bg-accent text-white text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wide">
                        {project.category}
                      </span>
                    </div>
                    {status && (
                      <div className="absolute top-4 right-4">
                        <span
                          className={cn(
                            'inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1 rounded-md uppercase tracking-wide',
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
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="flex flex-col flex-grow p-6 lg:p-8">
                    <p className="text-accent font-bold tracking-widest text-xs uppercase mb-2">
                      {project.name}
                    </p>
                    <h3 className="text-2xl font-serif text-forest mb-3 leading-tight group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-stone mb-6 flex-grow">{project.subtitle}</p>

                    {/* Stat Badges */}
                    {project.stats && project.stats.length > 0 && (
                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.stats.map((stat) => (
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
                    {project.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
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
                      {project.href ? (
                        <span className="inline-flex items-center text-forest font-bold group-hover:text-accent transition-colors">
                          Read Case Study
                          <span
                            className="material-symbols-outlined ml-1 text-sm transition-transform duration-200 group-hover:translate-x-1"
                            aria-hidden="true"
                          >
                            arrow_forward
                          </span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-stone font-bold">
                          <span className="material-symbols-outlined text-base" aria-hidden="true">
                            {status ? status.footerIcon : 'schedule'}
                          </span>
                          {status ? status.footer : 'Case study coming soon'}
                        </span>
                      )}
                    </div>
                  </div>
                </>
              );

              return (
                <FadeUp key={project.slug} delay={index * 150}>
                  {project.href ? (
                    <Link
                      href={project.href}
                      className="group flex h-full flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-stone/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      {cardBody}
                    </Link>
                  ) : (
                    <div className="flex h-full flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-stone/10">
                      {cardBody}
                    </div>
                  )}
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
