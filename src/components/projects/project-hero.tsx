import Image from "next/image";

import { ProjectDetails } from "@/components/projects/project-details";
import { ProjectLinks } from "@/components/projects/project-links";
import { Container } from "@/components/ui/container";
import type { Project } from "@/data/projects";

type ProjectHeroProps = {
  project: Project;
};

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="pb-16 pt-14 sm:pb-24 sm:pt-20 lg:pt-28">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[9px] tracking-[0.12em] text-body" dir="ltr">
          <span>PROJECT / {project.id}</span>
          <span>{project.category.toUpperCase()} / CASE STUDY</span>
          <span className="flex items-center gap-2"><span className="size-1.5 bg-accent" />STATUS: CONCEPT</span>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,.36fr)] lg:items-end lg:gap-16">
          <div>
            <p className="text-sm text-accent">{project.categoryLabel}</p>
            <h1 className="type-project mt-4 text-balance font-medium text-ink">
              {project.title}
            </h1>
          </div>
          <div className="pb-2">
            <p className="max-w-xl text-pretty text-lg leading-9 text-body">{project.description}</p>
            <ProjectLinks className="mt-7" hideCaseStudy links={project.links} />
          </div>
        </div>

        <div className="mt-12 sm:mt-16">
          <ProjectDetails project={project} />
        </div>

        <figure className="relative mt-8 overflow-hidden border border-line bg-surface sm:mt-12">
          <Image
            alt={project.image.alt}
            className="h-auto w-full"
            height={project.image.height}
            priority
            sizes="100vw"
            src={project.image.src}
            width={project.image.width}
          />
          <figcaption className="absolute bottom-3 left-3 border border-line bg-canvas/90 px-2 py-1 font-mono text-[8px] text-body" dir="ltr">
            CONCEPT PROJECT / HERO
          </figcaption>
        </figure>
      </Container>
    </section>
  );
}
