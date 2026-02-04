'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { Accordion } from '@/components/ui/Accordion';
import { faqCategories } from '@/data/faq';

export default function FAQPage() {
  // Handle anchor link scrolling on page load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#FAFAF8] px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-4xl font-bold leading-tight text-[#2D5F3E] md:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-[#4A4A4A]">
            Common questions about custom software, pricing, timelines, and working with Summit
            Studio. Transparent answers, no jargon.
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-0 z-10 border-b border-gray-200 bg-white px-4 py-4">
        <div className="mx-auto max-w-4xl">
          <nav className="flex flex-wrap justify-center gap-2">
            {faqCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-[#4A4A4A] transition-colors hover:border-[#2D5F3E] hover:text-[#2D5F3E]"
              >
                {category.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* FAQ Categories */}
      <section className="bg-white px-4 py-12 md:py-16">
        <div className="mx-auto max-w-3xl">
          {faqCategories.map((category) => (
            <div key={category.id} id={category.id} className="mb-12 scroll-mt-24 last:mb-0">
              <h2 className="mb-6 text-2xl font-bold text-[#2D5F3E]">{category.name}</h2>
              <Accordion items={category.questions} />
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FAFAF8] px-4 py-12 md:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-bold text-[#2D5F3E]">
            Didn&apos;t find your answer?
          </h2>
          <p className="mb-6 text-[#4A4A4A]">
            We&apos;re happy to answer any questions. Schedule a free consultation or send us a
            message.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-[#C46A32] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#a85a2a]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
