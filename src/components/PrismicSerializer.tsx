import type { JSXMapSerializer } from "@prismicio/react";
import { Heading } from "@/components/Heading";

export const commonComponents: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading as="h2" size="xl" className="mb-0 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  heading2: ({ children }) => (
    <Heading as="h2" size="lg" className="mb-4 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  heading3: ({ children }) => (
    <Heading as="h3" size="md" className="mb-4 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  heading4: ({ children }) => (
    <Heading as="h4" size="sm" className="mb-4 mt-12 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold text-[#c39f77]">{children}</strong>
  ),
  em: ({ children }) => (
    <em className="not-italic text-[#c39f77]">{children}</em>
  ),
  paragraph: ({ children }) => (
    <p className="mb-4 first:mt-0 last:mb-0 text-lg leading-relaxed font-medium">
      {children}
    </p>
  ),
};

export const heroComponents: JSXMapSerializer = {
  ...commonComponents,
  heading1: ({ children }) => (
    <Heading as="h1" size="xl" className="mb-0 mt-0 first:mt-0 last:mb-0">
      {children}
    </Heading>
  ),
};