import Image from 'next/image';

/** Continuously scrolling row of integration logos. The track holds two copies
 *  of the logo list side-by-side so the animation can translate -50% and the
 *  loop is seamless. 30 logos (1.png – 30.png) live in /public/images/logos/. */
const LOGO_COUNT = 30;
const LOGOS = Array.from(
  { length: LOGO_COUNT },
  (_, i) => `/images/logos/${i + 1}.png`,
);

export default function IntegrationsMarquee() {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        // soft fade at the left/right edges so the loop reads as continuous
        // rather than as items popping in
        maskImage:
          'linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)',
        WebkitMaskImage:
          'linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)',
      }}
    >
      <style>{`
        @keyframes integrations-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .integrations-track {
          display: flex;
          align-items: center;
          gap: 56px;
          width: max-content;
          /* 80 seconds for a full loop. With 30 logos duplicated to 60 in the
             track and translating -50%, that means 30 logos pass through the
             viewport every 80s. Tuned to feel constantly-moving but readable. */
          animation: integrations-marquee 80s linear infinite;
        }
      `}</style>

      <div className="integrations-track">
        {[...LOGOS, ...LOGOS].map((src, i) => {
          const logoIndex = (i % LOGO_COUNT) + 1;
          return (
            <div
              key={`${src}-${i}`}
              style={{
                flexShrink: 0,
                width: '150px',
                height: '150px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              aria-hidden={i >= LOGO_COUNT ? 'true' : undefined}
            >
              <Image
                src={src}
                alt={`Integration logo ${logoIndex}`}
                width={150}
                height={150}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
