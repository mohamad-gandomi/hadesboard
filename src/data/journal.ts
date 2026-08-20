import { beautifulIsNotAlwaysGood } from "@/data/articles/beautiful-is-not-always-good";
import { beforeWebDesign } from "@/data/articles/before-web-design";
import { professionalWebsite } from "@/data/articles/professional-website";
import type { Article } from "@/data/articles/types";

export type { Article, ArticleSection } from "@/data/articles/types";

export const articles = [
  beautifulIsNotAlwaysGood,
  professionalWebsite,
  beforeWebDesign,
] as const satisfies readonly Article[];

export function getArticleBySlug(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function getRelatedArticles(slug: string, limit = 2) {
  return articles.filter((article) => article.slug !== slug).slice(0, limit);
}
