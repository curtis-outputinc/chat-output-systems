import type { Metadata } from 'next';
import Script from 'next/script';
import SiteNav from '../components/SiteNav';
import AnimatedNodesBackground from '../components/AnimatedNodesBackground';
import SiteFooter from '../components/SiteFooter';
import StickyBookButton from '../components/StickyBookButton';
import FadeIn from '../components/FadeIn';
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

      <main className="text-white pb-40" style={{ position: 'relative', zIndex: 1 }}>
        {/* HERO — centered */}
        <section
          className="px-6 sm:px-10 text-center"
          style={{ paddingTop: '160px', paddingBottom: '64px' }}
        >
          <FadeIn>
            <h1
              className="font-black tracking-tight leading-[1.04] mx-auto mb-8"
              style={{
                fontSize: 'clamp(43px, 6.7vw, 86px)',
                letterSpacing: '-3px',
                maxWidth: '1100px',
              }}
            >
              Get in touch with us. We&apos;ll help you build exactly{' '}
              <span style={{ color: TEAL }}>what your business needs.</span>
            </h1>
            <p
              className="mx-auto"
              style={{
                fontSize: '25px',
                lineHeight: 1.7,
                maxWidth: '820px',
                color: '#ffffff',
                textWrap: 'balance',
              }}
            >
              Have a question about our systems? Ready to book a discovery call?
              Send us a note below and we will get back to you within one
              business day.
            </p>
          </FadeIn>
        </section>

        {/* FORM */}
        <section className="px-6 sm:px-10" style={{ paddingBottom: '80px' }}>
          <div className="max-w-2xl mx-auto">
            <FadeIn delay={120}>
              <ContactForm />
            </FadeIn>
          </div>
        </section>
      </main>

      <div style={{ position: 'relative', zIndex: 1 }}>
        <SiteFooter />
      </div>
      <StickyBookButton />
      <Script src="/embed.js" strategy="afterInteractive" />
    </>
  );
}
