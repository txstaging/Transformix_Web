import type { CSSProperties, ReactNode } from "react";

type PrimaryButtonProps = {
  children: ReactNode;
  href?: string;
  className?: string;
  /** Desktop offset of the label from center, where the design shifts it. */
  labelOffsetX?: number;
};

export default function PrimaryButton({
  children,
  href = "#",
  className = "",
  labelOffsetX = 0,
}: PrimaryButtonProps) {
  return (
    <a
      href={href}
      className={`group relative block h-[53px] w-[218.328px] shrink-0 overflow-hidden rounded-[66px] border-2 border-primary shadow-button ${className}`}
    >
      <span className="absolute -left-[2px] -top-[2px] block h-[53px] w-[218.328px] rounded-[26.5px] bg-primary" />

      <span
        aria-hidden
        className="pointer-events-none absolute -left-[57px] -top-[249px] block h-[221px] w-[328px] translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-[165px]"
      >
        <span className="block h-full w-full rounded-[50%] bg-white" />
      </span>

      <span
        style={{ "--label-x": `${labelOffsetX}px` } as CSSProperties}
        className="absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2 whitespace-nowrap lg:left-[calc(50%+var(--label-x))] text-center text-[18px] font-normal text-text-inverse transition-colors duration-300 group-hover:text-primary">
        {children}
      </span>
    </a>
  );
}
