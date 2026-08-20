import { ServiceItem } from "@/components/content/service-item";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/data/services";

export function Services() {
  return (
    <section className="section-space border-y border-line bg-surface/45" id="services">
      <Container>
        <SectionHeading
          description="از تعریف تجربه تا اجرای فنی، هر خدمت بخشی از یک مسیر منسجم برای ساخت محصول دیجیتال است."
          eyebrow="خدمات"
          index="03"
          title="طراحی و توسعه، در یک مسیر پیوسته."
        />
        <div className="mt-14 lg:mt-20">
          {services.map((service) => <ServiceItem key={service.id} service={service} />)}
        </div>
      </Container>
    </section>
  );
}
