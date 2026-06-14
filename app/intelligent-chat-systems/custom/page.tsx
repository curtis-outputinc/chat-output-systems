import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import SiteNav from '../../components/SiteNav';
import AnimatedNodesBackground from '../../components/AnimatedNodesBackground';
import SiteFooter from '../../components/SiteFooter';
import StickyBookButton from '../../components/StickyBookButton';

export const metadata: Metadata = {
  title: 'Custom Chat System',
  description:
    'A fully custom AI chat system built from the ground up around your specific organization, industry, and requirements.',
};

type FeatureRow = {
  bulletsHeading: string;
  bullets: string[];
  valueHeading: string;
  valueParagraph: string;
};

const FEATURES: FeatureRow[] = [
  {
    bulletsHeading: 'Built From Scratch Around Your Business',
    bullets: [
      'No templates, no pre-built flows, no generic configurations',
      'Designed entirely around your specific customers, staff, and business goals',
      'Conversation flows written to match your exact service or product model',
      'Any combination of customer-facing and staff-facing capabilities',
      'Supports multiple departments, locations, or business units if needed',
      'Built to handle the specific complexity of your industry and operations',
      "Automatically responds in your customers' or staff members' own language",
    ],
    valueHeading:
      'Standard systems are built for the average business. Your business is not average.',
    valueParagraph:
      'Every standard system we offer is built for a specific type of business. But some organizations have requirements that go beyond those categories. A nonprofit that handles sensitive community referrals, a healthcare organization that needs careful guardrails, a hospitality business with complex booking needs. These organizations need a system designed specifically for them, not adjusted from a template.',
  },
  {
    bulletsHeading: 'Custom Integrations With Your Existing Tools',
    bullets: [
      'Connects to your existing software, CRM, booking tools, or databases',
      'Pulls and pushes data between the system and your other platforms',
      'Custom workflows triggered by specific conversation outcomes',
      'Integrates with internal systems your team already uses every day',
      'Supports multi-system deployment across your website and internal tools',
      'Custom data collection, routing, and reporting built to your specifications',
    ],
    valueHeading:
      'Your system should work with the tools you already have, not around them.',
    valueParagraph:
      'Most standard systems connect to common tools through standard integrations. Custom systems go further. If your business runs on specific software, uses a proprietary database, or needs the system to trigger actions in other platforms based on what customers say, we build those connections from the ground up.',
  },
  {
    bulletsHeading: 'Industry-Specific Guardrails and Compliance',
    bullets: [
      "Guardrails designed around your industry's specific rules and sensitivities",
      'Healthcare: careful limits on medical information and clear escalation to professionals',
      'Legal: no legal advice given, appropriate disclaimers, fast handoff to licensed staff',
      'Finance: no financial advice given, regulated content handled with care',
      'Government and nonprofit: sensitive community information handled responsibly',
      'Custom escalation rules for situations that require human judgment',
      'Privacy and compliance configuration reviewed and updated every month',
    ],
    valueHeading:
      'Some industries have specific rules about what a system can and cannot say. We build around those rules from the start.',
    valueParagraph:
      'A system deployed in a healthcare setting needs to handle patient questions very differently from a system on a retail website. A legal services organization needs strict limits on what the system can advise on. We design the guardrails for these situations specifically, not generically, so the system protects your organization while still being genuinely useful.',
  },
  {
    bulletsHeading: 'Who This System Is Built For',
    bullets: [
      'Nonprofit organizations that need sensitive community referral and support flows',
      'Healthcare providers that need careful patient communication guardrails',
      'Government-adjacent organizations with specific compliance and access requirements',
      'Hospitality businesses with complex booking and multi-location needs',
      'Real estate organizations with specific intake, qualification, and document flows',
      'Any business with requirements that fall outside a standard system configuration',
      'Organizations that need both customer-facing and internal systems working together',
    ],
    valueHeading:
      'If your business has a challenge that does not fit a standard package, that is exactly what this system is for.',
    valueParagraph:
      'The organizations that benefit most from a custom build are the ones where a standard system would require too many compromises. They need flows that do not exist in a template, integrations that are not on a standard list, guardrails that are specific to their industry, or a combination of capabilities that no single standard system provides.',
  },
  {
    bulletsHeading: 'Monthly Management Included',
    bullets: [
      'Conversation logs reviewed monthly to catch anything inaccurate or off-brand',
      'Knowledge base updated monthly as your organization changes',
      'API, security, and privacy compliance updates applied every month',
      'Unanswered questions tracked and used to expand the knowledge base',
      'Monthly performance report delivered to your team',
      'Dedicated support for questions, changes, and expansions at any time',
    ],
    valueHeading:
      'A custom system requires the same ongoing care as any other system we build.',
    valueParagraph:
      'Custom does not mean build once and leave. Your organization changes over time. New programs, new staff, new policies, new compliance requirements. Monthly management keeps your system aligned with those changes so it stays accurate, secure, and useful long after launch.',
  },
];

const INCLUDES = [
  'Full discovery and design process',
  'Built from scratch around your specific needs',
  'Custom knowledge base and conversation flows',
  'Custom integrations with your existing tools',
  'Industry-specific guardrails and compliance configuration',
  'Custom Insights Dashboard',
  'Full testing before launch',
  'Monthly conversation log review',
  'Monthly knowledge base updates',
  'API, security, and compliance updates',
  'Monthly performance report',
  'Dedicated client support',
];

export default function CustomPage() {
  return (
    <>
      <AnimatedNodesBackground />
      <SiteNav active="/intelligent-chat-systems/custom" />

      <div className="os-hero">
        <div className="os-hero-tag">Custom Chat System</div>
        <h1>
          Your business was custom built.{' '}
          <em>Your chat system should be too.</em>
        </h1>
        <p className="os-hero-intro">
          The Custom Chat System is for organizations that need something built
          specifically for them. If your requirements go beyond what a standard
          package covers, this is where we start. We design the entire system
          from the ground up around your specific customers, your staff, your
          workflows, and the outcomes your business needs to achieve. Everything
          is done for you from the first discovery call through to ongoing
          monthly management.
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
              Built specifically for you.
              <br />
              <em>Managed every month.</em>
            </h2>
            <p>
              Custom systems are scoped individually because no two organizations
              have the same requirements. The discovery process is where we learn
              what you need, what your customers or staff need, and what success
              looks like for your organization.
            </p>
            <p>
              There is no standard price for a custom build because there is no
              standard scope. Book a discovery call and we will walk through what
              your system would look like and what it would cost.
            </p>
            <p className="os-pricing-note">
              Book a free discovery call to start the conversation.
            </p>
          </div>
          <div className="os-pricing-card">
            <div className="os-price-label">Custom Chat System</div>
            <div className="os-price-contact">Custom Pricing</div>
            <div className="os-price-contact-sub">
              Every custom system is scoped individually. Book a discovery call
              and we will design the right system for your organization and give
              you a clear quote.
            </div>
            <div className="os-price-divider" />
            <div className="os-price-includes">Every Custom System Includes</div>
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
        <h2>Ready to build a system designed around your organization?</h2>
        <p>
          Book a free discovery call. We will learn about your organization, your
          customers, and your goals, and show you what a custom system would look
          like for you.
        </p>
      </div>

      <SiteFooter />
      <StickyBookButton />
      <Script src="/embed.js" strategy="afterInteractive" />
    </>
  );
}
