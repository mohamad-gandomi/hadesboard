import type { Metadata } from "next";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { ProjectArchive } from "@/components/projects/project-archive";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";

export const metadata: Metadata = {
  title: "نمونه‌کارها",
  description: "مجموعه پروژه‌ها و مطالعات مفهومی هادس بورد در طراحی وب، فروشگاه اینترنتی و وب‌اپلیکیشن.",
};

export default function ProjectsPage() {
  return (
    <>
      <Header />
      <main id="top">
        <section className="pt-16 sm:pt-24 lg:pt-32">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,.38fr)] lg:items-end lg:gap-16">
              <div>
                <SectionLabel index="01">آرشیو پروژه‌ها</SectionLabel>
                <h1 className="type-hero mt-8 max-w-4xl text-balance font-medium text-ink">
                  پروژه‌ها، سند تصمیم‌های طراحی‌اند.
                </h1>
              </div>
              <div className="pb-2">
                <p className="text-pretty text-lg leading-9 text-body">
                  مجموعه‌ای در حال رشد از مطالعه‌های مفهومی هادس بورد؛ برای نمایش ساختار، زبان بصری و مسیر فنی، بدون ادعای مشتری یا نتیجه ساختگی.
                </p>
                <p className="mt-6 font-mono text-[9px] tracking-[.12em] text-muted" dir="ltr">CURATED / CONCEPT / RTL</p>
              </div>
            </div>
          </Container>
        </section>
        <ProjectArchive />
      </main>
      <Footer />
    </>
  );
}
