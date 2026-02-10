'use client';

import { useEffect, useState } from 'react';

interface ServiceNavItem {
  slug: string;
  icon: string;
  title: string;
}

interface ServiceSideNavProps {
  items: ServiceNavItem[];
}

export default function ServiceSideNav({ items }: ServiceSideNavProps) {
  const [activeSlug, setActiveSlug] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const sectionEls = items
      .map((item) => document.getElementById(item.slug))
      .filter(Boolean) as HTMLElement[];

    if (sectionEls.length === 0) return;

    // Scroll-based visibility — show nav only while container is on screen
    const container = document.getElementById('service-details-container');
    const checkVisibility = () => {
      if (!container) return;
      const rect = container.getBoundingClientRect();
      // Show when container top is above 80% of viewport AND bottom is still below 200px
      const show = rect.top < window.innerHeight * 0.8 && rect.bottom > 200;
      setIsVisible(show);
    };
    checkVisibility();
    window.addEventListener('scroll', checkVisibility, { passive: true });

    // Active tracker — controls which nav item is highlighted
    const activeSections = new Set<string>();
    const activeObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeSections.add(entry.target.id);
          } else {
            activeSections.delete(entry.target.id);
          }
        }
        if (activeSections.size > 0) {
          const lastVisible = [...items].reverse().find((item) => activeSections.has(item.slug));
          if (lastVisible) {
            setActiveSlug(lastVisible.slug);
          }
        }
      },
      { threshold: 0, rootMargin: '0px 0px -75% 0px' }
    );

    for (const el of sectionEls) {
      activeObserver.observe(el);
    }

    return () => {
      window.removeEventListener('scroll', checkVisibility);
      activeObserver.disconnect();
    };
  }, [items]);

  const handleClick = (slug: string) => {
    const el = document.getElementById(slug);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav
      className={`fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-1 transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-label="Service sections"
    >
      {items.map((item) => (
        <button
          key={item.slug}
          type="button"
          onClick={() => handleClick(item.slug)}
          className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-left text-sm transition-all ${
            activeSlug === item.slug
              ? 'bg-forest/10 text-forest font-bold'
              : 'text-stone/50 hover:text-stone hover:bg-stone/5'
          }`}
        >
          <span className="material-symbols-outlined text-base" aria-hidden="true">
            {item.icon}
          </span>
          <span className="hidden xl:inline">{item.title}</span>
        </button>
      ))}
    </nav>
  );
}
