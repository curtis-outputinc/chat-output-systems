import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import SiteNav from '../../components/SiteNav';
import AnimatedNodesBackground from '../../components/AnimatedNodesBackground';
import SiteFooter from '../../components/SiteFooter';
import StickyBookButton from '../../components/StickyBookButton';

export const metadata: Metadata = {
  title: 'Customer Chat System for Service Businesses',
  description:
    'An AI-powered customer chat system that qualifies leads, books appointments, and alerts your team when a serious prospect arrives.',
};

type FeatureRow = {
  bulletsHeading: string;
  bullets: string[];
  valueHeading: string;
  valueParagraph: string;
};

const FEATURES: FeatureRow[] = [
  {
    bulletsHeading: 'Always Available — 24 Hours a Day',
    bullets: [
      'Operates 24 hours a day, 7 days a week with no staff needed',
      'Answers customer questions after hours, on weekends, and on holidays',
      'Captures inquiries at any time and notifies your team',
      'Real-time uptime monitoring with immediate error alerts',
      'Your business never misses an inquiry because the office was closed',
      'Knowledge base updated monthly so answers stay current',
    ],
    valueHeading: 'Your next customer may reach out tonight at 9pm.',
    valueParagraph:
      'Most service businesses only capture leads during business hours. If someone visits your website at night and cannot get an answer, they move on to the next option. This system stays open when you are not. It answers their questions, collects their information, and makes sure your team sees it first thing in the morning.',
  },
  {
    bulletsHeading: 'Answers Trained on Your Business',
    bullets: [
      'Custom trained on your services, pricing, policies, and FAQs',
      'Explains what you do in clear, simple language',
      'Walks customers through what to expect from your service step by step',
      'Communicates your credentials, experience, and reviews when relevant',
      'Handles objections and comparison questions using your approved content',
      "Automatically responds in the customer's own language",
      'Guardrails prevent off-topic, inaccurate, or harmful responses',
    ],
    valueHeading:
      'Your customers want to know if you are the right fit before they call.',
    valueParagraph:
      'Before a potential client books a call or sends an email, they want answers. What do you do, who do you help, how much does it cost, what happens next? This system gives them those answers clearly and accurately, using only your approved content. When a customer does reach your team, they already understand what you do and are more likely to move forward.',
  },
  {
    bulletsHeading: 'Lead Capture and Qualification',
    bullets: [
      'Collects customer name, email, and phone number automatically',
      'Asks qualifying questions based on your business rules',
      'Gathers location, service type, timeline, and situation before handoff',
      'Sends your team a full summary of the conversation',
      'Routes inquiries to the right team member based on service type',
      'Your team receives organized leads, not cold unqualified messages',
      'Notifies your team the moment a lead is captured',
    ],
    valueHeading:
      'Your team should spend time on real opportunities, not sorting through cold inquiries.',
    valueParagraph:
      'When a lead comes in through a contact form or email, your team has to ask a series of questions just to figure out if the person is a good fit. This system does that work before the handoff. It asks the right questions, collects the relevant details, and sends your team a clear summary.',
  },
  {
    bulletsHeading: 'Appointment Booking and Intake',
    bullets: [
      'Customers can request a call or consultation directly in the conversation',
      'Begins the client intake process before the first meeting',
      'Collects situation details, preferences, and relevant background upfront',
      'Sends preparation instructions to clients after booking',
      'Reduces back-and-forth before the first appointment',
      'Your team arrives at every first meeting with context already collected',
    ],
    valueHeading: 'The first meeting goes better when everyone is prepared.',
    valueParagraph:
      'Most first consultations start with the same questions: What brings you in? What have you tried? What is your situation? This system collects all of that before the meeting happens. Your team arrives prepared, the client feels heard, and the conversation can move straight to what matters.',
  },
  {
    bulletsHeading: 'Top Prospect Recognition and Urgency Detection',
    bullets: [
      'Identifies customers showing high intent or urgency in real time',
      'Flags those conversations and notifies your team immediately',
      'Sends a summary of the conversation with key details highlighted',
      'Detects time-sensitive situations and routes them to a human fast',
      'Ensures serious leads do not sit unanswered for hours',
      'Gives your team the edge to respond before a competitor does',
    ],
    valueHeading:
      'A serious customer who does not hear back within the hour often moves on.',
    valueParagraph:
      'Not every inquiry needs immediate attention, but some do. When a customer says they need help urgently, or when the conversation signals strong buying intent, your team needs to know right away. This system identifies those situations automatically, flags them, and sends your team a summary so they can act fast.',
  },
  {
    bulletsHeading: 'Analytics, Dashboard, and Monthly Management',
    bullets: [
      'Insights Dashboard shows leads, top questions, engagement times, and performance',
      'See which pages on your website generate the most customer questions',
      'Track which questions your system answers and which it cannot',
      'Conversation logs reviewed monthly',
      'Knowledge base updated monthly as your services, pricing, or policies change',
      'API, security, and privacy compliance updates applied every month',
      'Monthly performance report delivered every month',
      'Dedicated support for questions or changes at any time',
    ],
    valueHeading:
      'You can see exactly how the system is performing every single month.',
    valueParagraph:
      'The Insights Dashboard gives you a clear view of what your customers are asking, when they are asking it, and where on your website they are most engaged. Every month, we review the conversation logs, update the knowledge base, apply all security and compliance updates, and send you a performance report.',
  },
];

const INCLUDES = [
  'Full done-for-you design and build',
  'Custom knowledge base built from your content',
  'Lead capture and qualification setup',
  'Appointment booking and intake flows',
  'Top Prospect Recognition and urgency alerts',
  'Insights Dashboard',
  'Monthly conversation log review',
  'Monthly knowledge base updates',
  'API, security, and compliance updates',
  'Monthly performance report',
  'Dedicated client support',
];

export default function ServicePage() {
  return (
    <>
      <AnimatedNodesBackground />
      <SiteNav active="/intelligent-chat-systems/service" />

      <div className="os-hero">
        <div className="os-hero-tag">Customer Chat System — Service Business</div>
        <h1>
          Your customers get answers. Your team gets{' '}
          <em>qualified leads.</em>
        </h1>
        <p className="os-hero-intro">
          This system is built for businesses that sell a service, a skill, or an
          outcome. It answers your customers' questions, finds out what they need,
          books appointments, and alerts your team when a serious lead comes in.
          It does this 24 hours a day, 7 days a week. Everything is done for you
          from design through to monthly management.
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
              Built for your business.
              <br />
              <em>Managed every month.</em>
            </h2>
            <p>
              This is not a tool you set up and forget. We design it around your
              specific service business, build it, test it, launch it, and manage
              it every month so it keeps working as your business grows and
              changes.
            </p>
            <p>
              Pricing is based on the scope of your system, the number of features
              you need, and the integrations involved. We put a number together
              after the discovery call when we understand exactly what you need.
            </p>
            <p className="os-pricing-note">
              Book a free discovery call to get a custom quote for your business.
            </p>
          </div>
          <div className="os-pricing-card">
            <div className="os-price-label">Customer Chat System — Service Business</div>
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
