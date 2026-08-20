import Image from "next/image";

import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TextLink } from "@/components/ui/text-link";
import { featuredCaseStudy } from "@/data/home";
import { getProjectBySlug } from "@/data/projects";

export function FeaturedCaseStudy() {
  const project = getProjectBySlug(featuredCaseStudy.projectSlug);

  if (!project) return null;

  const fields = [
    { label: "زمینه", value: project.content.overview },
    { label: "چالش", value: project.content.challenge },
    { label: "رویکرد", value: project.content.approach },
    { label: "وضعیت", value: project.content.outcome },
  ];

  return (
    <section className="section-space bg-ink text-canvas" id="case-study">
      <Container>
        <SectionHeading
          description="مدار یک پروژه مفهومی است؛ نمونه‌ای برای نشان‌دادن اینکه چگونه مسئله، ساختار محتوا و جهت فنی در یک روایت واحد کنار هم قرار می‌گیرند."
          eyebrow="مطالعه موردی شاخص — پروژه مفهومی"
          index="06"
          title="از پیچیدگی فنی تا یک تجربه روشن و قابل بررسی."
          tone="dark"
        />
        <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-[1.15fr_.85fr]">
          <figure className="relative overflow-hidden border border-canvas/20 bg-ink">
            <Image
              alt={featuredCaseStudy.image.alt}
              className="h-auto w-full"
              height={featuredCaseStudy.image.height}
              sizes="(max-width: 1024px) 100vw, 58vw"
              src={featuredCaseStudy.image.src}
              width={featuredCaseStudy.image.width}
            />
            <figcaption className="absolute bottom-3 left-3 border border-canvas/20 bg-ink/80 px-2 py-1 font-mono text-[8px] text-canvas" dir="ltr">
              CONCEPT CASE / MADAR
            </figcaption>
          </figure>
          <div>
            <dl className="border-t border-canvas/20">
              {fields.map((field) => (
                <div className="grid gap-2 border-b border-canvas/20 py-5 sm:grid-cols-[7rem_1fr]" key={field.label}>
                  <dt className="text-sm text-canvas">{field.label}</dt>
                  <dd className="text-sm leading-7 text-canvas/55">{field.value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-7">
              <TextLink href={project.links.caseStudy ?? `/projects/${project.slug}`} tone="dark">مشاهده مطالعه موردی مدار</TextLink>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
