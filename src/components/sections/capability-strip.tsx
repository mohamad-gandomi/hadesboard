import { Container } from "@/components/ui/container";
import { capabilities } from "@/data/home";

export function CapabilityStrip() {
  return (
    <section aria-label="توانمندی‌ها" className="border-b border-line">
      <Container className="grid sm:grid-cols-2 lg:grid-cols-[auto_repeat(4,1fr)]">
        <p className="border-b border-line py-5 font-mono text-[10px] tracking-[0.12em] text-accent sm:col-span-2 lg:col-span-1 lg:border-b-0 lg:border-l lg:pl-7" dir="ltr">
          CAPABILITIES
        </p>
        {capabilities.map((capability) => (
          <p className="border-b border-line py-5 text-sm text-body odd:sm:border-l odd:sm:pl-5 lg:border-b-0 lg:border-l lg:px-5" key={capability}>
            {capability}
          </p>
        ))}
      </Container>
    </section>
  );
}
