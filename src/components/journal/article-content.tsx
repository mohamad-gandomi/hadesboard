import { Container } from "@/components/ui/container";
import type { ArticleSection } from "@/data/journal";

type ArticleContentProps = {
  sections: readonly ArticleSection[];
};

export function ArticleContent({ sections }: ArticleContentProps) {
  return (
    <div className="border-t border-line pb-24 sm:pb-32">
      <Container className="max-w-6xl">
        {sections.map((section) => (
          <section className="grid gap-6 border-b border-line py-14 sm:py-20 lg:grid-cols-[9rem_minmax(0,1fr)] lg:gap-14" key={section.id} aria-labelledby={`section-${section.id}`}>
            <span className="pt-2 font-mono text-[10px] tracking-[.12em] text-accent" dir="ltr">SECTION / {section.id}</span>
            <div className="max-w-3xl">
              <h2 className="type-article text-balance font-medium text-ink" id={`section-${section.id}`}>{section.title}</h2>
              <div className="mt-7 space-y-5 text-lg leading-9 text-body">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
              {section.points ? (
                <ul className="mt-8 border-t border-line">
                  {section.points.map((point, index) => (
                    <li className="flex items-center gap-4 border-b border-line py-4 text-sm text-ink" key={point}>
                      <span className="font-mono text-[9px] text-accent" dir="ltr">0{index + 1}</span>{point}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </section>
        ))}
      </Container>
    </div>
  );
}
