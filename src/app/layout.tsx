import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import "./globals.css";

import { DeferredGoogleAnalytics } from "@/components/analytics/deferred-google-analytics";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { ravi } from "@/lib/fonts";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.englishName,
  title: {
    default: `${siteConfig.englishName} | استودیوی طراحی و توسعه وب`,
    template: `%s | ${siteConfig.englishName}`,
  },
  description: siteConfig.description,
  keywords: ["طراحی سایت", "توسعه وب", "طراحی تجربه کاربر", "طراحی رابط کاربری", "وب‌اپلیکیشن", "فروشگاه اینترنتی"],
  authors: [{ name: siteConfig.englishName, url: siteConfig.url }],
  creator: siteConfig.englishName,
  publisher: siteConfig.englishName,
  category: "technology",
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "fa_IR",
    url: "/",
    siteName: siteConfig.englishName,
    title: `${siteConfig.englishName} | استودیوی طراحی و توسعه وب`,
    description: siteConfig.description,
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: `${siteConfig.name} — استودیوی طراحی و توسعه وب` }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.englishName} | استودیوی طراحی و توسعه وب`,
    description: siteConfig.description,
    images: ["/opengraph-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
};

export const viewport: Viewport = {
  colorScheme: "light",
  themeColor: "#f5f3ed",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.name,
      alternateName: siteConfig.englishName,
      url: siteConfig.url,
      logo: `${siteConfig.url}/icon-512.png`,
      email: siteConfig.email,
      telephone: siteConfig.telephone,
      sameAs: siteConfig.socialLinks,
    },
    {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.englishName,
      description: siteConfig.description,
      inLanguage: "fa-IR",
      publisher: { "@id": `${siteConfig.url}/#organization` },
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html className={ravi.variable} dir="rtl" lang="fa">
      <body>
        <script dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} type="application/ld+json" />
        <ScrollToTop />
        {children}
      </body>
      <DeferredGoogleAnalytics gaId={siteConfig.googleAnalyticsId} />
    </html>
  );
}
