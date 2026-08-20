import type { Metadata } from "next";
import Link from "next/link";

import { ProjectCard } from "@/components/content/project-card";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { getProjectsByCategory, isProjectCategory, projectCategories } from "@/data/projects";

export const metadata: Metadata = {
  title: "نمونه‌کارها",
  description: "مجموعه پروژه‌ها و مطالعات مفهومی هادس بورد در طراحی وب، فروشگاه اینترنتی و وب‌اپلیکیشن.",
};

type ProjectsPageProps = {
  searchParams: Promise<{ category?: string | string[] }>;
};

export default async function ProjectsPage({ searchParams }: ProjectsPageProps) {
  const query = await searchParams;
  const requestedCategory = Array.isArray(query.category) ? query.category[0] : query.category;
  const category = isProjectCategory(requestedCategory) ? requestedCategory : undefined;
  const visibleProjects = getProjectsByCategory(category);

  return (
    <>
      <Header />
      <main id="top">
        <section className="pb-20 pt-16 sm:pb-28 sm:pt-24 lg:pb-36 lg:pt-32">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,.38fr)] lg:items-end lg:gap-16">
              <div>
                <SectionLabel index="01">آرشیو پروژه‌ها</SectionLabel>
                <h1 className="type-hero mt-8 max-w-4xl text-balance font-medium text-ink">
                  پروژه‌ها، سند تصمیم‌های طراحی‌اند.
                </h1>
              </div>
              <div className="pb-2">
                <p className="text-pretty text-lg leading-9 text-body">
                  مجموعه‌ای در حال رشد از مطالعه‌های مفهومی هادس بورد؛ برای نمایش ساختار، زبان بصری و مسیر فنی، بدون ادعای مشتری یا نتیجه ساختگی.
                </p>
                <p className="mt-6 font-mono text-[9px] tracking-[.12em] text-muted" dir="ltr">CURATED / CONCEPT / RTL</p>
              </div>
            </div>

            <nav aria-label="دسته‌بندی پروژه‌ها" className="mt-14 border-y border-line sm:mt-20">
              <ul className="flex flex-wrap gap-x-8 gap-y-1 py-4 text-sm">
                <li>
                  <Link aria-current={!category ? "page" : undefined} className={`focus-ring block py-2 transition-colors ${!category ? "text-accent" : "text-body hover:text-ink"}`} href="/projects">
                    همه پروژه‌ها
                  </Link>
                </li>
                {projectCategories.map((item) => (
                  <li key={item.id}>
                    <Link aria-current={category === item.id ? "page" : undefined} className={`focus-ring block py-2 transition-colors ${category === item.id ? "text-accent" : "text-body hover:text-ink"}`} href={`/projects?category=${item.id}`}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </Container>
        </section>

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
      </main>
      <Footer />
    </>
  );
}
