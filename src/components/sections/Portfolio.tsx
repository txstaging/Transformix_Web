import PrimaryButton from "@/components/ui/PrimaryButton";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/works/ProjectCard";
import { HOME_PROJECT_ROWS } from "@/lib/works-content";

export default function Portfolio() {
  return (
    <section
      id="work"
      className="w-full bg-white px-[20px] py-[56px] md:px-[40px] lg:px-[100px] lg:pb-[65px] lg:pt-[86px]"
    >
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
          <PrimaryButton href="/works">استكشف المزيد</PrimaryButton>
        </Reveal>
      </div>

      <div className="mx-auto mt-[48px] flex w-full max-w-[1240px] flex-col gap-[48px] lg:mt-[119px] lg:gap-[51px]">
        {HOME_PROJECT_ROWS.map((row) => (
          <div
            key={row[0].title}
            className="grid grid-cols-1 gap-[48px] md:grid-cols-2 md:gap-[24px] lg:grid-cols-[604px_604px] lg:gap-[32px]"
          >
            {row.map((project, index) => (
              <Reveal key={project.title} delay={index * 100}>
                <ProjectCard project={project} titleAs="h3" showArrow={false} />
              </Reveal>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
