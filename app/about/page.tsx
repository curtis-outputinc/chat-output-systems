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
  title: 'About Us',
  description:
    'Output Systems builds intelligent chat systems that increase profit and decrease expenses. Customer-facing answers and booking with an intelligence layer underneath.',
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

interface OutputTile {
  label: string;
  title: string;
  blurb: string;
  variant: IconVariant;
  bullets: string[];
}

const OUTPUT_TILES: OutputTile[] = [
  {
    label: 'Output One',
    title: 'What your customers experience.',
    blurb:
      'Instant answers, 24/7 support, appointment booking, lead capture, and seamless service — all without a human in the loop.',
    variant: 'chatBubble',
    bullets: OUTPUT_ONE_BULLETS,
  },
  {
    label: 'Output Two',
    title: 'What your business learns.',
    blurb:
      'Customer intelligence captured from every conversation. What visitors want, where they drop off, and what your business needs to improve.',
    variant: 'magnifier',
    bullets: OUTPUT_TWO_BULLETS,
  },
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

function OutputCard({ tile, reverse }: { tile: OutputTile; reverse: boolean }) {
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
        <ChatSystemIcon variant={tile.variant} size={220} />
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
          {tile.label}
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
          {tile.title}
        </h3>
        <p
          style={{
            fontSize: '19px',
            lineHeight: 1.8,
            color: '#ffffff',
            marginBottom: '22px',
          }}
        >
          {tile.blurb}
        </p>
        <CheckList items={tile.bullets} />
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <AnimatedNodesBackground />
      <SiteNav active="/about" />

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
                totalMs={6500}
                segments={[
                  { text: 'We build intelligent chat systems that ' },
                  {
                    text: 'increase profit and decrease expenses.',
                    color: TEAL,
                  },
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
              Our systems handle customer support — answering questions,
              booking appointments, and putting clients in touch with the
              right staff — while an intelligence layer underneath shows your
              business exactly how customers are interacting with your website
              and what they are asking for.
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

        {/* TWO OUTPUTS, ONE SYSTEM */}
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
                  className="font-extrabold tracking-tight mx-auto mb-6"
                  style={{
                    fontSize: 'clamp(36px, 5vw, 64px)',
                    letterSpacing: '-1.8px',
                    color: '#ffffff',
                    maxWidth: '900px',
                    lineHeight: 1.08,
                  }}
                >
                  Two outputs.{' '}
                  <span style={{ color: TEAL }}>One system.</span>
                </h2>
                <p
                  className="mx-auto"
                  style={{
                    fontSize: '19px',
                    lineHeight: 1.8,
                    maxWidth: '820px',
                    color: '#ffffff',
                  }}
                >
                  Most businesses think of an intelligent chat system as
                  something that helps their customers find answers. That is
                  one output. What they are missing is the second one.
                </p>
                <p
                  className="mx-auto mt-4"
                  style={{
                    fontSize: '19px',
                    lineHeight: 1.8,
                    maxWidth: '820px',
                    color: '#ffffff',
                  }}
                >
                  Every conversation a visitor has with our system generates a
                  layer of customer intelligence. What people are asking for.
                  Where they drop off. What objections they raise. What
                  information is missing from your website. Traditional
                  intelligent chat systems discard that data entirely.
                </p>
              </div>
            </FadeIn>

            {/* FLAGSHIP QUOTE */}
            <FadeIn delay={80}>
              <div
                className="relative overflow-hidden px-8 md:px-14 py-12 md:py-16 mb-8"
                style={{
                  background: '#000000',
                  border: '1px solid rgba(7,228,198,0.34)',
                  borderRadius: '6px',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: TEAL,
                  }}
                />
                <div className="grid md:grid-cols-[1fr_240px] gap-10 items-center">
                  <div>
                    <h3
                      className="font-extrabold tracking-tight leading-[1.15] mb-5"
                      style={{
                        fontSize: 'clamp(24px, 3vw, 38px)',
                        letterSpacing: '-1px',
                        color: '#ffffff',
                      }}
                    >
                      Answers for your customers. Intelligence for your team.
                    </h3>
                    <p
                      style={{
                        fontSize: '19px',
                        lineHeight: 1.8,
                        color: '#ffffff',
                      }}
                    >
                      Traditional intelligent chat systems answer your
                      customers&apos; questions. Output Systems answers your
                      customers&apos; questions, helps them book, submit info,
                      and take the next step — then turns every one of those
                      conversations into{' '}
                      <span style={{ color: TEAL }}>
                        insights and intelligence your team can act on.
                      </span>
                    </p>
                  </div>
                  <div className="flex justify-center md:justify-end">
                    <ChatSystemIcon variant="briefcase" size={240} />
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* TWO OUTPUT TILES */}
            {OUTPUT_TILES.map((tile, i) => (
              <FadeIn key={tile.label} delay={120 + i * 80}>
                <OutputCard tile={tile} reverse={i % 2 === 1} />
              </FadeIn>
            ))}
          </div>
        </section>

        {/* DONE FOR YOU */}
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
                A built system,{' '}
                <span style={{ color: TEAL }}>not a software subscription.</span>
              </h2>
              <p
                style={{
                  fontSize: '19px',
                  lineHeight: 1.8,
                  color: '#ffffff',
                  marginBottom: '16px',
                }}
              >
                DIY platforms like Chatbase, Tidio, and similar tools are
                software subscriptions. You upload your content, write your
                prompts, configure your flows, test the responses, fix the
                errors, and update everything yourself every time your business
                changes. And because nobody is watching the data, nobody ever
                knows if it is actually working.
              </p>
              <p
                style={{
                  fontSize: '19px',
                  lineHeight: 1.8,
                  color: '#ffffff',
                  marginBottom: '16px',
                }}
              >
                Output handles everything. From the discovery call through to
                design, build, knowledge base configuration, testing, launch,
                and ongoing monthly management. Your team provides the business
                context and we do the rest.
              </p>
              <p
                style={{
                  fontSize: '19px',
                  lineHeight: 1.8,
                  color: '#ffffff',
                }}
              >
                That is what makes Output a business partner, not a software
                subscription.
              </p>
            </FadeIn>
            <FadeIn delay={160}>
              <div className="flex justify-center">
                <ChatSystemIcon variant="package" size={300} />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* SELF IMPROVING */}
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
              <div className="flex justify-center md:order-1">
                <ChatSystemIcon variant="lightbulb" size={300} />
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
                  A system that gets{' '}
                  <span style={{ color: TEAL }}>smarter every month.</span>
                </h2>
                <p
                  style={{
                    fontSize: '19px',
                    lineHeight: 1.8,
                    color: '#ffffff',
                    marginBottom: '16px',
                  }}
                >
                  Most intelligent chat systems are set up once and forgotten.
                  That is why most of them fail. Nobody is watching whether
                  visitors are disengaging after one message. Nobody is
                  tracking which questions the system cannot answer. Nobody is
                  analyzing what the conversation data is revealing about the
                  business.
                </p>
                <p
                  style={{
                    fontSize: '19px',
                    lineHeight: 1.8,
                    color: '#ffffff',
                    marginBottom: '16px',
                  }}
                >
                  Because Output Systems actively monitors conversation data
                  every month, every system we manage becomes self-improving
                  over time. If visitors are dropping off early, that is a
                  signal. If the same questions keep coming up unanswered, that
                  is a knowledge gap.
                </p>
                <p
                  style={{
                    fontSize: '19px',
                    lineHeight: 1.8,
                    color: '#ffffff',
                  }}
                >
                  That ongoing loop of monitor, analyze, improve, and report is
                  what turns an intelligent chat system into a genuine business
                  asset.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* MONTHLY MANAGEMENT CHECKLIST */}
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
                Active stewardship of a business asset —{' '}
                <span style={{ color: TEAL }}>every single month.</span>
              </h2>
              <p
                style={{
                  fontSize: '19px',
                  lineHeight: 1.8,
                  color: '#ffffff',
                  marginTop: '22px',
                  maxWidth: '520px',
                }}
              >
                Every system we build includes ongoing Monthly System
                Management. Each month we handle:
              </p>
            </FadeIn>
            <FadeIn delay={140}>
              <CheckList items={MONTHLY_TASKS} />
            </FadeIn>
          </div>
        </section>

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
              Find out what Output Systems can do for{' '}
              <span style={{ color: TEAL }}>your business.</span>
            </h2>
            <p
              className="mx-auto"
              style={{
                fontSize: '19px',
                lineHeight: 1.8,
                maxWidth: '760px',
                color: '#ffffff',
              }}
            >
              Book a free discovery call. We will learn about your business,
              show you what the system looks like, and tell you exactly what it
              would produce for your customers and your team.
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
