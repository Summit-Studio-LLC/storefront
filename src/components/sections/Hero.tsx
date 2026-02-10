import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ParallaxBg } from '@/components/ui/ParallaxBg';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full py-24 lg:py-32 px-6 flex flex-col items-center justify-center text-center bg-offwhite overflow-hidden">
      {/* Parallax Topographic Background Pattern */}
      <ParallaxBg
        className="absolute inset-x-0 -top-[15%] h-[130%] bg-topography opacity-60 pointer-events-none"
        speed={-0.15}
      />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-8 items-center">
        {/* Badge */}
        <div className="animate-fade-in-up" style={{ animationDelay: '0ms' }}>
          <Badge variant="status">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent animate-pulse-ring" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Accepting New Clients
          </Badge>
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-in-up text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-forest leading-[1.1]"
          style={{ animationDelay: '150ms' }}
        >
          Custom software to elevate{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest to-emerald-600">
            your business
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="animate-fade-in-up text-lg md:text-xl text-stone max-w-2xl font-medium leading-relaxed"
          style={{ animationDelay: '300ms' }}
        >
          Your idea, architected and deployed by a senior engineer. Fixed-price projects. No
          handoffs, no surprises.
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-in-up flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4"
          style={{ animationDelay: '450ms' }}
        >
          <Button
            variant="cta"
            size="lg"
            asChild
            className="group hover:bg-[#cf7540] hover:translate-y-0 hover:shadow-lg"
          >
            <Link href="/contact">
              <span>Get Started</span>
              <span
                className="material-symbols-outlined text-[20px] transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                arrow_forward
              </span>
            </Link>
          </Button>
          <Button variant="secondary" size="lg" asChild>
            <Link href="/case-studies">See Case Studies</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
