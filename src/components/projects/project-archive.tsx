"use client";

import { useState } from "react";

import { ProjectCard } from "@/components/content/project-card";
import { Container } from "@/components/ui/container";
import { getProjectsByCategory, projectCategories, type ProjectCategory } from "@/data/projects";

export function ProjectArchive() {
  const [category, setCategory] = useState<ProjectCategory>();
  const visibleProjects = getProjectsByCategory(category);

  return (
    <>
      <Container>
        <nav aria-label="دسته‌بندی پروژه‌ها" className="mt-14 overflow-x-auto border-y border-line [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-20 sm:overflow-visible">
          <ul className="flex w-max min-w-full flex-nowrap items-center gap-x-6 py-2 text-sm sm:w-auto sm:min-w-0 sm:flex-wrap sm:gap-x-8 sm:gap-y-1 sm:py-4">
            <li>
              <button
                aria-pressed={!category}
                className={`focus-ring inline-flex shrink-0 cursor-pointer items-center gap-2 py-3 sm:py-2 ${!category ? "text-accent" : "text-body hover:text-ink"}`}
                onClick={() => setCategory(undefined)}
                type="button"
              >
                <span aria-hidden="true" className={`size-1.5 ${!category ? "bg-accent" : "bg-line"}`} />
                همه پروژه‌ها
              </button>
            </li>
            {projectCategories.map((item) => (
              <li key={item.id}>
                <button
                  aria-pressed={category === item.id}
                  className={`focus-ring inline-flex shrink-0 cursor-pointer items-center gap-2 py-3 sm:py-2 ${category === item.id ? "text-accent" : "text-body hover:text-ink"}`}
                  onClick={() => setCategory(item.id)}
                  type="button"
                >
                  <span aria-hidden="true" className={`size-1.5 ${category === item.id ? "bg-accent" : "bg-line"}`} />
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <section className="pb-24 sm:pb-32" aria-labelledby="project-list-title">
        <Container>
          <h2 className="sr-only" id="project-list-title">فهرست پروژه‌ها</h2>
          <div className="space-y-20 lg:space-y-32">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={project.id} priority={index === 0} project={project} reverse={index % 2 === 1} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
