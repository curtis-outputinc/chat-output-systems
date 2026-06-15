'use client';

import { useEffect, useRef, useState } from 'react';

const TEAL = '#07e4c6';

const TARGET_PCT = 80;
const PIE_DURATION_MS = 2400;
const RADIUS = 100;
const CIRC = 2 * Math.PI * RADIUS;

const BULLETS = [
  'Website visitors are 2.8x to 3.0x more likely to convert with a business that has a chat interface online.',
  '78% of online consumers commit to the business that responds first. Our chat system gives instant, context-relevant responses.',
  '63% of e-commerce browsing and conversions happen outside of normal 9-to-5 business hours. Your customer support should be 24/7.',
  'Advanced, intelligent chat systems like Output handle over 80% of routine inbound inquiries automatically. This saves tens of hours of overhead while giving customers instant answers.',
];

const BULLET_STAGGER_MS = 220;

export default function HomeStatsBlock() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);

  // Fire once when the block scrolls into view.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Animate counter 0 → 80% with an easeOutCubic. The arc visually tracks
  // the same value via stroke-dashoffset.
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / PIE_DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(TARGET_PCT * eased));
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active]);

  const dashOffset = CIRC * (1 - count / 100);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      {/* PIE CHART */}
      <div
        className="relative flex items-center justify-center"
        style={{ width: '260px', height: '260px', marginBottom: '40px' }}
      >
        <svg width={260} height={260} viewBox="0 0 240 240" aria-hidden="true">
          {/* Background ring (translucent white) */}
          <circle
            cx={120}
            cy={120}
            r={RADIUS}
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth={20}
          />
          {/* Active arc */}
          <circle
            cx={120}
            cy={120}
            r={RADIUS}
            fill="none"
            stroke={TEAL}
            strokeWidth={20}
            strokeLinecap="round"
            strokeDasharray={CIRC}
            strokeDashoffset={dashOffset}
            transform="rotate(-90 120 120)"
            style={{
              transition: 'stroke-dashoffset 60ms linear',
            }}
          />
        </svg>
        {/* Centered percentage label */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            fontWeight: 900,
            letterSpacing: '-2px',
            lineHeight: 1,
          }}
        >
          <span style={{ fontSize: '64px' }}>
            {count}
            <span style={{ fontSize: '36px' }}>%</span>
          </span>
          <span
            style={{
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '2.5px',
              textTransform: 'uppercase',
              color: '#ffffff',
              marginTop: '8px',
            }}
          >
            handled automatically
          </span>
        </div>
      </div>

      {/* BULLETS */}
      <ul
        className="list-none flex flex-col"
        style={{
          gap: '14px',
          padding: 0,
          margin: 0,
          maxWidth: '780px',
        }}
      >
        {BULLETS.map((label, i) => (
          <li
            key={label}
            className={`home-stat-item ${active ? 'home-stat-visible' : ''}`}
            style={{
              transitionDelay: `${i * BULLET_STAGGER_MS}ms`,
              display: 'flex',
              alignItems: 'flex-start',
              gap: '18px',
              padding: '16px 0',
              borderBottom:
                i < BULLETS.length - 1
                  ? '1px solid rgba(7,228,198,0.12)'
                  : 'none',
              textAlign: 'left',
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(7,228,198,0.08)',
                border: '1.5px solid rgba(7,228,198,0.38)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: '2px',
              }}
            >
              <svg viewBox="0 0 24 24" width={20} height={20} aria-hidden="true">
                <polyline
                  points="20 6 9 17 4 12"
                  fill="none"
                  stroke={TEAL}
                  strokeWidth={3}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span style={{ fontSize: '18px', color: '#ffffff', lineHeight: 1.55 }}>
              {label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
