import type { Metadata } from "next";
import SiteHeader from "@/components/sections/SiteHeader";
import WorksHero from "@/components/works/WorksHero";
import ProjectsGrid from "@/components/works/ProjectsGrid";
import SiteFooter from "@/components/sections/SiteFooter";
import { WORKS_NAV_LINKS } from "@/lib/works-content";

export const metadata: Metadata = {
  title: "أعمالنا — Transformix",
  description:
    "كيف حوّلنا احتياجات المشروع إلى تجربة رقمية واضحة، مرنة وقابلة للتوسع.",
};

export default function WorksPage() {
  return (
    <main className="design-canvas-1440 overflow-x-hidden bg-bg-main">
      <SiteHeader
        links={WORKS_NAV_LINKS}
        containerClassName="max-w-[1440px] lg:pl-[93px] lg:pr-[147px]"
        logoClassName="lg:translate-x-[35.14px] lg:-translate-y-[3.82px]"
      />
      <WorksHero />
      <ProjectsGrid />
      <SiteFooter variant="works" id="contact" />
    </main>
  );
}
