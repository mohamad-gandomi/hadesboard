import { ProjectCard } from "@/components/content/project-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Project } from "@/data/projects";

type RelatedServicesProjectsProps = {
  projects: readonly Project[];
};

export function RelatedServicesProjects({ projects }: RelatedServicesProjectsProps) {
  return (
    <section className="border-t border-line py-20 sm:py-28" aria-labelledby="related-projects-title">
      <Container>
        <SectionHeading
          description="این نمونه‌ها پروژه مفهومی‌اند و برای نمایش ارتباط میان مسئله، خدمت و تصمیم طراحی ساخته شده‌اند."
          eyebrow="پروژه‌های مرتبط"
          index="04"
          title={<span id="related-projects-title">خدمات، در بستر یک مسئله واقعی‌تر دیده می‌شوند.</span>}
        />
        <div className="mt-16 space-y-20 lg:mt-24 lg:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} reverse={index % 2 === 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}
