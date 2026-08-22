import { ContactHero } from "@/components/contact/contact-hero";
import { ProjectInquiryForm } from "@/components/contact/project-inquiry-form";
import { ProjectPreparation } from "@/components/contact/project-preparation";
import { CtaSection } from "@/components/content/cta-section";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { contactChannels, preparationItems } from "@/data/contact";
import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "شروع پروژه",
  description: "فرم اولیه درخواست پروژه هادس بورد برای طراحی وب، توسعه وب، وب‌اپلیکیشن و فروشگاه اینترنتی.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="top">
        <ContactHero />
        <ProjectInquiryForm channels={contactChannels} services={services} />
        <ProjectPreparation items={preparationItems} />
        <CtaSection
          action={{ label: "بازگشت به فرم", href: "#inquiry" }}
          description="همین اطلاعات اولیه برای شروع شناخت کافی است. لازم نیست پاسخ همه پرسش‌ها یا دامنه نهایی پروژه از قبل آماده باشد."
          label="گام بعدی / آماده‌سازی شرح پروژه"
          title="هدف را کوتاه بنویسید؛ جزئیات را با هم روشن می‌کنیم."
        />
      </main>
      <Footer />
    </>
  );
}
