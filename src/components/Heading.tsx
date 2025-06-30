import type { ReactNode } from "react";
import clsx from "clsx";
import type { SliceComponentProps, JSXMapSerializer } from "@prismicio/react";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  children?: ReactNode;
};

export function Heading({
  as: Comp = "h1",
  size = "lg",
  children,
  className,
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
        "font-semibold leading-tight tracking-tight md:leading-tight",
        size === "xl" && "text-7xl md:text-8xl",
        size === "lg" && "text-6xl md:text-6xl",
        size === "md" && "text-4xl md:text-4xl font-light",
        size === "sm" && "text-2xl md:text-2xl",
        className,
      )}
    >
      {children}
    </Comp>
  );
}