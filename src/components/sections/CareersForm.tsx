'use client';

import { useState, type FormEvent } from 'react';
import { trackEvent } from '@/lib/analytics';

interface FormData {
  name: string;
  email: string;
  track: string;
  role: string;
  message: string;
}

export function CareersForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    track: '',
    role: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch('/api/careers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong.');
      }

      setIsSubmitted(true);
      trackEvent('careers_form_submitted', { track: formData.track });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
      trackEvent('careers_form_error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-xl border border-forest/20 bg-forest/5 p-8 text-center">
        <div className="mx-auto mb-4 flex size-12 items-center justify-center rounded-full bg-forest/10">
          <span className="material-symbols-outlined text-2xl text-forest">check_circle</span>
        </div>
        <h3 className="mb-2 text-xl font-bold text-forest">Interest Received!</h3>
        <p className="text-stone">
          Thanks for reaching out. We&apos;ll be in touch when we have an opportunity that fits.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Name */}
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-semibold text-charcoal">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Jane Doe"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded-lg border-[1.5px] border-stone/20 bg-white px-4 py-3 text-charcoal placeholder:text-stone/40 transition-all duration-200 focus:border-forest focus:outline-none focus:ring-4 focus:ring-forest/10"
          />
        </div>

        {/* Email */}
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-semibold text-charcoal">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="jane@example.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full rounded-lg border-[1.5px] border-stone/20 bg-white px-4 py-3 text-charcoal placeholder:text-stone/40 transition-all duration-200 focus:border-forest focus:outline-none focus:ring-4 focus:ring-forest/10"
          />
        </div>
      </div>

      {/* Track */}
      <div className="space-y-2">
        <label htmlFor="track" className="block text-sm font-semibold text-charcoal">
          I&apos;m interested in...
        </label>
        <select
          id="track"
          name="track"
          required
          value={formData.track}
          onChange={handleChange}
          className={`w-full appearance-none rounded-lg border-[1.5px] border-stone/20 bg-white px-4 py-3 transition-all duration-200 focus:border-forest focus:outline-none focus:ring-4 focus:ring-forest/10 ${formData.track ? 'text-charcoal' : 'text-stone/40'}`}
        >
          <option value="" disabled>
            Select a track...
          </option>
          <option value="Student Engineer" className="text-charcoal">
            Student Engineer
          </option>
          <option value="Senior Engineer" className="text-charcoal">
            Senior Engineer
          </option>
          <option value="Other" className="text-charcoal">
            Other
          </option>
        </select>
      </div>

      {/* School or Current Role */}
      <div className="space-y-2">
        <label htmlFor="role" className="block text-sm font-semibold text-charcoal">
          School or Current Role <span className="font-normal text-stone/60">(optional)</span>
        </label>
        <input
          type="text"
          id="role"
          name="role"
          placeholder="Tennessee Tech University / Senior Engineer at Acme Corp"
          value={formData.role}
          onChange={handleChange}
          className="w-full rounded-lg border-[1.5px] border-stone/20 bg-white px-4 py-3 text-charcoal placeholder:text-stone/40 transition-all duration-200 focus:border-forest focus:outline-none focus:ring-4 focus:ring-forest/10"
        />
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-semibold text-charcoal">
          Anything you&apos;d like us to know?{' '}
          <span className="font-normal text-stone/60">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Tell us a bit about yourself, what you're looking for, or any questions you have..."
          value={formData.message}
          onChange={handleChange}
          className="w-full resize-none rounded-lg border-[1.5px] border-stone/20 bg-white px-4 py-3 text-charcoal placeholder:text-stone/40 transition-all duration-200 focus:border-forest focus:outline-none focus:ring-4 focus:ring-forest/10"
        />
      </div>

      {/* Error */}
      {error && <p className="text-sm text-red-600">{error}</p>}

      {/* Submit */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="group flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-4 font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#cf7540] hover:shadow-lg active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span>{isSubmitting ? 'Sending...' : 'Express Interest'}</span>
          {!isSubmitting && (
            <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          )}
        </button>
      </div>
    </form>
  );
}
