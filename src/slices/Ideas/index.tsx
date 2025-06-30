import { FC } from "react";
import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import type { SliceComponentProps, JSXMapSerializer } from "@prismicio/react";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { PrismicRichText } from "@/components/PrismicRichText";

import { commonComponents } from "@/components/PrismicSerializer";

type IdeasProps = SliceComponentProps<Content.IdeasSlice>;

const Ideas: FC<IdeasProps> = ({ slice }) => {
  const backgroundImage = slice.primary.image;
  const calltoactionlink = slice.primary.calltoactionlink;

  return (
    
    <section id="container" className="relative bg-[#212121] text-white h-[500px] flex items-center justify-center">
      {/* <pre>{JSON.stringify(slice.primary, null, 2 )}</pre> */}
      {isFilled.image(backgroundImage) && (
        <PrismicNextImage
          field={backgroundImage}
          alt=""
          fill={true}
          className="pointer-events-none select-none object-cover opacity-40"
        />
      )}
      <Bounded yPadding="base" className="relative h-full flex items-center justify-center">
        <div id="content" className="w-full flex flex-col justify-center items-center text-center">
          <PrismicRichText
            field={slice.primary.title}
            components={commonComponents}
          />
          <PrismicRichText
            field={slice.primary.description}
            components={commonComponents}
          />
          {isFilled.link(slice.primary.calltoactionlink) && (
            <PrismicNextLink
              field={calltoactionlink}
              className="mt-12 rounded-sm bg-[#c39f77] px-5 py-3 font-medium text-white"
            >
              Cotiza tu ambientación aquí
            </PrismicNextLink>
          )}
        </div>
        <div className="grid justify-items-start gap-8">
         
          {/* <pre>{JSON.stringify(slice.primary, null, 2 )}</pre> */}
        </div>
      </Bounded>
    </section>
  );
};

export default Ideas;

