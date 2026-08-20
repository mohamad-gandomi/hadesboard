import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { CaseStudySection } from "@/components/projects/case-study-section";
import { ProjectGallery } from "@/components/projects/project-gallery";
import { ProjectHero } from "@/components/projects/project-hero";
import { ProjectNext } from "@/components/projects/project-next";
import { ProjectOverview } from "@/components/projects/project-overview";
import { getNextProject, getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return { title: "پروژه پیدا نشد" };

  return {
    title: `${project.title} — پروژه مفهومی`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const nextProject = getNextProject(project.slug);

  return (
    <>
      <Header />
      <main id="top">
        <ProjectHero project={project} />
        <ProjectOverview>{project.content.overview}</ProjectOverview>
        <CaseStudySection index="02" label="چالش" title="تعادل میان عمق و وضوح">
          {project.content.challenge}
        </CaseStudySection>
        <CaseStudySection index="03" label="رویکرد" title="ساختار پیش از ظاهر">
          {project.content.approach}
        </CaseStudySection>
        <CaseStudySection index="04" label="جهت طراحی" title="یک زبان بصری کنترل‌شده">
          {project.content.designDirection}
        </CaseStudySection>
        <ProjectGallery images={project.gallery} />
        <CaseStudySection index="06" label="یادداشت توسعه" title="پایه‌ای برای ساخت اصولی">
          {project.content.developmentNotes}
        </CaseStudySection>
        <CaseStudySection emphasize index="07" label="نتیجه" title="بدون نتیجه‌سازی">
          {project.content.outcome}
        </CaseStudySection>
        <ProjectNext project={nextProject} />
      </main>
      <Footer />
    </>
  );
}
