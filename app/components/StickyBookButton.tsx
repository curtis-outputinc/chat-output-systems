import Link from 'next/link';

/**
 * Floating "Book A Free Discovery Call" CTA fixed to the bottom of the viewport.
 *
 * Desktop: centered bottom pill. The chatbot bubble (injected by embed.js)
 * sits in its own bottom-right slot and does not overlap.
 *
 * Mobile: anchored to the LEFT half of the viewport so the chatbot bubble
 * (also restyled in embed.js) can sit on the RIGHT half as a matching pill.
 *
 * Default destination is /contact (Curtis's Cal.com isn't set up yet — swap
 * `href` for the Cal.com URL when it is).
 */
export default function StickyBookButton({
  href = '/contact',
  label = 'BOOK A FREE DISCOVERY CALL',
}: {
  href?: string;
  label?: string;
}) {
  const isExternal = /^https?:\/\//.test(href);

  return (
    <div
      className="ai-book-wrapper fixed bottom-5 z-[9999] pointer-events-none flex justify-center"
    >
      <style>{`
        .ai-book-wrapper {
          left: 0;
          right: 0;
          width: 100%;
        }
        .ai-book-pill {
          background: var(--color-brand-teal);
          color: #000;
          padding: 14px 36px;
          font-size: 15px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          border-radius: 4px;
          text-align: center;
          text-decoration: none;
          line-height: 1.25;
          box-shadow: 0 4px 18px rgba(7, 228, 198, 0.18);
          transition: background 0.18s ease, color 0.18s ease, box-shadow 0.18s ease, transform 0.18s ease;
        }
        .ai-book-pill:hover {
          background: #04a892;
          color: #ffffff;
          box-shadow: 0 6px 22px rgba(7, 228, 198, 0.34);
          transform: translateY(-1px);
        }
        .ai-book-pill:active {
          transform: translateY(0);
        }
        @media (max-width: 640px) {
          .ai-book-wrapper {
            left: 0 !important;
            right: auto !important;
            width: 50% !important;
          }
          .ai-book-pill {
            width: 90%;
            min-height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 12px;
            padding: 8px 10px;
            letter-spacing: 0.14em;
          }
        }
      `}</style>

      <Link
        href={href}
        {...(isExternal
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
        className="pointer-events-auto inline-block ai-book-pill"
      >
        {label}
      </Link>
    </div>
  );
}
