'use client'
import { FC, useState } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Image from 'next/image';

import { Bounded } from "@/components/Bounded";
/**
 * Props for `Gallery`.
 */
export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

/**
 * Component for "Gallery" Slices.
 */
const Gallery: FC<GalleryProps> = ({ slice }) => {
  const images = slice.primary.images;
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const columns: Content.GallerySliceDefaultPrimaryImagesItem[][] = [[], [], []];
  images.forEach((item, i) => {
    columns[i % 3].push(item);
  });

  // Aplanar todas las imágenes en un array para navegación
  const allImages: Content.GallerySliceDefaultPrimaryImagesItem[] = [];
  columns.forEach(column => {
    column.forEach(item => allImages.push(item));
  });

  const openModal = (image: Content.GallerySliceDefaultPrimaryImagesItem) => {
    const index = allImages.findIndex(img => img === image);
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === 0 ? allImages.length - 1 : selectedImageIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex !== null) {
      setSelectedImageIndex(selectedImageIndex === allImages.length - 1 ? 0 : selectedImageIndex + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft') {
      goToPrevious();
    } else if (e.key === 'ArrowRight') {
      goToNext();
    }
  };

  const selectedImage = selectedImageIndex !== null ? allImages[selectedImageIndex] : null;

  return (
    <>
    {/* <pre>{JSON.stringify(columns, null, 2)}</pre> */}
      <section className="relative text-white py-[22px] bg-black">
        {/* <Bounded yPadding="base" className="relative"> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {columns.map((column, colIndex) => (
              <div key={colIndex} className="grid gap-4">
                {column.map((item, itemIndex) => (
                  <div key={itemIndex} className='overflow-hidden rounded-2xl cursor-pointer'>
                    <div 
                      className='transition-transform duration-300 ease-in-out hover:scale-110'
                      onClick={() => openModal(item)}
                    >
                      <Image 
                        src={item.image?.url || ""} 
                        alt={item.image?.alt || ""} 
                        width={item.image.dimensions?.width}
                        height={item.image.dimensions?.height}
                        className="object-cover w-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        {/* </Bounded> */}
      </section>

      {/* Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-start pt-20 justify-center p-4"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div 
            className="relative max-w-full max-h-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all z-10"
            >
              ×
            </button>

            {/* Botón anterior */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 transition-all z-10"
            >
              ‹
            </button>

            {/* Botón siguiente */}
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center hover:bg-opacity-75 transition-all z-10"
            >
              ›
            </button>

            {/* Imagen */}
            <Image 
              src={selectedImage.image?.url || ""} 
              alt={selectedImage.image?.alt || ""} 
              width={selectedImage.image.dimensions?.width}
              height={selectedImage.image.dimensions?.height}
              className="max-w-full max-h-[90vh] object-contain"
            />

            {/* Indicador de posición */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm">
              {selectedImageIndex !== null ? `${selectedImageIndex + 1} / ${allImages.length}` : ''}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
