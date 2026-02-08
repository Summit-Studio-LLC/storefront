import { cn } from '@/lib/utils';

interface EmailLinkProps {
  email: string;
  label?: string;
  size?: 'sm' | 'default';
  className?: string;
}

export function EmailLink({
  email,
  label = 'Get in touch',
  size = 'default',
  className,
}: EmailLinkProps) {
  return (
    <a
      href={`mailto:${email}`}
      className={cn(
        'group inline-flex items-center border border-forest/10 bg-forest/5 transition-all duration-300 hover:border-accent/30 hover:shadow-sm',
        size === 'default' ? 'gap-4 rounded-xl p-5' : 'gap-3 rounded-lg px-4 py-3',
        className
      )}
    >
      <div
        className={cn(
          'flex items-center justify-center rounded-md bg-white text-forest shadow-sm transition-colors duration-300 group-hover:bg-accent group-hover:text-white',
          size === 'default' ? 'size-10 rounded-lg' : 'size-8'
        )}
      >
        <span
          className={cn(
            'material-symbols-outlined',
            size === 'default' ? 'text-[20px]' : 'text-[18px]'
          )}
          aria-hidden="true"
        >
          mail
        </span>
      </div>
      <div className="flex flex-col">
        <span
          className={cn(
            'font-semibold uppercase tracking-wider text-stone/60',
            size === 'default' ? 'text-xs' : 'text-[11px]'
          )}
        >
          {label}
        </span>
        <span className="underline-center font-bold text-forest">{email}</span>
      </div>
    </a>
  );
}
