import { Metadata } from 'next';
import { Contact } from '@/components/sections/Contact';

export const metadata: Metadata = {
  title: 'Contact Us - Magic Braiding | Book Your Appointment in Richmond, Texas',
  description: 'Contact Magic Braiding to book your hair braiding appointment. Located in Richmond, Texas. Call (832) 526-7055 or send us a message.',
  keywords: 'contact magic braiding, book appointment, Richmond Texas, hair braiding salon contact',
};

export default function ContactPage() {
  return (
    <div className="pt-52 md:pt-48">
      <Contact />
    </div>
  );
}
