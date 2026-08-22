import Link from "next/link";

import { BrandMark } from "@/components/ui/brand-mark";
import { Container } from "@/components/ui/container";
import { Divider } from "@/components/ui/divider";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="py-10 sm:py-14">
      <Container>
        <div className="grid gap-10 pb-12 md:grid-cols-[1fr_auto] md:items-start">
          <div>
            <div className="flex items-center gap-3 text-ink">
              <BrandMark className="size-9" />
              <span className="text-lg font-medium">{siteConfig.englishName}</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-7 text-body">طراحی و توسعه با دقت، برای تجربه‌های بهتر در وب فارسی.</p>
          </div>
          <nav aria-label="فهرست پایین صفحه">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-4 text-sm text-body sm:grid-cols-5">
              {siteConfig.footerNavigation.map((item) => (
                <li key={item.href}><Link className="focus-ring transition-colors hover:text-ink" href={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          </nav>
        </div>
        <Divider />
        <div className="flex flex-col items-center gap-4 pt-6 text-center text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:text-right">
          <p>© هادس بورد — همه حقوق محفوظ است.</p>
          <Link className="focus-ring transition-colors hover:text-ink" href="#top">بازگشت به بالا ↑</Link>
        </div>
      </Container>
    </footer>
  );
}
