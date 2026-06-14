'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { CHAT_SYSTEMS_LINKS } from './SiteNav';

const TEAL = '#07e4c6';

const PRIMARY_LINKS = [
  { href: '/process', label: 'Our Process' },
  { href: '/about', label: 'About' },
  { href: '/compliance', label: 'Privacy and Data' },
  { href: '/contact', label: 'Contact' },
];

/** Mobile-only hamburger nav. Hidden on md+. Includes the Intelligent Chat
 *  Systems sub-list inline (no nested dropdown — easier touch targets). */
export default function MobileMenu({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        aria-label={open ? 'Close menu' : 'Open menu'}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="flex flex-col items-center justify-center"
        style={{
          width: '44px',
          height: '44px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          gap: '5px',
        }}
      >
        <span
          aria-hidden="true"
          style={{
            display: 'block',
            width: '26px',
            height: '3px',
            background: TEAL,
            borderRadius: '2px',
            transformOrigin: 'center',
            transition:
              'transform 0.22s ease, opacity 0.18s ease, background 0.18s',
            transform: open ? 'translateY(8px) rotate(45deg)' : 'none',
          }}
        />
        <span
          aria-hidden="true"
          style={{
            display: 'block',
            width: '26px',
            height: '3px',
            background: TEAL,
            borderRadius: '2px',
            transition: 'opacity 0.18s ease',
            opacity: open ? 0 : 1,
          }}
        />
        <span
          aria-hidden="true"
          style={{
            display: 'block',
            width: '26px',
            height: '3px',
            background: TEAL,
            borderRadius: '2px',
            transformOrigin: 'center',
            transition: 'transform 0.22s ease',
            transform: open ? 'translateY(-8px) rotate(-45deg)' : 'none',
          }}
        />
      </button>

      {open && (
        <div
          className="fixed left-0 right-0 z-40 overflow-y-auto"
          style={{
            top: '72px',
            background: '#000',
            borderBottom: '1px solid rgba(7,228,198,0.22)',
            padding: '28px 24px',
            maxWidth: '100vw',
            maxHeight: 'calc(100vh - 72px)',
          }}
        >
          <ul
            className="list-none flex flex-col"
            style={{ gap: '18px' }}
          >
            <li>
              <Link
                href="/"
                onClick={() => setOpen(false)}
                style={{
                  display: 'block',
                  fontSize: '20px',
                  fontWeight: 600,
                  color: active === '/' ? TEAL : '#ffffff',
                  textDecoration: 'none',
                }}
              >
                Home
              </Link>
            </li>

            <li
              style={{
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                color: TEAL,
                marginTop: '6px',
              }}
            >
              Intelligent Chat Systems
            </li>
            {CHAT_SYSTEMS_LINKS.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href} style={{ paddingLeft: '16px' }}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    style={{
                      display: 'block',
                      fontSize: '17px',
                      fontWeight: 500,
                      color: isActive ? TEAL : '#ffffff',
                      textDecoration: 'none',
                      lineHeight: 1.45,
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}

            {PRIMARY_LINKS.map(({ href, label }) => {
              const isActive = active === href;
              return (
                <li key={href} style={{ marginTop: '6px' }}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    style={{
                      display: 'block',
                      fontSize: '20px',
                      fontWeight: 600,
                      color: isActive ? TEAL : '#ffffff',
                      textDecoration: 'none',
                    }}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
