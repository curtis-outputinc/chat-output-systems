import type { ReactNode } from 'react';

const TEAL = '#07e4c6';
const TEAL_DARK = '#04695a';
const TEAL_LIGHT = '#5beed5';
const TEAL_LIGHTER = '#bdf6ec';

export type IconVariant =
  | 'chatBubble'
  | 'leadCapture'
  | 'clock24'
  | 'calendar'
  | 'knowledge'
  | 'notification'
  | 'shoppingCart'
  | 'magnifier'
  | 'package'
  | 'shield'
  | 'lightbulb'
  | 'briefcase';

interface Props {
  variant: IconVariant;
  size?: number;
  ariaLabel?: string;
}

function FaceGradient({ id }: { id: string }) {
  return (
    <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stopColor={TEAL_LIGHTER} />
      <stop offset="35%" stopColor={TEAL_LIGHT} />
      <stop offset="70%" stopColor={TEAL} />
      <stop offset="100%" stopColor={TEAL_DARK} />
    </linearGradient>
  );
}

function ShadowGradient({ id }: { id: string }) {
  return (
    <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stopColor="#022a25" />
      <stop offset="100%" stopColor="#011d18" />
    </linearGradient>
  );
}

function Svg({
  children,
  ariaLabel,
  size,
}: {
  children: ReactNode;
  ariaLabel: string;
  size: number;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      role="img"
      aria-label={ariaLabel}
      width={size}
      height={size}
      style={{ width: '100%', maxWidth: `${size}px`, height: 'auto', display: 'block' }}
    >
      {children}
    </svg>
  );
}

function ChatBubble() {
  return (
    <>
      <defs>
        <FaceGradient id="cb-face" />
        <ShadowGradient id="cb-shadow" />
      </defs>
      <g transform="translate(4, 6)">
        <path
          d="M30 40 Q30 25 45 25 L150 25 Q165 25 165 40 L165 110 Q165 125 150 125 L95 125 L70 150 L70 125 L45 125 Q30 125 30 110 Z"
          fill="url(#cb-shadow)"
          opacity="0.55"
        />
      </g>
      <path
        d="M30 40 Q30 25 45 25 L150 25 Q165 25 165 40 L165 110 Q165 125 150 125 L95 125 L70 150 L70 125 L45 125 Q30 125 30 110 Z"
        fill="url(#cb-face)"
        stroke={TEAL_DARK}
        strokeWidth="1"
      />
      <g>
        <circle cx="65" cy="75" r="8" fill="#01231e">
          <animate
            attributeName="opacity"
            values="0.3;1;0.3"
            dur="1.4s"
            begin="0s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="97" cy="75" r="8" fill="#01231e">
          <animate
            attributeName="opacity"
            values="0.3;1;0.3"
            dur="1.4s"
            begin="0.25s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="129" cy="75" r="8" fill="#01231e">
          <animate
            attributeName="opacity"
            values="0.3;1;0.3"
            dur="1.4s"
            begin="0.5s"
            repeatCount="indefinite"
          />
        </circle>
      </g>
    </>
  );
}

function LeadCapture() {
  return (
    <>
      <defs>
        <FaceGradient id="lc-face" />
        <ShadowGradient id="lc-shadow" />
        <radialGradient id="lc-badge" cx="0.4" cy="0.35" r="0.75">
          <stop offset="0%" stopColor={TEAL_LIGHTER} />
          <stop offset="55%" stopColor={TEAL} />
          <stop offset="100%" stopColor={TEAL_DARK} />
        </radialGradient>
      </defs>
      <g transform="translate(4, 6)">
        <rect x="35" y="25" width="120" height="150" rx="10" fill="url(#lc-shadow)" opacity="0.55" />
      </g>
      <rect
        x="35"
        y="25"
        width="120"
        height="150"
        rx="10"
        fill="url(#lc-face)"
        stroke={TEAL_DARK}
        strokeWidth="1"
      />
      <rect x="50" y="50" width="90" height="8" rx="2" fill="#01231e" />
      <rect x="50" y="68" width="60" height="6" rx="2" fill="#022a25" opacity="0.7" />
      <rect x="50" y="86" width="90" height="8" rx="2" fill="#01231e" />
      <rect x="50" y="104" width="70" height="6" rx="2" fill="#022a25" opacity="0.7" />
      <rect x="50" y="122" width="90" height="8" rx="2" fill="#01231e" />

      <g style={{ transformOrigin: '140px 145px' }}>
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          values="0 -90; 0 0; 0 -4; 0 0"
          keyTimes="0; 0.55; 0.78; 1"
          dur="2.6s"
          repeatCount="indefinite"
        />
        <circle cx="140" cy="145" r="22" fill="url(#lc-badge)" />
        <path
          d="M128 145 l8 9 l16 -18"
          stroke="#01231e"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </>
  );
}

