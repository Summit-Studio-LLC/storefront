import type { Metadata } from 'next';
import { ContactForm } from '@/components/sections/ContactForm';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Schedule a free 30-minute consultation or send us a message. Summit Studio — custom software for local businesses in Cookeville, TN.',
};

export default function ContactPage() {
  return (
    <main className="bg-[#FAFAF8]">
      {/* Hero Section */}
      <section className="px-4 py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold text-[#2D5F3E] md:text-5xl">
            Let&apos;s Talk About Your Business
          </h1>
          <p className="text-lg text-[#4A4A4A] md:text-xl">
            Free 30-minute consultation. No jargon, no pressure, just answers.
          </p>
        </div>
      </section>

      {/* Two-Column Layout */}
      <section className="px-4 pb-20 md:pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left: Contact Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-[#2D5F3E]">Send Us a Message</h2>
              <ContactForm />
            </div>

            {/* Right: Calendly Placeholder */}
            <div>
              <h2 className="mb-6 text-2xl font-bold text-[#2D5F3E]">Schedule a Consultation</h2>
              <div className="rounded-lg border border-[#4A4A4A]/10 bg-white p-8">
                <div className="mb-6 flex h-48 items-center justify-center rounded-lg bg-[#FAFAF8]">
                  <div className="text-center">
                    <div className="mb-2 text-4xl text-[#2D5F3E]">&#128197;</div>
                    <p className="text-sm text-[#4A4A4A]/60">Calendar Placeholder</p>
                  </div>
                </div>
                <h3 className="mb-3 text-lg font-semibold text-[#2D5F3E]">
                  Prefer to schedule directly?
                </h3>
                <p className="mb-6 text-[#4A4A4A]">
                  Book a free 30-minute consultation at a time that works for you. We&apos;ll discuss
                  your current challenges and explore how automation can help.
                </p>
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg border-2 border-[#2D5F3E] px-6 py-3 font-semibold text-[#2D5F3E] transition-colors hover:bg-[#2D5F3E] hover:text-white"
                >
                  Book on Calendly
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Contact Info */}
      <section className="bg-white px-4 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-[#2D5F3E] md:text-3xl">
            Other Ways to Reach Us
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            {/* Email */}
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#2D5F3E]/10">
                <span className="text-2xl">&#9993;</span>
              </div>
              <h3 className="mb-2 font-semibold text-[#2D5F3E]">Email</h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[#4A4A4A] transition-colors hover:text-[#2D5F3E]"
              >
                {siteConfig.email}
              </a>
            </div>

            {/* Location */}
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#2D5F3E]/10">
                <span className="text-2xl">&#128205;</span>
              </div>
              <h3 className="mb-2 font-semibold text-[#2D5F3E]">Location</h3>
              <p className="text-[#4A4A4A]">{siteConfig.location}</p>
            </div>

            {/* Response Time */}
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[#2D5F3E]/10">
                <span className="text-2xl">&#9200;</span>
              </div>
              <h3 className="mb-2 font-semibold text-[#2D5F3E]">Response Time</h3>
              <p className="text-[#4A4A4A]">Within 1 business day</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
