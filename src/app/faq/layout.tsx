import type { Metadata } from 'next';
import { getFAQPageSchema, getBreadcrumbSchema } from '@/lib/schema';
import { faqCategories } from '@/data/faq';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'FAQ about custom software development in Cookeville, TN. Timelines, process, and support. Straight answers from Summit Studio.',
  alternates: {
    canonical: '/faq',
  },
};

const faqSchema = getFAQPageSchema(faqCategories);
const breadcrumbSchema = getBreadcrumbSchema([
  { name: 'Home', url: 'https://www.summitstudio.dev' },
  { name: 'FAQ', url: 'https://www.summitstudio.dev/faq' },
]);

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD from trusted data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD from trusted data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {children}
    </>
  );
}
