import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Reveal from "@/components/ui/Reveal";

export default function BigCta() {
  return (
    <section className="flex w-full flex-col items-center bg-bg-main px-[20px] py-[56px] md:px-[40px] lg:px-0 lg:pb-[70px] lg:pt-0">
      <div className="flex w-full flex-col items-center gap-[32px] lg:gap-[55px]">
        <div className="flex w-full flex-col items-center lg:pt-[50px]">
          <div className="flex w-full max-w-[992.188px] flex-col items-center">
            <Reveal className="flex w-full flex-col items-center gap-[16px] text-center lg:h-[322px] lg:pb-[92px]">
              <h2 className="w-full text-[28px] font-semibold leading-snug text-text-primary sm:text-[36px] lg:h-[81px] lg:w-[825px] lg:text-[48px] lg:leading-normal">
                فكرتك تستحق أن تظهر بأفضل صورة
              </h2>
              <p className="w-full text-[17px] font-medium leading-relaxed text-text-secondary sm:text-[22px] lg:w-[1060px] lg:max-w-none lg:text-[32px] lg:leading-normal">
                من أول فكرة إلى الإطلاق، نصنع معك هوية وتجربة ومحتوى يعبر عن
                علامتك ويصنع أثرًا حقيقيًا.
              </p>
            </Reveal>
            <Reveal delay={120} className="lg:-mt-[52px]">
              <PrimaryButton href="#contact">استكشف المزيد</PrimaryButton>
            </Reveal>
          </div>
        </div>

        <Reveal delay={180} className="w-full">
          <div className="relative mx-auto aspect-[720/528] w-full max-w-[720px] lg:h-[528px] lg:w-[720px]">
            <div className="spin-3d-slow relative h-full w-full">
              <Image
                src="/assets/images/spin-3d-export.png"
                alt="علامة Transformix"
                fill
                sizes="(max-width: 1024px) 90vw, 720px"
                className="object-contain"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
