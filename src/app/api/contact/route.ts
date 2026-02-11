import * as Sentry from '@sentry/nextjs';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface Attribution {
  landingPage?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmTerm?: string;
  utmContent?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  message: string;
  attribution?: Attribution | null;
}

function formatAttribution(attr: Attribution | null | undefined): string {
  if (!attr) return 'No attribution data';

  const lines: string[] = [];

  if (attr.landingPage) lines.push(`Landing Page: ${attr.landingPage}`);
  if (attr.referrer) lines.push(`Referrer: ${attr.referrer}`);
  if (attr.utmSource) lines.push(`Source: ${attr.utmSource}`);
  if (attr.utmMedium) lines.push(`Medium: ${attr.utmMedium}`);
  if (attr.utmCampaign) lines.push(`Campaign: ${attr.utmCampaign}`);
  if (attr.utmTerm) lines.push(`Term: ${attr.utmTerm}`);
  if (attr.utmContent) lines.push(`Content: ${attr.utmContent}`);

  return lines.length > 0 ? lines.join('\n') : 'Direct visit (no UTM params)';
}

export async function POST(request: Request) {
  try {
    const body: ContactFormData = await request.json();

    const { name, email, company, message, attribution } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'Summit Studio <contact@summitstudio.dev>',
      to: 'contact@summitstudio.dev',
      subject: `New Contact Form: ${name} from ${company || 'N/A'}`,
      replyTo: email,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || 'Not provided'}`,
        '',
        'Message:',
        message,
        '',
        '--- Attribution ---',
        formatAttribution(attribution),
      ].join('\n'),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    Sentry.captureException(error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}
