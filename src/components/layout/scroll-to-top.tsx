"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";

export function ScrollToTop() {
  const pathname = usePathname();
  const previousPathname = useRef(pathname);

  useLayoutEffect(() => {
    if (previousPathname.current === pathname) return;

    previousPathname.current = pathname;
    window.scrollTo({ left: 0, top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}
