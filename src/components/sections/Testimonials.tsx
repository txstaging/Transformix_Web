import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { TESTIMONIALS, type Testimonial } from "@/lib/content";

function TestimonialAvatar({ item }: { item: Testimonial }) {
  if (item.avatarKind === "photo") {
    return (
      <div className="relative size-[43px] shrink-0">
        <Image
          src={item.avatar}
          alt=""
          fill
          sizes="43px"
          className="rounded-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className="relative shrink-0"
      style={{ width: item.avatarSize, height: item.avatarSize }}
    >
      <Image
        src={item.avatar}
        alt=""
        fill
        sizes={`${item.avatarSize}px`}
        className="object-contain"
      />
    </div>
  );
}

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <div
      className={`flex h-full w-full flex-col rounded-[8px] bg-white p-[24px] lg:px-[28px] lg:pb-[30px] lg:pt-[32px] ${
        item.shadow ? "shadow-testimonial" : ""
      }`}
    >
      <div className="relative h-[16px] w-[96px] shrink-0 self-start">
        <Image src="/assets/icons/stars.svg" alt="5 من 5" fill sizes="96px" />
      </div>

      <p className="mt-[20px] text-right font-tajawal text-[15px] font-normal leading-[26px] text-gray-900 lg:mt-[36px] lg:leading-[24px]">
        {item.quote}
      </p>

      <div className="mt-auto flex items-center gap-[10px] pt-[20px] lg:pt-[24px]">
        <TestimonialAvatar item={item} />
        <div className="flex flex-col items-start">
          <span className="font-tajawal text-[17px] font-medium leading-[26px] text-gray-900">
            {item.name}
          </span>
          {item.role && (
            <span className="font-tajawal text-[14px] font-normal leading-[20px] text-gray-600">
              {item.role}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

function SeeAllLink() {
  return (
    <a href="#" className="group mx-auto flex w-[183px] flex-col items-center">
      {/* <span className="font-tajawal text-[16px] font-bold leading-[28px] text-gray-900">
        رؤية جميع الاراء
      </span> */}
      {/* <span className="mt-[6px] block h-px w-full origin-center scale-x-100 bg-gray-900 transition-transform duration-300 group-hover:scale-x-[0.6]" /> */}
    </a>
  );
}

export default function Testimonials() {
  return (
    <section className="w-full bg-bg-main px-[20px] py-[48px] md:px-[40px] lg:px-0 lg:py-[49px]">
      <div className="flex w-full flex-col items-center gap-[40px] lg:gap-[73px]">
        <Reveal>
          <h2 className="text-center font-tajawal text-[28px] font-bold leading-[1.2] text-gray-900 sm:text-[34px] lg:h-[48px] lg:text-[42px] lg:leading-[48px]">
            تجارب حقيقية مع حلول AI تصنع فرقًا
          </h2>
        </Reveal>

        <div className="hidden flex-col gap-[28px] lg:flex">
          <div className="relative w-[1220px]">
            <div className="absolute inset-y-0 left-[229px] right-[229px] bg-primary" />

            <div className="relative flex items-stretch gap-[37px] pb-[46px] pt-[26px]">
              {TESTIMONIALS.map((item, index) => (
                <Reveal key={index} delay={index * 110} className="w-[382px]">
                  <TestimonialCard item={item} />
                </Reveal>
              ))}
            </div>
          </div>

          <SeeAllLink />
        </div>

        <div className="relative w-full lg:hidden">
          <div className="absolute inset-x-0 top-[24px] bottom-0 bg-primary" />
          <div className="relative grid w-full grid-cols-1 place-items-stretch gap-[24px] px-[24px] pb-[40px] pt-[48px] sm:grid-cols-2">
            {TESTIMONIALS.map((item, index) => (
              <Reveal
                key={index}
                delay={index * 110}
                className="mx-auto w-full sm:max-w-[382px]"
              >
                <TestimonialCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
