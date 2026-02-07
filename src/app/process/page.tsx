import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ProcessTrail from '@/components/sections/ProcessTrail';

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'A guided path to efficiency. We map out the terrain of your business to build automation that scales.',
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
            Our Workflow
          </span>
          <h1
            className="animate-fade-in-up font-serif text-5xl md:text-7xl lg:text-8xl text-forest leading-[0.9] mb-8"
            style={{ animationDelay: '150ms' }}
          >
            A Guided Path to
            <br />
            <span className="italic text-accent">Efficiency</span>
          </h1>
          <p
            className="animate-fade-in-up max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground font-light leading-relaxed"
            style={{ animationDelay: '300ms' }}
          >
            We map out the terrain of your business to build automation that scales. Like any great
            expedition, our process is structured, strategic, and designed to reach the summit.
          </p>
        </div>
      </section>

      {/* The Trail (Process Steps) */}
      <ProcessTrail />

      {/* CTA Section */}
      <section className="w-full px-4 md:px-10 pb-20">
        <div className="max-w-7xl mx-auto rounded-2xl bg-charcoal text-white overflow-hidden relative shadow-xl">
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
              Ready to reach the summit?
            </h2>
            <p className="text-stone-300 text-lg md:text-xl max-w-2xl mb-10 font-light">
              Start your journey towards efficiency and automation today. Let&apos;s build a system
              that works as hard as you do.
            </p>
            <Button
              variant="cta"
              size="lg"
              asChild
              className="text-lg py-4 px-10 hover:bg-[#cf7540] hover:-translate-y-1 shadow-lg hover:shadow-accent/30 transition-all"
            >
              <Link href="/contact">Start Your Journey</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
