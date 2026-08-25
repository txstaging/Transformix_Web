import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import { SITE_TYPES } from "@/lib/content";

function TypeCard({ type }: { type: (typeof SITE_TYPES)[number] }) {
  const filled = type.filled;

  return (
    <article
      className={`me-[20px] flex h-[420px] w-[300px] shrink-0 flex-col justify-between overflow-hidden rounded-[12px] p-[28px] transition-transform duration-400 ease-out hover:-translate-y-[8px] sm:me-[32px] sm:h-[480px] sm:w-[400px] sm:p-[40px] ${
        filled
          ? "bg-primary"
          : "border-[0.3px] border-stroke bg-bg-card shadow-card"
      }`}
    >
      <div className="flex w-full items-start justify-between">
        <span
          className={`text-right text-[52px] font-bold leading-normal sm:text-[65px] ${
            filled ? "text-text-inverse" : "text-primary"
          }`}
        >
          {type.number}
        </span>
        <span
          className="relative block shrink-0"
          style={{ width: type.iconWidth, height: type.iconHeight }}
        >
          <Image
            src={type.icon}
            alt=""
            fill
            sizes={`${type.iconWidth}px`}
            className="object-contain"
          />
        </span>
      </div>

      <div className="flex w-full flex-col gap-[12px]">
        <h3
          className={`text-right text-[20px] font-semibold leading-normal sm:text-[24px] ${
            filled ? "text-text-inverse" : "text-primary"
          }`}
        >
          {type.title}
        </h3>
        <p
          className={`w-full text-right text-[16px] font-normal leading-normal sm:text-[18px] ${
            filled ? "text-text-inverse" : "text-primary"
          }`}
        >
          {type.body}
        </p>
        <div className="flex justify-end">
          <span className="relative block size-[32px]">
            <Image
              src={
                filled
                  ? "/assets/icons/arrow-left-white.svg"
                  : "/assets/icons/arrow-left-blue.svg"
              }
              alt=""
              fill
              sizes="32px"
              className="object-contain"
            />
          </span>
        </div>
      </div>
    </article>
  );
}

export default function SiteTypes() {
  const rail = [...SITE_TYPES, ...SITE_TYPES];

  return (
    <section className="w-full bg-bg-main px-0 py-[56px] lg:h-[906px] lg:py-0">
      <div className="mx-auto flex w-full max-w-[1240px] flex-col items-center gap-[32px] lg:w-[1240px] lg:gap-[56px] lg:pt-[88px]">
        <Reveal className="flex w-full flex-col gap-[18px] px-[20px] text-center md:px-[40px] lg:w-[913px] lg:gap-[32px] lg:px-0">
          <h2 className="w-full text-[26px] font-bold leading-snug text-black sm:text-[32px] lg:h-[60px] lg:leading-normal">
            نطوّر الموقع المناسب لطبيعة أعمالك
          </h2>
          <p className="w-full text-[16px] font-normal leading-relaxed text-black sm:text-[20px] lg:h-[85px] lg:text-[24px] lg:leading-normal">
            لا يوجد قالب واحد يناسب جميع المشروعات، لذلك نحدد نوع الموقع وبنيته
            وفقًا للهدف والوظائف المطلوبة.
          </p>
        </Reveal>

        <div className="marquee-viewport w-full overflow-hidden lg:h-[533px]">
          <div
            className="marquee-track items-center py-[26px]"
            data-direction="rtl"
            style={{ "--marquee-duration": "48s" } as React.CSSProperties}
          >
            {rail.map((type, index) => (
              <TypeCard key={`${type.number}-${index}`} type={type} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
