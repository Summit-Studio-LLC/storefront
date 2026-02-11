import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ParallaxBg } from '@/components/ui/ParallaxBg';
import { FadeUp } from '@/components/ui/FadeUp';
import PainPoints from '@/components/sections/PainPoints';
import HowItWorks from '@/components/sections/HowItWorks';
import BottomCTA from '@/components/sections/BottomCTA';

export const metadata: Metadata = {
  title: 'Summit Studio | Custom Software for Local Business',
  description:
    'Eliminate manual work and save 20+ hours per week. Custom software built for your business. Straight answers, no jargon. Cookeville, TN.',
  alternates: { canonical: '/welcome' },
  robots: { index: false },
};

export default function WelcomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center px-6 bg-offwhite overflow-hidden">
        <ParallaxBg
          className="absolute inset-x-0 -top-[15%] h-[130%] bg-topography opacity-50 pointer-events-none"
          speed={-0.15}
        />
        <div className="absolute inset-0 bg-grain opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center text-center gap-8 py-24 lg:py-32">
          <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
            <Badge variant="status">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent animate-pulse-ring" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Accepting New Clients
            </Badge>
          </div>

          <h1
            className="animate-fade-in-up font-serif text-5xl md:text-6xl lg:text-7xl tracking-tight text-forest leading-[1.08]"
            style={{ animationDelay: '150ms' }}
          >
            Stop Wasting <span className="text-accent">20 Hours</span> a Week on Manual Work
          </h1>

          <p
            className="animate-fade-in-up text-lg md:text-xl text-stone max-w-2xl leading-relaxed"
            style={{ animationDelay: '300ms' }}
          >
            Affordable automation built specifically for your business. Save time, reduce errors,
            grow faster. Tennessee-based, no jargon, just results.
          </p>

          <div className="animate-fade-in-up mt-4" style={{ animationDelay: '450ms' }}>
            <Button
              variant="cta"
              size="lg"
              asChild
              className="group text-lg px-10 py-4 shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
            >
              <Link href="/contact">
                <span>Schedule Free Consultation</span>
                <span
                  className="material-symbols-outlined text-[20px] transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  arrow_forward
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <PainPoints />
      <HowItWorks />

      {/* Local Trust Signal */}
      <FadeUp>
        <section className="py-16 px-6 border-t border-stone/5">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-2xl font-semibold text-forest md:text-3xl mb-2">
              Based in Cookeville, Tennessee
            </p>
            <p className="text-lg text-stone">
              Serving local businesses across the Upper Cumberland
            </p>
          </div>
        </section>
      </FadeUp>

      <BottomCTA />
    </>
  );
}
