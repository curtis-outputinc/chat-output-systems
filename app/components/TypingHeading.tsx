'use client';

import { useEffect, useState, type CSSProperties } from 'react';

/**
 * Typewriter heading that types its content out over `totalMs` (default 3000ms),
 * preserving colored spans by accepting an array of segments instead of inline
 * JSX. A blinking caret follows the cursor until the heading is complete.
 *
 * Segments shape:
 *   { text: string, color?: string, br?: boolean }
 *
 *   - `color` paints that segment a different color while typing.
 *   - `br` inserts a line break after the segment, but only once that segment
 *     has been fully typed (otherwise the line breaks while it's still typing).
 */

export interface TypingSegment {
  text: string;
  color?: string;
  br?: boolean;
}

interface Props {
  segments: TypingSegment[];
  totalMs?: number;
  className?: string;
  style?: CSSProperties;
}

const CARET_KEYFRAMES = `
@keyframes typing-caret-blink {
  0%, 49%   { opacity: 1; }
  50%, 100% { opacity: 0; }
}
`;

export default function TypingHeading({
  segments,
  totalMs = 3000,
  className,
  style,
}: Props) {
  const totalChars = segments.reduce((sum, s) => sum + s.text.length, 0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (totalChars === 0) return;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / totalMs, 1);
      // Reveal characters slightly ahead of strict linear so the last character
      // doesn't lag — easeOutQuad on the back half feels natural.
      const eased = progress < 1 ? progress : 1;
      const next = Math.floor(totalChars * eased);
      setCharCount(next);
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [totalChars, totalMs]);

  let remaining = charCount;
  const isDone = charCount >= totalChars;

  return (
    <span className={className} style={style}>
      <style>{CARET_KEYFRAMES}</style>
      {segments.map((seg, i) => {
        const segLen = seg.text.length;
        const shown = Math.min(segLen, Math.max(0, remaining));
        remaining -= segLen;
        const fullyShown = shown >= segLen;
        return (
          <span key={i}>
            <span style={seg.color ? { color: seg.color } : undefined}>
              {seg.text.slice(0, shown)}
            </span>
            {seg.br && fullyShown && <br />}
          </span>
        );
      })}
      {!isDone && (
        <span
          aria-hidden="true"
          style={{
            display: 'inline-block',
            width: '0.55ch',
            marginLeft: '0.08em',
            height: '0.95em',
            verticalAlign: 'baseline',
            backgroundColor: 'currentColor',
            animation: 'typing-caret-blink 0.7s steps(1) infinite',
            transform: 'translateY(0.1em)',
            borderRadius: '1px',
          }}
        />
      )}
    </span>
  );
}
