import type { Metadata } from 'next';
import { siteConfig } from '@/data/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Privacy policy for Summit Studio. Learn how we collect, use, and protect your information.',
};

export default function PrivacyPage() {
  return (
    <main className="bg-[#FAFAF8]">
      <div className="mx-auto max-w-3xl px-4 py-20 md:py-28">
        <h1 className="mb-8 text-4xl font-bold text-[#2D5F3E] md:text-5xl">Privacy Policy</h1>

        <div className="prose prose-lg max-w-none text-[#4A4A4A]">
          <p className="lead mb-8 text-lg">
            At {siteConfig.name}, we take your privacy seriously. This policy explains how we
            collect, use, and protect your information when you use our website and services.
          </p>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-[#2D5F3E]">1. Information We Collect</h2>
            <p className="mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="mb-4 list-inside list-disc space-y-2">
              <li>
                <strong>Contact form submissions:</strong> Name, email address, company name, and
                any additional information you choose to share about your business needs.
              </li>
              <li>
                <strong>Consultation scheduling:</strong> Information provided when booking a
                consultation through our scheduling system.
              </li>
              <li>
                <strong>Communications:</strong> Records of correspondence when you contact us via
                email or other channels.
              </li>
            </ul>
            <p>
              We also automatically collect certain information when you visit our website,
              including your IP address, browser type, pages visited, and time spent on our site.
              This information is collected through analytics services to help us improve our
              website.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-[#2D5F3E]">
              2. How We Use Your Information
            </h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>Respond to your inquiries and provide requested services</li>
              <li>Schedule and conduct consultations</li>
              <li>Send you information about our services (only with your consent)</li>
              <li>Improve our website and services based on usage patterns</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-[#2D5F3E]">3. Third-Party Services</h2>
            <p className="mb-4">
              We use the following third-party services that may collect information:
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <strong>Calendly:</strong> For scheduling consultations. Calendly has its own
                privacy policy governing how they handle your information.
              </li>
              <li>
                <strong>Analytics services:</strong> To understand how visitors use our website.
                This data is anonymized and aggregated.
              </li>
            </ul>
            <p className="mt-4">
              We do not sell, rent, or share your personal information with third parties for their
              marketing purposes.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-[#2D5F3E]">4. Cookies</h2>
            <p>
              Our website uses minimal cookies, primarily for analytics purposes. These cookies help
              us understand how visitors interact with our site so we can improve the experience.
              You can configure your browser to refuse cookies, though this may affect some website
              functionality.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-[#2D5F3E]">5. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to provide services and
              fulfill the purposes described in this policy. Contact form submissions and
              consultation records are retained for business purposes and to maintain our
              relationship with you. You may request deletion of your data at any time.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-[#2D5F3E]">6. Your Rights</h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="list-inside list-disc space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent where applicable</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us using the information below.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="mb-4 text-2xl font-bold text-[#2D5F3E]">7. Contact Us</h2>
            <p>
              If you have questions about this privacy policy or how we handle your information,
              please contact us at{' '}
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
              We may update this privacy policy from time to time. Any changes will be posted on
              this page with an updated revision date.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
