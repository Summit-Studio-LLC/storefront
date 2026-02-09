import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { EmailLink } from '@/components/ui/EmailLink';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for Summit Studio. Learn how we collect, use, and protect your information.',
  alternates: {
    canonical: '/privacy',
  },
  robots: {
    index: false,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <article className="mx-auto w-full max-w-[42rem] px-6 pb-24">
      {/* Header */}
      <header className="mb-12 border-b border-forest/10 pb-10 pt-10">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-forest">Privacy Policy</h1>
        <p className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <span className="material-symbols-outlined text-base" aria-hidden="true">
            schedule
          </span>
          Last Updated: February 9, 2026
        </p>
      </header>

      {/* Introduction */}
      <div className="max-w-none">
        <p className="mb-8 text-lg leading-relaxed text-stone">
          At <span className="font-semibold text-forest">{siteConfig.name}</span>, we take your
          privacy seriously. This policy explains how we collect, use, and protect your information
          when you use our website and services.
        </p>

        {/* Section 1 */}
        <section className="mb-10">
          <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-forest">
            <span className="text-lg font-bold text-accent/40">01.</span>
            Information We Collect
          </h3>
          <p className="mb-4 leading-relaxed text-stone">
            We collect information that you provide directly to us, including:
          </p>
          <ul className="mb-4 list-none space-y-3 pl-0">
            <li className="flex items-start gap-3">
              <span
                className="material-symbols-outlined mt-0.5 text-xl text-accent"
                aria-hidden="true"
              >
                check_circle
              </span>
              <span className="text-stone">
                <strong className="text-forest">Contact form submissions:</strong> Name, email
                address, company name, and any additional information you choose to share about your
                business needs.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="material-symbols-outlined mt-0.5 text-xl text-accent"
                aria-hidden="true"
              >
                check_circle
              </span>
              <span className="text-stone">
                <strong className="text-forest">Consultation scheduling:</strong> Information
                provided when booking a consultation through our scheduling system.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="material-symbols-outlined mt-0.5 text-xl text-accent"
                aria-hidden="true"
              >
                check_circle
              </span>
              <span className="text-stone">
                <strong className="text-forest">Communications:</strong> Records of correspondence
                when you contact us via email or other channels.
              </span>
            </li>
          </ul>
          <p className="leading-relaxed text-stone">
            We also automatically collect certain information when you visit our website, including
            your IP address, browser type, pages visited, and time spent on our site. This
            information is collected through analytics services to help us improve our website.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-forest">
            <span className="text-lg font-bold text-accent/40">02.</span>
            How We Use Your Information
          </h3>
          <p className="mb-4 leading-relaxed text-stone">We use the information we collect to:</p>
          <ul className="mb-4 list-none space-y-3 pl-0">
            <li className="flex items-start gap-3">
              <span
                className="material-symbols-outlined mt-0.5 text-xl text-accent"
                aria-hidden="true"
              >
                check_circle
              </span>
              <span className="text-stone">
                Respond to your inquiries and provide requested services
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="material-symbols-outlined mt-0.5 text-xl text-accent"
                aria-hidden="true"
              >
                check_circle
              </span>
              <span className="text-stone">Schedule and conduct consultations</span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="material-symbols-outlined mt-0.5 text-xl text-accent"
                aria-hidden="true"
              >
                check_circle
              </span>
              <span className="text-stone">
                Send you information about our services (only with your consent)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="material-symbols-outlined mt-0.5 text-xl text-accent"
                aria-hidden="true"
              >
                check_circle
              </span>
              <span className="text-stone">
                Improve our website and services based on usage patterns
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="material-symbols-outlined mt-0.5 text-xl text-accent"
                aria-hidden="true"
              >
                check_circle
              </span>
              <span className="text-stone">
                Monitor and resolve technical errors on our website
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="material-symbols-outlined mt-0.5 text-xl text-accent"
                aria-hidden="true"
              >
                check_circle
              </span>
              <span className="text-stone">Comply with legal obligations</span>
            </li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-forest">
            <span className="text-lg font-bold text-accent/40">03.</span>
            Third-Party Services
          </h3>
          <p className="mb-4 leading-relaxed text-stone">
            We use the following third-party services that may collect or process information:
          </p>
          <ul className="mb-4 list-none space-y-3 pl-0">
            <li className="flex items-start gap-3">
              <span
                className="material-symbols-outlined mt-0.5 text-xl text-accent"
                aria-hidden="true"
              >
                check_circle
              </span>
              <span className="text-stone">
                <strong className="text-forest">Calendly:</strong> For scheduling consultations.
                Calendly has its own privacy policy governing how they handle your information.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="material-symbols-outlined mt-0.5 text-xl text-accent"
                aria-hidden="true"
              >
                check_circle
              </span>
              <span className="text-stone">
                <strong className="text-forest">Google Analytics:</strong> To understand how
                visitors use our website, including pages visited, time on site, and general traffic
                patterns. This data is anonymized and aggregated.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="material-symbols-outlined mt-0.5 text-xl text-accent"
                aria-hidden="true"
              >
                check_circle
              </span>
              <span className="text-stone">
                <strong className="text-forest">Vercel Analytics:</strong> For website performance
                monitoring and usage metrics. Data is collected in aggregate form.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="material-symbols-outlined mt-0.5 text-xl text-accent"
                aria-hidden="true"
              >
                check_circle
              </span>
              <span className="text-stone">
                <strong className="text-forest">Sentry:</strong> For error tracking and performance
                monitoring. Sentry may collect technical data including browser information, error
                details, and anonymized session replays to help us identify and fix issues on our
                website.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="material-symbols-outlined mt-0.5 text-xl text-accent"
                aria-hidden="true"
              >
                check_circle
              </span>
              <span className="text-stone">
                <strong className="text-forest">Resend:</strong> For delivering emails submitted
                through our contact form. Resend processes your email address and message content to
                facilitate delivery.
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="material-symbols-outlined mt-0.5 text-xl text-accent"
                aria-hidden="true"
              >
                check_circle
              </span>
              <span className="text-stone">
                <strong className="text-forest">Vercel:</strong> Our website hosting provider.
                Vercel may process standard server logs including IP addresses and request data.
              </span>
            </li>
          </ul>
          <p className="leading-relaxed text-stone">
            We do not sell, rent, or share your personal information with third parties for their
            marketing purposes. Each third-party service listed above has its own privacy policy
            governing their handling of data.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-forest">
            <span className="text-lg font-bold text-accent/40">04.</span>
            Cookies
          </h3>
          <p className="leading-relaxed text-stone">
            Our website uses minimal cookies, primarily for analytics purposes. These cookies help
            us understand how visitors interact with our site so we can improve the experience. You
            can configure your browser to refuse cookies, though this may affect some website
            functionality.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-forest">
            <span className="text-lg font-bold text-accent/40">05.</span>
            Data Retention
          </h3>
          <p className="leading-relaxed text-stone">
            We retain your personal information only for as long as necessary to fulfill the
            purposes described in this policy. Contact form submissions and correspondence are
            retained for the duration of any business relationship and for a reasonable period
            afterward to address follow-up inquiries. Analytics data is retained in anonymized,
            aggregated form. You may request deletion of your personal information at any time by
            contacting us.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-forest">
            <span className="text-lg font-bold text-accent/40">06.</span>
            Data Security
          </h3>
          <p className="mb-4 leading-relaxed text-stone">
            We take reasonable measures to help protect information about you from loss, theft,
            misuse and unauthorized access, disclosure, alteration and destruction. All sensitive
            data is encrypted using industry-standard protocols (SSL/TLS).
          </p>
          <div className="rounded-xl border border-forest/10 bg-forest/5 p-6">
            <p className="text-sm italic text-stone">
              &ldquo;While we strive to use commercially acceptable means to protect your Personal
              Data, we cannot guarantee its absolute security.&rdquo;
            </p>
          </div>
        </section>

        {/* Section 7 */}
        <section className="mb-10">
          <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-forest">
            <span className="text-lg font-bold text-accent/40">07.</span>
            Children&apos;s Privacy
          </h3>
          <p className="leading-relaxed text-stone">
            Our website and services are not directed to children under 13. We do not knowingly
            collect personal information from children under 13. If you believe we have
            inadvertently collected such information, please contact us and we will promptly delete
            it.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-10">
          <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-forest">
            <span className="text-lg font-bold text-accent/40">08.</span>
            Your Rights
          </h3>
          <p className="mb-4 leading-relaxed text-stone">You have the right to:</p>
          <ul className="mb-4 list-none space-y-3 pl-0">
            <li className="flex items-start gap-3">
              <span
                className="material-symbols-outlined mt-0.5 text-xl text-accent"
                aria-hidden="true"
              >
                check_circle
              </span>
              <span className="text-stone">Access the personal information we hold about you</span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="material-symbols-outlined mt-0.5 text-xl text-accent"
                aria-hidden="true"
              >
                check_circle
              </span>
              <span className="text-stone">Request correction of inaccurate information</span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="material-symbols-outlined mt-0.5 text-xl text-accent"
                aria-hidden="true"
              >
                check_circle
              </span>
              <span className="text-stone">Request deletion of your personal information</span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="material-symbols-outlined mt-0.5 text-xl text-accent"
                aria-hidden="true"
              >
                check_circle
              </span>
              <span className="text-stone">Opt out of marketing communications</span>
            </li>
          </ul>
          <p className="leading-relaxed text-stone">
            To exercise any of these rights, please contact us using the information below.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-10">
          <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-forest">
            <span className="text-lg font-bold text-accent/40">09.</span>
            Changes to This Policy
          </h3>
          <p className="leading-relaxed text-stone">
            We may update this Privacy Policy from time to time to reflect changes in our practices
            or for other operational, legal, or regulatory reasons. The updated policy will be
            posted on this page with a revised &ldquo;Last Updated&rdquo; date. We encourage you to
            review this policy periodically. Your continued use of our website after changes are
            posted constitutes your acceptance of the updated policy.
          </p>
        </section>

        {/* Section 10 */}
        <section className="mb-12">
          <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-forest">
            <span className="text-lg font-bold text-accent/40">10.</span>
            Contact Us
          </h3>
          <p className="mb-6 leading-relaxed text-stone">
            If you have questions about this Privacy Policy or how we handle your information,
            please reach out.
          </p>
          <EmailLink email="legal@summitstudio.dev" label="Email Us" />
        </section>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 flex items-center justify-between border-t border-forest/10 pt-8">
        <span className="text-sm text-muted-foreground">Have more questions?</span>
        <Link
          href="/contact"
          className="text-sm font-semibold text-forest transition-colors hover:text-accent"
        >
          Contact Us
        </Link>
      </div>
    </article>
  );
}
