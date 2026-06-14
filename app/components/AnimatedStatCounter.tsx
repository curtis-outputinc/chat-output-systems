'use client';

import { useEffect, useRef, useState } from 'react';

const TEAL = '#07e4c6';

/**
 * Big animated stat counter. Counts from 0 → `target` (default 88) when the
 * element scrolls into view, then locks at the target value. The percentage
 * number is teal; the headline and citation that follow are white.
 *
 * Props let Curtis change the number, the headline body, and the citation
 * without touching this file later.
 */
interface Props {
  target?: number;
  /** Starting numeric value the counter animates up from. Defaults to 0. */
  startValue?: number;
  /** How many decimal places to render (e.g., 1 for "3.0x"). Defaults to 0. */
  decimals?: number;
  /** Character(s) to append to the rendered number (e.g., "%" or "x"). */
  suffix?: string;
  durationMs?: number;
  /** Optional text that appears ABOVE the big counter — used when the stat
   *  reads as one sentence flowing top → counter → bottom. */
  preHeadline?: string;
  headline?: string;
  citation?: string;
}

export default function AnimatedStatCounter({
  target = 88,
  startValue = 0,
  decimals = 0,
  suffix = '%',
  durationMs = 2000,
  preHeadline,
  headline = 'of executives say AI integrated into most parts of a business increases annual revenue.',
  citation = '(NVIDIA State of AI, 2026)',
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [count, setCount] = useState(startValue);

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
      // Wait until ~55% of the section is on screen before firing. The big
      // counter sits in a tall section so 30% threshold was triggering before
      // the number was anywhere near the user's actual focus.
      { threshold: 0.55 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min((now - start) / durationMs, 1);
      // ease-out cubic for a satisfying decel as it approaches the target
      const eased = 1 - Math.pow(1 - t, 3);
      const value = startValue + (target - startValue) * eased;
      setCount(value);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [visible, target, startValue, durationMs]);

  const displayValue =
    decimals > 0 ? count.toFixed(decimals) : Math.floor(count).toString();

  return (
    <div ref={ref} className="text-center mx-auto" style={{ maxWidth: '960px' }}>
      {preHeadline && (
        <p
          className="font-bold mx-auto"
          style={{
            fontSize: 'clamp(22px, 2.8vw, 36px)',
            lineHeight: 1.35,
            letterSpacing: '-0.6px',
            color: '#ffffff',
            maxWidth: '820px',
            marginBottom: '24px',
          }}
        >
          {preHeadline}
        </p>
      )}
      <div
        className="font-black tracking-tight"
        style={{
          fontSize: 'clamp(90px, 13.5vw, 180px)',
          color: TEAL,
          lineHeight: 1,
          letterSpacing: '-3px',
          marginBottom: '12px',
        }}
      >
        {displayValue}
        <span style={{ fontSize: '0.55em', verticalAlign: '0.2em' }}>
          {suffix}
        </span>
      </div>
      <p
        className="font-bold mx-auto"
        style={{
          fontSize: 'clamp(22px, 2.8vw, 36px)',
          lineHeight: 1.35,
          letterSpacing: '-0.6px',
          color: '#ffffff',
          maxWidth: '820px',
        }}
      >
        {headline}
      </p>
      <p
        className="italic mt-5"
        style={{
          fontSize: '19px',
          color: '#ffffff',
        }}
      >
        {citation}
      </p>
    </div>
  );
}
