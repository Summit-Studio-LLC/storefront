import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { footerLinks } from '@/data/navigation';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-offwhite border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-forest mb-4">
              <span className="material-symbols-outlined" aria-hidden="true">
                landscape
              </span>
              <span className="font-bold text-lg">{siteConfig.name}</span>
            </div>
            <p className="text-stone text-sm leading-relaxed">
              Helping businesses reach their peak potential through intelligent automation and
              design.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-forest mb-4">Company</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-stone hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-forest mb-4">Resources</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-stone hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-forest mb-4">Legal</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-stone hover:text-accent text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-stone text-sm">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <button
              type="button"
              className="text-stone hover:text-forest transition-colors"
              aria-label="Share"
            >
              <span className="material-symbols-outlined text-xl" aria-hidden="true">
                share
              </span>
            </button>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-stone hover:text-forest transition-colors"
            >
              <span className="material-symbols-outlined text-xl" aria-hidden="true">
                mail
              </span>
              <span className="sr-only">Email us</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
