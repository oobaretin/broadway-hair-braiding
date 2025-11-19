import { Metadata } from 'next';
import { About } from '@/components/sections/About';
import { Testimonials } from '@/components/sections/Testimonials';

export const metadata: Metadata = {
  title: 'About Us - Magic Braiding | Professional Hair Braiding in Richmond, Texas',
  description: 'Learn about Magic Braiding, our mission, and our commitment to providing exceptional hair braiding services in Richmond, Texas. Fast, professional, and gentle.',
  keywords: 'about magic braiding, hair braiding salon, Richmond Texas, professional braiding, Stella',
};

export default function AboutPage() {
  return (
    <div className="pt-32 md:pt-48">
      <About />
      <Testimonials />
    </div>
  );
}
