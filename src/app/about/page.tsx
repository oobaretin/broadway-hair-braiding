import { Metadata } from 'next';
import { About } from '@/components/sections/About';
import { BUSINESS_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: `About Us - ${BUSINESS_NAME} | Hair Braiding in Katy, Texas`,
  description: `Learn about ${BUSINESS_NAME}. Professional African braids and protective styles in Katy, Texas—fast, gentle, and client-focused.`,
  keywords:
    'about Broadway Hair Braiding, hair braiding salon, Katy Texas, Brescia Lane, professional braiding',
};

export default function AboutPage() {
  return (
    <div className="pt-28 md:pt-32">
      <About />
    </div>
  );
}
