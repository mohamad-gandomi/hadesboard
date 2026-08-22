import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { TextLink } from "@/components/ui/text-link";
import { HeroBoard } from "@/components/sections/hero-board";

export function Hero() {
  return (
    <section className="border-b border-line">
      <Container className="grid items-stretch md:min-h-[calc(100svh-5rem)] md:grid-cols-[minmax(0,1.32fr)_minmax(18rem,.68fr)] lg:min-h-[calc(100svh-6rem)]">
        <div className="grid-lines flex flex-col justify-center py-16 md:pl-14 lg:py-24 lg:pl-20">
          <div className="mb-9 flex items-center gap-3 text-xs text-body">
            <span className="size-1.5 bg-accent" />
            <span>استودیوی طراحی و توسعه وب</span>
            <span className="hidden font-mono text-[9px] tracking-[0.12em] text-muted sm:inline" dir="ltr">HB / STUDIO 001</span>
          </div>
          <h1 className="type-hero max-w-3xl text-pretty font-medium text-ink">
            <span className="block">تجربه‌ای روشن</span>
            <span className="block">برای کاربر؛</span>
            <span className="block">مؤثر برای کسب‌وکار.</span>
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-base leading-8 text-body sm:text-lg sm:leading-9">
            در هادس بورد، طراحی سنجیده و توسعه اصولی کنار هم قرار می‌گیرند تا محصولی زیبا، کاربردی و قابل اتکا بسازیم.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Button href="/contact">شروع پروژه</Button>
            <TextLink href="#projects">مشاهده نمونه‌کارها</TextLink>
          </div>
        </div>
        <HeroBoard />
      </Container>
    </section>
  );
}
