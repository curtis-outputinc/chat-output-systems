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
  title: 'Internal Chat System for Teams — chat.output.systems',
  description:
    'An AI-powered internal chat system that gives your team instant access to SOPs, policies, and company knowledge.',
};

const TEAL = '#07e4c6';

interface Tile {
  name: string;
  blurb: string;
  variant: IconVariant;
}

const TILES: Tile[] = [
  {
    name: 'SOPs, Policies, and Procedures',
    blurb:
      'Staff look up standard operating procedures by asking a simple question. HR policies, compliance rules, and exception cases retrieved on demand. Everyone follows the right process every time without memorizing documents — and updates land monthly.',
    variant: 'shield',
  },
  {
    name: 'Onboarding and Training Support',
    blurb:
      'New staff ask questions during onboarding without needing a manager present. Common first-week questions answered instantly so new hires build confidence faster, and senior staff stop answering the same questions over and over.',
    variant: 'lightbulb',
  },
  {
    name: 'Role-Based Access and Security',
    blurb:
      'Different team members see only what is relevant to their role. Sensitive information stays restricted to the people who need it. Secure access whether your team is in-office or remote. Security updates applied every month.',
    variant: 'magnifier',
  },
  {
    name: 'Insights Dashboard and Monthly Management',
    blurb:
      'See what your team is asking most and where the knowledge gaps are. Unanswered questions logged and used to expand the knowledge base monthly. Conversation logs reviewed, security updates applied, and a performance report delivered every month.',
    variant: 'chatBubble',
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

export default function InternalPage() {
  return (
    <>
      <AnimatedNodesBackground />
      <SiteNav active="/intelligent-chat-systems/internal" />

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
                totalMs={5200}
                segments={[
                  { text: 'Your team gets the right answer ' },
                  { text: 'in seconds, not minutes.', color: TEAL },
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
              Built for your staff, not your customers. Every member of your
              team gets instant access to company information through plain
              language questions — no folder digging, no waiting on a manager,
              no email thread archaeology.
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
                  Built for your team.{' '}
                  <span style={{ color: TEAL }}>
                    Designed to remove friction.
                  </span>
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
                  Every capability is designed to give staff the right answer
                  faster and keep your operations consistent across the team.
                </p>
              </div>
            </FadeIn>

            {/* FEATURED — Instant Knowledge */}
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
                      Instant access to every document your team needs.
                    </h3>
                    <p
                      style={{
                        fontSize: '19px',
                        lineHeight: 1.75,
                        maxWidth: '680px',
                        color: '#ffffff',
                      }}
                    >
                      Most companies already have the information their team
                      needs — it is just spread across folders, drives, email
                      threads, and long documents. This system puts all of that
                      knowledge in one place, instantly searchable in plain
                      language, with the same accurate answer every time.
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
                        variant="knowledge"
                        size={240}
                        ariaLabel="Stack of books representing instant company knowledge"
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
          label="Internal Chat System"
          leftHeading={
            <>
              Sized to your team.
              <br />
              <em style={{ fontStyle: 'normal', color: '#07e4c6' }}>
                Scoped to your knowledge base.
              </em>
            </>
          }
          leftCopy={[
            'Pricing depends on the size of your documented knowledge, the role-based access rules you need, and the integrations to existing systems where your SOPs and policies live today.',
            'You get a clear quote after the discovery call. No hidden tiers or per-seat surcharges.',
          ]}
          pricing={{
            type: 'custom',
            subText:
              'Pricing is based on the size and scope of your system. Book a free discovery call and we will put together a clear quote for your specific business.',
          }}
          includesLabel="Every System Includes"
          includes={[
            'Full done-for-you design and build',
            'Custom knowledge base built from your documents',
            'Role-based access configuration',
            'Onboarding and training content setup',
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
              Ready to give your team the information they need instantly?
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
              your company so you know exactly what your internal system will
              look like.
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
