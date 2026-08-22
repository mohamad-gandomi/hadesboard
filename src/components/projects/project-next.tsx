import Link from "next/link";

import { ArrowIcon } from "@/components/ui/arrow-icon";
import { Container } from "@/components/ui/container";
import type { Project } from "@/data/projects";

type ProjectNextProps = {
  project: Project;
};

export function ProjectNext({ project }: ProjectNextProps) {
  return (
    <section className="border-y border-line bg-ink text-canvas">
      <Container>
        <Link className="focus-ring group grid gap-8 py-16 sm:py-24 lg:grid-cols-[1fr_auto] lg:items-end" href={`/projects/${project.slug}`}>
          <div>
            <p className="font-sans text-[10px] tracking-[.12em] text-canvas/60" dir="rtl">پروژه بعدی / {project.id}</p>
            <p className="mt-5 text-sm text-canvas/60">پروژه بعدی</p>
            <h2 className="type-project mt-3 font-medium">{project.title}</h2>
          </div>
          <ArrowIcon className="size-12 rotate-180 text-accent transition-transform group-hover:-translate-x-2 sm:size-16" />
        </Link>
      </Container>
    </section>
  );
}
