'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

const TEAL = '#07e4c6';
const STORAGE_KEY = 'output-cookies-accepted';

export default function CookiesBanner() {
  const [show, setShow] = useState(false);
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (v !== '1') setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  function dismiss() {
    // Either Accept or X writes the same flag so the banner doesn't pop up
    // again on the next visit. Closing without checking the box is treated
    // as an acknowledgement that the site still uses cookies — per Curtis.
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {}
    setShow(false);
  }

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookies notice"
      aria-live="polite"
      style={{
        position: 'fixed',
        left: '20px',
        bottom: '20px',
        zIndex: 10000,
        width: 'calc(100% - 40px)',
        maxWidth: '420px',
        background: 'rgba(10,15,13,0.97)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        border: `1px solid ${TEAL}`,
        borderRadius: '10px',
        boxShadow: '0 14px 40px rgba(0,0,0,0.45)',
        padding: '22px 26px',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        gap: '18px',
      }}
    >
      <button
        type="button"
        onClick={dismiss}
        aria-label="Close cookies notice"
        style={{
          position: 'absolute',
          top: '8px',
          right: '10px',
          background: 'transparent',
          border: 'none',
          color: '#ffffff',
          fontSize: '20px',
          lineHeight: 1,
          cursor: 'pointer',
          padding: '6px 10px',
          opacity: 0.7,
        }}
      >
        ×
      </button>
      <div>
        <h2
          style={{
            fontSize: '18px',
            fontWeight: 800,
            color: '#ffffff',
            margin: 0,
            marginBottom: '8px',
            letterSpacing: '-0.2px',
          }}
        >
          We use cookies.
        </h2>
        <p style={{ fontSize: '15px', lineHeight: 1.6, margin: 0, color: '#ffffff' }}>
          This site uses cookies to make it work properly and to understand how
          visitors interact with it. By continuing, you agree to our use of
          cookies. See our{' '}
          <Link
            href="/privacy-policy"
            style={{ color: TEAL, textDecoration: 'underline' }}
          >
            Privacy Policy
          </Link>{' '}
          for details.
        </p>
      </div>

      <label
        htmlFor="cookies-agree"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          fontSize: '15px',
          color: '#ffffff',
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        <input
          id="cookies-agree"
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          style={{
            width: '22px',
            height: '22px',
            accentColor: TEAL,
            cursor: 'pointer',
            flexShrink: 0,
          }}
        />
        I agree to the use of cookies.
      </label>

      <button
        type="button"
        onClick={dismiss}
        disabled={!agreed}
        style={{
          background: agreed ? TEAL : 'rgba(7,228,198,0.2)',
          color: agreed ? '#000' : 'rgba(255,255,255,0.55)',
          border: 'none',
          padding: '14px 28px',
          fontSize: '14px',
          fontWeight: 700,
          letterSpacing: '2px',
          textTransform: 'uppercase',
          borderRadius: '4px',
          cursor: agreed ? 'pointer' : 'not-allowed',
          transition: 'background 0.2s, color 0.2s',
        }}
      >
        Accept and continue
      </button>
    </div>
  );
}
