import { track } from '@vercel/analytics';

export function trackEvent(name: string, properties?: Record<string, string | number | boolean>) {
  try {
    track(name, properties);
  } catch {
    // Silent failure — analytics should never break the app
  }

  try {
    window.gtag?.('event', name, properties);
  } catch {
    // Silent failure
  }
}
