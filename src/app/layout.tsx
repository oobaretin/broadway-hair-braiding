import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BookingProvider } from '@/components/booking/BookingProvider';
import { BUSINESS_NAME, SITE_URL } from '@/lib/site';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

const inter = Inter({ subsets: ['latin'] });

const title = `${BUSINESS_NAME} - Hair Braiding Salon in Atlanta, Georgia`;
const description = `${BUSINESS_NAME} on Campbellton Rd SW, Atlanta. Expert African braids, protective styles, and professional salon service. Rated 4.6 on Google. Book your appointment today.`;

export const metadata: Metadata = {
  title,
  description,
  keywords:
    'hair braiding, African braids, Atlanta Georgia, Campbellton Road, hair salon, protective styles, box braids, cornrows, goddess braids, Maya African Hair Braiding',
  authors: [{ name: BUSINESS_NAME }],
  creator: BUSINESS_NAME,
  publisher: BUSINESS_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: BUSINESS_NAME,
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: `${BUSINESS_NAME} - Professional hair braiding`,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <BookingProvider>
          <div className="min-h-screen flex flex-col min-w-0">
            <Header />
            <main className="flex-1 min-w-0">{children}</main>
            <Footer />
          </div>
        </BookingProvider>
      </body>
    </html>
  );
}
