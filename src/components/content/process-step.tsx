import type { ProcessItem } from "@/data/home";

type ProcessStepProps = { step: ProcessItem; isLast?: boolean };

export function ProcessStep({ step, isLast = false }: ProcessStepProps) {
  return (
    <li className="relative grid gap-4 pb-10 pr-10 sm:grid-cols-[9rem_1fr] sm:gap-8 sm:pb-12 sm:pr-12">
      <span className="absolute right-0 top-1 grid size-5 place-items-center border border-accent bg-canvas" aria-hidden="true">
        <span className="size-1 bg-accent" />
      </span>
      {!isLast ? <span className="absolute bottom-0 right-[9.5px] top-6 w-px bg-line" aria-hidden="true" /> : null}
      <div className="font-mono text-[10px] uppercase tracking-[0.12em] text-body" dir="ltr">{step.id} / {step.name}</div>
      <div>
        <h3 className="text-xl font-medium text-ink sm:text-2xl">{step.title}</h3>
        <p className="mt-2 max-w-xl leading-7 text-body">{step.description}</p>
      </div>
    </li>
  );
}
