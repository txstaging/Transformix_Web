import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Reveal from "@/components/ui/Reveal";
import { SERVICES, type ServiceCard } from "@/lib/content";

function Card({ card }: { card: ServiceCard }) {
  return (
    <article className="group relative w-full overflow-hidden rounded-[16px] border-[0.3px] border-primary bg-white transition-[transform,box-shadow] duration-400 ease-out hover:-translate-y-[6px] hover:shadow-[0_18px_40px_-18px_rgba(28,68,153,0.35)] lg:h-[328px] lg:w-[391px]">
      <div className="hidden lg:block lg:h-full lg:w-full">
        <h3 className="absolute right-[32.82px] top-[15.7px] whitespace-nowrap text-[18px] font-semibold leading-normal text-heading">
          {card.title}
        </h3>
        <p className="absolute right-[33.3px] top-[60.7px] h-[92px] w-[327px] text-right text-[14px] font-normal leading-[1.55] text-text-secondary">
          {card.body}
          <span className="text-primary">{card.more}</span>
        </p>
        <div
          className="absolute overflow-hidden transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          style={{
            left: `${card.imageLeft}px`,
            top: `${card.imageTop}px`,
            width: `${card.imageWidth}px`,
            height: `${card.imageHeight}px`,
          }}
        >
          <div
            className="absolute"
            style={
              card.crop
                ? {
                    width: card.crop.width,
                    height: card.crop.height,
                    left: card.crop.left,
                    top: card.crop.top,
                  }
                : { inset: 0 }
            }
          >
            <Image
              src={card.image}
              alt=""
              fill
              sizes={`${Math.ceil(card.imageWidth)}px`}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col px-[31px] py-[15px] lg:hidden">
        <h3 className="text-right text-[18px] font-semibold leading-normal text-heading">
          {card.title}
        </h3>
        <p className="mt-[16px] text-right text-[14px] font-normal leading-[1.55] text-text-secondary">
          {card.body}
          <span className="text-primary">{card.more}</span>
        </p>
        <div className="mt-[18px] flex justify-center">
          <div
            className="relative w-full"
            style={{ maxWidth: card.imageWidth, aspectRatio: `${card.imageWidth}/${card.imageHeight}` }}
          >
            <Image
              src={card.image}
              alt=""
              fill
              sizes="(max-width: 640px) 70vw, 230px"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="w-full bg-white px-[20px] py-[64px] md:px-[40px] lg:flex lg:flex-col lg:items-center lg:px-[100px] lg:pb-[24px] lg:pt-[100px]"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-[40px] lg:w-[1240px] lg:gap-[54px]">
        <div className="flex w-full flex-col items-center">
          <div className="flex w-full flex-col items-center gap-[28px] lg:w-[913px] lg:gap-[40px]">
            <Reveal className="flex w-full flex-col gap-[18px] text-center lg:gap-[32px]">
              <h2 className="w-full text-[26px] font-bold leading-snug text-black sm:text-[32px] lg:h-[60px] lg:leading-normal">
                خدمات تطوير تدعم نمو أعمالك
              </h2>
              <p className="w-full text-[16px] font-normal leading-relaxed text-black sm:text-[20px] lg:h-[85px] lg:text-[24px] lg:leading-normal">
                نصمم ونطوّر مواقع ومتاجر إلكترونية تجمع بين الأداء، سهولة
                الاستخدام، والتقنيات المناسبة لاحتياجات مشروعك.
              </p>
            </Reveal>
            <Reveal delay={120}>
              <PrimaryButton href="#work">استكشف المزيد</PrimaryButton>
            </Reveal>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-[24px] lg:gap-[40px]">
          <div className="grid w-full grid-cols-1 justify-items-center gap-[24px] sm:grid-cols-2 lg:flex lg:items-center lg:justify-center lg:gap-[30px]">
            {SERVICES.slice(0, 3).map((card, index) => (
              <Reveal key={card.title} delay={index * 90} className="w-full sm:max-w-[391px]">
                <Card card={card} />
              </Reveal>
            ))}
          </div>
          <div className="grid w-full grid-cols-1 justify-items-center gap-[24px] sm:grid-cols-2 lg:flex lg:items-center lg:justify-center lg:gap-[30px]">
            {SERVICES.slice(3).map((card, index) => (
              <Reveal key={card.title} delay={index * 90} className="w-full sm:max-w-[391px]">
                <Card card={card} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
