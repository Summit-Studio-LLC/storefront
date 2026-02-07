import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function Hero() {
  return (
    <section className="relative w-full py-24 lg:py-32 px-6 flex flex-col items-center justify-center text-center bg-offwhite">
      {/* Topographic Background Pattern */}
      <div className="absolute inset-0 bg-topography opacity-60 pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col gap-8 items-center">
        {/* Badge */}
        <Badge variant="status">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
          Accepting New Clients
        </Badge>

        {/* Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-forest leading-[1.1]">
          The peak of clarity for your{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-forest to-emerald-600">
            business systems
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-lg md:text-xl text-stone max-w-2xl font-medium leading-relaxed">
          We design and build custom automation tools to help you scale without the chaos. Reach the
          summit of your efficiency.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-4">
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
            <Link href="#">View Case Studies</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
