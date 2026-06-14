import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import SiteNav from './components/SiteNav';
import SiteFooter from './components/SiteFooter';
import StickyBookButton from './components/StickyBookButton';

const TEAL = '#07e4c6';

export const metadata: Metadata = {
  title: 'Intelligent Website Chat Systems — Output Systems',
  description:
    'AI-powered intelligent chat systems that answer your customers and feed your business valuable data insights.',
};

const PILLARS = [
  {
    icon: '↑',
    title: 'Increase Your',
    accent: 'Profits',
    body:
      'Customers convert when their needs are met quickly. Understanding what your visitors are asking is the ultimate data for increasing profits.',
  },
  {
    icon: '↓',
    title: 'Decrease Your',
    accent: 'Costs',
    body:
      'No training, no turnover, 24/7 support, no staff overhead. Support your clients while collecting data on how to better serve them.',
  },
  {
    icon: '✓',
    title: 'Efficiently',
    accent: 'Save Time',
    body:
      'Every hour your team spends answering the same questions is an hour they cannot spend closing new business.',
  },
];

const FEATURES = [
  'Captures leads automatically',
  'Qualifies prospects instantly',
  'Alerts your team in real time',
  'Answers customers around the clock',
  'Books appointments without staff',
  'Trains on your business content',
  'Updates knowledge base monthly',
  'Delivers monthly performance insights',
  'Scales without adding headcount',
  'Fully managed from day one',
];

const PROCESS_STEPS = [
  {
    num: '01',
    label: 'Step One',
    title: 'Free Discovery Call',
    body:
      'We learn about your business and identify the right system for your situation.',
  },
  {
    num: '02',
    label: 'Step Two',
    title: 'Design and Demo',
    body:
      'We build a working demo trained on your actual services, policies, and brand.',
  },
  {
    num: '03',
    label: 'Step Three',
    title: 'Deployment and Launch',
    body:
      'We run full testing and deploy the system to your website within 2 to 4 weeks.',
  },
  {
    num: '04',
    label: 'Step Four',
    title: 'Monthly Management',
    body:
      'We review, update, and report every month. You never manage any of it yourself.',
  },
];

const SYSTEMS = [
  {
    href: '/intelligent-chat-systems/standard',
    label: 'Standard',
    title: 'Standard Intelligent Website Chat System',
    body:
      'Answers questions, captures leads, and guides visitors 24/7. Starting at $2,399 setup.',
  },
  {
    href: '/intelligent-chat-systems/service',
    label: 'Service Business',
    title: 'Customer Chat System for Service Businesses',
    body:
      'Qualifies leads, books appointments, and alerts your team when a serious prospect arrives.',
  },
  {
    href: '/intelligent-chat-systems/retail',
    label: 'Retail and E-Commerce',
    title: 'Customer Chat System for Retail and E-Commerce',
    body:
      'Product help, order questions, cart recovery, and return data all automated.',
  },
  {
    href: '/intelligent-chat-systems/internal',
    label: 'Internal',
    title: 'Internal Chat System for Your Team',
    body:
      'Instant access to SOPs, policies, and company knowledge for every team member.',
  },
];

