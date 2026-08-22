"use client";

import { type FormEvent, useState } from "react";

import { ContactInformation } from "@/components/contact/contact-information";
import { FormField } from "@/components/contact/form-field";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { ContactChannel } from "@/data/contact";
import type { Service } from "@/data/services";

type ProjectInquiryFormProps = {
  channels: readonly ContactChannel[];
  services: readonly Service[];
};

const controlClassName = "focus-ring min-h-12 w-full rounded-none border border-line bg-canvas px-4 py-3 text-base text-ink outline-none transition-colors placeholder:text-muted/75 hover:border-body focus:border-accent";

export function ProjectInquiryForm({ channels, services }: ProjectInquiryFormProps) {
  const [submission, setSubmission] = useState<{
    status: "idle" | "submitting" | "success" | "error";
    message: string;
  }>({
    status: "idle",
    message: "اطلاعات فرم مستقیماً به ایمیل هادس بورد ارسال می‌شود.",
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setSubmission({ status: "submitting", message: "در حال ارسال درخواست…" });

    try {
      const response = await fetch("/send-contact.php", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      const result = (await response.json()) as { success?: boolean; message?: string };

      if (!response.ok || !result.success) {
        throw new Error(result.message || "ارسال انجام نشد. لطفاً دوباره تلاش کنید.");
      }

      form.reset();
      setSubmission({ status: "success", message: result.message || "درخواست شما با موفقیت ارسال شد." });
    } catch (error) {
      setSubmission({
        status: "error",
        message: error instanceof Error ? error.message : "ارسال انجام نشد. دوباره تلاش کنید یا مستقیماً پیام بدهید.",
      });
    }
  };

  return (
    <section className="border-y border-line bg-surface/45 py-20 sm:py-28" id="inquiry">
      <Container className="grid gap-14 lg:grid-cols-[.65fr_1.35fr] lg:gap-20">
        <div>
          <SectionHeading
            description="چند خط درباره پروژه بنویسید یا از راه‌های زیر مستقیماً پیام بدهید."
            eyebrow="درخواست پروژه"
            index="01"
            title="از یک گفت‌وگوی کوتاه شروع کنیم."
          />
          <ContactInformation channels={channels} />
        </div>

        <form aria-label="فرم درخواست پروژه" className="border-t border-line pt-8" onSubmit={handleSubmit}>
          <div aria-hidden="true" className="absolute -left-[10000px] size-px overflow-hidden">
            <label htmlFor="website">وب‌سایت</label>
            <input autoComplete="off" id="website" name="website" tabIndex={-1} type="text" />
          </div>
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
                <select className={`${controlClassName} ravi-select font-sans`} defaultValue="" id="project-type" name="projectType">
                  <option className="font-sans" value="">انتخاب کنید</option>
                  {services.map((service) => <option className="font-sans" key={service.slug} value={service.slug}>{service.title}</option>)}
                  <option className="font-sans" value="other">سایر</option>
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
            <p
              aria-live="polite"
              className={`max-w-md text-xs leading-6 ${submission.status === "error" ? "text-red-700" : submission.status === "success" ? "text-accent" : "text-muted"}`}
              role="status"
            >
              {submission.message}
            </p>
            <button className="button-primary focus-ring min-h-12 border px-6 text-sm font-medium disabled:cursor-wait disabled:opacity-70" disabled={submission.status === "submitting"} type="submit">
              {submission.status === "submitting" ? "در حال ارسال…" : "ارسال درخواست"}
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
}
