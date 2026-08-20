import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import type { Article } from "@/data/journal";

type ArticleHeroProps = {
  article: Article;
};

export function ArticleHero({ article }: ArticleHeroProps) {
  return (
    <header className="pb-16 pt-14 sm:pb-24 sm:pt-20 lg:pt-28">
      <Container>
        <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[9px] tracking-[.12em] text-body" dir="ltr">
          <span>ARTICLE / {article.id}</span>
          <span>HADESBOARD / JOURNAL</span>
          <Link className="focus-ring transition-colors hover:text-accent" href="/journal">← ALL NOTES</Link>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(17rem,.3fr)] lg:items-end lg:gap-16">
          <div>
            <p className="text-sm text-accent">{article.category}</p>
            <h1 className="type-article mt-5 max-w-5xl text-balance font-medium text-ink">{article.title}</h1>
          </div>
          <p className="pb-2 text-pretty text-lg leading-9 text-body">{article.excerpt}</p>
        </div>

        <dl className="mt-12 grid border-y border-line sm:grid-cols-3 sm:mt-16">
          <div className="border-b border-line py-5 sm:border-b-0 sm:border-l sm:px-5 sm:pr-0">
            <dt className="text-xs text-muted">تاریخ انتشار</dt>
            <dd className="mt-2 text-sm text-ink"><time dateTime={article.dateTime}>{article.date}</time></dd>
          </div>
          <div className="border-b border-line py-5 sm:border-b-0 sm:border-l sm:px-5">
            <dt className="text-xs text-muted">زمان مطالعه</dt>
            <dd className="mt-2 text-sm text-ink">{article.readingTime}</dd>
          </div>
          <div className="py-5 sm:px-5">
            <dt className="text-xs text-muted">نویسنده</dt>
            <dd className="mt-2 text-sm text-ink">هادس بورد</dd>
          </div>
        </dl>

        {article.coverImage ? (
          <figure className="mt-10 overflow-hidden border border-line bg-surface">
            <Image alt={article.coverImage.alt} className="h-auto w-full" height={article.coverImage.height} priority sizes="100vw" src={article.coverImage.src} width={article.coverImage.width} />
          </figure>
        ) : null}
      </Container>
    </header>
  );
}
