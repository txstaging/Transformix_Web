import Hero from "@/components/sections/Hero";
import BrandMarquee from "@/components/sections/BrandMarquee";
import Services from "@/components/sections/Services";
import StartCta from "@/components/sections/StartCta";
import SiteTypes from "@/components/sections/SiteTypes";
import StorePlatforms from "@/components/sections/StorePlatforms";
import Portfolio from "@/components/sections/Portfolio";
import BigCta from "@/components/sections/BigCta";
import Testimonials from "@/components/sections/Testimonials";
import SiteFooter from "@/components/sections/SiteFooter";

export default function Home() {
  return (
    <main className="design-canvas overflow-x-hidden bg-bg-main">
      <Hero />
      <BrandMarquee />
      <div className="flex w-full flex-col lg:gap-[66px]">
        <Services />
        <StartCta />
        <SiteTypes />
        <StorePlatforms />
        <Portfolio />
        <BigCta />
        <Testimonials />
        <SiteFooter />
      </div>
    </main>
  );
}
