import type { Metadata } from "next";

import { CtaSection } from "@/components/content/cta-section";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Process } from "@/components/sections/process";
import { RelatedServicesProjects } from "@/components/services/related-services-projects";
import { ServiceDetailsList } from "@/components/services/service-details-list";
import { ServiceFaq } from "@/components/services/service-faq";
import { ServiceOverview } from "@/components/services/service-overview";
import { ServicesHero } from "@/components/services/services-hero";
import { projects } from "@/data/projects";
import { serviceFaqs, services } from "@/data/services";

export const metadata: Metadata = {
  title: "خدمات طراحی و توسعه وب",
  description: "خدمات هادس بورد در طراحی وب، توسعه وب، وب‌اپلیکیشن و فروشگاه اینترنتی؛ با دامنه روشن و فرآیند قابل بررسی.",
};

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="top">
        <ServicesHero />
        <ServiceOverview services={services} />
        <ServiceDetailsList services={services} />
        <Process
          description="شناخت و ساختار، پیش از تصمیم‌های بصری و فنی می‌آیند؛ هر مرحله ورودی مرحله بعد را روشن می‌کند."
          index="03"
          title="یک مسیر مشترک، با دامنه متناسب هر پروژه."
        />
        <RelatedServicesProjects projects={projects} />
        <ServiceFaq items={serviceFaqs} />
        <CtaSection
          action={{ label: "شرح پروژه", href: "/contact" }}
          description="برای شروع، یک توضیح کوتاه درباره هدف، مخاطب و وضعیت فعلی پروژه کافی است؛ از صفحه تماس مسیر ارتباطی مناسب خودتان را انتخاب کنید."
          label="گام بعدی / شروع گفت‌وگو"
          title="اگر مسئله روشن نیست، گفتگو می‌تواند نقطه شروع باشد."
        />
      </main>
      <Footer />
    </>
  );
}
