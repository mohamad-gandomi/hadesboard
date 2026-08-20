import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";

type CaseStudySectionProps = {
  index: string;
  label: string;
  title: string;
  children: string;
  emphasize?: boolean;
};

export function CaseStudySection({ index, label, title, children, emphasize = false }: CaseStudySectionProps) {
  return (
    <section className={`border-t border-line py-20 sm:py-28 ${emphasize ? "bg-surface" : ""}`}>
      <Container className="grid gap-10 lg:grid-cols-[minmax(12rem,.35fr)_minmax(0,1fr)] lg:gap-16">
        <SectionLabel index={index}>{label}</SectionLabel>
        <div className="max-w-3xl">
          <h2 className="type-section text-balance font-medium text-ink">{title}</h2>
          <p className="mt-7 text-pretty text-lg leading-9 text-body sm:text-xl sm:leading-10">{children}</p>
        </div>
      </Container>
    </section>
  );
}
