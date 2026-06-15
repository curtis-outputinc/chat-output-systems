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
  title: 'Customer Chat System for Retail and E-Commerce — chat.output.systems',
  description:
    'AI-powered customer chat for retail and e-commerce. Product discovery, cart recovery, return data, and 24/7 support.',
};

const TEAL = '#07e4c6';

interface Tile {
  name: string;
  blurb: string;
  variant: IconVariant;
}

const TILES: Tile[] = [
  {
    name: 'Product Help and Discovery',
    blurb:
      'Customers describe what they need in plain language and the system finds it. Recommends the right product, answers detailed spec questions, checks stock and size, surfaces relevant promotions, and responds in the customer’s own language.',
    variant: 'magnifier',
  },
  {
    name: 'Cart Abandonment and Checkout Support',
    blurb:
      'Engages hesitating shoppers, answers last-minute payment and discount questions, and clears up checkout confusion in real time. Captures contact details if they leave anyway, and notifies your team when a high-value customer abandons.',
    variant: 'leadCapture',
  },
  {
    name: 'Orders, Shipping, and Returns',
    blurb:
      'Answers shipping cost, delivery timeline, return policy, and order status questions instantly without staff. Reduces where-is-my-order calls and emails so your team focuses on situations that actually need a person.',
    variant: 'package',
  },
  {
    name: 'After Hours and Peak Season Scaling',
    blurb:
      'Fully operational 24/7/365. Handles Black Friday, launches, and holiday volume with no slowdown. Pre-loaded with promotion-specific content before sales go live so every customer gets accurate answers from minute one.',
    variant: 'notification',
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

export default function RetailPage() {
  return (
    <>
      <AnimatedNodesBackground />
      <SiteNav active="/intelligent-chat-systems/retail" />

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
                totalMs={5800}
                segments={[
                  { text: 'Help customers find what they need and ' },
                  { text: 'complete their purchase.', color: TEAL },
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
              Built for businesses that sell products online, in store, or both.
              The system helps shoppers find products, check availability, get
              shipping and return answers, and complete their purchase with
              confidence.
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
                  Built for stores.{' '}
                  <span style={{ color: TEAL }}>
                    Designed to close the sale.
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
                  Every capability targets the exact moments where retail
                  shoppers hesitate, abandon, or come back to ask.
                </p>
              </div>
            </FadeIn>

            {/* FEATURED — Shopping Cart flagship */}
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
                      Return Data and Customer Feedback in Their Own Words.
                    </h3>
                    <p
                      style={{
                        fontSize: '19px',
                        lineHeight: 1.75,
                        maxWidth: '680px',
                        color: '#ffffff',
                      }}
                    >
                      When a customer returns a product the system asks why and
                      logs the answer in the customer’s own words. Over time
                      that data tells you which products have recurring issues
                      and where changes would reduce future returns. Knowing why
                      is more valuable than knowing how many.
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
                        variant="shoppingCart"
                        size={240}
                        ariaLabel="Shopping cart representing retail and e-commerce"
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
          label="Customer Chat System — Retail and E-Commerce"
          leftHeading={
            <>
              Built for your catalog.
              <br />
              <em style={{ fontStyle: 'normal', color: '#07e4c6' }}>
                Priced for your scale.
              </em>
            </>
          }
          leftCopy={[
            'Pricing depends on the size of your product catalog, the platforms we integrate with, the level of order and return automation you need, and the volume of conversations the system will handle through peak season.',
            'You get a clear quote after the discovery call. No surprises later.',
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
              Ready to give your shoppers a better experience?
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
              your store so you know exactly what your new system will look
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
