"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { ArrowIcon } from "@/components/ui/arrow-icon";
import { contactChannels } from "@/data/contact";
import { siteConfig } from "@/lib/site";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const pageContent = [document.querySelector("main"), document.querySelector("footer")];
    const closeMenu = () => {
      setOpen(false);
      requestAnimationFrame(() => triggerRef.current?.focus());
    };
    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
      if (event.key !== "Tab") return;

      const links = [...(panelRef.current?.querySelectorAll<HTMLElement>("a[href]") ?? [])];
      const first = links.at(0);
      const last = links.at(-1);

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.body.style.overflow = "hidden";
    pageContent.forEach((element) => element?.setAttribute("inert", ""));
    document.addEventListener("keydown", handleKeyboard);
    panelRef.current?.querySelector<HTMLElement>("a[href]")?.focus();

    return () => {
      document.body.style.overflow = "";
      pageContent.forEach((element) => element?.removeAttribute("inert"));
      document.removeEventListener("keydown", handleKeyboard);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        aria-controls={menuId}
        aria-expanded={open}
        aria-label={open ? "بستن فهرست" : "باز کردن فهرست"}
        className={`focus-ring relative z-50 flex h-11 w-fit items-center justify-between gap-3 border px-3 text-canvas transition-colors ${
          open
            ? "border-accent bg-accent"
            : "border-ink bg-ink hover:bg-accent"
        }`}
        onClick={() => setOpen((current) => !current)}
        ref={triggerRef}
        type="button"
      >
        <span className="whitespace-nowrap font-mono text-[9px] tracking-[0.12em]" dir="ltr" aria-hidden="true">
          {open ? "CLOSE / ESC" : "MENU"}
        </span>
        <span className="flex w-5 flex-col gap-1.5" aria-hidden="true">
          <span className={`h-px bg-current transition-transform ${open ? "translate-y-[3.5px] rotate-45" : ""}`} />
          <span className={`h-px bg-current transition-transform ${open ? "-translate-y-[3.5px] -rotate-45" : ""}`} />
        </span>
      </button>

      {open ? (
        <div
          aria-label="فهرست اصلی"
          aria-modal="true"
          className="fixed inset-0 z-40 min-h-dvh overflow-y-auto bg-canvas px-5 pb-8 pt-28"
          id={menuId}
          ref={panelRef}
          role="dialog"
        >
          <nav aria-label="فهرست موبایل" className="flex min-h-[calc(100dvh-9rem)] flex-col justify-between gap-10">
            <ul>
              {siteConfig.navigation.map((item, index) => (
                <li className="border-t border-line" key={item.href}>
                  <Link
                    className="focus-ring flex items-center justify-between py-5 text-2xl text-ink"
                    href={item.href}
                    onClick={() => setOpen(false)}
                  >
                    <span>{item.label}</span>
                    <span className="font-mono text-[10px] text-body" dir="ltr">
                      0{index + 1}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div>
              <p className="mb-3 font-sans text-[9px] tracking-[0.12em] text-muted" dir="rtl">
                گام بعدی / درخواست پروژه
              </p>
              <Link
                className="button-primary focus-ring flex min-h-12 items-center justify-between border px-5 text-sm font-medium transition-colors"
                href="/contact"
                onClick={() => setOpen(false)}
              >
                <span>شروع پروژه</span>
                <ArrowIcon className="size-4 rotate-180" />
              </Link>
              <div className="mt-8 border-t border-line pt-5">
                <p className="mb-4 text-xs font-medium text-body">ارتباط مستقیم</p>
                <div className="grid grid-cols-2 gap-x-5 gap-y-3 text-xs text-muted">
                  {contactChannels.map((channel) => (
                    <a
                      className="focus-ring transition-colors hover:text-ink"
                      href={channel.href}
                      key={channel.id}
                      onClick={() => setOpen(false)}
                      rel={channel.external ? "noopener noreferrer" : undefined}
                      target={channel.external ? "_blank" : undefined}
                    >
                      {channel.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
