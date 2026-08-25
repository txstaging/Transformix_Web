import Image from "next/image";
import { FOOTER_LINKS, FOOTER_SOCIALS } from "@/lib/content";

const CONTACT_ROWS = [
  { icon: "/assets/icons/mail.svg", value: "xxxxxxxxx", label: "البريد الإلكتروني" },
  { icon: "/assets/icons/phone.svg", value: "xxxxxxxxx", label: "رقم الهاتف" },
];

function LinksColumn() {
  return (
    <div className="flex w-full flex-col gap-[16px] text-right lg:w-[234px]">
      <h3 className="font-tajawal text-[18px] font-bold leading-[1.6] text-white lg:h-[21px]">
        الروابط سريعة
      </h3>
      <ul className="flex flex-col gap-[8px] font-tajawal text-[18px] font-normal leading-[1.6] text-white-normal opacity-90">
        {FOOTER_LINKS.map((link) => (
          <li key={link} className="lg:h-[20px]">
            <a href="#" className="transition-opacity duration-200 hover:opacity-70">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactColumn() {
  return (
    <div className="flex w-full flex-col gap-[16px] text-right lg:w-[136px]">
      <h3 className="font-tajawal text-[18px] font-bold leading-[1.6] text-white lg:h-[21px]">
        تواصل معنا{" "}
      </h3>
      <div className="flex flex-col gap-[13px] pb-[8px] pl-[8px]">
        {CONTACT_ROWS.map((row) => (
          <a
            key={row.label}
            href="#"
            aria-label={row.label}
            className="flex items-center justify-end gap-[8px] transition-opacity duration-200 hover:opacity-70"
          >
            <span className="relative block size-[20px] shrink-0">
              <Image src={row.icon} alt="" fill sizes="20px" />
            </span>
            <span className="font-tajawal text-[18px] font-normal leading-[1.6] text-white-normal">
              {row.value}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

function SocialColumn() {
  const socials = [...FOOTER_SOCIALS].reverse();

  return (
    <div className="flex w-full flex-col items-center gap-[16px] lg:w-[122px]">
      <div className="flex w-full flex-col lg:w-[88px]">
        <h3 className="text-right font-tajawal text-[18px] font-bold leading-[1.6] text-white lg:h-[21px]">
          تابعنا على
        </h3>
      </div>
      <div className="flex w-full items-center justify-center gap-[25px] lg:justify-start">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            aria-label={social.name}
            className="relative block size-[24px] shrink-0 transition-transform duration-200 hover:-translate-y-[3px]"
          >
            <Image src={social.icon} alt="" fill sizes="24px" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="relative w-full overflow-hidden bg-navy">
      <div className="relative mx-auto hidden h-[335px] w-full max-w-[1454px] lg:block">
        <div className="absolute left-[294.07px] top-[78px] flex w-[762px] items-start gap-[135px]">
          <LinksColumn />
          <ContactColumn />
          <SocialColumn />
        </div>

        <div className="absolute left-[1213.6px] top-[71px] h-[85px] w-[134.55px]">
          <Image
            src="/assets/logo/logo-white.svg"
            alt="Transformix"
            fill
            sizes="135px"
            className="object-contain"
          />
        </div>

        <p className="absolute left-[1159.93px] top-[192.5px] w-[187px] -translate-y-1/2 text-right font-tajawal text-[18px] font-normal leading-[1.6] text-white-normal">
          دليلك الذكي لنمو شركتك
        </p>

        <div className="absolute left-[94px] top-[250px] h-px w-[1241px] bg-white/20" />

        <p className="absolute left-[664.07px] top-[290px] w-[200px] -translate-y-1/2 text-right font-tajawal text-[14px] font-normal leading-[1.6] text-white">
          جمع الحقوق محفوظة Transformix{" "}
        </p>
      </div>

      <div className="flex w-full flex-col gap-[32px] px-[20px] py-[40px] md:px-[40px] lg:hidden">
        <div className="flex flex-col items-end gap-[12px]">
          <div className="relative h-[64px] w-[101px]">
            <Image
              src="/assets/logo/logo-white.svg"
              alt="Transformix"
              fill
              sizes="101px"
              className="object-contain"
            />
          </div>
          <p className="text-right font-tajawal text-[16px] font-normal leading-[1.6] text-white-normal">
            دليلك الذكي لنمو شركتك
          </p>
        </div>

        <div className="grid grid-cols-1 gap-[28px] sm:grid-cols-3">
          <LinksColumn />
          <ContactColumn />
          <SocialColumn />
        </div>

        <div className="h-px w-full bg-white/20" />

        <p className="text-center font-tajawal text-[14px] font-normal leading-[1.6] text-white">
          جمع الحقوق محفوظة Transformix{" "}
        </p>
      </div>
    </footer>
  );
}
