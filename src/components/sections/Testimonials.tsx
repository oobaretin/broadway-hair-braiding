'use client';

import React from 'react';
import Link from 'next/link';
import { testimonials } from '@/lib/data';
import { Card, CardContent } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

export const Testimonials: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-secondary-100/50 via-secondary-50 to-white relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 1, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-14 md:mb-16 max-w-3xl mx-auto"
        >
          <p className="text-primary-700 font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Reviews
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-secondary-900 mb-5 text-balance">
            What our clients say
          </h2>
          <p className="text-lg text-secondary-600 leading-relaxed">
            Highlights from our Google reviews—thank you to every client who shared their experience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 1, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <Card hover className="h-full border-secondary-200/70">
                <CardContent className="pt-7 pb-6">
                  <div className="flex items-center gap-0.5 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating ? 'text-accent-500' : 'text-secondary-200'
                        }`}
                      />
                    ))}
                  </div>

                  <blockquote className="text-secondary-700 mb-6 leading-relaxed text-[0.95rem] md:text-base">
                    &ldquo;{testimonial.comment}&rdquo;
                  </blockquote>

                  <div className="border-t border-secondary-100 pt-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-700 to-primary-900 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <span className="text-white font-display font-bold text-lg">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-semibold text-secondary-900 truncate">
                        {testimonial.name}
                      </h4>
                      <p className="text-secondary-500 text-sm">
                        {testimonial.service} ·{' '}
                        {new Date(testimonial.date).toLocaleDateString(undefined, {
                          month: 'short',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 1, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mt-14 md:mt-16"
        >
          <div className="surface-card max-w-2xl mx-auto p-8 md:p-10 bg-gradient-to-br from-primary-50/80 to-white border-primary-200/50">
            <h3 className="font-display font-semibold text-xl md:text-2xl text-secondary-900 mb-3">
              Ready for your next style?
            </h3>
            <p className="text-secondary-600 mb-6 leading-relaxed">
              Book an appointment or browse our gallery for inspiration.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/services">
                <button
                  type="button"
                  className="btn-primary w-full sm:w-auto px-8"
                >
                  Book now
                </button>
              </Link>
              <Link href="/gallery">
                <button type="button" className="btn-outline w-full sm:w-auto px-8 bg-white">
                  View gallery
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
