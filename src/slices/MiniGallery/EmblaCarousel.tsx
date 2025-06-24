'use client'
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import type { EmblaOptionsType } from 'embla-carousel';
// @ts-ignore
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { PrismicRichText } from '@/components/PrismicRichText';
import '../MiniGallery/base.css';
import '../MiniGallery/embla.css';

export type EmblaCarouselProps = {
  images: {
    url: string;
    alt?: string;
    dimensions?: { width: number; height: number };
    title?: any;
    description?: any;
    calltoactionlink?: any;
  }[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<EmblaCarouselProps> = ({ images, options }) => {
  const [emblaRef] = useEmblaCarousel(options, [Autoplay({ delay: 8000 })]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {images.map((img, idx) => (
            <div className="embla__slide" key={idx}>
              <div className="embla__slide__img-wrapper">
                <Image
                  src={img.url}
                  alt={img.alt || ''}
                  width={img.dimensions?.width || 600}
                  height={img.dimensions?.height || 400}
                  className="embla__slide__img object-cover w-full h-full"
                />
                {/* Overlay con título, descripción y link */}
                <div className="embla__slide__overlay">
                  <div className="embla__slide__content">
                    <div className="embla__slide__text-content">
                      {img.title && (
                        <div className="embla__slide__title">
                          <PrismicRichText field={img.title} />
                        </div>
                      )}
                      {img.description && (
                        <div className="embla__slide__description">
                          <PrismicRichText field={img.description} />
                        </div>
                      )}
                    </div>
                    {img.calltoactionlink && (
                      <a 
                        href={img.calltoactionlink.url} 
                        target={img.calltoactionlink.target || '_blank'}
                        rel="noopener noreferrer"
                        className="embla__slide__link"
                      >
                        <span className='text-2xl bg-slate-50/20 rounded-3xl px-4 py-3'>COTIZA AQUÍ</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel; 