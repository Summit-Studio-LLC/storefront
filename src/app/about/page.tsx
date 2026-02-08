import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FadeUp } from '@/components/ui/FadeUp';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Summit Studio is a software consultancy in Cookeville, TN. We build custom software for local businesses while mentoring the next generation of developers.',
  alternates: {
    canonical: '/about',
  },
};

const modelCards = [
  {
    icon: 'storefront',
    title: 'Local Businesses',
    tagline: 'Real Solutions, Built to Fit',
    description:
      'Custom software built for how your business actually works. Local accountability, transparent process, outcomes you can measure.',
  },
  {
    icon: 'school',
    title: 'CS Students',
    tagline: 'Real Experience, Real Mentorship',
    description:
      'Tennessee Tech students work on real client projects under senior mentorship. They build portfolio pieces, learn professional workflows, and get career support.',
  },
  {
    icon: 'engineering',
    title: 'Senior Engineers',
    tagline: 'Community Through Expertise',
    description:
      'Experienced remote engineers contribute through mentoring, code review, and optional consulting. Every project benefits from senior-level oversight.',
  },
];

const values = [
  {
    icon: 'ads_click',
    title: 'Outcome-Focused',
    description:
      'We measure success by hours saved and errors prevented, not lines of code written.',
  },
  {
    icon: 'build',
    title: 'Simple & Maintainable',
    description: 'Proven technologies. No over-engineering. Systems that last years, not months.',
  },
  {
    icon: 'verified',
    title: 'Quality Through Mentorship',
    description: 'Every line of code is reviewed by a senior engineer before it ships.',
  },
  {
    icon: 'school',
    title: 'Teaching by Doing',
    description:
      'Real projects are the best classroom. Our students learn by building things that matter.',
  },
  {
    icon: 'groups',
    title: 'Community-First',
    description: "We build relationships, not just software. We're your neighbor, not a vendor.",
  },
];

