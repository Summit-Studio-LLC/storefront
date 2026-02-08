import type { Metadata } from 'next';
import Link from 'next/link';
import { siteConfig } from '@/data/site';
import { EmailLink } from '@/components/ui/EmailLink';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Summit Studio website and services.',
};

export default function TermsPage() {
  return (
    <article className="mx-auto w-full max-w-[42rem] px-6 pb-24">
      {/* Header */}
      <header className="mb-12 border-b border-forest/10 pb-10 pt-10">
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-forest">Terms of Service</h1>
        <p className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
          <span className="material-symbols-outlined text-base" aria-hidden="true">
            schedule
          </span>
          Last Updated: February 2026
        </p>
      </header>

      {/* Introduction */}
      <div className="max-w-none">
        <p className="mb-8 text-lg leading-relaxed text-stone">
          Welcome to <span className="font-semibold text-forest">{siteConfig.name}</span>. By
          accessing or using our website and services, you agree to be bound by these Terms of
          Service. Please read them carefully.
        </p>

        {/* Section 1 */}
        <section className="mb-10">
          <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-forest">
            <span className="text-lg font-bold text-accent/40">01.</span>
            Agreement to Terms
          </h3>
          <p className="leading-relaxed text-stone">
            By accessing our website at summitstudio.dev or engaging our services, you agree to
            these Terms of Service and our{' '}
            <Link
              href="/privacy"
              className="font-semibold text-forest decoration-accent decoration-2 underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            . If you do not agree to these terms, you may not access the website or use our
            services. We reserve the right to modify these terms at any time, and your continued use
            of the website constitutes acceptance of any changes.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-forest">
            <span className="text-lg font-bold text-accent/40">02.</span>
            Description of Services
          </h3>
          <p className="mb-4 leading-relaxed text-stone">
            {siteConfig.name} provides custom software development and consulting services for local
            businesses. Our services include but are not limited to:
          </p>
          <ul className="mb-4 list-none space-y-3 pl-0">
            <li className="flex items-start gap-3">
              <span
                className="material-symbols-outlined mt-0.5 text-xl text-accent"
                aria-hidden="true"
              >
                check_circle
              </span>
              <span className="text-stone">Business process automation</span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="material-symbols-outlined mt-0.5 text-xl text-accent"
                aria-hidden="true"
              >
                check_circle
              </span>
              <span className="text-stone">Custom software development</span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="material-symbols-outlined mt-0.5 text-xl text-accent"
                aria-hidden="true"
              >
                check_circle
              </span>
              <span className="text-stone">System integration</span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="material-symbols-outlined mt-0.5 text-xl text-accent"
                aria-hidden="true"
              >
                check_circle
              </span>
              <span className="text-stone">Technical consulting</span>
            </li>
          </ul>
          <p className="leading-relaxed text-stone">
            Specific services, deliverables, timelines, and pricing are defined in individual
            project agreements between {siteConfig.name} and clients.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-forest">
            <span className="text-lg font-bold text-accent/40">03.</span>
            Intellectual Property
          </h3>
          <p className="mb-4 leading-relaxed text-stone">
            <strong className="text-forest">Website Content:</strong> All content on this website,
            including text, graphics, logos, and images, is the property of {siteConfig.name} and is
            protected by copyright and other intellectual property laws. You may not reproduce,
            distribute, or create derivative works from this content without our express written
            permission.
          </p>
          <p className="leading-relaxed text-stone">
            <strong className="text-forest">Client Projects:</strong> Intellectual property rights
            for client projects are governed by individual project agreements. Generally, clients
            retain ownership of custom software developed specifically for them upon full payment.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-forest">
            <span className="text-lg font-bold text-accent/40">04.</span>
            Limitation of Liability
          </h3>
          <p className="mb-4 leading-relaxed text-stone">
            To the maximum extent permitted by law, {siteConfig.name} shall not be liable for any
            indirect, incidental, special, consequential, or punitive damages, including but not
            limited to:
          </p>
          <ul className="mb-4 list-none space-y-3 pl-0">
            <li className="flex items-start gap-3">
              <span
                className="material-symbols-outlined mt-0.5 text-xl text-accent"
                aria-hidden="true"
              >
                check_circle
              </span>
              <span className="text-stone">Loss of profits, data, or business opportunities</span>
            </li>
            <li className="flex items-start gap-3">
              <span
                className="material-symbols-outlined mt-0.5 text-xl text-accent"
                aria-hidden="true"
              >
                check_circle
              </span>
              <span className="text-stone">
                Damages arising from reliance on information provided on this website
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
                Damages arising from interruption or delays in services
              </span>
            </li>
          </ul>
          <div className="rounded-xl border border-forest/10 bg-forest/5 p-6">
            <p className="text-sm italic text-stone">
              Our total liability for any claim arising from our services shall not exceed the
              amount paid by you for the specific service giving rise to the claim.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section className="mb-10">
          <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-forest">
            <span className="text-lg font-bold text-accent/40">05.</span>
            Governing Law
          </h3>
          <p className="leading-relaxed text-stone">
            These Terms of Service shall be governed by and construed in accordance with the laws of
            the State of Tennessee, without regard to its conflict of law provisions. Any disputes
            arising from these terms or our services shall be resolved in the courts located in
            Putnam County, Tennessee.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-10">
          <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-forest">
            <span className="text-lg font-bold text-accent/40">06.</span>
            Changes to Terms
          </h3>
          <p className="leading-relaxed text-stone">
            We reserve the right to modify these Terms of Service at any time. Changes will be
            effective immediately upon posting to this website. We encourage you to review these
            terms periodically. Your continued use of our website or services after changes are
            posted constitutes your acceptance of the modified terms.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-12">
          <h3 className="mb-4 flex items-center gap-3 text-2xl font-bold text-forest">
            <span className="text-lg font-bold text-accent/40">07.</span>
            Contact Us
          </h3>
          <p className="mb-6 leading-relaxed text-stone">
            If you have questions about these Terms of Service, please reach out.
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
