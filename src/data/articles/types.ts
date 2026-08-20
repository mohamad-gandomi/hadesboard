export type ArticleCover = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type ArticleSection = {
  id: string;
  title: string;
  paragraphs: readonly string[];
  points?: readonly string[];
};

export type Article = {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  dateTime: string;
  readingTime: string;
  excerpt: string;
  coverImage?: ArticleCover;
  content: readonly ArticleSection[];
};
