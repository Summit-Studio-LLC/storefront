import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of service for Summit Studio website and services.',
};

export default function TermsPage() {
  return (
    <main className="bg-[#FAFAF8]">
      <div className="mx-auto max-w-3xl px-4 py-20 md:py-28">
        <h1 className="mb-8 text-4xl font-bold text-[#2D5F3E] md:text-5xl">Terms of Service</h1>

        <div className="prose prose-lg max-w-none text-[#4A4A4A]">
          <p className="lead mb-8 text-lg">
            Welcome to {siteConfig.name}. By accessing or using our website and services, you agree
            to be bound by these Terms of Service. Please read them carefully.
          </p>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-[#2D5F3E]">1. Agreement to Terms</h2>
            <p>
              By accessing our website at summitstudio.dev or engaging our services, you agree to
              these Terms of Service and our Privacy Policy. If you do not agree to these terms, you
              may not access the website or use our services. We reserve the right to modify these
              terms at any time, and your continued use of the website constitutes acceptance of any
              changes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-[#2D5F3E]">2. Description of Services</h2>
            <p className="mb-4">
              {siteConfig.name} provides custom software development and consulting services for
              local businesses. Our services include but are not limited to:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>Business process automation</li>
              <li>Custom software development</li>
              <li>System integration</li>
              <li>Technical consulting</li>
            </ul>
            <p className="mt-4">
              Specific services, deliverables, timelines, and pricing are defined in individual
              project agreements between {siteConfig.name} and clients.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-[#2D5F3E]">3. Intellectual Property</h2>
            <p className="mb-4">
              <strong>Website Content:</strong> All content on this website, including text,
              graphics, logos, and images, is the property of {siteConfig.name} and is protected by
              copyright and other intellectual property laws. You may not reproduce, distribute, or
              create derivative works from this content without our express written permission.
            </p>
            <p>
              <strong>Client Projects:</strong> Intellectual property rights for client projects are
              governed by individual project agreements. Generally, clients retain ownership of
              custom software developed specifically for them upon full payment.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-[#2D5F3E]">4. Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, {siteConfig.name} shall not be liable for any
              indirect, incidental, special, consequential, or punitive damages, including but not
              limited to:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>Loss of profits, data, or business opportunities</li>
              <li>Damages arising from reliance on information provided on this website</li>
              <li>Damages arising from interruption or delays in services</li>
            </ul>
            <p className="mt-4">
              Our total liability for any claim arising from our services shall not exceed the
              amount paid by you for the specific service giving rise to the claim.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-[#2D5F3E]">5. Governing Law</h2>
            <p>
              These Terms of Service shall be governed by and construed in accordance with the laws
              of the State of Tennessee, without regard to its conflict of law provisions. Any
              disputes arising from these terms or our services shall be resolved in the courts
              located in Putnam County, Tennessee.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-[#2D5F3E]">6. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be
              effective immediately upon posting to this website. We encourage you to review these
              terms periodically. Your continued use of our website or services after changes are
              posted constitutes your acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-[#2D5F3E]">7. Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us at{' '}
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-[#2D5F3E] underline hover:no-underline"
              >
                {siteConfig.email}
              </a>
              .
            </p>
          </section>

          <section className="rounded-lg border border-[#4A4A4A]/10 bg-white p-6">
            <p className="text-sm text-[#4A4A4A]/70">
              <strong>Last Updated:</strong> February 2026
            </p>
            <p className="mt-2 text-sm text-[#4A4A4A]/70">
              These terms were last updated on the date above. We recommend checking this page
              periodically for any changes.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
