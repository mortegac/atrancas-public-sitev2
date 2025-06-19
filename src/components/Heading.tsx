import type { ReactNode } from "react";
import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3";
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
        size === "xl" && "text-6xl md:text-7xl",
        size === "lg" && "text-5xl md:text-5xl",
        size === "md" && "text-4xl md:text-4xl",
        size === "sm" && "text-2xl md:text-2xl",
        className,
      )}
    >
      {children}
    </Comp>
  );
}
