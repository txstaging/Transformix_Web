"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import OutlineButton from "@/components/ui/OutlineButton";
import { NAV_LINKS } from "@/lib/content";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => mq.matches && setOpen(false);
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <header className="relative z-30 w-full">
      <div className="mx-auto flex h-[72px] w-full max-w-[1454px] items-center justify-between px-[20px] md:px-[40px] lg:h-[102px] lg:px-[120px]">
        <a href="#" className="relative block shrink-0 lg:translate-x-[35.16px]">
          <Image
            src="/assets/logo/logo.svg"
            alt="Transformix"
            width={85.14}
            height={54.355}
            priority
            className="h-[38px] w-auto lg:h-[54.355px] lg:w-[85.14px]"
          />
        </a>

        <nav className="hidden lg:flex lg:w-[672px] lg:flex-col lg:items-center">
          <ul className="flex items-center justify-center">
            {NAV_LINKS.map((link) => (
              <li
                key={link.label}
                className={
                  link.label === "تواصل معنا"
                    ? "flex flex-col items-start px-[16px]"
                    : "flex flex-col items-start pb-[21px] pl-[16px] pr-[8px] pt-[20.5px]"
                }
              >
                <a
                  href={link.href}
                  className="group flex items-center justify-center gap-[4px] text-[18px] leading-normal text-text-primary transition-colors duration-200 hover:text-primary"
                >
                  <span
                    className={`whitespace-nowrap text-center ${
                      link.active ? "font-bold" : "font-normal"
                    }`}
                  >
                    {link.label}
                  </span>
                  {link.hasChevron && (
                    <Image
                      src="/assets/icons/chevron-down.svg"
                      alt=""
                      width={9.6}
                      height={5.0667}
                      className="block h-[5.0667px] w-[9.6px] transition-transform duration-200 group-hover:translate-y-[2px]"
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <OutlineButton href="#contact" barColor="transparent">
            تواصل معنا
          </OutlineButton>
        </div>

        <button
          type="button"
          aria-label={open ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="flex h-[42px] w-[42px] flex-col items-center justify-center gap-[5px] rounded-[12px] border-2 border-text-primary lg:hidden"
        >
          <span
            className={`block h-[2px] w-[18px] bg-text-primary transition-transform duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[2px] w-[18px] bg-text-primary transition-opacity duration-200 ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-[2px] w-[18px] bg-text-primary transition-transform duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`overflow-hidden border-stroke bg-bg-main transition-[max-height,opacity] duration-400 ease-out lg:hidden ${
          open ? "max-h-[420px] border-b opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col px-[20px] py-[12px] md:px-[40px]">
          {NAV_LINKS.map((link) => (
            <li key={link.label} className="border-b border-stroke/70 last:border-b-0">
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between py-[14px] text-[16px] text-text-primary ${
                  link.active ? "font-bold" : "font-normal"
                }`}
              >
                {link.label}
                {link.hasChevron && (
                  <Image
                    src="/assets/icons/chevron-down.svg"
                    alt=""
                    width={9.6}
                    height={5.0667}
                    className="block h-[5.0667px] w-[9.6px]"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-[20px] pb-[20px] md:px-[40px]">
          <OutlineButton href="#contact" barColor="transparent">
            تواصل معنا
          </OutlineButton>
        </div>
      </div>
    </header>
  );
}
