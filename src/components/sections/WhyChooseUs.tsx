'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HeartIcon, UserGroupIcon, SparklesIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const features = [
  {
    icon: HeartIcon,
    title: 'Passion for beauty',
    description:
      'Every client deserves to feel confident. We listen to your goals and deliver styles you will love.',
  },
  {
    icon: UserGroupIcon,
    title: 'Experienced stylists',
    description:
      'Skilled braiders who know protective styles, timing, and how to keep your scalp comfortable.',
  },
  {
    icon: SparklesIcon,
    title: 'Premium materials',
    description:
      'Quality extensions and products so your install looks sharp and holds up between visits.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Clean & professional',
    description:
      'A tidy, welcoming space with clear standards for hygiene and care at every appointment.',
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="section-padding relative bg-gradient-to-b from-secondary-50 to-white">
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary-950/[0.03] to-transparent pointer-events-none" />
      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 1, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl mx-auto text-center mb-14 md:mb-16"
        >
          <p className="text-primary-700 font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            The Broadway difference
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-secondary-900 mb-5 text-balance">
            Why clients trust us with their hair
          </h2>
          <p className="text-lg text-secondary-600 leading-relaxed">
            Thoughtful service, honest timing, and braids that look polished from day one.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.article
              key={feature.title}
              initial={{ opacity: 1, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true, amount: 0.15 }}
              className="surface-card p-7 md:p-8 flex flex-col sm:flex-row gap-5 sm:gap-6 group"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary-100 to-primary-50 border border-primary-200/60 flex items-center justify-center group-hover:from-primary-200/80 group-hover:to-primary-100 transition-colors">
                <feature.icon className="w-7 h-7 text-primary-800" aria-hidden />
              </div>
              <div className="min-w-0 text-center sm:text-left">
                <h3 className="font-display font-semibold text-lg text-secondary-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-secondary-600 text-sm md:text-base leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
