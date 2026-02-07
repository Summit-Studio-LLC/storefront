'use client';

import { useState, type FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  company: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || 'Something went wrong.');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
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
        <h3 className="mb-2 text-xl font-bold text-forest">Message Sent!</h3>
        <p className="text-stone">Thanks! We&apos;ll get back to you within 1 business day.</p>
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

        {/* Company */}
        <div className="space-y-2">
          <label htmlFor="company" className="block text-sm font-semibold text-charcoal">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            placeholder="Summit Inc."
            value={formData.company}
            onChange={handleChange}
            className="w-full rounded-lg border-[1.5px] border-stone/20 bg-white px-4 py-3 text-charcoal placeholder:text-stone/40 transition-all duration-200 focus:border-forest focus:outline-none focus:ring-4 focus:ring-forest/10"
          />
        </div>
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

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="block text-sm font-semibold text-charcoal">
          How can we help?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Tell us about your project..."
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
          <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
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
