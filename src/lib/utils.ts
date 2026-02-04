import clsx, { ClassValue } from 'clsx';

/**
 * Utility function for merging Tailwind CSS classes.
 * Uses clsx to conditionally join class names.
 */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
