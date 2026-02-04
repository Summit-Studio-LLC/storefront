'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks, ctaLink } from '@/data/navigation';
import { siteConfig } from '@/data/site';
import { cn } from '@/lib/utils';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full bg-white transition-shadow duration-200',
        isScrolled && 'shadow-md'
      )}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:h-16 md:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-semibold text-forest md:text-xl"
        >
          {siteConfig.name}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-forest',
                pathname === link.href
                  ? 'text-forest'
                  : 'text-stone'
              )}
            >
              {link.label}
              {pathname === link.href && (
                <span className="mt-1 block h-0.5 bg-forest" />
              )}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Link
          href={ctaLink.href}
          className="hidden rounded-md bg-forest px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 md:inline-block"
        >
          {ctaLink.label}
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center text-stone md:hidden"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <nav className="mx-auto max-w-6xl px-4 py-4">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'block rounded-md px-3 py-2 text-sm font-medium transition-colors',
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
                <Link
                  href={ctaLink.href}
                  className="block rounded-md bg-forest px-3 py-2 text-center text-sm font-medium text-white"
                >
                  {ctaLink.label}
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
