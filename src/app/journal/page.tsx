import { JournalArchive } from "@/components/journal/journal-archive";
import { JournalHero } from "@/components/journal/journal-hero";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { articles } from "@/data/journal";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "مجله طراحی و توسعه وب",
  description: "یادداشت‌های هادس بورد درباره طراحی تجربه کاربر، توسعه وب و تصمیم‌های پیش از ساخت یک محصول دیجیتال.",
  path: "/journal",
});

export default function JournalPage() {
  return (
    <>
      <Header />
      <main id="top">
        <JournalHero />
        <JournalArchive articles={articles} />
      </main>
      <Footer />
    </>
  );
}
