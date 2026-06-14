import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';
import StickyBookButton from '../components/StickyBookButton';

const TEAL = '#07e4c6';

export const metadata: Metadata = {
  title: 'Privacy and Data Compliance',
  description:
    'How Output Systems builds AI chat systems with privacy, data protection, and compliance built in from the start.',
};

const FRAMEWORKS = [
  {
    label: 'Canada — Federal',
    title: 'PIPEDA',
    body: "Canada's federal private-sector privacy law. For Canadian businesses, Output Systems designs tools that support responsible collection, use, and handling of personal information.",
  },
  {
    label: 'Canada — Anti-Spam',
    title: 'CASL',
    body: "Canada's anti-spam law. Output Systems helps businesses separate normal service messages from marketing messages and support unsubscribe or communication preference handling where appropriate.",
  },
  {
    label: 'European Union',
    title: 'GDPR',
    body: 'Applies to any business that processes personal data of individuals in the EU or UK. Even a business in Toronto serving clients in Germany has real GDPR considerations that affect how their system should collect, store, and handle that data.',
  },
  {
    label: 'United States',
    title: 'CCPA and US State Laws',
    body: "California's CCPA and other state privacy laws give consumers rights over their personal data. For businesses serving US customers, Output Systems considers how customer information is collected, stored, accessed, and deleted.",
  },
];

