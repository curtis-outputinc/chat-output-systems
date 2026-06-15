import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';
import SiteNav from '../../components/SiteNav';
import PricingSection from '../../components/PricingSection';
import SiteFooter from '../../components/SiteFooter';
import StickyBookButton from '../../components/StickyBookButton';
import FadeIn from '../../components/FadeIn';
import AnimatedNodesBackground from '../../components/AnimatedNodesBackground';
import ChatSystemIcon, { type IconVariant } from '../../components/ChatSystemIcons';
import TypingHeading from '../../components/TypingHeading';

export const metadata: Metadata = {
  title: 'Standard Intelligent Website Chat System — chat.output.systems',
  description:
    'A professionally built AI-powered website chat system that answers questions, captures leads, and runs 24/7. Fully done for you.',
};

const TEAL = '#07e4c6';

interface Tile {
  name: string;
  blurb: string;
  variant: IconVariant;
}

const TILES: Tile[] = [
  {
    name: 'Always Available',
    blurb:
      'Your most curious customers show up at 11pm. The system runs 24 hours a day, every day, answering questions and capturing interest the moment a visitor lands on your website. Real-time uptime monitoring keeps it on without any staff involvement.',
    variant: 'clock24',
  },
  {
    name: 'Answers Trained on Your Business',
    blurb:
      'Custom trained on your services, pricing, FAQs, hours, and policies. Every response reflects your actual content and tone. Guardrails prevent off-topic replies, and the system automatically answers in the customer’s own language.',
    variant: 'knowledge',
  },
  {
    name: 'Lead Capture Built Into Every Conversation',
    blurb:
      'Captures customer name, email, and phone in the natural flow of the chat. Your team is notified the moment a lead comes in. Every interested visitor leaves with a clear next step instead of a closed tab.',
    variant: 'leadCapture',
  },
  {
    name: 'Branded, Embedded, Monthly Managed',
    blurb:
      'Matched to your colours and tone, embedded with a lightweight snippet, and updated every month. Knowledge base refreshes, security patches, and a monthly performance report are all included.',
    variant: 'calendar',
  },
];

function Eyebrow({
  children,
  size = 'sm',
}: {
  children: ReactNode;
  size?: 'sm' | 'lg';
}) {
  const fs = size === 'lg' ? '14px' : '11px';
  const ls = size === 'lg' ? '3.5px' : '3px';
  const pad = size === 'lg' ? '8px 22px' : '6px 18px';
  return (
    <div
      className="inline-block font-semibold uppercase"
      style={{
        fontSize: fs,
        letterSpacing: ls,
        color: TEAL,
        border: '1px solid rgba(7,228,198,0.28)',
        padding: pad,
        borderRadius: '2px',
      }}
    >
      {children}
    </div>
  );
}

function SystemTile({ tile, reverse }: { tile: Tile; reverse: boolean }) {
  return (
    <div
      className="grid md:grid-cols-2 gap-10 md:gap-16 items-center px-8 md:px-14 py-14 md:py-20 mb-4"
      style={{
        background: '#0a0f0d',
        border: '1px solid rgba(7,228,198,0.18)',
        borderRadius: '6px',
      }}
    >
      <div
        className={`flex justify-center ${reverse ? 'md:order-2' : 'md:order-1'}`}
      >
        <ChatSystemIcon variant={tile.variant} size={220} />
      </div>
      <div className={reverse ? 'md:order-1' : 'md:order-2'}>
        <h3
          className="text-2xl md:text-[32px] font-extrabold tracking-tight mb-4 leading-[1.15]"
          style={{ color: '#ffffff' }}
        >
          {tile.name}
        </h3>
        <p
          className="text-lg md:text-xl leading-[1.65]"
          style={{ color: '#ffffff' }}
        >
          {tile.blurb}
        </p>
      </div>
    </div>
  );
}

