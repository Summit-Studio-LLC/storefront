const painPoints = [
  {
    question: 'Will this work for MY business?',
    answer:
      "Free consultation to understand YOUR specific problem. We only take projects we're confident we can solve.",
  },
  {
    question: 'Can I afford custom software?',
    answer:
      'Fixed-price projects starting at $2,500. Pay in milestones. 50% less than big agencies. ROI in 3-6 months.',
  },
  {
    question: "How do I know you'll finish it?",
    answer:
      "30-60 day warranty. Milestone payments. Regular updates. You don't pay final amount until satisfied.",
  },
];

export default function PainPoints() {
  return (
    <section className="bg-white px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 md:grid-cols-3">
          {painPoints.map((point, index) => (
            <div key={index} className="rounded-lg border border-gray-200 bg-offwhite p-6 md:p-8">
              <h3 className="mb-4 text-xl font-semibold text-forest">
                &ldquo;{point.question}&rdquo;
              </h3>
              <p className="text-stone">{point.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
