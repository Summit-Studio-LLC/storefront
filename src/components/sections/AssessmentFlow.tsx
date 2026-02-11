'use client';

import { useState } from 'react';
import { FadeUp } from '@/components/ui/FadeUp';
import { AssessmentQuiz } from '@/components/sections/AssessmentQuiz';
import { AssessmentResults } from '@/components/sections/AssessmentResults';
import { maxScore } from '@/data/assessment';

type Phase = 'landing' | 'quiz' | 'results';

export function AssessmentFlow() {
  const [phase, setPhase] = useState<Phase>('landing');
  const [score, setScore] = useState(0);
  const [tags, setTags] = useState<string[]>([]);

  const handleQuizComplete = (finalScore: number, finalTags: string[]) => {
    setScore(finalScore);
    setTags(finalTags);
    setPhase('results');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (phase === 'quiz') {
    return (
      <section className="bg-offwhite py-16 md:py-24">
        <AssessmentQuiz onComplete={handleQuizComplete} />
      </section>
    );
  }

  if (phase === 'results') {
    return (
      <section className="bg-offwhite py-16 md:py-24">
        <AssessmentResults score={score} tags={tags} />
      </section>
    );
  }

  // Landing phase
  return (
    <>
      {/* Hero */}
      <section className="bg-offwhite pb-16 pt-24 md:pb-24 md:pt-32">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <FadeUp>
            <h1 className="mb-6 font-serif text-4xl font-bold tracking-tight text-forest md:text-5xl lg:text-6xl">
              How Ready Is Your Business for Custom Software?
            </h1>
          </FadeUp>

          <FadeUp delay={100}>
            <p className="mb-10 text-lg text-stone md:text-xl">
              Take this 2-minute assessment. Get a personalized readiness score and see exactly
              where technology could help.
            </p>
          </FadeUp>

          <FadeUp delay={200}>
            <button
              type="button"
              onClick={() => {
                setPhase('quiz');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-8 py-4 text-lg font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#cf7540] hover:shadow-lg active:translate-y-0"
            >
              Take the Assessment
              <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
          </FadeUp>

          <FadeUp delay={300}>
            <p className="mt-6 text-sm text-stone/60">
              Takes 2 minutes &middot; No signup required &middot; Free personalized report
            </p>
          </FadeUp>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="border-t border-stone/10 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4">
          <FadeUp>
            <h2 className="mb-10 text-center font-serif text-2xl font-bold text-forest md:text-3xl">
              What you&apos;ll get
            </h2>
          </FadeUp>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: 'analytics',
                title: 'Readiness Score',
                description:
                  'A clear score showing where your business stands with technology — and what that means.',
              },
              {
                icon: 'recommend',
                title: 'Service Recommendations',
                description:
                  'Personalized suggestions based on your specific challenges, not a generic sales pitch.',
              },
              {
                icon: 'route',
                title: 'Clear Next Steps',
                description:
                  "A practical roadmap so you know exactly what to do next, whether that's a conversation or just more research.",
              },
            ].map((item, i) => (
              <FadeUp key={item.title} delay={i * 100}>
                <div className="rounded-xl border border-stone/10 bg-offwhite p-6 text-center">
                  <span className="material-symbols-outlined mb-3 text-3xl text-forest">
                    {item.icon}
                  </span>
                  <h3 className="mb-2 font-bold text-charcoal">{item.title}</h3>
                  <p className="text-sm text-stone">{item.description}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="border-t border-stone/10 bg-offwhite py-16">
        <div className="mx-auto max-w-2xl px-4 text-center">
          <FadeUp>
            <p className="mb-4 text-lg font-medium text-stone">
              {maxScore} points possible across 7 questions.
            </p>
            <button
              type="button"
              onClick={() => {
                setPhase('quiz');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="group inline-flex items-center gap-2 rounded-lg bg-forest px-8 py-4 text-lg font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-forest/90 hover:shadow-lg active:translate-y-0"
            >
              Start Now
              <span className="material-symbols-outlined text-xl transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
