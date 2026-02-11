'use client';

import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ProcessStepData {
  phase: string;
  title: string;
  icon: string;
  description: string;
}

const processSteps: ProcessStepData[] = [
  {
    phase: '01',
    title: 'Discovery',
    icon: 'explore',
    description:
      'We start by mapping the terrain of your current operations. We identify bottlenecks, gather data, and understand the unique landscape of your business challenges.',
  },
  {
    phase: '02',
    title: 'Strategy',
    icon: 'map',
    description:
      'Planning the route. We design a comprehensive automation roadmap, selecting the right tools and defining the architecture needed to reach your goals safely.',
  },
  {
    phase: '03',
    title: 'Implementation',
    icon: 'construction',
    description:
      'Building the tools. Our team builds your custom systems, integrating APIs and workflows with precision engineering.',
  },
  {
    phase: '04',
    title: 'Optimization',
    icon: 'monitoring',
    description:
      "Refining the view. We don't just launch and leave. We monitor performance, gather metrics, and fine-tune the system for peak efficiency.",
  },
];

function TrailStep({ step, index }: { step: ProcessStepData; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const isLeft = index % 2 === 0;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsInView(true);
      return;
    }

    // Trigger line at 60% down the viewport. Fires once the element's
    // top edge scrolls above that line — works for elements already on
    // screen at load AND ones that scroll in from below.
    let active = true;

    const check = () => {
      if (!active) return;
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight * 0.6) {
        setIsInView(true);
        active = false;
        window.removeEventListener('scroll', onScroll);
      }
    };

    const onScroll = () => {
      requestAnimationFrame(check);
    };

    // Check immediately on mount
    requestAnimationFrame(check);

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      active = false;
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="col-span-1 md:col-span-12 grid grid-cols-[60px_1fr] md:grid-cols-12 gap-4 md:gap-0 items-center"
    >
      {/* Icon Circle */}
      <div className="flex justify-center order-1 md:order-2 md:col-start-6 md:col-span-2">
        <div
          className={cn(
            'flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border shadow-sm z-10 transition-all duration-500',
            isInView ? 'scale-110 border-accent' : 'border-gray-200'
          )}
        >
          <span className="material-symbols-outlined text-forest md:text-3xl">{step.icon}</span>
        </div>
      </div>

      {/* Content Card */}
      {isLeft ? (
        <>
          <div
            className={cn(
              'md:col-start-1 md:col-span-5 order-2 md:order-1 md:text-right md:pr-12 transition-all duration-700 ease-out',
              isInView ? 'opacity-100 md:translate-x-4' : 'opacity-0 md:-translate-x-4'
            )}
          >
            <div
              className={cn(
                'bg-white p-6 md:p-8 rounded-xl border border-gray-100 transition-shadow duration-700',
                isInView ? 'shadow-md' : 'shadow-sm'
              )}
            >
              <span className="text-sm font-bold text-accent mb-2 block tracking-wider uppercase">
                Phase {step.phase}
              </span>
              <h3 className="text-2xl font-serif text-forest mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          </div>
          <div className="hidden md:block md:col-span-5 order-3" />
        </>
      ) : (
        <>
          <div className="hidden md:block md:col-span-5 order-1" />
          <div
            className={cn(
              'md:col-start-8 md:col-span-5 order-2 md:order-3 md:pl-12 transition-all duration-700 ease-out',
              isInView ? 'opacity-100 md:-translate-x-4' : 'opacity-0 md:translate-x-4'
            )}
          >
            <div
              className={cn(
                'bg-white p-6 md:p-8 rounded-xl border border-gray-100 transition-shadow duration-700',
                isInView ? 'shadow-md' : 'shadow-sm'
              )}
            >
              <span className="text-sm font-bold text-accent mb-2 block tracking-wider uppercase">
                Phase {step.phase}
              </span>
              <h3 className="text-2xl font-serif text-forest mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function ProcessTrail() {
  return (
    <section className="relative max-w-[1120px] mx-auto px-4 pb-32">
      {/* Vertical Dashed Line (The Trail) */}
      <div className="absolute left-[calc(1rem+30px)] md:left-1/2 top-0 bottom-32 w-px trail-line z-0 md:-translate-x-1/2 opacity-60" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-y-16 md:gap-y-24 relative z-10">
        {processSteps.map((step, index) => (
          <TrailStep key={step.phase} step={step} index={index} />
        ))}
      </div>
    </section>
  );
}
