import { ServiceDetail } from "@/components/services/service-detail";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/data/projects";
import type { Service } from "@/data/services";

type ServiceDetailsListProps = {
  services: readonly Service[];
};

export function ServiceDetailsList({ services }: ServiceDetailsListProps) {
  return (
    <div>
      <Container>
        <div className="py-20 sm:py-28">
          <SectionHeading
            description="هر خدمت بر اساس مسئله و مرحله محصول تنظیم می‌شود؛ فهرست خروجی‌ها نقطه شروع گفتگوست، نه یک بسته ثابت."
            eyebrow="جزئیات خدمات"
            index="02"
            title="دامنه روشن، خروجی مشخص، و تصمیم‌هایی که دلیل دارند."
          />
        </div>
        {services.map((service) => {
          const relatedProjects = projects.filter((project) =>
            service.relatedProjectSlugs.some((slug) => slug === project.slug),
          );

          return <ServiceDetail key={service.id} relatedProjects={relatedProjects} service={service} />;
        })}
      </Container>
    </div>
  );
}
