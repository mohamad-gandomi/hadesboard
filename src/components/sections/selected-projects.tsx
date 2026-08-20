import { ProjectCard } from "@/components/content/project-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";

export function SelectedProjects() {
  return (
    <section className="section-space" id="projects">
      <Container>
        <SectionHeading
          description="سه مطالعه مفهومی برای نشان‌دادن شیوه فکرکردن هادس بورد؛ بدون ادعای مشتری، آمار یا نتیجه ساختگی."
          eyebrow="نمونه‌کارهای منتخب"
          index="02"
          title="کار، وقتی معنا پیدا می‌کند که بتوان مسیر تصمیم‌ها را دید."
        />
        <div className="mt-16 space-y-20 lg:mt-24 lg:space-y-32">
          {projects.filter((project) => project.featured).map((project, index) => (
            <ProjectCard key={project.id} project={project} reverse={index % 2 === 1} />
          ))}
        </div>
      </Container>
    </section>
  );
}
