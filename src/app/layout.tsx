import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BookingProvider } from '@/components/booking/BookingProvider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Magic Braiding - Professional Hair Braiding Services in Richmond, Texas',
  description: 'Transform your look with expert hair braiding services at Magic Braiding. Located in Richmond, Texas. Fast, professional, and gentle braiding. Book your appointment today!',
  keywords: 'hair braiding, braids, Richmond Texas, hair salon, professional braiding, protective styles, box braids, knotless braids, cornrows, Stella',
  authors: [{ name: 'Magic Braiding' }],
  creator: 'Magic Braiding',
  publisher: 'Magic Braiding',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://www.magicbraiding.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Magic Braiding - Professional Hair Braiding Services in Richmond, Texas',
    description: 'Transform your look with expert hair braiding services at Magic Braiding. Fast, professional, and gentle braiding.',
    url: 'https://www.magicbraiding.com',
    siteName: 'Magic Braiding',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Magic Braiding - Professional Hair Braiding Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Magic Braiding - Professional Hair Braiding Services in Richmond, Texas',
    description: 'Transform your look with expert hair braiding services at Magic Braiding. Fast, professional, and gentle braiding.',
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
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </BookingProvider>
      </body>
    </html>
  );
}
