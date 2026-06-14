import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import SiteNav from '../../components/SiteNav';
import AnimatedNodesBackground from '../../components/AnimatedNodesBackground';
import SiteFooter from '../../components/SiteFooter';
import StickyBookButton from '../../components/StickyBookButton';

export const metadata: Metadata = {
  title: 'Standard Intelligent Website Chat System',
  description:
    'A professionally built AI-powered website chat system that answers questions, captures leads, and runs 24/7. Fully done for you.',
};

type FeatureRow = {
  bulletsHeading: string;
  bullets: string[];
  valueHeading: string;
  valueParagraph: string;
};

const FEATURES: FeatureRow[] = [
  {
    bulletsHeading: 'Always Available',
    bullets: [
      'Operates 24 hours a day, 7 days a week',
      'No staff required to run or monitor',
      'Answers questions during and outside business hours',
      'Real-time uptime monitoring with immediate error alerting',
      'Your business serves customer inquiries around the clock',
    ],
    valueHeading: 'Your most curious customers show up at 11pm.',
    valueParagraph:
      'Most businesses lose potential customers the moment the office closes. A visitor who cannot get an answer leaves and finds a competitor who can. The Standard Intelligent Website Chat System keeps your business accessible and responsive at every hour, capturing interest and guiding visitors toward action whether your team is there or not.',
  },
  {
    bulletsHeading: 'Relevant Answers That Customers Want',
    bullets: [
      'Custom trained on your approved business content',
      'Handles services, pricing, FAQs, hours, and policies',
      "Multilingual, automatically responds in the customer's own language",
      'Guardrails programming prevents off-topic or irrelevant responses',
    ],
    valueHeading: 'Accurate answers build trust before the first conversation.',
    valueParagraph:
      'The system is built on your actual business content, not a generic template. Every response reflects your services, your pricing approach, your policies, and your tone. It never guesses, invents, or goes off topic. When it does not know the answer, it says so clearly and routes the visitor to the right next step.',
  },
  {
    bulletsHeading: 'Leads and Next Steps',
    bullets: [
      'Captures and stores customer name, email, and phone number',
      'Notifies your team when a lead is captured',
      'Branded experience matching your colours and tone',
      'Lightweight website embedding, no website rebuild required',
      'Fully managed, tested and updated monthly',
    ],
    valueHeading: 'Every interested visitor deserves a clear next step.',
    valueParagraph:
      'Most website visitors leave without taking any action. The system changes that by engaging visitors at the moment of interest, collecting their details during the natural flow of the conversation, and pointing them toward the right next step for your business. Every lead captured is an opportunity that would otherwise have left the page.',
  },
];

const INCLUDES = [
  'Discovery call and website content scrape',
  'Knowledge base built from your content',
  'Tone and brand alignment',
  'Guardrail configuration',
  'Customer information capture setup',
  'Testing, revisions, and launch support',
  'Website embed assistance',
  'Conversation log review and summary (monthly)',
  'Knowledge base updates (monthly)',
  'API and security updates (monthly)',
  'Uptime monitoring and error handling',
  'Monthly performance report',
];

export default function StandardPage() {
  return (
    <>
      <AnimatedNodesBackground />
      <SiteNav active="/intelligent-chat-systems/standard" />

      <div className="os-hero">
        <div className="os-hero-tag">Standard Intelligent Website Chat System</div>
        <h1>
          Your website,
          <br />
          <em>always answering.</em>
        </h1>
        <p className="os-hero-intro">
          The Standard Intelligent Website Chat System is a professionally built,
          AI-powered system embedded directly on your website. It answers your
          customers' questions, delivers accurate business information, captures
          lead details, and guides every visitor toward a clear next step. It runs
          24 hours a day without any staff involvement, and everything is done for
          you from setup through to ongoing monthly management.
        </p>
        <div className="os-dfy-badge">
          <span>100% Done For You — Design, Setup, and Monthly Management Included</span>
        </div>
      </div>

      <div className="os-rule" />

      <div className="os-features">
        <p className="os-section-label">What's Included</p>
        {FEATURES.map((f) => (
          <div className="os-feature-row" key={f.bulletsHeading}>
            <div className="os-feature-bullets">
              <h3>{f.bulletsHeading}</h3>
              <ul className="os-bullet-list">
                {f.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>
            <div className="os-feature-value">
              <h3>{f.valueHeading}</h3>
              <p>{f.valueParagraph}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="os-rule" />

      <div className="os-pricing">
        <div className="os-pricing-inner">
          <div className="os-pricing-left">
            <h2>
              Professional.
              <br />
              <em>Managed.</em>
              <br />
              Done for you.
            </h2>
            <p>
              The Standard Intelligent Website Chat System is not a DIY
              subscription you configure yourself. We build it around your
              business, test it, launch it, and manage it every month so it stays
              accurate and performing as your business evolves.
            </p>
            <p>
              Building a system is one thing. Maintaining it so it continues to
              work as your business changes is another. We do both.
            </p>
            <p className="os-pricing-note">
              Pricing may vary based on content volume and complexity. All details
              confirmed during the discovery call.
            </p>
          </div>
          <div className="os-pricing-card">
            <div className="os-price-label">Standard Intelligent Website Chat System</div>
            <div className="os-price-main">
              <sup>$</sup>2,399{' '}
              <span style={{ fontSize: '22px', fontWeight: 500, letterSpacing: 0 }}>
                USD
              </span>
            </div>
            <div className="os-price-sub-label">One Time Setup Fee</div>
            <div className="os-price-monthly">
              <sup style={{ fontSize: '24px', verticalAlign: 'super' }}>$</sup>499{' '}
              <span style={{ fontSize: '18px', fontWeight: 500 }}>USD</span>
            </div>
            <div className="os-price-monthly-label">Monthly System Management</div>
            <div className="os-price-divider" />
            <div className="os-price-includes">Every System Includes</div>
            <ul className="os-price-feature-list">
              {INCLUDES.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <Link href="/contact" className="os-cta-btn">
              Book a Free Discovery Call
            </Link>
          </div>
        </div>
      </div>

      <div className="os-bottom-cta">
        <h2>Ready to enhance your customers' website experience?</h2>
        <p>
          Book a free discovery call. We can set up a demo for you, customized to
          your business so you will know exactly what your new system would look
          like.
        </p>
      </div>

      <SiteFooter />
      <StickyBookButton />
      <Script src="/embed.js" strategy="afterInteractive" />
    </>
  );
}
