import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { services } from "@/data/services";

export function ServicesHero() {
  return (
    <section className="pb-20 pt-16 sm:pb-28 sm:pt-24 lg:pb-36 lg:pt-32">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[9px] tracking-[.12em] text-body" dir="ltr">
          <span>HB / SERVICES</span>
          <span>DESIGN / DEVELOPMENT</span>
          <span className="flex items-center gap-2"><span className="size-1.5 bg-accent" />STATUS: AVAILABLE</span>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,.34fr)] lg:items-end lg:gap-16">
          <div>
            <SectionLabel>خدمات هادس بورد</SectionLabel>
            <h1 className="type-hero mt-8 max-w-4xl text-balance font-medium text-ink">
              از مسئله‌ای مبهم، تا محصولی روشن و قابل استفاده.
            </h1>
          </div>
          <div className="pb-2">
            <p className="text-pretty text-lg leading-9 text-body">
              هادس بورد طراحی و توسعه را جدا از هم نمی‌بیند. هر همکاری از شناخت هدف شروع می‌شود و دامنه آن فقط به‌اندازه نیاز واقعی پروژه شکل می‌گیرد.
            </p>
            <p className="mt-7 font-mono text-[9px] tracking-[.12em] text-muted" dir="ltr">
              {String(services.length).padStart(2, "0")} SERVICES / ONE PROCESS
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
