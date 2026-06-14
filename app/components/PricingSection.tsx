import type { ReactNode } from 'react';
import Link from 'next/link';
import FadeIn from './FadeIn';

const TEAL = '#07e4c6';

type FixedPricing = {
  type: 'fixed';
  setupPrice: string;
  setupLabel: string;
  monthlyPrice: string;
  monthlyLabel: string;
};

type CustomPricing = {
  type: 'custom';
  subText: string;
};

type PricingSectionProps = {
  label: string;
  leftHeading: ReactNode;
  leftCopy: string[];
  pricing: FixedPricing | CustomPricing;
  includesLabel: string;
  includes: string[];
  pricingNote?: string;
};

export default function PricingSection({
  label,
  leftHeading,
  leftCopy,
  pricing,
  includesLabel,
  includes,
  pricingNote,
}: PricingSectionProps) {
  return (
    <section
      className="px-6 sm:px-10 py-24"
      style={{
        background: '#0d1f1a',
        borderTop: '1px solid rgba(7,228,198,0.1)',
        borderBottom: '1px solid rgba(7,228,198,0.1)',
      }}
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start">
        {/* LEFT — pitch */}
        <FadeIn>
          <div>
            <h2
              className="font-extrabold tracking-tight leading-[1.1] mb-6"
              style={{
                fontSize: 'clamp(32px, 4vw, 52px)',
                letterSpacing: '-1.5px',
                color: '#ffffff',
              }}
            >
              {leftHeading}
            </h2>
            {leftCopy.map((p, i) => (
              <p
                key={i}
                style={{
                  fontSize: '18px',
                  lineHeight: 1.8,
                  color: '#ffffff',
                  marginBottom: '16px',
                }}
              >
                {p}
              </p>
            ))}
            {pricingNote && (
              <p
                style={{
                  fontSize: '16px',
                  color: '#ffffff',
                  fontStyle: 'italic',
                  marginTop: '8px',
                }}
              >
                {pricingNote}
              </p>
            )}
          </div>
        </FadeIn>

        {/* RIGHT — pricing card */}
        <FadeIn delay={160}>
          <div
            className="relative overflow-hidden"
            style={{
              background: '#000',
              border: '1px solid rgba(7,228,198,0.34)',
              borderRadius: '6px',
              padding: '40px 32px',
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

            <div
              style={{
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                color: TEAL,
                marginBottom: '20px',
              }}
            >
              {label}
            </div>

            {pricing.type === 'fixed' ? (
              <>
                <div
                  style={{
                    fontSize: '58px',
                    fontWeight: 900,
                    color: '#ffffff',
                    letterSpacing: '-2px',
                    lineHeight: 1,
                    marginBottom: '4px',
                  }}
                >
                  <sup
                    style={{
                      fontSize: '24px',
                      verticalAlign: 'super',
                      letterSpacing: 0,
                    }}
                  >
                    $
                  </sup>
                  {pricing.setupPrice}{' '}
                  <span
                    style={{
                      fontSize: '22px',
                      fontWeight: 500,
                      letterSpacing: 0,
                    }}
                  >
                    USD
                  </span>
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: '#ffffff',
                    marginBottom: '20px',
                  }}
                >
                  {pricing.setupLabel}
                </div>

                <div
                  style={{
                    fontSize: '44px',
                    fontWeight: 900,
                    color: '#ffffff',
                    letterSpacing: '-1px',
                    lineHeight: 1,
                    marginBottom: '4px',
                  }}
                >
                  <sup
                    style={{
                      fontSize: '20px',
                      verticalAlign: 'super',
                    }}
                  >
                    $
                  </sup>
                  {pricing.monthlyPrice}{' '}
                  <span style={{ fontSize: '18px', fontWeight: 500 }}>USD</span>
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    fontWeight: 700,
                    letterSpacing: '2px',
                    textTransform: 'uppercase',
                    color: '#ffffff',
                    marginBottom: '32px',
                  }}
                >
                  {pricing.monthlyLabel}
                </div>
              </>
            ) : (
              <>
                <div
                  style={{
                    fontSize: '42px',
                    fontWeight: 900,
                    color: '#ffffff',
                    letterSpacing: '-1.5px',
                    lineHeight: 1.1,
                    marginBottom: '12px',
                  }}
                >
                  Custom Pricing
                </div>
                <p
                  style={{
                    fontSize: '17px',
                    color: '#ffffff',
                    marginBottom: '32px',
                    lineHeight: 1.6,
                  }}
                >
                  {pricing.subText}
                </p>
              </>
            )}

            <div
              style={{
                width: '100%',
                height: '1px',
                background: 'rgba(7,228,198,0.22)',
                marginBottom: '28px',
              }}
            />

            <div
              style={{
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                color: TEAL,
                marginBottom: '16px',
              }}
            >
              {includesLabel}
            </div>

            <ul
              className="list-none flex flex-col"
              style={{ gap: '12px', margin: 0, padding: 0, marginBottom: '32px' }}
            >
              {includes.map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    fontSize: '17px',
                    color: '#ffffff',
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      color: TEAL,
                      fontWeight: 700,
                      fontSize: '15px',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="block text-center"
              style={{
                background: TEAL,
                color: '#000',
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '2px',
                textTransform: 'uppercase',
                padding: '18px 32px',
                borderRadius: '4px',
                textDecoration: 'none',
              }}
            >
              Book a Free Discovery Call
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
