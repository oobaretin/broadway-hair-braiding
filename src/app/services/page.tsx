import { Metadata } from 'next';
import ServiceMenu from '@/components/sections/ServiceMenu';
import { Testimonials } from '@/components/sections/Testimonials';
import { BUSINESS_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: `Services - ${BUSINESS_NAME} | Braids & Protective Styles in Atlanta, GA`,
  description: `Explore hair braiding services at ${BUSINESS_NAME}: box braids, goddess braids, cornrows, faux locs, and more. Professional styling in Atlanta, Georgia.`,
  keywords:
    'hair braiding services, box braids, goddess braids, cornrows, faux locs, Atlanta Georgia, Maya African Hair Braiding',
};

export default function ServicesPage() {
  return (
    <div className="pt-32 md:pt-40 lg:pt-44">
      <ServiceMenu />
      <Testimonials />
    </div>
  );
}
