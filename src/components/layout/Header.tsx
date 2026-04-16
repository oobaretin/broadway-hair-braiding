'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const LOGO_SRC = '/images/maya-logo.png';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
];

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-soft border-b border-secondary-200/60'
          : 'bg-white/80 backdrop-blur-md border-b border-transparent'
      )}
    >
      <div className="h-1 bg-gradient-to-r from-primary-800 via-accent-500 to-primary-700" aria-hidden />
      <div className="container-custom">
        <div className="flex items-center justify-between min-h-[6.25rem] md:min-h-[7rem] py-2 md:py-3 gap-2">
          <div className="flex items-center gap-3 md:gap-10 min-w-0 flex-1">
            <Link
              href="/"
              aria-label="Home"
              className="flex items-center min-w-0 max-w-full rounded-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-400 focus-visible:ring-offset-2 py-0.5"
            >
              <img
                src={LOGO_SRC}
                alt=""
                width={400}
                height={240}
                className="h-[5.25rem] sm:h-20 md:h-24 lg:h-28 w-auto max-w-[calc(100vw-4.25rem)] sm:max-w-[22rem] md:max-w-[26rem] lg:max-w-[28rem] object-contain object-left"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200',
                    pathname === item.href
                      ? 'bg-primary-50 text-primary-800 shadow-sm'
                      : 'text-secondary-600 hover:text-primary-800 hover:bg-secondary-50'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link href="/services">
              <Button
                variant="outline"
                size="md"
                className="border-primary-700 text-primary-800 hover:bg-primary-700 hover:text-white"
              >
                Book Now
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 -mr-1 rounded-xl transition-colors duration-200 text-secondary-700 hover:bg-secondary-100 min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden pb-4 -mt-1">
            <div className="rounded-2xl border border-secondary-200/80 bg-white shadow-soft overflow-hidden">
              <nav className="p-2 flex flex-col gap-0.5">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'px-4 py-3 rounded-xl text-base font-medium transition-colors duration-200',
                      pathname === item.href
                        ? 'bg-primary-50 text-primary-800'
                        : 'text-secondary-700 hover:bg-secondary-50 hover:text-primary-800'
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="p-2 pt-3">
                  <Link href="/services" onClick={() => setIsOpen(false)} className="block">
                    <Button className="w-full">Book Now</Button>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
