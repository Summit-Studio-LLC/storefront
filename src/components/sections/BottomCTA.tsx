import Link from 'next/link';

export default function BottomCTA() {
  return (
    <section className="bg-forest px-4 py-16 md:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
          Ready to Stop Wasting Time?
        </h2>
        <Link
          href="/contact"
          className="mb-4 inline-block rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white transition-opacity hover:opacity-90"
        >
          Schedule Free Consultation
        </Link>
        <p className="text-white/80">30 minutes. No cost. No pressure. Just answers.</p>
      </div>
    </section>
  );
}