export default function CompliancePage() {
  return (
    <>
      <SiteNav active="/compliance" />

      <div className="os-hero">
        <div className="os-hero-tag">Privacy and Data Compliance</div>
        <h1>
          Built to Uphold Privacy and Data <em>Compliance.</em>
        </h1>
        <p className="os-hero-intro">Designed around your customers, wherever they are.</p>
      </div>

      <div className="os-rule" />

      <section style={{ padding: '64px 60px', background: '#000' }}>
        <h2 style={{ fontSize: 'clamp(24px,3.5vw,38px)', fontWeight: 900, letterSpacing: '-0.8px', lineHeight: 1.15, marginBottom: '20px' }}>
          Privacy Is Part of the Build, Not an Afterthought
        </h2>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.85, maxWidth: '820px', marginBottom: '16px' }}>
          When a business deploys an Intelligent Chat System, it is not just enabling a conversation. It is opening a channel between the business and its customers, and that channel handles real information about real people. Names, emails, phone numbers, messages, booking details, inquiry history, and in some cases sensitive personal circumstances. That information deserves to be handled with care from the very first line of configuration.
        </p>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.85, maxWidth: '820px', marginBottom: '16px' }}>
          At Output, privacy and data compliance are not items we check off at the end of a build. They are part of how we design every system from the beginning. Before we configure a single response or connect a single integration, we think carefully about what information the system needs to collect, why it needs it, where it goes, who can access it, how long it is kept, and what the business is responsible for once that data is in its hands.
        </p>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.85, maxWidth: '820px', marginBottom: '24px' }}>
          A business may be located in Toronto and serve clients in Calgary, New York, Los Angeles, London, or Paris. The privacy expectations of those customers are shaped by where they are, not only where the business operates. Our systems are designed with that reality in mind.
        </p>
        <blockquote style={{ display: 'block', borderLeft: `3px solid ${TEAL}`, padding: '18px 24px', background: 'rgba(7,228,198,0.06)', fontSize: '18px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, maxWidth: '820px', fontStyle: 'italic' }}>
          We design for the business. We protect the customer. We review both every month.
        </blockquote>
      </section>

      <div className="os-rule" />

      <section style={{ padding: '64px 60px', background: '#0d1f1a' }}>
        <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 900, letterSpacing: '-0.5px', marginBottom: '16px' }}>Privacy by Design</h2>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.85, maxWidth: '820px', marginBottom: '16px' }}>
          Privacy by design means we think about privacy before the system goes live. We look at what information the tool needs to collect, why it needs that information, where that information goes, who can access it, and how long it should be kept.
        </p>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.85, maxWidth: '820px' }}>
          This is especially important for businesses in sensitive industries such as legal services, healthcare, finance, immigration, insurance, employment, and any business that handles private documents or personal circumstances. In those cases, the system is designed with stronger rules, safer handoff steps, and clear limits on what the tool should ask or answer.
        </p>
      </section>

      <div className="os-rule" />

      <section style={{ padding: '64px 60px', background: '#000' }}>
        <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 900, letterSpacing: '-0.5px', marginBottom: '16px' }}>Monthly Compliance Review</h2>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.85, maxWidth: '820px', marginBottom: '16px' }}>
          Privacy regulations change. New rules come into effect. Existing frameworks are updated. Enforcement priorities shift. As part of our Monthly System Management, we conduct a standing review of any significant changes to privacy and data compliance requirements across the jurisdictions relevant to each client.
        </p>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.85, maxWidth: '820px' }}>
          A DIY intelligent chat system platform does not review your compliance posture every month. It does not update your configuration when a privacy rule changes. It does not flag when a new regulation in your customers&apos; region affects how your system should behave. We do.
        </p>
      </section>

      <div className="os-rule" />

      <section style={{ padding: '64px 60px', background: '#0d1f1a' }}>
        <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 900, letterSpacing: '-0.5px', marginBottom: '16px' }}>Personal Information and PII</h2>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.85, maxWidth: '820px', marginBottom: '16px' }}>
          PII means personally identifiable information. This is information that can identify a person either on its own or when combined with other details. Examples include names, email addresses, phone numbers, home addresses, account details, booking information, customer messages, and other identifiable data.
        </p>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.85, maxWidth: '820px' }}>
          Output Systems designs intelligent chat systems with PII in mind. We help businesses think carefully about what information they should ask for, what information they should avoid collecting, and when a customer should be directed to a human instead of sharing more details with an automated system.
        </p>
      </section>

      <div className="os-rule" />

      <section style={{ padding: '64px 60px', background: '#000' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', maxWidth: '1000px' }}>
          {FRAMEWORKS.map((f) => (
            <div key={f.title} style={{ background: '#0a0a0a', border: '1px solid rgba(7,228,198,0.08)', padding: '40px 32px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: TEAL, marginBottom: '8px' }}>{f.label}</div>
              <h3 style={{ fontSize: '20px', fontWeight: 900, marginBottom: '14px' }}>{f.title}</h3>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="os-rule" />

      <section style={{ padding: '64px 60px', background: '#0d1f1a' }}>
        <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 900, letterSpacing: '-0.5px', marginBottom: '16px' }}>Responsible AI Use</h2>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.85, maxWidth: '820px', marginBottom: '16px' }}>
          AI-powered intelligent chat systems should be useful, but they should also be controlled. A customer-facing system should not guess at prices, invent policies, make promises, give legal or medical advice outside its approved scope, or ask for sensitive information it does not need. It should have clear boundaries, safe fallback answers, and a way to direct people to a human when needed.
        </p>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.85, maxWidth: '820px' }}>
          Output Systems builds these tools with guardrails. That means we define what the tool can answer, what it should avoid, what information it can collect, when it should escalate, and how it should protect the business&apos;s reputation. These guardrails are reviewed monthly.
        </p>
      </section>

      <div className="os-rule" />

      <section style={{ padding: '64px 60px', background: '#000' }}>
        <h2 style={{ fontSize: 'clamp(22px,3vw,34px)', fontWeight: 900, letterSpacing: '-0.5px', marginBottom: '16px' }}>Our Commitment</h2>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.85, maxWidth: '820px', marginBottom: '16px' }}>
          Output Systems is not a law firm, and this page is not legal advice. Privacy and compliance requirements can vary by business, location, industry, and type of data being handled. Our role is to build Intelligent Chat Systems with privacy, data protection, and responsible communication in mind from the very beginning of every engagement.
        </p>
        <blockquote style={{ display: 'block', borderLeft: `3px solid ${TEAL}`, padding: '18px 24px', background: 'rgba(7,228,198,0.06)', fontSize: '18px', color: 'rgba(255,255,255,0.85)', lineHeight: 1.8, maxWidth: '820px', fontStyle: 'italic', margin: '24px 0' }}>
          The goal is simple: build useful systems that help customers get answers, help businesses capture opportunities, and protect the people behind the data. Every month, not just at launch.
        </blockquote>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.85, maxWidth: '820px', marginTop: '24px' }}>
          To view our full Privacy Policy, <Link href="/privacy-policy" style={{ color: TEAL, textDecoration: 'underline' }}>click here</Link>.
        </p>
      </section>

      <SiteFooter />
      <StickyBookButton />
      <Script src="/embed.js" strategy="afterInteractive" />
    </>
  );
}
