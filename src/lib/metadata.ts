import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  type?: "article" | "website";
  publishedTime?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  type = "website",
  publishedTime,
}: PageMetadataOptions): Metadata {
  const canonicalPath = path === "/" ? "/" : `${path.replace(/\/$/, "")}/`;
  const socialTitle = `${title} | ${siteConfig.englishName}`;
  const socialImage = {
    url: "/opengraph-image.png",
    width: 1200,
    height: 630,
    alt: `${siteConfig.name} — استودیوی طراحی و توسعه وب`,
  };

  const openGraph: Metadata["openGraph"] = type === "article"
    ? {
        type: "article",
        title: socialTitle,
        description,
        url: canonicalPath,
        siteName: siteConfig.englishName,
        locale: "fa_IR",
        images: [socialImage],
        publishedTime,
      }
    : {
        type: "website",
        title: socialTitle,
        description,
        url: canonicalPath,
        siteName: siteConfig.englishName,
        locale: "fa_IR",
        images: [socialImage],
      };

  return {
    title,
    description,
    alternates: { canonical: canonicalPath },
    openGraph,
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [socialImage.url],
    },
  };
}
