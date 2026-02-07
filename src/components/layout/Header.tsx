'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks, ctaLink } from '@/data/navigation';
import { siteConfig } from '@/data/site';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close mobile menu when route changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional: sync menu state to route changes
    setIsMobileMenuOpen(false);
  }, [pathname]);

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
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-offwhite/90 border-b border-[#eaf0ee]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 text-forest group">
          <div className="size-8 flex items-center justify-center">
            <span className="material-symbols-outlined text-[32px]" aria-hidden="true">
              landscape
            </span>
          </div>
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
            <Link href={ctaLink.href}>{ctaLink.label}</Link>
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
                  <Link href={ctaLink.href}>{ctaLink.label}</Link>
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
