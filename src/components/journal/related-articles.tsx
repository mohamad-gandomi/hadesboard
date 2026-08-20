import Link from "next/link";

import { ArrowIcon } from "@/components/ui/arrow-icon";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Article } from "@/data/journal";

type RelatedArticlesProps = {
  articles: readonly Article[];
};

export function RelatedArticles({ articles }: RelatedArticlesProps) {
  return (
    <section className="border-t border-line bg-surface/45 py-20 sm:py-28">
      <Container>
        <SectionHeading eyebrow="ادامه مطالعه" index="01" title="یادداشت‌های مرتبط" />
        <div className="mt-12 border-t border-line lg:mt-16">
          {articles.map((article) => (
            <article className="border-b border-line" key={article.id}>
              <Link className="focus-ring group grid gap-5 py-7 sm:grid-cols-[4rem_1fr_auto] sm:items-center sm:gap-8" href={`/journal/${article.slug}`}>
                <span className="font-mono text-[9px] text-accent" dir="ltr">{article.id}</span>
                <div>
                  <p className="text-xs text-muted">{article.category} / {article.readingTime}</p>
                  <h3 className="type-article mt-3 text-balance font-medium text-ink">{article.title}</h3>
                </div>
                <ArrowIcon className="hidden size-7 rotate-180 text-muted transition-all group-hover:-translate-x-1 group-hover:text-accent sm:block" />
              </Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
