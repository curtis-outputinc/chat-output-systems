'use client';

import { useEffect, useRef, useState } from 'react';

const TEAL = '#07e4c6';

/** A mock dashboard SVG that lights up element-by-element when scrolled in:
 *  the frame draws first, then the headline KPI counts up, then the line
 *  chart strokes itself, then the rows of recent items pop in sequentially.
 */
export default function AnimatedDashboard() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    // Phase 1: rapid count from 0 → ~1500 over 1.5s (ease-out cubic).
    // Phase 2: slow continuous increments forever — feels like profit
    // is still coming in while the visitor is looking at the dashboard.
    const initialTarget = 1500;
    const initialDur = 1500;
    const start = performance.now();
    let count = 0;
    let raf = 0;
    let slow: ReturnType<typeof setInterval> | null = null;

    const rapidTick = (now: number) => {
      const t = Math.min((now - start) / initialDur, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      count = Math.floor(initialTarget * eased);
      setCounter(count);
      if (t < 1) {
        raf = requestAnimationFrame(rapidTick);
      } else {
        // Switch to the slow indefinite increment loop.
        slow = setInterval(() => {
          // random small bump — between $3 and $24 each tick
          count += Math.floor(Math.random() * 22) + 3;
          setCounter(count);
        }, 380);
      }
    };

    raf = requestAnimationFrame(rapidTick);
    return () => {
      cancelAnimationFrame(raf);
      if (slow) clearInterval(slow);
    };
  }, [visible]);

  const recentRows = [
    { label: 'New lead captured', value: '$2,400', delay: 1900 },
    { label: 'Invoice paid', value: '$1,850', delay: 2150 },
    { label: 'Meeting booked', value: '— ', delay: 2400 },
    { label: 'Document processed', value: '— ', delay: 2650 },
  ];

  return (
    <div ref={ref} className="w-full" style={{ aspectRatio: '5 / 3' }}>
      <style>{KEYFRAMES}</style>
      <svg
        viewBox="0 0 500 300"
        role="img"
        aria-label="Live business dashboard populating with data"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <defs>
          <linearGradient id="dash-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#bdf6ec" />
            <stop offset="100%" stopColor={TEAL} />
          </linearGradient>
        </defs>

        {/* Frame */}
        <rect
          x="10"
          y="10"
          width="480"
          height="280"
          rx="10"
          fill="#0a0f0d"
          stroke="rgba(7,228,198,0.22)"
          strokeWidth="1.4"
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 600ms ease-out',
          }}
        />
        {/* top accent */}
        <rect
          x="10"
          y="10"
          width="480"
          height="3"
          rx="2"
          fill={TEAL}
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 600ms ease-out 100ms',
          }}
        />
        {/* sidebar */}
        <rect
          x="10"
          y="13"
          width="60"
          height="277"
          fill="#06120f"
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 600ms ease-out 200ms',
          }}
        />
        {/* sidebar dots */}
        {[34, 56, 78, 100, 122].map((y, i) => (
          <circle
            key={`s-${i}`}
            cx="40"
            cy={y}
            r="4"
            fill={i === 1 ? TEAL : 'rgba(255,255,255,0.25)'}
            style={{
              opacity: visible ? 1 : 0,
              transition: `opacity 400ms ease-out ${300 + i * 60}ms`,
            }}
          />
        ))}

        {/* Headline KPI block */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 600ms ease-out 700ms',
          }}
        >
          <text
            x="86"
            y="46"
            fill="rgba(7,228,198,0.85)"
            fontFamily="Inter, sans-serif"
            fontSize="9"
            fontWeight="600"
            letterSpacing="1.6"
          >
            TODAY&apos;S PROFITS
          </text>
          <text
            x="86"
            y="84"
            fill="#ffffff"
            fontFamily="Inter, sans-serif"
            fontSize="34"
            fontWeight="800"
            letterSpacing="-0.8"
          >
            ${counter.toLocaleString()}
          </text>
          <text
            x="86"
            y="100"
            fill="rgba(7,228,198,0.85)"
            fontFamily="Inter, sans-serif"
            fontSize="10"
            fontWeight="600"
          >
            ↑ 18% vs last week
          </text>
        </g>

        {/* Line chart panel */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 600ms ease-out 1000ms',
          }}
        >
          <rect
            x="86"
            y="118"
            width="190"
            height="80"
            rx="4"
            fill="#06120f"
            stroke="rgba(7,228,198,0.14)"
          />
          {/* axis */}
          <line x1="92" y1="190" x2="270" y2="190" stroke="rgba(255,255,255,0.1)" />
          {/* line */}
          <polyline
            points="94,180 116,168 140,170 162,150 184,148 206,134 230,138 252,118 270,124"
            fill="none"
            stroke="url(#dash-line)"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="400"
            strokeDashoffset={visible ? 0 : 400}
            style={{
              transition: 'stroke-dashoffset 1500ms ease-out 1300ms',
              filter: 'drop-shadow(0 0 4px rgba(7,228,198,0.45))',
            }}
          />
        </g>

        {/* Donut chart panel */}
        <g
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 600ms ease-out 1100ms',
          }}
        >
          <rect
            x="286"
            y="118"
            width="194"
            height="80"
            rx="4"
            fill="#06120f"
            stroke="rgba(7,228,198,0.14)"
          />
          <circle
            cx="326"
            cy="158"
            r="22"
            fill="none"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="6"
          />
          <circle
            cx="326"
            cy="158"
            r="22"
            fill="none"
            stroke={TEAL}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 22}`}
            strokeDashoffset={visible ? `${2 * Math.PI * 22 * (1 - 0.78)}` : `${2 * Math.PI * 22}`}
            style={{
              transition:
                'stroke-dashoffset 1400ms cubic-bezier(0.4, 0, 0.2, 1) 1400ms',
              transform: 'rotate(-90deg)',
              transformOrigin: '326px 158px',
            }}
          />
          <text
            x="326"
            y="162"
            textAnchor="middle"
            fill="#ffffff"
            fontFamily="Inter, sans-serif"
            fontSize="13"
            fontWeight="700"
          >
            78%
          </text>
          <text
            x="362"
            y="148"
            fill="rgba(255,255,255,0.85)"
            fontFamily="Inter, sans-serif"
            fontSize="10"
            fontWeight="600"
          >
            Capacity used
          </text>
          <text
            x="362"
            y="172"
            fill="rgba(7,228,198,0.85)"
            fontFamily="Inter, sans-serif"
            fontSize="9"
            fontWeight="600"
            letterSpacing="0.6"
          >
            HEALTHY
          </text>
        </g>

        {/* Recent activity rows */}
        <g>
          {recentRows.map((row, i) => {
            const y = 220 + i * 18;
            return (
              <g
                key={`row-${i}`}
                style={{
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateX(0)' : 'translateX(-12px)',
                  transition: `opacity 400ms ease-out ${row.delay}ms, transform 400ms ease-out ${row.delay}ms`,
                }}
              >
                <circle cx="92" cy={y - 3} r="3" fill={TEAL} />
                <text
                  x="102"
                  y={y}
                  fill="#ffffff"
                  fontFamily="Inter, sans-serif"
                  fontSize="11"
                  fontWeight="500"
                >
                  {row.label}
                </text>
                <text
                  x="470"
                  y={y}
                  textAnchor="end"
                  fill="rgba(7,228,198,0.85)"
                  fontFamily="Inter, sans-serif"
                  fontSize="11"
                  fontWeight="600"
                >
                  {row.value}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}

const KEYFRAMES = ``;
