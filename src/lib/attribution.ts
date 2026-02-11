const STORAGE_KEY = 'ss_attribution';

export interface Attribution {
  landingPage: string;
  referrer: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  utmTerm: string;
  utmContent: string;
}

const empty: Attribution = {
  landingPage: '',
  referrer: '',
  utmSource: '',
  utmMedium: '',
  utmCampaign: '',
  utmTerm: '',
  utmContent: '',
};

/**
 * Capture attribution data from the current URL on first pageview.
 * Call this once in a root client component or layout effect.
 * Only writes on the first visit in a session — subsequent navigations don't overwrite.
 */
export function captureAttribution(): void {
  if (typeof window === 'undefined') return;

  try {
    // Don't overwrite if we already captured this session
    if (sessionStorage.getItem(STORAGE_KEY)) return;

    const params = new URLSearchParams(window.location.search);

    const data: Attribution = {
      landingPage: window.location.pathname + window.location.search,
      referrer: document.referrer,
      utmSource: params.get('utm_source') ?? '',
      utmMedium: params.get('utm_medium') ?? '',
      utmCampaign: params.get('utm_campaign') ?? '',
      utmTerm: params.get('utm_term') ?? '',
      utmContent: params.get('utm_content') ?? '',
    };

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // sessionStorage may be unavailable (private browsing, etc.)
  }
}

/**
 * Retrieve stored attribution data for the current session.
 */
export function getAttribution(): Attribution {
  if (typeof window === 'undefined') return empty;

  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return empty;
    return JSON.parse(raw) as Attribution;
  } catch {
    return empty;
  }
}
