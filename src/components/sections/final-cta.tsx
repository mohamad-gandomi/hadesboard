import { CtaSection } from "@/components/content/cta-section";

export function FinalCta() {
  return (
    <CtaSection
      action={{ label: "شرح پروژه", href: "/contact" }}
      description="فرم اولیه پروژه آماده است؛ راه ارسال پس از ثبت یک مسیر ارتباطی تأییدشده فعال می‌شود."
      label="NEXT / START A PROJECT"
      title="بیایید یک تجربه دیجیتال دقیق و مفید بسازیم."
    />
  );
}
