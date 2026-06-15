import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import Script from 'next/script';
import SiteNav from '../../components/SiteNav';
import PricingSection from '../../components/PricingSection';
import SiteFooter from '../../components/SiteFooter';
import StickyBookButton from '../../components/StickyBookButton';
import FadeIn from '../../components/FadeIn';
import AnimatedNodesBackground from '../../components/AnimatedNodesBackground';
import SpinningGears from '../../components/SpinningGears';
import ChatSystemIcon, { type IconVariant } from '../../components/ChatSystemIcons';
import TypingHeading from '../../components/TypingHeading';

export const metadata: Metadata = {
  title: 'Custom Chat System — chat.output.systems',
  description:
    'A fully custom AI chat system built from the ground up around your specific organization, industry, and requirements.',
};

const TEAL = '#07e4c6';

interface Tile {
  name: string;
  blurb: string;
  variant: IconVariant;
}

const TILES: Tile[] = [
  {
    name: 'Industry-Specific Guardrails and Compliance',
    blurb:
      'Guardrails designed around your industry’s specific rules — healthcare escalation, legal disclaimers, finance compliance, government and nonprofit sensitivities. The system protects your organization while staying genuinely useful, with privacy and compliance reviewed monthly.',
    variant: 'shield',
  },
  {
    name: 'Custom Integrations With Your Existing Tools',
    blurb:
      'Connects to your CRM, booking tools, databases, or proprietary software. Pulls and pushes data both ways, triggers custom workflows from conversation outcomes, and supports multi-system deployment across customer-facing and internal channels.',
    variant: 'briefcase',
  },
  {
    name: 'Who This System Is Built For',
    blurb:
      'Nonprofits with sensitive referral flows, healthcare providers with patient communication needs, government-adjacent organizations, hospitality with multi-location bookings, real estate with intake and document flows — any business whose requirements fall outside a standard configuration.',
    variant: 'lightbulb',
  },
  {
    name: 'Monthly Management Included',
    blurb:
      'Custom does not mean build once and leave. Conversation logs reviewed monthly, knowledge base updated as your organization changes, security and compliance patches applied, unanswered questions tracked, and a monthly performance report delivered to your team.',
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

export default function CustomPage() {
  return (
    <>
      <AnimatedNodesBackground />
      <SiteNav active="/intelligent-chat-systems/custom" />

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
                totalMs={6000}
                segments={[
                  { text: 'Your business was custom built. ' },
                  { text: 'Your chat system should be too.', color: TEAL },
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
              For organizations that need something built specifically for them.
              We design the entire system from the ground up around your
              customers, your staff, your workflows, and the outcomes your
              business needs to achieve.
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
              100% done for you. Discovery through to ongoing monthly management.
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
                  Designed for your organization.{' '}
                  <span style={{ color: TEAL }}>Built from scratch.</span>
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
                  Standard systems are built for the average business. The
                  Custom Chat System is built around your specific operations,
                  customers, and compliance requirements.
                </p>
              </div>
            </FadeIn>

            {/* FEATURED — gears representing fully custom build */}
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
                      Built From Scratch Around Your Business.
                    </h3>
                    <p
                      style={{
                        fontSize: '19px',
                        lineHeight: 1.75,
                        maxWidth: '680px',
                        color: '#ffffff',
                      }}
                    >
                      No templates, no pre-built flows, no generic
                      configurations. Designed entirely around your customers,
                      staff, and business goals. Conversation flows written to
                      match your exact service or product model — and the system
                      can span multiple departments, locations, or business
                      units when it needs to.
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
                      <SpinningGears ariaLabel="Three teal gears rotating, representing a fully custom-built system" />
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
          label="Custom Chat System"
          leftHeading={
            <>
              No template.
              <br />
              <em style={{ fontStyle: 'normal', color: '#07e4c6' }}>
                No standard scope.
              </em>
            </>
          }
          leftCopy={[
            'Every custom system is scoped individually. Healthcare, legal, finance, multi-location, multi-department — when the standard packages do not fit, we build from the ground up around exactly what your organization needs.',
            'You get a clear quote after we have walked through your business in detail. Until then, there is no honest way to put a number on it.',
          ]}
          pricing={{
            type: 'custom',
            subText:
              'Every custom system is scoped individually. Book a discovery call and we will design the right system for your organization and give you a clear quote.',
          }}
          includesLabel="Every Custom System Includes"
          includes={[
            'Full discovery and design process',
            'Built from scratch around your specific needs',
            'Custom knowledge base and conversation flows',
            'Custom integrations with your existing tools',
            'Industry-specific guardrails and compliance configuration',
            'Custom Insights Dashboard',
            'Full testing before launch',
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
              Ready to build a system designed around your organization?
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
              Book a free discovery call. We will learn about your organization,
              your customers, and your goals, and show you what a custom system
              would look like for you.
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
