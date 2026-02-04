const steps = [
  {
    number: "1",
    title: "Tell Us Your Problem",
    description:
      "Free 30-minute consultation. We listen, you talk. No jargon, no pressure.",
  },
  {
    number: "2",
    title: "We Build Your Solution",
    description:
      "Fixed-price proposal. Milestone payments. Regular demos so you see progress.",
  },
  {
    number: "3",
    title: "Save Time, Grow Faster",
    description:
      "Go live. Training included. 30-60 day warranty. Optional ongoing support.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-offwhite px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-bold text-forest md:text-4xl">
          How It Works
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-forest text-2xl font-bold text-white">
                {step.number}
              </div>
              <h3 className="mb-3 text-xl font-semibold text-stone">
                {step.title}
              </h3>
              <p className="text-stone">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
