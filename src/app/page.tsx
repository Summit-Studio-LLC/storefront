import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import { getWebSiteSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Summit Studio | Custom Software for Local Business',
  description:
    'Custom software development in Cookeville, TN. We build workflow automation, scheduling systems, and dashboards for small businesses. Save 20+ hours per week. Transparent fixed pricing.',
  alternates: {
    canonical: '/',
  },
};

const webSiteSchema = getWebSiteSchema();

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static JSON-LD from trusted data
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <Hero />
      <Services />
    </>
  );
}
