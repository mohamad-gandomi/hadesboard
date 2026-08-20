import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { principles } from "@/data/home";

export function WhyHadesBoard() {
  return (
    <section className="section-space" id="why-hadesboard">
      <Container>
        <SectionHeading eyebrow="چرا هادس بورد" index="07" title="سه اصل ساده برای ساخت چیزی که ماندگار باشد." />
        <div className="mt-14 grid border-t border-line lg:mt-20 lg:grid-cols-3">
          {principles.map((item) => (
            <article className="border-b border-line py-8 lg:min-h-72 lg:border-l lg:px-8 lg:last:border-l-0" key={item.id}>
              <span className="font-mono text-[10px] text-accent" dir="ltr">PRINCIPLE / {item.id}</span>
              <h3 className="type-service mt-12 font-medium text-ink">{item.title}</h3>
              <p className="mt-4 max-w-sm leading-8 text-body">{item.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
