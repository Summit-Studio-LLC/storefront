import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FadeUp } from '@/components/ui/FadeUp';
import {
  frictionPoints,
  optimizeServices,
  greenfieldServices,
  outcomePoints,
} from '@/data/services';

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Custom software for small businesses tired of wasting time on admin work. We build automation tools, scheduling systems, and dashboards.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      {/* Option A alt: "Your business, at peak performance" / "Boutique design and development for business automation" */}
      <section className="relative px-6 lg:px-8 min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Gradient blur accent */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-accent/20 to-forest/10 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>

        <div className="mx-auto max-w-3xl text-center py-20">
          <span
            className="animate-fade-in-up inline-block px-3 py-1 mb-6 text-xs font-bold tracking-wider uppercase text-accent"
            style={{ animationDelay: '0ms' }}
          >
            What We Build
          </span>
          <h1
            className="animate-fade-in-up font-serif text-5xl md:text-7xl text-forest leading-tight mb-6"
            style={{ animationDelay: '150ms' }}
          >
            Custom software for businesses tired of{' '}
            <span className="italic">wasting time on admin work</span>
          </h1>
          <p
            className="animate-fade-in-up text-lg leading-8 text-stone max-w-xl mx-auto"
            style={{ animationDelay: '300ms' }}
          >
            We build tools that replace spreadsheets, automate busywork, and give you back the hours
            you&apos;re losing to manual processes.
          </p>
          <div
            className="animate-fade-in-up mt-10 flex items-center justify-center gap-x-6"
            style={{ animationDelay: '450ms' }}
          >
            <Button variant="cta" size="lg" asChild className="hover:bg-[#cf7540]">
              <a href="#problems">Sound Familiar?</a>
            </Button>
            <Link
              href="/process"
              className="text-sm font-semibold leading-6 text-forest flex items-center gap-1 group"
            >
              How we work{' '}
              <span className="group-hover:translate-x-1 transition-transform" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Hear Every Week */}
      {/* Option A alt: "Common Friction Points" / "Scalability issues often hide in plain sight. Are any of these holding you back?" */}
      <section id="problems" className="py-24 px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <FadeUp className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-forest sm:text-4xl">
              Problems We Hear Every Week
            </h2>
            <p className="mt-4 text-lg leading-8 text-stone">
              This is what small business owners tell us when they call. Sound familiar?
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

      {/* What We Build */}
      {/* Option A alt: "Two Paths to the Summit" / "Whether you need to optimize what you have or build something entirely new" */}
      <section className="py-24 px-6 lg:px-8 bg-white relative">
        <div className="mx-auto max-w-7xl">
          {/* Section Intro */}
          <FadeUp className="mx-auto max-w-2xl text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl text-forest mb-6">What We Build</h2>
            <p className="text-lg text-stone leading-relaxed">
              We build two types of software: tools that fix your existing broken systems, and tools
              that replace them entirely.
            </p>
          </FadeUp>

          {/* Automation Projects */}
          {/* Option A alt: "Optimize & Automate" / "We streamline what's slow, connect what's disconnected, and automate what's eating your time." */}
          <div className="mb-20">
            <FadeUp className="mb-10">
              <h3 className="text-2xl font-bold text-forest mb-2">Automation Projects</h3>
              <p className="text-stone max-w-2xl">
                Already have tools you use? We make them work together and stop the busywork.
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {optimizeServices.map((service, index) => (
                <FadeUp key={service.title} delay={index * 100} className="h-full">
                  <div className="flex flex-col h-full rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-t-[3px] border-accent p-8 bg-offwhite">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent/10 text-accent mb-6">
                      <span className="material-symbols-outlined">{service.icon}</span>
                    </div>
                    <h4 className="text-xl font-bold text-forest mb-3">{service.title}</h4>
                    <p className="text-stone leading-relaxed flex-grow">{service.description}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>

          {/* Custom Build Projects */}
          {/* Option A alt: "New Summits" / "We architect complete digital systems for businesses ready to build correctly from the ground up." */}
          <div>
            <FadeUp className="mb-10">
              <h3 className="text-2xl font-bold text-forest mb-2">Custom Build Projects</h3>
              <p className="text-stone max-w-2xl">
                Need something that doesn&apos;t exist yet? We build it from scratch, designed
                around your business.
              </p>
            </FadeUp>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {greenfieldServices.map((service, index) => (
                <FadeUp key={service.title} delay={index * 100} className="h-full">
                  <div className="flex flex-col h-full rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border-t-[3px] border-forest p-8 bg-offwhite">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-forest/10 text-forest mb-6">
                      <span className="material-symbols-outlined">{service.icon}</span>
                    </div>
                    <h4 className="text-xl font-bold text-forest mb-3">{service.title}</h4>
                    <p className="text-stone leading-relaxed flex-grow">{service.description}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      {/* Option A alt: "The Right Foundation" / "Growing businesses often trip not because they lack vision, but because their operational backpack is too heavy." */}
      <section className="relative py-24 px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-topography-lines opacity-30 pointer-events-none" />

        <div className="relative mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-16">
          <FadeUp className="lg:w-1/2">
            <h2 className="text-3xl font-bold tracking-tight text-forest sm:text-4xl mb-6">
              What You Get
            </h2>
            <p className="text-lg text-stone mb-8 leading-relaxed">
              We measure success in hours saved and mistakes prevented, not lines of code written.
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

          <FadeUp delay={200} className="lg:w-1/2">
            <Link
              href="/case-studies/league-handicap"
              className="group relative block h-[400px] w-full rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-forest/90 to-emerald-800"
            >
              <div className="flex items-center justify-center h-full">
                <span
                  className="material-symbols-outlined !text-[120px] text-white/10"
                  aria-hidden="true"
                >
                  landscape
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

      {/* CTA — full width */}
      {/* Option A alt: "Let's Find the Trail" / "The path to automation doesn't have to be steep. Start with a conversation about where you want to go. No pressure, just a map." */}
      <section className="bg-charcoal py-24 px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-forest/5 rounded-l-full blur-3xl pointer-events-none opacity-50" />

        <div className="mx-auto max-w-4xl text-center relative z-10">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6">
            Let&apos;s Talk About Your Broken Process
          </h2>
          <p className="text-stone-300 text-lg mb-10 max-w-2xl mx-auto font-light">
            30-minute call. You tell us what&apos;s broken, we tell you what it&apos;d take to fix
            it. Straight answers, ballpark pricing, no obligation.
          </p>
          <Button
            variant="cta"
            size="lg"
            asChild
            className="text-lg py-4 px-10 hover:bg-[#cf7540] hover:scale-105 shadow-lg transition-all"
          >
            <Link href="/contact">Book a Free Consultation</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
