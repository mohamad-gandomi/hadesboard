import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CtaSection } from "@/components/content/cta-section";
import { ArticleContent } from "@/components/journal/article-content";
import { ArticleHero } from "@/components/journal/article-hero";
import { RelatedArticles } from "@/components/journal/related-articles";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { articles, getArticleBySlug, getRelatedArticles } from "@/data/journal";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) return { title: "یادداشت پیدا نشد" };

  return {
    title: article.title,
    description: article.excerpt,
    authors: [{ name: "HadesBoard" }],
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      publishedTime: article.dateTime,
    },
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const relatedArticles = getRelatedArticles(article.slug);

  return (
    <>
      <Header />
      <main id="top">
        <article>
          <ArticleHero article={article} />
          <ArticleContent sections={article.content} />
        </article>
        <RelatedArticles articles={relatedArticles} />
        <CtaSection
          action={{ label: "شرح پروژه", href: "/contact" }}
          description="اگر این پرسش‌ها به مسئله‌ای در محصول یا وب‌سایت شما نزدیک‌اند، می‌توانیم از یک توضیح کوتاه شروع کنیم."
          label="گام بعدی / گفت‌وگو درباره پروژه"
          title="یک تصمیم بهتر، معمولاً از یک پرسش روشن شروع می‌شود."
        />
      </main>
      <Footer />
    </>
  );
}
