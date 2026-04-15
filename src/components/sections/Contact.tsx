'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { contactInfo } from '@/lib/data';
import { formatPhoneNumber } from '@/lib/utils';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { 
  PhoneIcon, 
  EnvelopeIcon, 
  MapPinIcon,
  ClockIcon 
} from '@heroicons/react/24/outline';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="section-padding bg-gradient-to-b from-white via-secondary-50/50 to-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 1, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-14 md:mb-16 max-w-3xl mx-auto"
        >
          <p className="text-primary-700 font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Contact
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-secondary-900 mb-5 text-balance">
            Get in touch
          </h2>
          <p className="text-lg text-secondary-600 leading-relaxed">
            Schedule an appointment or ask about styles and timing — we&apos;re happy to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 1, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.15 }}
          >
            <Card>
              <CardContent className="pt-7">
                <h3 className="font-display font-semibold text-xl md:text-2xl text-secondary-900 mb-6">
                  Send a message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-xl focus:ring-2 focus:ring-primary-600/40 focus:border-primary-400 transition-colors duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-xl focus:ring-2 focus:ring-primary-600/40 focus:border-primary-400 transition-colors duration-200"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-secondary-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-xl focus:ring-2 focus:ring-primary-600/40 focus:border-primary-400 transition-colors duration-200"
                        placeholder="(713) 555-0123"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-secondary-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-xl focus:ring-2 focus:ring-primary-600/40 focus:border-primary-400 transition-colors duration-200"
                      >
                        <option value="">Select a subject</option>
                        <option value="appointment">Book Appointment</option>
                        <option value="consultation">Schedule Consultation</option>
                        <option value="service-question">Service Question</option>
                        <option value="pricing">Pricing Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                        className="w-full px-4 py-3 border border-secondary-300 rounded-xl focus:ring-2 focus:ring-primary-600/40 focus:border-primary-400 transition-colors duration-200 resize-none"
                      placeholder="Tell us about your hair goals and any questions you have..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 1, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.15 }}
            className="space-y-8"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <PhoneIcon className="w-6 h-6 text-primary-800" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-secondary-900 mb-1">Phone</h4>
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-secondary-600 hover:text-primary-800 transition-colors duration-200"
                  >
                    {formatPhoneNumber(contactInfo.phone)}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <EnvelopeIcon className="w-6 h-6 text-primary-800" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-secondary-900 mb-1">Email</h4>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-secondary-600 hover:text-primary-800 transition-colors duration-200"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPinIcon className="w-6 h-6 text-primary-800" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-secondary-900 mb-1">Address</h4>
                  <p className="text-secondary-600">{contactInfo.address}</p>
                  <p className="text-secondary-500 text-sm mt-2 font-medium">
                    Please call or text for exact location details
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-3 mb-4">
                  <ClockIcon className="w-6 h-6 text-primary-800" />
                  <h3 className="font-display font-semibold text-xl text-secondary-900">
                    Business Hours
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {contactInfo.hours.map((hours) => (
                    <div key={hours.day} className="flex justify-between items-center">
                      <span className="font-medium text-secondary-900">{hours.day}</span>
                      <span className="text-secondary-600">
                        {hours.open} - {hours.close}
                      </span>
                    </div>
                  ))}
                </div>
                
              </CardContent>
            </Card>

            {/* CTA */}
            <div className="rounded-2xl p-8 md:p-10 text-center text-white bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950 shadow-lift border border-white/10">
              <h3 className="font-display font-semibold text-xl md:text-2xl mb-3">
                Ready to book?
              </h3>
              <p className="mb-8 text-white/85 text-sm md:text-base leading-relaxed max-w-sm mx-auto">
                Reserve your spot online and see available services in one place.
              </p>
              <Link href="/services">
                <Button className="bg-accent-500 hover:bg-accent-400 text-primary-950 font-semibold focus:ring-accent-300">
                  Book now
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
