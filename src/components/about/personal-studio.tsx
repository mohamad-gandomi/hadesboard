import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

type PersonalStudioProps = {
  principles: readonly string[];
};

export function PersonalStudio({ principles }: PersonalStudioProps) {
  return (
    <section className="border-t border-line py-20 sm:py-28">
      <Container>
        <SectionHeading
          description="مدل همکاری هادس بورد بر ارتباط نزدیک، بازخورد روشن و تصمیم‌هایی استوار است که برای هر دو طرف قابل فهم باشند."
          eyebrow="یک استودیوی نزدیک"
          index="05"
          title="همکاری خوب، از شنیدن دقیق شروع می‌شود."
        />

        <div className="mt-14 grid gap-10 border-t border-line pt-10 lg:mt-20 lg:grid-cols-[1.2fr_.8fr] lg:gap-20 lg:pt-14">
          <blockquote className="type-section max-w-4xl text-balance font-medium text-ink">
            «لازم نیست با پاسخ کامل وارد گفتگو شوید. وظیفه همکاری این است که مسئله را با هم روشن کنیم و راه درست ساختن را پیدا کنیم.»
          </blockquote>
          <div className="lg:pt-3">
            <p className="font-mono text-[9px] tracking-[.12em] text-muted" dir="ltr">COLLABORATION / PRINCIPLES</p>
            <ul className="mt-5 border-t border-line">
              {principles.map((principle, index) => (
                <li className="flex items-center gap-4 border-b border-line py-4 text-sm text-body" key={principle}>
                  <span className="font-mono text-[9px] text-accent" dir="ltr">0{index + 1}</span>
                  {principle}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-xs leading-7 text-muted">بیانیه استودیو — بدون نیاز به تصویر یا معرفی فردی تا زمان آماده‌شدن محتوای تأییدشده.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