function Clock24() {
  return (
    <>
      <defs>
        <FaceGradient id="ck-face" />
        <ShadowGradient id="ck-shadow" />
      </defs>
      <g transform="translate(4, 6)">
        <circle cx="100" cy="100" r="70" fill="url(#ck-shadow)" opacity="0.55" />
      </g>
      <circle
        cx="100"
        cy="100"
        r="70"
        fill="url(#ck-face)"
        stroke={TEAL_DARK}
        strokeWidth="1.5"
      />
      <circle cx="100" cy="100" r="58" fill="#01231e" />
      {/* tick marks */}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * Math.PI) / 6 - Math.PI / 2;
        const x1 = 100 + Math.cos(a) * 52;
        const y1 = 100 + Math.sin(a) * 52;
        const x2 = 100 + Math.cos(a) * 46;
        const y2 = 100 + Math.sin(a) * 46;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={TEAL_LIGHT}
            strokeWidth={i % 3 === 0 ? 3 : 1.5}
            strokeLinecap="round"
          />
        );
      })}
      {/* hour hand */}
      <g>
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 100 100"
          to="360 100 100"
          dur="14s"
          repeatCount="indefinite"
        />
        <line
          x1="100"
          y1="100"
          x2="100"
          y2="65"
          stroke={TEAL}
          strokeWidth="6"
          strokeLinecap="round"
        />
      </g>
      {/* minute hand */}
      <g>
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from="0 100 100"
          to="360 100 100"
          dur="3s"
          repeatCount="indefinite"
        />
        <line
          x1="100"
          y1="100"
          x2="100"
          y2="50"
          stroke={TEAL_LIGHTER}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </g>
      <circle cx="100" cy="100" r="6" fill={TEAL_LIGHTER} />
    </>
  );
}

function Calendar() {
  return (
    <>
      <defs>
        <FaceGradient id="cal-face" />
        <ShadowGradient id="cal-shadow" />
      </defs>
      <g transform="translate(4, 6)">
        <rect x="30" y="40" width="140" height="135" rx="8" fill="url(#cal-shadow)" opacity="0.55" />
      </g>
      <rect
        x="30"
        y="40"
        width="140"
        height="135"
        rx="8"
        fill="url(#cal-face)"
        stroke={TEAL_DARK}
        strokeWidth="1"
      />
      <rect x="30" y="40" width="140" height="34" rx="8" fill={TEAL_DARK} />
      <rect x="55" y="28" width="8" height="22" rx="2" fill={TEAL_LIGHTER} />
      <rect x="137" y="28" width="8" height="22" rx="2" fill={TEAL_LIGHTER} />
      {/* date grid */}
      {Array.from({ length: 4 }).map((_, row) =>
        Array.from({ length: 5 }).map((_, col) => (
          <rect
            key={`${row}-${col}`}
            x={45 + col * 23}
            y={88 + row * 20}
            width="14"
            height="14"
            rx="2"
            fill="#01231e"
            opacity="0.85"
          />
        )),
      )}
      {/* highlighted cell pulse */}
      <rect x="91" y="108" width="14" height="14" rx="2" fill={TEAL_LIGHTER}>
        <animate
          attributeName="fill"
          values={`${TEAL_LIGHTER};${TEAL};${TEAL_LIGHTER}`}
          dur="1.8s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.6;1;0.6"
          dur="1.8s"
          repeatCount="indefinite"
        />
      </rect>
    </>
  );
}

