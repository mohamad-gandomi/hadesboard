import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";

export function AboutHero() {
  return (
    <section className="pb-20 pt-16 sm:pb-28 sm:pt-24 lg:pb-36 lg:pt-32">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[9px] tracking-[.12em] text-body" dir="ltr">
          <span>HB / ABOUT</span>
          <span>THOUGHT / CRAFT / CODE</span>
          <span className="flex items-center gap-2"><span className="size-1.5 bg-accent" />STUDIO: PERSONAL</span>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,.35fr)] lg:items-end lg:gap-16">
          <div>
            <SectionLabel>درباره هادس بورد</SectionLabel>
            <h1 className="type-hero mt-8 max-w-4xl text-balance font-medium text-ink">
              استودیویی برای ساختن وب، با فکر و دقت.
            </h1>
          </div>
          <div className="pb-2">
            <p className="text-pretty text-lg leading-9 text-body">
              هادس بورد یک استودیوی فارسی طراحی و توسعه است؛ برای محصولاتی که باید هم زیبا باشند، هم درست کار کنند و هم به هدف واقعی کسب‌وکار نزدیک بمانند.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
