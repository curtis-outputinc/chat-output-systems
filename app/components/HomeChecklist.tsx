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
          window.setTimeout(() => {
            entry.target.classList.add('home-check-visible');
          }, idx * 80);
          io.unobserve(entry.target);
        }
      },
      { threshold: 0.2 },
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
            gap: '16px',
            padding: '14px 0',
            borderBottom:
              i < ITEMS.length - 1
                ? '1px solid rgba(7,228,198,0.08)'
                : 'none',
          }}
        >
          <div
            style={{
              width: '24px',
              height: '24px',
              borderRadius: '50%',
              background: 'rgba(7,228,198,0.06)',
              border: '1px solid rgba(7,228,198,0.28)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}
          >
            <svg viewBox="0 0 24 24" width={12} height={12} aria-hidden="true">
              <polyline
                points="20 6 9 17 4 12"
                fill="none"
                stroke={TEAL}
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="home-check-draw"
              />
            </svg>
          </div>
          <span
            style={{
              fontSize: '17px',
              color: '#ffffff',
            }}
          >
            {label}
          </span>
        </li>
      ))}
    </ul>
  );
}
