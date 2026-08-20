import { TestimonialBlock } from "@/components/content/testimonial-block";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";

export function Testimonial() {
  return (
    <section className="section-space border-t border-line" aria-labelledby="testimonial-title">
      <Container>
        <SectionLabel index="08">بازخورد همکاری</SectionLabel>
        <h2 className="sr-only" id="testimonial-title">بازخورد مشتریان هادس بورد</h2>
        <div className="mt-10 sm:mt-14">
          <TestimonialBlock pending />
        </div>
      </Container>
    </section>
  );
}
