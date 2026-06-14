/**
 * Contact form submission endpoint.
 *
 * Accepts a POST with the fields from the contact page form, validates the
 * shape, then sends an email via Resend to CONTACT_RECIPIENT (defaults to
 * systems@output.systems). The from address is the verified RESEND_FROM_EMAIL
 * and the visitor's email is set as the reply-to so the team can reply
 * directly from their inbox.
 */
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

interface ContactPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  systemType: string;
  comments?: string;
}

const FROM_DEFAULT = 'connect@output.systems';
const TO_DEFAULT = 'systems@output.systems';

function isValidEmail(s: string): boolean {
  // intentionally loose — server-side validation is just a sanity check
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

function clean(s: unknown, maxLen = 500): string {
  if (typeof s !== 'string') return '';
  return s.trim().slice(0, maxLen);
}

export async function POST(req: Request) {
  let body: Partial<Record<keyof ContactPayload, unknown>>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 });
  }

  const firstName = clean(body.firstName, 100);
  const lastName = clean(body.lastName, 100);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 50);
  const systemType = clean(body.systemType, 200);
  const comments = clean(body.comments, 3000);

  if (!firstName || !lastName || !email || !systemType) {
    return NextResponse.json(
      { error: 'Please fill in your name, email, and system type.' },
      { status: 400 },
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { error: 'Please enter a valid email address.' },
      { status: 400 },
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.error('contact: RESEND_API_KEY is not set');
    return NextResponse.json(
      { error: 'Email service is not configured. Please email us directly.' },
      { status: 503 },
    );
  }

  const fromAddress = process.env.RESEND_FROM_EMAIL ?? FROM_DEFAULT;
  const toAddress = process.env.CONTACT_RECIPIENT ?? TO_DEFAULT;

  const subject = `from ai.output.systems — ${systemType} — ${firstName} ${lastName}`;

  const lines: string[] = [];
  lines.push(`Name: ${firstName} ${lastName}`);
  lines.push(`Email: ${email}`);
  if (phone) lines.push(`Phone: ${phone}`);
  lines.push(`System interest: ${systemType}`);
  lines.push('');
  lines.push('Comments:');
  lines.push(comments || '(none)');
  lines.push('');
  lines.push('---');
  lines.push('Submitted via the ai.output.systems contact form.');

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const result = await resend.emails.send({
      from: `ai.output.systems <${fromAddress}>`,
      to: [toAddress],
      replyTo: email,
      subject,
      text: lines.join('\n'),
    });

    if (result.error) {
      console.error('contact: resend error', result.error);
      return NextResponse.json(
        { error: 'Could not send your message. Please try again or email us directly.' },
        { status: 502 },
      );
    }
  } catch (err) {
    console.error('contact: send threw', err);
    return NextResponse.json(
      { error: 'Could not send your message. Please try again or email us directly.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
