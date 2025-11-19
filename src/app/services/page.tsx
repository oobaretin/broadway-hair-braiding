import { Metadata } from 'next';
import ServiceMinimalList from '@/components/sections/ServiceMinimalList';
import { Testimonials } from '@/components/sections/Testimonials';

export const metadata: Metadata = {
  title: 'Services - Magic Braiding | Professional Hair Braiding in Richmond, Texas',
  description: 'Explore our professional hair braiding services including box braids, goddess braids, cornrows, and faux locs. Fast, professional, and gentle styling in Richmond, Texas.',
  keywords: 'hair braiding services, box braids, goddess braids, cornrows, faux locs, Richmond Texas, knotless braids',
};

export default function ServicesPage() {
  return (
    <div className="pt-52 md:pt-48">
      <ServiceMinimalList />
      <Testimonials />
    </div>
  );
}
