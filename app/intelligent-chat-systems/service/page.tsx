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
  title: 'Customer Chat System for Service Businesses — chat.output.systems',
  description:
    'An AI-powered customer chat system that qualifies leads, books appointments, and alerts your team when a serious prospect arrives.',
};

const TEAL = '#07e4c6';

interface Tile {
  name: string;
  blurb: string;
  variant: IconVariant;
}

const TILES: Tile[] = [
  {
    name: 'Top Prospect Recognition',
    blurb:
      'Identifies high-intent or urgent conversations in real time and alerts your team instantly with a full summary. A serious customer who does not hear back within the hour often moves on — this makes sure they hear back.',
    variant: 'notification',
  },
  {
    name: 'Appointment Booking and Intake',
    blurb:
      'Customers request a call or consultation directly in the conversation. The system collects situation details, preferences, and background upfront, then sends preparation instructions after booking. Your team arrives at every first meeting already in context.',
    variant: 'calendar',
  },
  {
    name: 'Lead Capture and Qualification',
    blurb:
      'Collects name, email, and phone automatically, then asks qualifying questions based on your business rules. Gathers location, service type, timeline, and situation before handoff. Your team gets organized leads, not cold inquiries.',
    variant: 'leadCapture',
  },
  {
    name: 'Always Available — 24/7',
    blurb:
      'Operates around the clock with no staff required. Answers after hours, on weekends, and on holidays. Real-time uptime monitoring with immediate error alerts so your business never misses an inquiry because the office was closed.',
    variant: 'clock24',
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

export default function ServicePage() {
  return (
    <>
      <AnimatedNodesBackground />
      <SiteNav active="/intelligent-chat-systems/service" />

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
                totalMs={5500}
                segments={[
                  { text: 'Your customers get answers. Your team gets ' },
                  { text: 'qualified leads.', color: TEAL },
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
              Built for businesses that sell a service, a skill, or an outcome.
              The system answers questions, finds out what customers need, books
              appointments, and alerts your team when a serious lead arrives.
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
                  Built for service businesses.{' '}
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
                  Every capability is designed around how service businesses win
                  customers — fast answers, qualified leads, and prepared first
                  meetings.
                </p>
              </div>
            </FadeIn>

            {/* FEATURED — Trained on Your Business */}
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
                      Answers trained on your actual business.
                    </h3>
                    <p
                      style={{
                        fontSize: '19px',
                        lineHeight: 1.75,
                        maxWidth: '680px',
                        color: '#ffffff',
                      }}
                    >
                      Custom trained on your services, pricing, policies, and
                      FAQs. Walks customers through what to expect step by step,
                      handles objections using your approved content, and
                      responds in the customer’s own language. Guardrails
                      prevent off-topic or inaccurate responses.
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
                        variant="briefcase"
                        size={240}
                        ariaLabel="Briefcase representing a business-trained system"
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

        <PricingSection
          label="Customer Chat System — Service Business"
          leftHeading={
            <>
              Scoped to your business.
              <br />
              <em style={{ fontStyle: 'normal', color: '#07e4c6' }}>
                Priced after we know it.
              </em>
            </>
          }
          leftCopy={[
            'Every service business runs differently. Pricing reflects the size of your knowledge base, the qualifying questions you need answered, the integrations we connect, and the level of after-launch support your team needs.',
            'You get a clear quote on the discovery call. No hidden fees. No surprise add-ons.',
          ]}
          pricing={{
            type: 'custom',
            subText:
              'Pricing is based on the size and scope of your system. Book a free discovery call and we will put together a clear quote for your specific business.',
          }}
          includesLabel="Every System Includes"
          includes={[
            'Full done-for-you design and build',
            'Custom knowledge base built from your content',
            'Lead capture and qualification setup',
            'Appointment booking and intake flows',
            'Top Prospect Recognition and urgency alerts',
            'Insights Dashboard',
            'Monthly conversation log review',
            'Monthly knowledge base updates',
            'API, security, and compliance updates',
            'Monthly performance report',
            'Dedicated client support',
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
              Ready to give your customers a better experience?
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
              your service business so you know exactly what your new system
              will look like.
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
