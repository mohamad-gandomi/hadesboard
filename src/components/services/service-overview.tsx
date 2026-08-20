import Link from "next/link";

import { ArrowIcon } from "@/components/ui/arrow-icon";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Service } from "@/data/services";

type ServiceOverviewProps = {
  services: readonly Service[];
};

export function ServiceOverview({ services }: ServiceOverviewProps) {
  return (
    <section className="border-y border-line bg-surface/45 py-20 sm:py-28">
      <Container>
        <SectionHeading
          description="می‌توان از یک بخش مشخص شروع کرد یا طراحی و توسعه را در یک مسیر یکپارچه پیش برد. دامنه نهایی پس از شناخت پروژه تعیین می‌شود."
          eyebrow="نمای کلی"
          index="01"
          title="چهار خدمت، متناسب با مرحله‌ای که محصول در آن قرار دارد."
        />

        <ol className="mt-14 lg:mt-20">
          {services.map((service) => (
            <li className="border-t border-line last:border-b" key={service.id}>
              <Link className="focus-ring group grid gap-5 py-8 sm:grid-cols-[4rem_1fr_auto] sm:items-center sm:gap-8 lg:py-11" href={`#${service.slug}`}>
                <span className="font-mono text-[10px] tracking-[.12em] text-accent" dir="ltr">{service.id}</span>
                <div className="grid gap-4 lg:grid-cols-[.65fr_1fr] lg:items-center lg:gap-12">
                  <h3 className="type-service font-medium text-ink transition-transform group-hover:-translate-x-1">{service.title}</h3>
                  <p className="max-w-xl leading-8 text-body">{service.description}</p>
                </div>
                <ArrowIcon className="hidden size-7 rotate-180 text-muted transition-all group-hover:-translate-x-1 group-hover:text-accent sm:block" />
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
