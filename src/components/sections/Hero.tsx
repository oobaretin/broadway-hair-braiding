'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { contactInfo } from '@/lib/data';
import { formatPhoneNumber } from '@/lib/utils';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[min(100vh,56rem)] flex items-center overflow-hidden pt-[6.5rem] md:pt-[8rem] lg:pt-[8.5rem] pb-16 md:pb-24">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-950"
          aria-hidden
        />
        <div
          className="absolute -top-24 right-0 w-[min(100%,42rem)] h-[42rem] bg-accent-500/15 rounded-full blur-3xl"
          aria-hidden
        />
        <div
          className="absolute bottom-0 left-0 w-[min(100%,36rem)] h-[28rem] bg-primary-600/20 rounded-full blur-3xl"
          aria-hidden
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-950/90 via-transparent to-primary-950/40" />
      </div>

      <div className="relative z-10 container-custom w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 1, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="lg:col-span-7 text-center lg:text-left"
          >
            <p className="inline-flex items-center gap-2 text-accent-200/95 text-sm font-semibold uppercase tracking-[0.2em] mb-5">
              <span className="h-px w-8 bg-accent-400/80 hidden sm:block" aria-hidden />
              Atlanta, Georgia
            </p>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-[3.5rem] xl:text-7xl text-white mb-6 leading-[1.1] text-balance">
              Braids that feel as good as they look
            </h1>

            <p className="text-lg md:text-xl text-white/85 max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
              Maya African Hair Braiding brings you fast, professional service with a gentle touch—
              expert protective styles and stunning braids for every occasion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-stretch sm:items-center">
              <Link href="/services" className="sm:flex-shrink-0">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-accent-500 hover:bg-accent-400 text-primary-950 font-semibold focus:ring-accent-300 shadow-lg shadow-primary-950/30"
                >
                  Book your appointment
                </Button>
              </Link>
              <a
                href={`tel:${contactInfo.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/35 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-300 focus-visible:ring-offset-2 focus-visible:ring-offset-primary-900"
              >
                Call {formatPhoneNumber(contactInfo.phone)}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 1, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.12 }}
            className="lg:col-span-5"
          >
            <div className="surface-card bg-white/10 border-white/20 backdrop-blur-md shadow-lift p-6 sm:p-8 text-white max-w-md mx-auto lg:max-w-none">
              <p className="text-accent-200/90 text-xs font-semibold uppercase tracking-widest mb-6">
                Why clients choose us
              </p>
              <dl className="grid grid-cols-3 gap-4 sm:gap-6">
                <div className="text-center sm:text-left">
                  <dt className="sr-only">Years of experience</dt>
                  <dd className="text-2xl sm:text-3xl font-display font-bold text-white">20+</dd>
                  <dd className="text-white/70 text-xs sm:text-sm mt-1">Years</dd>
                </div>
                <div className="text-center sm:text-left border-x border-white/15 px-2 sm:px-4">
                  <dt className="sr-only">Happy clients</dt>
                  <dd className="text-2xl sm:text-3xl font-display font-bold text-white">1000+</dd>
                  <dd className="text-white/70 text-xs sm:text-sm mt-1">Clients</dd>
                </div>
                <div className="text-center sm:text-left">
                  <dt className="sr-only">Google rating</dt>
                  <dd className="text-2xl sm:text-3xl font-display font-bold text-accent-300">4.6</dd>
                  <dd className="text-white/70 text-xs sm:text-sm mt-1">Google (57)</dd>
                </div>
              </dl>
              <p className="mt-8 text-sm text-white/75 leading-relaxed border-t border-white/15 pt-6">
                Open Monday–Sunday with evening hours until{' '}
                <span className="text-white font-medium">8 PM</span> — walk-ins when available;
                booking recommended. Full weekly hours on{' '}
                <Link href="/contact" className="text-accent-200 underline-offset-2 hover:underline">
                  Contact
                </Link>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:block"
        aria-hidden
      >
        <div className="w-6 h-10 border-2 border-white/35 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-2.5 bg-accent-300/90 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};
