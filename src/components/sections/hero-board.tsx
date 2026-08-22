import Image from "next/image";

import { SystemLabel } from "@/components/ui/system-label";

export function HeroBoard() {
  return (
    <div className="flex flex-col justify-between border-t border-line py-7 md:border-r md:border-t-0 md:py-10 md:pr-8 lg:pr-10">
      <div className="flex items-center justify-between font-mono text-[9px] tracking-[0.12em] text-body" dir="ltr">
        <span>HB / BOARD 001</span>
        <span className="flex items-center gap-2"><span className="size-1.5 bg-accent" /> SYSTEM: ACTIVE</span>
      </div>
      <figure className="relative my-8 aspect-[4/3] overflow-hidden border border-line bg-surface md:my-10 md:aspect-[4/5]">
        <Image
          alt="فضای استودیوی هادس بورد با رابط‌های طراحی وب و طرح‌های اولیه روی میز"
          className="object-cover"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 34vw"
          src="/images/home-hero-studio.webp"
        />
        <figcaption className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-ink/80 px-3 py-2 font-mono text-[8px] tracking-[0.12em] text-white" dir="ltr">
          <span>STUDIO / FRAME 01</span>
          <span>X:35.70 / Y:51.40</span>
        </figcaption>
      </figure>
      <div>
        <SystemLabel code="PROJECT / 001" label="TYPE" value="WEB" />
        <SystemLabel code="DIRECTION / RTL" label="GRID" value="12 COL" />
        <SystemLabel code="STATUS / READY" label="MODE" value="BUILD" />
      </div>
    </div>
  );
}
