/**
 * Three interlocking teal gears that rotate continuously, rendered with a 3D
 * look: gradient-shaded faces, a darker offset shadow gear underneath each
 * one to suggest thickness, a bright highlight along the top edge, and an
 * inset hub with bevel. Pure SVG with native <animateTransform> — no JS, no
 * Client Component.
 */

const TEAL = '#07e4c6';

interface GearProps {
  cx: number;
  cy: number;
  outerR: number;
  innerR: number;
  teeth: number;
  hubR: number;
  durationSec: number;
  direction: 'cw' | 'ccw';
  idPrefix: string;
}

/** Build a gear-shaped path with flat tops/valleys (4 vertices per tooth). */
function gearPath(
  cx: number,
  cy: number,
  outerR: number,
  innerR: number,
  teeth: number,
): string {
  const stepsPerTooth = 4;
  const totalSteps = teeth * stepsPerTooth;
  const angleStep = (Math.PI * 2) / totalSteps;
  const parts: string[] = [];
  for (let i = 0; i < totalSteps; i++) {
    const r = i % 4 < 2 ? outerR : innerR;
    const a = i * angleStep - Math.PI / 2;
    const x = cx + r * Math.cos(a);
    const y = cy + r * Math.sin(a);
    parts.push(`${i === 0 ? 'M' : 'L'} ${x.toFixed(2)} ${y.toFixed(2)}`);
  }
  parts.push('Z');
  return parts.join(' ');
}

function Gear({
  cx,
  cy,
  outerR,
  innerR,
  teeth,
  hubR,
  durationSec,
  direction,
  idPrefix,
}: GearProps) {
  const from = direction === 'cw' ? `0 ${cx} ${cy}` : `360 ${cx} ${cy}`;
  const to = direction === 'cw' ? `360 ${cx} ${cy}` : `0 ${cx} ${cy}`;
  const path = gearPath(cx, cy, outerR, innerR, teeth);
  const faceGrad = `${idPrefix}-face`;
  const hubGrad = `${idPrefix}-hub`;
  const rimGrad = `${idPrefix}-rim`;

  return (
    <>
      <defs>
        {/* Diagonal gradient on the gear face: light teal top-left → deep
            teal bottom-right gives a glossy 3D shading. */}
        <linearGradient id={faceGrad} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#bdf6ec" />
          <stop offset="35%" stopColor="#5beed5" />
          <stop offset="70%" stopColor="#07e4c6" />
          <stop offset="100%" stopColor="#04695a" />
        </linearGradient>
        {/* Hub recess: dark center, lighter rim — looks pressed inward. */}
        <radialGradient id={hubGrad} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0%" stopColor="#011d18" />
          <stop offset="70%" stopColor="#022a25" />
          <stop offset="100%" stopColor="#055e51" />
        </radialGradient>
        {/* Edge highlight on top of the gear face. */}
        <linearGradient id={rimGrad} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(255,255,255,0.6)" />
          <stop offset="45%" stopColor="rgba(255,255,255,0.05)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </linearGradient>
      </defs>

      <g>
        <animateTransform
          attributeName="transform"
          attributeType="XML"
          type="rotate"
          from={from}
          to={to}
          dur={`${durationSec}s`}
          repeatCount="indefinite"
        />

        {/* Shadow gear sitting slightly down-right — gives the illusion of
            depth/thickness behind the lit face. */}
        <g transform={`translate(2.5, 3.5)`}>
          <path d={path} fill="#022a25" opacity="0.55" />
        </g>

        {/* Main lit face. */}
        <path d={path} fill={`url(#${faceGrad})`} />

        {/* Glossy top-edge sweep. */}
        <path d={path} fill={`url(#${rimGrad})`} opacity="0.85" />

        {/* Inner rim ring for added depth. */}
        <circle
          cx={cx}
          cy={cy}
          r={hubR + 6}
          fill="none"
          stroke="rgba(0,0,0,0.35)"
          strokeWidth="1.2"
        />
        <circle
          cx={cx}
          cy={cy}
          r={hubR + 6}
          fill="none"
          stroke="rgba(255,255,255,0.35)"
          strokeWidth="0.8"
          strokeDasharray="0"
          transform={`translate(0, -0.8)`}
        />

        {/* Recessed hub. */}
        <circle cx={cx} cy={cy} r={hubR} fill={`url(#${hubGrad})`} />
        <circle
          cx={cx}
          cy={cy}
          r={hubR}
          fill="none"
          stroke="rgba(255,255,255,0.18)"
          strokeWidth="0.8"
        />
      </g>
    </>
  );
}

export default function SpinningGears({
  className = '',
  ariaLabel = 'Three 3D gears rotating continuously',
}: {
  className?: string;
  ariaLabel?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      role="img"
      aria-label={ariaLabel}
      className={className}
      style={{ width: '100%', height: '100%', display: 'block' }}
    >
      <Gear
        cx={100}
        cy={100}
        outerR={42}
        innerR={33}
        teeth={12}
        hubR={11}
        durationSec={12}
        direction="cw"
        idPrefix="g-main"
      />
      <Gear
        cx={150}
        cy={50}
        outerR={26}
        innerR={20}
        teeth={10}
        hubR={7}
        durationSec={8}
        direction="ccw"
        idPrefix="g-top"
      />
      <Gear
        cx={50}
        cy={152}
        outerR={28}
        innerR={22}
        teeth={11}
        hubR={8}
        durationSec={9.5}
        direction="ccw"
        idPrefix="g-bot"
      />
    </svg>
  );
}