function Knowledge() {
  return (
    <>
      <defs>
        <FaceGradient id="kn-face" />
        <ShadowGradient id="kn-shadow" />
        <linearGradient id="kn-spine" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor={TEAL_DARK} />
          <stop offset="100%" stopColor={TEAL} />
        </linearGradient>
      </defs>
      <g transform="translate(4, 6)">
        <rect x="40" y="125" width="120" height="38" rx="3" fill="url(#kn-shadow)" opacity="0.55" />
      </g>
      {/* bottom book */}
      <rect
        x="40"
        y="125"
        width="120"
        height="38"
        rx="3"
        fill="url(#kn-face)"
        stroke={TEAL_DARK}
        strokeWidth="1"
      />
      <rect x="40" y="125" width="10" height="38" fill="url(#kn-spine)" />
      <line x1="55" y1="135" x2="150" y2="135" stroke="#01231e" strokeWidth="1.5" opacity="0.6" />
      <line x1="55" y1="143" x2="140" y2="143" stroke="#01231e" strokeWidth="1.5" opacity="0.6" />
      <line x1="55" y1="151" x2="145" y2="151" stroke="#01231e" strokeWidth="1.5" opacity="0.6" />

      {/* middle book — floats */}
      <g>
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          values="0 0; 0 -3; 0 0"
          dur="3.2s"
          repeatCount="indefinite"
        />
        <g transform="translate(4, 6)">
          <rect x="35" y="78" width="130" height="38" rx="3" fill="url(#kn-shadow)" opacity="0.55" />
        </g>
        <rect
          x="35"
          y="78"
          width="130"
          height="38"
          rx="3"
          fill="url(#kn-face)"
          stroke={TEAL_DARK}
          strokeWidth="1"
        />
        <rect x="155" y="78" width="10" height="38" fill="url(#kn-spine)" />
        <line x1="50" y1="88" x2="145" y2="88" stroke="#01231e" strokeWidth="1.5" opacity="0.6" />
        <line x1="50" y1="96" x2="135" y2="96" stroke="#01231e" strokeWidth="1.5" opacity="0.6" />
        <line x1="50" y1="104" x2="140" y2="104" stroke="#01231e" strokeWidth="1.5" opacity="0.6" />
      </g>

      {/* top book — floats opposite */}
      <g>
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          values="0 0; 0 -5; 0 0"
          dur="2.6s"
          repeatCount="indefinite"
        />
        <g transform="translate(4, 6)">
          <rect x="48" y="32" width="104" height="38" rx="3" fill="url(#kn-shadow)" opacity="0.55" />
        </g>
        <rect
          x="48"
          y="32"
          width="104"
          height="38"
          rx="3"
          fill="url(#kn-face)"
          stroke={TEAL_DARK}
          strokeWidth="1"
        />
        <rect x="48" y="32" width="10" height="38" fill="url(#kn-spine)" />
        <line x1="63" y1="42" x2="140" y2="42" stroke="#01231e" strokeWidth="1.5" opacity="0.6" />
        <line x1="63" y1="50" x2="130" y2="50" stroke="#01231e" strokeWidth="1.5" opacity="0.6" />
        <line x1="63" y1="58" x2="135" y2="58" stroke="#01231e" strokeWidth="1.5" opacity="0.6" />
      </g>
    </>
  );
}

function Notification() {
  return (
    <>
      <defs>
        <FaceGradient id="nt-face" />
        <ShadowGradient id="nt-shadow" />
      </defs>
      <g transform="translate(4, 6)">
        <path
          d="M100 30 C75 30 60 50 60 80 L60 115 L48 130 L152 130 L140 115 L140 80 C140 50 125 30 100 30 Z"
          fill="url(#nt-shadow)"
          opacity="0.55"
        />
      </g>
      <path
        d="M100 30 C75 30 60 50 60 80 L60 115 L48 130 L152 130 L140 115 L140 80 C140 50 125 30 100 30 Z"
        fill="url(#nt-face)"
        stroke={TEAL_DARK}
        strokeWidth="1"
      />
      {/* clapper */}
      <path
        d="M88 135 Q88 150 100 150 Q112 150 112 135 Z"
        fill="url(#nt-face)"
        stroke={TEAL_DARK}
        strokeWidth="1"
      />
      {/* notification dot pulse */}
      <circle cx="140" cy="50" r="14" fill="#ff3b3b">
        <animate
          attributeName="r"
          values="14;17;14"
          dur="1.2s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="1;0.6;1"
          dur="1.2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="140" cy="50" r="22" fill="none" stroke="#ff3b3b" strokeWidth="2">
        <animate
          attributeName="r"
          values="14;30;14"
          dur="1.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.7;0;0.7"
          dur="1.6s"
          repeatCount="indefinite"
        />
      </circle>
    </>
  );
}

