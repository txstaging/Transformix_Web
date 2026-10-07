import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Reveal from "@/components/ui/Reveal";

export default function StartCta() {
  return (
    <section
      id="contact"
      className="relative w-full overflow-hidden bg-white px-[20px] py-[56px] md:px-[40px] lg:h-[453px] lg:px-0 lg:py-0"
    >
      <div className="pointer-events-none absolute left-0 top-0 h-full w-full lg:left-1/2 lg:top-[-55px] lg:h-[462px] lg:w-[1511px] lg:-translate-x-1/2">
        <Image
          src="/assets/images/cta-wave.png"
          alt=""
          fill
          sizes="(max-width: 1024px) 100vw, 1511px"
          className="object-cover"
          style={{ objectPosition: "center calc(50% - 4.74%)" }}
        />
      </div>

      <div className="relative mx-auto flex w-full max-w-[904px] flex-col items-center gap-[36px] lg:absolute lg:left-1/2 lg:top-[88px] lg:w-[904px] lg:-translate-x-1/2 lg:gap-[64px]">
        <Reveal className="flex w-full flex-col items-center gap-[12px] text-center lg:h-[184px] lg:gap-[16px]">
          <h2 className="w-full text-[24px] font-bold leading-snug text-primary sm:text-[28px] lg:h-[70px] lg:text-[32px] lg:leading-normal">
            لا تدع تفاصيل البداية توقف مشروعك
          </h2>
          <p className="w-full text-[16px] font-normal leading-relaxed text-black sm:text-[20px] lg:h-[98px] lg:text-[24px] lg:leading-normal">
            سواء كان لديك منتج جاهز أو مجرد فكرة، نرتب معك خطوات إنشاء المتجر
            ونبني تجربة بيع واضحة تسهّل عليك الإدارة وتسهّل على عملائك الشراء.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <PrimaryButton href="#contact">تواصل معنا</PrimaryButton>
        </Reveal>
      </div>
    </section>
  );
}
