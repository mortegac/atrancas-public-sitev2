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
    
    <section className="relative bg-[#212121] text-white pt-20">
      <Bounded yPadding="base" className="relative">
      {/* <h2>ListShort</h2> */}
        <div className="w-full ">
          <div className="text-center">
            <PrismicRichText
              field={slice.primary.title}
              components={commonComponents}
              />
            <div className=' flex flex-row justify-center items-center mt-12'>
              <PrismicRichText
                field={slice.primary.description}
                components={commonComponents}
                />                
            </div>
          </div>
        </div>
        <div className="w-full">
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-2"> */}
          <div className="flex flex-row mt-2 gap-6">
                  
            { Array.isArray(categories) && categories.map((item, index)=>(
               <PrismicNextLink 
               field={item.calltoactionlink}
              //  onClick={() => setNavbarOpen(false)}
               rel={'noopener noreferrer'}
               className="cursor-pointer "
              >
             {/* <pre>{JSON.stringify(item?.title, null, 2 )}</pre> */}
              <div className='overflow-hidden rounded-2xl  flex justify-start items-center flex-col border p-4 w-64 h-56'>
                
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
