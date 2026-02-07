import type { Metadata } from 'next';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';

export const metadata: Metadata = {
  title: 'Summit Studio | Custom Software for Local Business',
  description:
    'We design and build custom automation tools to help you scale without the chaos. Reach the summit of your efficiency.',
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
    </>
  );
}
