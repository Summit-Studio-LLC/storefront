import * as Sentry from '@sentry/nextjs';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

interface CareersFormData {
  name: string;
  email: string;
  track: string;
  role: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const body: CareersFormData = await request.json();

    const { name, email, track, role, message } = body;

    if (!name || !email || !track) {
      return NextResponse.json({ error: 'Name, email, and track are required.' }, { status: 400 });
    }

    await resend.emails.send({
      from: 'Summit Studio <contact@summitstudio.dev>',
      to: 'contact@summitstudio.dev',
      subject: `Careers Interest: ${name} — ${track}`,
      replyTo: email,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Track: ${track}`,
        `School / Current Role: ${role || 'Not provided'}`,
        '',
        'Message:',
        message || 'No message provided.',
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
