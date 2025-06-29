import { FC } from "react";
import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import type { SliceComponentProps, JSXMapSerializer } from "@prismicio/react";

import { Bounded } from "@/components/Bounded";
// import { Heading } from "@/components/Heading";
import { PrismicRichText } from "@/components/PrismicRichText";
import { commonComponents } from "@/components/PrismicSerializer";

// const components: JSXMapSerializer = {
//   heading1: ({ children }) => (
//     <Heading as="h2" size="xl" className=" mb-0 mt-12 first:mt-0 last:mb-0">
//       {children}
//     </Heading>
//   ),
//   heading4: ({ children }) => (
//     <Heading as="h3" size="md" className="mb-4 mt-12 first:mt-0 last:mb-0">
//       {children}
//     </Heading>
//   ),
//   strong: ({ children }) => (
//     <strong className="font-semibold text-[#c39f77]">{children}</strong>
//   ),
//   em: ({ children }) => (
//     <Heading as="h3" size="lg" className="mb-4 mt-0  first:mt-0 last:mb-0">
//       {children}
//     </Heading>
//   ),
// };

type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {
  const backgroundImage = slice.primary.backgroundImage;
  const calltoactionlink = slice.primary.calltoactionlink;

  return (
    <section id="containerTop" className="relative bg-slate-900 text-white h-[650px]">
      {isFilled.image(backgroundImage) && (
        <PrismicNextImage
          field={backgroundImage}
          alt=""
          fill={true}
          className="pointer-events-none select-none object-cover opacity-40"
        />
      )}
      <Bounded yPadding="lg" xPadding="none" className="relative h-full flex items-center">
        <div id="containerTop" className={`grid w-full
          ${slice?.variation === "textToRight" && "md:justify-items-end justify-items-center"}
          ${slice?.variation != "textToRight" && "md:justify-items-start justify-items-center"}
           items-start  gap-8 ` }>
          <div id="transparency" className="w-[96%] px-4 md:w-[600px] md:px-0 bg-black/50 h-svw relative  flex items-center justify-center">
            <div id="text" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white  w-full px-18">
              <PrismicRichText
                field={slice.primary.title} 
                components={commonComponents}
              />
              <PrismicRichText
                field={slice.primary.description}
                components={commonComponents}
              />
              {/* <pre>{JSON.stringify(slice.primary.description, null, 2 )}</pre> */}
            </div>
          
          </div>
          {/* <pre>{JSON.stringify(slice.primary, null, 2 )}</pre> */}
          {isFilled.link(calltoactionlink) && (
            <PrismicNextLink
              field={calltoactionlink}
              className="rounded-sm bg-[#c39f77] px-12 py-6 font-medium text-white text-2xl"
            >
              Conoce nuestro catálogo
            </PrismicNextLink>
          )}
        </div>
      </Bounded>
    </section>
  );
};

export default Hero;
