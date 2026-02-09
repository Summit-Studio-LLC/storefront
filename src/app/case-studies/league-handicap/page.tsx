import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FadeUp } from '@/components/ui/FadeUp';
import { caseStudies } from '@/data/caseStudies';
import { getArticleSchema, getBreadcrumbSchema } from '@/lib/schema';

const study = caseStudies[0];

export const metadata: Metadata = {
  title: `${study.title} | Case Study`,
  description: `Case study: ${study.subtitle} See how Summit Studio built a custom platform in under 3 weeks for a Cookeville, TN business.`,
  alternates: {
    canonical: `/case-studies/${study.slug}`,
  },
};

const articleSchema = getArticleSchema({
  title: study.title,
  description: study.subtitle,
  url: `https://www.summitstudio.dev/case-studies/${study.slug}`,
});
const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: 'https://www.summitstudio.dev' },
  { name: 'Case Studies', url: 'https://www.summitstudio.dev/case-studies' },
  { name: study.title, url: `https://www.summitstudio.dev/case-studies/${study.slug}` },
]);

export default function LeagueHandicapPage() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD from trusted data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD from trusted data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero Section */}
      <section className="relative w-full pt-20 pb-16 md:pt-32 md:pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-topography-lines opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-[960px] mx-auto px-6">
          {/* Category Tag */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
            <span className="text-accent font-bold uppercase tracking-wider text-sm">
              {study.categoryTag}
            </span>
          </div>

          {/* Headline */}
          <h1
            className="animate-fade-in-up font-serif text-5xl md:text-7xl text-forest leading-[0.95] mt-4 mb-6"
            style={{ animationDelay: '150ms' }}
          >
            {study.title}
          </h1>

          {/* Subtitle */}
          <p
            className="animate-fade-in-up text-xl md:text-2xl text-stone max-w-3xl font-light leading-relaxed"
            style={{ animationDelay: '300ms' }}
          >
            {study.subtitle}
          </p>

          {/* Hero Image Placeholder */}
          <div
            className="animate-fade-in-up mt-12 rounded-xl overflow-hidden shadow-lg aspect-[16/7] bg-gradient-to-br from-forest/90 to-emerald-800 flex items-center justify-center"
            style={{ animationDelay: '450ms' }}
          >
            <span className="material-symbols-outlined !text-8xl text-white/20" aria-hidden="true">
              sports_golf
            </span>
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="max-w-[960px] mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Sidebar */}
          <aside className="lg:col-span-4 order-2 lg:order-1 flex flex-col gap-10">
            {/* Metadata */}
            <FadeUp>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-stone/60 mb-1">
                    Client
                  </h3>
                  <p className="text-forest font-semibold">{study.client}</p>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-stone/60 mb-1">
                    Product
                  </h3>
                  <a
                    href="https://leaguehandicap.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-forest font-semibold hover:text-accent transition-colors"
                  >
                    leaguehandicap.com
                    <span className="material-symbols-outlined !text-[14px]" aria-hidden="true">
                      open_in_new
                    </span>
                  </a>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-stone/60 mb-2">
                    Services
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {study.services.map((service) => (
                      <span
                        key={service}
                        className="inline-block px-3 py-1 text-xs font-semibold text-accent bg-accent/10 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-stone/60 mb-1">
                    Timeline
                  </h3>
                  <p className="text-forest font-semibold">{study.duration}</p>
                </div>
              </div>
            </FadeUp>

            {/* Problem */}
            <FadeUp delay={100}>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-accent !text-xl"
                    aria-hidden="true"
                  >
                    warning
                  </span>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-forest">
                    The Problem
                  </h3>
                </div>
                <p className="text-stone text-sm leading-relaxed">{study.problem}</p>
              </div>
            </FadeUp>

            {/* Impact Stats */}
            <FadeUp delay={200}>
              <div className="rounded-xl bg-forest/5 border border-forest/10 p-6 space-y-5">
                <div className="flex items-center gap-2">
                  <span
                    className="material-symbols-outlined text-accent !text-xl"
                    aria-hidden="true"
                  >
                    trending_up
                  </span>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-forest">Impact</h3>
                </div>
                {study.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-3xl font-black text-forest">{stat.value}</p>
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </FadeUp>
          </aside>

          {/* Right Narrative */}
          <div className="lg:col-span-8 order-1 lg:order-2">
            {/* Lede */}
            <FadeUp>
              <p className="text-lg md:text-xl text-stone font-medium leading-relaxed mb-12">
                {study.discovery[0]}
              </p>
            </FadeUp>

            {/* Discovery */}
            <FadeUp delay={100}>
              <div className="mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-forest mb-6">Discovery</h2>
                <div className="space-y-4 text-stone leading-relaxed">
                  {study.discovery.slice(1).map((paragraph, i) => (
                    <p key={`discovery-${i}`}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Key Takeaway Callout */}
            <FadeUp delay={150}>
              <blockquote className="border-l-4 border-accent bg-accent/5 rounded-r-lg p-6 mb-12">
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="material-symbols-outlined text-accent !text-xl"
                    aria-hidden="true"
                  >
                    lightbulb
                  </span>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-forest">
                    Key Takeaway
                  </h3>
                </div>
                <p className="text-stone leading-relaxed italic">{study.keyTakeaway}</p>
              </blockquote>
            </FadeUp>

            {/* Solution */}
            <FadeUp delay={100}>
              <div className="mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-forest mb-6">The Solution</h2>
                <div className="space-y-4 text-stone leading-relaxed">
                  {study.solution.map((paragraph, i) => (
                    <p key={`solution-${i}`}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </FadeUp>

            {/* Results */}
            <FadeUp delay={100}>
              <div className="mb-12">
                <h2 className="font-serif text-3xl md:text-4xl text-forest mb-6">Results</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-forest/10">
                        <th className="text-left py-3 pr-4 font-bold uppercase tracking-wider text-xs text-stone/60">
                          Before
                        </th>
                        <th className="text-left py-3 font-bold uppercase tracking-wider text-xs text-stone/60">
                          After
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {study.results.map((row, i) => (
                        <tr key={`result-${i}`} className="border-b border-forest/5">
                          <td className="py-3 pr-4 text-stone">{row.before}</td>
                          <td className="py-3 text-forest font-semibold">{row.after}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </FadeUp>

            {/* Looking Forward */}
            <FadeUp delay={100}>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-forest mb-6">
                  Looking Forward
                </h2>
                <div className="space-y-4 text-stone leading-relaxed">
                  <p>{study.lookingForward.intro}</p>
                  <ul className="space-y-2 pl-5">
                    {study.lookingForward.items.map((item, i) => (
                      <li key={`forward-${i}`} className="list-disc">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="font-medium">{study.lookingForward.outro}</p>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="w-full px-4 md:px-10 pb-20">
        <div className="max-w-7xl mx-auto rounded-2xl bg-charcoal text-white overflow-hidden relative shadow-xl">
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center py-20 px-6 md:py-28 md:px-12">
            <span
              className="material-symbols-outlined !text-5xl mb-6 text-accent"
              aria-hidden="true"
            >
              flag
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
              {study.cta.headline}
            </h2>
            <p className="text-stone-300 text-lg md:text-xl max-w-2xl mb-10 font-light">
              {study.cta.subtext}
            </p>
            <Button
              variant="cta"
              size="lg"
              asChild
              className="text-lg py-4 px-10 hover:bg-[#cf7540] hover:-translate-y-1 shadow-lg hover:shadow-accent/30 transition-all"
            >
              <Link href={study.cta.buttonHref}>{study.cta.buttonLabel}</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
