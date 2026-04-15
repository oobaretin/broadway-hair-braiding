'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const About: React.FC = () => {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[min(55vw,28rem)] h-[min(55vw,28rem)] bg-primary-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 1, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-center lg:text-left"
          >
            <p className="text-primary-700 font-semibold text-sm uppercase tracking-[0.2em] mb-4">
              Our story
            </p>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-secondary-900 mb-8 text-balance">
              About Broadway Hair Braiding
            </h2>

            <div className="space-y-6 text-secondary-600 text-lg leading-relaxed">
              <p>
                Broadway Hair Braiding is a Katy salon focused on exceptional African hair braiding
                and protective styles. We combine skilled technique with a gentle touch so every
                client leaves confident and cared for.
              </p>
              <p>
                Your satisfaction is our priority. Each visit is a chance to create something
                beautiful that fits your lifestyle—from classic braids to trending looks—with
                honest timing and attention to detail. Fast, neat, and gentle: that is our
                standard.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2"
          >
            <div className="surface-card p-8 text-center lg:text-left border-t-4 border-t-accent-500">
              <div className="font-display text-4xl font-bold text-primary-800 mb-2">20+</div>
              <div className="text-secondary-600 text-sm font-medium">Years experience</div>
            </div>
            <div className="surface-card p-8 text-center lg:text-left border-t-4 border-t-primary-700">
              <div className="font-display text-4xl font-bold text-primary-800 mb-2">1000+</div>
              <div className="text-secondary-600 text-sm font-medium">Happy clients</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
