import * as Sentry from '@sentry/nextjs';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { getTier, getRecommendations, getPersonalizedSummary, maxScore } from '@/data/assessment';

const resend = new Resend(process.env.RESEND_API_KEY);

interface AssessmentPayload {
  name: string;
  email: string;
  company?: string;
  score: number;
  tags: string[];
  tier: string;
}

function buildReportEmail(data: AssessmentPayload): string {
  const tier = getTier(data.score);
  const recommendations = getRecommendations(data.tags);
  const summary = getPersonalizedSummary(data.tags);

  const lines: string[] = [
    `YOUR TECHNOLOGY READINESS SCORE: ${data.score}/${maxScore}`,
    `Tier: ${tier.label} — ${tier.headline}`,
    '',
    tier.description,
    '',
    '---',
    '',
    'WHAT THIS MEANS FOR YOU',
    '',
    summary,
    '',
    '---',
    '',
    'RECOMMENDED SERVICES',
    '',
  ];

  for (const rec of recommendations) {
    lines.push(`• ${rec.title}`);
    lines.push(`  ${rec.description}`);
    lines.push('');
  }

  lines.push('---');
  lines.push('');
  lines.push("WHAT'S NEXT?");
  lines.push('');
  lines.push(
    'Book a free 30-minute consultation to talk through your specific situation. No pitch, no pressure — just a clear conversation about what makes sense.'
  );
  lines.push('');
  lines.push('Book a call: https://www.summitstudio.dev/contact');
  lines.push('');
  lines.push('---');
  lines.push('');
  lines.push(
    'Summit Studio builds custom software — web apps, mobile apps, cloud infrastructure, and AI automation. Senior-led, no overhead.'
  );
  lines.push('https://www.summitstudio.dev');

  return lines.join('\n');
}

function buildNotificationEmail(data: AssessmentPayload): string {
  const tier = getTier(data.score);
  const recommendations = getRecommendations(data.tags);

  const lines: string[] = [
    `New Assessment Lead: ${data.name}`,
    '',
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company: ${data.company || 'Not provided'}`,
    '',
    `Score: ${data.score}/${maxScore} (${tier.label})`,
    `Tags: ${data.tags.join(', ')}`,
    '',
    'Recommended services:',
  ];

  for (const rec of recommendations) {
    lines.push(`  • ${rec.title}`);
  }

  return lines.join('\n');
}

export async function POST(request: Request) {
  try {
    const body: AssessmentPayload = await request.json();

    const { name, email, score, tags } = body;

    if (!name || !email || typeof score !== 'number' || !Array.isArray(tags)) {
      return NextResponse.json(
        { error: 'Name, email, score, and tags are required.' },
        { status: 400 }
      );
    }

    const tier = getTier(score);

    // Send report to the lead
    await resend.emails.send({
      from: 'Summit Studio <contact@summitstudio.dev>',
      to: email,
      subject: `Your Technology Readiness Score: ${score}/${maxScore} — ${tier.label}`,
      text: buildReportEmail(body),
    });

    // Notify Summit Studio
    await resend.emails.send({
      from: 'Summit Studio <contact@summitstudio.dev>',
      to: 'contact@summitstudio.dev',
      replyTo: email,
      subject: `Assessment Lead: ${name} — ${tier.label} (${score}/${maxScore})`,
      text: buildNotificationEmail(body),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    Sentry.captureException(error);
    return NextResponse.json(
      { error: 'Failed to send report. Please try again.' },
      { status: 500 }
    );
  }
}
