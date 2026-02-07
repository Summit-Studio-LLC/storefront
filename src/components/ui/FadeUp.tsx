'use client';

import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function FadeUp({
  children,
  className,
  delay = 0,
  threshold = 0.6,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsInView(true);
      return;
    }

    let active = true;
    let timer: ReturnType<typeof setTimeout>;

    const check = () => {
      if (!active) return;
      const rect = el.getBoundingClientRect();
      if (rect.top <= window.innerHeight * threshold) {
        if (delay > 0) {
          timer = setTimeout(() => setIsInView(true), delay);
        } else {
          setIsInView(true);
        }
        active = false;
        window.removeEventListener('scroll', onScroll);
      }
    };

    const onScroll = () => {
      requestAnimationFrame(check);
    };

    requestAnimationFrame(check);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      active = false;
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, [delay, threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out',
        isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        className
      )}
    >
      {children}
    </div>
  );
}