export default function StandardPage() {
  return (
    <>
      <AnimatedNodesBackground />
      <SiteNav active="/intelligent-chat-systems/standard" />

      <main
        className="text-white pb-40"
        style={{ position: 'relative', zIndex: 1 }}
      >
        {/* HERO */}
        <section className="px-6 sm:px-10 pt-36 pb-20 text-center">
          <FadeIn>
            <h1
              className="font-black tracking-tight leading-[1.05] mb-6 mx-auto"
              style={{
                fontSize: 'clamp(36px, 5.8vw, 76px)',
                letterSpacing: '-2.5px',
                maxWidth: '1000px',
                color: '#ffffff',
              }}
            >
              <TypingHeading
                totalMs={3000}
                segments={[
                  { text: 'Your website, ' },
                  { text: 'always answering.', color: TEAL },
                ]}
              />
            </h1>
            <p
              className="mx-auto mb-4"
              style={{
                fontSize: '19px',
                lineHeight: 1.75,
                maxWidth: '700px',
                color: '#ffffff',
              }}
            >
              A professionally built AI-powered chat system embedded on your
              website. It answers your customers, delivers accurate information,
              captures leads, and guides every visitor toward a clear next step.
            </p>
            <p
              className="mx-auto"
              style={{
                fontSize: '16px',
                lineHeight: 1.7,
                maxWidth: '700px',
                color: '#ffffff',
              }}
            >
              100% done for you. Design, setup, and monthly management included.
            </p>
          </FadeIn>
        </section>

        {/* rule */}
        <div
          style={{
            height: '1px',
            background:
              'linear-gradient(90deg, rgba(7,228,198,0.6) 0%, transparent 70%)',
          }}
        />

        {/* TILES */}
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
                    fontSize: 'clamp(28px, 3.8vw, 48px)',
                    letterSpacing: '-1.4px',
                    color: '#ffffff',
                  }}
                >
                  Built for every visitor.{' '}
                  <span style={{ color: TEAL }}>Designed to convert.</span>
                </h2>
                <p
                  className="mx-auto"
                  style={{
                    fontSize: '18px',
                    lineHeight: 1.75,
                    maxWidth: '620px',
                    color: '#ffffff',
                  }}
                >
                  Four core capabilities working together so no curious visitor
                  walks away without an answer or a next step.
                </p>
              </div>
            </FadeIn>

            {/* FEATURED — Always Answering flagship */}
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
                      A conversation on your website, every hour of the day.
                    </h3>
                    <p
                      style={{
                        fontSize: '19px',
                        lineHeight: 1.75,
                        maxWidth: '680px',
                        color: '#ffffff',
                      }}
                    >
                      Most businesses lose potential customers the moment the
                      office closes. The Standard Intelligent Website Chat
                      System keeps your business accessible and responsive at
                      every hour, capturing interest and guiding visitors toward
                      action whether your team is online or not.
                    </p>
                  </div>
                  <div className="flex justify-center md:justify-end">
                    <div
                      style={{
                        width: '100%',
                        maxWidth: '240px',
                        aspectRatio: '1 / 1',
                      }}
                    >
                      <ChatSystemIcon
                        variant="chatBubble"
                        size={240}
                        ariaLabel="Chat bubble representing always-on website chat"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {TILES.map((tile, i) => (
              <FadeIn key={tile.name} delay={100 + i * 60}>
                <SystemTile tile={tile} reverse={i % 2 === 1} />
              </FadeIn>
            ))}
          </div>
        </section>

        {/* rule */}
        <PricingSection
          label="Standard Intelligent Website Chat System"
          leftHeading={
            <>
              Professional.
              <br />
              <em style={{ fontStyle: 'normal', color: '#07e4c6' }}>Managed.</em>
              <br />
              Done for you.
            </>
          }
          leftCopy={[
            'The Standard Intelligent Website Chat System is not a DIY subscription you configure yourself. We build it around your business, test it, launch it, and manage it every month so it stays accurate and performing as your business evolves.',
            'Building a system is one thing. Maintaining it so it continues to work as your business changes is another. We do both.',
          ]}
          pricingNote="Pricing may vary based on content volume and complexity. All details confirmed during the discovery call."
          pricing={{
            type: 'fixed',
            setupPrice: '2,399',
            setupLabel: 'One Time Setup Fee',
            monthlyPrice: '499',
            monthlyLabel: 'Monthly System Management',
          }}
          includesLabel="Every System Includes"
          includes={[
            'Discovery call and website content scrape',
            'Knowledge base built from your content',
            'Tone and brand alignment',
            'Guardrail configuration',
            'Customer information capture setup',
            'Testing, revisions, and launch support',
            'Website embed assistance',
            'Conversation log review and summary (monthly)',
            'Knowledge base updates (monthly)',
            'API and security updates (monthly)',
            'Uptime monitoring and error handling',
            'Monthly performance report',
          ]}
        />

        <div
          style={{
            height: '1px',
            background:
              'linear-gradient(90deg, rgba(7,228,198,0.6) 0%, transparent 70%)',
          }}
        />

        {/* BOTTOM CTA */}
        <section
          className="px-6 sm:px-10 py-24 text-center"
          style={{
            background: '#0d1f1a',
            borderTop: '1px solid rgba(7,228,198,0.1)',
          }}
        >
          <FadeIn>
            <Eyebrow size="lg">Get Started</Eyebrow>
            <h2
              className="font-extrabold tracking-tight leading-[1.1] mt-6 mb-5 mx-auto"
              style={{
                fontSize: 'clamp(28px, 3.8vw, 48px)',
                letterSpacing: '-1.4px',
                maxWidth: '780px',
                color: '#ffffff',
              }}
            >
              Ready to enhance your customers’ website experience?
            </h2>
            <p
              className="mx-auto"
              style={{
                fontSize: '18px',
                lineHeight: 1.8,
                maxWidth: '720px',
                color: '#ffffff',
              }}
            >
              Book a free discovery call. We can set up a demo customized to
              your business so you know exactly what your new system will look
              like.
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
