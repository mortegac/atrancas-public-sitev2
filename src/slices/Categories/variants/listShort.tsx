import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicText } from "@prismicio/react";

import Image from 'next/image';
import { PrismicRichText,  } from "@/components/PrismicRichText";
import { commonComponents } from "@/components/PrismicSerializer";
import { Bounded } from "@/components/Bounded";


/**
 import { Bounded } from "@/components/Bounded";
 * Props for `Categories`.
 */
export type CategoriesProps = SliceComponentProps<Content.CategoriesSlice>;

/**
 * Component for "Categories" Slices.
 */
const ListShort: FC<CategoriesProps> = ({ slice }) => {
  
  if (!slice || !slice.primary) {
    return <div>Loading...</div>;
  }
  
  const categories = slice.primary.listcategories;
  
  return (
    
    <section id="container" className="relative bg-[#212121] text-white ">
      <Bounded yPadding="base" xPadding="responsive" className="relative px-4">
        <div className="w-full ">
          <div className="text-center px-0">
            <PrismicRichText
              field={slice.primary.title}
              components={commonComponents}
              />
            <div className=' flex flex-row justify-center items-center my-12'>
              <PrismicRichText
                field={slice.primary.description}
                components={commonComponents}
                />                
            </div>
          </div>
        </div>
        <div className="w-full">
          <div id="list" className="flex flex-row justify-center items-center mt-2 gap-6 overflow-x-auto pb-4">
            { Array.isArray(categories) && categories.map((item, index)=>(
              <PrismicNextLink 
                field={item.calltoactionlink}
                rel={'noopener noreferrer'}
                className="cursor-pointer flex-shrink-0"
              >
                <div className='overflow-hidden rounded-2xl flex justify-evenly items-center flex-col border p-4 w-64 h-56'>
                  <div 
                    key={`${index}-CATEGORIES-LIST`} 
                    className='transition-transform duration-300 ease-in-out hover:scale-110'
                  >
                    <Image 
                      src={item?.image?.url || ""} 
                      alt={item?.image?.alt || ""} 
                      width="50"
                      height="50"
                      className="object-cover"
                    />
                  </div>
                  <div className="text-center text-[1.4rem]">
                    <PrismicText field={item?.title} />
                  </div>
                </div>
              </PrismicNextLink>
            ))}
          </div>
        </div>
      </Bounded>
    </section>
  );
};

export { ListShort };
