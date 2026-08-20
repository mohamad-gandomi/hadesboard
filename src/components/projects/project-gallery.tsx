import Image from "next/image";

import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";
import type { ProjectImage } from "@/data/projects";

type ProjectGalleryProps = {
  images: readonly ProjectImage[];
};

export function ProjectGallery({ images }: ProjectGalleryProps) {
  return (
    <section className="border-t border-line py-20 sm:py-28">
      <Container>
        <SectionLabel index="05">صفحات و جزئیات</SectionLabel>
        <h2 className="sr-only">صفحات و گالری پروژه</h2>
        <div className="mt-10 space-y-6 sm:mt-14 sm:space-y-10">
          {images.map((image, index) => (
            <figure className="relative overflow-hidden border border-line bg-surface" key={image.src}>
              <Image alt={image.alt} className="h-auto w-full" height={image.height} sizes="100vw" src={image.src} width={image.width} />
              <figcaption className="absolute bottom-3 left-3 border border-line bg-canvas/90 px-2 py-1 font-mono text-[8px] text-body" dir="ltr">
                SCREEN / {String(index + 1).padStart(2, "0")}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
