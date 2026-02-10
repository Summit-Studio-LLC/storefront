'use client';

import { techStack } from '@/data/services';

export default function TechMarquee() {
  // Split techStack into two roughly equal rows
  const midpoint = Math.ceil(techStack.length / 2);
  const row1 = techStack.slice(0, midpoint);
  const row2 = techStack.slice(midpoint);

  return (
    <section className="w-full py-20 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <p className="text-sm font-bold tracking-wider uppercase text-accent mb-3">
          Need help on an existing project?
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-forest">We&apos;ve got your stack.</h2>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Gradient masks on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-offwhite to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-offwhite to-transparent z-10 pointer-events-none" />

        {/* Row 1 — scrolls left */}
        <div className="flex gap-8 mb-4 group hover:[animation-play-state:paused]">
          <div className="flex gap-8 animate-marquee-left group-hover:[animation-play-state:paused] shrink-0">
            {row1.map((tech) => (
              <span key={tech} className="text-stone/40 text-lg font-medium whitespace-nowrap">
                {tech}
              </span>
            ))}
          </div>
          <div
            className="flex gap-8 animate-marquee-left group-hover:[animation-play-state:paused] shrink-0"
            aria-hidden="true"
          >
            {row1.map((tech) => (
              <span
                key={`${tech}-dup`}
                className="text-stone/40 text-lg font-medium whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right */}
        <div className="flex gap-8 group hover:[animation-play-state:paused]">
          <div className="flex gap-8 animate-marquee-right group-hover:[animation-play-state:paused] shrink-0">
            {row2.map((tech) => (
              <span key={tech} className="text-stone/40 text-lg font-medium whitespace-nowrap">
                {tech}
              </span>
            ))}
          </div>
          <div
            className="flex gap-8 animate-marquee-right group-hover:[animation-play-state:paused] shrink-0"
            aria-hidden="true"
          >
            {row2.map((tech) => (
              <span
                key={`${tech}-dup`}
                className="text-stone/40 text-lg font-medium whitespace-nowrap"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
