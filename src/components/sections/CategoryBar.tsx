import Link from 'next/link';
import { categoryBarItems } from '@/data/services';

export default function CategoryBar() {
  return (
    <section className="w-full bg-charcoal py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
        {categoryBarItems.map((item) => (
          <Link
            key={item.anchor}
            href={`/services#${item.anchor}`}
            className="group flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
          >
            <span
              className="material-symbols-outlined !text-3xl group-hover:text-accent transition-colors"
              aria-hidden="true"
            >
              {item.icon}
            </span>
            <span className="text-xs font-semibold tracking-wide text-center leading-tight">
              {item.label}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
