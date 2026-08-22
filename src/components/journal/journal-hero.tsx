import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";

export function JournalHero() {
  return (
    <section className="pb-20 pt-16 sm:pb-28 sm:pt-24 lg:pb-36 lg:pt-32">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[9px] tracking-[.12em] text-body" dir="ltr">
          <span>HB / JOURNAL</span>
          <span>DESIGN / DEVELOPMENT / BUSINESS</span>
          <span className="hidden items-center gap-2 sm:flex"><span className="size-1.5 bg-accent" />STATUS: PUBLISHED</span>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,.34fr)] lg:items-end lg:gap-16">
          <div>
            <SectionLabel>مجله هادس بورد</SectionLabel>
            <h1 className="type-hero mt-8 max-w-4xl text-balance font-medium text-ink">
              یادداشت‌هایی برای تصمیم‌های بهتر در وب.
            </h1>
          </div>
          <div className="pb-2">
            <p className="text-pretty text-lg leading-9 text-body">
              درباره طراحی، توسعه و پرسش‌هایی که پیش از ساخت یک محصول دیجیتال باید روشن شوند؛ مستقیم، کاربردی و بدون پیچیده‌گویی.
            </p>
            <p className="mt-7 font-sans text-[9px] tracking-[.12em] text-muted" dir="rtl">یادداشت‌ها / هادس بورد</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
