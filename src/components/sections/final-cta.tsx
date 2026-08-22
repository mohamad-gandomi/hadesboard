import { CtaSection } from "@/components/content/cta-section";

export function FinalCta() {
  return (
    <CtaSection
      action={{ label: "شرح پروژه", href: "/contact" }}
      description="برای شروع، یک توضیح کوتاه از پروژه کافی است؛ از صفحه تماس مسیر ارتباطی مناسب خودتان را انتخاب کنید."
      label="گام بعدی / شروع پروژه"
      title="بیایید یک تجربه دیجیتال دقیق و مفید بسازیم."
    />
  );
}
