import Link from 'next/link';
import Image from 'next/image';

const TEAL = '#07e4c6';

const PAGE_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/intelligent-chat-systems/standard', label: 'Standard Chat System' },
  { href: '/intelligent-chat-systems/service', label: 'Service Business' },
  { href: '/intelligent-chat-systems/retail', label: 'Retail and E-Commerce' },
  { href: '/intelligent-chat-systems/internal', label: 'Internal Chat System' },
  { href: '/intelligent-chat-systems/custom', label: 'Custom Chat System' },
  { href: '/process', label: 'Our Process' },
  { href: '/about', label: 'About' },
  { href: '/compliance', label: 'Privacy and Data' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        background: '#050505',
        borderTop: '1px solid rgba(7,228,198,0.14)',
        padding: '64px 24px 40px',
        width: '100%',
      }}
    >
      <div
        className="max-w-6xl mx-auto grid gap-12 md:gap-15 md:[grid-template-columns:2fr_1fr_1fr]"
        style={{ marginBottom: '48px' }}
      >
        {/* Brand */}
        <div>
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/logo.png"
              alt="Output Systems"
              width={260}
              height={66}
              className="h-7 w-auto"
            />
          </Link>
          <p
            style={{
              fontSize: '15px',
              color: 'rgba(255,255,255,0.4)',
              lineHeight: 1.75,
              marginTop: '16px',
              maxWidth: '300px',
            }}
          >
            AI-powered intelligent chat systems built for your business. 100% done
            for you, from design through to monthly management.
          </p>
          <div
            style={{
              fontSize: '13px',
              fontWeight: 600,
              color: TEAL,
              marginTop: '12px',
              letterSpacing: '0.5px',
            }}
          >
            Reclaim Time. Increase Profits. Reduce Expenses.
          </div>
        </div>

        {/* Pages */}
        <div>
          <h4
            style={{
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: TEAL,
              marginBottom: '20px',
            }}
          >
            Pages
          </h4>
          <ul
            className="list-none flex flex-col"
            style={{ gap: '12px', padding: 0, margin: 0 }}
          >
            {PAGE_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  style={{
                    fontSize: '14px',
                    color: 'rgba(255,255,255,0.5)',
                    transition: 'color 0.2s',
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Legal + Contact */}
        <div>
          <h4
            style={{
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: TEAL,
              marginBottom: '20px',
            }}
          >
            Legal
          </h4>
          <ul
            className="list-none flex flex-col"
            style={{ gap: '12px', padding: 0, margin: 0, marginBottom: '32px' }}
          >
            <li>
              <Link
                href="/privacy-policy"
                style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.5)',
                }}
              >
                Privacy Policy
              </Link>
            </li>
          </ul>

          <h4
            style={{
              fontSize: '10px',
              fontWeight: 700,
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: TEAL,
              marginBottom: '20px',
            }}
          >
            Contact
          </h4>
          <ul
            className="list-none flex flex-col"
            style={{ gap: '12px', padding: 0, margin: 0 }}
          >
            <li>
              <a
                href="mailto:connect@output.systems"
                style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.5)',
                }}
              >
                connect@output.systems
              </a>
            </li>
            <li>
              <a
                href="tel:6476223799"
                style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.5)',
                }}
              >
                647 622 3799
              </a>
            </li>
            <li
              style={{
                color: 'rgba(255,255,255,0.4)',
                fontSize: '13px',
                lineHeight: 1.5,
              }}
            >
              375 University Ave
              <br />
              Toronto, Ontario, Canada
            </li>
          </ul>
        </div>
      </div>

      <div
        className="max-w-6xl mx-auto flex flex-col gap-3 md:flex-row md:justify-between md:items-center"
        style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '28px',
        }}
      >
        <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.25)' }}>
          © {year} Output Systems / Output Inc. All rights reserved. Toronto,
          Ontario, Canada.
        </p>
        <p style={{ color: 'rgba(255,255,255,0.15)', fontSize: '12px' }}>
          chat.output.systems
        </p>
      </div>
    </footer>
  );
}
