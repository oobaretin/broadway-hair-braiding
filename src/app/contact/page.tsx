import { Metadata } from 'next';
import { Contact } from '@/components/sections/Contact';
import { BUSINESS_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: `Contact Us - ${BUSINESS_NAME} | Book Your Appointment in Katy, Texas`,
  description: `Contact ${BUSINESS_NAME} to book your appointment. 18831 Brescia Ln, Katy, TX 77449. Call (713) 483-0211 or send a message.`,
  keywords:
    'contact Broadway Hair Braiding, book appointment, Katy Texas, hair braiding salon, 713-483-0211',
};

export default function ContactPage() {
  return (
    <div className="pt-28 md:pt-32">
      <Contact />
    </div>
  );
}
