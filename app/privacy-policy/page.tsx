import type { Metadata } from 'next';
import Script from 'next/script';
import SiteNav from '../components/SiteNav';
import SiteFooter from '../components/SiteFooter';
import StickyBookButton from '../components/StickyBookButton';

const TEAL = '#07e4c6';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Output Systems Privacy Policy. How we collect, use, and protect your personal information. PIPEDA, GDPR, CCPA compliant.',
};

const h2Style: React.CSSProperties = {
  fontSize: '22px',
  fontWeight: 900,
  color: '#fff',
  marginBottom: '16px',
};

const pStyle: React.CSSProperties = {
  fontSize: '17px',
  color: 'rgba(255,255,255,0.75)',
  lineHeight: 1.85,
  marginBottom: '14px',
};

const pLastStyle: React.CSSProperties = {
  fontSize: '17px',
  color: 'rgba(255,255,255,0.75)',
  lineHeight: 1.85,
};

const blockStyle: React.CSSProperties = {
  marginBottom: '48px',
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <SiteNav active="/privacy-policy" />

      <div className="os-hero">
        <div className="os-hero-tag">Legal</div>
        <h1>
          Privacy <em>Policy</em>
        </h1>
        <p className="os-hero-intro">
          Effective Date: November 3, 2025 &nbsp;|&nbsp; Last Updated: April 1, 2026
        </p>
      </div>

      <div className="os-rule" />

      <section style={{ padding: '64px 60px 80px', background: '#000', maxWidth: '900px' }}>
        <div style={blockStyle}>
          <h2 style={h2Style}>1. Introduction</h2>
          <p style={pStyle}>
            Output (&quot;Output,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website located at output.systems and chat.output.systems (the &quot;Website&quot;) and provides business consulting and intelligent systems development services (the &quot;Services&quot;). Output is operated by 14305124 Canada Inc, a corporation organized under the laws of Canada with its principal place of business in Toronto, Ontario, Canada.
          </p>
          <p style={pStyle}>
            This Privacy Policy describes how Output collects, uses, discloses, retains, and protects personal information when you visit the Website, communicate with us, or engage our Services.
          </p>
          <p style={pLastStyle}>
            This Privacy Policy is intended to comply with: PIPEDA (Canada); Quebec Law 25; GDPR and UK GDPR; CCPA/CPRA (California); and other applicable data protection laws.
          </p>
        </div>

        <div style={blockStyle}>
          <h2 style={h2Style}>2. Data Controller and Contact Information</h2>
          <p style={pStyle}>
            For all privacy-related inquiries, requests, or complaints, please contact:
          </p>
          <div style={{ background: '#0d1f1a', border: '1px solid rgba(7,228,198,0.15)', borderLeft: `3px solid ${TEAL}`, padding: '24px 28px', maxWidth: '480px' }}>
            <div style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8 }}>
              <strong style={{ color: '#fff' }}>Privacy Officer:</strong> Curtis Grier-Coward<br />
              <strong style={{ color: '#fff' }}>Email:</strong>{' '}
              <a href="mailto:curtis@output.systems" style={{ color: TEAL }}>curtis@output.systems</a>
              <br />
              <strong style={{ color: '#fff' }}>Address:</strong> 375 University Ave Suite 3267, Toronto, Ontario, Canada M5G 2J5
            </div>
          </div>
          <p style={{ ...pLastStyle, marginTop: '16px' }}>
            We will respond to all inquiries within thirty (30) days, or such shorter period as required by applicable law.
          </p>
        </div>

        <div style={blockStyle}>
          <h2 style={h2Style}>3. Information We Collect</h2>
          <p style={pStyle}>
            <strong style={{ color: '#fff' }}>3.1 Information You Provide Directly</strong> — Full name, email address, telephone number, business name and role, industry and business size, information about your business operations relevant to the Services requested, communication preferences, and any other information you voluntarily provide.
          </p>
          <p style={pStyle}>
            <strong style={{ color: '#fff' }}>3.2 Information Collected Automatically</strong> — IP address, browser type and version, operating system, device identifiers, pages visited, referring URL, date and time of access, geolocation data derived from IP address, cookies and similar tracking technologies.
          </p>
          <p style={pLastStyle}>
            <strong style={{ color: '#fff' }}>3.3 Sensitive Personal Information</strong> — We do not knowingly collect sensitive personal information such as government IDs, health information, biometric data, racial or ethnic origin, religious beliefs, or sexual orientation.
          </p>
        </div>

        <div style={blockStyle}>
          <h2 style={h2Style}>4. Legal Bases for Processing (GDPR / UK GDPR)</h2>
          <p style={pLastStyle}>
            For individuals in the EU, UK, or Switzerland, we process personal information on the following bases: Consent, Contract, Legitimate Interests, and Legal Obligation. You may withdraw consent at any time without affecting the lawfulness of prior processing.
          </p>
        </div>

        <div style={blockStyle}>
          <h2 style={h2Style}>5. How We Use Personal Information</h2>
          <p style={pLastStyle}>
            To respond to inquiries, deliver and improve our Services, process transactions, send service and marketing communications (where permitted), analyze Website usage, prevent fraud, comply with legal obligations, and enforce our terms. We do not use personal information for automated decision-making that produces legal effects without explicit consent.
          </p>
        </div>

        <div style={blockStyle}>
          <h2 style={h2Style}>6. Disclosure of Personal Information</h2>
          <p style={pStyle}>
            <strong style={{ color: '#fff' }}>We do not sell personal information.</strong> We may share it only with service providers bound by contractual protections (cloud hosting, email platforms, CRM, analytics, payment processors, professional advisors), where required by law, in connection with a business transfer, or with your explicit consent.
          </p>
        </div>

        <div style={blockStyle}>
          <h2 style={h2Style}>7. Cookies and Tracking Technologies</h2>
          <p style={pLastStyle}>
            We use strictly necessary cookies, analytics cookies (subject to consent), and marketing cookies (subject to consent). You may manage preferences through the Website&apos;s cookie consent tool or your browser settings. Non-essential cookies are not deployed until consent is given for users in jurisdictions requiring prior consent.
          </p>
        </div>

        <div style={blockStyle}>
          <h2 style={h2Style}>8. Data Retention</h2>
          <p style={pLastStyle}>
            Inquiry data (no engagement): up to 24 months. Active client data: duration of engagement plus 7 years. Marketing data: until unsubscribe or withdrawal of consent. Website analytics: up to 26 months. Legal records: as required by law. Data no longer required is securely deleted or anonymized.
          </p>
        </div>

        <div style={blockStyle}>
          <h2 style={h2Style}>9. International Data Transfers</h2>
          <p style={pLastStyle}>
            Output is based in Canada, which has been recognized by the European Commission as providing adequate data protection for commercial organizations subject to PIPEDA. For transfers to other jurisdictions, we rely on appropriate safeguards including Standard Contractual Clauses.
          </p>
        </div>

        <div style={blockStyle}>
          <h2 style={h2Style}>10. Data Security</h2>
          <p style={pLastStyle}>
            We implement encryption in transit (TLS/SSL) and at rest, access controls, regular security assessments, staff confidentiality obligations, vendor due diligence, and incident response procedures. No method of electronic transmission is completely secure. In the event of a data breach, we will notify affected parties and regulatory authorities as required by law.
          </p>
        </div>

        <div style={blockStyle}>
          <h2 style={h2Style}>11. Your Rights</h2>
          <p style={pStyle}>
            <strong style={{ color: '#fff' }}>All users:</strong> Access, correction, deletion, withdrawal of consent, and complaint.
          </p>
          <p style={pStyle}>
            <strong style={{ color: '#fff' }}>EU / UK / Switzerland (GDPR):</strong> Restriction of processing, data portability, right to object, right not to be subject to automated decision-making, and the right to lodge a complaint with your local data protection authority.
          </p>
          <p style={pStyle}>
            <strong style={{ color: '#fff' }}>California residents (CCPA/CPRA):</strong> Know what personal information is collected, request deletion, correct inaccurate information, opt out of sale or sharing (Output does not sell personal information), limit use of sensitive personal information, and non-discrimination for exercising rights.
          </p>
          <p style={pLastStyle}>
            To exercise any right, contact us at{' '}
            <a href="mailto:curtis@output.systems" style={{ color: TEAL }}>curtis@output.systems</a>. We will verify your identity before responding.
          </p>
        </div>

        <div style={blockStyle}>
          <h2 style={h2Style}>12. Children&apos;s Privacy</h2>
          <p style={pLastStyle}>
            The Website and Services are not directed to children under the age of 16. We do not knowingly collect personal information from children. If we learn we have done so, we will delete it promptly.
          </p>
        </div>

        <div style={blockStyle}>
          <h2 style={h2Style}>13. Third-Party Links and Embedded Content</h2>
          <p style={pLastStyle}>
            The Website may contain links to third-party websites and embedded content (such as scheduling widgets). Embedded content behaves as if you had visited the third-party website directly. These third parties may collect data, set cookies, and monitor your interaction with their content. We encourage you to review their privacy policies.
          </p>
        </div>

        <div style={blockStyle}>
          <h2 style={h2Style}>14. Marketing Communications</h2>
          <p style={pLastStyle}>
            We may send marketing communications where permitted by law and where required, with your consent. You may opt out at any time by clicking unsubscribe in any marketing email or contacting us directly.
          </p>
        </div>

        <div style={blockStyle}>
          <h2 style={h2Style}>15. Changes to This Privacy Policy</h2>
          <p style={pLastStyle}>
            We may update this Privacy Policy from time to time. The updated version will be posted on the Website with a revised Last Updated date. Material changes will be communicated through additional means where practicable. Continued use of the Website after the effective date constitutes acceptance of the revised Policy.
          </p>
        </div>

        <div style={blockStyle}>
          <h2 style={h2Style}>16. Regulatory Authorities</h2>
          <p style={pLastStyle}>
            Canada: Office of the Privacy Commissioner (priv.gc.ca) &nbsp;|&nbsp; Quebec: Commission d&apos;accès à l&apos;information (cai.gouv.qc.ca) &nbsp;|&nbsp; EU: Your local Data Protection Authority (edpb.europa.eu) &nbsp;|&nbsp; UK: Information Commissioner&apos;s Office (ico.org.uk) &nbsp;|&nbsp; California: California Privacy Protection Agency (cppa.ca.gov)
          </p>
        </div>

        <div style={blockStyle}>
          <h2 style={h2Style}>17. Governing Law</h2>
          <p style={pLastStyle}>
            This Privacy Policy is governed by the laws of the Province of Ontario and the federal laws of Canada applicable therein. Disputes will be subject to the exclusive jurisdiction of the courts of the Province of Ontario, except where prohibited by applicable law in your jurisdiction. Nothing in this Policy limits your right to bring a complaint under the mandatory provisions of your local data protection laws.
          </p>
        </div>
      </section>

      <SiteFooter />
      <StickyBookButton />
      <Script src="/embed.js" strategy="afterInteractive" />
    </>
  );
}
