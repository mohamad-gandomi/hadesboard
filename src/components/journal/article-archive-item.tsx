import Image from "next/image";
import Link from "next/link";

import { ArrowIcon } from "@/components/ui/arrow-icon";
import type { Article } from "@/data/journal";

type ArticleArchiveItemProps = {
  article: Article;
};

export function ArticleArchiveItem({ article }: ArticleArchiveItemProps) {
  return (
    <article className="border-t border-line py-9 last:border-b sm:py-12">
      <div className="grid gap-7 lg:grid-cols-[4rem_minmax(0,1fr)_minmax(14rem,.32fr)] lg:gap-10">
        <span className="pt-2 font-mono text-[10px] tracking-[.12em] text-accent" dir="ltr">{article.id}</span>
        <div>
          <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
            <span>{article.category}</span>
            <span aria-hidden="true">/</span>
            <time dateTime={article.dateTime}>{article.date}</time>
            <span aria-hidden="true">/</span>
            <span>{article.readingTime}</span>
          </p>
          <h2 className="type-article mt-5 max-w-4xl text-balance font-medium text-ink">
            <Link className="focus-ring transition-colors hover:text-accent" href={`/journal/${article.slug}`}>{article.title}</Link>
          </h2>
        </div>
        <div className="flex flex-col justify-between gap-7 lg:pt-1">
          <p className="leading-8 text-body">{article.excerpt}</p>
          <Link className="focus-ring group inline-flex items-center gap-2 self-start text-sm font-medium text-ink transition-colors hover:text-accent" href={`/journal/${article.slug}`}>
            <span>مطالعه یادداشت</span>
            <ArrowIcon className="size-4 rotate-180 transition-transform group-hover:-translate-x-1" />
          </Link>
        </div>
      </div>

      {article.coverImage ? (
        <figure className="mt-9 overflow-hidden border border-line bg-surface lg:mr-[6.5rem]">
          <Image
            alt={article.coverImage.alt}
            className="h-auto w-full"
            height={article.coverImage.height}
            sizes="(max-width: 1024px) 100vw, 82vw"
            src={article.coverImage.src}
            width={article.coverImage.width}
          />
        </figure>
      ) : null}
    </article>
  );
}
