import PrimaryButton from "@/components/ui/PrimaryButton";
import Reveal from "@/components/ui/Reveal";
import SiteHeader from "@/components/sections/SiteHeader";
import HeroHeadline from "@/components/sections/HeroHeadline";

const HERO_VIDEO_SRC =
  "/Video/0_Clean_Website_Promo_Website_Promo_1280x720.mp4";
const HERO_VIDEO_POSTER = "/assets/images/hero-video-poster.png";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <SiteHeader />

      <div className="relative mx-auto w-full max-w-[1454px] lg:h-[887px]">
        <div className="flex w-full flex-col items-center gap-[28px] px-[20px] pt-[40px] md:px-[40px] lg:absolute lg:left-[230px] lg:top-[81px] lg:w-[1029px] lg:gap-[40px] lg:px-0 lg:pt-0">
          <HeroHeadline />
          <Reveal delay={120}>
            <PrimaryButton href="#services">استكشف المزيد</PrimaryButton>
          </Reveal>
        </div>

        <Reveal
          delay={200}
          className="mt-[40px] w-full px-[20px] md:px-[40px] lg:absolute lg:left-[141px] lg:top-[342px] lg:mt-0 lg:h-[538px] lg:w-[1166px] lg:px-0"
        >
          <div className="relative aspect-[1166/538] w-full overflow-hidden bg-white lg:h-[538px] lg:w-[1166px]">
            <video
              className="absolute inset-0 h-full w-full object-cover"
              poster={HERO_VIDEO_POSTER}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-label="عرض ترويجي لموقع Transformix"
            >
              <source src={HERO_VIDEO_SRC} type="video/mp4" />
              متصفحك لا يدعم تشغيل الفيديو.
            </video>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
