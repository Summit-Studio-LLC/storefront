import type { Metadata } from 'next';
import { ContactForm } from '@/components/sections/ContactForm';
import { CalendlyEmbed } from '@/components/sections/CalendlyEmbed';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Schedule a free 30-minute consultation or send us a message. Summit Studio — custom software for local businesses in Cookeville, TN.',
};

export default function ContactPage() {
  return (
    <>
      {/* Hero + Form Section */}
      <section className="px-4 py-12 md:px-10 md:py-24 lg:px-40">
        <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-24">
          {/* Left Column — Heading + Contact Info */}
          <div className="flex flex-col pt-4 lg:col-span-5">
            <h1
              className="animate-fade-in-up mb-6 font-serif text-5xl leading-[1.1] text-forest md:text-6xl"
              style={{ animationDelay: '0ms' }}
            >
              Reach the <br />
              <span className="italic text-accent">Summit</span>
            </h1>
            <p
              className="animate-fade-in-up mb-12 max-w-md text-lg leading-relaxed text-stone"
              style={{ animationDelay: '150ms' }}
            >
              We specialize in automating the mundane so you can focus on the extraordinary.
              Let&apos;s schedule a discovery call to discuss your business needs.
            </p>

            <div className="animate-fade-in-up space-y-6" style={{ animationDelay: '300ms' }}>
              {/* Email */}
              <div className="group flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-lg border border-stone/10 bg-white text-forest transition-colors group-hover:border-accent/50">
                  <span className="material-symbols-outlined text-[24px]">mail</span>
                </div>
                <div className="flex flex-col">
                  <span className="mb-0.5 text-xs font-semibold uppercase tracking-wider text-stone">
                    Email Us
                  </span>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-lg font-medium text-charcoal transition-colors hover:text-accent"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              {/* Based In */}
              <div className="group flex items-center gap-4">
                <div className="flex size-12 items-center justify-center rounded-lg border border-stone/10 bg-white text-forest transition-colors group-hover:border-accent/50">
                  <span className="material-symbols-outlined text-[24px]">location_on</span>
                </div>
                <div className="flex flex-col">
                  <span className="mb-0.5 text-xs font-semibold uppercase tracking-wider text-stone">
                    Based In
                  </span>
                  <span className="text-lg font-medium text-charcoal">{siteConfig.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column — Contact Form */}
          <div className="w-full lg:col-span-7">
            <div className="rounded-xl border border-stone/10 bg-white p-8 shadow-sm md:p-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Calendly Section */}
      <section className="border-t border-stone/10 bg-offwhite px-4 py-20 md:px-10 lg:px-40">
        <div className="mx-auto flex max-w-[1280px] flex-col items-center">
          <div className="mb-10 max-w-2xl text-center">
            <h2 className="mb-4 font-serif text-4xl text-forest md:text-5xl">
              Book Your Discovery Call
            </h2>
            <p className="text-lg text-stone">
              Pick a time that works for you to discuss your project
            </p>
          </div>
          <div className="w-full max-w-4xl overflow-hidden rounded-xl border border-stone/10 bg-white shadow-sm">
            <CalendlyEmbed />
          </div>
        </div>
      </section>
    </>
  );
}
