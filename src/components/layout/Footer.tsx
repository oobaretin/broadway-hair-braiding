import React from 'react';
import Link from 'next/link';
import { contactInfo, socialLinks } from '@/lib/data';
import { BUSINESS_NAME } from '@/lib/site';
import { formatPhoneNumber } from '@/lib/utils';
import { HomeIcon } from '@heroicons/react/24/outline';

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-primary-950 text-white overflow-hidden">
      <div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-500/80 to-transparent"
        aria-hidden
      />
      <div className="absolute top-24 right-0 w-96 h-96 bg-accent-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom section-padding relative">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-12 xl:gap-10">
          <div className="xl:col-span-4 space-y-5">
            <Link
              href="/"
              className="font-display font-bold text-2xl text-white hover:text-accent-300 transition-colors inline-block"
            >
              {BUSINESS_NAME}
            </Link>
            <p className="text-secondary-300 text-sm leading-relaxed max-w-sm">
              Professional hair braiding in Katy, Texas. Fast, gentle service and beautiful
              protective styles.
            </p>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const getIcon = () => {
                  switch (social.platform) {
                    case 'Instagram':
                      return (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      );
                    case 'Nextdoor':
                      return <HomeIcon className="w-5 h-5" />;
                    case 'Facebook':
                      return (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      );
                    default:
                      return <span className="text-sm font-medium">{social.platform.charAt(0)}</span>;
                  }
                };

                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-11 h-11 bg-white/10 rounded-xl flex items-center justify-center hover:bg-accent-500 hover:text-primary-950 transition-colors duration-200"
                    title={`Follow us on ${social.platform}`}
                  >
                    <span className="sr-only">{social.platform}</span>
                    {getIcon()}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="xl:col-span-2">
            <h3 className="font-display font-semibold text-accent-200/90 text-sm uppercase tracking-wider mb-4">
              Explore
            </h3>
            <ul className="space-y-3">
              {[
                ['Services', '/services'],
                ['Gallery', '/gallery'],
                ['About', '/about'],
                ['Contact', '/contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-secondary-200 hover:text-accent-300 transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="xl:col-span-3">
            <h3 className="font-display font-semibold text-accent-200/90 text-sm uppercase tracking-wider mb-4">
              Popular services
            </h3>
            <ul className="space-y-3">
              {[
                ['Box Braids', '/services#box-braids'],
                ['Boho Braids', '/services#boho-braids'],
                ['Goddess Braids', '/services#goddess-braids'],
                ['Cornrows', '/services#cornrows'],
                ['Faux Locs', '/services#faux-locs'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-secondary-200 hover:text-accent-300 transition-colors text-sm"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="xl:col-span-3">
            <h3 className="font-display font-semibold text-accent-200/90 text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <div className="space-y-4 text-sm">
              <div>
                <p className="text-secondary-400 text-xs uppercase tracking-wide mb-1">Phone</p>
                <a
                  href={`tel:${contactInfo.phone}`}
                  className="text-white hover:text-accent-300 transition-colors font-medium text-base"
                >
                  {formatPhoneNumber(contactInfo.phone)}
                </a>
              </div>
              <div>
                <p className="text-secondary-400 text-xs uppercase tracking-wide mb-1">Email</p>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-white hover:text-accent-300 transition-colors break-all"
                >
                  {contactInfo.email}
                </a>
              </div>
              <div>
                <p className="text-secondary-400 text-xs uppercase tracking-wide mb-1">Address</p>
                <p className="text-secondary-100 leading-relaxed">{contactInfo.address}</p>
                <p className="text-secondary-500 text-xs mt-2">Call or text with any questions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-10 border-t border-white/10">
          <h3 className="font-display font-semibold text-lg mb-6 text-white">Hours</h3>
          <div className="flex gap-2 overflow-x-auto pb-2 -mx-1 px-1 sm:flex-wrap sm:overflow-visible">
            {contactInfo.hours.map((hours) => (
              <div
                key={hours.day}
                className="flex-shrink-0 sm:flex-shrink rounded-xl bg-white/5 border border-white/10 px-4 py-3 min-w-[7.5rem] text-center sm:text-left"
              >
                <p className="font-medium text-white text-sm">{hours.day.slice(0, 3)}</p>
                <p className="text-secondary-400 text-xs mt-1 whitespace-nowrap">
                  {hours.open} – {hours.close}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 text-center">
          <p className="text-secondary-500 text-sm">
            © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
          </p>
          <p className="text-secondary-600 text-xs mt-3">
            Designed by{' '}
            <a
              href="https://tenqdesigns.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-400/90 hover:text-accent-300 transition-colors"
            >
              TenQ Designs LLC
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
