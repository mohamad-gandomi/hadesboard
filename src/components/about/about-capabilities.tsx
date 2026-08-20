import Link from "next/link";

import { ArrowIcon } from "@/components/ui/arrow-icon";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Service } from "@/data/services";

type AboutCapabilitiesProps = {
  services: readonly Service[];
};

export function AboutCapabilities({ services }: AboutCapabilitiesProps) {
  return (
    <section className="border-y border-line bg-surface/45 py-20 sm:py-28">
      <Container>
        <SectionHeading
          description="طراحی و توسعه در هادس بورد یک مسیر پیوسته‌اند؛ هر بخش می‌تواند مستقل یا همراه با بخش‌های دیگر تعریف شود."
          eyebrow="توانمندی‌ها"
          index="03"
          title="از تعریف تجربه تا ساخت محصول."
        />

        <ol className="mt-14 lg:mt-20">
          {services.map((service) => (
            <li className="border-t border-line last:border-b" key={service.id}>
              <Link className="focus-ring group grid gap-5 py-8 sm:grid-cols-[4rem_1fr_auto] sm:items-center sm:gap-8 lg:py-10" href={`/services#${service.slug}`}>
                <span className="font-mono text-[10px] tracking-[.12em] text-accent" dir="ltr">{service.id}</span>
                <div className="grid gap-3 lg:grid-cols-[.55fr_1fr] lg:items-center lg:gap-12">
                  <h3 className="type-service font-medium text-ink transition-transform group-hover:-translate-x-1">{service.title}</h3>
                  <p className="max-w-xl leading-8 text-body">{service.description}</p>
                </div>
                <ArrowIcon className="hidden size-6 rotate-180 text-muted transition-all group-hover:-translate-x-1 group-hover:text-accent sm:block" />
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