function ShoppingCart() {
  return (
    <>
      <defs>
        <FaceGradient id="sc-face" />
        <ShadowGradient id="sc-shadow" />
      </defs>
      {/* handle */}
      <path
        d="M25 45 L55 45 L75 130 L160 130"
        stroke={TEAL_DARK}
        strokeWidth="6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* basket */}
      <g transform="translate(4, 6)">
        <path
          d="M60 65 L170 65 L155 125 L75 125 Z"
          fill="url(#sc-shadow)"
          opacity="0.55"
        />
      </g>
      <path
        d="M60 65 L170 65 L155 125 L75 125 Z"
        fill="url(#sc-face)"
        stroke={TEAL_DARK}
        strokeWidth="1.5"
      />
      {/* items appearing */}
      <g>
        <rect x="78" y="78" width="18" height="22" rx="2" fill="#01231e">
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            keyTimes="0; 0.2; 0.85; 1"
            dur="3.2s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="105" y="75" width="22" height="28" rx="2" fill="#01231e">
          <animate
            attributeName="opacity"
            values="0;0;1;1;0"
            keyTimes="0; 0.25; 0.45; 0.85; 1"
            dur="3.2s"
            repeatCount="indefinite"
          />
        </rect>
        <rect x="136" y="80" width="16" height="20" rx="2" fill="#01231e">
          <animate
            attributeName="opacity"
            values="0;0;0;1;1;0"
            keyTimes="0; 0.4; 0.5; 0.7; 0.85; 1"
            dur="3.2s"
            repeatCount="indefinite"
          />
        </rect>
      </g>
      {/* wheels */}
      <circle cx="90" cy="155" r="11" fill="url(#sc-face)" stroke={TEAL_DARK} strokeWidth="1.5" />
      <circle cx="90" cy="155" r="4" fill="#01231e" />
      <circle cx="148" cy="155" r="11" fill="url(#sc-face)" stroke={TEAL_DARK} strokeWidth="1.5" />
      <circle cx="148" cy="155" r="4" fill="#01231e" />
    </>
  );
}

function Magnifier() {
  return (
    <>
      <defs>
        <FaceGradient id="mg-face" />
        <ShadowGradient id="mg-shadow" />
        <radialGradient id="mg-glass" cx="0.35" cy="0.35" r="0.7">
          <stop offset="0%" stopColor="rgba(189,246,236,0.5)" />
          <stop offset="60%" stopColor="rgba(7,228,198,0.2)" />
          <stop offset="100%" stopColor="rgba(4,105,90,0.4)" />
        </radialGradient>
      </defs>
      <g>
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          values="-12 100 100; 12 100 100; -12 100 100"
          dur="3.4s"
          repeatCount="indefinite"
        />
        {/* handle shadow */}
        <g transform="translate(4, 6)">
          <rect
            x="120"
            y="118"
            width="58"
            height="18"
            rx="9"
            transform="rotate(45 149 127)"
            fill="url(#mg-shadow)"
            opacity="0.55"
          />
        </g>
        {/* handle */}
        <rect
          x="120"
          y="118"
          width="58"
          height="18"
          rx="9"
          transform="rotate(45 149 127)"
          fill="url(#mg-face)"
          stroke={TEAL_DARK}
          strokeWidth="1.5"
        />
        {/* lens shadow */}
        <g transform="translate(4, 6)">
          <circle cx="85" cy="85" r="50" fill="url(#mg-shadow)" opacity="0.55" />
        </g>
        {/* lens ring */}
        <circle
          cx="85"
          cy="85"
          r="50"
          fill="url(#mg-face)"
          stroke={TEAL_DARK}
          strokeWidth="1.5"
        />
        <circle cx="85" cy="85" r="38" fill="url(#mg-glass)" stroke="#01231e" strokeWidth="2" />
        {/* glass highlight */}
        <path
          d="M62 70 Q70 58 88 58"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      </g>
    </>
  );
}

