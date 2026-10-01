import { ArrowRight } from "lucide-react";
import type React from "react";

import { cn } from "@/lib/utils";

type SharedProps = {
  text?: string;
  primaryColor?: string;
  className?: string;
};

type ButtonProps = SharedProps & React.ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never;
};

type LinkProps = SharedProps & React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

type SlideArrowButtonProps = ButtonProps | LinkProps;

export default function SlideArrowButton({
  text = "Get Started",
  primaryColor = "#EB175D",
  className = "",
  ...props
}: SlideArrowButtonProps) {
  const classes = cn(
    "group/slide relative inline-flex min-h-11 items-center overflow-hidden rounded-full border border-white/70 bg-white/90 p-2 text-sm font-semibold text-[#363636] shadow-sm backdrop-blur transition-shadow duration-200 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EB175D]/50 focus-visible:ring-offset-2",
    className,
  );

  const content = (
    <>
      <span
        className="absolute left-0 top-0 flex h-full w-11 items-center justify-end rounded-full transition-[width] duration-300 ease-out group-hover/slide:w-full group-focus-visible/slide:w-full"
        style={{ backgroundColor: primaryColor }}
        aria-hidden="true"
      >
        <span className="mr-3 text-white transition-transform duration-300 ease-out group-hover/slide:translate-x-0.5 group-focus-visible/slide:translate-x-0.5">
          <ArrowRight size={18} />
        </span>
      </span>
      <span className="relative left-4 z-10 whitespace-nowrap px-8 font-semibold transition-all duration-300 ease-out group-hover/slide:-left-3 group-hover/slide:text-white group-focus-visible/slide:-left-3 group-focus-visible/slide:text-white">
        {text}
      </span>
    </>
  );

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props;
    return (
      <a href={href} className={classes} {...anchorProps}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {content}
    </button>
  );
}
