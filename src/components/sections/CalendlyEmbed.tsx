'use client';

import { useEffect, useRef } from 'react';
import { trackEvent } from '@/lib/analytics';

const CALENDLY_URL =
  'https://calendly.com/summit-studio/30min?hide_landing_page_details=1&hide_gdpr_banner=1&hide_event_type_details=1&background_color=FAFAF8&text_color=4A4A4A&primary_color=C46A32';

export function CalendlyEmbed() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (e.data?.event === 'calendly.event_scheduled') {
        trackEvent('calendly_meeting_scheduled');
      }
    }

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);

  return (
    <div
      ref={widgetRef}
      className="calendly-inline-widget w-full"
      data-url={CALENDLY_URL}
      style={{ minWidth: '320px', height: '700px' }}
    />
  );
}
