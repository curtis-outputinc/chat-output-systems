import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';
import SiteNav from './components/SiteNav';
import SiteFooter from './components/SiteFooter';
import StickyBookButton from './components/StickyBookButton';
import FadeIn from './components/FadeIn';
import AnimatedDashboard from './components/AnimatedDashboard';
import IntegrationsMarquee from './components/IntegrationsMarquee';
import AnimatedStatCounter from './components/AnimatedStatCounter';
import AnimatedNodesBackground from './components/AnimatedNodesBackground';
import HomeChecklist from './components/HomeChecklist';
import HomeStatsBlock from './components/HomeStatsBlock';
import TypingHeading from './components/TypingHeading';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Intelligent Website Chat Systems — Output Systems',
  description:
    'Welcome to your fully designed and managed Output-powered chat system. Your intelligent chat agent can intuitively answer website visitor questions, capture lead info, support customer needs, and give your business clear and unique insights into what your customers are asking for.',
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
    title: 'Around-the-Clock Operations, 24/7',
    body:
      'Your customers are online 24 hours a day, 7 days a week. Your customer support should be too.',
    icon: (
      <svg width={124} height={124} viewBox="0 0 52 52" aria-hidden="true">
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
      <svg width={124} height={124} viewBox="0 0 52 52" aria-hidden="true">
        {/* Head */}
        <rect x={10} y={18} width={32} height={24} rx={4} fill="none" stroke={TEAL} strokeWidth={1.5} opacity={0.7} />
        {/* Antenna mount */}
        <rect x={18} y={12} width={16} height={8} rx={3} fill="none" stroke={TEAL} strokeWidth={1.2} opacity={0.5} />
        <line x1={26} y1={12} x2={26} y2={8} stroke={TEAL} strokeWidth={1.2} opacity={0.5} />
        <circle cx={26} cy={7} r={2} fill={TEAL} opacity={0.7} />
        {/* Eyes */}
        <circle cx={20} cy={28} r={3} fill={TEAL} opacity={0.8} />
        <circle cx={32} cy={28} r={3} fill={TEAL} opacity={0.8} />
        {/* Speaking mouth — ellipse whose vertical radius (ry) opens/closes
            in a 4-frame cycle so it reads as talking, not just bouncing. */}
        <ellipse cx={26} cy={36} rx={5} ry={1} fill={TEAL}>
          <animate
            attributeName="ry"
            values="1;3.5;1;2.5;1"
            keyTimes="0;0.25;0.5;0.75;1"
            dur="0.8s"
            repeatCount="indefinite"
          />
        </ellipse>
      </svg>
    ),
  },
  {
    title: '100% Done-For-You Service',
    body:
      'Most traditional chatbots require you to launch, program, update and maintain. We handle everything from start to finish and beyond.',
    icon: (
      <svg width={124} height={124} viewBox="0 0 52 52" aria-hidden="true">
        {/* Clipboard outline */}
        <rect x={11} y={10} width={30} height={36} rx={3} fill="none" stroke={TEAL} strokeWidth={1.5} opacity={0.7} />
        {/* Clip on top */}
        <rect x={19} y={6} width={14} height={6} rx={1.5} fill="none" stroke={TEAL} strokeWidth={1.2} opacity={0.55} />
        {/* Three list rows — each has a checkmark (stroke-drawn) + body line */}
        <polyline points="15,20 17.5,22.5 21,18.5" fill="none" stroke={TEAL} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="home-clip-check-1" />
        <line x1={24} y1={20} x2={37} y2={20} stroke={TEAL} strokeWidth={1.4} opacity={0.6} />

        <polyline points="15,28 17.5,30.5 21,26.5" fill="none" stroke={TEAL} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="home-clip-check-2" />
        <line x1={24} y1={28} x2={37} y2={28} stroke={TEAL} strokeWidth={1.4} opacity={0.6} />

        <polyline points="15,36 17.5,38.5 21,34.5" fill="none" stroke={TEAL} strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="home-clip-check-3" />
        <line x1={24} y1={36} x2={37} y2={36} stroke={TEAL} strokeWidth={1.4} opacity={0.6} />
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

export default function HomePage() {
  return (
    <>
      <AnimatedNodesBackground />

      <SiteNav active="/" />

      <main className="text-white pb-40" style={{ position: 'relative', zIndex: 1 }}>
        {/* HERO */}
        <section
          className="px-6 sm:px-10 text-center flex flex-col items-center"
          style={{
            minHeight: '100vh',
            paddingTop: 'clamp(120px, 26vh, 32vh)',
            paddingBottom: '40px',
            justifyContent: 'flex-start',
          }}
        >
          <FadeIn durationMs={3000}>
            <h1
              className="font-black tracking-tight leading-[1.04] mx-auto mb-8"
              style={{
                fontSize: 'clamp(43px, 6.7vw, 86px)',
                letterSpacing: '-3px',
                maxWidth: '1100px',
              }}
            >
              Intelligent Website Chat Systems designed to acquire and retain{' '}
              <span style={{ color: TEAL, whiteSpace: 'nowrap' }}>
                more clients
              </span>
              .
            </h1>
          </FadeIn>
          <FadeIn delay={2000} durationMs={3000}>
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
              Welcome to your fully designed and managed Output-powered chat
              system. Your intelligent chat agent can intuitively answer
              website visitor questions, capture lead info, support customer
              needs, and give your business clear and unique insights into
              what your customers are asking for.
            </p>
          </FadeIn>
        </section>

        {/* Mobile-only subhead — appears after the hero (scroll-triggered).
            On mobile the subhead lives below the fold, so the scroll-into-view
            FadeIn does the right thing without the 2s delay (no need to wait
            on a section the user just scrolled to). */}
        <section
          className="md:hidden px-6 text-center"
          style={{ paddingTop: '40px', paddingBottom: '64px' }}
        >
          <FadeIn durationMs={3000}>
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
              Welcome to your fully designed and managed Output-powered chat
              system. Your intelligent chat agent can intuitively answer
              website visitor questions, capture lead info, support customer
              needs, and give your business clear and unique insights into
              what your customers are asking for.
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

        {/* STAT — 280% + woman-with-phone image */}
        <section
          className="px-6 sm:px-10 py-28"
          style={{
            background: '#0d1f1a',
            borderTop: '1px solid rgba(7,228,198,0.1)',
            borderBottom: '1px solid rgba(7,228,198,0.1)',
          }}
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-16 items-center">
            <FadeIn>
              <AnimatedStatCounter
                target={280}
                suffix="%"
                durationMs={1800}
                preHeadline="Consumers are"
                headline="more likely to convert with a business that has a responsive chat system on their website."
                citation="(2026 Marketing Mag)"
              />
            </FadeIn>
            <FadeIn delay={160}>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/woman-with-phone.png"
                  alt="Customer using a website chat on her phone"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                  style={{ maxWidth: '520px', borderRadius: '8px' }}
                  priority={false}
                />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* 3 MINI TILES — bigger card, +1px fonts, larger icons */}
        <section
          className="px-6 sm:px-10 py-28"
          style={{ background: '#0d1f1a', borderTop: '1px solid rgba(7,228,198,0.1)' }}
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-5">
            {MINI_TILES.map((tile, i) => (
              <FadeIn key={tile.title} delay={120 + i * 100}>
                <div
                  className="relative overflow-hidden h-full"
                  style={{
                    background: '#0a0f0d',
                    border: '1px solid rgba(7,228,198,0.15)',
                    borderRadius: '5px',
                    padding: '46px 36px',
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
                  <div style={{ marginBottom: '24px' }}>{tile.icon}</div>
                  <h3
                    style={{
                      fontSize: '24px',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '14px',
                      lineHeight: 1.25,
                    }}
                  >
                    <TypingHeading
                      totalMs={1800}
                      triggerOnScroll
                      segments={[{ text: tile.title }]}
                    />
                  </h3>
                  <p style={{ fontSize: '17px', color: '#ffffff', lineHeight: 1.75 }}>
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
                  fontSize: 'clamp(25px, 3vw, 41px)',
                  letterSpacing: '-1px',
                  color: '#ffffff',
                }}
              >
                <TypingHeading
                  totalMs={1800}
                  triggerOnScroll
                  segments={[
                    { text: 'Systems designed to ' },
                    { text: 'integrate with yours.', color: TEAL },
                  ]}
                />
              </h2>
            </FadeIn>
          </div>
          <FadeIn delay={120}>
            <IntegrationsMarquee />
          </FadeIn>
        </section>

        {/* STATS — pie chart + check-marked bullets, 2-col (moved here from
            above the mini-tiles per Curtis: now sits under the integrations
            marquee). */}
        <section className="px-6 sm:px-10 py-24" style={{ position: 'relative' }}>
          <div className="max-w-6xl mx-auto">
            <FadeIn>
              <h2
                className="font-extrabold tracking-tight leading-[1.1] mx-auto mb-14 text-center"
                style={{
                  fontSize: 'clamp(32px, 4.5vw, 56px)',
                  letterSpacing: '-1.6px',
                  color: '#ffffff',
                  maxWidth: '900px',
                }}
              >
                <TypingHeading
                  totalMs={2400}
                  triggerOnScroll
                  segments={[
                    { text: 'Is your business adapting to ' },
                    { text: 'today’s customer trends?', color: TEAL },
                  ]}
                />
              </h2>
            </FadeIn>

            <FadeIn delay={120}>
              <HomeStatsBlock />
            </FadeIn>
          </div>
        </section>

        {/* INCREASE PROFITS — bar chart */}
        <section className="px-6 sm:px-10 py-32">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <FadeIn>
              <h2
                className="font-extrabold tracking-tight leading-[1.05] mb-5"
                style={{
                  fontSize: 'clamp(32px, 4.5vw, 58px)',
                  letterSpacing: '-2px',
                  color: '#ffffff',
                }}
              >
                <TypingHeading
                  totalMs={1800}
                  triggerOnScroll
                  segments={[
                    { text: 'Increase', br: true },
                    { text: 'Your Profits.', color: TEAL },
                  ]}
                />
              </h2>
              <p style={{ fontSize: '19px', color: '#ffffff', lineHeight: 1.85 }}>
                Our system provides instantaneous responses relevant to your
                specific business while giving you data on what your clients
                are asking from you the most.
              </p>
            </FadeIn>

            <FadeIn delay={160}>
              <div className="flex items-center justify-center">
                <Image
                  src="/images/man-with-computer.png"
                  alt="Business owner reviewing performance data on his computer"
                  width={720}
                  height={720}
                  className="w-full h-auto"
                  style={{ maxWidth: '624px', borderRadius: '8px' }}
                />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* DECREASE COSTS — meeting image */}
        <section
          className="px-6 sm:px-10 py-32"
          style={{
            background: '#0d1f1a',
            borderTop: '1px solid rgba(7,228,198,0.1)',
            borderBottom: '1px solid rgba(7,228,198,0.1)',
          }}
        >
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <FadeIn className="md:order-1 order-2">
              <div className="flex items-center justify-center">
                <Image
                  src="/images/meeting.png"
                  alt="Team meeting reviewing operations"
                  width={600}
                  height={600}
                  className="w-full h-auto"
                  style={{ maxWidth: '520px', borderRadius: '8px' }}
                />
              </div>
            </FadeIn>

            <FadeIn delay={160} className="md:order-2 order-1">
              <div>
                <h2
                  className="font-extrabold tracking-tight leading-[1.05] mb-5"
                  style={{
                    fontSize: 'clamp(32px, 4.5vw, 58px)',
                    letterSpacing: '-2px',
                    color: '#ffffff',
                  }}
                >
                  <TypingHeading
                    totalMs={1800}
                    triggerOnScroll
                    segments={[
                      { text: 'Decrease', br: true },
                      { text: 'Your Expenses.', color: TEAL },
                    ]}
                  />
                </h2>
                <p style={{ fontSize: '19px', color: '#ffffff', lineHeight: 1.85 }}>
                  No training needed, no turnover, 24/7 support. Your
                  intelligent chat system supports your clients with almost
                  90% less of the overhead costs. Better service. More
                  accurate responses. Lower overhead.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* DASHBOARD — kept from prior */}
        <section className="px-6 sm:px-10 py-32">
          <div className="max-w-3xl mx-auto text-center">
            <FadeIn>
              <SectionHeading>
                <TypingHeading
                  totalMs={1800}
                  triggerOnScroll
                  segments={[
                    { text: 'Customized ' },
                    { text: 'insight dashboards.', color: TEAL },
                  ]}
                />
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
                  <TypingHeading
                    totalMs={2200}
                    triggerOnScroll
                    segments={[
                      { text: 'Efficient system design in a ' },
                      { text: '4 step process.', color: TEAL },
                    ]}
                  />
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

        {/* STAT — 74% */}
        <section
          className="px-6 sm:px-10 py-28"
          style={{
            background: '#0d1f1a',
            borderTop: '1px solid rgba(7,228,198,0.1)',
            borderBottom: '1px solid rgba(7,228,198,0.1)',
          }}
        >
          <FadeIn>
            <AnimatedStatCounter
              target={74}
              suffix="%"
              durationMs={1800}
              headline={
                <>
                  of consumers expect{' '}
                  <span style={{ color: TEAL }}>customer service</span>
                  <br />
                  to be available{' '}
                  <span style={{ color: TEAL }}>24/7.</span>
                </>
              }
              citation="(Zendesk CX Trends, 2026)"
            />
          </FadeIn>
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
                  maxWidth: '520px',
                }}
              >
                <TypingHeading
                  totalMs={7000}
                  triggerOnScroll
                  segments={[
                    {
                      text:
                        'Intelligent Chat Agents designed to support your website visitors towards ',
                    },
                    { text: 'conversion', color: TEAL },
                    { text: ' and your organization towards ' },
                    { text: 'efficiency', color: TEAL },
                    { text: '.' },
                  ]}
                />
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
            <h2
              className="font-extrabold tracking-tight leading-[1.08] mb-10 mx-auto"
              style={{
                fontSize: 'clamp(36px, 5vw, 64px)',
                letterSpacing: '-1.8px',
                maxWidth: '900px',
              }}
            >
              <TypingHeading
                totalMs={2400}
                triggerOnScroll
                segments={[
                  { text: 'Ready to see what’s possible for ' },
                  { text: 'your business?', color: TEAL },
                ]}
              />
            </h2>
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
