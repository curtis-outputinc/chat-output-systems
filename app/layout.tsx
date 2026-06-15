import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { themeInitScript } from '@/lib/insights/theme';
import CookiesBanner from './components/CookiesBanner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://chat.output.systems'),
  title: {
    default: 'Intelligent Chat Systems for your business — Output Systems',
    template: '%s, Output Systems',
  },
  description:
    'Output Systems builds Intelligent Chat Systems for customer-facing websites, internal staff knowledge bases, and lead capture. Highly customized, done for you, managed every month.',
  applicationName: 'Output Systems',
  authors: [{ name: 'Output Systems' }],
  keywords: [
    'Intelligent Chat Systems',
    'intelligent website chat',
    'internal knowledge chat',
    'customer chat',
    'lead capture chat',
    'small business',
    'done for you',
    'Monthly System Management',
  ],
  openGraph: {
    type: 'website',
    siteName: 'Output Systems',
    title: 'Intelligent Chat Systems for your business — Output Systems',
    description:
      'Intelligent Chat Systems for customer-facing websites, internal staff knowledge, and lead capture. Done for you. Managed every month.',
    url: 'https://chat.output.systems',
    images: [{ url: '/logo.png', width: 1200, height: 360, alt: 'Output' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Intelligent Chat Systems for your business — Output Systems',
    description:
      'Intelligent Chat Systems for customer-facing websites, internal staff knowledge, and lead capture. Done for you.',
    images: ['/logo.png'],
  },
  icons: {
    icon: [{ url: '/favicon.png', type: 'image/png' }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="bg-black text-white antialiased min-h-screen">
        {children}
        <CookiesBanner />
      </body>
    </html>
  );
}
