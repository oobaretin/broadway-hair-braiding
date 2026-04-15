import { Metadata } from 'next';
import Gallery from '@/components/sections/Gallery';

export const metadata: Metadata = {
  title: 'Gallery - Broadway Hair Braiding | Hair Braiding Portfolio in Katy, Texas',
  description:
    'View our portfolio of African hair braiding—styles and professional results in Katy, Texas.',
  keywords:
    'hair braiding gallery, African braids portfolio, Katy Texas hair gallery, Broadway Hair Braiding',
};

export default function GalleryPage() {
  return (
    <div className="pt-28 md:pt-32">
      <Gallery />
    </div>
  );
}
