import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ProcessTrail from '@/components/sections/ProcessTrail';

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'How Summit Studio builds software: free consultation, clear proposal, milestone demos, launch, and training. 4-20+ week delivery.',
  alternates: {
    canonical: '/process',
  },
};

export default function ProcessPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden">
        {/* Background: Topographic Lines */}
        <div className="absolute inset-0 bg-topography-lines opacity-40 pointer-events-none" />

        <div className="relative z-10 max-w-[960px] mx-auto px-6 text-center">
          <span
            className="animate-fade-in-up inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider uppercase text-forest bg-forest/10 rounded-full"
            style={{ animationDelay: '0ms' }}
          >
            Our Process
          </span>
          <h1
            className="animate-fade-in-up font-serif text-5xl md:text-7xl lg:text-8xl text-forest leading-[0.9] mb-8"
            style={{ animationDelay: '150ms' }}
          >
            A Clear Path to
            <br />
            <span className="italic text-accent">Production</span>
          </h1>
          <p
            className="animate-fade-in-up max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground font-light leading-relaxed"
            style={{ animationDelay: '300ms' }}
          >
            Every project follows the same disciplined process — whether it&apos;s a 4-week
            automation build or a 6-month platform. Structured, transparent, and designed to ship.
          </p>
        </div>
      </section>

      {/* The Trail (Process Steps) */}
      <ProcessTrail />

      {/* Scaling Note */}
      <div className="max-w-3xl mx-auto px-6 py-8 text-center">
        <p className="text-stone text-lg italic">
          "Process scales to project size. A 4-week automation build gets the same rigor as a
          6-month platform — just at a different pace."
        </p>
      </div>

      {/* CTA Section */}
      <section className="w-full px-4 md:px-10 pb-20">
        <div className="max-w-7xl mx-auto rounded-2xl bg-forest text-white overflow-hidden relative shadow-xl">
          {/* Subtle gradient overlay */}
          <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center text-center py-20 px-6 md:py-28 md:px-12">
            <span
              className="material-symbols-outlined !text-5xl mb-6 text-accent"
              aria-hidden="true"
            >
              flag
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 text-white">
              Ready to start building?
            </h2>
            <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-10 font-light">
              Tell us what you need. We&apos;ll walk you through how we&apos;d approach it —
              timeline, architecture, and cost.
            </p>
            <Button
              variant="cta"
              size="lg"
              asChild
              className="text-lg py-4 px-10 hover:bg-[#cf7540] hover:-translate-y-1 shadow-lg hover:shadow-accent/30 transition-all"
            >
              <Link href="/contact">Schedule a Conversation</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
