import PrimaryButton from "@/components/ui/PrimaryButton";
import Reveal from "@/components/ui/Reveal";

export default function WorksHero() {
  return (
    <section className="w-full px-[20px] pt-[40px] md:px-[40px] lg:px-0 lg:pt-[66px]">
      <Reveal className="mx-auto flex w-full max-w-[837px] flex-col items-center gap-[28px] lg:w-[837px] lg:-translate-x-[8.5px] lg:gap-[32px]">
        <div className="flex w-full flex-col items-center gap-[16px] text-center leading-[normal] lg:gap-[24px]">
          <h1 className="w-full text-[26px] font-medium leading-[normal] text-primary sm:text-[32px] lg:h-[68px] lg:text-[40px]">
            من الفكرة إلى تجربة رقمية متكاملة
          </h1>
          <p className="w-full max-w-[770px] text-[16px] font-normal leading-[normal] text-text-secondary sm:text-[18px] lg:h-[50px] lg:w-[770px]">
            كيف حوّلنا احتياجات المشروع إلى تجربة رقمية واضحة، مرنة وقابلة
            للتوسع.
          </p>
        </div>
        <PrimaryButton href="#contact" labelOffsetX={1.84}>
          تواصل معنا
        </PrimaryButton>
      </Reveal>
    </section>
  );
}
