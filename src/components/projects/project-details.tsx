import type { Project } from "@/data/projects";

type ProjectDetailsProps = {
  project: Project;
};

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const details = [
    { label: "نوع پروژه", value: project.categoryLabel },
    { label: "خدمات", value: project.services.join("، ") },
    { label: "سال", value: project.year },
    { label: "وضعیت", value: "پروژه مفهومی" },
  ];

  return (
    <dl className="grid border-y border-line sm:grid-cols-2 lg:grid-cols-4">
      {details.map((detail) => (
        <div className="border-b border-line py-5 last:border-b-0 sm:border-l sm:px-5 sm:even:border-l-0 lg:border-b-0 lg:even:border-l lg:last:border-l-0 lg:first:pr-0" key={detail.label}>
          <dt className="text-xs text-muted">{detail.label}</dt>
          <dd className="mt-2 text-sm leading-7 text-ink">{detail.value}</dd>
        </div>
      ))}
    </dl>
  );
}
