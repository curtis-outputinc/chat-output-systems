import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import SiteNav from '../components/SiteNav';
import AnimatedNodesBackground from '../components/AnimatedNodesBackground';
import SiteFooter from '../components/SiteFooter';
import StickyBookButton from '../components/StickyBookButton';
import FadeIn from '../components/FadeIn';
import ChatSystemIcon from '../components/ChatSystemIcons';
import TypingHeading from '../components/TypingHeading';

const TEAL = '#07e4c6';

export const metadata: Metadata = {
  title: 'Privacy and Data Compliance',
  description:
    'How Output Systems builds AI chat systems with privacy, data protection, and compliance built in from the start.',
};

interface Framework {
  label: string;
  title: string;
  body: string;
}

const FRAMEWORKS: Framework[] = [
  {
    label: 'Canada (Federal)',
    title: 'PIPEDA',
    body: "Canada's federal private-sector privacy law. For Canadian businesses, Output Systems designs tools that support responsible collection, use, and handling of personal information.",
  },
  {
    label: 'Canada (Anti-Spam)',
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

const PRIVACY_BY_DESIGN_ITEMS = [
  'What information the tool needs to collect',
  'Why it needs that information at all',
  'Where that information goes and who can access it',
  'How long the information should be kept',
  'Stronger rules for sensitive industries (legal, healthcare, finance, immigration, insurance)',
  'Safe handoff steps when a customer needs a human',
];

const MONTHLY_REVIEW_ITEMS = [
  'Standing review of significant privacy and data regulation changes',
  'Configuration updates when a privacy rule changes',
  'Jurisdiction-specific adjustments for your customer regions',
  'Guardrail review to confirm the system stays within approved scope',
  'Documentation of every change to your system each month',
];

function CheckList({ items }: { items: string[] }) {
  return (
    <ul
      className="list-none flex flex-col"
      style={{ gap: '12px', padding: 0, margin: 0 }}
    >
      {items.map((b) => (
        <li
          key={b}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            gap: '14px',
            fontSize: '18px',
            color: '#ffffff',
            lineHeight: 1.6,
          }}
        >
          <span
            style={{
              color: TEAL,
              fontWeight: 700,
              fontSize: '17px',
              flexShrink: 0,
              marginTop: '2px',
            }}
          >
            ✓
          </span>
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

function FrameworkCard({
  framework,
  reverse,
}: {
  framework: Framework;
  reverse: boolean;
}) {
  return (
    <div
      className="grid md:grid-cols-2 gap-10 md:gap-16 items-center px-8 md:px-14 py-14 md:py-20 mb-4 relative overflow-hidden"
      style={{
        background: '#0a0f0d',
        border: '1px solid rgba(7,228,198,0.18)',
        borderRadius: '6px',
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: TEAL,
        }}
      />
      <div
        className={`flex justify-center ${reverse ? 'md:order-2' : 'md:order-1'}`}
      >
        <ChatSystemIcon variant="shield" size={220} />
      </div>
      <div className={reverse ? 'md:order-1' : 'md:order-2'}>
        <div
          style={{
            fontSize: '13px',
            fontWeight: 800,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: TEAL,
            marginBottom: '14px',
          }}
        >
          {framework.label}
        </div>
        <h3
          style={{
            fontSize: 'clamp(26px, 2.6vw, 34px)',
            fontWeight: 800,
            letterSpacing: '-0.6px',
            lineHeight: 1.15,
            color: '#ffffff',
            marginBottom: '18px',
          }}
        >
          {framework.title}
        </h3>
        <p
          style={{
            fontSize: '19px',
            lineHeight: 1.8,
            color: '#ffffff',
          }}
        >
          {framework.body}
        </p>
      </div>
    </div>
  );
}

export default function CompliancePage() {
  return (
    <>
      <AnimatedNodesBackground />
      <SiteNav active="/compliance" />

      <main className="text-white pb-40" style={{ position: 'relative', zIndex: 1 }}>
        {/* HERO */}
        <section
          className="px-6 sm:px-10 text-center flex flex-col items-center justify-center"
          style={{ minHeight: '92vh', paddingTop: '96px', paddingBottom: '40px' }}
        >
          <FadeIn>
            <h1
              className="font-black tracking-tight leading-[1.04] mx-auto mb-8"
              style={{
                fontSize: 'clamp(43px, 6.7vw, 86px)',
                letterSpacing: '-3px',
                maxWidth: '1100px',
                color: '#ffffff',
              }}
            >
              <TypingHeading
                totalMs={5000}
                segments={[
                  { text: 'Privacy, data, and ' },
                  { text: 'compliance', color: TEAL },
                  { text: '... Built in from ' },
                  { text: 'day one.', color: TEAL },
                ]}
              />
            </h1>
            <p
              className="mx-auto"
              style={{
                fontSize: '25px',
                lineHeight: 1.7,
                maxWidth: '900px',
                color: '#ffffff',
                textWrap: 'balance',
              }}
            >
              Designed around your customers, wherever they are. Reviewed every
              month as the rules change.
            </p>
          </FadeIn>
        </section>

        <div
          style={{
            height: '1px',
            background:
              'linear-gradient(90deg, rgba(7,228,198,0.6) 0%, transparent 70%)',
          }}
        />

        {/* PRIVACY IS PART OF THE BUILD */}
        <section
          className="px-6 sm:px-10 py-28"
          style={{
            background: '#0d1f1a',
            borderTop: '1px solid rgba(7,228,198,0.1)',
            borderBottom: '1px solid rgba(7,228,198,0.1)',
          }}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <FadeIn>
              <h2
                className="font-extrabold tracking-tight leading-[1.08] mb-6"
                style={{
                  fontSize: 'clamp(36px, 5vw, 64px)',
                  letterSpacing: '-1.8px',
                  color: '#ffffff',
                }}
              >
                Privacy is part of the build,{' '}
                <span style={{ color: TEAL }}>not an afterthought.</span>
              </h2>
              <p
                style={{
                  fontSize: '19px',
                  lineHeight: 1.8,
                  color: '#ffffff',
                  marginBottom: '16px',
                }}
              >
                When a business deploys an Intelligent Chat System, it is not
                just enabling a conversation. It is opening a channel between
                the business and its customers, and that channel handles real
                information about real people. Names, emails, phone numbers,
                messages, booking details, and in some cases sensitive personal
                circumstances.
              </p>
              <p
                style={{
                  fontSize: '19px',
                  lineHeight: 1.8,
                  color: '#ffffff',
                  marginBottom: '16px',
                }}
              >
                At Output, privacy and data compliance are not items we check
                off at the end of a build. They are part of how we design every
                system from the beginning. Before we configure a single
                response or connect a single integration, we think carefully
                about what information the system needs, why it needs it, where
                it goes, who can access it, and how long it is kept.
              </p>
              <p
                style={{
                  fontSize: '19px',
                  lineHeight: 1.8,
                  color: '#ffffff',
                }}
              >
                A business may be located in Toronto and serve clients in
                Calgary, New York, London, or Paris. The privacy expectations
                of those customers are shaped by where they are, not only where
                the business operates. Our systems are designed with that
                reality in mind.
              </p>
            </FadeIn>
            <FadeIn delay={160}>
              <div className="flex justify-center">
                <ChatSystemIcon variant="shield" size={320} />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* PRIVACY BY DESIGN */}
        <section className="px-6 sm:px-10 py-32">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <FadeIn>
              <h2
                className="font-extrabold tracking-tight leading-[1.08]"
                style={{
                  fontSize: 'clamp(36px, 5vw, 64px)',
                  letterSpacing: '-1.8px',
                  color: '#ffffff',
                  maxWidth: '520px',
                }}
              >
                Privacy by design,{' '}
                <span style={{ color: TEAL }}>not by patchwork.</span>
              </h2>
              <p
                style={{
                  fontSize: '19px',
                  lineHeight: 1.8,
                  color: '#ffffff',
                  marginTop: '22px',
                  marginBottom: '16px',
                  maxWidth: '520px',
                }}
              >
                Privacy by design means we think about privacy before the
                system goes live. This is especially important for businesses
                in sensitive industries such as legal services, healthcare,
                finance, immigration, insurance, and employment.
              </p>
              <p
                style={{
                  fontSize: '19px',
                  lineHeight: 1.8,
                  color: '#ffffff',
                  maxWidth: '520px',
                }}
              >
                In those cases, the system is designed with stronger rules,
                safer handoff steps, and clear limits on what the tool should
                ask or answer.
              </p>
            </FadeIn>
            <FadeIn delay={140}>
              <CheckList items={PRIVACY_BY_DESIGN_ITEMS} />
            </FadeIn>
          </div>
        </section>

        {/* MONTHLY COMPLIANCE REVIEW */}
        <section
          className="px-6 sm:px-10 py-32"
          style={{
            background: '#0d1f1a',
            borderTop: '1px solid rgba(7,228,198,0.1)',
            borderBottom: '1px solid rgba(7,228,198,0.1)',
          }}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <FadeIn>
              <CheckList items={MONTHLY_REVIEW_ITEMS} />
            </FadeIn>
            <FadeIn delay={140}>
              <h2
                className="font-extrabold tracking-tight leading-[1.08]"
                style={{
                  fontSize: 'clamp(36px, 5vw, 64px)',
                  letterSpacing: '-1.8px',
                  color: '#ffffff',
                  maxWidth: '520px',
                }}
              >
                Monthly compliance review,{' '}
                <span style={{ color: TEAL }}>not set and forget.</span>
              </h2>
              <p
                style={{
                  fontSize: '19px',
                  lineHeight: 1.8,
                  color: '#ffffff',
                  marginTop: '22px',
                  marginBottom: '16px',
                  maxWidth: '520px',
                }}
              >
                Privacy regulations change. New rules come into effect.
                Existing frameworks are updated. Enforcement priorities shift.
                As part of our Monthly System Management, we conduct a standing
                review of any significant changes to privacy and data
                compliance requirements across the jurisdictions relevant to
                each client.
              </p>
              <p
                style={{
                  fontSize: '19px',
                  lineHeight: 1.8,
                  color: '#ffffff',
                  maxWidth: '520px',
                }}
              >
                A DIY platform does not review your compliance posture every
                month. It does not flag when a new regulation in your
                customers&apos; region affects how your system should behave.
                We do.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* PII */}
        <section className="px-6 sm:px-10 py-32">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <FadeIn>
              <div className="flex justify-center md:order-1">
                <ChatSystemIcon variant="leadCapture" size={300} />
              </div>
            </FadeIn>
            <FadeIn delay={160}>
              <div className="md:order-2">
                <h2
                  className="font-extrabold tracking-tight leading-[1.08] mb-6"
                  style={{
                    fontSize: 'clamp(36px, 5vw, 64px)',
                    letterSpacing: '-1.8px',
                    color: '#ffffff',
                  }}
                >
                  Personal information,{' '}
                  <span style={{ color: TEAL }}>handled with care.</span>
                </h2>
                <p
                  style={{
                    fontSize: '19px',
                    lineHeight: 1.8,
                    color: '#ffffff',
                    marginBottom: '16px',
                  }}
                >
                  PII means personally identifiable information. That covers
                  any detail that can identify a person on its own or when
                  combined with other details. Names, email addresses, phone
                  numbers, home addresses, account details, booking
                  information, and customer messages.
                </p>
                <p
                  style={{
                    fontSize: '19px',
                    lineHeight: 1.8,
                    color: '#ffffff',
                  }}
                >
                  Output Systems designs intelligent chat systems with PII in
                  mind. We help businesses think carefully about what
                  information they should ask for, what information they should
                  avoid collecting, and when a customer should be directed to a
                  human instead of sharing more details with an automated
                  system.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* FRAMEWORKS */}
        <section
          className="px-6 sm:px-10 py-24"
          style={{
            background: '#0d1f1a',
            borderTop: '1px solid rgba(7,228,198,0.1)',
            borderBottom: '1px solid rgba(7,228,198,0.1)',
          }}
        >
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="text-center mb-14">
                <h2
                  className="font-extrabold tracking-tight mx-auto mb-5"
                  style={{
                    fontSize: 'clamp(36px, 5vw, 64px)',
                    letterSpacing: '-1.8px',
                    color: '#ffffff',
                    maxWidth: '900px',
                    lineHeight: 1.08,
                  }}
                >
                  Designed for the frameworks{' '}
                  <span style={{ color: TEAL }}>your customers expect.</span>
                </h2>
                <p
                  className="mx-auto"
                  style={{
                    fontSize: '19px',
                    lineHeight: 1.7,
                    maxWidth: '720px',
                    color: '#ffffff',
                  }}
                >
                  Privacy expectations are shaped by where your customers are.
                  Our systems are built with the major regulatory frameworks in
                  mind from day one.
                </p>
              </div>
            </FadeIn>

            {FRAMEWORKS.map((framework, i) => (
              <FadeIn key={framework.title} delay={100 + i * 80}>
                <FrameworkCard framework={framework} reverse={i % 2 === 1} />
              </FadeIn>
            ))}
          </div>
        </section>

        {/* RESPONSIBLE AI */}
        <section className="px-6 sm:px-10 py-32">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <FadeIn>
              <h2
                className="font-extrabold tracking-tight leading-[1.08] mb-6"
                style={{
                  fontSize: 'clamp(36px, 5vw, 64px)',
                  letterSpacing: '-1.8px',
                  color: '#ffffff',
                }}
              >
                Responsible AI use,{' '}
                <span style={{ color: TEAL }}>controlled by guardrails.</span>
              </h2>
              <p
                style={{
                  fontSize: '19px',
                  lineHeight: 1.8,
                  color: '#ffffff',
                  marginBottom: '16px',
                }}
              >
                AI-powered intelligent chat systems should be useful, but they
                should also be controlled. A customer-facing system should not
                guess at prices, invent policies, make promises, give legal or
                medical advice outside its approved scope, or ask for sensitive
                information it does not need. It should have clear boundaries,
                safe fallback answers, and a way to direct people to a human
                when needed.
              </p>
              <p
                style={{
                  fontSize: '19px',
                  lineHeight: 1.8,
                  color: '#ffffff',
                }}
              >
                Output Systems builds these tools with guardrails. That means
                we define what the tool can answer, what it should avoid, what
                information it can collect, when it should escalate, and how it
                should protect the business&apos;s reputation. These guardrails
                are reviewed monthly.
              </p>
            </FadeIn>
            <FadeIn delay={160}>
              <div className="flex justify-center">
                <ChatSystemIcon variant="lightbulb" size={300} />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* OUR COMMITMENT + CLOSING CTA */}
        <section
          className="px-6 sm:px-10 py-28 text-center"
          style={{
            background: '#0d1f1a',
            borderTop: '1px solid rgba(7,228,198,0.1)',
          }}
        >
          <FadeIn>
            <h2
              className="font-extrabold tracking-tight leading-[1.08] mx-auto mb-6"
              style={{
                fontSize: 'clamp(36px, 5vw, 64px)',
                letterSpacing: '-1.8px',
                maxWidth: '900px',
                color: '#ffffff',
              }}
            >
              Protecting your business{' '}
              <span style={{ color: TEAL }}>and your customers.</span>
            </h2>
            <p
              className="mx-auto"
              style={{
                fontSize: '19px',
                lineHeight: 1.8,
                maxWidth: '820px',
                color: '#ffffff',
                marginBottom: '20px',
              }}
            >
              Output Systems is not a law firm, and this page is not legal
              advice. Privacy and compliance requirements can vary by business,
              location, industry, and type of data being handled. Our role is
              to build Intelligent Chat Systems with privacy, data protection,
              and responsible communication in mind from the very beginning of
              every engagement.
            </p>
            <p
              className="mx-auto"
              style={{
                fontSize: '19px',
                lineHeight: 1.8,
                maxWidth: '820px',
                color: '#ffffff',
                marginBottom: '20px',
              }}
            >
              The goal is simple: build useful systems that help customers get
              answers, help businesses capture opportunities, and protect the
              people behind the data. Every month, not just at launch.
            </p>
            <p
              className="mx-auto"
              style={{
                fontSize: '18px',
                lineHeight: 1.8,
                maxWidth: '820px',
                color: '#ffffff',
              }}
            >
              To view our full Privacy Policy,{' '}
              <Link
                href="/privacy-policy"
                style={{ color: TEAL, textDecoration: 'underline' }}
              >
                click here
              </Link>
              . To start a conversation about your business,{' '}
              <Link
                href="/contact"
                style={{ color: TEAL, textDecoration: 'underline' }}
              >
                book a free discovery call
              </Link>
              .
            </p>
          </FadeIn>
        </section>
      </main>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <SiteFooter />
      </div>
      <StickyBookButton />
      <Script src="/embed.js" strategy="afterInteractive" />
    </>
  );
}
