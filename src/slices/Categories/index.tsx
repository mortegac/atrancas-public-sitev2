import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

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
const Categories: FC<CategoriesProps> = ({ slice }) => {
  
  const categories = slice.primary.listcategories;
  
  return (
    
    <section className="relative bg-[#212121] text-white">
      <Bounded yPadding="base" className="relative">
        <div className="mx-auto w-full ">
          <div className="text-center">
            <PrismicRichText
              field={slice.primary.title}
              components={commonComponents}
              />
            <div className=' flex flex-row justify-center items-center mt-20'>
              <PrismicRichText
                field={slice.primary.description}
                components={commonComponents}
                />                
            </div>
          </div>
        </div>
        <div className="mx-auto w-full">
          {/* <pre>{JSON.stringify(slice.primary , null, 2)}</pre> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-20">
                  
            { Array.isArray(categories) && categories.map((item, index)=>(
               <div className='overflow-hidden rounded-2xl cursor-pointer flex justify-center items-center flex-col border p-16'>
               <div 
               key={`${index}-CATEGORIES-LIST`} 
                 className='transition-transform duration-300 ease-in-out hover:scale-110'
                //  onClick={() => openModal(item)}
               >
                 <Image 
                   src={item?.image?.url || ""} 
                   alt={item?.image?.alt || ""} 
                   width="100"
                   height="100"
                   className="object-cover"
                 />
               </div>
               <div className="text-center pt-12">
                <PrismicRichText
                  field={item?.title}
                  components={commonComponents}
                />   
                <PrismicRichText
                  field={item?.description}
                  components={commonComponents}
                />   
                
               </div>
             </div>
            ))}
          </div>
        </div>
      </Bounded>
    </section>
  );
};

export default Categories;
