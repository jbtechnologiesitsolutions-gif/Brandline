import { useEffect } from "react";
import { BRAND_SETTINGS_KEY, defaultBrandSettings, readJson, type BrandSettings } from "@/lib/admin-control";

function apply(settings: BrandSettings) {
  const root = document.documentElement;
  root.style.setProperty("--primary", settings.primary);
  root.style.setProperty("--accent", settings.secondary);
  root.style.setProperty("--background", settings.background);
  root.style.setProperty("--foreground", settings.foreground);
  root.style.setProperty("--card", settings.surface);
  root.style.setProperty("--ring", settings.primary);
  document.querySelectorAll<HTMLLinkElement>('link[rel="icon"]').forEach((link) => { if (settings.faviconUrl) link.href = settings.faviconUrl; });
}

export function FrontendBrandingRuntime() {
  useEffect(() => {
    const sync = () => apply(readJson(BRAND_SETTINGS_KEY, defaultBrandSettings));
    sync();
    window.addEventListener("storage", sync);
    window.addEventListener("brandline:brand-settings-updated", sync as EventListener);
    return () => {
      window.removeEventListener("storage", sync);
      window.removeEventListener("brandline:brand-settings-updated", sync as EventListener);
    };
  }, []);
  return null;
}
