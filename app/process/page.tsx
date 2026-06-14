import type { Metadata } from 'next';
import Script from 'next/script';
import SiteNav from '../components/SiteNav';
import AnimatedNodesBackground from '../components/AnimatedNodesBackground';
import SiteFooter from '../components/SiteFooter';
import StickyBookButton from '../components/StickyBookButton';

const TEAL = '#07e4c6';

export const metadata: Metadata = {
  title: 'Our Process',
  description:
    'How we build, deploy, and manage your intelligent chat system from discovery call to monthly management.',
};

const STEPS = [
  {
    num: '01',
    label: 'Step One',
    title: 'The Free Discovery Call',
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
    label: 'Step Two',
    title: 'Design and Demo',
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
    label: 'Step Three',
    title: 'Deployment and Launch',
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
    label: 'Step Four',
    title: 'Monthly System Management',
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

export default function ProcessPage() {
  return (
    <>
      <AnimatedNodesBackground />
      <SiteNav active="/process" />

      <div className="os-hero">
        <div className="os-hero-tag">Our Process</div>
        <h1>
          Here is how we build you a <em>fully running system.</em>
        </h1>
        <p className="os-hero-intro">
          We handle every step of the process for you. You do not need technical
          knowledge, a development team, or hours of your own time. You provide
          the business context. We do the rest.
        </p>
        <div className="os-dfy-badge">
          <span>100% Done For You — From Discovery Call to Monthly Management</span>
        </div>
      </div>

      <div className="os-rule" />

      <section style={{ padding: '72px 24px', background: '#000' }}>
        <div className="max-w-6xl mx-auto">
          <p className="os-section-label">How It Works</p>

          {STEPS.map(({ num, label, title, paragraphs, bullets }, idx) => (
            <div
              key={num}
              className="grid items-start"
              style={{
                gridTemplateColumns: 'minmax(60px, 80px) 1fr',
                gap: '24px',
                borderTop: '1px solid rgba(7,228,198,0.14)',
                borderBottom:
                  idx === STEPS.length - 1
                    ? '1px solid rgba(7,228,198,0.14)'
                    : undefined,
                padding: '64px 0',
              }}
            >
              <div
                style={{
                  fontSize: 'clamp(48px, 8vw, 73px)',
                  fontWeight: 800,
                  color: 'rgba(7,228,198,0.22)',
                  lineHeight: 1,
                  letterSpacing: '-3px',
                }}
              >
                {num}
              </div>
              <div>
                <div
                  style={{
                    fontSize: '12px',
                    fontWeight: 700,
                    letterSpacing: '3px',
                    textTransform: 'uppercase',
                    color: TEAL,
                    marginBottom: '8px',
                  }}
                >
                  {label}
                </div>
                <h2
                  style={{
                    fontSize: 'clamp(26px, 3.4vw, 32px)',
                    fontWeight: 900,
                    letterSpacing: '-1px',
                    marginBottom: '20px',
                  }}
                >
                  {title}
                </h2>
                {paragraphs.map((p, i) => (
                  <p
                    key={i}
                    style={{
                      fontSize: '18px',
                      color: 'rgba(255,255,255,0.8)',
                      lineHeight: 1.85,
                      marginBottom: i === paragraphs.length - 1 ? '20px' : '16px',
                      maxWidth: '720px',
                    }}
                  >
                    {p}
                  </p>
                ))}
                <ul
                  className="list-none flex flex-col"
                  style={{ gap: '13px', maxWidth: '640px', padding: 0, margin: 0 }}
                >
                  {bullets.map((b) => (
                    <li
                      key={b}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '14px',
                        fontSize: '18px',
                        color: 'rgba(255,255,255,0.8)',
                        lineHeight: 1.5,
                      }}
                    >
                      <span
                        style={{
                          color: TEAL,
                          fontWeight: 700,
                          fontSize: '16px',
                          flexShrink: 0,
                          marginTop: '2px',
                        }}
                      >
                        ✓
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="os-rule" />

      <div className="os-bottom-cta">
        <h2>Ready to start with Step One?</h2>
        <p>
          Book a free discovery call. It takes about 30 minutes and by the end of
          it you will know exactly what your system would look like and what it
          would cost.
        </p>
      </div>

      <SiteFooter />
      <StickyBookButton />
      <Script src="/embed.js" strategy="afterInteractive" />
    </>
  );
}
