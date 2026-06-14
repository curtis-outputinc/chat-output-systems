'use client';

import { useEffect, useRef } from 'react';

/**
 * Full-viewport canvas that draws a slowly drifting network of teal nodes
 * connected by thin lines whenever they're within range. Continuous animation.
 *
 * Implementation notes:
 *  - position: fixed so it stays in the viewport while content scrolls past
 *  - z-index 0 — sits above the body's solid-black bg but below any section
 *    that paints its own background, so sections with dark-green bgs naturally
 *    hide the nodes while transparent sections let them shine through
 *  - pointer-events: none so it never blocks clicks
 *  - respects devicePixelRatio for crisp lines on retina screens
 *  - pauses the requestAnimationFrame loop when the tab is hidden
 */

const TEAL_R = 7;
const TEAL_G = 228;
const TEAL_B = 198;

const NODE_COUNT = 60; // +25% from previous 48
const MAX_DIST = 170;
const NODE_RADIUS = 1.9;
const DRIFT_RANGE = 0.36; // px per frame, each axis — bumped from 0.22 so the field reads as more active
const LINE_OPACITY = 0.32;
const NODE_OPACITY = 0.72;

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export default function AnimatedNodesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));
    let cssW = window.innerWidth;
    let cssH = window.innerHeight;
    // On narrow viewports the connecting lines clutter the background
    // and don't read as cleanly. Mobile gets just the floating dots.
    let isMobile = window.matchMedia('(max-width: 767px)').matches;

    function sizeCanvas() {
      if (!canvas || !ctx) return;
      cssW = window.innerWidth;
      cssH = window.innerHeight;
      canvas.width = Math.floor(cssW * dpr);
      canvas.height = Math.floor(cssH * dpr);
      canvas.style.width = cssW + 'px';
      canvas.style.height = cssH + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    const nodes: Node[] = [];
    function seedNodes() {
      nodes.length = 0;
      for (let i = 0; i < NODE_COUNT; i++) {
        nodes.push({
          x: Math.random() * cssW,
          y: Math.random() * cssH,
          vx: (Math.random() - 0.5) * 2 * DRIFT_RANGE,
          vy: (Math.random() - 0.5) * 2 * DRIFT_RANGE,
        });
      }
    }

    sizeCanvas();
    seedNodes();

    let raf = 0;
    let running = !document.hidden;

    function step() {
      if (!ctx) return;
      ctx.clearRect(0, 0, cssW, cssH);

      // drift + bounce on edges
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0) {
          n.x = 0;
          n.vx *= -1;
        } else if (n.x > cssW) {
          n.x = cssW;
          n.vx *= -1;
        }
        if (n.y < 0) {
          n.y = 0;
          n.vy *= -1;
        } else if (n.y > cssH) {
          n.y = cssH;
          n.vy *= -1;
        }
      }

      // lines first (so nodes sit on top). Skipped entirely on mobile so the
      // background reads as just floating dots there.
      if (!isMobile) {
        ctx.lineWidth = 1;
        for (let i = 0; i < nodes.length; i++) {
          const a = nodes[i];
          for (let j = i + 1; j < nodes.length; j++) {
            const b = nodes[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const d = Math.hypot(dx, dy);
            if (d < MAX_DIST) {
              const alpha = (1 - d / MAX_DIST) * LINE_OPACITY;
              ctx.strokeStyle = `rgba(${TEAL_R}, ${TEAL_G}, ${TEAL_B}, ${alpha})`;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
      }

      // nodes
      ctx.fillStyle = `rgba(${TEAL_R}, ${TEAL_G}, ${TEAL_B}, ${NODE_OPACITY})`;
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, NODE_RADIUS, 0, Math.PI * 2);
        ctx.fill();
      }

      if (running) {
        raf = requestAnimationFrame(step);
      }
    }

    raf = requestAnimationFrame(step);

    function onResize() {
      dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));
      sizeCanvas();
      isMobile = window.matchMedia('(max-width: 767px)').matches;
      // gently clamp existing node positions into the new viewport so
      // they don't visibly snap when the user resizes
      for (const n of nodes) {
        if (n.x > cssW) n.x = cssW;
        if (n.y > cssH) n.y = cssH;
      }
    }
    window.addEventListener('resize', onResize);

    function onVisibility() {
      running = !document.hidden;
      if (running) {
        raf = requestAnimationFrame(step);
      } else {
        cancelAnimationFrame(raf);
      }
    }
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
