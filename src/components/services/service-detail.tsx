import Link from "next/link";

import { TextLink } from "@/components/ui/text-link";
import type { Project } from "@/data/projects";
import type { Service } from "@/data/services";

type ServiceDetailProps = {
  service: Service;
  relatedProjects: readonly Project[];
};

export function ServiceDetail({ service, relatedProjects }: ServiceDetailProps) {
  return (
    <section className="scroll-mt-24 border-t border-line py-20 first:border-t-0 sm:py-28" id={service.slug}>
      <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[9px] tracking-[.12em] text-body" dir="ltr">
        <span>SERVICE / {service.id}</span>
        <span>SCOPE: DEFINED TOGETHER</span>
      </div>

      <div className="mt-9 grid gap-12 lg:grid-cols-[minmax(16rem,.45fr)_minmax(0,1fr)] lg:gap-20">
        <div>
          <p className="text-xs text-accent">خدمت {service.id}</p>
          <h2 className="type-service mt-4 text-balance font-medium text-ink">{service.title}</h2>
          <p className="mt-6 max-w-md text-lg leading-9 text-body">{service.description}</p>
        </div>

        <div>
          <div className="grid gap-10 sm:grid-cols-2 sm:gap-12">
            <div>
              <h3 className="text-sm font-medium text-ink">این خدمت چیست؟</h3>
              <p className="mt-4 leading-8 text-body">{service.whatItIs}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-ink">برای چه کسانی مناسب است؟</h3>
              <p className="mt-4 leading-8 text-body">{service.forWhom}</p>
            </div>
          </div>

          <div className="mt-12 grid border-y border-line sm:grid-cols-2">
            <div className="py-7 sm:border-l sm:border-line sm:pl-8">
              <h3 className="text-xs text-muted">خروجی‌های قابل تعریف</h3>
              <ul className="mt-5 space-y-3 text-sm text-ink">
                {service.deliverables.map((item) => <li key={item}>— {item}</li>)}
              </ul>
            </div>
            <div className="border-t border-line py-7 sm:border-t-0 sm:pr-8">
              <h3 className="text-xs text-muted">توانمندی‌های مرتبط</h3>
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm text-ink">
                {service.capabilities.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-[10rem_1fr] sm:items-start">
            <h3 className="text-xs text-muted">پروژه‌های مرتبط</h3>
            <div className="flex flex-wrap gap-x-7 gap-y-3">
              {relatedProjects.map((project) => (
                <TextLink href={`/projects/${project.slug}`} key={project.slug}>{project.title} — مفهومی</TextLink>
              ))}
            </div>
          </div>

          <div className="mt-10 text-end">
            <Link className="focus-ring font-mono text-[9px] tracking-[.12em] text-muted transition-colors hover:text-accent" href="#top" dir="ltr">BACK TO TOP / ↑</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
