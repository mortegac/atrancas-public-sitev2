import type { ReactNode } from "react";
import clsx from "clsx";

type BoundedProps = {
  as?: "div" | "section" | "header";
  yPadding?: "sm" | "base" | "lg";
  xPadding?: "default" | "none";
  collapsible?: boolean;
  className?: string;
  children?: ReactNode;
};

export function Bounded({
  as: Comp = "div",
  yPadding = "base",
  xPadding = "default",
  collapsible = true,
  className,
  children,
}: BoundedProps) {
  return (
    <Comp
      data-collapsible={collapsible}
      className={clsx(
        xPadding === "default" && "px-6",
        xPadding === "none" && "px-0",
        yPadding === "sm" && "py-8 md:py-10",
        yPadding === "base" && "py-20 md:py-28",
        yPadding === "lg" && "py-32 md:py-48",
        className,
      )}
    >
      <div className={clsx(
        "mx-auto max-w-[1170px] w-full",
        xPadding === "default" && "px-16",
        xPadding === "none" && "px-0"
      )}>{children}</div>
    </Comp>
  );
}
