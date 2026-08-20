import { TextLink } from "@/components/ui/text-link";
import type { ProjectLinkSet } from "@/data/projects";

type ProjectLinksProps = {
  links: ProjectLinkSet;
  className?: string;
  hideCaseStudy?: boolean;
};

export function ProjectLinks({ links, className = "", hideCaseStudy = false }: ProjectLinksProps) {
  const externalProps = { target: "_blank", rel: "noreferrer" } as const;
  const hasLinks = (!hideCaseStudy && links.caseStudy) || links.live || links.github;

  if (!hasLinks) return null;

  return (
    <div className={`flex flex-wrap gap-x-6 gap-y-3 ${className}`}>
      {!hideCaseStudy && links.caseStudy ? <TextLink href={links.caseStudy}>مطالعه موردی</TextLink> : null}
      {links.live ? <TextLink href={links.live} {...externalProps}>دموی زنده</TextLink> : null}
      {links.github ? <TextLink href={links.github} {...externalProps}>گیت‌هاب</TextLink> : null}
    </div>
  );
}
