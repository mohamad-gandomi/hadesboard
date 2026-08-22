import { ArticlePreview } from "@/components/content/article-preview";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TextLink } from "@/components/ui/text-link";
import { articles } from "@/data/journal";

export function Insights() {
  return (
    <section className="section-space" id="journal">
      <Container>
        <SectionHeading
          description="یادداشت‌های هادس بورد درباره تصمیم‌هایی که طراحی، توسعه و مسیر ساخت یک محصول دیجیتال را بهتر می‌کنند."
          eyebrow="مجله"
          index="09"
          title="یادداشت‌هایی برای تصمیم‌های بهتر در وب."
        />
        <div className="mt-14 grid sm:grid-cols-3 lg:mt-20">
          {articles.map((article) => <ArticlePreview article={article} key={article.id} />)}
        </div>
        <div className="mt-8 flex justify-start sm:justify-end" dir="rtl">
          <TextLink href="/journal">مشاهده همه یادداشت‌ها</TextLink>
        </div>
      </Container>
    </section>
  );
}
