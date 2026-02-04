import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-offwhite px-4 py-20 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="mb-6 text-4xl font-bold leading-tight text-forest md:text-5xl lg:text-6xl">
          Stop Wasting 20 Hours a Week on Manual Work
        </h1>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-stone md:text-xl">
          Affordable automation built specifically for your business. Save time,
          reduce errors, grow faster. Tennessee-based, transparent pricing, no
          tech jargon.
        </p>
        <Link
          href="/contact"
          className="inline-block rounded-lg bg-accent px-8 py-4 text-lg font-semibold text-white transition-opacity hover:opacity-90"
        >
          Schedule Free Consultation
        </Link>
      </div>
    </section>
  );
}
