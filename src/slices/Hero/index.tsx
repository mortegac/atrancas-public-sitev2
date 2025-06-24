import { FC } from "react";
import { type Content, isFilled } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import type { SliceComponentProps, JSXMapSerializer } from "@prismicio/react";

import { Bounded } from "@/components/Bounded";
import { Heading } from "@/components/Heading";
import { PrismicRichText } from "@/components/PrismicRichText";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h2" size="xl" className=" mb-0 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  heading4: ({ children }) => (
    <Heading as="h3" size="md" className="mb-4 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-[#ed571c]">{children}</strong>
  ),
  em: ({ children }) => (
    <Heading as="h3" size="lg" className="mb-4 mt-0  first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
};

type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero: FC<HeroProps> = ({ slice }) => {
  const backgroundImage = slice.primary.backgroundImage;
  const calltoactionlink = slice.primary.calltoactionlink;

  return (
    <section className="relative bg-slate-900 text-white h-[650px]">
      {isFilled.image(backgroundImage) && (
        <PrismicNextImage
          field={backgroundImage}
          alt=""
          fill={true}
          className="pointer-events-none select-none object-cover opacity-40"
        />
      )}
      <Bounded yPadding="lg" className="relative h-full flex items-center">
        <div className="grid justify-items-start gap-8">
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
          {/* <pre>{JSON.stringify(slice.primary, null, 2 )}</pre> */}
          {isFilled.link(calltoactionlink) && (
            <PrismicNextLink
              field={calltoactionlink}
              className="rounded-sm bg-[#ed571c] px-12 py-6 font-medium text-white text-2xl"
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
