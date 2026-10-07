"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import Reveal from "@/components/ui/Reveal";
import { STORE_PLATFORMS, type StorePlatform } from "@/lib/content";

function PlatformMedia({
  platform,
  index,
  visible,
}: {
  platform: StorePlatform;
  index: number;
  visible: boolean;
}) {
  const { media } = platform;

  return (
    <div
      id={`store-panel-${index}`}
      role="tabpanel"
      aria-labelledby={`store-tab-${index}`}
      aria-hidden={!visible}
      className={`absolute left-0 top-1/2 w-full -translate-y-1/2 overflow-hidden transition-opacity duration-500 ease-out ${
        media.rounded ? "rounded-[12px]" : ""
      } ${media.cardBg ? "bg-bg-card" : ""} ${
        visible ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      style={{ aspectRatio: `${media.frameWidth} / ${media.frameHeight}` }}
    >
      <div
        className={`absolute ${media.crop ? "overflow-hidden" : ""}`}
        style={media.box}
      >
        <div className="absolute" style={media.crop ?? { inset: 0 }}>
          <Image
            src={media.image}
            alt={media.alt}
            fill
            preload={index === 0}
            sizes="(max-width: 1023px) 100vw, 640px"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default function StorePlatforms() {
  const [active, setActive] = useState(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const count = STORE_PLATFORMS.length;

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    const step =
      event.key === "ArrowDown" ? 1 : event.key === "ArrowUp" ? -1 : 0;
    if (!step && event.key !== "Home" && event.key !== "End") return;
    event.preventDefault();
    const next =
      event.key === "Home"
        ? 0
        : event.key === "End"
          ? count - 1
          : (active + step + count) % count;
    setActive(next);
    tabsRef.current[next]?.focus();
  };

  const activeFrame = STORE_PLATFORMS[active].media;

  return (
    <section className="w-full bg-white px-[20px] py-[56px] md:px-[40px] lg:h-[625px] lg:overflow-hidden lg:px-0 lg:py-0">
      <div className="mx-auto flex w-full max-w-[1192px] flex-col items-center gap-[40px] lg:max-w-[1454px] lg:flex-row lg:items-center lg:gap-[106px] lg:pl-[89px] lg:pr-[173px] lg:pt-[62px]">
        <div className="flex w-full flex-col gap-[24px] lg:w-[530px] lg:shrink-0">
          <Reveal className="flex w-full flex-col gap-[9px] text-right text-ink lg:h-[124px]">
            <h2 className="text-[20px] font-bold leading-normal sm:text-[24px] lg:flex lg:h-[39px] lg:flex-col lg:justify-center lg:leading-[normal]">
              متجر مصمم للبيع… وأسهل في الإدارة
            </h2>
            <p className="text-[15px] font-normal leading-relaxed sm:text-[18px] lg:flex lg:h-[76px] lg:flex-col lg:justify-center lg:leading-[normal]">
              نطوّر متاجر إلكترونية تربط المنتجات، الدفع، الطلبات والإدارة داخل
              تجربة شراء واضحة وسلسة.
            </p>
          </Reveal>

          <div
            role="tablist"
            aria-orientation="vertical"
            aria-label="منصات المتاجر الإلكترونية"
            onKeyDown={onKeyDown}
            className="flex w-full flex-col gap-[16px] lg:gap-[24px]"
          >
            {STORE_PLATFORMS.map((platform, index) => {
              const selected = index === active;
              return (
                <Reveal key={platform.label} delay={index * 80}>
                  <button
                    ref={(node) => {
                      tabsRef.current[index] = node;
                    }}
                    id={`store-tab-${index}`}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-controls={`store-panel-${index}`}
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActive(index)}
                    className={`flex w-full cursor-pointer items-center justify-between overflow-hidden rounded-[12px] border-[0.2px] border-primary pl-[14px] pr-[var(--pad-end)] py-[var(--pad-y)] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                      selected ? "bg-primary" : "bg-bg-card hover:bg-primary/5"
                    }`}
                    style={
                      {
                        "--pad-end": `${platform.padEnd}px`,
                        "--pad-y": `${platform.padY}px`,
                      } as React.CSSProperties
                    }
                  >
                    <span className="flex items-center gap-[16px]">
                      <span
                        className="relative block shrink-0"
                        style={{
                          width: platform.logoWidth,
                          height: platform.logoHeight,
                        }}
                      >
                        <Image
                          src={selected ? platform.activeLogo : platform.logo}
                          alt=""
                          fill
                          sizes={`${platform.logoWidth}px`}
                          className="object-contain"
                        />
                      </span>
                      <span
                        dir="auto"
                        className={`text-right text-[18px] font-normal leading-normal transition-colors duration-300 sm:text-[24px] lg:leading-[normal] ${
                          selected ? "text-text-inverse" : "text-black"
                        }`}
                      >
                        {platform.label}
                      </span>
                    </span>
                    <span className="relative block size-[38px] shrink-0 sm:size-[46px]">
                      <Image
                        src={platform.arrows[active]}
                        alt=""
                        fill
                        sizes="46px"
                        className="object-contain"
                      />
                    </span>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={120} className="w-full lg:w-[556px] lg:shrink-0">
          <div
            className={`relative aspect-[556/476] w-full lg:aspect-auto lg:w-[556px] ${
              activeFrame.frameHeight === 370 ? "lg:h-[370px]" : "lg:h-[476px]"
            }`}
          >
            {STORE_PLATFORMS.map((platform, index) => (
              <PlatformMedia
                key={platform.label}
                platform={platform}
                index={index}
                visible={index === active}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
