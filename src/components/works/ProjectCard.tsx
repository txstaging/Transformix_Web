import Image from "next/image";
import type { CSSProperties } from "react";
import type { Project } from "@/lib/works-content";

const COLUMN_WIDTH = 604;

type ProjectCardProps = {
  project: Project;
  preload?: boolean;
  /** Heading tag for the title; h3 where the card sits under a section h2. */
  titleAs?: "h2" | "h3";
  /** The homepage preview cards have no arrow link. */
  showArrow?: boolean;
};

export default function ProjectCard({
  project,
  preload = false,
  titleAs: Title = "h2",
  showArrow = true,
}: ProjectCardProps) {
  const { mediaWidth, mediaHeight, inner } = project;

  return (
    <article
      className="group flex w-full flex-col lg:h-[603px] lg:w-[604px]"
      style={
        {
          "--arrow-top": `${project.arrowTop}px`,
          "--tags-right": `${project.tagsRight ?? 0}px`,
        } as CSSProperties
      }
    >
      <div
        className="relative mr-auto shrink-0 overflow-hidden"
        style={{
          width: `${(mediaWidth / COLUMN_WIDTH) * 100}%`,
          aspectRatio: `${mediaWidth} / ${mediaHeight}`,
        }}
      >
        <div className="absolute" style={inner ?? { inset: 0 }}>
          <Image
            src={project.image}
            alt={project.title}
            fill
            preload={preload}
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 616px"
            className="object-cover transition-transform duration-600 ease-out group-hover:scale-[1.03]"
          />
        </div>
      </div>

      <div className="relative flex flex-col gap-[16px] pt-[16px] lg:h-[141px] lg:gap-0 lg:pt-0">
        <Title
          dir="auto"
          className="w-full text-right text-[20px] font-normal leading-[normal] text-text-primary sm:text-[24px] lg:absolute lg:right-0 lg:top-[10px]"
        >
          {project.title}
        </Title>

        <div className="flex items-start justify-between gap-[16px]">
          <ul className="flex flex-wrap gap-[8px] sm:gap-[12px] lg:absolute lg:right-[var(--tags-right)] lg:top-[70px] lg:flex-nowrap">
            {project.tags.map((tag) => (
              <li
                key={tag.label}
                dir="auto"
                className="flex h-[36px] items-center justify-center whitespace-nowrap rounded-[5px] border border-primary px-[14px] text-center text-[13px] font-normal leading-[normal] text-primary sm:h-[41px] sm:text-[14px] lg:w-[var(--tag-width)] lg:px-0"
                style={
                  {
                    "--tag-width": `${tag.width}px`,
                    "--tag-shift": `${tag.shiftX ?? 0}px`,
                  } as CSSProperties
                }
              >
                <span className="lg:translate-x-[var(--tag-shift)]">{tag.label}</span>
              </li>
            ))}
          </ul>

          {showArrow && (
            <a
              href={project.href}
              aria-label={`عرض مشروع ${project.title}`}
              className="relative block size-[40px] shrink-0 transition-transform duration-300 group-hover:-translate-x-[6px] lg:absolute lg:left-0 lg:top-[var(--arrow-top)] lg:size-[46px]"
            >
              <Image
                src="/assets/icons/circle-arrow-left-46.svg"
                alt=""
                width={46}
                height={46}
                className="block size-full"
              />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
