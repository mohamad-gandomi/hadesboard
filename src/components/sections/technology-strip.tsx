import { Container } from "@/components/ui/container";
import { technologies } from "@/data/home";

export function TechnologyStrip() {
  return (
    <section aria-label="فناوری‌ها" className="border-y border-line py-6">
      <Container className="flex flex-wrap items-center gap-x-7 gap-y-3 font-mono text-[10px] tracking-[0.13em] text-muted sm:justify-between" dir="ltr">
        <span className="text-accent">TECH / CURRENT</span>
        {technologies.map((technology) => <span key={technology}>{technology}</span>)}
      </Container>
    </section>
  );
}
