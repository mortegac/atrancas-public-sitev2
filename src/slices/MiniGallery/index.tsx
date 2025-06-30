'use client'
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Image from 'next/image';
import EmblaCarousel from './EmblaCarousel';
import { PrismicRichText } from '@/components/PrismicRichText';
import Autoplay from 'embla-carousel-autoplay';

import { Bounded } from "@/components/Bounded";
/**
 * Props for `Gallery`.
 */
export type MiniGalleryProps = SliceComponentProps<Content.MiniGallerySlice>;

/**
 * Component for "MiniGallery" Slices.
 */
const MiniGallery: FC<MiniGalleryProps> = ({ slice }) => {
  const images = (slice.primary.images || []).map((img: any) => ({
    url: img.image?.url || '',
    alt: img.image?.alt || '',
    dimensions: img.image?.dimensions || { width: 600, height: 400 },
    title: img.title,
    description: img.description,
    calltoactionlink: img.calltoactionlink,
  }));
  const options = { loop: true };

  return (
    // <section className="relative text-white py-[22px]  bg-black">
      <section className="relative  text-white py-[22px] bg-black">
        <Bounded yPadding="base" className="relative">
      {/* Título y descripción centrados */}
      <div className="mx-auto mb-8 text-left">
        {slice.primary.title && (
          <div className="mb-4">
            <PrismicRichText 
              field={slice.primary.title} 
              components={{
                heading1: ({ children }) => (
                  <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {children}
                  </h1>
                ),
                heading2: ({ children }) => (
                  <h2 className="text-2xl md:text-5xl font-bold text-white mb-4">
                    {children}
                  </h2>
                ),
                heading3: ({ children }) => (
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    {children}
                  </h3>
                ),
                paragraph: ({ children }) => (
                  <p className="text-lg text-white mb-4">
                    {children}
                  </p>
                ),
              }}
            />
          </div>
        )}
        
        {slice.primary.description && (
          <div className="mb-6">
            <PrismicRichText 
              field={slice.primary.description}
              components={{
                paragraph: ({ children }) => (
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed">
                    {children}
                  </p>
                ),
              }}
            />
          </div>
        )}
      </div>

      {/* Carrusel */}
      <EmblaCarousel images={images} options={options} />
      </Bounded>
    </section>
  );
};

export default MiniGallery;
