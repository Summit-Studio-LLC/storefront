import { FadeUp } from '@/components/ui/FadeUp';

const cards = [
  {
    icon: 'shield_person',
    title: 'Every Decision Reviewed',
    description:
      'Nothing ships without being questioned, tested, and validated. Every pull request is reviewed by someone who owns the outcome.',
  },
  {
    icon: 'visibility',
    title: 'More Eyes, Not Fewer',
    description:
      'Our model puts more people on your project, not fewer. Fresh perspectives catch what tunnel vision misses — your code gets more attention, not less.',
  },
  {
    icon: 'verified',
    title: 'Built-In Accountability',
    description:
      "When you have to explain your reasoning out loud, you can't cut corners. The pressure to teach is the pressure to be thorough.",
  },
];

export default function TeachingModel() {
  return (
    <section className="w-full border-y border-stone/5 bg-white/50 py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <FadeUp className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-forest sm:text-4xl">
            The Teaching Hospital Model
          </h2>
          <p className="mt-4 text-lg leading-8 text-stone">
            The best hospitals in the world aren&apos;t private practices — they&apos;re teaching
            institutions, where every diagnosis is discussed, every treatment plan is reviewed, and
            the pressure to explain your thinking makes everyone sharper. We built our studio on the
            same idea. The result is code that&apos;s been questioned, documented, and validated
            before it ever reaches your hands.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, index) => (
            <FadeUp key={card.title} delay={index * 80} className="h-full">
              <div className="flex flex-col gap-4 rounded-xl border border-stone/10 bg-white p-8 shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-forest/10 text-forest">
                  <span className="material-symbols-outlined">{card.icon}</span>
                </div>
                <h3 className="text-lg font-bold leading-7 text-forest">{card.title}</h3>
                <p className="text-base leading-7 text-stone">{card.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Callout Block */}
        <FadeUp delay={300} className="mt-12">
          <div className="rounded-2xl bg-charcoal px-8 py-14 md:py-16">
            <div className="max-w-3xl mx-auto text-center">
              <span
                className="material-symbols-outlined !text-4xl text-accent mb-4 block"
                aria-hidden="true"
              >
                compare_arrows
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-accent mb-4 leading-tight">
                Two outputs from one process
              </h3>
              <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
                Every project we take on produces two things — a product our clients can rely on,
                and engineers the industry actually needs. The same discipline that sharpens our
                team is what makes your product better.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
