'use client';

import { useEffect, useState, type CSSProperties } from 'react';

/**
 * Typewriter heading that renders all characters at once with `opacity: 0`,
 * then fades each one in via a per-character CSS animation-delay. Because
 * the timing runs in the browser's native compositor, the reveal is much
 * smoother than driving char-by-char re-renders from React state.
 *
 * A blinking caret sits at the end of the revealed text and disappears
 * once typing is complete.
 *
 * Segments shape:
 *   { text: string, color?: string, br?: boolean, nowrap?: boolean }
 */

export interface TypingSegment {
  text: string;
  color?: string;
  br?: boolean;
  nowrap?: boolean;
}

interface Props {
  segments: TypingSegment[];
  totalMs?: number;
  className?: string;
  style?: CSSProperties;
}

const TYPING_STYLES = `
@keyframes typing-char-fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}
@keyframes typing-caret-blink {
  0%, 49%   { opacity: 1; }
  50%, 100% { opacity: 0; }
}
.typing-char {
  opacity: 0;
  animation-name: typing-char-fade-in;
  animation-duration: 140ms;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}
`;

export default function TypingHeading({
  segments,
  totalMs = 3000,
  className,
  style,
}: Props) {
  const totalChars = segments.reduce((sum, s) => sum + s.text.length, 0);
  const msPerChar = totalChars > 0 ? totalMs / totalChars : 0;
  const [caretVisible, setCaretVisible] = useState(true);

  useEffect(() => {
    if (totalChars === 0) return;
    // Hide the caret slightly after the last character finishes its fade-in.
    const hideAt = totalMs + 200;
    const t = window.setTimeout(() => setCaretVisible(false), hideAt);
    return () => window.clearTimeout(t);
  }, [totalChars, totalMs]);

  let charIndex = 0;

  return (
    <span className={className} style={style}>
      <style>{TYPING_STYLES}</style>
      {segments.map((seg, segI) => {
        const innerStyle: CSSProperties = {};
        if (seg.color) innerStyle.color = seg.color;
        if (seg.nowrap) innerStyle.whiteSpace = 'nowrap';
        // Each character is rendered as its own span with an animation-delay
        // so the browser fades them in sequentially.
        const segContent = Array.from(seg.text).map((ch, i) => {
          const delayMs = charIndex * msPerChar;
          charIndex += 1;
          return (
            <span
              key={i}
              className="typing-char"
              style={{ animationDelay: `${delayMs.toFixed(1)}ms` }}
            >
              {ch === ' ' ? ' ' : ch}
            </span>
          );
        });
        return (
          <span
            key={segI}
            style={Object.keys(innerStyle).length > 0 ? innerStyle : undefined}
          >
            {segContent}
            {seg.br && <br />}
          </span>
        );
      })}
      {caretVisible && (
        <span
          aria-hidden="true"
          style={{
            display: 'inline-block',
            width: '0.5ch',
            marginLeft: '0.06em',
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
