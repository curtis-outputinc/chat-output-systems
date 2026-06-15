'use client';

import {
  Fragment,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from 'react';

/**
 * Typewriter heading that fades each character in via CSS animation-delay.
 * Pure browser-compositor timing — no per-frame React state updates.
 *
 * Words are wrapped in inline-block containers so the line-break engine
 * sees real word boundaries; per-character spans alone collapse those
 * opportunities. Non-breaking spaces (U+00A0) stay inside their word box.
 *
 * Props:
 *   segments        Array of { text, color?, br?, nowrap? }
 *   totalMs         Total typing duration in ms (default 3000)
 *   triggerOnScroll If true, defer the animation until the heading scrolls
 *                   into view. Useful for headings below the fold.
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
  triggerOnScroll?: boolean;
  className?: string;
  style?: CSSProperties;
}

const TYPING_STYLES = `
@keyframes typing-char-fade-in {
  from { opacity: 0; }
  to   { opacity: 1; }
}
.typing-char { opacity: 0; }
.typing-active .typing-char {
  animation-name: typing-char-fade-in;
  animation-duration: 160ms;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
}
`;

export default function TypingHeading({
  segments,
  totalMs = 3000,
  triggerOnScroll = false,
  className,
  style,
}: Props) {
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const [active, setActive] = useState(!triggerOnScroll);
  const totalChars = segments.reduce((sum, s) => sum + s.text.length, 0);
  const msPerChar = totalChars > 0 ? totalMs / totalChars : 0;

  useEffect(() => {
    if (!triggerOnScroll || active) return;
    const el = containerRef.current;
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
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [triggerOnScroll, active]);

  let charIndex = 0;

  function renderWord(word: string, key: string) {
    const chars = Array.from(word).map((ch, i) => {
      const delayMs = charIndex * msPerChar;
      charIndex += 1;
      return (
        <span
          key={i}
          className="typing-char"
          style={{ animationDelay: `${delayMs.toFixed(1)}ms` }}
        >
          {ch}
        </span>
      );
    });
    return (
      <span key={key} style={{ display: 'inline-block' }}>
        {chars}
      </span>
    );
  }

  return (
    <span
      ref={containerRef}
      className={`${className ?? ''} ${active ? 'typing-active' : ''}`.trim()}
      style={style}
    >
      <style>{TYPING_STYLES}</style>
      {segments.map((seg, segI) => {
        const innerStyle: CSSProperties = {};
        if (seg.color) innerStyle.color = seg.color;
        if (seg.nowrap) innerStyle.whiteSpace = 'nowrap';

        const tokens = seg.text.split(/( )/);

        const segNodes = tokens.map((tok, i) => {
          if (tok === '') return null;
          if (tok === ' ') {
            charIndex += 1;
            return <Fragment key={`s-${i}`}>{' '}</Fragment>;
          }
          return renderWord(tok, `w-${i}`);
        });

        return (
          <span
            key={segI}
            style={Object.keys(innerStyle).length > 0 ? innerStyle : undefined}
          >
            {segNodes}
            {seg.br && <br />}
          </span>
        );
      })}
    </span>
  );
}
