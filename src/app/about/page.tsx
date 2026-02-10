import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FadeUp } from '@/components/ui/FadeUp';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Summit Studio is a software development studio led by a senior engineer with 7+ years across ad tech, fintech, logistics, and secure communications. Based in Cookeville, TN.',
  alternates: {
    canonical: '/about',
  },
};

const modelCards = [
  {
    icon: 'handshake',
    title: 'Our Clients',
    tagline: 'Direct Access, Real Results',
    description:
      'You work directly with the senior engineer building your software. No project managers relaying messages. No offshore handoffs. Custom-built for how your business actually works — web, mobile, cloud, or automation.',
  },
  {
    icon: 'groups',
    title: 'Our Team',
    tagline: 'Mentored, Reviewed, Production-Ready',
    description:
      'Tennessee Tech CS students work on real client projects under direct senior mentorship. Every line of code is reviewed by a senior engineer before it ships. This is how we scale without compromising quality — and how we keep costs honest.',
  },
  {
    icon: 'hub',
    title: 'Our Network',
    tagline: 'Depth When You Need It',
    description:
      'Experienced engineers contribute through code review, architecture consulting, and specialized expertise. When a project needs skills beyond our core team, we bring in trusted senior professionals — not contractors from a staffing agency.',
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
    label: 'The Engineer',
    text: "Seven years of professional software engineering across ad tech, secure communications, logistics, and fintech. I've held two simultaneous senior engineering roles and shipped production systems in TypeScript, Python, Go, React, Flutter, AWS, GCP, and so much more. I don't just manage engineers — I am one. Every project at Summit Studio is led by me, and I write code on every single one.",
  },
  {
    label: 'The Operator',
    text: 'I spent two years inside a 45-person consulting firm and learned how the agency model works from the inside — the good parts and the waste. Summit Studio exists because I saw a better way: deliver the same caliber of engineering without the layers of project managers, account executives, and overhead that double the price. You get senior work at an honest rate because our model is lean by design.',
  },
  {
    label: 'The Founder',
    text: "I moved to Cookeville to be close to family — my wife grew up here, and we're raising our three kids on her family's ranch. I chose this community, and Summit Studio is how I invest in it. But the work isn't limited to Cookeville. We serve clients locally and nationwide. Whether you're across town or across the country, you get the same thing: direct access to the engineer building your product.",
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
            About Summit Studio
          </span>
          <h1
            className="animate-fade-in-up mb-8 max-w-3xl font-serif text-5xl leading-[1.1] text-forest md:text-7xl"
            style={{ animationDelay: '150ms' }}
          >
            Engineering depth. Studio accountability.
          </h1>
          <p
            className="animate-fade-in-up max-w-2xl text-lg leading-relaxed text-stone md:text-xl"
            style={{ animationDelay: '300ms' }}
          >
            Summit Studio is a software development studio based in Cookeville, Tennessee. We build
            web applications, mobile apps, cloud systems, and automation tools for businesses that
            need real engineering — without the agency overhead. Every project is led by a senior
            engineer. Every line of code is reviewed before it ships.
          </p>
        </div>
      </section>

      {/* Our Model Section */}
      <section className="w-full border-y border-stone/5 bg-white/50 py-20">
        <div className="mx-auto max-w-[1280px] px-6">
          <FadeUp className="mb-12 text-center md:text-left">
            <h2 className="mb-4 font-serif text-4xl text-forest">How We Work</h2>
            <p className="max-w-xl text-stone">
              A lean model designed to deliver senior-quality work at honest prices.
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
                  Seven years of code.
                  <br />
                  One studio.
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
            Want to talk to the engineer, not a salesperson?
          </h2>
          <p className="max-w-lg text-lg text-stone">
            30 minutes. You describe the project. We tell you honestly if we can help.
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
