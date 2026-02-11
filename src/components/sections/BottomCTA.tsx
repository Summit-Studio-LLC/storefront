import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function BottomCTA() {
  return (
    <section className="relative bg-forest px-6 py-24 overflow-hidden">
      {/* Grain texture overlay */}
      <div className="absolute inset-0 bg-grain opacity-30 pointer-events-none" />

      <div className="relative mx-auto max-w-3xl text-center">
        <h2 className="font-serif text-4xl md:text-5xl text-white mb-6">
          Ready to Stop Wasting Time?
        </h2>
        <div className="mb-6">
          <Button
            variant="cta"
            size="lg"
            asChild
            className="text-lg px-10 py-4 shadow-lg hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
          >
            <Link href="/contact">Schedule Free Consultation</Link>
          </Button>
        </div>
        <p className="text-white/80 text-lg">30 minutes. No cost. No pressure. Just answers.</p>
      </div>
    </section>
  );
}
