import ProjectCard from "@/components/works/ProjectCard";
import Reveal from "@/components/ui/Reveal";
import { PROJECT_ROWS } from "@/lib/works-content";

// Desktop spacing above each row, as laid out in the design.
const ROW_OFFSETS = ["", "lg:mt-[51px]", "lg:mt-[48px]"];

export default function ProjectsGrid() {
  return (
    <section
      id="work"
      className="w-full px-[20px] pb-[64px] pt-[48px] md:px-[40px] lg:px-[100px] lg:pb-[155px] lg:pt-[93px]"
    >
      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-[48px] lg:gap-0">
        {PROJECT_ROWS.map((row, rowIndex) => (
          <div
            key={row[0].title}
            className={`grid grid-cols-1 gap-[48px] md:grid-cols-2 md:gap-[24px] lg:grid-cols-[604px_604px] lg:gap-[32px] ${ROW_OFFSETS[rowIndex] ?? ""}`}
          >
            {row.map((project, index) => (
              <Reveal key={project.title} delay={index * 100}>
                <ProjectCard project={project} preload={rowIndex === 0} />
              </Reveal>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
