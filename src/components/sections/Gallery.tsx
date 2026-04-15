'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  EyeIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline';

export type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  description: string;
  type: 'image' | 'video';
};

/** Add your portfolio media here (paths under `public/images/`). */
const galleryItems: GalleryItem[] = [];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (galleryItems.length === 0) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryItems.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    if (galleryItems.length === 0) return;
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  const hasItems = galleryItems.length > 0;

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-14 md:mb-16 max-w-3xl mx-auto">
          <p className="text-primary-700 font-semibold text-sm uppercase tracking-[0.2em] mb-3">
            Portfolio
          </p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-secondary-900 mb-5 text-balance">
            Our gallery
          </h2>
          <p className="text-lg text-secondary-600 leading-relaxed">
            Photos and videos of our work will appear here soon.
          </p>
        </div>

        {hasItems ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl shadow-soft border border-secondary-200/80 hover:shadow-lift transition-all duration-300 cursor-pointer"
                onClick={() => openLightbox(index)}
              >
                <div className="aspect-square relative">
                  {item.type === 'video' ? (
                    <video
                      src={item.src}
                      muted
                      playsInline
                      preload="metadata"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <img
                      src={item.src}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white/90 rounded-full p-3">
                        <EyeIcon className="w-6 h-6 text-secondary-900" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-secondary-900 mb-1">{item.alt}</h3>
                  <p className="text-sm text-secondary-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="surface-card max-w-xl mx-auto p-10 md:p-12 text-center border-dashed border-2 border-secondary-300 bg-secondary-50/30">
            <PhotoIcon className="w-14 h-14 mx-auto text-secondary-400 mb-5" aria-hidden />
            <h3 className="font-display font-semibold text-xl text-secondary-900 mb-3">
              Gallery coming soon
            </h3>
            <p className="text-secondary-600 leading-relaxed mb-6">
              We&apos;re preparing fresh photos of our work for this site. Visit us on social or
              call to see styles in the meantime.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/services"
                className="inline-flex justify-center rounded-xl bg-primary-700 text-white px-6 py-3 text-sm font-semibold hover:bg-primary-800 transition-colors"
              >
                View services
              </Link>
              <Link
                href="/contact"
                className="inline-flex justify-center rounded-xl border-2 border-primary-700 text-primary-800 px-6 py-3 text-sm font-semibold hover:bg-primary-700 hover:text-white transition-colors"
              >
                Contact us
              </Link>
            </div>
          </div>
        )}

        <AnimatePresence>
          {hasItems && selectedImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center"
              onKeyDown={handleKeyDown}
              tabIndex={0}
            >
              <button
                type="button"
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors duration-200"
                aria-label="Close gallery"
              >
                <XMarkIcon className="w-6 h-6 text-white" />
              </button>

              <button
                type="button"
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors duration-200"
                aria-label="Previous image"
              >
                <ChevronLeftIcon className="w-8 h-8 text-white" />
              </button>

              <button
                type="button"
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors duration-200"
                aria-label="Next image"
              >
                <ChevronRightIcon className="w-8 h-8 text-white" />
              </button>

              <div className="relative w-full h-full flex items-center justify-center">
                {galleryItems[currentIndex].type === 'video' ? (
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full flex items-center justify-center"
                  >
                    <video
                      src={galleryItems[currentIndex].src}
                      controls
                      autoPlay
                      playsInline
                      className="max-w-full max-h-full object-contain"
                    />
                  </motion.div>
                ) : (
                  <motion.img
                    key={currentIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    src={galleryItems[currentIndex].src}
                    alt={galleryItems[currentIndex].alt}
                    className="max-w-full max-h-full object-contain"
                  />
                )}

                <div className="absolute bottom-4 left-4 right-4 bg-black/50 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="text-white text-xl font-semibold mb-1">
                    {galleryItems[currentIndex].alt}
                  </h3>
                  <p className="text-white/80 text-sm">{galleryItems[currentIndex].description}</p>
                  <div className="flex items-center justify-end mt-2">
                    <span className="text-white/60 text-sm">
                      {currentIndex + 1} of {galleryItems.length}
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {galleryItems.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentIndex
                        ? 'bg-primary-600 scale-125'
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="text-center mt-16">
          <h3 className="font-display text-xl md:text-2xl font-semibold text-secondary-900 mb-4">
            Ready for your next style?
          </h3>
          <p className="text-secondary-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            Book your appointment and let us create a beautiful, long-lasting look for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-flex justify-center rounded-xl bg-primary-700 text-white px-8 py-3 text-sm font-semibold hover:bg-primary-800 transition-colors"
            >
              View our services
            </Link>
            <Link
              href="/contact"
              className="inline-flex justify-center rounded-xl border-2 border-primary-700 text-primary-800 px-8 py-3 text-sm font-semibold hover:bg-primary-700 hover:text-white transition-colors"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
