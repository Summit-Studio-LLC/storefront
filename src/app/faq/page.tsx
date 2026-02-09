import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { FadeUp } from '@/components/ui/FadeUp';
import { faqCategories } from '@/data/faq';

const categoryIcons: Record<string, string> = {
  general: 'info',
  process: 'timeline',
  support: 'shield',
  technology: 'memory',
};

export default function FAQPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden px-6 py-20 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-topography-lines opacity-30" />

        <div className="relative z-10 mx-auto flex max-w-[960px] flex-col items-center text-center">
          <span
            className="animate-fade-in-up mb-6 inline-block rounded-full bg-forest/5 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-forest"
            style={{ animationDelay: '0ms' }}
          >
            Straight Answers
          </span>
          <h1
            className="animate-fade-in-up mb-6 max-w-3xl font-serif text-5xl leading-[1.1] text-forest md:text-7xl"
            style={{ animationDelay: '150ms' }}
          >
            Frequently Asked Questions
          </h1>
          <p
            className="animate-fade-in-up max-w-2xl text-lg leading-relaxed text-stone md:text-xl"
            style={{ animationDelay: '300ms' }}
          >
            Common questions about custom software, timelines, and working with Summit Studio.
            Straight answers, no jargon.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      {faqCategories.map((category, catIndex) => (
        <section
          key={category.id}
          className={catIndex % 2 === 1 ? 'w-full border-y border-stone/5 bg-white/50' : 'w-full'}
        >
          <div className="mx-auto max-w-[800px] px-6 py-16 md:py-20">
            <FadeUp>
              <div id={category.id} className="scroll-mt-24">
                {/* Category Header */}
                <div className="mb-10 flex items-center gap-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-forest/10 text-forest">
                    <span className="material-symbols-outlined !text-xl">
                      {categoryIcons[category.id] ?? 'help'}
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl text-forest md:text-4xl">{category.name}</h2>
                </div>

                {/* Q&A Items */}
                <div className="divide-y divide-stone/10">
                  {category.questions.map((item) => (
                    <div key={item.question} className="py-7 first:pt-0 last:pb-0">
                      <h3 className="mb-2 text-lg font-semibold text-forest">{item.question}</h3>
                      <p className="leading-[1.7] text-stone">
                        {item.answer}
                        {item.link && (
                          <>
                            {' '}
                            <Link
                              href={item.link.href}
                              className="inline-flex items-center gap-1 font-medium text-accent transition-colors hover:text-forest"
                            >
                              {item.link.label}
                              <span
                                className="material-symbols-outlined !text-[16px]"
                                aria-hidden="true"
                              >
                                arrow_forward
                              </span>
                            </Link>
                          </>
                        )}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="w-full px-6 py-20">
        <FadeUp>
          <div className="relative mx-auto max-w-[800px] overflow-hidden rounded-2xl bg-charcoal text-white shadow-xl">
            <div className="pointer-events-none absolute top-0 right-0 h-full w-1/2 bg-gradient-to-l from-white to-transparent opacity-10" />

            <div className="relative z-10 flex flex-col items-center px-6 py-16 text-center md:px-12 md:py-20">
              <span
                className="material-symbols-outlined mb-5 !text-4xl text-accent"
                aria-hidden="true"
              >
                chat
              </span>
              <h3 className="mb-4 font-serif text-3xl text-white md:text-4xl">
                Still have questions?
              </h3>
              <p className="mb-8 max-w-md text-lg text-stone-300">
                We&apos;re happy to answer anything. Schedule a free consultation or send us a
                message.
              </p>
              <Button
                variant="cta"
                size="lg"
                asChild
                className="group hover:bg-[#cf7540] hover:shadow-lg hover:shadow-accent/20"
              >
                <Link href="/contact">
                  <span>Contact Us</span>
                  <span
                    className="material-symbols-outlined text-[20px] transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    arrow_forward
                  </span>
                </Link>
              </Button>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
