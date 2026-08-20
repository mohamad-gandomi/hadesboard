import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

import { ArrowIcon } from "@/components/ui/arrow-icon";

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "inverse" | "text";
  showArrow?: boolean;
  className?: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "className">;

const variants = {
  primary: "button-primary",
  secondary: "border-line text-ink hover:border-ink",
  inverse: "button-inverse",
  text: "border-transparent px-0 text-ink hover:text-accent",
} as const;

export function Button({
  children,
  href,
  variant = "primary",
  showArrow = true,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <Link
      className={`focus-ring inline-flex min-h-11 items-center justify-center gap-3 border px-5 py-2.5 text-sm font-medium transition-colors ${variants[variant]} ${className}`}
      href={href}
      {...props}
    >
      <span>{children}</span>
      {showArrow ? <ArrowIcon className="size-4 rotate-180" /> : null}
    </Link>
  );
}
