import { Metadata } from 'next';
import Gallery from '@/components/sections/Gallery';

export const metadata: Metadata = {
  title: 'Gallery - Maya African Hair Braiding | Hair Braiding Portfolio in Atlanta, GA',
  description:
    'View our portfolio of African hair braiding—styles and professional results in Atlanta, Georgia.',
  keywords:
    'hair braiding gallery, African braids portfolio, Atlanta GA hair gallery, Campbellton Road, Maya African Hair Braiding',
};

export default function GalleryPage() {
  return (
    <div className="pt-32 md:pt-40 lg:pt-44">
      <Gallery />
    </div>
  );
}
