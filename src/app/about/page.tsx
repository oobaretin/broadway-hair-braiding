import { Metadata } from 'next';
import { About } from '@/components/sections/About';
import { BUSINESS_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: `About Us - ${BUSINESS_NAME} | Hair Braiding in Atlanta, GA`,
  description: `Learn about ${BUSINESS_NAME}. Professional African braids and protective styles in Atlanta, Georgia—fast, gentle, and client-focused.`,
  keywords:
    'about Maya African Hair Braiding, hair braiding salon, Atlanta GA, Campbellton Road, professional braiding',
};

export default function AboutPage() {
  return (
    <div className="pt-36 md:pt-40 lg:pt-44">
      <About />
    </div>
  );
}
