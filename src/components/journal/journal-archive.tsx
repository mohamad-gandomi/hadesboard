import { ArticleArchiveItem } from "@/components/journal/article-archive-item";
import { Container } from "@/components/ui/container";
import type { Article } from "@/data/journal";

type JournalArchiveProps = {
  articles: readonly Article[];
};

export function JournalArchive({ articles }: JournalArchiveProps) {
  return (
    <section className="pb-24 sm:pb-32" aria-labelledby="journal-archive-title">
      <Container>
        <h2 className="sr-only" id="journal-archive-title">فهرست یادداشت‌ها</h2>
        <div>
          {articles.map((article) => <ArticleArchiveItem article={article} key={article.id} />)}
        </div>
      </Container>
    </section>
  );
}
