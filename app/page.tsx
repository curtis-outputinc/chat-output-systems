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
import HomeChecklist from './components/HomeChecklist';

export const metadata: Metadata = {
  title: 'Intelligent Website Chat Systems — Output Systems',
  description:
    'Output designs and manages AI-powered chat systems that answer visitor questions, capture lead info, support customer needs, and give businesses clearer insight into what their clients are asking for.',
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

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div
      className="inline-block font-semibold uppercase mb-6"
      style={{
        fontSize: '11px',
        letterSpacing: '3px',
        color: TEAL,
        border: '1px solid rgba(7,228,198,0.28)',
        padding: '6px 18px',
        borderRadius: '2px',
      }}
    >
      {children}
    </div>
  );
}

const MINI_TILES = [
  {
    title: 'Around-the-Clock Operations, 7 Days a Week',
    body:
      'Your customers are online 24 hours a day, 7 days a week. Your customer support should be too.',
    icon: (
      <svg width={52} height={52} viewBox="0 0 52 52" aria-hidden="true">
        <circle cx={26} cy={26} r={22} fill="none" stroke={TEAL} strokeWidth={1.5} opacity={0.4} />
        <circle cx={26} cy={26} r={18} fill="rgba(7,228,198,0.06)" />
        <line x1={26} y1={26} x2={26} y2={10} stroke={TEAL} strokeWidth={2} strokeLinecap="round" className="home-clock-minute" />
        <line x1={26} y1={26} x2={34} y2={20} stroke="#ffffff" strokeWidth={2} strokeLinecap="round" className="home-clock-hour" />
        <circle cx={26} cy={26} r={2.5} fill={TEAL} />
        <line x1={26} y1={8} x2={26} y2={11} stroke={TEAL} strokeWidth={1.5} opacity={0.5} />
        <line x1={26} y1={41} x2={26} y2={44} stroke={TEAL} strokeWidth={1.5} opacity={0.5} />
        <line x1={8} y1={26} x2={11} y2={26} stroke={TEAL} strokeWidth={1.5} opacity={0.5} />
        <line x1={41} y1={26} x2={44} y2={26} stroke={TEAL} strokeWidth={1.5} opacity={0.5} />
      </svg>
    ),
  },
  {
    title: 'Custom-Built Systems To Match Your Business',
    body:
      "Nothing generic here. Your Intelligent Chat System is trained on your brand's tone, products, services, pricing and policies for accurate customer interaction.",
    icon: (
      <svg width={52} height={52} viewBox="0 0 52 52" aria-hidden="true">
        <rect x={10} y={18} width={32} height={24} rx={4} fill="none" stroke={TEAL} strokeWidth={1.5} opacity={0.7} />
        <rect x={18} y={12} width={16} height={8} rx={3} fill="none" stroke={TEAL} strokeWidth={1.2} opacity={0.5} />
        <line x1={26} y1={12} x2={26} y2={8} stroke={TEAL} strokeWidth={1.2} opacity={0.5} />
        <circle cx={26} cy={7} r={2} fill={TEAL} opacity={0.7} />
        <circle cx={20} cy={28} r={3} fill={TEAL} opacity={0.8} />
        <circle cx={32} cy={28} r={3} fill={TEAL} opacity={0.8} />
        <path d="M19 36 Q26 32 33 36" fill="none" stroke={TEAL} strokeWidth={1.5} strokeLinecap="round">
          <animate
            attributeName="d"
            values="M19 36 Q26 32 33 36;M19 36 Q26 40 33 36;M19 36 Q26 32 33 36"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
        <circle cx={6} cy={26} r={2} fill={TEAL} className="home-float-dot" />
        <circle cx={46} cy={22} r={1.5} fill={TEAL} className="home-float-dot" />
        <circle cx={44} cy={34} r={1.5} fill={TEAL} className="home-float-dot" />
      </svg>
    ),
  },
  {
    title: '100% Done-For-You Service, Not By You',
    body:
      'Most traditional chatbots require you to launch, program, update and maintain. We handle everything from start to finish and beyond.',
    icon: (
      <svg width={52} height={52} viewBox="0 0 52 52" aria-hidden="true">
        <circle cx={26} cy={26} r={22} fill="none" stroke={TEAL} strokeWidth={1.5} opacity={0.3} />
        <circle cx={26} cy={26} r={14} fill="rgba(7,228,198,0.06)" stroke={TEAL} strokeWidth={1} opacity={0.5} />
        <polyline
          points="18,26 23,32 34,20"
          fill="none"
          stroke={TEAL}
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray={30}
          strokeDashoffset={30}
        >
          <animate attributeName="stroke-dashoffset" from={30} to={0} dur="0.8s" fill="freeze" begin="0.5s" />
        </polyline>
      </svg>
    ),
  },
];

