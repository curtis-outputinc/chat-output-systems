'use client';

import { useEffect, useRef } from 'react';

const ITEMS = [
  'Captures leads automatically',
  'Qualifies prospects instantly',
  'Alerts your team in real time',
  'Answers customers around the clock',
  'Books appointments without staff',
  'Trains on your business content',
  'Monitors system continuously',
  'Delivers monthly performance insights',
  'Scales without adding headcount',
  'Fully managed from day one',
];

const TEAL = '#07e4c6';

// Animation timing per item:
//   t=0      checkmark icon fades in + checkmark stroke draws (0.45s)
//   t=0.35s  text fades in (0.35s)
// Stagger between items: 600ms (one fully completes before the next starts).
const ITEM_STAGGER_MS = 600;

export default function HomeChecklist() {
  const listRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const items = Array.from(
      list.querySelectorAll<HTMLLIElement>('.home-check-item'),
    );

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const idx = items.indexOf(entry.target as HTMLLIElement);
          // Only fire the cascade once, on the FIRST item that enters view.
          // The rest follow on a stagger so they always animate in order.
          if (idx !== 0) {
            io.unobserve(entry.target);
            continue;
          }
          items.forEach((el, i) => {
            window.setTimeout(() => {
              el.classList.add('home-check-visible');
            }, i * ITEM_STAGGER_MS);
          });
          items.forEach((el) => io.unobserve(el));
          break;
        }
      },
      { threshold: 0.15 },
    );

    items.forEach((item) => io.observe(item));
    return () => io.disconnect();
  }, []);

  return (
    <ul
      ref={listRef}
      className="list-none flex flex-col"
      style={{ gap: 0, padding: 0, margin: 0 }}
    >
      {ITEMS.map((label, i) => (
        <li
          key={label}
          className="home-check-item"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            padding: '18px 0',
            borderBottom:
              i < ITEMS.length - 1
                ? '1px solid rgba(7,228,198,0.12)'
                : 'none',
          }}
        >
          <div
            className="home-check-circle"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'rgba(7,228,198,0.08)',
              border: '1.5px solid rgba(7,228,198,0.38)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <svg viewBox="0 0 24 24" width={22} height={22} aria-hidden="true">
              <polyline
                points="20 6 9 17 4 12"
                fill="none"
                stroke={TEAL}
                strokeWidth={3}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="home-check-stroke"
              />
            </svg>
          </div>
          <span
            className="home-check-text"
            style={{
              fontSize: '19px',
              color: '#ffffff',
              lineHeight: 1.5,
            }}
          >
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
}
