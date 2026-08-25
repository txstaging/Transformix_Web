import type { ReactNode } from "react";

const BARS = [
  { left: 17.71, width: 21.287, height: 41.141, radius: 7, upTop: -58.61, downTop: 69.05 },
  { left: 40, width: 21.287, height: 41.141, radius: 7, upTop: -55.67, downTop: 66.11 },
  { left: 62.28, width: 21.287, height: 41.141, radius: 7, upTop: -55.67, downTop: 66.11 },
  { left: 84.57, width: 30, height: 47.249, radius: 9, upTop: -57.26, downTop: 61.59 },
  { left: 115.57, width: 30, height: 47.249, radius: 9, upTop: -57.26, downTop: 61.59 },
  { left: 146.57, width: 21.287, height: 41.141, radius: 7, upTop: -55.67, downTop: 66.11 },
  { left: 168.86, width: 21.287, height: 41.141, radius: 7, upTop: -55.67, downTop: 66.11 },
  { left: 191.14, width: 21.287, height: 41.141, radius: 7, upTop: -58.61, downTop: 69.05 },
];

type OutlineButtonProps = {
  children: ReactNode;
  href?: string;
  barColor?: "third" | "transparent";
  className?: string;
};

export default function OutlineButton({
  children,
  href = "#",
  barColor = "third",
  className = "",
}: OutlineButtonProps) {
  const barClass =
    barColor === "third" ? "bg-third" : "bg-[rgba(91,51,121,0)]";
  const flipsLabel = barColor === "third";

  return (
    <a
      href={href}
      className={`group relative block h-[52px] w-[220px] shrink-0 overflow-hidden rounded-[32px] border-2 border-text-primary shadow-button ${className}`}
    >
      <span className="absolute -left-[2px] -top-[14.03px] block h-[75.502px] w-[226.006px] bg-bg-main" />

      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 block translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-[41px]"
      >
        {BARS.map((bar) => (
          <span
            key={`u-${bar.left}`}
            className={`absolute block ${barClass}`}
            style={{
              left: `${bar.left}px`,
              top: `${bar.upTop}px`,
              width: `${bar.width}px`,
              height: `${bar.height}px`,
              borderRadius: `${bar.radius}px`,
            }}
          />
        ))}
      </span>

      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 block translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-[40px]"
      >
        {BARS.map((bar) => (
          <span
            key={`l-${bar.left}`}
            className={`absolute block ${barClass}`}
            style={{
              left: `${bar.left}px`,
              top: `${bar.downTop}px`,
              width: `${bar.width}px`,
              height: `${bar.height}px`,
              borderRadius: `${bar.radius}px`,
            }}
          />
        ))}
      </span>

      <span
        className={`absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-center text-[18px] font-normal text-text-primary transition-colors duration-300 ${
          flipsLabel ? "group-hover:text-white" : ""
        }`}
      >
        {children}
      </span>
    </a>
  );
}
