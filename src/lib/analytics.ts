// Centralized analytics + click tracking helpers.
// Pushes to GA4 (gtag) and GTM (dataLayer) when present.
// Safe to call even when nothing is loaded.

type Params = Record<string, string | number | boolean | undefined | null>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const trackEvent = (event: string, params: Params = {}) => {
  if (typeof window === "undefined") return;
  const cleaned = Object.fromEntries(
    Object.entries(params).filter(([, v]) => v !== undefined && v !== null),
  );
  try {
    window.gtag?.("event", event, cleaned);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event, ...cleaned });
  } catch {
    /* no-op */
  }
};

export const trackConversion = (id: string, params: Params = {}) => {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("event", "conversion", { send_to: id, ...params });
  } catch {
    /* no-op */
  }
};

// WhatsApp click — used by every CTA/triagem button
export const trackWhatsApp = (source: string, extra: Params = {}) => {
  trackEvent("whatsapp_click", { source, ...extra });
};

// CTA click — used by primary buttons
export const trackCTA = (label: string, location: string, extra: Params = {}) => {
  trackEvent("cta_click", { label, location, ...extra });
};