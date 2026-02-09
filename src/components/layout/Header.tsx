'use client';

import { Button } from '@/components/ui/button';
import { Logo } from '@/components/ui/Logo';
import { ctaLink, navLinks } from '@/data/navigation';
import { siteConfig } from '@/data/site';
import { trackEvent } from '@/lib/analytics';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const lastScrollY = useRef(0);
  const isHidden = useRef(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: sync menu state to route changes
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Hide on scroll down, show on scroll up — uses refs + direct DOM to avoid React batching issues
  useEffect(() => {
    let ticking = false;

    function setHeaderVisible(visible: boolean) {
      if (isHidden.current === !visible) return; // no change
      isHidden.current = !visible;
      if (headerRef.current) {
        headerRef.current.style.transform = visible ? 'translateY(0)' : 'translateY(-100%)';
      }
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const lastY = lastScrollY.current;
        const delta = currentY - lastY;

        if (currentY < 50) {
          setHeaderVisible(true);
        } else if (delta > 5) {
          setHeaderVisible(false);
        } else if (delta < -5) {
          setHeaderVisible(true);
        }

        lastScrollY.current = currentY;
        ticking = false;
      });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Force header visible when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen && headerRef.current) {
      isHidden.current = false;
      headerRef.current.style.transform = 'translateY(0)';
    }
  }, [isMobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsMobileMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isMobileMenuOpen, handleKeyDown]);

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 w-full backdrop-blur-md bg-offwhite/90 border-b border-[#eaf0ee] transition-transform duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 text-forest group">
          <Logo />
          <span className="text-forest text-xl font-bold tracking-tight">{siteConfig.name}</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  'text-sm font-semibold transition-colors hover:text-accent',
                  pathname === link.href ? 'text-accent' : 'text-forest'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button variant="cta" asChild>
            <Link
              href={ctaLink.href}
              onClick={() => trackEvent('cta_click', { location: 'header_desktop' })}
            >
              {ctaLink.label}
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-forest"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span className="material-symbols-outlined" aria-hidden="true">
            {isMobileMenuOpen ? 'close' : 'menu'}
          </span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
          className="border-t border-[#eaf0ee] bg-offwhite/95 backdrop-blur-md md:hidden"
        >
          <nav className="max-w-7xl mx-auto px-6 py-4">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={cn(
                      'block rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors',
                      pathname === link.href
                        ? 'bg-forest/10 text-forest'
                        : 'text-stone hover:bg-gray-50'
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Button variant="cta" className="w-full" asChild>
                  <Link
                    href={ctaLink.href}
                    onClick={() => trackEvent('cta_click', { location: 'header_mobile' })}
                  >
                    {ctaLink.label}
                  </Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
