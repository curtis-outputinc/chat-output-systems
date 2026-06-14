import type { Metadata } from 'next';
import Script from 'next/script';
import SiteNav from '../components/SiteNav';
import AnimatedNodesBackground from '../components/AnimatedNodesBackground';
import SiteFooter from '../components/SiteFooter';
import StickyBookButton from '../components/StickyBookButton';
import ContactForm from './ContactForm';

const TEAL = '#07e4c6';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Book a free discovery call or get in touch with our team. We will get back to you within one business day.',
};

export default function ContactPage() {
  return (
    <>
      <AnimatedNodesBackground />
      <SiteNav active="/contact" />

      <div className="os-hero">
        <div className="os-hero-tag">Contact Us</div>
        <h1>
          Get in touch with us. We&apos;ll help you build exactly
          <br />
          <em style={{ color: TEAL }}>what your business needs.</em>
        </h1>
        <p className="os-hero-intro">
          Have a question about our systems? Ready to book a discovery call? Want to see a demo? Send us a note below and we will get back to you within one business day.
        </p>
      </div>

      <div className="os-rule" />

      <section style={{ padding: '72px 24px', background: '#000' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: TEAL, marginBottom: '20px' }}>
            Send Us a Message
          </p>
          <h2 style={{ fontSize: 'clamp(26px,3.5vw,42px)', fontWeight: 900, letterSpacing: '-1px', marginBottom: '20px' }}>
            Tell us a little about your business.
          </h2>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.8, marginBottom: '40px' }}>
            We will learn about your business, show you what an intelligent chat system would look like for your specific use case, and give you a clear quote with no obligation.
          </p>

          <ContactForm />
        </div>

        <div style={{ height: '1px', background: 'rgba(7,228,198,0.14)', maxWidth: '720px', margin: '64px auto 48px' }} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', maxWidth: '720px', margin: '0 auto' }}>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: TEAL, marginBottom: '8px' }}>Email</div>
            <div style={{ fontSize: '18px' }}>
              <a href="mailto:connect@output.systems" style={{ color: '#fff', textDecoration: 'none' }}>connect@output.systems</a>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: TEAL, marginBottom: '8px' }}>Phone</div>
            <div style={{ fontSize: '18px' }}>
              <a href="tel:+16476223799" style={{ color: '#fff', textDecoration: 'none' }}>647 622 3799</a>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: TEAL, marginBottom: '8px' }}>Location</div>
            <div style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)' }}>375 University Ave, Toronto, Ontario, Canada M5G 2J5</div>
          </div>
          <div>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: TEAL, marginBottom: '8px' }}>Response Time</div>
            <div style={{ fontSize: '18px', color: 'rgba(255,255,255,0.8)' }}>Within one business day</div>
          </div>
        </div>
      </section>

      <SiteFooter />
      <StickyBookButton />
      <Script src="/embed.js" strategy="afterInteractive" />
    </>
  );
}
