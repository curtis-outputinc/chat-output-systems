import type { Metadata } from 'next';
import Script from 'next/script';
import SiteNav from '../components/SiteNav';
import AnimatedNodesBackground from '../components/AnimatedNodesBackground';
import SiteFooter from '../components/SiteFooter';
import StickyBookButton from '../components/StickyBookButton';
import FadeIn from '../components/FadeIn';
import ChatSystemIcon, { type IconVariant } from '../components/ChatSystemIcons';
import TypingHeading from '../components/TypingHeading';

const TEAL = '#07e4c6';

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'How we build, deploy, and manage your intelligent chat system from discovery call to monthly management.',
};

interface Step {
  num: string;
  title: string;
  variant: IconVariant;
  paragraphs: string[];
  bullets: string[];
}

const STEPS: Step[] = [
  {
    num: '01',
    title: 'The Free Discovery Call',
    variant: 'chatBubble',
    paragraphs: [
      'This is where we start. We get on a call and learn about your business, your customers, your team, your current tools, and where your biggest problems are. You do not need to prepare anything formal. A plain description of how your business works and where things are falling through the cracks is everything we need.',
      'By the end of this call, you will know whether a system from Output is the right fit for your business, which system makes the most sense for your situation, and roughly what it would look like and cost. There is no obligation and no pressure.',
    ],
    bullets: [
      'Free, no obligation, no commitment required',
      'We learn about your business, your customers, and your goals',
      'We identify the right system for your situation',
      'We walk you through what the system would look like for your business',
      'We put together a clear scope and quote after the call',
    ],
  },
  {
    num: '02',
    title: 'Design and Demo',
    variant: 'lightbulb',
    paragraphs: [
      'Once we understand your business, we design the system. This includes the conversation flows, the knowledge base structure, the lead capture setup, the guardrails, the tone and brand alignment, and any integrations your business needs. We then build a working demo tailored specifically to your business.',
      'This is not a generic product demo. It is a working prototype built on your actual services, your policies, and your brand. You interact with it, give us feedback, and we refine it until it is exactly right for your business.',
    ],
    bullets: [
      'We design the system around your specific business and customers',
      'We build the knowledge base from your approved content',
      'We configure conversation flows, guardrails, and lead capture',
      'You review the demo and give us feedback',
      'We refine until you are happy with how it looks and works',
    ],
  },
  {
    num: '03',
    title: 'Deployment and Launch',
    variant: 'package',
    paragraphs: [
      'When you are happy with the system, we deploy it. For website systems, this means we provide a lightweight embed code that gets added to your website. No rebuild, no major technical work on your end. We handle all of the technical deployment from our side.',
      'Before the system goes live, we run a full round of testing to make sure it handles real customer questions accurately, stays within scope, and performs correctly under normal usage.',
    ],
    bullets: [
      'Full pre-launch testing across real-world question scenarios',
      'Guardrail verification to confirm the system stays on topic',
      'Lightweight embed code provided for website deployment',
      'We walk your team through the system before go-live',
      'Most standard systems are live within two to four weeks of the discovery call',
    ],
  },
  {
    num: '04',
    title: 'Monthly System Management',
    variant: 'calendar',
    paragraphs: [
      'Launch is not the end. It is the beginning. Every month, we actively manage your system to make sure it stays accurate, current, secure, and performing as your business changes.',
      'Every month you receive a performance report showing how the system is doing, what your customers are asking, what questions the system could not answer, and what we updated during the month.',
    ],
    bullets: [
      'Conversation logs reviewed monthly',
      'Knowledge base updated monthly as your business changes',
      'API, security, and privacy compliance updates every month',
      'Real-time uptime monitoring with immediate error alerting',
      'Monthly performance report delivered to you every month',
      'Dedicated support for questions, changes, or expansions at any time',
    ],
  },
];

function StepCard({ step, reverse }: { step: Step; reverse: boolean }) {
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
        <ChatSystemIcon variant={step.variant} size={220} />
      </div>
      <div className={reverse ? 'md:order-1' : 'md:order-2'}>
        <div
          style={{
            fontSize: 'clamp(56px, 7vw, 84px)',
            fontWeight: 900,
            color: TEAL,
            opacity: 0.85,
            lineHeight: 1,
            letterSpacing: '-3px',
            marginBottom: '14px',
          }}
        >
          {step.num}
        </div>
        <h3
          style={{
            fontSize: 'clamp(26px, 2.6vw, 34px)',
            fontWeight: 800,
            letterSpacing: '-0.6px',
            lineHeight: 1.15,
            color: '#ffffff',
            marginBottom: '20px',
          }}
        >
          {step.title}
        </h3>
        {step.paragraphs.map((p, i) => (
          <p
            key={i}
            style={{
              fontSize: '19px',
              lineHeight: 1.8,
              color: '#ffffff',
              marginBottom: '16px',
            }}
          >
            {p}
          </p>
        ))}
        <ul
          className="list-none flex flex-col mt-2"
          style={{ gap: '12px', padding: 0, margin: '18px 0 0 0' }}
        >
          {step.bullets.map((b) => (
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
      </div>
    </div>
  );
}

export default function ProcessPage() {
  return (
    <>
      <AnimatedNodesBackground />
      <SiteNav active="/process" />

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
                totalMs={4500}
                segments={[
                  { text: '4 easy steps to your new ' },
                  { text: 'intelligent chat system.', color: TEAL },
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
              We handle every step of the process for you. You do not need
              technical knowledge, a development team, or hours of your own
              time. You provide the business context. We do the rest.
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

        {/* FOUR STEP TILES */}
        <section
          className="px-6 sm:px-10 py-24"
          style={{
            background: '#0d1f1a',
            borderTop: '1px solid rgba(7,228,198,0.1)',
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
                  Built around your business.{' '}
                  <span style={{ color: TEAL }}>
                    Built to keep working.
                  </span>
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
                  Four steps from the first call to a live system you never have
                  to manage yourself.
                </p>
              </div>
            </FadeIn>

            {STEPS.map((step, i) => (
              <FadeIn key={step.num} delay={100 + i * 80}>
                <StepCard step={step} reverse={i % 2 === 1} />
              </FadeIn>
            ))}
          </div>
        </section>

        <div
          style={{
            height: '1px',
            background:
              'linear-gradient(90deg, rgba(7,228,198,0.6) 0%, transparent 70%)',
          }}
        />

        {/* BOTTOM CTA */}
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
              Ready to start with{' '}
              <span style={{ color: TEAL }}>Step One?</span>
            </h2>
            <p
              className="mx-auto"
              style={{
                fontSize: '19px',
                lineHeight: 1.8,
                maxWidth: '720px',
                color: '#ffffff',
              }}
            >
              Book a free discovery call. It takes about 30 minutes and by the
              end of it you will know exactly what your system would look like
              and what it would cost.
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
