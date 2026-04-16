import { Metadata } from 'next';
import { Contact } from '@/components/sections/Contact';
import { BUSINESS_NAME } from '@/lib/site';

export const metadata: Metadata = {
  title: `Contact Us - ${BUSINESS_NAME} | Book Your Appointment in Atlanta, GA`,
  description: `Contact ${BUSINESS_NAME} to book your appointment. 2221 Campbellton Rd SW, Atlanta, GA 30311. Call (404) 948-2969 or send a message.`,
  keywords:
    'contact Maya African Hair Braiding, book appointment, Atlanta hair salon, Campbellton Road, 404-948-2969',
};

export default function ContactPage() {
  return (
    <div className="pt-36 md:pt-40 lg:pt-44">
      <Contact />
    </div>
  );
}
