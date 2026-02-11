import { FadeUp } from '@/components/ui/FadeUp';

const steps = [
  {
    number: '1',
    title: 'Tell Us Your Problem',
    description: 'Free 30-minute consultation. We listen, you talk. No jargon, no pressure.',
  },
  {
    number: '2',
    title: 'We Build Your Solution',
    description: 'Fixed-price proposal. Milestone payments. Regular demos so you see progress.',
  },
  {
    number: '3',
    title: 'Save Time, Grow Faster',
    description: 'Go live. Training included. 30-60 day warranty. Optional ongoing support.',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 px-6 lg:px-8 bg-offwhite">
      <div className="mx-auto max-w-5xl">
        <FadeUp className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-forest sm:text-4xl">
            How It Works
          </h2>
        </FadeUp>

        <div className="relative grid gap-12 md:grid-cols-3 md:gap-8">
          {/* Connecting trail line (desktop) */}
          <div
            className="hidden md:block absolute top-7 left-[16.67%] right-[16.67%] h-0.5"
            style={{
              backgroundImage:
                'linear-gradient(to right, transparent, #d6d3d1 10%, #d6d3d1 90%, transparent)',
            }}
            aria-hidden="true"
          />

          {steps.map((step, index) => (
            <FadeUp key={step.number} delay={index * 150} className="text-center relative">
              <div className="relative z-10 mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-forest text-2xl font-bold text-white shadow-md ring-4 ring-offwhite">
                {step.number}
              </div>
              <h3 className="text-xl font-bold text-forest mb-3">{step.title}</h3>
              <p className="text-stone leading-relaxed">{step.description}</p>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
