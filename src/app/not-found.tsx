import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center px-4 py-20">
      <div className="flex max-w-[720px] flex-col items-center gap-8 text-center">
        <div className="flex flex-col items-center gap-2">
          <h1 className="animate-fade-in-up select-none font-serif text-[120px] leading-none tracking-tighter text-forest opacity-90 sm:text-[180px]">
            404
          </h1>
          <h2
            className="animate-fade-in-up max-w-[560px] font-serif text-3xl leading-tight text-forest sm:text-5xl"
            style={{ animationDelay: '150ms' }}
          >
            Looks like you&apos;ve wandered off the trail.
          </h2>
          <p
            className="animate-fade-in-up mt-4 max-w-[480px] text-base leading-relaxed text-stone sm:text-lg"
            style={{ animationDelay: '300ms' }}
          >
            The page you&apos;re looking for doesn&apos;t exist or has been moved. Even experienced
            climbers lose their way sometimes.
          </p>
        </div>

        <div className="animate-fade-in-up pt-4" style={{ animationDelay: '450ms' }}>
          <Button
            variant="cta"
            size="lg"
            asChild
            className="group hover:bg-[#cf7540] hover:shadow-lg"
          >
            <Link href="/">
              <span
                className="material-symbols-outlined text-[20px] transition-transform duration-200 group-hover:-translate-x-1"
                aria-hidden="true"
              >
                arrow_back
              </span>
              <span>Back to the Trailhead</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
