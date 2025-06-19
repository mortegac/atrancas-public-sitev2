import { FC } from "react";
import Image from 'next/image';
import { type Content} from "@prismicio/client";
import type { SliceComponentProps, JSXMapSerializer } from "@prismicio/react";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { PrismicRichText,  } from "@/components/PrismicRichText";

export type ImageContentProps = SliceComponentProps<Content.ImageContentSlice>;

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h2" size="xl" className="mb-4 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  paragraph: ({ children }) => (
    <span className="mb-4 mt-12 first:mt-0 last:mb-0 text-lg leading-relaxed">
      {children}
    </span>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-[#ed571c]">{children}</strong>
  ),
};

const ImageContent: FC<ImageContentProps> = ({ slice }) => {
  const image = slice.primary.image;

  return (
    <section className="relative  text-white py-[22px] bg-black">
      <Bounded yPadding="base" className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Columna izquierda - Texto */}
          <div className="space-y-6">
            <div className="max-w-2xl text-left text-gray-300 uppercase">
              <PrismicRichText
                field={slice.primary.subtitle}
                components={components}
              />
            </div>
            <div className="max-w-2xl text-left">
              <PrismicRichText
                field={slice.primary.title}
                components={components}
              />
            </div>
            <div className="max-w-2xl text-left">
              <PrismicRichText
                field={slice.primary.description}
                components={components}
              />
            </div>
          </div>
 
          <div className='w-full max-w-[484px] overflow-hidden rounded-2xl'>
            <div className='transition-transform duration-300 ease-in-out hover:scale-110'>
              <Image 
                src={image?.url || ""} 
                alt={image?.alt || ""} 
                width={484} 
                height={450} 
                className="h-[450px] object-cover w-full"
              />
            </div>
          </div>
        </div>
      </Bounded>
    </section>
  );
};

export default ImageContent;
