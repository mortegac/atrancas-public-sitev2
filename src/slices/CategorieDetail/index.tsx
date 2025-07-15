// import { FC } from "react";
// import { Content } from "@prismicio/client";
// import { SliceComponentProps } from "@prismicio/react";

// /**
//  * Props for `CategorieDetail`.
//  */
// export type CategorieDetailProps =
//   SliceComponentProps<Content.CategorieDetailSlice>;

// /**
//  * Component for "CategorieDetail" Slices.
//  */
// const CategorieDetail: FC<CategorieDetailProps> = ({ slice }) => {

'use client';
import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicTable } from "@prismicio/react";

import Image from 'next/image';
import { PrismicRichText } from "@/components/PrismicRichText";
import { commonComponents } from "@/components/PrismicSerializer";
import { Bounded } from "@/components/Bounded";


import { EmblaOptionsType } from 'embla-carousel'
import EmblaCarousel from '../../components/EmblaCarousel'


/**
 import { Bounded } from "@/components/Bounded";
 * Props for `CategorieDetail`.
 */
export type CategorieDetailProps = SliceComponentProps<Content.CategorieDetailSlice>;

const OPTIONS: EmblaOptionsType = { loop: true, duration: 30 }
const SLIDE_COUNT = 5


/**
 * Component for "CategorieDetail" Slices.
*/
const CategorieDetail: FC<CategorieDetailProps> = ({ slice }) => {
  
  const Lounges = slice.primary.images;
  
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  
  return (
    
    <section className="relative bg-[#212121] text-white">
      {/* <Bounded yPadding="base" className="relative"> */}
      <Bounded yPadding="base" xPadding="responsive" className="relative px-4">
        <div className="mx-auto w-full ">
          <div className="text-center">
            <PrismicRichText
              field={slice.primary.title}
              components={commonComponents}
              />
            <div className=' flex flex-row justify-center items-center mt-20 text-left sm:text-center'>
              <PrismicRichText
                field={slice.primary.description}
                components={commonComponents}
                />                
            </div>
          </div>
        </div>
        <div className="mx-auto w-full">
          {/* <pre>{JSON.stringify(slice.primary, null, 2)}</pre> */}
          <div id="list" className="grid grid-cols-1 gap-12 mt-20">
                  
            { Array.isArray(Lounges) && Lounges.map((item, index)=>(
              // Generar SLIDES solo con imágenes válidas
              (() => {
                const SLIDES = [
                  item?.image?.url,
                  item?.image02?.url,
                  item?.image03?.url,
                  item?.image04?.url,
                  item?.image05?.url
                ].filter((url): url is string => typeof url === 'string' && url.length > 0)
                return (
                  <div key={`${index}-LoungesDetail-LIST`} id="item" className='overflow-hidden rounded-2xl cursor-pointer flex flex-col md:flex-row border'>
                    <div id="imageContainer" className="w-full md:w-[500px] h-[350px] relative flex-shrink-0">
                      <EmblaCarousel slides={SLIDES} options={OPTIONS} />
                      <span className="absolute top-4 left-4 w-20 font-bold h-20 p-2 bg-black text-white z-10 text-4xl flex items-center justify-center">
                        {item?.codeproduct}
                      </span>
                    </div>
                    <div id="content" className="pt-20 w-full md:w-1/2 h-[350px] flex flex-col justify-start items-center p-8 overflow-y-auto">
                      <PrismicRichText
                        field={item?.title}
                        components={commonComponents}
                      />   
                      <PrismicRichText
                        field={item?.description}
                        components={commonComponents}
                      />  
                      <div id="table" className="w-full">
                        <div className="prismic-table">
                          <PrismicTable 
                            field={item.prices}
                            components={{
                              table: ({ children }) => <table className="w-full border-collapse">{children}</table>,
                              tr: ({ children }) => <tr className="border-b border-gray-200">{children}</tr>,
                              td: ({ children }) => <td className="px-2 py-1">{children}</td>,
                              th: ({ children }) => <th className="px-2 py-1">{children}</th>,
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })()
            ))}
          </div>
        </div>
      </Bounded>
    </section>
  );
};

export default CategorieDetail;
