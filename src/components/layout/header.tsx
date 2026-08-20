import Link from "next/link";

import { MobileMenu } from "@/components/layout/mobile-menu";
import { BrandMark } from "@/components/ui/brand-mark";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-canvas md:bg-canvas/95 md:backdrop-blur-sm">
      <Container className="flex h-20 items-center justify-between lg:h-24">
        <Link aria-label="صفحه اصلی هادس بورد" className="focus-ring flex items-center gap-3" href="/">
          <BrandMark className="size-9" />
          <span className="text-lg font-medium tracking-tight">{siteConfig.englishName}</span>
        </Link>

        <nav aria-label="فهرست اصلی" className="hidden md:block">
          <ul className="flex items-center gap-6 lg:gap-9">
            {siteConfig.navigation.map((item) => (
              <li key={item.href}>
                <Link className="focus-ring text-sm text-body transition-colors hover:text-ink" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" showArrow={false}>شروع پروژه</Button>
        </div>
        <MobileMenu />
      </Container>
    </header>
  );
}
