import { Metadata } from 'next';
import Gallery from '@/components/sections/Gallery';

export const metadata: Metadata = {
  title: 'Gallery - Magic Braiding | Hair Braiding Portfolio in Richmond, Texas',
  description: 'View our stunning portfolio of hair braiding work. See before and after photos, different braid styles, and our professional hair braiding results in Richmond, Texas.',
  keywords: 'hair braiding gallery, braid styles portfolio, hair braiding photos, Richmond Texas hair gallery',
};

export default function GalleryPage() {
  return (
    <div className="pt-52 md:pt-48">
      <Gallery />
    </div>
  );
}
