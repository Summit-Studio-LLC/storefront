import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="bg-[#FAFAF8]">
      <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
        <h1 className="mb-4 text-6xl font-bold text-[#2D5F3E] md:text-8xl">404</h1>
        <h2 className="mb-4 text-2xl font-bold text-[#2D5F3E] md:text-3xl">Page Not Found</h2>
        <p className="mb-8 max-w-md text-lg text-[#4A4A4A]">
          Sorry, we couldn&apos;t find what you&apos;re looking for.
        </p>
        <Link
          href="/"
          className="inline-block rounded-lg bg-[#2D5F3E] px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-[#244b31]"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
