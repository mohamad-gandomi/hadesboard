import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import { philosophyPoints } from "@/data/home";

export function Philosophy() {
  return (
    <section className="section-space overflow-hidden" id="about">
      <Container>
        <SectionLabel index="04">دیدگاه</SectionLabel>
        <p className="type-section mt-8 max-w-5xl text-balance font-medium text-ink">
          طراحی باید دلیلی داشته باشد؛ برای کاربر روشن، برای کسب‌وکار مفید و در اجرا دقیق.
        </p>
        <ul className="mt-14 grid border-t border-line sm:grid-cols-2 lg:grid-cols-4">
          {philosophyPoints.map((point, index) => (
            <li className="flex items-center gap-4 border-b border-line py-5 text-sm text-body sm:border-l sm:px-5 sm:last:border-l-0" key={point}>
              <span className="font-mono text-[10px] text-accent" dir="ltr">0{index + 1}</span>{point}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