const PROCESS_STEPS = [
  {
    num: '01',
    label: 'Step One',
    title: 'Free Discovery Call',
    body:
      'We get on a call and learn about your business, your customers, and where things are falling through the cracks. By the end you will know exactly which system fits your situation and what it will cost, with no obligation and no pressure.',
  },
  {
    num: '02',
    label: 'Step Two',
    title: 'Design and Demo',
    body:
      'We design the system around your specific business and build a working demo trained on your actual services, policies, and brand. You interact with it, give us feedback, and we refine it until it is exactly right before anything goes live.',
  },
  {
    num: '03',
    label: 'Step Three',
    title: 'Deployment and Launch',
    body:
      'We run full testing and deploy the system to your website as a lightweight embed with no rebuild required on your end. Most standard systems are live within two to four weeks of the discovery call.',
  },
  {
    num: '04',
    label: 'Step Four',
    title: 'Monthly System Management',
    body:
      'Every month we review conversation logs, update your knowledge base, apply security and compliance updates, monitor uptime, and send you a performance report. Your system keeps improving and you never have to manage any of it yourself.',
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
        {/* HERO */}
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
              <span style={{ color: TEAL }}>Intelligent Website Chat Systems</span>{' '}
              designed to acquire and keep{' '}
              <span style={{ color: TEAL }}>more clients.</span>
            </h1>
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

        {/* Mobile-only subhead — appears after the hero */}
        <section
          className="md:hidden px-6 text-center"
          style={{ paddingTop: '40px', paddingBottom: '64px' }}
        >
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

        {/* STAT — 280% */}
        <section
          className="px-6 sm:px-10 py-32"
          style={{
            background: '#0d1f1a',
            borderTop: '1px solid rgba(7,228,198,0.1)',
            borderBottom: '1px solid rgba(7,228,198,0.1)',
          }}
        >
          <FadeIn>
            <AnimatedStatCounter
              target={280}
              suffix="%"
              durationMs={1800}
              preHeadline="Consumers are"
              headline="more likely to convert with a business that has a responsive chat system on their website."
              citation=""
            />
          </FadeIn>
        </section>

        {/* TWO-COL PROOF */}
        <section className="px-6 sm:px-10 py-24" style={{ position: 'relative' }}>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <FadeIn>
              <h2
                className="font-extrabold tracking-tight leading-[1.1] mb-6"
                style={{
                  fontSize: 'clamp(32px, 4.5vw, 56px)',
                  letterSpacing: '-1.6px',
                  color: '#ffffff',
                }}
              >
                Your website works.
                <br />
                <span style={{ color: TEAL }}>Your chat system should too.</span>
              </h2>
              <p style={{ fontSize: '18px', lineHeight: 1.85, color: '#ffffff', marginBottom: '14px' }}>
                Website visitors are 2.8x to 3.0x more likely to convert with a
                business that has a chat interface online.
              </p>
              <p style={{ fontSize: '18px', lineHeight: 1.85, color: '#ffffff', marginBottom: '14px' }}>
                78% of online consumers commit to the business that responds
                first. Our chat system gives instant, context-relevant
                responses.
              </p>
              <p style={{ fontSize: '18px', lineHeight: 1.85, color: '#ffffff' }}>
                63% of e-commerce browsing and conversions happen outside of
                normal 9-to-5 business hours. Your customer support should be
                24/7.
              </p>
            </FadeIn>

            <FadeIn delay={160}>
              <div
                className="relative overflow-hidden"
                style={{
                  background: '#0a0f0d',
                  border: '1px solid rgba(7,228,198,0.14)',
                  borderRadius: '6px',
                  padding: '48px',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: TEAL,
                  }}
                />
                <p style={{ fontSize: '17px', color: '#ffffff', lineHeight: 1.8, margin: 0 }}>
                  Advanced, intelligent chat systems like Output handle over 80%
                  of routine inbound inquiries automatically. This saves tens
                  of hours of overhead while giving customers instant answers.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 3 MINI TILES */}
        <section
          className="px-6 sm:px-10 py-20"
          style={{ background: '#0d1f1a', borderTop: '1px solid rgba(7,228,198,0.1)' }}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4">
            {MINI_TILES.map((tile, i) => (
              <FadeIn key={tile.title} delay={120 + i * 100}>
                <div
                  className="relative overflow-hidden h-full"
                  style={{
                    background: '#0a0f0d',
                    border: '1px solid rgba(7,228,198,0.15)',
                    borderRadius: '4px',
                    padding: '36px 28px',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '2px',
                      background: TEAL,
                    }}
                  />
                  <div style={{ marginBottom: '20px' }}>{tile.icon}</div>
                  <h3
                    style={{
                      fontSize: '19px',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '12px',
                      lineHeight: 1.3,
                    }}
                  >
                    {tile.title}
                  </h3>
                  <p style={{ fontSize: '16px', color: '#ffffff', lineHeight: 1.75 }}>
                    {tile.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* INTEGRATIONS — slow marquee with logos */}
        <section
          className="py-24"
          style={{
            background: '#000',
            borderTop: '1px solid rgba(7,228,198,0.08)',
          }}
        >
          <div className="px-6 sm:px-10 text-center" style={{ marginBottom: '48px' }}>
            <FadeIn>
              <h2
                className="font-extrabold tracking-tight"
                style={{
                  fontSize: 'clamp(24px, 3vw, 40px)',
                  letterSpacing: '-1px',
                  color: '#ffffff',
                }}
              >
                Systems designed to{' '}
                <span style={{ color: TEAL }}>integrate with yours.</span>
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={120}>
            <IntegrationsMarquee />
          </FadeIn>
        </section>

        {/* INCREASE PROFITS — bar chart */}
        <section className="px-6 sm:px-10 py-32">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <FadeIn>
              <h2
                className="font-extrabold tracking-tight leading-[1.05] mb-5"
                style={{
                  fontSize: 'clamp(32px, 4.5vw, 58px)',
                  letterSpacing: '-2px',
                  color: '#ffffff',
                }}
              >
                Increase
                <br />
                <span style={{ color: TEAL }}>Your Profits.</span>
              </h2>
              <p style={{ fontSize: '18px', color: '#ffffff', lineHeight: 1.85 }}>
                Customers are converting when their needs are met quickly.
                Understanding exactly what your website visitors are asking and
                acting on that is the ultimate data for increasing profits.
              </p>
            </FadeIn>

            <FadeIn delay={160}>
              <div
                className="relative overflow-hidden"
                style={{
                  background: '#0a0f0d',
                  border: '1px solid rgba(7,228,198,0.18)',
                  borderRadius: '8px',
                  padding: '24px',
                }}
              >
                <AnimatedBarGraph />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* DECREASE COSTS — bullseye */}
        <section
          className="px-6 sm:px-10 py-32"
          style={{
            background: '#0d1f1a',
            borderTop: '1px solid rgba(7,228,198,0.1)',
            borderBottom: '1px solid rgba(7,228,198,0.1)',
          }}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <FadeIn>
              <div
                className="relative overflow-hidden flex items-center justify-center"
                style={{
                  background: '#0a0f0d',
                  border: '1px solid rgba(7,228,198,0.14)',
                  borderRadius: '6px',
                  padding: '56px',
                  aspectRatio: '1 / 1',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '2px',
                    background: TEAL,
                  }}
                />
                <svg width={220} height={220} viewBox="0 0 180 180" aria-hidden="true">
                  <circle cx={90} cy={90} r={80} fill="none" stroke={TEAL} strokeWidth={1.2} className="home-target-ring-1" />
                  <circle cx={90} cy={90} r={58} fill="none" stroke={TEAL} strokeWidth={1.2} className="home-target-ring-2" />
                  <circle cx={90} cy={90} r={36} fill="rgba(7,228,198,0.06)" stroke={TEAL} strokeWidth={1.5} className="home-target-ring-3" />
                  <circle cx={90} cy={90} r={14} fill={TEAL} className="home-target-dot" />
                  <g className="home-arrow-hit">
                    <line x1={140} y1={40} x2={96} y2={84} stroke="#ffffff" strokeWidth={2.5} strokeLinecap="round" />
                    <polyline points="134,36 140,40 144,46" fill="none" stroke="#ffffff" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                </svg>
              </div>
            </FadeIn>

            <FadeIn delay={160}>
              <h2
                className="font-extrabold tracking-tight leading-[1.05] mb-5"
                style={{
                  fontSize: 'clamp(32px, 4.5vw, 58px)',
                  letterSpacing: '-2px',
                  color: '#ffffff',
                }}
              >
                Decrease
                <br />
                <span style={{ color: TEAL }}>Your Costs.</span>
              </h2>
              <p style={{ fontSize: '18px', color: '#ffffff', lineHeight: 1.85 }}>
                No training needed, no turnover, 24/7 support. Your intelligent
                chat system supports your clients without the overhead. Being a
                better service team is the ultimate decrease in admin costs and
                wasted effort.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* DASHBOARD — kept from prior */}
        <section className="px-6 sm:px-10 py-32">
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
        <section
          className="px-6 sm:px-10 py-32"
          style={{ background: '#0d1f1a', borderTop: '1px solid rgba(7,228,198,0.1)' }}
        >
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <div className="text-center mb-14">
                <h2
                  className="font-extrabold tracking-tight"
                  style={{
                    fontSize: 'clamp(30px, 4vw, 52px)',
                    letterSpacing: '-1.6px',
                    color: '#ffffff',
                  }}
                >
                  Efficient system design in a{' '}
                  <span style={{ color: TEAL }}>four step process.</span>
                </h2>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-[2px]">
              {PROCESS_STEPS.map((step, i) => (
                <FadeIn key={step.num} delay={100 + i * 90}>
                  <div
                    className="relative overflow-hidden h-full"
                    style={{
                      background: '#0a0f0d',
                      border: '1px solid rgba(7,228,198,0.12)',
                      padding: '48px 44px',
                    }}
                  >
                    <div
                      style={{
                        fontSize: 'clamp(72px, 9vw, 110px)',
                        fontWeight: 900,
                        color: TEAL,
                        opacity: 0.7,
                        lineHeight: 1,
                        letterSpacing: '-4px',
                        marginBottom: '20px',
                      }}
                    >
                      {step.num}
                    </div>
                    <h3
                      style={{
                        fontSize: 'clamp(26px, 2.6vw, 34px)',
                        fontWeight: 800,
                        color: '#ffffff',
                        marginBottom: '18px',
                        letterSpacing: '-0.6px',
                        lineHeight: 1.15,
                      }}
                    >
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '18px', color: '#ffffff', lineHeight: 1.8 }}>
                      {step.body}
                    </p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* OUTCOMES — 3 cards, equalized title height */}
        <section className="px-6 sm:px-10 py-32">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-10 lg:gap-14">
              {OUTCOMES.map((card, i) => (
                <FadeIn key={card.title} delay={120 + i * 100}>
                  <div
                    className="h-full text-center flex flex-col items-center"
                    style={{
                      background: '#000',
                      border: '1px solid rgba(7,228,198,0.22)',
                      borderRadius: '6px',
                      position: 'relative',
                      overflow: 'hidden',
                      paddingLeft: '28px',
                      paddingRight: '28px',
                      paddingTop: '64px',
                      paddingBottom: '64px',
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
                        minHeight: '110px',
                        display: 'flex',
                        alignItems: 'center',
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

        {/* CHECKLIST */}
        <section
          className="px-6 sm:px-10 py-32"
          style={{
            background: '#000',
            borderTop: '1px solid rgba(7,228,198,0.1)',
            borderBottom: '1px solid rgba(7,228,198,0.1)',
          }}
        >
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-start">
            <FadeIn>
              <h2
                className="font-black tracking-tight"
                style={{
                  fontSize: 'clamp(32px, 4.4vw, 56px)',
                  letterSpacing: '-2px',
                  lineHeight: 1.08,
                  color: '#ffffff',
                  maxWidth: '480px',
                }}
              >
                Intelligent Website Chat Systems designed to{' '}
                <span style={{ color: TEAL }}>engage</span> your{' '}
                <span style={{ color: TEAL }}>website</span>{' '}
                <span style={{ color: TEAL }}>visitors</span> without scaling
                your team or expenses.
              </h2>
            </FadeIn>

            <FadeIn delay={120}>
              <HomeChecklist />
            </FadeIn>
          </div>
        </section>

        {/* CLOSING CTA */}
        <section
          className="px-6 sm:px-10 py-28 text-center"
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
