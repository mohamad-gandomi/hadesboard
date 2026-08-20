import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ContactChannel } from "@/data/contact";

type ContactInformationProps = {
  channels: readonly ContactChannel[];
};

export function ContactInformation({ channels }: ContactInformationProps) {
  return (
    <section className="py-20 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-[.75fr_1.25fr] lg:gap-20">
        <SectionHeading
          description="هیچ نشانی یا حسابی تا پیش از تأیید در این بخش منتشر نمی‌شود."
          eyebrow="راه‌های ارتباطی"
          index="02"
          title="مسیرهای مستقیم، پس از ثبت اطلاعات واقعی."
        />

        <dl className="self-end border-t border-line">
          {channels.map((channel) => (
            <div className="grid gap-3 border-b border-line py-6 sm:grid-cols-[3rem_10rem_1fr] sm:items-center sm:gap-6" key={channel.id}>
              <dt className="contents">
                <span className="font-mono text-[9px] text-accent" dir="ltr">{channel.id}</span>
                <span className="text-sm font-medium text-ink">{channel.label}</span>
              </dt>
              <dd className="flex flex-wrap items-center justify-between gap-3 text-sm leading-7 text-body sm:col-start-3">
                <span>{channel.value}</span>
                <span className="font-mono text-[8px] tracking-[.1em] text-muted" dir="ltr">STATUS / {channel.status.toUpperCase()}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
