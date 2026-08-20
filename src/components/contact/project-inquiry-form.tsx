import { FormField } from "@/components/contact/form-field";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Service } from "@/data/services";

type ProjectInquiryFormProps = {
  services: readonly Service[];
};

const controlClassName = "focus-ring min-h-12 w-full rounded-none border border-line bg-canvas px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-muted/75 hover:border-body focus:border-accent";

export function ProjectInquiryForm({ services }: ProjectInquiryFormProps) {
  return (
    <section className="border-y border-line bg-surface/45 py-20 sm:py-28" id="inquiry">
      <Container className="grid gap-14 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
        <div>
          <SectionHeading
            description="چند خط برای شناخت اولیه کافی است. جزئیات دامنه و مسیر همکاری بعداً و در گفت‌وگو روشن می‌شوند."
            eyebrow="درخواست پروژه"
            index="01"
            title="از چیزی که الان می‌دانید شروع کنید."
          />
          <p className="mt-8 border-r-2 border-accent pr-4 text-sm leading-7 text-body" id="form-availability">
            این فرم فعلاً فقط ساختار رابط است و اطلاعاتی ارسال یا ذخیره نمی‌شود. دکمه ارسال پس از اتصال یک مسیر ارتباطی تأییدشده فعال خواهد شد.
          </p>
        </div>

        <form aria-describedby="form-availability" aria-label="فرم درخواست پروژه" className="border-t border-line pt-8">
          <fieldset>
            <legend className="sr-only">اطلاعات اولیه پروژه</legend>
            <div className="grid gap-8 sm:grid-cols-2">
              <FormField id="name" label="نام" required>
                <input autoComplete="name" className={controlClassName} id="name" name="name" placeholder="نام شما" required type="text" />
              </FormField>

              <FormField help="ایمیل، شماره یا شناسه‌ای که بعداً بتوان از آن برای پاسخ استفاده کرد." id="contact-method" label="ایمیل یا راه ارتباطی" required>
                <input aria-describedby="contact-method-help" className={controlClassName} id="contact-method" name="contactMethod" placeholder="راه ارتباطی ترجیحی" required type="text" />
              </FormField>

              <div className="sm:col-span-2">
                <FormField help="هدف، مخاطب و مسئله اصلی را کوتاه توضیح دهید." id="project-summary" label="توضیح کوتاه پروژه" required>
                  <textarea aria-describedby="project-summary-help" className={`${controlClassName} min-h-40 resize-y`} id="project-summary" name="projectSummary" placeholder="درباره پروژه و چیزی که می‌خواهید بهتر شود بنویسید…" required rows={6} />
                </FormField>
              </div>

              <FormField id="project-type" label="نوع پروژه">
                <select className={controlClassName} defaultValue="" id="project-type" name="projectType">
                  <option value="">انتخاب کنید</option>
                  {services.map((service) => <option key={service.slug} value={service.slug}>{service.title}</option>)}
                  <option value="other">سایر</option>
                </select>
              </FormField>

              <FormField help="اگر هنوز مشخص نیست، خالی بگذارید." id="budget" label="بودجه تقریبی">
                <input aria-describedby="budget-help" className={controlClassName} id="budget" name="budget" placeholder="بازه یا سقف مدنظر" type="text" />
              </FormField>

              <div className="sm:col-span-2">
                <FormField help="تاریخ مدنظر یا هر محدودیت زمانی مهم را بنویسید." id="timeline" label="زمان‌بندی">
                  <input aria-describedby="timeline-help" className={controlClassName} id="timeline" name="timeline" placeholder="برای مثال: بدون تاریخ قطعی" type="text" />
                </FormField>
              </div>
            </div>
          </fieldset>

          <div className="mt-10 flex flex-col gap-4 border-t border-line pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-xs leading-6 text-muted">با فعال‌شدن ارسال، وضعیت موفق یا خطا در همین بخش نمایش داده خواهد شد.</p>
            <button className="min-h-12 cursor-not-allowed border border-line bg-surface px-6 text-sm font-medium text-muted" disabled type="submit">
              ارسال — به‌زودی
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
}
