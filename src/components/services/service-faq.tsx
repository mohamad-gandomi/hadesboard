import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ServiceFaq as ServiceFaqItem } from "@/data/services";

type ServiceFaqProps = {
  items: readonly ServiceFaqItem[];
};

export function ServiceFaq({ items }: ServiceFaqProps) {
  return (
    <section className="border-t border-line bg-surface/45 py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:gap-20">
        <SectionHeading
          description="اگر پاسخ به دامنه مشخص پروژه وابسته باشد، آن را پیش از شروع همکاری روشن می‌کنیم."
          eyebrow="پرسش‌های متداول"
          index="05"
          title="چند پاسخ کوتاه، پیش از شروع گفتگو."
        />
        <div>
          {items.map((item) => (
            <details className="group border-t border-line py-6 last:border-b" key={item.id}>
              <summary className="focus-ring flex cursor-pointer list-none items-start justify-between gap-6 text-lg font-medium leading-8 text-ink marker:content-none sm:text-xl">
                <span>{item.question}</span>
                <span className="mt-1 font-mono text-sm font-normal text-accent group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="max-w-2xl pb-2 pt-5 leading-8 text-body">{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
