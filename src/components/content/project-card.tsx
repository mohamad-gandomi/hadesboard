import Image from "next/image";

import { ProjectMetadata } from "@/components/content/project-metadata";
import { ProjectLinks } from "@/components/projects/project-links";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  reverse?: boolean;
  priority?: boolean;
};

export function ProjectCard({ project, reverse = false, priority = false }: ProjectCardProps) {
  return (
    <article className="group border-t border-line pt-5">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 font-mono text-[9px] tracking-[0.12em] text-body" dir="ltr">
        <span>PROJECT / {project.id}</span>
        <span>{project.category.toUpperCase()} / DESIGN</span>
        <span className="flex items-center gap-2">
          <span className="size-1.5 bg-accent" /> STATUS: CONCEPT
        </span>
      </div>
      <div className="grid gap-7 lg:grid-cols-[minmax(0,1.5fr)_minmax(18rem,.5fr)] lg:items-stretch lg:gap-10">
        <div className={`project-frame relative aspect-[16/10] overflow-hidden border border-line bg-surface ${reverse ? "lg:order-2" : ""}`}>
          <Image
            alt={project.image.alt}
            className="project-media object-cover"
            fill
            priority={priority}
            sizes="(max-width: 1024px) 100vw, 68vw"
            src={project.image.src}
          />
          <span className="absolute bottom-3 left-3 border border-line bg-canvas/90 px-2 py-1 font-mono text-[8px] text-body" dir="ltr">
            CONCEPT PROJECT
          </span>
        </div>
        <div className={`flex flex-col justify-between py-1 ${reverse ? "lg:order-1" : ""}`}>
          <div>
            <p className="text-xs text-muted">{project.categoryLabel}</p>
            <h3 className="type-project mt-4 font-medium text-ink">{project.title}</h3>
            <p className="mt-5 max-w-md leading-8 text-body">{project.description}</p>
          </div>
          <ProjectLinks className="mt-8" links={project.links} />
        </div>
      </div>
      <div className="mt-7"><ProjectMetadata category={project.categoryLabel} scope={project.services} year={project.year} /></div>
    </article>
  );
}
