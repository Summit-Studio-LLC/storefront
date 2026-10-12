import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { footerLinks } from '@/data/navigation';
import { EmailLink } from '@/components/ui/EmailLink';
import { Logo } from '@/components/ui/Logo';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-offwhite border-t border-gray-200 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 text-forest mb-4">
              <Logo className="size-6" />
              <span className="font-bold text-lg">{siteConfig.name}</span>
            </div>
            <p className="text-stone text-sm leading-relaxed mb-4">
              Custom software for small businesses tired of manual work. Based in{' '}
              {siteConfig.location}.
            </p>
            <EmailLink email={siteConfig.email} size="sm" />
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-forest mb-4">Services</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-stone hover:text-accent text-sm transition-all duration-200 inline-block hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-forest mb-4">Company</h4>
            <ul className="flex flex-col gap-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-stone hover:text-accent text-sm transition-all duration-200 inline-block hover:translate-x-1"
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
                    className="text-stone hover:text-accent text-sm transition-all duration-200 inline-block hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8">
          <p className="text-stone text-sm text-center">
            &copy; {currentYear} {siteConfig.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
