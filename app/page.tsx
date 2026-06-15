import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';
import SiteNav from './components/SiteNav';
import SiteFooter from './components/SiteFooter';
import StickyBookButton from './components/StickyBookButton';
import FadeIn from './components/FadeIn';
import AnimatedBarGraph from './components/AnimatedBarGraph';
import AnimatedDashboard from './components/AnimatedDashboard';
import IntegrationsMarquee from './components/IntegrationsMarquee';
import AnimatedStatCounter from './components/AnimatedStatCounter';
import AnimatedNodesBackground from './components/AnimatedNodesBackground';

export const metadata: Metadata = {
  title: 'Intelligent Website Chat Systems — Output Systems',
  description:
    'Output Systems builds Intelligent Chat Systems for customer-facing websites, internal staff knowledge bases, and lead capture.',
};

const TEAL = '#07e4c6';

function SectionHeading({ children }: { children: ReactNode }) {
  return (
    <h2
      className="font-extrabold tracking-tight leading-[1.08] mb-10 mx-auto"
      style={{
        fontSize: 'clamp(36px, 5vw, 64px)',
        letterSpacing: '-1.8px',
        maxWidth: '900px',
      }}
    >
      {children}
    </h2>
  );
}

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Discovery Call',
    body:
      'A free discovery call to learn about your business and identify which Intelligent Chat System is the right fit.',
  },
  {
    num: '02',
    title: 'Design & Demo',
    body:
      'We design every part of your chat system and walk you through a working demo trained on your actual services and brand.',
  },
  {
    num: '03',
    title: 'Test & Deploy',
    body:
      'We validate the system against real customer questions, then deploy with a lightweight embed code. No website rebuild.',
  },
  {
    num: '04',
    title: 'Manage & Support',
    body:
      'We monitor, update, and improve your system every month so it evolves as your business does.',
  },
];

const OUTCOMES = [
  {
    title: 'Increased Profit',
    body:
      'More leads captured around the clock. Faster follow-up. Fewer opportunities slipping through the cracks. Every system is designed to recover revenue that is quietly walking away after hours.',
  },
  {
    title: 'Decreased Expenses',
    body:
      'Less time spent on repetitive customer questions, manual intake, and after-hours coverage. Less spend on staff to handle work the system handles by default.',
  },
  {
    title: 'Higher Efficiency',
    body:
      'Your team gets time back. Work that requires human judgment gets human attention. Routine customer conversations run on their own, around the clock.',
  },
];

