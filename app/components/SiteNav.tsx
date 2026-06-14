'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

const TEAL = '#07e4c6';

export const CHAT_SYSTEMS_LINKS = [
  { href: '/intelligent-chat-systems/standard', label: 'Standard Intelligent Website Chat System' },
  { href: '/intelligent-chat-systems/service', label: 'Customer Chat System Service Business' },
  { href: '/intelligent-chat-systems/retail', label: 'Customer Chat System Retail and E-Commerce' },
  { href: '/intelligent-chat-systems/internal', label: 'Internal Chat System' },
  { href: '/intelligent-chat-systems/custom', label: 'Custom Chat System' },
];

const NAV_LINKS: { href: string; label: string; group?: 'chat-systems' }[] = [
  { href: '#chat-systems', label: 'Intelligent Chat Systems ▾', group: 'chat-systems' },
  { href: '/process', label: 'Our Process' },
  { href: '/about', label: 'About' },
  { href: '/compliance', label: 'Privacy and Data' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteNav({ active }: { active?: string }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const chatSystemsActive =
    !!active && active.startsWith('/intelligent-chat-systems/');

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-10 py-4 backdrop-blur-md"
      style={{
        background: 'rgba(0,0,0,0.96)',
        borderBottom: '1px solid rgba(7,228,198,0.14)',
        height: '72px',
      }}
    >
      <Link href="/" className="flex items-center">
        <Image
          src="/logo.png"
          alt="Output Systems"
          width={220}
          height={56}
          priority
          className="h-10 w-auto"
        />
      </Link>

      <MobileMenu active={active} />

      <ul className="hidden md:flex items-center gap-7 list-none">
        {NAV_LINKS.map(({ href, label, group }) => {
          if (group === 'chat-systems') {
            return (
              <li
                key="chat-systems"
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button
                  type="button"
                  className="font-medium transition-opacity duration-200 bg-transparent border-none cursor-pointer text-white"
                  style={{
                    fontSize: '17px',
                    color: chatSystemsActive ? TEAL : '#ffffff',
                    whiteSpace: 'nowrap',
                    padding: 0,
                  }}
                  aria-haspopup="menu"
                  aria-expanded={dropdownOpen}
                >
                  {label}
                </button>
                {dropdownOpen && (
                  <div
                    role="menu"
                    className="absolute left-0 z-40"
                    style={{
                      top: '100%',
                      background: '#080808',
                      border: '1px solid rgba(7,228,198,0.14)',
                      borderTop: `2px solid ${TEAL}`,
                      minWidth: '320px',
                      padding: '8px 0',
                    }}
                  >
                    {CHAT_SYSTEMS_LINKS.map((item, idx) => {
                      const isActive = active === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          role="menuitem"
                          className="block transition-opacity duration-200 text-white"
                          style={{
                            padding: '14px 24px',
                            fontSize: '15px',
                            fontWeight: 500,
                            color: isActive ? TEAL : '#ffffff',
                            borderBottom:
                              idx < CHAT_SYSTEMS_LINKS.length - 1
                                ? '1px solid rgba(255,255,255,0.06)'
                                : 'none',
                            textDecoration: 'none',
                          }}
                        >
                          {item.label}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </li>
            );
          }
          const isActive = active === href;
          return (
            <li key={href}>
              <Link
                href={href}
                className="font-medium transition-opacity duration-200 text-white"
                style={{
                  fontSize: '17px',
                  color: isActive ? TEAL : '#ffffff',
                  whiteSpace: 'nowrap',
                }}
              >
                {label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
