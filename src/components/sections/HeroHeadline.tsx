import { HERO_CONTENT } from "@/lib/content";

export default function HeroHeadline() {
  return (
    <div className="flex w-full flex-col items-center gap-[16px] text-center lg:gap-[20px]">
      <h1 className="w-full text-[26px] font-semibold leading-snug text-black sm:text-[32px] lg:text-[40px]">
        {HERO_CONTENT.title}
      </h1>
      <p className="w-full max-w-[640px] text-[15px] font-normal leading-[1.9] text-text-secondary sm:text-[17px] lg:text-[18px]">
        {HERO_CONTENT.body}
      </p>
    </div>
  );
}
