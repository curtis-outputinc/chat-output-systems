import type { Metadata } from 'next';
import Script from 'next/script';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';
import StickyBookButton from '../components/StickyBookButton';

const TEAL = '#07e4c6';

export const metadata: Metadata = {
  title: 'About',
  description:
    'We do not build generic chat systems. We build Output Systems. Two outputs, one system, 100% done for you.',
};

const OUTPUT_ONE_BULLETS = [
  '24/7 customer support with no wait times',
  'Live pricing, service, and qualification info',
  'Appointment scheduling linked to your calendar',
  'Full lead capture before a human gets involved',
  'Hot lead notification to your team in real time',
  'Multilingual support as a standard capability',
  'Integrations with your existing platforms',
];

const OUTPUT_TWO_BULLETS = [
  'What visitors are actually asking for in their words',
  'Where visitors drop off and why',
  'Objections and concerns that come up repeatedly',
  'Information gaps your website is missing',
  'How customers perceive your brand and services',
  'Monthly insights surfaced back to your team',
  'Data that improves both your business and the system',
];

const MONTHLY_TASKS = [
  'Conversation log review to catch anything inaccurate or off-brand',
  'Unanswered question tracking and knowledge base expansion',
  'API and security updates applied automatically',
  'Uptime monitoring with real-time alerting',
  'Knowledge base updated to reflect current pricing, services, and policies',
  'Monthly performance report delivered to your team',
];

function bulletDot(): React.CSSProperties {
  return {
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: 'translateY(-50%)',
    width: '6px',
    height: '6px',
    background: TEAL,
    borderRadius: '50%',
  };
}