export default function HomePage() {
  return (
    <>
      <AnimatedNodesBackground />

      <SiteNav active="/" />

      <main className="text-white pb-40" style={{ position: 'relative', zIndex: 1 }}>
        {/* HERO — h1 only on mobile (fills viewport, centered). Desktop also
            inlines the subhead. Mobile subhead lives in its own section below. */}
        <section
          className="px-6 sm:px-10 text-center flex flex-col items-center justify-center"
          style={{ minHeight: '100vh', paddingTop: '96px', paddingBottom: '40px' }}
        >
          <FadeIn>
            <h1
              className="font-black tracking-tight leading-[1.04] mx-auto mb-8"
              style={{
                fontSize: 'clamp(43px, 6.7vw, 86px)',
                letterSpacing: '-3px',
                maxWidth: '1100px',
              }}
            >
              Intelligent Website Chat Systems built to help businesses
              acquire and keep more clients
              <span style={{ color: TEAL }}>.</span>
            </h1>
            {/* Desktop subhead — inline in hero */}
            <p
              className="mx-auto hidden md:block"
              style={{
                fontSize: '25px',
                lineHeight: 1.7,
                maxWidth: '900px',
                color: '#ffffff',
                textWrap: 'balance',
              }}
            >
              Output designs and manages AI-powered chat systems that answer
              visitor questions, capture lead info, support customer needs, and
              give businesses clearer insight into what their clients are
              asking for.
            </p>
          </FadeIn>
        </section>

        {/* Mobile-only subhead — appears as user scrolls past the hero */}
        <section className="md:hidden px-6 text-center" style={{ paddingTop: '40px', paddingBottom: '64px' }}>
          <FadeIn>
            <p
              className="mx-auto"
              style={{
                fontSize: '24px',
                lineHeight: 1.5,
                maxWidth: '600px',
                color: '#ffffff',
                textWrap: 'balance',
              }}
            >
              Output designs and manages AI-powered chat systems that answer
              visitor questions, capture lead info, support customer needs, and
              give businesses clearer insight into what their clients are
              asking for.
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

        {/* STAT COUNTER 1 */}
        <section
          className="px-6 sm:px-10 py-40"
          style={{
            background: '#0d1f1a',
            borderTop: '1px solid rgba(7,228,198,0.1)',
            borderBottom: '1px solid rgba(7,228,198,0.1)',
          }}
        >
          <FadeIn>
            <AnimatedStatCounter
              headline="of online consumers convert with the business that responds first."
              citation="(Dashly, 2025)"
            />
          </FadeIn>
        </section>

        {/* BAR GRAPH SECTION — single column: heading → graph → paragraph */}
        <section className="px-6 sm:px-10 py-36">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <SectionHeading>
                Built for <span style={{ color: TEAL }}>more</span>{' '}
                <span style={{ color: TEAL }}>output.</span>
              </SectionHeading>
            </FadeIn>

            <FadeIn delay={160}>
              <div
                style={{
                  background: '#0a0f0d',
                  border: '1px solid rgba(7,228,198,0.18)',
                  borderRadius: '8px',
                  padding: '24px',
                  margin: '40px 0',
                }}
              >
                <AnimatedBarGraph />
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <p
                style={{
                  fontSize: '19px',
                  lineHeight: 1.8,
                  color: '#ffffff',
                  textWrap: 'balance',
                }}
              >
                Every Intelligent Chat System we build is designed to produce
                more captured leads, more conversions, more answered questions,
                more reduced expenses, and more time back for your team.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* DASHBOARD SECTION — single column: heading → dashboard → paragraph */}
        <section
          className="px-6 sm:px-10 py-36"
          style={{
            background: '#0d1f1a',
            borderTop: '1px solid rgba(7,228,198,0.1)',
            borderBottom: '1px solid rgba(7,228,198,0.1)',
          }}
        >
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <SectionHeading>
                Customized{' '}
                <span style={{ color: TEAL }}>insight dashboards.</span>
              </SectionHeading>
            </FadeIn>

            <FadeIn delay={160}>
              <div
                style={{
                  background: '#0a0f0d',
                  border: '1px solid rgba(7,228,198,0.18)',
                  borderRadius: '8px',
                  padding: '24px',
                  margin: '40px 0',
                }}
              >
                <AnimatedDashboard />
              </div>
            </FadeIn>

            <FadeIn delay={300}>
              <p
                style={{
                  fontSize: '19px',
                  lineHeight: 1.8,
                  color: '#ffffff',
                  textWrap: 'balance',
                }}
              >
                Every conversation produces data, and that data gets surfaced
                back to your business in a clear dashboard. See what your
                customers are asking, where they drop off, and what to improve
                next.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* 4-STEP PROCESS */}
        <section className="px-6 sm:px-10 py-36">
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="text-center mb-16">
                <SectionHeading>
                  4 easy steps to a{' '}
                  <span style={{ color: TEAL }}>fully running system.</span>
                </SectionHeading>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {PROCESS_STEPS.map((step, i) => (
                <FadeIn key={step.num} delay={100 + i * 90}>
                  <div
                    className="h-full text-left"
                    style={{
                      background: '#0a0f0d',
                      border: '1px solid rgba(7,228,198,0.22)',
                      borderRadius: '8px',
                      padding: '36px 28px',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: TEAL,
                      }}
                    />
                    <div
                      className="font-black mb-4"
                      style={{
                        fontSize: '40px',
                        letterSpacing: '-1.5px',
                        color: TEAL,
                        lineHeight: 1,
                      }}
                    >
                      {step.num}
                    </div>
                    <h3
                      className="font-extrabold mb-3 tracking-tight"
                      style={{
                        fontSize: '22px',
                        letterSpacing: '-0.6px',
                        color: '#ffffff',
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '16px',
                        lineHeight: 1.7,
                        color: '#ffffff',
                      }}
                    >
                      {step.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn delay={500}>
              <div className="text-center mt-12">
                <a
                  href="/process"
                  className="inline-block font-semibold"
                  style={{
                    color: TEAL,
                    fontSize: '17px',
                    borderBottom: `1px solid ${TEAL}`,
                    paddingBottom: '2px',
                    textDecoration: 'none',
                  }}
                >
                  See the full process →
                </a>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* STAT COUNTER 2 */}
        <section
          className="px-6 sm:px-10 py-20"
          style={{
            background: '#0d1f1a',
            borderTop: '1px solid rgba(7,228,198,0.1)',
            borderBottom: '1px solid rgba(7,228,198,0.1)',
          }}
        >
          <FadeIn>
            <AnimatedStatCounter
              startValue={0.1}
              target={3.0}
              decimals={1}
              suffix="x"
              durationMs={2640}
              preHeadline="Businesses using AI chat systems see"
              headline="better conversion into sales than businesses using traditional website forms."
              citation="(Dashly, 2025)"
            />
          </FadeIn>
        </section>

        {/* OUTCOMES */}
        <section
          className="px-6 sm:px-10 py-36"
          style={{
            background: '#0d1f1a',
            borderTop: '1px solid rgba(7,228,198,0.1)',
          }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
              {OUTCOMES.map((card, i) => (
                <FadeIn key={card.title} delay={120 + i * 100}>
                  <div
                    className="h-full text-center flex flex-col items-center justify-center"
                    style={{
                      background: '#000',
                      border: '1px solid rgba(7,228,198,0.22)',
                      borderRadius: '6px',
                      position: 'relative',
                      overflow: 'hidden',
                      paddingLeft: '28px',
                      paddingRight: '28px',
                      paddingTop: '64px',
                      paddingBottom: '72px',
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
                    <h3
                      className="font-extrabold tracking-tight leading-[1.05] mb-8"
                      style={{
                        fontSize: 'clamp(32px, 3.6vw, 46px)',
                        letterSpacing: '-1.4px',
                        color: '#ffffff',
                      }}
                    >
                      {card.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '19px',
                        lineHeight: 1.75,
                        color: '#ffffff',
                      }}
                    >
                      {card.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* INTEGRATIONS */}
        <section className="px-0 py-32">
          <div className="px-6 sm:px-10 text-center mb-12">
            <FadeIn>
              <SectionHeading>
                <span style={{ color: TEAL }}>Seamlessly integrates</span> with
                all your favorite apps.
              </SectionHeading>
            </FadeIn>
          </div>

          <FadeIn delay={120}>
            <IntegrationsMarquee />
          </FadeIn>
        </section>

        {/* CLOSING CTA */}
        <section
          className="px-6 sm:px-10 py-32 text-center"
          style={{
            background: '#0d1f1a',
            borderTop: '1px solid rgba(7,228,198,0.1)',
          }}
        >
          <FadeIn>
            <SectionHeading>
              Ready to see what&apos;s possible for{' '}
              <span style={{ color: TEAL }}>your business?</span>
            </SectionHeading>
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
