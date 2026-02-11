import type { Metadata } from 'next';
import { AssessmentFlow } from '@/components/sections/AssessmentFlow';

export const metadata: Metadata = {
  title: 'Technology Readiness Assessment',
  description:
    'Take a 2-minute assessment to get your personalized technology readiness score. See where custom software could help your business — free, no signup required.',
  openGraph: {
    title: 'How Ready Is Your Business for Custom Software?',
    description:
      'Take a 2-minute assessment. Get a personalized readiness score and see exactly where technology could help.',
  },
};

export default function AssessPage() {
  return <AssessmentFlow />;
}
