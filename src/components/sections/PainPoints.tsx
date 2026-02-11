import { FadeUp } from '@/components/ui/FadeUp';

const painPoints = [
  {
    icon: 'handshake',
    objection: 'Will this work for MY business?',
    answer:
      "Free consultation to understand YOUR specific problem. We only take projects we're confident we can solve.",
  },
  {
    icon: 'savings',
    objection: 'Can I afford custom software?',
    answer:
      'We scope every project on a free discovery call. Honest pricing, no surprises. ROI in 3-6 months.',
  },
  {
    icon: 'verified_user',
    objection: "How do I know you'll finish it?",
    answer:
      '30-60 day warranty. Regular updates. You see progress at every milestone before moving forward.',
  },
];

export default function PainPoints() {
  return (
    <section className="py-24 px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {painPoints.map((point, index) => (
            <FadeUp key={point.objection} delay={index * 120} className="h-full">
              <div className="relative flex flex-col gap-5 rounded-2xl border border-stone/10 border-t-[3px] border-t-accent bg-white p-8 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-forest/8 text-forest">
                  <span className="material-symbols-outlined !text-[26px]" aria-hidden="true">
                    {point.icon}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-forest leading-snug">
                  &ldquo;{point.objection}&rdquo;
                </h3>
                <p className="text-base text-stone leading-relaxed">{point.answer}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
