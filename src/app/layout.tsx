import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "./globals.css";

import { ravi } from "@/lib/fonts";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.englishName} | استودیوی طراحی و توسعه وب`,
    template: `%s | ${siteConfig.englishName}`,
  },
  description: siteConfig.description,
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f5f3ed",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html className={ravi.variable} dir="rtl" lang="fa">
      <body>{children}</body>
    </html>
  );
}
