import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { BackgroundField } from "@/data/about";

type StudioBackgroundProps = {
  fields: readonly BackgroundField[];
};

export function StudioBackground({ fields }: StudioBackgroundProps) {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
        <SectionHeading
          description="این ساختار برای روایت مسیر واقعی استودیو آماده است و تا زمان ثبت اطلاعات معتبر، تاریخ یا سابقه‌ای به آن اضافه نمی‌شود."
          eyebrow="تجربه و پیشینه"
          index="04"
          title="جایی برای یک روایت واقعی، نه رزومه‌ای ساختگی."
        />

        <div className="self-end border border-line bg-surface/50 p-5 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[9px] tracking-[.12em] text-body" dir="ltr">
            <span>STUDIO RECORD / 001</span>
            <span className="flex items-center gap-2"><span className="size-1.5 bg-accent" />CONTENT: PENDING</span>
          </div>
          <p className="type-article mt-12 max-w-2xl text-balance font-medium text-ink">
            مسیر حرفه‌ای، تجربه‌های شکل‌دهنده و دلیل آغاز هادس بورد پس از تأیید محتوای شخصی در این بخش روایت می‌شوند.
          </p>
          <dl className="mt-12 border-t border-line">
            {fields.map((field) => (
              <div className="grid gap-2 border-b border-line py-5 sm:grid-cols-[10rem_1fr] sm:gap-8" key={field.label}>
                <dt className="text-xs text-muted">{field.label}</dt>
                <dd className="text-sm text-ink">{field.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
