import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import SiteNav from '../../components/SiteNav';
import SiteFooter from '../../components/SiteFooter';
import StickyBookButton from '../../components/StickyBookButton';

export const metadata: Metadata = {
  title: 'Internal Chat System for Teams',
  description:
    'An AI-powered internal chat system that gives your team instant access to SOPs, policies, and company knowledge.',
};

type FeatureRow = {
  bulletsHeading: string;
  bullets: string[];
  valueHeading: string;
  valueParagraph: string;
};

const FEATURES: FeatureRow[] = [
  {
    bulletsHeading: 'Instant Access to Company Knowledge',
    bullets: [
      'Staff ask questions in plain language and get an immediate answer',
      'Pulls answers from your approved SOPs, manuals, policies, and documents',
      'Finds the right information from large document libraries in seconds',
      'Works the same whether your team is in the office or working remotely',
      'Every team member gets the same accurate answer every time',
      "Automatically responds in the team member's own language",
      'Knowledge base updated monthly so answers reflect current company information',
    ],
    valueHeading:
      'Your team should not spend 20 minutes searching for an answer that exists in a document somewhere.',
    valueParagraph:
      'Most companies have the information their team needs. The problem is that it is spread across folders, shared drives, email threads, and long documents that take time to find and read. This system puts all of that knowledge in one place and makes it instantly searchable in plain language.',
  },
  {
    bulletsHeading: 'SOPs, Policies, and Procedures',
    bullets: [
      'Staff can look up standard operating procedures by asking a simple question',
      'HR policies, operational guidelines, and compliance rules are all accessible instantly',
      'Refund procedures, return policies, and exception rules retrieved on demand',
      'Staff follow the right process every time without memorizing documents',
      'New procedures and policy updates are added to the system monthly',
      'Reduces the risk of staff following outdated processes',
    ],
    valueHeading:
      'When every team member follows the same process, the quality of your service goes up.',
    valueParagraph:
      'Inconsistent processes cost businesses money. A refund handled wrong, a procedure skipped, a policy misapplied. This system gives every team member instant access to the exact procedure for any situation, in the exact words your company uses. The right process, every time.',
  },
  {
    bulletsHeading: 'Onboarding and Training Support',
    bullets: [
      'New staff can ask questions during onboarding without needing a manager present',
      'Training materials and onboarding documents available on demand',
      'Common first-week questions answered instantly so new hires build confidence faster',
      'Reduces the time senior staff spend answering repetitive onboarding questions',
      'New team members follow the same processes from day one',
      'Training content updated monthly as processes and products change',
    ],
    valueHeading:
      'New staff get up to speed faster when they can find answers without interrupting someone.',
    valueParagraph:
      'Onboarding a new team member takes time from everyone. This system handles that. New hires type their questions, get accurate answers from approved company content, and learn faster without pulling everyone else away from their work. That shortens the onboarding period and reduces the cost of bringing new people on.',
  },
  {
    bulletsHeading: 'Role-Based Access and Security',
    bullets: [
      'Different team members see only the information relevant to their role',
      'Sensitive information is restricted to the people who need it',
      'Access controls configured during setup and reviewed monthly',
      'Secure access whether your team is in-office or working remotely',
      'Security updates applied every month as part of monthly management',
    ],
    valueHeading:
      'Not every team member needs access to every piece of company information.',
    valueParagraph:
      'A customer service rep needs different information than a manager. A warehouse team member needs different access than someone in finance. This system is configured with role-based access so each person sees exactly what they need and nothing more.',
  },
  {
    bulletsHeading: 'Analytics, Dashboard, and Monthly Management',
    bullets: [
      'Insights Dashboard shows what your team is asking most and where knowledge gaps exist',
      'Unanswered staff questions are logged and used to expand the knowledge base monthly',
      'Conversation logs reviewed monthly to ensure accuracy',
      'Knowledge base updated monthly as your business changes',
      'API, security, and privacy compliance updates applied every month',
      'Monthly performance report delivered every month',
      'Dedicated support for questions or changes at any time',
    ],
    valueHeading:
      'The questions your team asks most often tell you where your internal documentation needs work.',
    valueParagraph:
      'When the same question keeps coming up, it usually means there is a gap in your documentation or a process that is not clear enough. The Insights Dashboard shows you exactly what your team is asking most so you can identify and fix those gaps.',
  },
];

const INCLUDES = [
  'Full done-for-you design and build',
  'Custom knowledge base built from your documents',
  'Role-based access configuration',
  'Onboarding and training content setup',
  'Insights Dashboard',
  'Monthly conversation log review',
  'Monthly knowledge base updates',
  'API, security, and compliance updates',
  'Monthly performance report',
  'Dedicated client support',
];

export default function InternalPage() {
  return (
    <>
      <SiteNav active="/intelligent-chat-systems/internal" />

      <div className="os-hero">
        <div className="os-hero-tag">Internal Chat System</div>
        <h1>
          Your team gets the right answer{' '}
          <em>in seconds, not minutes.</em>
        </h1>
        <p className="os-hero-intro">
          This system is built for your staff, not your customers. It gives every
          member of your team instant access to company information through plain
          language questions. Instead of searching through folders, waiting on a
          manager, or digging through email threads, your team types a question
          and gets the right answer immediately. Everything is built from your
          own approved company content, and everything is done for you from
          design through to monthly management.
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
              Built for your team.
              <br />
              <em>Managed every month.</em>
            </h2>
            <p>
              This is not a search tool you set up and hand off to your team. We
              design it around your company's actual knowledge, build it using
              your approved documents, test it, launch it, and manage it every
              month so it stays accurate as your business evolves.
            </p>
            <p>
              Pricing is based on the size of your knowledge base, the number of
              team members, and any integrations involved. We put together a
              clear quote after the discovery call.
            </p>
            <p className="os-pricing-note">
              Book a free discovery call to get a custom quote for your business.
            </p>
          </div>
          <div className="os-pricing-card">
            <div className="os-price-label">Internal Chat System</div>
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
        <h2>Ready to give your team the information they need instantly?</h2>
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
