"use client";

import Image from "next/image";
import { useState } from "react";
import Reveal from "@/components/ui/Reveal";
import { STORE_PLATFORMS } from "@/lib/content";

export default function StorePlatforms() {
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-white px-[20px] py-[56px] md:px-[40px] lg:h-[625px] lg:overflow-hidden lg:px-0 lg:py-0">
      <div className="mx-auto flex w-full max-w-[1192px] flex-col items-center gap-[40px] lg:h-full lg:max-w-[1454px] lg:flex-row lg:items-center lg:gap-[106px] lg:pl-[89px] lg:pr-[173px]">
        <div className="flex w-full flex-col gap-[24px] lg:w-[530px]">
          <Reveal className="flex w-full flex-col gap-[9px] lg:h-[124px]">
            <h2 className="text-right text-[20px] font-bold leading-normal text-ink sm:text-[24px] lg:h-[39px]">
              متجر مصمم للبيع… وأسهل في الإدارة
            </h2>
            <p className="text-right text-[15px] font-normal leading-relaxed text-ink sm:text-[18px] lg:h-[76px] lg:leading-normal">
              نطوّر متاجر إلكترونية تربط المنتجات، الدفع، الطلبات والإدارة داخل
              تجربة شراء واضحة وسلسة.
            </p>
          </Reveal>

          <div className="flex w-full flex-col gap-[16px] lg:gap-[24px]">
            {STORE_PLATFORMS.map((platform, index) => {
              const selected = index === active;
              return (
                <Reveal key={platform.label} delay={index * 80}>
                  <button
                    type="button"
                    onClick={() => setActive(index)}
                    aria-pressed={selected}
                    className={`flex w-full cursor-pointer flex-col items-start overflow-hidden rounded-[12px] border-[0.2px] border-primary px-[14px] transition-colors duration-300 ${
                      platform.label === "متاجر سلة" ? "py-[7px]" : "py-[9px]"
                    } ${selected ? "bg-primary" : "bg-bg-card hover:bg-primary/5"}`}
                  >
                    <span className="flex w-full items-center justify-between">
                      <span className="flex items-center gap-[16px]">
                        <span
                          className="relative block shrink-0"
                          style={{
                            width: platform.logoWidth,
                            height: platform.logoHeight,
                          }}
                        >
                          <Image
                            src={platform.logo}
                            alt=""
                            fill
                            sizes={`${platform.logoWidth}px`}
                            className="object-contain"
                          />
                        </span>
                        <span
                          className={`text-right text-[18px] font-normal leading-normal sm:text-[24px] ${
                            selected ? "text-text-inverse" : "text-black"
                          }`}
                        >
                          {platform.label}
                        </span>
                      </span>
                      <span className="relative block size-[38px] shrink-0 sm:size-[46px]">
                        <Image
                          src={
                            selected
                              ? "/assets/icons/arrow-left-46-white.svg"
                              : "/assets/icons/arrow-left-46-blue.svg"
                          }
                          alt=""
                          fill
                          sizes="46px"
                          className="object-contain"
                        />
                      </span>
                    </span>
                  </button>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal
          delay={120}
          className="w-full shrink-0 lg:h-[476px] lg:w-[556px]"
        >
          <div className="relative aspect-[556/476] w-full overflow-hidden rounded-[12px] lg:h-[476px] lg:w-[556px]">
            <div className="absolute inset-y-0 left-[-5.75%] w-[113.85%]">
              <Image
                src="/assets/images/store-dashboard.png"
                alt="لوحة تحكم متجر إلكتروني"
                fill
                sizes="(max-width: 1024px) 100vw, 633px"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