export default function Home() {
  return (
    <>
      <SiteNav active="/" />

      {/* HERO */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          padding: '120px 24px 80px',
          position: 'relative',
          overflow: 'hidden',
          background: '#000',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              'radial-gradient(ellipse at 15% 60%, rgba(7,228,198,0.06) 0%, transparent 55%)',
            pointerEvents: 'none',
          }}
        />
        <div className="max-w-6xl mx-auto w-full" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '820px' }}>
            <div className="os-hero-tag">Powered by AI</div>
            <h1
              style={{
                fontSize: 'clamp(44px, 6.5vw, 80px)',
                fontWeight: 900,
                lineHeight: 1.04,
                letterSpacing: '-2.5px',
                color: '#fff',
                marginBottom: '28px',
                maxWidth: '820px',
              }}
            >
              Intelligent Website Chat that does more than{' '}
              <em style={{ fontStyle: 'normal', color: TEAL }}>
                just answer questions.
              </em>
            </h1>
            <p
              style={{
                fontSize: '19px',
                color: 'rgba(255,255,255,0.8)',
                maxWidth: '680px',
                lineHeight: 1.8,
                marginBottom: '36px',
              }}
            >
              Welcome to your intelligent chat system that not only interacts with
              your customers but also feeds your business the valuable data
              insights from customer interactions online.
            </p>
            <div className="os-dfy-badge">
              <span>100% Done For You Design, Setup, and Monthly Management Included</span>
            </div>
          </div>
        </div>
      </section>

      <div className="os-rule" />

      {/* STAT BAND */}
      <section style={{ padding: '72px 24px', background: '#000', textAlign: 'center' }}>
        <p
          style={{
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: TEAL,
            marginBottom: '32px',
          }}
        >
          Why Intelligent Website Chat
        </p>
        <div
          className="grid gap-[2px] max-w-5xl mx-auto"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}
        >
          {[
            { stat: '78%', body: 'of online consumers convert with the business that responds first' },
            { stat: '67%', body: 'of e-commerce browsing and conversions happen outside business hours' },
            { stat: '24/7', body: 'your customers are online around the clock. Your support should be too' },
          ].map(({ stat, body }) => (
            <div
              key={stat}
              style={{
                background: '#0a0a0a',
                border: '1px solid rgba(7,228,198,0.08)',
                padding: '48px 32px',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontSize: '64px',
                  fontWeight: 900,
                  color: TEAL,
                  letterSpacing: '-3px',
                  lineHeight: 1,
                  marginBottom: '12px',
                }}
              >
                {stat}
              </div>
              <div style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
                {body}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* INTEGRATION STRIP */}
      <section
        style={{
          padding: '40px 0',
          background: '#050505',
          borderTop: '1px solid rgba(7,228,198,0.06)',
          borderBottom: '1px solid rgba(7,228,198,0.06)',
          overflow: 'hidden',
        }}
      >
        <p
          style={{
            textAlign: 'center',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.35)',
            marginBottom: '28px',
          }}
        >
          Systems Designed to Integrate with Yours
        </p>
        <div className="text-center" style={{ color: 'rgba(255,255,255,0.35)', fontSize: '14px' }}>
          Microsoft · Google · HubSpot · Slack · Stripe · Notion · Claude AI · Calendly
        </div>
      </section>

      {/* THREE PILLARS */}
      <section style={{ padding: '88px 24px', background: '#0d1f1a' }}>
        <p
          style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: TEAL,
            marginBottom: '48px',
            textAlign: 'center',
          }}
        >
          What Every System Delivers
        </p>
        <div
          className="grid gap-[2px] max-w-6xl mx-auto"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}
        >
          {PILLARS.map(({ icon, title, accent, body }) => (
            <div
              key={accent}
              style={{
                background: '#000',
                border: '1px solid rgba(7,228,198,0.1)',
                padding: '48px 36px',
              }}
            >
              <div style={{ fontSize: '40px', marginBottom: '20px' }}>{icon}</div>
              <div
                style={{
                  fontSize: '20px',
                  fontWeight: 900,
                  color: '#fff',
                  marginBottom: '12px',
                }}
              >
                {title} <span style={{ color: TEAL }}>{accent}</span>
              </div>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURE LIST */}
      <section style={{ padding: '88px 24px', background: '#000' }}>
        <div
          className="grid gap-12 max-w-6xl mx-auto items-center"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}
        >
          <div>
            <p
              style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: TEAL,
                marginBottom: '16px',
              }}
            >
              What Our Systems Do
            </p>
            <h2
              style={{
                fontSize: 'clamp(32px, 4vw, 56px)',
                fontWeight: 900,
                letterSpacing: '-1.5px',
                lineHeight: 1.05,
                marginBottom: '32px',
              }}
            >
              Intelligent Website Chat Systems designed to engage your website
              visitors without scaling your team or expenses.
            </h2>
          </div>
          <ul className="list-none flex flex-col" style={{ gap: '14px', padding: 0, margin: 0 }}>
            {FEATURES.map((f) => (
              <li
                key={f}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  fontSize: '17px',
                  color: 'rgba(255,255,255,0.8)',
                }}
              >
                <span style={{ color: TEAL, fontWeight: 700 }}>✓</span> {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4-STEP PROCESS PREVIEW */}
      <section style={{ padding: '88px 24px', background: '#0d1f1a' }}>
        <p
          style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: TEAL,
            marginBottom: '16px',
            textAlign: 'center',
          }}
        >
          How It Works
        </p>
        <h2
          style={{
            fontSize: 'clamp(32px, 4vw, 56px)',
            fontWeight: 900,
            letterSpacing: '-1.5px',
            lineHeight: 1.05,
            textAlign: 'center',
            marginBottom: '60px',
          }}
        >
          4 Steps to a <span style={{ color: TEAL }}>Fully Running System</span>
        </h2>
        <div
          className="grid gap-[2px] max-w-6xl mx-auto"
          style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}
        >
          {PROCESS_STEPS.map(({ num, label, title, body }) => (
            <div
              key={num}
              style={{
                background: '#000',
                border: '1px solid rgba(7,228,198,0.08)',
                padding: '40px 32px',
              }}
            >
              <div
                style={{
                  fontSize: '64px',
                  fontWeight: 900,
                  color: 'rgba(7,228,198,0.18)',
                  lineHeight: 1,
                  letterSpacing: '-3px',
                  marginBottom: '20px',
                }}
              >
                {num}
              </div>
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: TEAL,
                  marginBottom: '10px',
                }}
              >
                {label}
              </div>
              <div style={{ fontSize: '18px', fontWeight: 800, marginBottom: '12px' }}>
                {title}
              </div>
              <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>
                {body}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center" style={{ marginTop: '48px' }}>
          <Link
            href="/process"
            style={{
              display: 'inline-block',
              fontSize: '13px',
              fontWeight: 700,
              letterSpacing: '2px',
              textTransform: 'uppercase',
              color: TEAL,
              border: '1px solid rgba(7,228,198,0.3)',
              padding: '14px 32px',
            }}
          >
            See the Full Process →
          </Link>
        </div>
      </section>

      {/* SYSTEMS GRID */}
      <section style={{ padding: '88px 24px', background: '#000' }}>
        <div className="max-w-6xl mx-auto">
          <p
            style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: TEAL,
              marginBottom: '16px',
            }}
          >
            What We Build
          </p>
          <h2
            style={{
              fontSize: 'clamp(32px, 4vw, 56px)',
              fontWeight: 900,
              letterSpacing: '-1.5px',
              lineHeight: 1.05,
              marginBottom: '60px',
            }}
          >
            Find the Right System
            <br />
            <span style={{ color: TEAL }}>for Your Business</span>
          </h2>
          <div
            className="grid gap-[2px]"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))' }}
          >
            {SYSTEMS.map(({ href, label, title, body }) => (
              <Link
                key={href}
                href={href}
                style={{
                  background: '#0a0a0a',
                  border: '1px solid rgba(7,228,198,0.08)',
                  padding: '48px 40px',
                  display: 'block',
                  transition: 'border-color 0.2s',
                }}
              >
                <div
                  style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: TEAL,
                    marginBottom: '12px',
                  }}
                >
                  {label}
                </div>
                <div
                  style={{
                    fontSize: '22px',
                    fontWeight: 900,
                    color: '#fff',
                    marginBottom: '12px',
                    letterSpacing: '-0.5px',
                  }}
                >
                  {title}
                </div>
                <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>
                  {body}
                </p>
                <div
                  style={{
                    marginTop: '20px',
                    fontSize: '13px',
                    fontWeight: 700,
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    color: TEAL,
                  }}
                >
                  Learn More →
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '32px' }}>
            <Link
              href="/intelligent-chat-systems/custom"
              style={{
                display: 'inline-block',
                background: '#0d1f1a',
                border: '1px solid rgba(7,228,198,0.2)',
                padding: '48px 40px',
                width: '100%',
                maxWidth: '600px',
                textAlign: 'left',
                transition: 'border-color 0.2s',
              }}
            >
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  color: TEAL,
                  marginBottom: '12px',
                }}
              >
                Fully Custom
              </div>
              <div
                style={{
                  fontSize: '22px',
                  fontWeight: 900,
                  color: '#fff',
                  marginBottom: '12px',
                  letterSpacing: '-0.5px',
                }}
              >
                Custom Chat System Built for Your Organization
              </div>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>
                If your requirements go beyond a standard package, we build it from
                scratch around your exact needs.
              </p>
              <div
                style={{
                  marginTop: '20px',
                  fontSize: '13px',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  color: TEAL,
                }}
              >
                Learn More →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section style={{ padding: '88px 24px', background: '#0d1f1a', textAlign: 'center' }}>
        <p
          style={{
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            color: TEAL,
            marginBottom: '24px',
          }}
        >
          Ready to Start
        </p>
        <h2
          style={{
            fontSize: 'clamp(32px, 4vw, 56px)',
            fontWeight: 900,
            letterSpacing: '-1.5px',
            lineHeight: 1.05,
            marginBottom: '20px',
          }}
        >
          Start with a free discovery call.
        </h2>
        <p
          style={{
            fontSize: '18px',
            color: 'rgba(255,255,255,0.65)',
            maxWidth: '520px',
            margin: '0 auto 40px',
            lineHeight: 1.8,
          }}
        >
          We will learn about your business, show you what the system looks like,
          and tell you exactly what it would produce for your customers and your
          team.
        </p>
        <Link
          href="/contact"
          style={{
            display: 'inline-block',
            background: '#05b89e',
            color: '#fff',
            fontSize: '14px',
            fontWeight: 700,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            padding: '18px 48px',
            borderRadius: '4px',
            textDecoration: 'none',
          }}
        >
          BOOK A FREE DISCOVERY CALL
        </Link>
      </section>

      <SiteFooter />
      <StickyBookButton />
      <Script src="/embed.js" strategy="afterInteractive" />
    </>
  );
}
