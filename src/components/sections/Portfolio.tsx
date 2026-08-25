import Image from "next/image";
import PrimaryButton from "@/components/ui/PrimaryButton";
import Reveal from "@/components/ui/Reveal";
import { WORK_LEFT, WORK_RIGHT, type WorkEntry } from "@/lib/content";

function WorkCard({ entry }: { entry: WorkEntry }) {
  return (
    <article className="group flex w-full flex-col gap-[24px]">
      <div className="flex w-full flex-col gap-[24px] lg:gap-[32px]">
        <div className="flex w-full flex-col gap-[13px] lg:w-[510px] lg:self-start">
          <h3
            className={`text-right text-[22px] leading-snug text-black sm:text-[26px] lg:text-[32px] lg:leading-normal ${
              entry.titleWeight === "bold" ? "font-bold" : "font-semibold"
            } ${entry.wideTitle ? "lg:w-[537px]" : ""}`}
          >
            {entry.title}
          </h3>
          <p className="text-right text-[15px] font-normal leading-relaxed text-black sm:text-[18px] lg:w-[485px] lg:leading-normal">
            {entry.body}
          </p>
        </div>

        <div
          className="relative w-full self-start overflow-hidden"
          style={{
            aspectRatio: entry.mediaAspect,
            maxWidth: entry.mediaWidth ? `${entry.mediaWidth}px` : undefined,
          }}
        >
          <div
            className="absolute"
            style={
              entry.inner
                ? {
                    width: entry.inner.width,
                    height: entry.inner.height,
                    left: entry.inner.left,
                    top: entry.inner.top,
                  }
                : { inset: 0 }
            }
          >
            <Image
              src={entry.image}
              alt={entry.title}
              fill
              sizes="(max-width: 1024px) 100vw, 585px"
              className="object-cover transition-transform duration-600 ease-out group-hover:scale-[1.03]"
            />
          </div>
        </div>
      </div>

      <div className="flex w-full items-center justify-between gap-[16px]">
        <div className="flex flex-wrap items-center gap-[10px] lg:gap-[14px]">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="flex h-[30.156px] items-center rounded-[1.984px] bg-chip px-[11.906px] py-[3.969px] text-[14px] font-normal leading-normal text-black"
            >
              {tag}
            </span>
          ))}
        </div>
        <span className="relative block size-[38px] shrink-0 transition-transform duration-300 group-hover:-translate-x-[6px] lg:size-[46px]">
          <Image
            src="/assets/icons/arrow-left-46-outline.svg"
            alt=""
            fill
            sizes="46px"
            className="object-contain"
          />
        </span>
      </div>
    </article>
  );
}

export default function Portfolio() {
  return (
    <section id="work" className="w-full bg-white px-[20px] py-[56px] md:px-[40px] lg:px-0 lg:py-[86px]">
      <div className="mx-auto flex w-full max-w-[1076px] flex-col items-center gap-[24px] lg:gap-[32px]">
        <Reveal className="flex w-full flex-col items-center gap-[16px] text-center">
          <h2 className="w-full text-[26px] font-bold leading-snug text-black sm:text-[32px] lg:leading-normal">
            مواقع طوّرناها لتعمل لأهداف حقيقية
          </h2>
          <p className="w-full text-[16px] font-normal leading-relaxed text-black sm:text-[20px] lg:w-[1002px] lg:text-[24px] lg:leading-normal">
            مشاريع رقمية جمعنا فيها بين التخطيط، تجربة المستخدم والتطوير لبناء
            مواقع أوضح، أسرع، وأسهل في الإدارة.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <PrimaryButton href="#contact">استكشف المزيد</PrimaryButton>
        </Reveal>
      </div>

      <div className="mx-auto mt-[48px] flex w-full max-w-[1217px] flex-col gap-[56px] lg:mt-[66px] lg:max-w-[1454px] lg:flex-row lg:items-start lg:justify-between lg:gap-[75px] lg:pl-[100px] lg:pr-[137px]">
        <div className="flex w-full flex-col gap-[56px] lg:w-[557px] lg:gap-[100px]">
          {WORK_RIGHT.map((entry, index) => (
            <Reveal key={entry.title} delay={index * 100}>
              <WorkCard entry={entry} />
            </Reveal>
          ))}
        </div>
        <div className="flex w-full flex-col gap-[56px] lg:w-[585px] lg:gap-[100px]">
          {WORK_LEFT.map((entry, index) => (
            <Reveal key={entry.title} delay={index * 100}>
              <WorkCard entry={entry} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
