'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  durationMs?: number;
  className?: string;
}

/**
 * Wraps children in a div that fades in (and slides DOWN from above) the first
 * time it scrolls into view. Pure CSS transition triggered by IntersectionObserver.
 *
 * delay: milliseconds before the animation starts (used to stagger sibling fades)
 * durationMs: how long the fade takes — defaults to a slow 1100ms
 */
export default function FadeIn({
  children,
  delay = 0,
  durationMs = 1100,
  className = '',
}: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(-24px)',
        transition: `opacity ${durationMs}ms ease-out ${delay}ms, transform ${durationMs}ms ease-out ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {children}
    </div>
  );
}
