import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import SiteNav from '../../components/SiteNav';
import AnimatedNodesBackground from '../../components/AnimatedNodesBackground';
import SiteFooter from '../../components/SiteFooter';
import StickyBookButton from '../../components/StickyBookButton';

export const metadata: Metadata = {
  title: 'Customer Chat System for Retail and E-Commerce',
  description:
    'AI-powered customer chat for retail and e-commerce. Product discovery, cart recovery, return data, and 24/7 support.',
};

type FeatureRow = {
  bulletsHeading: string;
  bullets: string[];
  valueHeading: string;
  valueParagraph: string;
};

const FEATURES: FeatureRow[] = [
  {
    bulletsHeading: 'Product Help and Discovery',
    bullets: [
      'Customers describe what they are looking for and the system finds it',
      'Recommends the right product based on what the customer needs',
      'Answers detailed questions about product features, specs, and differences',
      'Checks stock availability and tells customers if a product is in their size or colour',
      'Lets customers know when an out-of-stock item is expected back',
      'Surfaces relevant promotions and seasonal offers mid-conversation',
      "Automatically responds in the customer's own language",
    ],
    valueHeading:
      'Customers who find the right product quickly are more likely to buy it.',
    valueParagraph:
      'When a customer cannot find what they are looking for, they leave. This system lets them describe what they need in plain language and helps them find it immediately. It answers product questions, checks availability, and surfaces relevant options so the customer gets to the right product faster.',
  },
  {
    bulletsHeading: 'Orders, Shipping, and Returns',
    bullets: [
      'Answers shipping cost, delivery timeline, and availability questions instantly',
      'Explains your return and exchange policy clearly and in full',
      'Guides customers through how to start a return step by step',
      'Answers order status and tracking questions without staff involvement',
      'Reduces the volume of where-is-my-order calls and emails your team receives',
      'Keeps answers current as shipping or return policies change',
    ],
    valueHeading:
      'Order and shipping questions are the most common customer support request for retail businesses.',
    valueParagraph:
      'A large portion of customer service time in retail goes to answering the same questions about shipping, returns, and order status. This system handles all of those questions automatically, any time of day, without your team having to get involved. Your team spends less time on repetitive questions and more time on situations that actually need a person.',
  },
  {
    bulletsHeading: 'Cart Abandonment and Checkout Support',
    bullets: [
      'Engages customers who appear to be hesitating before completing a purchase',
      'Answers last-minute questions about payment options and discount codes',
      'Clears up confusion about checkout steps that may be stopping a purchase',
      'Surfaces relevant promotions at the moment a customer is closest to buying',
      'Captures customer contact details for follow-up if they leave without buying',
      'Notifies your team when a high-value customer abandons their cart',
    ],
    valueHeading:
      'Most online shoppers who leave without buying had a question that went unanswered.',
    valueParagraph:
      'Cart abandonment is one of the most expensive problems in e-commerce. A customer adds items, reaches checkout, and stops. Usually it is because of a question they could not get answered fast enough. This system answers those questions in real time, removes the hesitation, and helps the customer complete their purchase.',
  },
  {
    bulletsHeading: 'Return Data and Customer Feedback',
    bullets: [
      'When a customer returns a product, the system asks why',
      "Collects return reasons in the customer's own words",
      'Logs and organizes that feedback for your review',
      'Identifies which products are returned most and why',
      'Collects general product feedback and satisfaction information',
      'Gives you the data to make smarter product and inventory decisions',
    ],
    valueHeading:
      'Knowing why customers return products is more valuable than knowing that they do.',
    valueParagraph:
      'Most businesses track how many products get returned. Very few know why in enough detail to act on it. This system asks customers directly, in the natural flow of the return conversation, and logs those reasons for your review. Over time that data tells you which products have recurring issues and where changes would reduce future returns.',
  },
  {
    bulletsHeading: 'After Hours Support and Peak Season Scaling',
    bullets: [
      'Fully operational 24 hours a day, 7 days a week, 365 days a year',
      'Handles high volumes during sales events, launches, and peak seasons automatically',
      'No performance drop during Black Friday, holidays, or promotional periods',
      'Pre-loaded with launch or promotion-specific content before events go live',
      'Captures every inquiry even when your team is offline',
    ],
    valueHeading:
      'Your busiest sales days should not also be your most chaotic customer service days.',
    valueParagraph:
      'During a sale or product launch, customer inquiries spike. This system handles that volume automatically with no slowdown and no drop in quality. It can be pre-loaded with promotion-specific information before a sale goes live so every customer gets accurate answers from the first minute.',
  },
  {
    bulletsHeading: 'Analytics, Dashboard, and Monthly Management',
    bullets: [
      'Insights Dashboard shows top questions, engagement times, and system performance',
      'See which products customers ask about most and which cause the most confusion',
      'Conversation logs reviewed monthly',
      'Knowledge base updated monthly as products, pricing, and promotions change',
      'API, security, and privacy compliance updates applied every month',
      'Monthly performance report delivered every month',
      'Dedicated support for questions or changes at any time',
    ],
    valueHeading:
      'The questions your customers ask tell you more about your business than most reports will.',
    valueParagraph:
      'What products are people most curious about? Where on your website are they getting confused? What questions are they asking that your product pages do not answer? The Insights Dashboard shows you all of that every month. We review the logs, update the knowledge base, apply all security updates, and send you a clear performance report.',
  },
];

const INCLUDES = [
  'Full done-for-you design and build',
  'Custom knowledge base built from your content',
  'Insights Dashboard',
  'Monthly conversation log review',
  'Monthly knowledge base updates',
  'API, security, and compliance updates',
  'Monthly performance report',
  'Dedicated client support',
];

export default function RetailPage() {
  return (
    <>
      <AnimatedNodesBackground />
      <SiteNav active="/intelligent-chat-systems/retail" />

      <div className="os-hero">
        <div className="os-hero-tag">Customer Chat System — Retail and E-Commerce</div>
        <h1>
          Help your customers find what they need and{' '}
          <em>complete their purchase.</em>
        </h1>
        <p className="os-hero-intro">
          This system is built for businesses that sell products, whether online,
          in a physical store, or both. It helps your customers find products,
          check availability, get shipping and return answers, and complete their
          purchase with confidence. It also tells you what your customers are
          asking, what they are returning, and where they get stuck on your
          website. Everything is done for you from design through to monthly
          management.
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
              Built for your store.
              <br />
              <em>Managed every month.</em>
            </h2>
            <p>
              This is not a plugin you install and configure yourself. We design
              it around your products, your policies, and your customers. We
              build it, test it, launch it, and manage it every month so it stays
              accurate as your inventory and promotions change.
            </p>
            <p>
              Pricing is based on the scope of your system, the number of features
              you need, and any integrations involved. We put together a clear
              quote after the discovery call.
            </p>
            <p className="os-pricing-note">
              Book a free discovery call to get a custom quote for your business.
            </p>
          </div>
          <div className="os-pricing-card">
            <div className="os-price-label">Customer Chat System — Retail and E-Commerce</div>
            <div className="os-price-contact">Custom Pricing</div>
            <div className="os-price-contact-sub">
              Pricing is based on the size and scope of your system. Book a free
              discovery call and we will put together a clear quote for your
              specific business.
            </div>
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
        <h2>Ready to give your customers a better experience?</h2>
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