function PackageBox() {
  return (
    <>
      <defs>
        <FaceGradient id="pk-face" />
        <ShadowGradient id="pk-shadow" />
        <linearGradient id="pk-top" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={TEAL_LIGHTER} />
          <stop offset="100%" stopColor={TEAL} />
        </linearGradient>
        <radialGradient id="pk-stamp" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor={TEAL_LIGHTER} />
          <stop offset="100%" stopColor={TEAL_DARK} />
        </radialGradient>
      </defs>
      <g transform="translate(4, 8)">
        <path d="M40 75 L100 50 L160 75 L160 150 L100 175 L40 150 Z" fill="url(#pk-shadow)" opacity="0.55" />
      </g>
      {/* main body */}
      <path
        d="M40 75 L100 50 L160 75 L160 150 L100 175 L40 150 Z"
        fill="url(#pk-face)"
        stroke={TEAL_DARK}
        strokeWidth="1.5"
      />
      {/* left face shading */}
      <path d="M40 75 L100 100 L100 175 L40 150 Z" fill="#01231e" opacity="0.35" />
      {/* top */}
      <path d="M40 75 L100 50 L160 75 L100 100 Z" fill="url(#pk-top)" stroke={TEAL_DARK} strokeWidth="1.5" />
      {/* tape lines */}
      <line x1="100" y1="50" x2="100" y2="100" stroke={TEAL_DARK} strokeWidth="2" opacity="0.6" />
      <line x1="100" y1="100" x2="100" y2="175" stroke={TEAL_DARK} strokeWidth="2" opacity="0.6" />

      {/* checkmark stamp */}
      <g style={{ transformOrigin: '120px 125px' }}>
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="scale"
          values="0;1.3;1;1;1;1.3;1"
          keyTimes="0; 0.15; 0.3; 0.5; 0.85; 0.95; 1"
          dur="3s"
          repeatCount="indefinite"
          additive="sum"
        />
        <circle cx="130" cy="135" r="20" fill="url(#pk-stamp)" stroke="#01231e" strokeWidth="2" />
        <path
          d="M118 135 l8 9 l16 -18"
          stroke="#01231e"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </>
  );
}

function Shield() {
  return (
    <>
      <defs>
        <FaceGradient id="sh-face" />
        <ShadowGradient id="sh-shadow" />
      </defs>
      <g transform="translate(4, 6)">
        <path
          d="M100 25 L155 45 L155 100 Q155 145 100 175 Q45 145 45 100 L45 45 Z"
          fill="url(#sh-shadow)"
          opacity="0.55"
        />
      </g>
      <path
        d="M100 25 L155 45 L155 100 Q155 145 100 175 Q45 145 45 100 L45 45 Z"
        fill="url(#sh-face)"
        stroke={TEAL_DARK}
        strokeWidth="1.5"
      />
      {/* top highlight */}
      <path
        d="M100 25 L155 45 Q120 50 100 50 Q80 50 45 45 Z"
        fill="rgba(255,255,255,0.18)"
      />
      {/* checkmark drawing in */}
      <path
        d="M70 100 l20 22 l40 -44"
        stroke="#01231e"
        strokeWidth="10"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        pathLength="100"
      >
        <animate
          attributeName="stroke-dasharray"
          values="0 100; 100 100; 100 100"
          keyTimes="0; 0.5; 1"
          dur="2.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-dashoffset"
          values="0; 0; -100"
          keyTimes="0; 0.85; 1"
          dur="2.6s"
          repeatCount="indefinite"
        />
      </path>
    </>
  );
}

