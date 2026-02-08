import { cn } from '@/lib/utils';

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 515 446"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('size-10', className)}
      aria-hidden="true"
    >
      <path d="M370.999 196.5L370.973 196.544L514.997 446H0L144.023 196.543L143.999 196.5L255.314 3.78125L257.499 0L370.999 196.5ZM91.7988 393H257.499L174.63 249.531L91.7988 393ZM257.499 393H423.198L340.366 249.532L257.499 393ZM203 202.5L256.5 292L310 202.5L256.5 113L203 202.5Z" />
    </svg>
  );
}
