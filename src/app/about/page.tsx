import type { Metadata } from "next";

import { AboutCapabilities } from "@/components/about/about-capabilities";
import { AboutHero } from "@/components/about/about-hero";
import { PersonalStudio } from "@/components/about/personal-studio";
import { StudioBackground } from "@/components/about/studio-background";
import { StudioManifesto } from "@/components/about/studio-manifesto";
import { CtaSection } from "@/components/content/cta-section";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Process } from "@/components/sections/process";
import { aboutPrinciples, backgroundFields, collaborationPrinciples } from "@/data/about";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "درباره هادس بورد",
  description: "درباره هادس بورد؛ استودیوی فارسی طراحی و توسعه وب با تمرکز بر تجربه مفید، کیفیت فنی و درک هدف کسب‌وکار.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="top">
        <AboutHero />
        <StudioManifesto principles={aboutPrinciples} />
        <Process
          description="همکاری از فهم کسب‌وکار آغاز می‌شود، با تعریف تجربه و طراحی ادامه پیدا می‌کند و پس از ساخت و انتشار هم می‌تواند همراه بماند."
          index="02"
          title="شیوه کار، مرحله‌به‌مرحله و قابل گفت‌وگو."
        />
        <AboutCapabilities services={services} />
        <StudioBackground fields={backgroundFields} />
        <PersonalStudio principles={collaborationPrinciples} />
        <CtaSection
          action={{ label: "شرح پروژه", href: "/contact" }}
          description="برای شروع، لازم نیست سند کاملی آماده باشد. یک توضیح کوتاه از هدف و وضعیت فعلی کافی است؛ از صفحه تماس مسیر ارتباطی مناسب خودتان را انتخاب کنید."
          label="گام بعدی / شروع گفت‌وگو"
          title="اگر نگاه‌مان به ساخت محصول نزدیک است، از یک گفت‌وگو شروع کنیم."
        />
      </main>
      <Footer />
    </>
  );
}
