'use client';

import { Fragment, type CSSProperties } from 'react';

/**
 * Typewriter heading that fades each character in via a CSS animation-delay
 * pipeline, native to the browser's compositor — no React state ticking each
 * frame. Words are wrapped in inline-block containers so the line-break
 * engine still sees real word boundaries (a per-character span structure
 * collapses break opportunities and breaks word wrapping).
 *
 * Segments shape:
 *   { text: string, color?: string, br?: boolean, nowrap?: boolean }
 *
 * Notes
 * - Regular spaces (U+0020) inside a segment ARE word separators — they get
 *   rendered as plain text nodes between word boxes so the line breaks.
 * - Non-breaking spaces (U+00A0) stay inside the surrounding word box so
 *   they never break.
 * - No caret. Curtis didn't want the flashing cursor.
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
.typing-char {
  opacity: 0;
  animation-name: typing-char-fade-in;
  animation-duration: 160ms;
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
    <span className={className} style={style}>
      <style>{TYPING_STYLES}</style>
      {segments.map((seg, segI) => {
        const innerStyle: CSSProperties = {};
        if (seg.color) innerStyle.color = seg.color;
        if (seg.nowrap) innerStyle.whiteSpace = 'nowrap';

        // Split by regular space only — nbsp (U+00A0) stays inside its word.
        // The split keeps space tokens so we can render real space text nodes
        // between word boxes (real break opportunities for the layout engine).
        const tokens = seg.text.split(/( )/);

        // Bump the char index for the spaces we DON'T render as animated chars,
        // so timing still hits totalMs at the very last character.
        const segNodes = tokens.map((tok, i) => {
          if (tok === '') return null;
          if (tok === ' ') {
            // Real space text node — wrap opportunity for the browser. Still
            // counts toward typing duration so spacing reads correctly.
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
