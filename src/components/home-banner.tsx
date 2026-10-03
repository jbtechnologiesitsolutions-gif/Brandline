import { useEffect, useState } from "react";
import {
  DEFAULT_HOME_BANNER_SETTINGS,
  getHomeBannerFile,
  getHomeBannerSettings,
  type HomeBannerSettings,
} from "@/lib/home-banner-store";

export function HomeBanner() {
  const [settings, setSettings] = useState<HomeBannerSettings>(DEFAULT_HOME_BANNER_SETTINGS);
  const [customUrl, setCustomUrl] = useState<string | null>(null);

  useEffect(() => {
    let activeObjectUrl: string | null = null;

    async function loadBanner() {
      const nextSettings = getHomeBannerSettings();
      setSettings(nextSettings);

      try {
        const file = await getHomeBannerFile();
        if (file) {
          activeObjectUrl = URL.createObjectURL(file);
          setCustomUrl(activeObjectUrl);
        } else {
          setCustomUrl(null);
        }
      } catch {
        setCustomUrl(null);
      }
    }

    void loadBanner();

    const refresh = () => {
      if (activeObjectUrl) {
        URL.revokeObjectURL(activeObjectUrl);
        activeObjectUrl = null;
      }
      void loadBanner();
    };

    window.addEventListener("brandline:home-banner-updated", refresh);
    window.addEventListener("storage", refresh);

    return () => {
      window.removeEventListener("brandline:home-banner-updated", refresh);
      window.removeEventListener("storage", refresh);
      if (activeObjectUrl) URL.revokeObjectURL(activeObjectUrl);
    };
  }, []);

  if (!settings.enabled) return null;

  const source = customUrl ?? "/brandline-home-banner.mp4";
  const mediaType = customUrl ? settings.mediaType : "video";
  const mediaClass = `absolute inset-0 h-full w-full ${
    settings.objectFit === "contain" ? "object-contain" : "object-cover"
  }`;

  return (
    <section className="relative h-[100svh] min-h-[34rem] w-full overflow-hidden bg-[#AAA7A7]">
      {mediaType === "image" ? (
        <img
          src={source}
          alt="BrandlineTech home banner"
          className={mediaClass}
          style={{ objectPosition: settings.objectPosition }}
        />
      ) : (
        <video
          className={mediaClass}
          style={{ objectPosition: settings.objectPosition }}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-label="BrandlineTech home banner"
        >
          <source src={source} />
        </video>
      )}
    </section>
  );
}
