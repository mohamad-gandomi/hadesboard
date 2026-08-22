import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";

type ProjectOverviewProps = {
  children: string;
};

export function ProjectOverview({ children }: ProjectOverviewProps) {
  return (
    <section className="border-t border-line py-20 sm:py-28" id="overview">
      <Container className="grid gap-10 lg:grid-cols-[minmax(12rem,.35fr)_minmax(0,1fr)] lg:gap-16">
        <SectionLabel index="01">مرور پروژه</SectionLabel>
        <div className="max-w-3xl">
          <h2 className="type-section text-balance font-medium text-ink">نگاهی کلی به پروژه</h2>
          <p className="mt-7 text-pretty text-lg leading-9 text-body sm:text-xl sm:leading-10">{children}</p>
        </div>
      </Container>
    </section>
  );
}
