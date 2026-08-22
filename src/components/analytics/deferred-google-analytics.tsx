"use client";

import { GoogleAnalytics } from "@next/third-parties/google";
import { useEffect, useState } from "react";

type DeferredGoogleAnalyticsProps = {
  gaId: string;
};

export function DeferredGoogleAnalytics({ gaId }: DeferredGoogleAnalyticsProps) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(() => setIsReady(true), { timeout: 4000 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = globalThis.setTimeout(() => setIsReady(true), 2500);
    return () => globalThis.clearTimeout(timeoutId);
  }, []);

  return isReady ? <GoogleAnalytics gaId={gaId} /> : null;
}
