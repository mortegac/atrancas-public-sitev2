'use client';
import { FC } from "react";
import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import type { SliceComponentProps, JSXMapSerializer } from "@prismicio/react";
import { useGTMEvent } from '@/components/Analytics'

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { PrismicRichText } from "@/components/PrismicRichText";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h2" size="xl" className="mb-4 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-[#c39f77]">{children}</strong>
  ),
};

type TalkWhatsappProps = SliceComponentProps<Content.TalkWhatsappSlice>;

const TalkWhatsapp: FC<TalkWhatsappProps> = ({ slice }) => {
  // const backgroundImage = slice.primary.backgroundImage;
  const calltoactionlink = slice.primary.calltoactionlink;
  const sendGTMEvent = useGTMEvent();

  return (
    <section className="relative bg-slate-900 text-white">
      {/* {isFilled.image(backgroundImage) && (
        <PrismicNextImage
          field={backgroundImage}
          alt=""
          fill={true}
          className="pointer-events-none select-none object-cover opacity-40"
        />
      )} */}
      <Bounded yPadding="base" className="relative">
        <div className="mx-auto w-full max-w-[590px]">
            <div className="text-center">
            <h4 className='mb-5 font-bold -tracking-[1.6px] text-white dark:text-white lg:text-heading-2 xl:text-[32px] xl:leading-[1.12]'>
            <PrismicRichText
              field={slice.primary.title}
              components={components}
            />
            </h4>
              
            <div className=' flex flex-row justify-center items-center'>

              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 22L3.41152 16.8691C2.54422 15.3639 2.08876 13.6568 2.09099 11.9196C2.08095 6.44549 6.52644 2 11.99 2C14.6417 2 17.1315 3.02806 19.0062 4.9034C19.9303 5.82266 20.6627 6.91616 21.1611 8.12054C21.6595 9.32492 21.9139 10.6162 21.9096 11.9196C21.9096 17.3832 17.4641 21.8287 12 21.8287C10.3368 21.8287 8.71374 21.4151 7.26204 20.6192L2 22ZM7.49424 18.8349L7.79675 19.0162C9.06649 19.7676 10.5146 20.1644 11.99 20.1654C16.5264 20.1654 20.2263 16.4662 20.2263 11.9291C20.2263 9.73176 19.3696 7.65554 17.8168 6.1034C17.0533 5.33553 16.1453 4.72636 15.1453 4.31101C14.1452 3.89565 13.0728 3.68232 11.99 3.68331C7.44343 3.6839 3.74476 7.38316 3.74476 11.9202C3.74476 13.4724 4.17843 14.995 5.00502 16.3055L5.19645 16.618L4.35982 19.662L7.49483 18.8354L7.49424 18.8349Z" fill="white"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M9.52024 7.76662C9.33885 7.35303 9.13737 7.34298 8.96603 7.34298C8.81477 7.33294 8.65288 7.33294 8.48154 7.33294C8.32083 7.33294 8.04845 7.39321 7.81684 7.64549C7.58464 7.89719 6.95007 8.49217 6.95007 9.71167C6.95007 10.9318 7.83693 12.1111 7.95805 12.2724C8.07858 12.4337 9.67149 15.0139 12.192 16.0124C14.2883 16.839 14.712 16.6777 15.1657 16.6269C15.6189 16.5767 16.6275 16.0325 16.839 15.4476C17.0405 14.8733 17.0405 14.3693 16.9802 14.2682C16.9199 14.1678 16.748 14.1069 16.5064 13.9758C16.2541 13.8552 15.0446 13.2502 14.813 13.1693C14.5808 13.0889 14.4195 13.0487 14.2582 13.2904C14.0969 13.5427 13.623 14.0969 13.4724 14.2582C13.3306 14.4195 13.1799 14.4396 12.9377 14.3185C12.686 14.1979 11.8895 13.9356 10.9418 13.0889C10.2056 12.4331 9.71167 11.6171 9.56041 11.3755C9.41979 11.1232 9.54032 10.992 9.67149 10.8709C9.78257 10.7604 9.92378 10.579 10.0449 10.4378C10.1654 10.296 10.2056 10.1855 10.2966 10.0242C10.377 9.86292 10.3368 9.71167 10.2765 9.59114C10.2157 9.48006 9.74239 8.25997 9.52024 7.76603V7.76662Z" fill="white"/>
              </svg>
              <a 
                href={slice?.primary?.calltoactionlink?.text} 
                target="_blank" 
                rel="noopener noreferrer nofollow" 
                onClick={() => sendGTMEvent({
                  event: 'inicio_conversacion_whatsapp',
                  telefono: slice?.primary?.phone || ''
                })}
              >
                <h2 className=' ml-4 mb-5   text-heading-4 font-bold -tracking-[1.6px] text-white dark:text-white lg:text-heading-2 xl:text-[48px] xl:leading-[1.12]'>
                {slice.primary.phone}
                </h2>
              </a>  
                
              </div>
            </div>
          </div>
        {/* <div className="grid justify-items-start gap-8">
          <div className="max-w-2xl text-left">
            <PrismicRichText
              field={slice.primary.title}
              components={components}
            />
          </div>
          <div className="max-w-2xl text-left">
            <span>{slice.primary.phone}</span>
            <PrismicRichText
              field={slice.primary.description}
              components={components}
            />
          </div>
          <pre>{JSON.stringify(slice.primary, null, 2 )}</pre>
          {isFilled.link(slice.primary.calltoactionlink) && (
            <PrismicNextLink
              field={calltoactionlink}
              className="rounded-sm bg-[#c39f77] px-5 py-3 font-medium text-white"
            >
              Conoce nuestro catálogo
            </PrismicNextLink>
          )}
        </div> */}
      </Bounded>
    </section>
  );
};

export default TalkWhatsapp;

