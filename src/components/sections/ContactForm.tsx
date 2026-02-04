'use client';

import { useState, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  company: string;
  timeWaster: string;
  hoursWasted: string;
  message: string;
}

const timeWasterOptions = [
  { value: '', label: 'Select an option' },
  { value: 'manual-data-entry', label: 'Manual data entry' },
  { value: 'paper-forms', label: 'Paper forms' },
  { value: 'scheduling-chaos', label: 'Scheduling chaos' },
  { value: 'spreadsheet-management', label: 'Spreadsheet management' },
  { value: 'client-intake', label: 'Client intake' },
  { value: 'inventory-tracking', label: 'Inventory tracking' },
  { value: 'other', label: 'Other' },
];

const hoursWastedOptions = [
  { value: '', label: 'Select an option' },
  { value: '5-10', label: '5-10 hours' },
  { value: '10-20', label: '10-20 hours' },
  { value: '20+', label: '20+ hours' },
];

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    timeWaster: '',
    hoursWasted: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // For now, just show success (backend to be wired up later)
    setIsSubmitted(true);
    setIsSubmitting(false);
  };

  if (isSubmitted) {
    return (
      <div className="rounded-lg border border-[#2D5F3E]/20 bg-[#2D5F3E]/5 p-8 text-center">
        <div className="mb-4 text-4xl">&#10003;</div>
        <h3 className="mb-2 text-xl font-bold text-[#2D5F3E]">Message Sent!</h3>
        <p className="text-[#4A4A4A]">
          Thanks! We&apos;ll get back to you within 1 business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#4A4A4A]">
          Name <span className="text-[#C46A32]">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full rounded-lg border border-[#4A4A4A]/20 bg-white px-4 py-3 text-[#4A4A4A] transition-colors focus:border-[#2D5F3E] focus:outline-none focus:ring-2 focus:ring-[#2D5F3E]/20"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#4A4A4A]">
          Email <span className="text-[#C46A32]">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full rounded-lg border border-[#4A4A4A]/20 bg-white px-4 py-3 text-[#4A4A4A] transition-colors focus:border-[#2D5F3E] focus:outline-none focus:ring-2 focus:ring-[#2D5F3E]/20"
        />
      </div>

      {/* Company Name */}
      <div>
        <label htmlFor="company" className="mb-2 block text-sm font-medium text-[#4A4A4A]">
          Company Name <span className="text-[#C46A32]">*</span>
        </label>
        <input
          type="text"
          id="company"
          name="company"
          required
          value={formData.company}
          onChange={handleChange}
          className="w-full rounded-lg border border-[#4A4A4A]/20 bg-white px-4 py-3 text-[#4A4A4A] transition-colors focus:border-[#2D5F3E] focus:outline-none focus:ring-2 focus:ring-[#2D5F3E]/20"
        />
      </div>

      {/* Biggest Time-Waster */}
      <div>
        <label htmlFor="timeWaster" className="mb-2 block text-sm font-medium text-[#4A4A4A]">
          Biggest time-waster <span className="text-[#C46A32]">*</span>
        </label>
        <select
          id="timeWaster"
          name="timeWaster"
          required
          value={formData.timeWaster}
          onChange={handleChange}
          className="w-full rounded-lg border border-[#4A4A4A]/20 bg-white px-4 py-3 text-[#4A4A4A] transition-colors focus:border-[#2D5F3E] focus:outline-none focus:ring-2 focus:ring-[#2D5F3E]/20"
        >
          {timeWasterOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Hours Wasted Per Week */}
      <div>
        <label htmlFor="hoursWasted" className="mb-2 block text-sm font-medium text-[#4A4A4A]">
          Hours wasted per week <span className="text-[#C46A32]">*</span>
        </label>
        <select
          id="hoursWasted"
          name="hoursWasted"
          required
          value={formData.hoursWasted}
          onChange={handleChange}
          className="w-full rounded-lg border border-[#4A4A4A]/20 bg-white px-4 py-3 text-[#4A4A4A] transition-colors focus:border-[#2D5F3E] focus:outline-none focus:ring-2 focus:ring-[#2D5F3E]/20"
        >
          {hoursWastedOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#4A4A4A]">
          Tell us more
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your situation in a few sentences"
          className="w-full resize-none rounded-lg border border-[#4A4A4A]/20 bg-white px-4 py-3 text-[#4A4A4A] placeholder:text-[#4A4A4A]/50 transition-colors focus:border-[#2D5F3E] focus:outline-none focus:ring-2 focus:ring-[#2D5F3E]/20"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-[#C46A32] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#a85a2a] disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}