function Lightbulb() {
  return (
    <>
      <defs>
        <FaceGradient id="lb-face" />
        <ShadowGradient id="lb-shadow" />
        <radialGradient id="lb-glow" cx="0.5" cy="0.45" r="0.6">
          <stop offset="0%" stopColor={TEAL_LIGHTER} />
          <stop offset="60%" stopColor={TEAL} />
          <stop offset="100%" stopColor={TEAL_DARK} />
        </radialGradient>
      </defs>
      {/* outer glow */}
      <circle cx="100" cy="85" r="70" fill={TEAL} opacity="0.15">
        <animate
          attributeName="r"
          values="60;80;60"
          dur="2.4s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.05;0.25;0.05"
          dur="2.4s"
          repeatCount="indefinite"
        />
      </circle>
      <g transform="translate(4, 6)">
        <path
          d="M100 30 C70 30 50 52 50 80 C50 100 62 115 72 125 L72 145 L128 145 L128 125 C138 115 150 100 150 80 C150 52 130 30 100 30 Z"
          fill="url(#lb-shadow)"
          opacity="0.55"
        />
      </g>
      {/* bulb */}
      <path
        d="M100 30 C70 30 50 52 50 80 C50 100 62 115 72 125 L72 145 L128 145 L128 125 C138 115 150 100 150 80 C150 52 130 30 100 30 Z"
        fill="url(#lb-glow)"
        stroke={TEAL_DARK}
        strokeWidth="1.5"
      >
        <animate
          attributeName="opacity"
          values="0.85;1;0.85"
          dur="2.4s"
          repeatCount="indefinite"
        />
      </path>
      {/* filament */}
      <path
        d="M85 75 Q100 95 100 110 Q100 95 115 75"
        stroke="#01231e"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      />
      {/* base */}
      <rect x="72" y="148" width="56" height="10" fill={TEAL_DARK} stroke="#01231e" strokeWidth="1" />
      <rect x="76" y="160" width="48" height="8" fill={TEAL_DARK} stroke="#01231e" strokeWidth="1" />
      <rect x="82" y="170" width="36" height="6" rx="3" fill="#01231e" />
    </>
  );
}

function Briefcase() {
  return (
    <>
      <defs>
        <FaceGradient id="bc-face" />
        <ShadowGradient id="bc-shadow" />
      </defs>
      {/* handle */}
      <rect
        x="78"
        y="40"
        width="44"
        height="22"
        rx="6"
        fill="none"
        stroke={TEAL_DARK}
        strokeWidth="6"
      />
      <g transform="translate(4, 6)">
        <rect x="30" y="60" width="140" height="105" rx="8" fill="url(#bc-shadow)" opacity="0.55" />
      </g>
      <rect
        x="30"
        y="60"
        width="140"
        height="105"
        rx="8"
        fill="url(#bc-face)"
        stroke={TEAL_DARK}
        strokeWidth="1.5"
      />
      {/* center latch group — top opens slightly */}
      <g style={{ transformOrigin: '100px 112px' }}>
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="translate"
          values="0 0; 0 -4; 0 0"
          dur="3.4s"
          repeatCount="indefinite"
        />
        <rect x="88" y="105" width="24" height="16" rx="2" fill="#01231e" />
        <rect x="94" y="111" width="12" height="4" rx="1" fill={TEAL_LIGHTER} />
      </g>
      {/* seam */}
      <line x1="30" y1="112" x2="170" y2="112" stroke="#01231e" strokeWidth="1.5" opacity="0.5" />
    </>
  );
}

const VARIANT_MAP: Record<IconVariant, () => ReactNode> = {
  chatBubble: ChatBubble,
  leadCapture: LeadCapture,
  clock24: Clock24,
  calendar: Calendar,
  knowledge: Knowledge,
  notification: Notification,
  shoppingCart: ShoppingCart,
  magnifier: Magnifier,
  package: PackageBox,
  shield: Shield,
  lightbulb: Lightbulb,
  briefcase: Briefcase,
};

const DEFAULT_LABELS: Record<IconVariant, string> = {
  chatBubble: 'Chat bubble with pulsing dots',
  leadCapture: 'Form with a checkmark dropping in',
  clock24: '24-hour clock with rotating hands',
  calendar: 'Calendar with a highlighted date',
  knowledge: 'Stack of books floating gently',
  notification: 'Bell with a pulsing notification dot',
  shoppingCart: 'Shopping cart filling with items',
  magnifier: 'Magnifying glass sweeping back and forth',
  package: 'Shipping box with a checkmark stamp',
  shield: 'Shield with a checkmark drawing in',
  lightbulb: 'Lightbulb with a soft glow pulse',
  briefcase: 'Briefcase opening and closing slightly',
};

export default function ChatSystemIcon({ variant, size = 200, ariaLabel }: Props) {
  const Render = VARIANT_MAP[variant];
  const label = ariaLabel ?? DEFAULT_LABELS[variant];
  return (
    <Svg ariaLabel={label} size={size}>
      <Render />
    </Svg>
  );
}
