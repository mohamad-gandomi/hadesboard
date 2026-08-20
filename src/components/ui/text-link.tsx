import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { ArrowIcon } from "@/components/ui/arrow-icon";

type TextLinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
  tone?: "light" | "dark";
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

export function TextLink({ children, href, className = "", tone = "light", ...props }: TextLinkProps) {
  const color = tone === "dark" ? "text-canvas hover:text-white" : "text-ink hover:text-accent";

  return (
    <Link
      className={`focus-ring group inline-flex items-center gap-2 text-sm font-medium transition-colors ${color} ${className}`}
      href={href}
      {...props}
    >
      <span>{children}</span>
      <ArrowIcon className="size-4 rotate-180 transition-transform group-hover:-translate-x-1" />
    </Link>
  );
}
