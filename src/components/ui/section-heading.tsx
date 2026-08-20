import type { ReactNode } from "react";

import { SectionLabel } from "@/components/ui/section-label";

type SectionHeadingProps = {
  eyebrow: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  index?: string;
  align?: "start" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  index,
  align = "start",
  tone = "light",
}: SectionHeadingProps) {
  const titleColor = tone === "dark" ? "text-canvas" : "text-ink";
  const descriptionColor = tone === "dark" ? "text-canvas/60" : "text-body";

  return (
    <div className={align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      <div className={align === "center" ? "flex justify-center" : ""}>
        <SectionLabel index={index} tone={tone}>{eyebrow}</SectionLabel>
      </div>
      <h2 className={`type-section mt-7 max-w-4xl text-balance font-medium ${titleColor}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 max-w-2xl text-pretty text-base leading-8 sm:text-lg ${descriptionColor}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}
