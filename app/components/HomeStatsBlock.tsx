'use client';

import { useEffect, useRef, useState } from 'react';

const TEAL = '#07e4c6';
const TEAL_DEEP = '#04695a';

const TARGET_PCT = 80;
const PIE_DURATION_MS = 2400;

// Pie chart geometry inside a 0 0 260 260 viewBox.
const PIE_CX = 130;
const PIE_CY = 130;
const PIE_R = 116;

const BULLETS = [
  'Website visitors are 2.8x to 3.0x more likely to convert with a business that has a chat interface online.',
  '78% of online consumers commit to the business that responds first. Our chat system gives instant, context-relevant responses.',
  '63% of e-commerce browsing and conversions happen outside of normal 9-to-5 business hours. Your customer support should be 24/7.',
  'Advanced, intelligent chat systems like Output handle over 80% of routine inbound inquiries automatically. This saves tens of hours of overhead while giving customers instant answers.',
];

const BULLET_STAGGER_MS = 220;

function piePath(pct: number): string {
  if (pct <= 0) return '';
  if (pct >= 100) {
    // Full circle as two semicircle arcs ending back at the start so SVG
    // doesn't collapse the path.
    return [
      `M ${PIE_CX} ${PIE_CY - PIE_R}`,
      `A ${PIE_R} ${PIE_R} 0 1 1 ${PIE_CX - 0.001} ${PIE_CY - PIE_R}`,
      `Z`,
    ].join(' ');
  }
  const angleDeg = (pct / 100) * 360;
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  const endX = PIE_CX + PIE_R * Math.cos(rad);
  const endY = PIE_CY + PIE_R * Math.sin(rad);
  const largeArc = angleDeg > 180 ? 1 : 0;
  return [
    `M ${PIE_CX} ${PIE_CY}`,
    `L ${PIE_CX} ${PIE_CY - PIE_R}`,
    `A ${PIE_R} ${PIE_R} 0 ${largeArc} 1 ${endX.toFixed(3)} ${endY.toFixed(3)}`,
    `Z`,
  ].join(' ');
}

export default function HomeStatsBlock() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);
  const [count, setCount] = useState(0);

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

  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const elapsed = now - start;
      const t = Math.min(elapsed / PIE_DURATION_MS, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      setCount(TARGET_PCT * eased);
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [active]);

  return (
    <div
      ref={ref}
      className="grid md:grid-cols-[1fr_1.15fr] gap-12 md:gap-16 items-center"
    >
      {/* PIE CHART column */}
      <div className="flex items-center justify-center">
        <div
          className="relative"
          style={{ width: 'min(100%, 360px)', aspectRatio: '1 / 1' }}
        >
          <svg
            viewBox="0 0 260 260"
            width="100%"
            height="100%"
            aria-hidden="true"
            style={{ display: 'block' }}
          >
            <defs>
              <radialGradient id="pie-fill" cx="0.45" cy="0.4" r="0.75">
                <stop offset="0%" stopColor="#5beed5" />
                <stop offset="55%" stopColor={TEAL} />
                <stop offset="100%" stopColor={TEAL_DEEP} />
              </radialGradient>
            </defs>

            {/* The 20% "unfilled" slice — full background circle */}
            <circle
              cx={PIE_CX}
              cy={PIE_CY}
              r={PIE_R}
              fill="rgba(255,255,255,0.10)"
            />

            {/* Solid pie slice grows 0% → 80% */}
            <path d={piePath(count)} fill="url(#pie-fill)" />

            {/* Thin outer ring for definition */}
            <circle
              cx={PIE_CX}
              cy={PIE_CY}
              r={PIE_R}
              fill="none"
              stroke="rgba(255,255,255,0.22)"
              strokeWidth={1.5}
            />
          </svg>

          {/* Floating line-graph overlay (top-right, constant animation) */}
          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: '6%',
              right: '4%',
              width: '34%',
              maxWidth: '130px',
              padding: '10px 12px',
              background: 'rgba(0,0,0,0.62)',
              border: '1px solid rgba(7,228,198,0.35)',
              borderRadius: '8px',
              boxShadow: '0 6px 18px rgba(0,0,0,0.35)',
              backdropFilter: 'blur(2px)',
            }}
          >
            <svg
              viewBox="0 0 110 70"
              width="100%"
              height="auto"
              style={{ display: 'block' }}
            >
              {/* Baseline */}
              <line
                x1={6}
                y1={62}
                x2={104}
                y2={62}
                stroke="rgba(255,255,255,0.22)"
                strokeWidth={1}
              />
              {/* Rising trend line */}
              <polyline
                points="10,54 28,46 46,50 64,32 82,22 98,10"
                fill="none"
                stroke="#ffffff"
                strokeWidth={2.4}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="home-stat-graphline"
              />
              {/* Arrowhead at the end */}
              <polyline
                points="90,10 98,10 98,18"
                fill="none"
                stroke={TEAL}
                strokeWidth={2.4}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="home-stat-graphline"
              />
              {/* Pulse dot at the peak */}
              <circle
                cx={98}
                cy={10}
                r={3.5}
                fill={TEAL}
                className="home-stat-graphdot"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* BULLETS column */}
      <div>
        <ul
          className="list-none flex flex-col"
          style={{
            gap: '14px',
            padding: 0,
            margin: 0,
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
                gap: '20px',
                padding: '18px 0',
                borderBottom:
                  i < BULLETS.length - 1
                    ? '1px solid rgba(7,228,198,0.12)'
                    : 'none',
                textAlign: 'left',
              }}
            >
              <div
                style={{
                  width: '54px',
                  height: '54px',
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
                <svg
                  viewBox="0 0 24 24"
                  width={30}
                  height={30}
                  aria-hidden="true"
                >
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
              <span
                style={{
                  fontSize: '20px',
                  color: '#ffffff',
                  lineHeight: 1.55,
                }}
              >
                {label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
