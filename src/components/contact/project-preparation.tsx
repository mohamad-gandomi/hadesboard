import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { PreparationItem } from "@/data/contact";

type ProjectPreparationProps = {
  items: readonly PreparationItem[];
};

export function ProjectPreparation({ items }: ProjectPreparationProps) {
  return (
    <section className="border-y border-line bg-surface/45 py-20 sm:py-28">
      <Container>
        <SectionHeading
          description="این موارد الزام نیستند؛ فقط کمک می‌کنند گفت‌وگوی اول سریع‌تر به اصل مسئله برسد."
          eyebrow="پیش از شروع"
          index="02"
          title="چه اطلاعاتی به شناخت پروژه کمک می‌کند؟"
        />

        <ol className="mt-14 border-t border-line lg:mt-20">
          {items.map((item) => (
            <li className="grid gap-4 border-b border-line py-7 sm:grid-cols-[4rem_.55fr_1fr] sm:items-start sm:gap-8 lg:py-9" key={item.id}>
              <span className="pt-1 font-mono text-[10px] tracking-[.12em] text-accent" dir="ltr">{item.id}</span>
              <h3 className="text-xl font-medium text-ink sm:text-2xl">{item.title}</h3>
              <p className="max-w-2xl leading-8 text-body">{item.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
