import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { TESTIMONIALS } from "@/lib/content";

export default function Testimonials() {
  return (
    <section className="w-full bg-bg-main px-[20px] py-[48px] md:px-[40px] lg:px-0 lg:py-[49px]">
      <div className="flex w-full flex-col items-center gap-[40px] lg:gap-[73px]">
        <Reveal>
          <h2 className="text-center font-tajawal text-[28px] font-bold leading-[1.2] text-gray-900 sm:text-[34px] lg:h-[48px] lg:text-[42px] lg:leading-[48px]">
            تجارب حقيقية مع حلول AI تصنع فرقًا
          </h2>
        </Reveal>

        <div className="hidden lg:block">
          <div className="relative h-[453px] w-[1220px]">
            <div className="absolute left-[229px] top-0 h-[389px] w-[762px] bg-primary" />

            <div className="absolute left-0 top-[40px] flex items-start gap-[37px]">
              {TESTIMONIALS.map((item, index) => (
                <Reveal key={index} delay={index * 110}>
                  <div
                    className={`relative h-[300px] w-[382px] rounded-[8px] bg-white ${
                      item.shadow ? "shadow-testimonial" : ""
                    }`}
                  >
                    <div className="absolute left-[258px] top-[28px] h-[16px] w-[96px]">
                      <Image src="/assets/icons/stars.svg" alt="5 من 5" fill sizes="96px" />
                    </div>
                    <p className="absolute left-[29px] top-[78px] w-[325px] text-right font-tajawal text-[18px] font-normal leading-[28px] text-gray-900">
                      {item.quote}
                    </p>
                    <p className="absolute left-[207px] top-[218px] whitespace-nowrap font-jakarta text-[16px] font-bold leading-[28px] text-gray-900">
                      {item.name}
                    </p>
                    <p className="absolute left-[201px] top-[250px] whitespace-nowrap font-jakarta text-[14px] font-normal leading-[22px] text-gray-600">
                      {item.role}
                    </p>
                    <div className="absolute left-[311px] top-[224px] size-[43px]">
                      <Image src="/assets/images/avatar.png" alt="" fill sizes="43px" className="rounded-full object-cover" />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <a
              href="#"
              className="group absolute left-[519px] top-[417px] flex w-[183px] flex-col items-center"
            >
              <span className="font-tajawal text-[16px] font-bold leading-[28px] text-gray-900">
                رؤية جميع الاراء
              </span>
              <span className="mt-[6px] block h-px w-full origin-center scale-x-100 bg-gray-900 transition-transform duration-300 group-hover:scale-x-[0.6]" />
            </a>
          </div>
        </div>

        <div className="relative w-full lg:hidden">
          <div className="absolute inset-x-0 top-[24px] bottom-[24px] bg-primary" />
          <div className="relative grid w-full grid-cols-1 place-items-center gap-[24px] p-[24px] py-[48px] sm:grid-cols-2">
            {TESTIMONIALS.map((item, index) => (
              <Reveal key={index} delay={index * 110} className="w-full sm:max-w-[382px]">
                <div
                  className={`flex w-full flex-col rounded-[8px] bg-white p-[24px] ${
                    item.shadow ? "shadow-testimonial" : ""
                  }`}
                >
                  <div className="relative mb-[16px] h-[16px] w-[96px] self-start">
                    <Image src="/assets/icons/stars.svg" alt="5 من 5" fill sizes="96px" />
                  </div>
                  <p className="text-right font-tajawal text-[16px] font-normal leading-[26px] text-gray-900">
                    {item.quote}
                  </p>
                  <div className="mt-[20px] flex items-center justify-end gap-[12px]">
                    <div className="flex flex-col items-end">
                      <span className="font-jakarta text-[16px] font-bold leading-[24px] text-gray-900">
                        {item.name}
                      </span>
                      <span className="font-jakarta text-[14px] font-normal leading-[20px] text-gray-600">
                        {item.role}
                      </span>
                    </div>
                    <div className="relative size-[43px] shrink-0">
                      <Image src="/assets/images/avatar.png" alt="" fill sizes="43px" className="rounded-full object-cover" />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <a href="#" className="relative mx-auto mt-[8px] flex w-[183px] flex-col items-center">
            <span className="font-tajawal text-[16px] font-bold leading-[28px] text-gray-900">
              رؤية جميع الاراء
            </span>
            <span className="mt-[6px] block h-px w-full bg-gray-900" />
          </a>
        </div>
      </div>
    </section>
  );
}
