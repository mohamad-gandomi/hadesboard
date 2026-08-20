import type { Service } from "@/data/services";

type ServiceItemProps = { service: Service };

export function ServiceItem({ service }: ServiceItemProps) {
  return (
    <article className="group grid grid-cols-[3rem_1fr] gap-x-4 gap-y-5 border-t border-line py-8 last:border-b lg:grid-cols-[4rem_.7fr_1.1fr_.8fr] lg:items-start lg:gap-8 lg:py-10">
      <span className="pt-2 font-mono text-[10px] tracking-[0.12em] text-accent" dir="ltr">{service.id}</span>
      <h3 className="type-service font-medium text-ink transition-transform duration-300 group-hover:-translate-x-1">{service.title}</h3>
      <p className="col-start-2 max-w-xl leading-8 text-body lg:col-start-auto">{service.description}</p>
      <ul className="col-start-2 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted lg:col-start-auto lg:flex-col lg:items-start">
        {service.deliverables.map((item) => <li key={item}>— {item}</li>)}
      </ul>
    </article>
  );
}
