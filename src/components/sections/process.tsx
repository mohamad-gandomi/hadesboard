import { ProcessStep } from "@/components/content/process-step";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { process } from "@/data/home";

type ProcessProps = {
  index?: string;
  title?: string;
  description?: string;
};

export function Process({
  index = "05",
  title = "از شناخت مسئله تا انتشار محصول.",
  description = "هر مرحله خروجی روشن دارد و زمینه مرحله بعد را می‌سازد.",
}: ProcessProps = {}) {
  return (
    <section className="section-space border-y border-line" id="process">
      <Container className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
        <SectionHeading
          description={description}
          eyebrow="فرآیند"
          index={index}
          title={title}
        />
        <ol>
          {process.map((step, index) => <ProcessStep isLast={index === process.length - 1} key={step.id} step={step} />)}
        </ol>
      </Container>
    </section>
  );
}
