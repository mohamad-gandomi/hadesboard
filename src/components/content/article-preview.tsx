import Image from "next/image";
import Link from "next/link";

import { TextLink } from "@/components/ui/text-link";
import type { Article } from "@/data/journal";

type ArticlePreviewProps = { article: Article };

export function ArticlePreview({ article }: ArticlePreviewProps) {
  return (
    <article className={`group grid border-t border-line py-6 sm:border-l sm:px-6 sm:last:border-l-0 ${article.coverImage ? "grid-rows-[auto_auto_auto_1fr_auto]" : "grid-rows-[auto_auto_1fr_auto]"}`}>
      <div className="flex items-center justify-between text-xs text-muted">
        <span>{article.category}</span>
        <span className="font-mono text-[10px]" dir="ltr">ARTICLE / {article.id}</span>
      </div>
      {article.coverImage ? (
        <Link
          aria-label={`مطالعه مقاله: ${article.title}`}
          className="focus-ring group/image mt-6 block"
          href={`/journal/${article.slug}`}
        >
          <figure className="relative aspect-[16/10] overflow-hidden border border-line bg-surface">
            <Image
              alt={article.coverImage.alt}
              className="transform-gpu object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:transition-none group-hover/image:scale-[1.015]"
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              src={article.coverImage.src}
            />
          </figure>
        </Link>
      ) : null}
      <p className="mt-6 flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted">
        <time dateTime={article.dateTime}>{article.date}</time>
        <span aria-hidden="true">/</span>
        <span>{article.readingTime}</span>
      </p>
      <h3 className="type-article-preview mt-4 self-start font-medium text-ink">{article.title}</h3>
      <div className="mt-6 min-h-6">
        <TextLink href={`/journal/${article.slug}`}>مطالعه مقاله</TextLink>
      </div>
    </article>
  );
}