const founderSections = [
  {
    label: 'The Translator',
    text: "I started Summit Studio because I kept seeing the same thing: local business owners struggling to communicate with big, remote dev shops. They were sold features they didn't need, in language they didn't understand. With a computer science degree, an MBA in IT management, and years on both sides of the table — including a year of door-to-door sales and two years of mission work — I learned to listen first. My job is to sit across from you, understand what's actually costing you time and money, and then build the thing that fixes it. No translator needed.",
  },
  {
    label: 'The Veteran',
    text: "Seven years of professional software engineering across ad tech, secure communications, logistics, and fintech. I've held two simultaneous senior engineering roles and spent two years inside a 45-person consulting firm learning how the model works from the inside. I didn't wake up one day and decide to start a consultancy — I've done this before, and I bring that discipline to every project we touch.",
  },
  {
    label: 'The Local',
    text: "I moved to Cookeville to be close to family. My wife grew up here — we built our house on her family's ranch and we're raising our 3 kids where they can see their grandparents. I chose this community, and Summit Studio is my way of investing in it. The businesses here deserve the same quality of software that companies in big cities get, without the big-city price tag or the big-city runaround.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full px-6 py-20 md:py-32">
        <div className="mx-auto flex max-w-[960px] flex-col items-center text-center">
          <span
            className="animate-fade-in-up mb-6 inline-block rounded-full bg-forest/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-forest"
            style={{ animationDelay: '0ms' }}
          >
            Cookeville, TN
          </span>
          <h1
            className="animate-fade-in-up mb-8 max-w-3xl font-serif text-5xl leading-[1.1] text-forest md:text-7xl"
            style={{ animationDelay: '150ms' }}
          >
            Technology That Works for Your Business
          </h1>
          <p
            className="animate-fade-in-up max-w-2xl text-lg leading-relaxed text-stone md:text-xl"
            style={{ animationDelay: '300ms' }}
          >
            Summit Studio is a software consultancy based in Cookeville, Tennessee. We help local
            businesses replace the manual work, paper forms, and disconnected tools that slow them
            down — with simple, custom software that fits how they actually operate.
          </p>
        </div>
      </section>

      {/* Our Model Section */}
      <section className="w-full border-y border-stone/5 bg-white/50 py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <FadeUp className="mb-12 text-center md:text-left">
            <h2 className="mb-4 font-serif text-4xl text-forest">Our Model</h2>
            <p className="max-w-xl text-stone">
              A balanced ecosystem designed to deliver high-quality software while investing in the
              future of our local tech community.
            </p>
          </FadeUp>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {modelCards.map((card, index) => (
              <FadeUp key={card.title} delay={index * 150}>
                <div className="flex h-full flex-col rounded-xl border border-stone/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-6 flex size-12 items-center justify-center rounded-full bg-forest/10 text-forest">
                    <span className="material-symbols-outlined">{card.icon}</span>
                  </div>
                  <h3 className="mb-1 font-serif text-2xl text-forest">{card.title}</h3>
                  <p className="mb-3 text-sm font-semibold text-accent">{card.tagline}</p>
                  <p className="flex-grow leading-relaxed text-stone">{card.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full px-6 py-24">
        <div className="mx-auto max-w-[1280px]">
          <FadeUp className="mb-16 text-center">
            <h2 className="font-serif text-4xl text-forest">Core Values</h2>
          </FadeUp>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-6">
            {values.map((value, index) => (
              <FadeUp key={value.title} delay={index * 100}>
                <div className="flex flex-col items-center gap-4 text-center">
                  <div className="mb-2 text-accent">
                    <span className="material-symbols-outlined !text-4xl">{value.icon}</span>
                  </div>
                  <h4 className="text-lg font-bold text-forest">{value.title}</h4>
                  <p className="text-sm leading-relaxed text-stone">{value.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="w-full bg-white py-20 md:py-32">
        <div className="mx-auto max-w-[1100px] px-6">
          <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-20">
            {/* Image Column */}
            <FadeUp className="w-full lg:sticky lg:top-24 lg:w-5/12">
              <div className="group relative aspect-[4/5] overflow-hidden rounded-lg shadow-xl">
                <div className="flex h-full w-full items-center justify-center bg-forest/5">
                  <div className="text-center">
                    <span className="material-symbols-outlined !text-6xl text-forest/30">
                      person
                    </span>
                    <p className="mt-2 text-sm text-stone/50">Photo coming soon</p>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center lg:text-left">
                <h3 className="font-serif text-3xl text-forest">Noah Anderson</h3>
                <p className="mt-2 text-sm font-bold uppercase tracking-wider text-accent">
                  Founder &amp; Principal Engineer
                </p>
              </div>
            </FadeUp>

            {/* Text Column */}
            <div className="w-full pt-4 lg:w-7/12">
              <FadeUp>
                <h2 className="mb-10 font-serif text-5xl leading-tight text-forest">
                  Built on Trust, <br />
                  Rooted in Code.
                </h2>
              </FadeUp>

              {founderSections.map((section, index) => (
                <FadeUp key={section.label} delay={index * 150}>
                  <div className="mb-10">
                    <h4 className="mb-3 text-lg font-bold uppercase tracking-wide text-accent">
                      {section.label}
                    </h4>
                    <p className="text-lg leading-[1.7] text-stone">{section.text}</p>
                  </div>
                </FadeUp>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full px-6 py-24">
        <FadeUp className="mx-auto flex max-w-2xl flex-col items-center gap-8 text-center">
          <h2 className="font-serif text-4xl leading-tight text-forest md:text-5xl">
            Want to meet the person behind the code?
          </h2>
          <p className="max-w-lg text-lg text-stone">
            Let&apos;s have a conversation about your business. No pitch, no pressure.
          </p>
          <Button
            variant="cta"
            size="lg"
            asChild
            className="group hover:bg-[#cf7540] hover:shadow-lg"
          >
            <Link href="/contact">
              <span>Schedule a Conversation</span>
              <span
                className="material-symbols-outlined text-[20px] transition-transform duration-200 group-hover:translate-x-1"
                aria-hidden="true"
              >
                arrow_forward
              </span>
            </Link>
          </Button>
        </FadeUp>
      </section>
    </>
  );
}
