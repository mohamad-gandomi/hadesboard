import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import type { AboutPrinciple } from "@/data/about";

type StudioManifestoProps = {
  principles: readonly AboutPrinciple[];
};

export function StudioManifesto({ principles }: StudioManifestoProps) {
  return (
    <section className="grid-lines-dark overflow-hidden border-y border-ink bg-ink py-20 text-canvas sm:py-28 lg:py-36">
      <Container>
        <SectionLabel index="01" tone="dark">دیدگاه استودیو</SectionLabel>
        <h2 className="type-section mt-9 max-w-5xl text-balance font-medium">
          ظاهر خوب کافی نیست. تجربه باید مفید باشد، اجرا باید محکم باشد و هر تصمیم باید دلیلی داشته باشد.
        </h2>

        <ol className="mt-16 grid border-t border-canvas/20 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {principles.map((principle) => (
            <li className="border-b border-canvas/20 py-7 sm:border-l sm:px-6 sm:even:border-l-0 lg:min-h-64 lg:even:border-l lg:last:border-l-0" key={principle.id}>
              <span className="font-mono text-[10px] tracking-[.12em] text-accent" dir="ltr">PRINCIPLE / {principle.id}</span>
              <h3 className="type-service mt-10 font-medium">{principle.title}</h3>
              <p className="mt-4 max-w-xs leading-8 text-canvas/60">{principle.description}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