export default function AboutPage() {
  return (
    <>
      <SiteNav active="/about" />

      <div className="os-hero">
        <div className="os-hero-tag">About Output Systems</div>
        <h1>
          We do not build intelligent chat systems.<br />
          We build <em>Output Systems.</em>
        </h1>
        <p className="os-hero-intro">
          Most businesses are focused on one side of the equation. They want a tool that helps their customers get answers faster. What they are not thinking about is what those conversations reveal about their business. Output Systems is built to deliver both at the same time.
        </p>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', maxWidth: '700px', lineHeight: 1.8, marginTop: '16px' }}>
          Every system we build produces two distinct outputs simultaneously. One facing your customers, one facing your business. That dual output structure is what separates everything we build from every traditional intelligent chat system on the market. Fully done-for-you. Fully managed. Built to get smarter every month.
        </p>
      </div>

      <div className="os-rule" />

      <section style={{ padding: '72px 60px', background: '#0d1f1a' }}>
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: TEAL, marginBottom: '20px' }}>The Core Difference</p>
        <h2 style={{ fontSize: 'clamp(30px,4vw,52px)', fontWeight: 900, letterSpacing: '-1.5px', marginBottom: '20px' }}>Two Outputs. One System.</h2>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', maxWidth: '820px', lineHeight: 1.85, marginBottom: '16px' }}>
          Most businesses think of an intelligent chat system as something that helps their customers find answers. That is one output. What they are missing is the second one.
        </p>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', maxWidth: '820px', lineHeight: 1.85, marginBottom: '32px' }}>
          Every conversation a visitor has with our system generates a layer of customer intelligence. What people are asking for. Where they drop off. What objections they raise. What information is missing from your website. How your business is being perceived by the people most likely to buy from you. Traditional intelligent chat systems discard that data entirely.
        </p>

        <blockquote style={{ borderLeft: `3px solid ${TEAL}`, padding: '24px 32px', background: '#0a0a0a', margin: '32px 0', maxWidth: '820px' }}>
          <p style={{ fontSize: '19px', fontWeight: 600, lineHeight: 1.6, fontStyle: 'italic' }}>
            Traditional intelligent chat systems answer your customer&apos;s questions. Output Systems answers your customer&apos;s questions and helps them take actions such as booking appointments, submitting their information, and taking the next step with your business. Output Systems then turns every one of those conversations into <span style={{ color: TEAL, fontStyle: 'normal' }}>insights and intelligence your team can act on.</span>
          </p>
        </blockquote>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginTop: '40px', maxWidth: '820px' }}>
          <div style={{ background: '#000', border: '1px solid rgba(7,228,198,0.2)', borderTop: `3px solid ${TEAL}`, padding: '32px 28px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: TEAL, marginBottom: '10px' }}>Output One</div>
            <div style={{ fontSize: '19px', fontWeight: 800, marginBottom: '14px' }}>What Your Customers Experience</div>
            <div style={{ fontSize: '17px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
              Instant answers, 24/7 support, appointment booking, lead capture, and seamless service — all without a human in the loop.
            </div>
          </div>
          <div style={{ background: '#000', border: '1px solid rgba(7,228,198,0.2)', borderTop: `3px solid ${TEAL}`, padding: '32px 28px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: TEAL, marginBottom: '10px' }}>Output Two</div>
            <div style={{ fontSize: '19px', fontWeight: 800, marginBottom: '14px' }}>What Your Business Learns</div>
            <div style={{ fontSize: '17px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.7 }}>
              Customer intelligence captured from every conversation. What visitors want, where they drop off, and what your business needs to improve.
            </div>
          </div>
        </div>
      </section>

      <div className="os-rule" />

      <section style={{ padding: '72px 60px', background: '#000' }}>
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: TEAL, marginBottom: '20px' }}>What Each Output Includes</p>
        <h2 style={{ fontSize: 'clamp(28px,3.5vw,48px)', fontWeight: 900, letterSpacing: '-1px', marginBottom: '20px' }}>Built for your customers. Built for your business.</h2>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.75)', maxWidth: '820px', lineHeight: 1.85, marginBottom: '40px' }}>
          Both outputs run simultaneously from the moment the system goes live.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', maxWidth: '820px' }}>
          <div>
            <h3 style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: TEAL, marginBottom: '20px' }}>Output One — Your Customers</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0, margin: 0 }}>
              {OUTPUT_ONE_BULLETS.map((b, i) => (
                <li
                  key={b}
                  style={{
                    fontSize: '17px',
                    padding: '8px 0 8px 22px',
                    position: 'relative',
                    borderBottom: i === OUTPUT_ONE_BULLETS.length - 1 ? undefined : '1px solid #111',
                    color: 'rgba(255,255,255,0.8)',
                  }}
                >
                  <span style={bulletDot()} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase', color: TEAL, marginBottom: '20px' }}>Output Two — Your Business</h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', padding: 0, margin: 0 }}>
              {OUTPUT_TWO_BULLETS.map((b, i) => (
                <li
                  key={b}
                  style={{
                    fontSize: '17px',
                    padding: '8px 0 8px 22px',
                    position: 'relative',
                    borderBottom: i === OUTPUT_TWO_BULLETS.length - 1 ? undefined : '1px solid #111',
                    color: 'rgba(255,255,255,0.8)',
                  }}
                >
                  <span style={bulletDot()} />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="os-rule" />

      <section style={{ padding: '72px 60px', background: '#0d1f1a' }}>
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: TEAL, marginBottom: '20px' }}>100% Done For You</p>
        <h2 style={{ fontSize: 'clamp(26px,3.5vw,44px)', fontWeight: 900, letterSpacing: '-1px', marginBottom: '20px', maxWidth: '820px' }}>
          There is a significant difference between buying a tool and having a system built for you.
        </h2>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', maxWidth: '820px', lineHeight: 1.85, marginBottom: '16px' }}>
          DIY platforms like Chatbase, Tidio, and similar tools are software subscriptions. You upload your content, write your prompts, configure your flows, test the responses, fix the errors, and update everything yourself every time your business changes. And because nobody is watching the data, nobody ever knows if it is actually working.
        </p>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', maxWidth: '820px', lineHeight: 1.85, marginBottom: '16px' }}>
          Output handles everything. From the discovery call through to design, build, knowledge base configuration, testing, launch, and ongoing monthly management. Your team provides the business context and we do the rest.
        </p>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', maxWidth: '820px', lineHeight: 1.85 }}>
          That is what makes Output a business partner, not a software subscription.
        </p>
      </section>

      <div className="os-rule" />

      <section style={{ padding: '72px 60px', background: '#000' }}>
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: TEAL, marginBottom: '20px' }}>The Self-Improving System</p>
        <h2 style={{ fontSize: 'clamp(26px,3.5vw,44px)', fontWeight: 900, letterSpacing: '-1px', marginBottom: '20px' }}>A system that gets smarter every month.</h2>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', maxWidth: '820px', lineHeight: 1.85, marginBottom: '16px' }}>
          Most intelligent chat systems are set up once and forgotten. That is why most of them fail. Nobody is watching whether visitors are disengaging after one message. Nobody is tracking which questions the system cannot answer. Nobody is analyzing what the conversation data is revealing about the business.
        </p>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', maxWidth: '820px', lineHeight: 1.85, marginBottom: '16px' }}>
          Because Output Systems actively monitors conversation data every month, every system we manage becomes self-improving over time. If visitors are dropping off early, that is a signal. If the same questions keep coming up unanswered, that is a knowledge gap.
        </p>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', maxWidth: '820px', lineHeight: 1.85 }}>
          That ongoing loop of monitor, analyze, improve, and report is what turns an intelligent chat system into a genuine business asset.
        </p>
      </section>

      <div className="os-rule" />

      <section style={{ padding: '72px 60px', background: '#0d1f1a' }}>
        <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: TEAL, marginBottom: '20px' }}>Monthly System Management</p>
        <h2 style={{ fontSize: 'clamp(26px,3.5vw,44px)', fontWeight: 900, letterSpacing: '-1px', marginBottom: '20px', maxWidth: '820px' }}>
          Active stewardship of a business asset — every single month.
        </h2>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)', maxWidth: '820px', lineHeight: 1.85, marginBottom: '32px' }}>
          Every system we build includes ongoing Monthly System Management. Each month we handle:
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', maxWidth: '820px' }}>
          {MONTHLY_TASKS.map((t) => (
            <div
              key={t}
              style={{
                background: '#000',
                border: '1px solid #1a1a1a',
                padding: '20px 22px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px',
              }}
            >
              <div style={{ width: '8px', height: '8px', minWidth: '8px', background: TEAL, borderRadius: '50%', marginTop: '6px' }} />
              <div style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>{t}</div>
            </div>
          ))}
        </div>
      </section>

      <div className="os-bottom-cta">
        <h2>Find out what Output Systems can do for your business.</h2>
        <p>
          Book a free discovery call. We will learn about your business, show you what the system looks like, and tell you exactly what it would produce for your customers and your team.
        </p>
      </div>

      <SiteFooter />
      <StickyBookButton />
      <Script src="/embed.js" strategy="afterInteractive" />
    </>
  );
}
