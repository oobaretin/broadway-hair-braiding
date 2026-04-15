import { Metadata } from 'next';
import ServiceMenu from '@/components/sections/ServiceMenu';
import { Testimonials } from '@/components/sections/Testimonials';
import { BUSINESS_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: `Services - ${BUSINESS_NAME} | Braids & Protective Styles in Katy, Texas`,
  description: `Explore hair braiding services at ${BUSINESS_NAME}: box braids, goddess braids, cornrows, faux locs, and more. Professional styling in Katy, Texas.`,
  keywords:
    'hair braiding services, box braids, goddess braids, cornrows, faux locs, Katy Texas, Broadway Hair Braiding',
};

export default function ServicesPage() {
  return (
    <div className="pt-28 md:pt-32">
      <ServiceMenu />
      <Testimonials />
    </div>
  );
}
