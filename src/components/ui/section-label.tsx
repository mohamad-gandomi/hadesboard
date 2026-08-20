import type { ReactNode } from "react";

type SectionLabelProps = {
  children: ReactNode;
  index?: string;
  tone?: "light" | "dark";
};

export function SectionLabel({ children, index, tone = "light" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 text-xs font-medium ${tone === "dark" ? "text-canvas/60" : "text-body"}`}>
      {index ? <span className={tone === "dark" ? "text-canvas" : "text-accent"}>{index}</span> : null}
      <span className={`h-px w-8 ${tone === "dark" ? "bg-canvas/25" : "bg-line"}`} aria-hidden="true" />
      <span className="tracking-wide">{children}</span>
    </div>
  );
}
