import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import CategoryBar from '@/components/sections/CategoryBar';
import TechMarquee from '@/components/sections/TechMarquee';
import { Button } from '@/components/ui/button';
import { FadeUp } from '@/components/ui/FadeUp';
import { frictionPoints, outcomePoints } from '@/data/services';
import { getWebSiteSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Summit Studio | Custom Software to Elevate Your Business',
  description:
    'Custom software development — web apps, mobile apps, cloud infrastructure, and AI automation. Senior-led, no overhead. Based in Tennessee, serving clients nationwide.',
  alternates: { canonical: '/' },
};

const webSiteSchema = getWebSiteSchema();

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD from trusted data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <Hero />
      <CategoryBar />
      <TechMarquee />

      {/* Sound Familiar? (Friction Points) */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeUp className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-forest sm:text-4xl">
              Sound Familiar?
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone">
              These are the problems our clients bring to us.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {frictionPoints.map((point, index) => (
              <FadeUp key={point.title} delay={index * 80} className="h-full">
                <div className="flex flex-col gap-4 rounded-xl border border-stone/10 bg-white p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <span className="material-symbols-outlined">{point.icon}</span>
                  </div>
                  <h3 className="text-lg font-bold leading-7 text-forest">{point.title}</h3>
                  <p className="text-base leading-7 text-stone">{point.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* What You Get (Outcomes) */}
      <section className="relative py-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-topography-lines opacity-30 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-16">
          <FadeUp className="w-full lg:w-1/2">
            <h2 className="text-3xl font-bold tracking-tight text-forest sm:text-4xl mb-6">
              What You Get
            </h2>
            <p className="text-lg text-stone mb-8 leading-relaxed">
              We measure success by what ships and how long it lasts.
            </p>
            <div className="space-y-6">
              {outcomePoints.map((point) => (
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
            <Link
              href="/case-studies/league-handicap"
              className="group relative block h-[400px] w-full rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-forest/90 to-emerald-800"
            >
              <div className="flex items-center justify-center h-full">
                <span
                  className="material-symbols-outlined !text-[120px] text-white/10"
                  aria-hidden="true"
                >
                  sports_golf
                </span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm font-medium tracking-wide uppercase opacity-80">Case Study</p>
                <p className="font-serif text-2xl mt-1 group-hover:text-accent transition-colors">
                  League Handicap
                </p>
                <span className="inline-flex items-center gap-1 mt-2 text-sm font-semibold text-white/70 group-hover:text-white transition-colors">
                  Read the story
                  <span
                    className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    arrow_forward
                  </span>
                </span>
              </div>
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* Trust Signal */}
      <section className="w-full py-12 px-6 border-t border-stone/5">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-stone text-lg">Based in Cookeville, Tennessee</p>
          <p className="text-stone/70">
            Serving clients nationwide · 7+ years of professional software engineering
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-serif text-4xl md:text-5xl text-forest mb-6">
            Let&apos;s find out if we&apos;re the right fit.
          </h2>
          <p className="text-stone text-lg mb-10 max-w-2xl mx-auto">
            30-minute call. No pressure, no obligation.
          </p>
          <Button
            variant="cta"
            size="lg"
            asChild
            className="text-lg py-4 px-10 hover:bg-[#cf7540] hover:scale-105 shadow-lg transition-all"
          >
            <Link href="/contact">Book a Free Call</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
