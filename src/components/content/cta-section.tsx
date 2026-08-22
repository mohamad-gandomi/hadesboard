import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";

type CtaSectionProps = {
  label: string;
  title: string;
  description: string;
  action?: { label: string; href: string };
};

export function CtaSection({ label, title, description, action }: CtaSectionProps) {
  return (
    <section className="border-y border-ink bg-ink py-16 text-canvas sm:py-24" id="contact">
      <Container className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
        <div>
          <p className="font-sans text-[10px] tracking-[0.14em] text-canvas/60" dir="rtl">{label}</p>
          <h2 className="type-section mt-6 max-w-3xl text-balance font-medium">{title}</h2>
          <p className="mt-5 max-w-xl leading-8 text-canvas/65">{description}</p>
        </div>
        {action ? <Button href={action.href} variant="inverse">{action.label}</Button> : null}
      </Container>
    </section>
  );
}
