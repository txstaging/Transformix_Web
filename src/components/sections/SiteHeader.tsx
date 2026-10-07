"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import OutlineButton from "@/components/ui/OutlineButton";
import { NAV_LINKS } from "@/lib/content";

type NavLink = (typeof NAV_LINKS)[number];

type SiteHeaderProps = {
  links?: NavLink[];
  /** Desktop width/inset of the bar; defaults to the home canvas. */
  containerClassName?: string;
  /** Desktop offset of the logo relative to its slot. */
  logoClassName?: string;
};

export default function SiteHeader({
  links = NAV_LINKS,
  containerClassName = "max-w-[1454px] lg:px-[120px]",
  logoClassName = "lg:translate-x-[35.16px]",
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => mq.matches && setOpen(false);
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <header className="relative z-30 w-full">
      <div
        className={`mx-auto flex h-[72px] w-full items-center justify-between px-[20px] md:px-[40px] lg:h-[102px] ${containerClassName}`}
      >
        <Link href="/" className={`relative block shrink-0 ${logoClassName}`}>
          <Image
            src="/assets/logo/logo.svg"
            alt="Transformix"
            width={85.14}
            height={54.355}
            priority
            className="h-[38px] w-auto lg:h-[54.355px] lg:w-[85.14px]"
          />
        </Link>

        <nav className="hidden lg:flex lg:w-[672px] lg:flex-col lg:items-center">
          <ul className="flex items-center justify-center">
            {links.map((link) => (
              <li
                key={link.label}
                className={
                  link.label === "تواصل معنا"
                    ? "flex flex-col items-start px-[16px]"
                    : "flex flex-col items-start pb-[21px] pl-[16px] pr-[8px] pt-[20.5px]"
                }
              >
                <Link
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
                      src="/assets/icons/chevron-down-16.svg"
                      alt=""
                      width={16}
                      height={16}
                      className="block size-[16px] transition-transform duration-200 group-hover:translate-y-[2px]"
                    />
                  )}
                </Link>
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
          {links.map((link) => (
            <li key={link.label} className="border-b border-stroke/70 last:border-b-0">
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between py-[14px] text-[16px] text-text-primary ${
                  link.active ? "font-bold" : "font-normal"
                }`}
              >
                {link.label}
                {link.hasChevron && (
                  <Image
                    src="/assets/icons/chevron-down-16.svg"
                    alt=""
                    width={16}
                    height={16}
                    className="block size-[16px]"
                  />
                )}
              </Link>
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
