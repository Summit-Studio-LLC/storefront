'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { getTier, getRecommendations, getPersonalizedSummary, maxScore } from '@/data/assessment';
import { trackEvent } from '@/lib/analytics';

interface AssessmentResultsProps {
  score: number;
  tags: string[];
}

export function AssessmentResults({ score, tags }: AssessmentResultsProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const tier = getTier(score);
  const recommendations = getRecommendations(tags);
  const summary = getPersonalizedSummary(tags);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch('/api/assessment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          company,
          score,
          tags,
          tier: tier.id,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong.');
      }

      setIsSubmitted(true);
      trackEvent('assessment_email_captured', { tier: tier.id, score });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const tierColor = {
    explorer: 'border-forest/30 bg-forest/5 text-forest',
    ready: 'border-accent/30 bg-accent/5 text-accent',
    urgent: 'border-red-500/30 bg-red-50 text-red-700',
  };

  return (
    <div className="mx-auto max-w-2xl px-4">
      {/* Score badge */}
      <div className="mb-6 text-center">
        <div
          className={cn(
            'mb-4 inline-flex items-center gap-2 rounded-full border px-5 py-2 text-sm font-bold',
            tierColor[tier.id]
          )}
        >
          <span className="material-symbols-outlined text-lg">
            {tier.id === 'explorer'
              ? 'explore'
              : tier.id === 'ready'
                ? 'rocket_launch'
                : 'priority_high'}
          </span>
          {tier.label}
        </div>

        <h2 className="mb-2 font-serif text-2xl font-bold text-forest md:text-3xl">
          {tier.headline}
        </h2>

        <p className="text-lg font-medium text-forest/80">
          Your Technology Readiness Score:{' '}
          <span className="font-bold">
            {score}/{maxScore}
          </span>
        </p>
      </div>

      {/* Personalized summary */}
      <div className="mb-8 rounded-xl border border-stone/10 bg-white p-6 shadow-sm">
        <p className="text-base leading-relaxed text-stone">{summary}</p>
      </div>

      {/* Tier description */}
      <p className="mb-8 text-center text-base text-stone">{tier.description}</p>

      {/* Service recommendations */}
      {recommendations.length > 0 && (
        <div className="mb-10">
          <h3 className="mb-4 text-center text-lg font-bold text-charcoal">
            Based on your answers, we&apos;d recommend:
          </h3>
          <div className="space-y-3">
            {recommendations.map((rec) => (
              <div
                key={rec.title}
                className="flex items-start gap-4 rounded-xl border border-stone/10 bg-white p-5 shadow-sm"
              >
                <span className="material-symbols-outlined mt-0.5 text-2xl text-forest">
                  {rec.icon}
                </span>
                <div>
                  <h4 className="font-bold text-charcoal">{rec.title}</h4>
                  <p className="mt-1 text-sm text-stone">{rec.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Email capture */}
      {!isSubmitted ? (
        <div className="rounded-xl border border-forest/15 bg-forest/5 p-6 md:p-8">
          <h3 className="mb-1 text-center text-lg font-bold text-forest">
            Get your full report with specific next steps
          </h3>
          <p className="mb-6 text-center text-sm text-stone">
            We&apos;ll send a detailed breakdown with recommendations tailored to your situation.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <input
                type="text"
                required
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border-[1.5px] border-stone/20 bg-white px-4 py-3 text-charcoal placeholder:text-stone/40 transition-all duration-200 focus:border-forest focus:outline-none focus:ring-4 focus:ring-forest/10"
              />
              <input
                type="text"
                placeholder="Company (optional)"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full rounded-lg border-[1.5px] border-stone/20 bg-white px-4 py-3 text-charcoal placeholder:text-stone/40 transition-all duration-200 focus:border-forest focus:outline-none focus:ring-4 focus:ring-forest/10"
              />
            </div>
            <input
              type="email"
              required
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border-[1.5px] border-stone/20 bg-white px-4 py-3 text-charcoal placeholder:text-stone/40 transition-all duration-200 focus:border-forest focus:outline-none focus:ring-4 focus:ring-forest/10"
            />

            {error && <p className="text-sm text-red-600">{error}</p>}

            <button
              type="submit"
              disabled={isSubmitting}
              className="group flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-4 font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#cf7540] hover:shadow-lg active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span>{isSubmitting ? 'Sending...' : 'Send My Report'}</span>
              {!isSubmitting && (
                <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              )}
            </button>
          </form>

          {/* Skip option */}
          <p className="mt-4 text-center text-sm text-stone">
            Or{' '}
            <Link
              href="/contact"
              className="font-medium text-forest underline underline-offset-2 hover:text-forest/80"
              onClick={() => trackEvent('assessment_call_booked', { tier: tier.id, score })}
            >
              skip straight to a conversation
            </Link>
          </p>
        </div>
      ) : (
        <div className="rounded-xl border border-forest/20 bg-forest/5 p-8 text-center">
          <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-forest/10">
            <span className="material-symbols-outlined text-2xl text-forest">check_circle</span>
          </div>
          <h3 className="mb-2 text-xl font-bold text-forest">Report on its way!</h3>
          <p className="mb-4 text-stone">
            Check your inbox for your personalized technology readiness report.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 font-bold text-forest underline underline-offset-2 hover:text-forest/80"
            onClick={() => trackEvent('assessment_call_booked', { tier: tier.id, score })}
          >
            Ready to talk now? Book a call
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        </div>
      )}
    </div>
  );
}
