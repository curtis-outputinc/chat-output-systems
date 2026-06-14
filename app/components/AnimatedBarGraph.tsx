'use client';

import { useEffect, useRef, useState } from 'react';

const TEAL = '#07e4c6';

/** Animated bar graph that grows each bar from zero on scroll-in.
 *  Bars are sized as percentages of the SVG's height so it scales cleanly. */
export default function AnimatedBarGraph() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

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

  // 8 bars, each climbing in height to show growth over time.
  const heights = [22, 30, 28, 42, 52, 60, 74, 88];

  return (
    <div ref={ref} className="w-full" style={{ aspectRatio: '5 / 3' }}>
      <style>{KEYFRAMES}</style>
      <svg
        viewBox="0 0 500 300"
        role="img"
        aria-label="Bar graph showing growth over time"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <defs>
          <linearGradient id="bar-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#bdf6ec" />
            <stop offset="50%" stopColor={TEAL} />
            <stop offset="100%" stopColor="#04695a" />
          </linearGradient>
          <linearGradient id="bar-grow-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(7,228,198,0.0)" />
            <stop offset="50%" stopColor="rgba(7,228,198,0.9)" />
            <stop offset="100%" stopColor="rgba(7,228,198,0.0)" />
          </linearGradient>
        </defs>

        {/* baseline */}
        <line
          x1="20"
          y1="260"
          x2="480"
          y2="260"
          stroke="rgba(7,228,198,0.25)"
          strokeWidth="1.2"
        />
        {/* y-axis */}
        <line
          x1="20"
          y1="40"
          x2="20"
          y2="260"
          stroke="rgba(7,228,198,0.18)"
          strokeWidth="1.2"
        />

        {/* tick marks */}
        {[0, 1, 2, 3].map((i) => {
          const y = 260 - (i + 1) * 50;
          return (
            <line
              key={`tick-${i}`}
              x1="20"
              y1={y}
              x2="480"
              y2={y}
              stroke="rgba(255,255,255,0.04)"
              strokeWidth="1"
              strokeDasharray="3 6"
            />
          );
        })}

        {/* bars — each one animates continuously with a staggered delay so
            the whole graph reads as a wave that keeps rising */}
        {heights.map((h, i) => {
          const barW = 36;
          const gap = 14;
          const startX = 50;
          const x = startX + i * (barW + gap);
          const fullHeight = (h / 100) * 220;
          const y = 260 - fullHeight;
          return (
            <g
              key={`bar-${i}`}
              style={{
                transformOrigin: `${x + barW / 2}px 260px`,
                transform: visible ? undefined : 'scaleY(0)',
                animation: visible
                  ? `bar-rise 4.2s ease-in-out ${i * 180}ms infinite`
                  : undefined,
              }}
            >
              <rect
                x={x}
                y={y}
                width={barW}
                height={fullHeight}
                rx="4"
                fill="url(#bar-grad)"
              />
              {/* top highlight cap */}
              <rect
                x={x}
                y={y}
                width={barW}
                height={6}
                rx="3"
                fill="rgba(255,255,255,0.5)"
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
}

const KEYFRAMES = `
@keyframes bar-rise {
  0%   { transform: scaleY(0); }
  35%  { transform: scaleY(1); }
  70%  { transform: scaleY(1); }
  100% { transform: scaleY(0); }
}
`;
