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


/**
 import { Bounded } from "@/components/Bounded";
 * Props for `CategorieDetail`.
 */
export type CategorieDetailProps = SliceComponentProps<Content.CategorieDetailSlice>;

/**
 * Component for "CategorieDetail" Slices.
 */
const CategorieDetail: FC<CategorieDetailProps> = ({ slice }) => {
  
  const Lounges = slice.primary.images;
  
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
               <div key={`${index}-LoungesDetail-LIST`} id="item" className='overflow-hidden rounded-2xl cursor-pointer flex flex-col md:flex-row border'>
                 <div className="w-full md:w-1/2 h-64 md:h-full relative">
                   <Image 
                     src={item?.image?.url || ""} 
                     alt={item?.image?.alt || ""} 
                     fill
                     className="object-cover"
                   />
                   <span className="absolute top-4 left-4 w-20 font-bold h-20 p-2 bg-black text-white z-10 text-4xl flex items-center justify-center">
                     {item?.codeproduct}
                   </span>
                 </div>
                 <div id="content" className="w-full md:w-1/2 h-full flex flex-col justify-center items-center p-8">
                   <PrismicRichText
                     field={item?.title}
                     components={commonComponents}
                   />   
                   <PrismicRichText
                     field={item?.description}
                     components={commonComponents}
                   />  
                   <div id="table" className="w-full overflow-x-auto">
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
                   {/* <table>
        <thead>
          <tr>
            {slice.primary.table_header.map((headerItem, i) => (
              <th key={i}>{headerItem.text}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {slice.items.map((row, i) => (
            <tr key={i}>
              {row.table_row.map((cell, j) => (
                <td key={j}>{cell.text}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>  */}
                 </div>
               </div>
            ))}
          </div>
        </div>
      </Bounded>
    </section>
  );
};

export default CategorieDetail;
